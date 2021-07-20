open Ecs

val create : float -> float -> Gfx.image -> int -> Entity.t

val reset : Entity.t -> float -> float -> unit

val stop : Entity.t -> unit