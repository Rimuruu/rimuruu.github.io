open Component_defs



let ctx = ref None
let init () =
  let _, c = Gfx.create "canvas"  in
  ctx := Some c

let cpt = ref 0.0
let time = ref 0.0

let update dt el =

  let ctx = Option.get !ctx in
  Gfx.clear_rect ctx 0 0 800 640;
  let list_sort = List.sort (
      fun a b ->
        let aP = Priority.get a in
        let bP = Priority.get b in 
        aP - bP
        ) el in
  List.iter (fun e -> 
    let pos = Position.get e in
    let box = try Box.get e with _ -> {width = 0; height = 0} in
    let color = Surface.get e in
    if (TextD.has_component e) then begin
      let text = TextD.get e in
      Gfx.draw_text ctx text.text (int_of_float text.x) (int_of_float text.y) text.font text.color 80. 1.;
    end;
    match color with 
      | Color color1 -> Gfx.fill_rect ctx (int_of_float pos.x) (int_of_float pos.y) box.width box.height color1;
      | Image image -> Gfx.blit_scale ctx image (int_of_float pos.x) (int_of_float pos.y) box.width box.height;
      | Animation anim -> 
        let speed = Velocity.get e in
        Gfx.blit_scale ctx (Texture.get_frame anim (int_of_float speed.x) dt time cpt) (int_of_float pos.x) (int_of_float pos.y) box.width box.height;
      | Tile tilemap -> Texture.draw_tilemap tilemap ctx (int_of_float pos.x) (int_of_float pos.y)
        ) (list_sort)
      

