open Component_defs
open System_defs
open Ecs


let collision e1 e2 =
        let box1 = Box.get e1 in
        let boxC1 = BoxCollider.get e1 in
        let pos1 = Rect.margin box1 boxC1 (Position.get e1) in
        let rpos1 = Position.get e1 in
        
        (* les composants du rectangle r2 *)
        let box2 = Box.get e2 in
        let boxC2 = BoxCollider.get e2 in
        let pos2 = Rect.margin box2 boxC2 (Position.get e2) in
        let rpos2 = Position.get e2 in
        (* les vitesses *)
        let v1 = Velocity.get e1 in
        let v2 = Velocity.get e2 in
        (* [1] la soustraction de Minkowski *)
        let s_pos, s_rect = Rect.mdiff pos2 boxC2 pos1 boxC1 in 
  let a = Vector.{ x = s_pos.x; y = 0.0} in
  let b = Vector.{ x = float s_rect.width +. s_pos.x; y = 0.0 } in
  let c = Vector.{ x = 0.0; y = s_pos.y } in
  let d = Vector.{ x = 0.0; y = float s_rect.height +. s_pos.y} in 
  let n = List.fold_left (fun min_v v ->
    if Vector.norm v  < Vector.norm min_v then v else min_v) 
    a [ b; c ; d]
  in
  (*  [4] rapport des vitesses et déplacement des objets *)
  let n_v1 = Vector.norm v1 in
  let n_v2 = Vector.norm v2 in
  let s = (n_v1 +. n_v2) in
  let n1 = n_v1 /. s in
  let n2 = n_v2 /. s in
  let delta_pos1 = Vector.mult n1 n in
  let delta_pos2 = Vector.mult (Float.neg n2) n in
  Position.set e1 (Vector.add rpos1 delta_pos1);
  Position.set e2 (Vector.add rpos2 delta_pos2);
 
  (* [5] On normalise n (on calcule un vecteur de même direction mais de norme 1) *)
  if ((String.compare (Name.get e2) "spider")==0) then
  begin
    let n = Vector.normalize n in
    (* [6] Vitesse relative entre v2 et v1 *)
    let v = Vector.sub v1 v2 in
    (* Préparation au calcul de l'impulsion *)
    (* Elasticité fixe. En pratique, l'elasticité peut être stockée dans
       les objets comme un composant : 1 pour la balle et les murs, 0.5 pour
       des obstacles absorbants, 1.2 pour des obstacles rebondissant, … *)
    let e = 1.0 in
    (* normalisation des masses *)
    let m1 = Mass.get e1 in
    let m2 = Mass.get e2 in    
    let m1, m2 = 
      if Float.is_infinite m1 && Float.is_infinite m2 then
        if n_v1 = 0.0 then m1, 1.0 else if n_v2 = 0.0 then 1.0, m2 else
          0.0, 0.0
        else
        m1, m2
    in
    (* [7] calcul de l'impulsion *)
    let j =
       (-.(1.0 +. e) *. Vector.dot v n)/. ( (1. /. m1) +. (1. /. m2))
    in
    (* [8] calcul des nouvelles vitesses *)
    let new_v1 = Vector.add v1 (Vector.mult (j/. m1) n) in
    let new_v2 = Vector.sub v2 (Vector.mult (j/. m2) n) in
    (* [9] mise à jour des vitesses *)
    Velocity.set e1 new_v1;
    Velocity.set e2 new_v2;
  end;
  ()


let create x y w h=
let e = Entity.create () in
  Position.set e { x = x; y = y};
  Box.set e { width = w; height = h};
  BoxCollider.set e { width = w; height = h};
  Velocity.set e Vector.zero;
  Mass.set e infinity;
  Priority.set e 1;
  Name.set e "wall";
  CollisionResolver.set e collision;
  (* systems *)
  Collision_S.register e;
  e

