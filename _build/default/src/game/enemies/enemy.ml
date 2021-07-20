open Component_defs
open Ecs
open System_defs

let dead e spawnHeart=
  let pos = Position.get e in
  Random.self_init ();
  if (Random.int 5) == 0 then spawnHeart pos.x pos.y;
  Collision_S.unregister e;
  Control_S.unregister e;
  Draw_S.unregister e; 
  Move_S.unregister e;
  Logic_S.unregister e;
  Active.set e false

let hit e degat spawnHeart= 
  let hp = Health.get e in
  Health.set e (hp-(int_of_float degat));
  if (hp-(int_of_float degat)) <= 0 then dead e spawnHeart

let create posX posY velX velY img= (*On choisit la direction qu'il prend quand il est créé*)
  let e = Entity.create () in
  let anim = Texture.create_animation img 3 4 160 160 40 40 in
  Position.set e { x = posX; y = posY};
  Velocity.set e { x = velX; y = velY};
  Mass.set e infinity;
  Box.set e {width = 40; height=40 };
  BoxCollider.set e {width = 40; height=40 };
  Name.set e "ennemy";
  Surface.set e anim;
  Texture.create_idle "front_walk" (0,3) anim;
  Texture.create_idle "right_walk" (3,6) anim;
  Texture.create_idle "back_walk" (6,9) anim;
  Texture.create_idle "left_walk" (9,12) anim;
  Texture.play_idle anim "front_walk";
  Priority.set e 2;
  Active.set e true;

  (* systems *)
  Cleaning_S.register e;

  e

let reset e x y = 
  Position.set e { x = x; y = y }

let stop e =
  Velocity.set e Vector.zero
  