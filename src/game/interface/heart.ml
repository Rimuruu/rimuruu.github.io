open Component_defs
open System_defs
open Ecs




let create x y img=
let e = Entity.create () in
  Position.set e { x = x; y = y};
  Box.set e { width = 40; height = 40};
  BoxCollider.set e { width = 40; height = 40};
  Velocity.set e Vector.zero;
  Surface.set e (Texture.create_img img 40 40);
  Priority.set e 1;
  
  (* systems *)
  Draw_S.register e;

  e


