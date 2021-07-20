open Component_defs
open System_defs
open Ecs




let create name x y xt yt=
let e = Entity.create () in
  Position.set e { x = x; y = y};
  Teleport.set e { x = xt; y = yt};
  Box.set e { width = 40; height = 40};
  BoxCollider.set e { width = 40; height = 40};
  Velocity.set e Vector.zero;
  Mass.set e infinity;
  Name.set e name;
  Surface.set e Texture.black;
  Priority.set e 1;

  (* systems *)
  Draw_S.register e;
  Collision_S.register e;
  e


