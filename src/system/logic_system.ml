open Component_defs
let init () = ()

let update _dt el =
  List.iter (fun e ->
    let name = Name.get e in
      if (String.compare name "player") == 0 then begin
        let vf = InvunerableFrame.get e in
        if vf > 0 then InvunerableFrame.set e (vf-1)
      end
      else if (String.compare name "spider") == 0 then begin
        let cpt = Cpt.get e in
        if ((Sys.time ())-. cpt.cpt )> 1. then begin 
        cpt.action e; 
        Count.set_cpt  cpt (Sys.time ());
        Random.self_init ();
         end 
      end
      else if (String.compare name "skeleton") == 0 then begin
        let cpt = Cpt.get e in
        if ((Sys.time ())-. cpt.cpt )> 1.5 then begin cpt.action e; Count.set_cpt  cpt (Sys.time ()) end 
      end;
    
    ) el
