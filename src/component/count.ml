open Ecs

type t = {
    mutable cpt : float;
    action : Entity.t -> unit;
}


let set_cpt c cpt = 
    c.cpt <- cpt;
    ()