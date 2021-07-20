open Component_defs
open System_defs
open Ecs



let create name x y img=
  let e = Entity.create () in
  let anim = Texture.create_animation img 3 4 160 160 40 40 in
  Position.set e { x = x; y = y};
  Velocity.set e Vector.zero;
  Mass.set e infinity;
  Box.set e {width = 40; height=40 };
  BoxCollider.set e {width = 30; height=35 };
  Name.set e name;
  Surface.set e anim;
  Texture.create_idle "front_walk" (0,3) anim;
  Texture.create_idle "right_walk" (3,6) anim;
  Texture.create_idle "back_walk" (6,9) anim;
  Texture.create_idle "left_walk" (9,12) anim;
  Texture.create_idle "front" (0,1) anim;
  Texture.create_idle "right" (3,4) anim;
  Texture.create_idle "back" (6,7) anim;
  Texture.create_idle "left" (9,10) anim;
  Texture.play_idle anim "front";
  Orientation.set e {x = 0.; y = 1.};
  Priority.set e 2;
  InvunerableFrame.set e 0;
  Statistics.set e {strength = 1.0; attackspeed = 250.0; movespeed = 200.0;};
  (* systems *)
  Collision_S.register e;
  Control_S.register e;
  Draw_S.register e;
  Move_S.register e;
  Logic_S.register e;
  e

let reset e x y = 

  Position.set e { x = x; y = y }





let move_up e =
  let isPushed = Input_handler.get_key "up" in
  let stats = Statistics.get e in
  if not(isPushed) then begin
    let anim = Surface.get e in
    Input_handler.set_key "up" true;
    Texture.play_idle anim "back_walk";
    Velocity.set e { x = 0.0; y = -1. *.(stats.movespeed) };
    Orientation.set e {x = 0.; y = -1.}
  end
  
let move_down e =
  let isPushed = Input_handler.get_key "down" in
  let stats = Statistics.get e in
  if not(isPushed) then begin
    let anim = Surface.get e in
    Input_handler.set_key "down" true;
  Texture.play_idle anim "front_walk";
    Velocity.set e { x = 0.0; y = (stats.movespeed) };
    Orientation.set e {x = 0.; y = 1.}
  end

let move_right e =
  let isPushed = Input_handler.get_key "right" in
  let stats = Statistics.get e in
  if not(isPushed) then begin
    let anim = Surface.get e in
    Input_handler.set_key "right" true;
  Texture.play_idle anim "right_walk";
    Velocity.set e { x = (stats.movespeed); y = 0.0 };
    Orientation.set e {x = 1.; y = 0.}
  end
  
let move_left e =
  let isPushed = Input_handler.get_key "left" in
  let stats = Statistics.get e in
  if not(isPushed) then begin
    let anim = Surface.get e in
    Input_handler.set_key "left" true;
  Texture.play_idle anim "left_walk";
    Velocity.set e { x = -1. *.(stats.movespeed); y = 0.0 };
    Orientation.set e {x = -1.; y = 0.}
  end

(*Si le joueur n'appuie plus sur une touche mais continue d'appuyer sur une autre on le vérifie pour pas faire de mouvement saccadé*)
let stop key e =
  let anim = Surface.get e in
  let stats = Statistics.get e in
  Input_handler.set_key key false;
  let nextKey,value = Input_handler.get_active_key ()in
  if (String.compare key "down")==0 then begin Texture.play_idle anim "front";Orientation.set e {x = 0.; y = 1.}; end;
  if (String.compare key "up")==0 then begin Texture.play_idle anim "back";Orientation.set e {x = 0.; y = -1.}; end;
  if (String.compare key "right")==0 then begin Texture.play_idle anim "right";Orientation.set e {x = 1.; y = 0.}; end;
  if (String.compare key "left")==0 then begin Texture.play_idle anim "left";Orientation.set e {x = -1.; y = 0.}; end;
  Velocity.set e Vector.zero;
  if ((String.compare nextKey "down")==0)&&value then begin Texture.play_idle anim "front_walk";Velocity.set e { x = 0.0; y = 1. *.(stats.movespeed) };Orientation.set e {x = 0.; y = 1.}; end;
  if ((String.compare nextKey "up")==0)&&value then begin Texture.play_idle anim "back_walk";Velocity.set e { x = 0.0; y = -1. *.(stats.movespeed) };Orientation.set e {x = 0.; y = -1.}; end;
  if ((String.compare nextKey "right")==0)&&value then begin Texture.play_idle anim "right_walk";Velocity.set e { x = 1. *.(stats.movespeed); y = 0.0 };Orientation.set e {x = 1.; y = 0.}; end;
  if ((String.compare nextKey "left")==0)&&value then begin Texture.play_idle anim "left_walk"; Velocity.set e { x = -1. *.(stats.movespeed); y = 0.0 };Orientation.set e {x = -1.; y = 0.}; end
  
  