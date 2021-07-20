open Ecs

type room = { 
  index : int;
  id: Entity.t;
  ennemies : Entity.t list;
  obstacles : Entity.t list;
  value : int array array;
  
  doors : (bool*int) array;

}


val init : Entity.t -> room array -> (string, Gfx.image) Hashtbl.t ->  Entity.t list -> unit
val get_player : unit -> Entity.t
val get_status : unit -> bool
val get_floor : unit -> int
val set_state : bool -> unit
val set_floor : int -> unit
val check_ennemies : unit -> bool

val update_count_e : unit -> unit
val update_health : unit -> unit
val enable_wall : Entity.t -> unit

val shot : Gfx.image -> Gfx.image -> Entity.t -> unit
val spawnMine :  Gfx.image -> Entity.t -> unit


val door_f  : int -> int
val generate_map : int array array -> Gfx.color array -> int -> (string, Gfx.image) Hashtbl.t ->    room array
val change_floor : room array -> unit

