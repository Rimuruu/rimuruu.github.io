exception MissingIdle of string

type tupleInt = (int *int)

let time = ref 0.0
let cpt = ref 0.0

type animation = {
        frames : Gfx.render array;
        idleTable : (string, tupleInt) Hashtbl.t;
        mutable currentIdle : tupleInt;
        mutable current : int
}

type tilemap = {
        tiles : Gfx.color array;
        map : int array array;
        grid_size : int;
}


type t = Color of Gfx.color
        | Image of Gfx.render
        | Animation of animation
        | Tile of tilemap
        

let black = Color (Gfx.color 0 0 0 255)
let red = Color (Gfx.color 255 0 0 255)
let rougefonce = Color (Gfx.color 120 0 0 255)
let green = Color (Gfx.color 0 255 0 255)
let blue = Color (Gfx.color 0 0 255 255)
let yellow = Color (Gfx.color 255 255 0 255)
let gray = Color (Gfx.color 64 70 72 255)

let create_img img l h = 
        let r = Gfx.create_offscreen l h in
        Gfx.draw_image_scale r img 0 0 l h 1.;
        Image r

let create_img_scale img l h x y= 
                let r = Gfx.create_offscreen l h in
                Gfx.draw_image_full r img x y l h 0 0 l h 1.;
                Image r

let create_tilemap colors tilemap size= Tile {tiles = colors; map = tilemap;grid_size = size}

let create_animation img num_w num_h sw sh dw dh = 
        let array_frame = Array.init (num_w * num_h) (fun _i -> Gfx.create_offscreen dw dh) in
        for y = 0 to (num_h-1) do
                for x = 0 to (num_w-1) do
                        Gfx.draw_image_full array_frame.(y*num_w+x) img (x*sw) (y*sh) sw sh 0 0 dw dh 1.;
                done
        done;
        Animation {frames = array_frame; current = 0;currentIdle = (0,num_w * num_h) ; idleTable = Hashtbl.create 32}

let create_idle idleName (deb, fin) anim= 
  match anim with 
    | Animation a -> Hashtbl.replace (a.idleTable) idleName (deb, fin)
    | _ -> ()

let draw_tilemap tilemap ctx posX posY=
        let tile = ref 0 in
        let color = ref (Gfx.color 0 0 0 255) in
        let size = tilemap.grid_size in
        let sizeX = Array.length tilemap.map in
        let sizeY = Array.length tilemap.map.(0) in
        for y = 0 to (sizeX-1) do
                for x = 0 to (sizeY-1) do
                        tile := tilemap.map.(y).(x);
                        color := tilemap.tiles.(!tile);
                        Gfx.fill_rect ctx (x*size+posX) (y*size+posY) size size !color;
                done
        done

let get_idle idleName anim= try
  Hashtbl.find anim.idleTable idleName
  with
    Not_found -> raise (MissingIdle(idleName))

let play_idle anim idleName = 
  match anim with 
  |Animation a ->  let (deb,fin) = get_idle idleName a in
                    a.current <- deb;
                    a.currentIdle <- (deb,fin) 
  | _ -> ()



let get_frame anim _dir _dt _time _cpt= 
        let currentCase = Array.get (anim.frames) (anim.current) in
        let deb = (fst anim.currentIdle) in
        let fin = (snd anim.currentIdle) in
        let _current = anim.current in
        let time = Sys.time () in
        anim.current <- (((int_of_float (time*.10.)))mod(fin-deb)) + deb;
        currentCase