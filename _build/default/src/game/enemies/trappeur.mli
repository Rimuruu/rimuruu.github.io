open Ecs

val create : float -> float -> float -> float -> Gfx.image -> Entity.t

val reset : Entity.t -> float -> float -> unit

val stop : Entity.t -> unit