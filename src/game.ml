
open Component_defs
let frameStart = ref 0.0
let frameEnd = ref 0.0
let frameCount = ref 0
let frameTimer = ref 0.0
let fps = 60.0
let frameDelay = 1. /. fps
let images = Hashtbl.create 20



let init_game _dt = 
  System.init_all ();

  (* Le joueur*)
  let player = Player.create "player" 400. 340. (Hashtbl.find images "player_img") in
  (* Les objets*)
  let itempool = [
    (Objet.create 10. 10. "Arc en cuivre" (Hashtbl.find images "item_img") {strength = 2.; attackspeed = 1.0; movespeed = 1.0;} "FOR+" 0 0);
    (Objet.create 10. 10. "Arc en argent" (Hashtbl.find images "item_img") {strength = 3.; attackspeed = 1.0; movespeed = 1.0;} "FOR++" 40 0);
    (Objet.create 10. 10. "Arc en or" (Hashtbl.find images "item_img") {strength = 4.; attackspeed = 1.0; movespeed = 1.0;} "FOR+++" 80 0);
    (Objet.create 10. 10. "Carquois en cuivre" (Hashtbl.find images "item_img") {strength = 1.; attackspeed = 1.5; movespeed = 1.0;} "VA+" 120 0);
    (Objet.create 10. 10. "Carquois en argent" (Hashtbl.find images "item_img") {strength = 1.; attackspeed = 2.0; movespeed = 1.0;} "VA++" 160 0);
    (Objet.create 10. 10. "Carquois en or" (Hashtbl.find images "item_img") {strength = 1.; attackspeed = 3.0; movespeed = 1.0;} "VA+++" 200 0);
    (Objet.create 10. 10. "Botte en cuivre" (Hashtbl.find images "item_img") {strength = 1.; attackspeed = 1.0; movespeed = 1.15;} "VIT+" 240 0);
    (Objet.create 10. 10. "Botte en argent" (Hashtbl.find images "item_img") {strength = 1.; attackspeed = 1.0; movespeed = 1.30;} "VIT++" 280 0);
    (Objet.create 10. 10. "Botte en or" (Hashtbl.find images "item_img") {strength = 1.; attackspeed = 1.0; movespeed = 1.45;} "VIT+++" 320 0)
  ]in
  (*Les inputs*)
  Input_handler.register_command (KeyDown "z") (fun () -> Player.move_up player);
  Input_handler.register_command (KeyDown "s") (fun () -> Player.move_down player);
  Input_handler.register_command (KeyDown "q") (fun () -> Player.move_left player);
  Input_handler.register_command (KeyDown "d") (fun () -> Player.move_right player);
  Input_handler.register_command (KeyUp "z") (fun () -> Player.stop "up" player);
  Input_handler.register_command (KeyUp "s") (fun () -> Player.stop "down" player);
  Input_handler.register_command (KeyUp "q") (fun () -> Player.stop "left" player);
  Input_handler.register_command (KeyUp "d") (fun () -> Player.stop "right" player);
  Input_handler.register_command (KeyDown " ") (fun () ->  Game_state.shot (Hashtbl.find images "heart_img") (Hashtbl.find images "projectile_img") player);
  (*Les inputs que l'on veut sauvegarder*)
  Input_handler.set_key "up" false;
  Input_handler.set_key "down" false;
  Input_handler.set_key "left" false;
  Input_handler.set_key "right" false;

  Game_state.set_floor 1;

  (* *)
  let map = Game_state.generate_map Global.map Global.palette 5 images in


  (*Murs du haut*)
  Game_state.enable_wall (Wall.create 40. 120. 360 40);
  Game_state.enable_wall (Wall.create 440. 120. 320 40);
  (*Murs du bas*)
  Game_state.enable_wall (Wall.create 40. 560. 360 40);
  Game_state.enable_wall (Wall.create 440. 560. 320 40);
  (*Murs de gauche*)
  Game_state.enable_wall (Wall.create 40. 160. 40 160);
  Game_state.enable_wall (Wall.create 40. 360. 40 200);
  (*Murs de droite*)
  Game_state.enable_wall (Wall.create 720. 160. 40 160);
  Game_state.enable_wall (Wall.create 720. 360. 40 200);
  
  Game_state.init player map images itempool;
  false

(*Écran de game over *)
let go_screen () = 
  let ctx = Draw_system.ctx in
  let r = Option.get !ctx in
  Gfx.clear_rect r 0 0 800 640;
  Gfx.fill_rect r (0) (0) 800 640 (Gfx.color 0 0 0 255);
  Gfx.draw_text r "Game Over" 250 300 "150px Verdana" (Gfx.color 255 255 255 255) 350. 1.;
  Gfx.draw_text r ("Score : "^(string_of_int (Game_state.get_floor ())) ) 350 350 "24px Verdana" (Gfx.color 255 255 255 255) 250. 1.;
  Gfx.draw_text r "Appuyez sur R pour recommencer" 285 385 "24px Verdana" (Gfx.color 255 255 255 255) 250. 1.


let play_game dt =
  (* Update all systems *)
  frameStart := Sys.time ();
  System.update_all dt;
  Game_state.update_count_e ();  
  frameEnd := (Sys.time ()) -. !frameStart;

  (*Si la frame n'a pas durée 1/60 seconds alors on attend*)
  while !frameEnd < frameDelay do frameEnd := (Sys.time ()) -. !frameStart; done;
  frameTimer := !frameTimer +. !frameEnd;
  incr frameCount;
  (*On vérfie si tous les ennemies sont morts si oui on change d'étage*)
  if not(Game_state.check_ennemies ()) then begin  let map = Game_state.generate_map Global.map Global.palette 5 images in Game_state.change_floor map; end;
  if !frameTimer >= 1.0 then begin Gfx.debug (Format.asprintf "fps : %d" !frameCount); frameTimer := 0.;frameCount:=0; end;
  
  if (not(Game_state.get_status ())) then false
  else true

let end_game _dt =
System.reset_all ();
Input_handler.reset_all ();

Input_handler.register_command (KeyUp "r") (fun () -> Game_state.set_state true);
go_screen ();
false 
 
let reset_game dt =
System.update_all dt;
go_screen ();
if (Game_state.get_status ()) then begin System.reset_all (); reset_all ();Input_handler.reset_all (); false end
else true 
 
(*Les images sont stockées dans une hashmap on fait un fold pour vérifié si elles sont chargées*)
let img_ready () = Hashtbl.fold (fun _ i acc -> (acc)&&(Gfx.image_ready i)) images true


let load_graphics _dt = 
  if (img_ready ()) then false
  else true

let chain_functions f_list = 
  let funs = ref f_list in
  fun dt -> match !funs with
            [] -> false
            | f :: ll -> 
              if f dt then
                true
              else begin
                funs := ll@[f];
                true
              end

let run () =  
  Hashtbl.add images "player_img" (Gfx.load_image ("src/img/charSheet.png"));
  Hashtbl.add images "gobelin_img" (Gfx.load_image ("src/img/gobelinSheet.png"));
  Hashtbl.add images "heart_img" (Gfx.load_image ("src/img/heart.png"));
  Hashtbl.add images "projectile_img" (Gfx.load_image ("src/img/projectilesheet.png"));
  Hashtbl.add images "item_img" (Gfx.load_image ("src/img/itemSheet.png"));
  Hashtbl.add images "e_info_img" (Gfx.load_image ("src/img/info_e.png"));
  Hashtbl.add images "f_info_img" (Gfx.load_image ("src/img/info_f.png"));
  Hashtbl.add images "spider_img" (Gfx.load_image ("src/img/spider.png"));
  Hashtbl.add images "web_img" (Gfx.load_image ("src/img/web.png"));
  Hashtbl.add images "skeleton_img" (Gfx.load_image ("src/img/skeleton-Sheet.png"));
  Hashtbl.add images "fireball_img" (Gfx.load_image ("src/img/fireball-Sheet.png"));
  let m = chain_functions [load_graphics;init_game;play_game;end_game;reset_game] in
  Gfx.main_loop m

               
              