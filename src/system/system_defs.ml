module Control_S = System.Make (Control_system)
module Draw_S = System.Make(Draw_system)
module Move_S = System.Make(Move_system)
module Collision_S = System.Make(Collision_system)
module Logic_S = System.Make(Logic_system)
module Cleaning_S = System.Make(Cleaning_system)

let () =
  System.register (module Cleaning_S);
  System.register (module Draw_S);
  System.register (module Move_S);
  System.register (module Control_S);
  System.register (module Collision_S);
  System.register (module Logic_S)
  
