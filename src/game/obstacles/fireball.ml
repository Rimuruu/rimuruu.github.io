open Component_defs
open System_defs
open Ecs

let delete e = 

  Move_S.unregister e;
  Draw_S.unregister e;
  Collision_S.unregister e;
  Active.set e false










let create name x y img velX velY degat =
  let e = Entity.create () in
  let anim = Texture.create_animation img 7 1 80 80 20 20 in
  Position.set e { x = x; y = y};
  Velocity.set e { x = velX; y = velY};
  Mass.set e infinity;
  Box.set e {width = 20; height=20 };
  BoxCollider.set e {width = 20; height=20 };
  Name.set e name;
  Surface.set e anim;
  Texture.create_idle "fireball_idle" (0,6) anim;
  Priority.set e 2;
  Active.set e true;
  Statistics.set e {strength = degat; attackspeed = 0.0; movespeed = 0.0;};
  (* systems *)

 
  e

