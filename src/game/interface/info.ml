open Component_defs
open System_defs
open Ecs



let create x y name img text sizex sizey mx my=
let e = Entity.create () in
  Position.set e { x = x; y = y};
  Box.set e { width = sizex; height = sizey};
  BoxCollider.set e { width = sizex; height = sizey};
  Velocity.set e Vector.zero;
  Name.set e name;
  Surface.set e (Texture.create_img img 40 40);
  TextD.set e {text = text; font="18px Verdana"; color = (Gfx.color 255 255 255 255); x=(x+.mx);y=(y+.my); };
  Priority.set e 1;

  (* systems *)
  Draw_S.register e;
  e

let changePos e x y mx my=  
  let text = TextD.get e in
  Position.set e { x = x; y = y};
  TextD.set e {text with x=(x+.mx);y=(y+.my); };
  ()


let changeText e t =  
  let text = TextD.get e in
  TextD.set e {text with text=t };
  ()


let changeSize e size = 
  let text = TextD.get e in
  let sizeT = (string_of_int size) in
  TextD.set e {text with font = (sizeT^"px Verdana"); };
  ()