open Component_defs

open Ecs




let create x y name img stat text imgx imgy=
let e = Entity.create () in
  Position.set e { x = x; y = y};
  Box.set e { width = 30; height = 30};

  Velocity.set e Vector.zero;
  Name.set e name;
  Surface.set e (Texture.create_img_scale img 40 40 imgx imgy);
  TextD.set e {text = text; font="12px Verdana"; color = (Gfx.color 255 255 255 255); x=(x);y=(y+.50.); };
  Priority.set e 1;
  Statistics.set e stat;
  (* systems *)

  e

let changePos e x y =  
  let text = TextD.get e in
  Position.set e { x = x; y = y};
  TextD.set e {text with x=(x);y=(y+.50.); };
  ()


let changeSize e size = 
  let text = TextD.get e in
  let sizeT = (string_of_int size) in
  TextD.set e {text with font = (sizeT^"px Verdana"); };
  ()