
open Ecs
open System_defs
open Component_defs
type room = { 
  index : int;
  id: Entity.t;
  ennemies : Entity.t list;
  obstacles : Entity.t list;
  value : int array array;
  doors : (bool*int) array;
}

type t = {
  player : Entity.t;
  mutable isPlaying : bool;
  currentRoom : room;
  map : room array;
  mutable floor : int;
  doors_entity : Entity.t array;
  walls_entity : Entity.t array;
  itempool : Entity.t list;
}

type t_interface = {
  vie_entity : Entity.t array;
  obj_entity : Entity.t list;
  background : Entity.t;
  e_info : Entity.t;
  f_info : Entity.t;
  pos : Vector.t;
}

type t_player_state = {
  mutable health : int;
}


let interface = ref {
  vie_entity = [||];
  obj_entity = [];
  background = Entity.dummy;
  e_info = Entity.dummy;
  f_info = Entity.dummy;
  pos = {x=20.;y=60.};
}



let player_state = ref {
  health = 3;
}

let state = ref {
  player = Entity.dummy;
  isPlaying = true;
  currentRoom = {id=Entity.dummy;obstacles=[];ennemies=[];index=(-1);value=[||];doors=[||]};
  map = [||];
  floor = 1;
  doors_entity = [|Entity.dummy;Entity.dummy;Entity.dummy;Entity.dummy|];
  walls_entity = [|Entity.dummy;Entity.dummy;Entity.dummy;Entity.dummy|];
  itempool = [];
}

let cpt = ref 0.0

let set_state b = !state.isPlaying <- b
let set_floor f = !state.floor <- f
let set_itempool ip = state := {!state with itempool = ip;}
let set_obj obj = interface := {!interface with obj_entity = obj;}


let get_player () = !state.player
let get_status ()= !state.isPlaying
let get_state () = !state
let get_obj () = !interface.obj_entity
let get_floor () = !state.floor

let load_ennemie e =
  Collision_S.register e;
  Control_S.register e;
  Draw_S.register e;
  Move_S.register e;
  Logic_S.register e

let unload_ennemie e =
  Collision_S.unregister e;
  Control_S.unregister e;
  Draw_S.unregister e;
  Move_S.unregister e;
  Logic_S.unregister e

let active_length l = 
  let rec aux l acc = 
    match l with
    | [] -> acc
    | e::t ->
        if (Active.has_component e) then
          begin
          if (Active.get e) then (aux t (acc+1))
          else (aux t (acc))
          end
        else (aux t (acc))  
  in
  aux l 0


let check_ennemies () = Array.fold_left (fun acc e -> if (active_length e.ennemies) > 0 then true else acc) false !state.map
let count_ennemies () = Array.fold_left (fun acc e -> (active_length e.ennemies+acc)) 0 !state.map

(*Lorsque l'on ajoute un prjectile ou un piège *)
let add_obstacle e = 
  let room = !state.currentRoom in
  let update = {room with obstacles=(e::(room.obstacles));}in
  Array.set !state.map room.index update;
  state := { !state with currentRoom = update;};
  ()

let _random_interval a b c d = 
  Random.self_init ();
  if (Random.int 2) == 0 then
    (Random.float (b-.a))+.a
  else 
    (Random.float (d-.c))+.c

let random_between a b = 
  Random.self_init ();
  (Random.int (b-a))+a

let random_between_float a b = 
  Random.self_init ();
  (Random.float (b-.a))+.a

let disable_heart e =
  Draw_S.unregister e;
  ()

let enable_heart e =
  Draw_S.register e;
  ()

(* Mise à jour des points de vie sur l'interface*)
let update_health () = 
  Array.iteri (fun i e -> if (i > (!player_state.health-1)) then disable_heart e else enable_heart e) !interface.vie_entity;
  if !player_state.health == 0 then !state.isPlaying <- false

(* Mise à jour du nombre d'ennemie en vie sur l'interface*)
let update_count_e () = 
    let c = count_ennemies () in
    let info = !interface.e_info in
    Info.changeText info (string_of_int c);
    ()

(* Mise à jour du numéro de l'étage sur l'interface*)
let update_count_f () = 
    let f = !state.floor in
    let info = !interface.f_info in
    Info.changeText info (string_of_int f);
    ()

(* Renvoie l'a porte opposé à la porte n. (0 droite,1 haut,2 gauche, 3 bas) *)
let door_f n =
  match n with 
  0 -> 2
  |1 -> 3
  |2 -> 0
  |3 -> 1
  |_ -> -1

(*Parmis les portes disponibles, on en prend une aléatoirement*)
let random_door room =
  Random.self_init ();
  let list = ref []in
     for i = 0 to (Array.length room.doors)-1 do
      let door = Array.get room.doors i in
      if (fst door == false) then list := i::(!list);
     done;
    List.nth !list (Random.int (List.length !list))

(* On génére la map, le chemin est linéaire mais les portes sont aléatoire*)
let path m = 
  let rec path_aux map room =
    let door = random_door room in
    match map with 
    |[] -> []
    |[x] -> 
      Array.set room.doors door  (true,x.index);
      Array.set x.doors (door_f door) (true,room.index);
      room::[x]
    | x::tail -> 
        Array.set room.doors door  (true,x.index);
        Array.set x.doors (door_f door) (true,room.index);
        room::(path_aux tail x) 

  in
  path_aux (List.tl m) (List.hd m) 


let spawnHeart img x y =
    let cons = Consumable.create x y img in
    add_obstacle cons;
    load_ennemie cons;
    ()

let shot heart_img projectile_img e =
  let pos = Position.get e in
  let ori = Orientation.get e in
  let stats = Statistics.get e in
  if (Sys.time () -. !cpt >= 0.75) then
  match ori.x,ori.y with
  | _,1. -> begin let projectile = Projectile.create "projectile" (pos.x+.10.) (pos.y+.10.) projectile_img (ori.x*.(stats.attackspeed)) (ori.y*.(stats.attackspeed)) "down_shot" stats.strength(spawnHeart heart_img)  in cpt:=Sys.time () ;add_obstacle projectile; () end
  | _,-1. -> begin let projectile = Projectile.create "projectile" (pos.x+.10.) (pos.y+.10.) projectile_img (ori.x*.(stats.attackspeed)) (ori.y*.(stats.attackspeed)) "up_shot" stats.strength (spawnHeart heart_img) in cpt:=Sys.time () ;add_obstacle projectile; () end
  | 1.,_ -> begin let projectile = Projectile.create "projectile" (pos.x+.10.) (pos.y+.10.) projectile_img (ori.x*.(stats.attackspeed)) (ori.y*.(stats.attackspeed)) "right_shot" stats.strength (spawnHeart heart_img) in cpt:=Sys.time () ;add_obstacle projectile; () end
  | -1.,_ -> begin let projectile = Projectile.create "projectile" (pos.x+.10.) (pos.y+.10.) projectile_img (ori.x*.(stats.attackspeed)) (ori.y*.(stats.attackspeed)) "left_shot" stats.strength (spawnHeart heart_img) in cpt:=Sys.time () ;add_obstacle projectile;  () end
  | _,_ ->  cpt:=Sys.time () ; () 
  else ()


let collisionMine e1 e2 =
    let name = Name.get e2 in
      if (String.compare name "player") == 0 then begin
        let vf = InvunerableFrame.get e2 in
        if vf == 0 then begin
          !player_state.health <- !player_state.health-1;
          update_health ();
          InvunerableFrame.set e2 65;
          Mine.destruction e1;
        end;
      end

  let collisionFireball e1 e2 =
    let name = Name.get e2 in
      if (String.compare name "player") == 0 then begin
        let vf = InvunerableFrame.get e2 in
        if vf == 0 then begin
          !player_state.health <- !player_state.health-1;
          update_health ();
          InvunerableFrame.set e2 65;
          Fireball.delete e1;
        end;
        
      end
      else if ((String.compare name "wall") == 0 ) ||((String.compare name "bottom") == 0 )||((String.compare name "top") == 0 )||((String.compare name "right") == 0 )||((String.compare name "left") == 0 ) then begin      
          Fireball.delete e1;
        end

let spawnMine img e = 
  let pos = Position.get e in
  let mine = Mine.create pos.x pos.y img in
  CollisionResolver.set mine collisionMine;
  load_ennemie mine;
  add_obstacle mine;
  ()

(*Vecteur en direction du joueur on normalise sinon la vitesse dépend de la distance entre l'ennemie et le joueur*)
let aimPlayer pos1 pos2 = 
  let diff = Vector.sub pos2 pos1 in
  (Vector.mult 200. (Vector.normalize diff))



let shotFireball img e = 
  let pos = Position.get e in
  let player = fst (List.find (fun kv -> (String.compare (snd kv) "player")==0 ) (Name.members ())) in
  let pos2 = Position.get player in
  let vel = aimPlayer pos pos2 in

  let fb = Fireball.create "fireball" pos.x pos.y img vel.x vel.y 1. in
  CollisionResolver.set fb collisionFireball;
  load_ennemie fb;
  add_obstacle fb;
  ()

let collisionEnnemy _ennemy e =
  let name = Name.get e in
 
    if (String.compare name "player") == 0 then begin
      let vf = InvunerableFrame.get e in
      if vf == 0 then begin
        !player_state.health <- !player_state.health-1;
        update_health ();
        InvunerableFrame.set e 65;
      end;
    end


let random_ennemy x y images=
  Random.self_init ();
  let r = random_between 0 3 in
  match r with 
  | 0 -> Gobelin.create x y (Hashtbl.find images "gobelin_img") (!state.floor)
  | 1 -> let spider = Spider.create x y (Hashtbl.find images "spider_img") (!state.floor) in  Cpt.set spider ({cpt = Sys.time (); action = (spawnMine (Hashtbl.find images "web_img")) }); spider
  | 2 -> let skeleton = Skeleton.create x y (Hashtbl.find images "skeleton_img") (!state.floor) in Cpt.set skeleton ({cpt = Sys.time (); action = (shotFireball (Hashtbl.find images "fireball_img")) }); skeleton
  | _ -> Gobelin.create x y (Hashtbl.find images "gobelin_img") (!state.floor)


(*Les ennemies spawn loin du milieu et des portes *)
let random_spawn () = 
  Random.self_init ();
  let r = random_between 0 4 in
  match r with 
  | 0 -> ((random_between_float 80. 240.), (random_between_float 160. 280.))
  | 1 -> ((random_between_float 540. 680.), (random_between_float 160. 280.))
  | 2 -> ((random_between_float 540. 680.), (random_between_float 400. 540.))
  | 3 -> ((random_between_float 80. 240.), (random_between_float 400. 540.))
  | _ -> ((random_between_float 80. 240.), (random_between_float 160. 280.))

let generate_ennemies nb images= 
  let rec aux  nb images= 
    match nb with 
    0 -> []
    | _ ->
      let spawn = random_spawn ()  in
      let x = fst spawn in
      let y = snd spawn in 
      let e = random_ennemy x y images in
      e::(aux (nb-1) images)
  in
  aux nb images

(* Génére une map de n salles*)
let generate_map a p n images=
let map = List.init n (fun e -> 
  let entity = Map.create "map" 0. 80. p a 40 in
  let floor = (get_state ()).floor in
  let nbEnnemies = (random_between floor (floor+2)) in
  let ennemies = generate_ennemies nbEnnemies images in
  List.iter (fun e -> CollisionResolver.set e collisionEnnemy) ennemies;
  let obstacles = [] in
  List.iter (fun e -> CollisionResolver.set e collisionMine) obstacles;
  {id=entity;ennemies=ennemies;obstacles=obstacles;index=e;value=a;doors=(Array.init 4 (fun _e -> (false,-1)))} 
  )in
  Array.of_list (path map)
  
let disable_door e =
  Draw_S.unregister e;
  Collision_S.unregister e;
  ()

let enable_door e =
  Draw_S.register e;
  Collision_S.register e;
  ()

let enable_wall e =
  Collision_S.register e;
  ()
      
let disable_wall e =
  Collision_S.unregister e;
  ()

(*Change les portes de la salle*)
let change_door () =
  let d = !state.currentRoom.doors in
  let d_e = !state.doors_entity in
  let w_e = !state.walls_entity in
  for i = 0 to 3 do
  if (fst (Array.get d i)) then begin
    enable_door (Array.get d_e i);
    disable_wall (Array.get w_e i);
    end
  else begin 
    disable_door (Array.get d_e i);
    enable_wall (Array.get w_e i);
    end
  done

let get_door name = 
  if (String.compare name "left")==0 then (Array.get !state.currentRoom.doors 0)
  else if (String.compare name "top")==0 then (Array.get !state.currentRoom.doors 1)
  else if (String.compare name "right")==0 then(Array.get !state.currentRoom.doors 2)
  else if (String.compare name "bottom")==0 then(Array.get !state.currentRoom.doors 3)
  else (false,1)


(* update l'interface*)
let update_obj () =
  let x = 55. in
  let y = 17.5 in
  List.iteri (fun i e ->
    Draw_S.register e;
    Objet.changePos e (120.+.(x*.(float_of_int i))) y;
    ) !interface.obj_entity;
  ()
  
(*Ajoute un item aléatoirement*)
let appenditem () =
    let itempool = !state.itempool in
    let obj_entity = !interface.obj_entity in
    let player = get_player () in
    let old_stats = Statistics.get player in
    Random.self_init ();
    let r = random_between 0 (List.length itempool)in
    let item = (List.nth itempool r) in
    set_itempool (List.filter (fun e -> e <> item) itempool);
    set_obj (item::obj_entity);
    Statistics.set player (Stats.addStat old_stats (Statistics.get item));
    update_obj ();
    ()


 (* Change de salle*)       
let change_room e =
  let name = Name.get e in
  let r = snd (get_door name) in
  let room = (Array.get !state.map r)in
  let old_room = !state.currentRoom in
  state := { !state with currentRoom = room;};
  List.iter (fun e -> unload_ennemie e) old_room.ennemies;
  List.iter (fun e ->
    if (Active.has_component e) then
      begin      
        if (Active.get e)then  load_ennemie e 
      end
    else ()
    ) room.ennemies;
  List.iter (fun e -> unload_ennemie e) old_room.obstacles;
  List.iter (fun e ->
  if (Active.has_component e) then
    begin      
      if (Active.get e)then  load_ennemie e 
    end
  else ()
  ) room.obstacles;
  change_door ()        

let collision door e = 
  let name = Name.get e in
  if (String.compare name "player") == 0 then begin
    change_room door;
    Position.set e (Teleport.get door);
  end
  else if (String.compare name "spider") == 0 then
    Wall.collision door e



let loot _player obj = 
  let name = Name.get obj in
  if (String.compare name "heart") == 0 then begin
      if !player_state.health < 3 then begin
        !player_state.health <- !player_state.health +1;
        update_health ();
        Consumable.dead obj
      end
  end    

  

(* Change d'étage*)
let change_floor map = 
  let floor = (get_state ()).floor in
  let player = fst (List.find (fun kv -> (String.compare (snd kv) "player")==0 ) (Name.members ())) in
  let itempool = !state.itempool in
  let obj = get_obj ()in
  if ((List.length itempool)>0) && ((List.length obj)<6) then begin appenditem (); end;
  List.iter (fun e -> unload_ennemie e) !state.currentRoom.obstacles;
  state := {!state with floor = floor+1;isPlaying = true; map = map;currentRoom=(Array.get map 0);};
  Draw_S.register !state.currentRoom.id;
  List.iter (fun e -> load_ennemie e) !state.currentRoom.ennemies;
  List.iter (fun e -> load_ennemie e) !state.currentRoom.obstacles;
  Position.set player {x=400.;y=340.};
  update_health ();  
  update_count_f (); 
  change_door ()

  



let init pe1 map images itempool=
  let doorsInit = [|(Door.create "left" 40. 320. 660. 320.);(Door.create "top" 400. 120. 400. 500.);(Door.create "right" 720. 320. 100. 320.);(Door.create "bottom" 400. 560. 400. 180.) |]in
  let wallsInit = [|(Wall.create 40. 320. 40 40);(Wall.create 400. 120. 40 40);(Wall.create 720. 320. 40 40);(Wall.create 400. 560. 40 40)|] in
  let e_info = Info.create 600. 25. "info_e" (Hashtbl.find images "e_info_img" ) "0" 35 35 40. 25. in
  let f_info = Info.create 700. 20. "info_f" (Hashtbl.find images "f_info_img") "0" 45 45 50. 30. in
  Array.iter (fun e -> CollisionResolver.set e collision) doorsInit;
  state := {  floor = 1; map = map;currentRoom=(Array.get map 0);isPlaying = true; player = pe1;doors_entity = doorsInit;walls_entity = wallsInit; itempool = itempool;};
  Draw_S.register !state.currentRoom.id;
  List.iter (fun e -> load_ennemie e) !state.currentRoom.ennemies;
  List.iter (fun e -> load_ennemie e) !state.currentRoom.obstacles;
  player_state := {health =3};
  CollisionResolver.set pe1 loot;
  interface := {!interface with f_info = f_info; e_info = e_info; obj_entity =[];  vie_entity = (Array.init 5 (fun e -> Heart.create ((20.*.(float_of_int e))+.20.) 20. (Hashtbl.find images "heart_img")));background = (Background.create 0. 0.)};
  update_health ();
  update_count_e ();
  update_count_f ();
  change_door ();
  () 

    






