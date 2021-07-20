open Component_defs

let init () = ()

let update _dt el =
  List.iteri (fun i e1 ->
    List.iteri (fun j e2 ->
      (* Une double boucle qui évite de comparer deux fois
         les objets : si on compare A et B, on ne compare pas B et A.
         Il faudra améliorer cela si on a beaucoup (> 30) objets simultanément.
      *)
      if j > i then begin
        (* les composants du rectangle r1 *)
        let box1 = Box.get e1 in
        let boxC1 = BoxCollider.get e1 in
        let pos1 = Rect.margin box1 boxC1 (Position.get e1) in
        
        (* les composants du rectangle r2 *)
        let box2 = Box.get e2 in
        let boxC2 = BoxCollider.get e2 in
        let pos2 = Rect.margin box2 boxC2 (Position.get e2) in
        
        (* les vitesses *)
        let v1 = Velocity.get e1 in
        let v2 = Velocity.get e2 in
        (* [1] la soustraction de Minkowski *)
        let s_pos, s_rect = Rect.mdiff pos2 boxC2 pos1 boxC1 in
        (* [2] si intersection et un des objets et mobile, les objets rebondissent *)
        if Rect.has_origin s_pos s_rect &&
          not (Vector.is_zero v1 && Vector.is_zero v2)
          then begin
            (* [3] le plus petit des vecteurs a b c d *)
           
            (* [10] appel des resolveurs *)
            if CollisionResolver.has_component e1 then (CollisionResolver.get e1) e1 e2;
            if CollisionResolver.has_component e2 then (CollisionResolver.get e2) e2 e1
          end
      end
      ) el) el
