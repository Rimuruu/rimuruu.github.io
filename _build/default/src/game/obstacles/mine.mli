open Ecs

val destruction : Entity.t -> unit

val create : float -> float -> Gfx.image  -> Entity.t

val reset : Entity.t -> float -> float -> unit

val stop : Entity.t -> unit