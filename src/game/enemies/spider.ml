open Component_defs
open System_defs
open Ecs


let create posX posY img lvl=
  Random.self_init ();
  let velX = (Random.int 75)+100 in
  let velY = (Random.int 75)+100 in
  let e = Entity.create () in
  let anim = Texture.create_animation img 9 1 40 40 40 40 in
  Position.set e { x = posX; y = posY};
  Velocity.set e { x = Float.of_int velX ; y = Float.of_int velY};
  Mass.set e 5.0;
  Box.set e {width = 50; height=50 };
  BoxCollider.set e {width = 40; height=35 };
  Name.set e "spider";
  Surface.set e anim;
  Texture.create_idle "front_walk" (0,8) anim;
  Priority.set e 2;
  Health.set e (1+((lvl-1) mod 3));
  Active.set e true;
  
  
  (* systems *)
  Cleaning_S.register e;
  
  e

let reset e x y = 
  Position.set e { x = x; y = y }

let stop e =
  Velocity.set e Vector.zero
  