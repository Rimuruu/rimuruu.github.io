open Component_defs

let init () = ()

let update _dt el =
  List.iter (fun e ->
      if (Active.has_component e) then begin
        let active = Active.get e in
        if not(active) then disable_all e
      end;
    
    ) el