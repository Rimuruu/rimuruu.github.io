open Component_defs
open Ecs


let create name x y palette map size=
let e = Entity.create () in
  Position.set e { x = x; y = y};
  Velocity.set e Vector.zero;
  Mass.set e infinity;
  Name.set e name;
  Surface.set e (Texture.create_tilemap palette map size);
  Priority.set e 0;
  (* systems *)


  e

