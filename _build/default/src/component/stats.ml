type t = {
  strength : float;
  attackspeed : float;
  movespeed : float;
}

let addStat a b = {strength = a.strength*.b.strength; attackspeed = a.attackspeed *. b.attackspeed; movespeed = a.movespeed *. b.movespeed}