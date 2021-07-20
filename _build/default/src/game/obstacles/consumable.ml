open Component_defs
open System_defs
open Ecs

let dead e=
  Collision_S.unregister e;
  Control_S.unregister e;
  Draw_S.unregister e; 
  Logic_S.unregister e;
  Active.set e false


let create x y img=
let e = Entity.create () in
  Position.set e { x = x; y = y};
  Box.set e { width = 40; height = 40};
  Name.set e "heart";
  Velocity.set e Vector.zero;
  Surface.set e (Texture.create_img img 40 40);
  Priority.set e 1;
  Active.set e true;
  BoxCollider.set e {width = 40; height=40 };
  
  (* systems *)


  e


