open Component_defs
open Vector


let init () = ()

let time = ref 0.0

let absF f = if f > 0.0 then f else (f *. -1.0)

let notNul f = if f > 0.0 then  1. else if f < 0.0 then -.1. else 0. 

let maxF a b = if a >= b then a else b

let move_to e1 e2 = 
  let posE1 = Position.get e1 in
  let posE2 = Position.get e2 in
  let vecE1 = Velocity.get e1 in
  let distX =   posE2.x -. posE1.x in
  let distY =   posE2.y -. posE1.y in
  let _dist = Float.sqrt ((distX**2.) +. (distY**2.)) in
  let anim = Surface.get e1 in
  let stats = Statistics.get e1 in
  let speed = stats.movespeed in
  let _max distX distY = if (absF distX) > (absF distY) then {x = (notNul distX) ; y = 0.} else  {x = 0. ; y = (notNul distY)} in

  (*Notre ennemie se déplace vers le joueur en prenant le x ou y le plus grand en premier.
    On a une marge de 20 pixels pour pas avoir un movement saccadé en diagonale.
   *)

  if (((absF distX) -. (absF distY)) > 20.)  then 
      Velocity.set e1 (Vector.mult speed {x = (notNul distX) ; y = 0.})
  else if (((absF distY) -. (absF distX)) > 20.) then  Velocity.set e1 (Vector.mult speed {x = 0.0 ; y = (notNul distY)});
  


  let newV = Velocity.get e1 in
  if not(Vector.is_equal vecE1 newV) then begin
    if ( (Vector.is_equal newV { x = -.speed; y = 0.0 }))then Texture.play_idle anim "left_walk" 
    else if ((Vector.is_equal newV { x = speed; y = 0.0 }))then Texture.play_idle anim "right_walk" 
    else if ((Vector.is_equal newV { x = 0.0; y = -.speed }))then Texture.play_idle anim "back_walk" 
    else if ((Vector.is_equal newV { x = 0.0 ; y = speed }))then Texture.play_idle anim "front_walk" 
  end







        
        

  
let update dt el =
  let delta_t = min (1. /. 60.) (1000. *.(dt -. !time)) in
  let player = fst (List.find (fun kv -> (String.compare (snd kv) "player")==0 ) (Name.members ())) in
  time := dt;
  List.iter (fun e ->
      if ((String.compare (Name.get e) "ennemy")==0) || ((String.compare (Name.get e) "skeleton")==0) then move_to e player;
      let pos = Position.get e in
      let speed = Vector.mult delta_t (Velocity.get e) in
      Position.set e ({ x = pos.x +. speed.x; y = pos.y +. speed.y })
    ) el
