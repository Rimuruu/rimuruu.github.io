val register_command : Gfx.event -> (unit -> unit) -> unit
val get_commands : Gfx.event -> (unit -> unit) list
val get_key : string -> bool
val set_key : string -> bool -> unit
val get_active_key : unit -> (string*bool)
val reset_all : unit -> unit