open Component_defs
open Ecs
open System_defs

let destruction e =
  Collision_S.unregister e;
  Control_S.unregister e;
  Draw_S.unregister e;
  Move_S.unregister e;
  Logic_S.unregister e;
  Active.set e false

let create posX posY mine_img=
  let e = Entity.create () in
  Position.set e { x = posX; y = posY};
  Velocity.set e { x = 0.0; y = 0.0};
  Mass.set e infinity;
  Box.set e {width = 40; height=40 };
  BoxCollider.set e {width = 40; height=40 };
  Name.set e "mine";
  Surface.set e (Texture.create_img mine_img 40 40);
  Priority.set e 2;
  Active.set e true;

  (* systems *)
  Cleaning_S.register e;

  e

let reset e x y = 
  Position.set e { x = x; y = y }

let stop e =
  Velocity.set e Vector.zero 