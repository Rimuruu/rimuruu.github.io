(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_mul=runtime.caml_mul,
     caml_notequal=runtime.caml_notequal,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_sys_time=runtime.caml_sys_time,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    function caml_call7(f,a0,a1,a2,a3,a4,a5,a6)
     {return f.length == 7
              ?f(a0,a1,a2,a3,a4,a5,a6)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6])}
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    function caml_call11(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)
     {return f.length == 11
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10])}
    var
     global_data=runtime.caml_get_global_data(),
     zero=[254,0.,0.],
     cst_Game_Texture_MissingIdle=
      caml_string_of_jsbytes("Game__Texture.MissingIdle"),
     name=caml_string_of_jsbytes("position"),
     name$0=caml_string_of_jsbytes("teleport"),
     name$1=caml_string_of_jsbytes("priority"),
     name$2=caml_string_of_jsbytes("velocity"),
     name$3=caml_string_of_jsbytes("mass"),
     name$4=caml_string_of_jsbytes("box"),
     name$5=caml_string_of_jsbytes("boxCollider"),
     name$6=caml_string_of_jsbytes("texture"),
     name$7=caml_string_of_jsbytes("name"),
     name$8=caml_string_of_jsbytes("resolver"),
     name$9=caml_string_of_jsbytes("owner"),
     name$10=caml_string_of_jsbytes("invunerableFrame"),
     name$11=caml_string_of_jsbytes("orientation"),
     name$12=caml_string_of_jsbytes("health"),
     name$13=caml_string_of_jsbytes("active"),
     name$14=caml_string_of_jsbytes("stats"),
     name$15=caml_string_of_jsbytes("text"),
     name$16=caml_string_of_jsbytes("compteur"),
     cst_Game_Input_handler_Missing=
      caml_string_of_jsbytes("Game__Input_handler.MissingKey"),
     cst_canvas=caml_string_of_jsbytes("canvas"),
     cst_player=caml_string_of_jsbytes("player"),
     cst_spider=caml_string_of_jsbytes("spider"),
     cst_skeleton=caml_string_of_jsbytes("skeleton"),
     cst_ennemy=caml_string_of_jsbytes("ennemy"),
     cst_skeleton$0=caml_string_of_jsbytes("skeleton"),
     cst_player$0=caml_string_of_jsbytes("player"),
     cst_left_walk=caml_string_of_jsbytes("left_walk"),
     cst_right_walk=caml_string_of_jsbytes("right_walk"),
     cst_back_walk=caml_string_of_jsbytes("back_walk"),
     cst_front_walk=caml_string_of_jsbytes("front_walk"),
     cst_wall=caml_string_of_jsbytes("wall"),
     cst_spider$0=caml_string_of_jsbytes("spider"),
     cst_trappeur=caml_string_of_jsbytes("trappeur"),
     cst_front_walk$0=caml_string_of_jsbytes("front_walk"),
     cst_right_walk$0=caml_string_of_jsbytes("right_walk"),
     cst_back_walk$0=caml_string_of_jsbytes("back_walk"),
     cst_left_walk$0=caml_string_of_jsbytes("left_walk"),
     cst_front_walk$1=caml_string_of_jsbytes("front_walk"),
     cst_spider$1=caml_string_of_jsbytes("spider"),
     cst_front_walk$2=caml_string_of_jsbytes("front_walk"),
     cst_skeleton$1=caml_string_of_jsbytes("skeleton"),
     cst_front_walk$3=caml_string_of_jsbytes("front_walk"),
     cst_right_walk$1=caml_string_of_jsbytes("right_walk"),
     cst_back_walk$1=caml_string_of_jsbytes("back_walk"),
     cst_left_walk$1=caml_string_of_jsbytes("left_walk"),
     cst_front_walk$4=caml_string_of_jsbytes("front_walk"),
     cst_ennemy$0=caml_string_of_jsbytes("ennemy"),
     cst_front_walk$5=caml_string_of_jsbytes("front_walk"),
     cst_right_walk$2=caml_string_of_jsbytes("right_walk"),
     cst_back_walk$2=caml_string_of_jsbytes("back_walk"),
     cst_left_walk$2=caml_string_of_jsbytes("left_walk"),
     cst_front_walk$6=caml_string_of_jsbytes("front_walk"),
     cst_mine=caml_string_of_jsbytes("mine"),
     cst_right_shot=caml_string_of_jsbytes("right_shot"),
     cst_down_shot=caml_string_of_jsbytes("down_shot"),
     cst_left_shot=caml_string_of_jsbytes("left_shot"),
     cst_up_shot=caml_string_of_jsbytes("up_shot"),
     cst_wall$0=caml_string_of_jsbytes("wall"),
     cst_bottom=caml_string_of_jsbytes("bottom"),
     cst_top=caml_string_of_jsbytes("top"),
     cst_right=caml_string_of_jsbytes("right"),
     cst_left=caml_string_of_jsbytes("left"),
     cst_ennemy$1=caml_string_of_jsbytes("ennemy"),
     cst_skeleton$2=caml_string_of_jsbytes("skeleton"),
     cst_spider$2=caml_string_of_jsbytes("spider"),
     cst_mine$0=caml_string_of_jsbytes("mine"),
     cst_down$1=caml_string_of_jsbytes("down"),
     cst_front$1=caml_string_of_jsbytes("front"),
     cst_up$1=caml_string_of_jsbytes("up"),
     cst_back$0=caml_string_of_jsbytes("back"),
     cst_right$3=caml_string_of_jsbytes("right"),
     cst_right$4=caml_string_of_jsbytes("right"),
     cst_left$3=caml_string_of_jsbytes("left"),
     cst_left$4=caml_string_of_jsbytes("left"),
     cst_down$2=caml_string_of_jsbytes("down"),
     cst_front_walk$9=caml_string_of_jsbytes("front_walk"),
     cst_up$2=caml_string_of_jsbytes("up"),
     cst_back_walk$5=caml_string_of_jsbytes("back_walk"),
     cst_right$5=caml_string_of_jsbytes("right"),
     cst_right_walk$5=caml_string_of_jsbytes("right_walk"),
     cst_left$5=caml_string_of_jsbytes("left"),
     cst_left_walk$5=caml_string_of_jsbytes("left_walk"),
     cst_left$1=caml_string_of_jsbytes("left"),
     cst_left$2=caml_string_of_jsbytes("left"),
     cst_left_walk$4=caml_string_of_jsbytes("left_walk"),
     cst_right$1=caml_string_of_jsbytes("right"),
     cst_right$2=caml_string_of_jsbytes("right"),
     cst_right_walk$4=caml_string_of_jsbytes("right_walk"),
     cst_down=caml_string_of_jsbytes("down"),
     cst_down$0=caml_string_of_jsbytes("down"),
     cst_front_walk$8=caml_string_of_jsbytes("front_walk"),
     cst_up=caml_string_of_jsbytes("up"),
     cst_up$0=caml_string_of_jsbytes("up"),
     cst_back_walk$4=caml_string_of_jsbytes("back_walk"),
     cst_front_walk$7=caml_string_of_jsbytes("front_walk"),
     cst_right_walk$3=caml_string_of_jsbytes("right_walk"),
     cst_back_walk$3=caml_string_of_jsbytes("back_walk"),
     cst_left_walk$3=caml_string_of_jsbytes("left_walk"),
     cst_front=caml_string_of_jsbytes("front"),
     cst_right$0=caml_string_of_jsbytes("right"),
     cst_back=caml_string_of_jsbytes("back"),
     cst_left$0=caml_string_of_jsbytes("left"),
     cst_front$0=caml_string_of_jsbytes("front"),
     cst_px_Verdana=caml_string_of_jsbytes("px Verdana"),
     cst_12px_Verdana=caml_string_of_jsbytes("12px Verdana"),
     cst_px_Verdana$0=caml_string_of_jsbytes("px Verdana"),
     cst_18px_Verdana=caml_string_of_jsbytes("18px Verdana"),
     cst_ennemy$2=caml_string_of_jsbytes("ennemy"),
     cst_front_walk$10=caml_string_of_jsbytes("front_walk"),
     cst_right_walk$6=caml_string_of_jsbytes("right_walk"),
     cst_back_walk$6=caml_string_of_jsbytes("back_walk"),
     cst_left_walk$6=caml_string_of_jsbytes("left_walk"),
     cst_front_walk$11=caml_string_of_jsbytes("front_walk"),
     doorTop=[0,400,120],
     doorBottom=[0,400,600],
     doorLeft=[0,80,400],
     doorRight=[0,720,400],
     cst_heart=caml_string_of_jsbytes("heart"),
     cst_fireball_idle=caml_string_of_jsbytes("fireball_idle"),
     cst_heart_img=caml_string_of_jsbytes("heart_img"),
     cst_bottom$2=caml_string_of_jsbytes("bottom"),
     cst_right$8=caml_string_of_jsbytes("right"),
     cst_top$2=caml_string_of_jsbytes("top"),
     cst_left$8=caml_string_of_jsbytes("left"),
     cst_0=caml_string_of_jsbytes("0"),
     cst_e_info_img=caml_string_of_jsbytes("e_info_img"),
     cst_info_e=caml_string_of_jsbytes("info_e"),
     cst_0$0=caml_string_of_jsbytes("0"),
     cst_f_info_img=caml_string_of_jsbytes("f_info_img"),
     cst_info_f=caml_string_of_jsbytes("info_f"),
     cst_player$6=caml_string_of_jsbytes("player"),
     cst_heart$0=caml_string_of_jsbytes("heart"),
     cst_player$5=caml_string_of_jsbytes("player"),
     cst_spider$3=caml_string_of_jsbytes("spider"),
     cst_left$7=caml_string_of_jsbytes("left"),
     cst_top$1=caml_string_of_jsbytes("top"),
     cst_right$7=caml_string_of_jsbytes("right"),
     cst_bottom$1=caml_string_of_jsbytes("bottom"),
     cst_map=caml_string_of_jsbytes("map"),
     cst_gobelin_img=caml_string_of_jsbytes("gobelin_img"),
     cst_gobelin_img$0=caml_string_of_jsbytes("gobelin_img"),
     cst_spider_img=caml_string_of_jsbytes("spider_img"),
     cst_web_img=caml_string_of_jsbytes("web_img"),
     cst_skeleton_img=caml_string_of_jsbytes("skeleton_img"),
     cst_fireball_img=caml_string_of_jsbytes("fireball_img"),
     cst_player$4=caml_string_of_jsbytes("player"),
     cst_player$3=caml_string_of_jsbytes("player"),
     cst_fireball=caml_string_of_jsbytes("fireball"),
     cst_player$2=caml_string_of_jsbytes("player"),
     cst_wall$1=caml_string_of_jsbytes("wall"),
     cst_bottom$0=caml_string_of_jsbytes("bottom"),
     cst_top$0=caml_string_of_jsbytes("top"),
     cst_right$6=caml_string_of_jsbytes("right"),
     cst_left$6=caml_string_of_jsbytes("left"),
     cst_player$1=caml_string_of_jsbytes("player"),
     cst_right_shot$0=caml_string_of_jsbytes("right_shot"),
     cst_projectile=caml_string_of_jsbytes("projectile"),
     cst_left_shot$0=caml_string_of_jsbytes("left_shot"),
     cst_projectile$0=caml_string_of_jsbytes("projectile"),
     cst_down_shot$0=caml_string_of_jsbytes("down_shot"),
     cst_projectile$1=caml_string_of_jsbytes("projectile"),
     cst_up_shot$0=caml_string_of_jsbytes("up_shot"),
     cst_projectile$2=caml_string_of_jsbytes("projectile"),
     cst_src_img_charSheet_png=caml_string_of_jsbytes("src/img/charSheet.png"),
     cst_player_img$0=caml_string_of_jsbytes("player_img"),
     cst_src_img_gobelinSheet_png=
      caml_string_of_jsbytes("src/img/gobelinSheet.png"),
     cst_gobelin_img$1=caml_string_of_jsbytes("gobelin_img"),
     cst_src_img_heart_png=caml_string_of_jsbytes("src/img/heart.png"),
     cst_heart_img$1=caml_string_of_jsbytes("heart_img"),
     cst_src_img_projectilesheet_pn=
      caml_string_of_jsbytes("src/img/projectilesheet.png"),
     cst_projectile_img$0=caml_string_of_jsbytes("projectile_img"),
     cst_src_img_itemSheet_png=caml_string_of_jsbytes("src/img/itemSheet.png"),
     cst_item_img$8=caml_string_of_jsbytes("item_img"),
     cst_src_img_info_e_png=caml_string_of_jsbytes("src/img/info_e.png"),
     cst_e_info_img$0=caml_string_of_jsbytes("e_info_img"),
     cst_src_img_info_f_png=caml_string_of_jsbytes("src/img/info_f.png"),
     cst_f_info_img$0=caml_string_of_jsbytes("f_info_img"),
     cst_src_img_spider_png=caml_string_of_jsbytes("src/img/spider.png"),
     cst_spider_img$0=caml_string_of_jsbytes("spider_img"),
     cst_src_img_web_png=caml_string_of_jsbytes("src/img/web.png"),
     cst_web_img$0=caml_string_of_jsbytes("web_img"),
     cst_src_img_skeleton_Sheet_png=
      caml_string_of_jsbytes("src/img/skeleton-Sheet.png"),
     cst_skeleton_img$0=caml_string_of_jsbytes("skeleton_img"),
     cst_src_img_fireball_Sheet_png=
      caml_string_of_jsbytes("src/img/fireball-Sheet.png"),
     cst_fireball_img$0=caml_string_of_jsbytes("fireball_img"),
     cst_150px_Verdana=caml_string_of_jsbytes("150px Verdana"),
     cst_Game_Over=caml_string_of_jsbytes("Game Over"),
     cst_24px_Verdana=caml_string_of_jsbytes("24px Verdana"),
     cst_Score=caml_string_of_jsbytes("Score : "),
     cst_24px_Verdana$0=caml_string_of_jsbytes("24px Verdana"),
     cst_Appuyez_sur_R_pour_recomme=
      caml_string_of_jsbytes("Appuyez sur R pour recommencer"),
     cst_projectile_img=caml_string_of_jsbytes("projectile_img"),
     cst_heart_img$0=caml_string_of_jsbytes("heart_img"),
     cst_right$9=caml_string_of_jsbytes("right"),
     cst_left$9=caml_string_of_jsbytes("left"),
     cst_down$3=caml_string_of_jsbytes("down"),
     cst_up$3=caml_string_of_jsbytes("up"),
     cst_player_img=caml_string_of_jsbytes("player_img"),
     cst_player$7=caml_string_of_jsbytes("player"),
     cst_VIT=caml_string_of_jsbytes("VIT+++"),
     cst_item_img=caml_string_of_jsbytes("item_img"),
     cst_Botte_en_or=caml_string_of_jsbytes("Botte en or"),
     cst_VIT$0=caml_string_of_jsbytes("VIT++"),
     cst_item_img$0=caml_string_of_jsbytes("item_img"),
     cst_Botte_en_argent=caml_string_of_jsbytes("Botte en argent"),
     cst_VIT$1=caml_string_of_jsbytes("VIT+"),
     cst_item_img$1=caml_string_of_jsbytes("item_img"),
     cst_Botte_en_cuivre=caml_string_of_jsbytes("Botte en cuivre"),
     cst_VA=caml_string_of_jsbytes("VA+++"),
     cst_item_img$2=caml_string_of_jsbytes("item_img"),
     cst_Carquois_en_or=caml_string_of_jsbytes("Carquois en or"),
     cst_VA$0=caml_string_of_jsbytes("VA++"),
     cst_item_img$3=caml_string_of_jsbytes("item_img"),
     cst_Carquois_en_argent=caml_string_of_jsbytes("Carquois en argent"),
     cst_VA$1=caml_string_of_jsbytes("VA+"),
     cst_item_img$4=caml_string_of_jsbytes("item_img"),
     cst_Carquois_en_cuivre=caml_string_of_jsbytes("Carquois en cuivre"),
     cst_FOR=caml_string_of_jsbytes("FOR+++"),
     cst_item_img$5=caml_string_of_jsbytes("item_img"),
     cst_Arc_en_or=caml_string_of_jsbytes("Arc en or"),
     cst_FOR$0=caml_string_of_jsbytes("FOR++"),
     cst_item_img$6=caml_string_of_jsbytes("item_img"),
     cst_Arc_en_argent=caml_string_of_jsbytes("Arc en argent"),
     cst_FOR$1=caml_string_of_jsbytes("FOR+"),
     cst_item_img$7=caml_string_of_jsbytes("item_img"),
     cst_Arc_en_cuivre=caml_string_of_jsbytes("Arc en cuivre"),
     cst_up$4=caml_string_of_jsbytes("up"),
     cst_down$4=caml_string_of_jsbytes("down"),
     cst_left$10=caml_string_of_jsbytes("left"),
     cst_right$10=caml_string_of_jsbytes("right"),
     Stdlib_format=global_data.Stdlib__format,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib=global_data.Stdlib,
     Gfx=global_data.Gfx,
     Stdlib_array=global_data.Stdlib__array,
     Ecs_Component=global_data.Ecs__Component,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_option=global_data.Stdlib__option,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_random=global_data.Stdlib__random,
     Ecs_Entity=global_data.Ecs__Entity,
     Stdlib_float=global_data.Stdlib__float,
     Game=[0];
    caml_register_global(558,Game,"Game__");
    var
     _a_=
      [0,
       [12,40,[8,0,0,0,[11,caml_string_of_jsbytes(", "),[8,0,0,0,[12,41,0]]]]],
       caml_string_of_jsbytes("(%f, %f)")],
     _b_=
      [0,
       [11,
        caml_string_of_jsbytes("[w:"),
        [4,0,0,0,[11,caml_string_of_jsbytes(",h:"),[4,0,0,0,[12,93,0]]]]],
       caml_string_of_jsbytes("[w:%d,h:%d]")],
     _c_=[0,caml_string_of_jsbytes(""),0],
     _d_=[0,0,0],
     _e_=[0,40,40],
     _f_=[0,40,40],
     _g_=[0,0,3],
     _h_=[0,3,6],
     _i_=[0,6,9],
     _j_=[0,9,12],
     _k_=[0,50,50],
     _l_=[0,40,35],
     _m_=[0,0,8],
     _n_=[254,0.,0.],
     _o_=[0,40,40],
     _p_=[0,35,38],
     _q_=[0,0,3],
     _r_=[0,9,12],
     _s_=[0,3,6],
     _t_=[0,6,9],
     _u_=[254,0.,0.,75.],
     _v_=[0,40,40],
     _w_=[0,40,40],
     _x_=[0,0,3],
     _y_=[0,3,6],
     _z_=[0,6,9],
     _A_=[0,9,12],
     _B_=[254,0.,0.],
     _C_=[0,40,40],
     _D_=[0,40,40],
     _E_=[0,20,20],
     _F_=[0,20,5],
     _G_=[0,0,3],
     _H_=[0,4,7],
     _I_=[0,8,11],
     _J_=[0,12,15],
     ___=[254,0.,1.],
     _$_=[254,0.,-1.],
     _aa_=[254,1.,0.],
     _ab_=[254,-1.,0.],
     _ac_=[254,0.,1.],
     _ad_=[254,0.,-1.],
     _ae_=[254,1.,0.],
     _af_=[254,-1.,0.],
     _Z_=[254,-1.,0.],
     _Y_=[254,1.,0.],
     _X_=[254,0.,1.],
     _W_=[254,0.,-1.],
     _K_=[0,40,40],
     _L_=[0,30,35],
     _M_=[0,0,3],
     _N_=[0,3,6],
     _O_=[0,6,9],
     _P_=[0,9,12],
     _Q_=[0,0,1],
     _R_=[0,3,4],
     _S_=[0,6,7],
     _T_=[0,9,10],
     _U_=[254,0.,1.],
     _V_=[254,1.,250.,200.],
     _ag_=[0,30,30],
     _ah_=[0,40,40],
     _ai_=[0,40,40],
     _aj_=[254,0.,0.],
     _ak_=[0,40,40],
     _al_=[0,35,38],
     _am_=[0,0,3],
     _an_=[0,3,6],
     _ao_=[0,6,9],
     _ap_=[0,9,12],
     _aq_=[254,0.,0.,125.],
     _ar_=[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
     _as_=[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
     _at_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _au_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _av_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _aw_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _ax_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _ay_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _az_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _aA_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _aB_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _aC_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _aD_=[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
     _aE_=[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
     _aK_=[0,800,80],
     _aL_=[0,40,40],
     _aM_=[0,40,40],
     _aN_=[0,40,40],
     _aO_=[0,40,40],
     _aP_=[0,20,20],
     _aQ_=[0,20,20],
     _aR_=[0,0,6],
     _aV_=[254,400.,340.],
     _aU_=[0,0,1],
     _aT_=[0,0,-1],
     _aS_=[254,20.,60.],
     _bd_=[0,caml_string_of_jsbytes("r")],
     _bc_=
      [0,
       [11,caml_string_of_jsbytes("fps : "),[4,0,0,0,0]],
       caml_string_of_jsbytes("fps : %d")],
     _aW_=[254,1.,1.,1.45],
     _aX_=[254,1.,1.,1.3],
     _aY_=[254,1.,1.,1.15],
     _aZ_=[254,1.,3.,1.],
     _a0_=[254,1.,2.,1.],
     _a1_=[254,1.,1.5,1.],
     _a2_=[254,4.,1.,1.],
     _a3_=[254,3.,1.,1.],
     _a4_=[254,2.,1.,1.],
     _a5_=[1,caml_string_of_jsbytes("z")],
     _a6_=[1,caml_string_of_jsbytes("s")],
     _a7_=[1,caml_string_of_jsbytes("q")],
     _a8_=[1,caml_string_of_jsbytes("d")],
     _a9_=[0,caml_string_of_jsbytes("z")],
     _a__=[0,caml_string_of_jsbytes("s")],
     _a$_=[0,caml_string_of_jsbytes("q")],
     _ba_=[0,caml_string_of_jsbytes("d")],
     _bb_=[1,caml_string_of_jsbytes(" ")];
    function set_cpt(c,cpt){c[1] = cpt;return 0}
    var Game_Count=[0,set_cpt];
    caml_register_global(559,Game_Count,"Game__Count");
    function add(a,b){return [254,a[1] + b[1],a[2] + b[2]]}
    function sub(a,b){return [254,a[1] - b[1],a[2] - b[2]]}
    function mult(k,a){return [254,k * a[1],k * a[2]]}
    function dot(a,b){return a[1] * b[1] + a[2] * b[2]}
    function norm(a){return Math.sqrt(dot(a,a))}
    function normalize(a){return mult(1. / norm(a),a)}
    function pp(fmt,a)
     {return caml_call4(Stdlib_format[123],fmt,_a_,a[1],a[2])}
    function is_equal(a,b)
     {var _fA_=a[1] === b[1]?1:0,_fB_=_fA_?a[2] === b[2]?1:0:_fA_;return _fB_}
    function is_zero(v)
     {var _fy_=v[1] == 0.?1:0,_fz_=_fy_?v[2] == 0.?1:0:_fy_;return _fz_}
    var
     Game_Vector=
      [0,add,sub,mult,dot,norm,normalize,pp,is_equal,zero,is_zero];
    caml_register_global(561,Game_Vector,"Game__Vector");
    function top_left(v,b){return v}
    function top_right(v,b){return [254,v[1] + b[1],v[2]]}
    function bottom_left(v,b){return [254,v[1],v[2] + b[2]]}
    function bottom_right(v,b){return [254,v[1] + b[1],v[2] + b[2]]}
    function margin(b1,b2,p)
     {var x=(b1[1] - b2[1]) / 2. + p[1],y=(b1[2] - b2[2]) / 2. + p[2];
      return [254,x,y]}
    function center(v,b){return [254,v[1] + 0.5 * b[1],v[2] + 0.5 * b[2]]}
    function mdiff(v1,b1,v2,b2)
     {var
       x=v1[1] - v2[1] - b2[1],
       y=v1[2] - v2[2] - b2[2],
       h=b1[2] + b2[2] | 0,
       w=b1[1] + b2[1] | 0;
      return [0,[254,x,y],[0,w,h]]}
    function has_origin(v,b)
     {var _fu_=v[1] < 0.?1:0;
      if(_fu_)
       {var _fv_=0. < v[1] + b[1]?1:0;
        if(_fv_)
         var _fw_=v[2] < 0.?1:0,_fx_=_fw_?0. < v[2] + b[2]?1:0:_fw_;
        else
         var _fx_=_fv_}
      else
       var _fx_=_fu_;
      return _fx_}
    function intersect(v1,b1,v2,b3)
     {var match=mdiff(v1,b1,v2,b3),b=match[2],v=match[1];
      return has_origin(v,b)}
    function pp$0(fmt,b)
     {return caml_call4(Stdlib_format[123],fmt,_b_,b[1],b[2])}
    var
     Game_Rect=
      [0,
       top_left,
       top_right,
       bottom_left,
       bottom_right,
       margin,
       center,
       mdiff,
       has_origin,
       intersect,
       pp$0];
    caml_register_global(562,Game_Rect,"Game__Rect");
    function addStat(a,b){return [254,a[1] * b[1],a[2] * b[2],a[3] * b[3]]}
    var Game_Stats=[0,addStat];
    caml_register_global(563,Game_Stats,"Game__Stats");
    var Game_Text=[0];
    caml_register_global(564,Game_Text,"Game__Text");
    var
     MissingIdle=[248,cst_Game_Texture_MissingIdle,caml_fresh_oo_id(0)],
     time=[0,0.],
     cpt=[0,0.],
     black=[0,caml_call4(Gfx[11],0,0,0,255)],
     red=[0,caml_call4(Gfx[11],255,0,0,255)],
     rougefonce=[0,caml_call4(Gfx[11],120,0,0,255)],
     green=[0,caml_call4(Gfx[11],0,255,0,255)],
     blue=[0,caml_call4(Gfx[11],0,0,255,255)],
     yellow=[0,caml_call4(Gfx[11],255,255,0,255)],
     gray=[0,caml_call4(Gfx[11],64,70,72,255)];
    function create_img(img,l,h)
     {var r=caml_call2(Gfx[5],l,h);
      caml_call7(Gfx[17],r,img,0,0,l,h,1.);
      return [1,r]}
    function create_img_scale(img,l,h,x,y)
     {var r=caml_call2(Gfx[5],l,h);
      caml_call11(Gfx[18],r,img,x,y,l,h,0,0,l,h,1.);
      return [1,r]}
    function create_tilemap(colors,tilemap,size)
     {return [3,[0,colors,tilemap,size]]}
    function create_animation(img,num_w,num_h,sw,sh,dw,dh)
     {function _fl_(i){return caml_call2(Gfx[5],dw,dh)}
      var
       array_frame=caml_call2(Stdlib_array[2],caml_mul(num_w,num_h),_fl_),
       _fn_=num_h - 1 | 0,
       _fm_=0;
      if(! (_fn_ < 0))
       {var y=_fm_;
        for(;;)
         {var _fp_=num_w - 1 | 0,_fo_=0;
          if(! (_fp_ < 0))
           {var x=_fo_;
            for(;;)
             {var
               _fr_=caml_mul(y,num_w) + x | 0,
               _fs_=caml_check_bound(array_frame,_fr_)[1 + _fr_];
              caml_call11
               (Gfx[18],
                _fs_,
                img,
                caml_mul(x,sw),
                caml_mul(y,sh),
                sw,
                sh,
                0,
                0,
                dw,
                dh,
                1.);
              var _ft_=x + 1 | 0;
              if(_fp_ !== x){var x=_ft_;continue}
              break}}
          var _fq_=y + 1 | 0;
          if(_fn_ !== y){var y=_fq_;continue}
          break}}
      return [2,
              [0,
               array_frame,
               caml_call2(Stdlib_hashtbl[1],0,32),
               [0,0,caml_mul(num_w,num_h)],
               0]]}
    function create_idle(idleName,param,anim)
     {var fin=param[2],deb=param[1];
      if(2 === anim[0])
       {var a=anim[1];
        return caml_call3(Stdlib_hashtbl[11],a[2],idleName,[0,deb,fin])}
      return 0}
    function draw_tilemap(tilemap,ctx,posX,posY)
     {var
       tile=[0,0],
       color=[0,caml_call4(Gfx[11],0,0,0,255)],
       size=tilemap[3],
       sizeX=tilemap[2].length - 1,
       sizeY=caml_check_bound(tilemap[2],0)[1].length - 1,
       _ff_=sizeX - 1 | 0,
       _fe_=0;
      if(! (_ff_ < 0))
       {var y=_fe_;
        for(;;)
         {var _fh_=sizeY - 1 | 0,_fg_=0;
          if(! (_fh_ < 0))
           {var x=_fg_;
            for(;;)
             {tile[1]
              =
              caml_check_bound(caml_check_bound(tilemap[2],y)[1 + y],x)[1 + x];
              var _fj_=tile[1];
              color[1] = caml_check_bound(tilemap[1],_fj_)[1 + _fj_];
              caml_call6
               (Gfx[12],
                ctx,
                caml_mul(x,size) + posX | 0,
                caml_mul(y,size) + posY | 0,
                size,
                size,
                color[1]);
              var _fk_=x + 1 | 0;
              if(_fh_ !== x){var x=_fk_;continue}
              break}}
          var _fi_=y + 1 | 0;
          if(_ff_ !== y){var y=_fi_;continue}
          break}}
      return 0}
    function get_idle(idleName,anim)
     {try
       {var _fc_=caml_call2(Stdlib_hashtbl[6],anim[2],idleName);return _fc_}
      catch(_fd_)
       {_fd_ = caml_wrap_exception(_fd_);
        if(_fd_ === Stdlib[8])throw [0,MissingIdle,idleName];
        throw _fd_}}
    function play_idle(anim,idleName)
     {if(2 === anim[0])
       {var a=anim[1],match=get_idle(idleName,a),fin=match[2],deb=match[1];
        a[4] = deb;
        a[3] = [0,deb,fin];
        return 0}
      return 0}
    function get_frame(anim,dir,dt,time,cpt)
     {var
       _fb_=anim[4],
       currentCase=caml_check_bound(anim[1],_fb_)[1 + _fb_],
       deb=anim[3][1],
       fin=anim[3][2],
       time$0=caml_sys_time(0);
      anim[4] = runtime.caml_mod(time$0 * 10. | 0,fin - deb | 0) + deb | 0;
      return currentCase}
    var
     Game_Texture=
      [0,
       MissingIdle,
       time,
       cpt,
       black,
       red,
       rougefonce,
       green,
       blue,
       yellow,
       gray,
       create_img,
       create_img_scale,
       create_tilemap,
       create_animation,
       create_idle,
       draw_tilemap,
       get_idle,
       play_idle,
       get_frame];
    caml_register_global(569,Game_Texture,"Game__Texture");
    var
     Position=caml_call1(Ecs_Component[1],[0,name]),
     Teleport=caml_call1(Ecs_Component[1],[0,name$0]),
     Priority=caml_call1(Ecs_Component[1],[0,name$1]),
     Velocity=caml_call1(Ecs_Component[1],[0,name$2]),
     Mass=caml_call1(Ecs_Component[1],[0,name$3]),
     Box=caml_call1(Ecs_Component[1],[0,name$4]),
     BoxCollider=caml_call1(Ecs_Component[1],[0,name$5]),
     Surface=caml_call1(Ecs_Component[1],[0,name$6]),
     Name=caml_call1(Ecs_Component[1],[0,name$7]),
     CollisionResolver=caml_call1(Ecs_Component[1],[0,name$8]),
     Owner=caml_call1(Ecs_Component[1],[0,name$9]),
     InvunerableFrame=caml_call1(Ecs_Component[1],[0,name$10]),
     Orientation=caml_call1(Ecs_Component[1],[0,name$11]),
     Health=caml_call1(Ecs_Component[1],[0,name$12]),
     Active=caml_call1(Ecs_Component[1],[0,name$13]),
     Statistics=caml_call1(Ecs_Component[1],[0,name$14]),
     TextD=caml_call1(Ecs_Component[1],[0,name$15]),
     Cpt=caml_call1(Ecs_Component[1],[0,name$16]);
    function reset_all(param)
     {caml_call1(Position[6],0);
      caml_call1(Teleport[6],0);
      caml_call1(Priority[6],0);
      caml_call1(Velocity[6],0);
      caml_call1(Mass[6],0);
      caml_call1(Box[6],0);
      caml_call1(Surface[6],0);
      caml_call1(Name[6],0);
      caml_call1(CollisionResolver[6],0);
      caml_call1(Owner[6],0);
      caml_call1(InvunerableFrame[6],0);
      caml_call1(Health[6],0);
      caml_call1(Active[6],0);
      caml_call1(Statistics[6],0);
      caml_call1(TextD[6],0);
      return caml_call1(Cpt[6],0)}
    function disable_all(e)
     {caml_call1(Position[5],e);
      caml_call1(Teleport[5],e);
      caml_call1(Priority[5],e);
      caml_call1(Velocity[5],e);
      caml_call1(Mass[5],e);
      caml_call1(Box[5],e);
      caml_call1(Surface[5],e);
      caml_call1(Name[5],e);
      caml_call1(CollisionResolver[5],e);
      caml_call1(Owner[5],e);
      caml_call1(InvunerableFrame[5],e);
      caml_call1(Health[5],e);
      caml_call1(Active[5],e);
      caml_call1(Statistics[5],e);
      caml_call1(TextD[5],e);
      return caml_call1(Cpt[5],e)}
    var
     Game_Component_defs=
      [0,
       Position,
       Teleport,
       Priority,
       Velocity,
       Mass,
       Box,
       BoxCollider,
       Surface,
       Name,
       CollisionResolver,
       Owner,
       InvunerableFrame,
       Orientation,
       Health,
       Active,
       Statistics,
       TextD,
       Cpt,
       reset_all,
       disable_all];
    caml_register_global(571,Game_Component_defs,"Game__Component_defs");
    function init(param){return 0}
    function update(dt,el)
     {function _e9_(e)
       {var _e__=caml_call1(Active[4],e);
        if(_e__)
         {var active=caml_call1(Active[2],e),_e$_=1 - active;
          if(_e$_)return disable_all(e);
          var _fa_=_e$_}
        else
         var _fa_=_e__;
        return _fa_}
      return caml_call2(Stdlib_list[15],_e9_,el)}
    var Game_Cleaning_system=[0,init,update];
    caml_register_global(573,Game_Cleaning_system,"Game__Cleaning_system");
    function init$0(param){return 0}
    function update$0(dt,el)
     {function _eZ_(i,e1)
       {function _e0_(j,e2)
         {var _e1_=i < j?1:0;
          if(_e1_)
           {var
             box1=caml_call1(Box[2],e1),
             boxC1=caml_call1(BoxCollider[2],e1),
             pos1=margin(box1,boxC1,caml_call1(Position[2],e1)),
             box2=caml_call1(Box[2],e2),
             boxC2=caml_call1(BoxCollider[2],e2),
             pos2=margin(box2,boxC2,caml_call1(Position[2],e2)),
             v1=caml_call1(Velocity[2],e1),
             v2=caml_call1(Velocity[2],e2),
             match=mdiff(pos2,boxC2,pos1,boxC1),
             s_rect=match[2],
             s_pos=match[1],
             _e2_=has_origin(s_pos,s_rect);
            if(_e2_)
             var _e3_=is_zero(v1),_e4_=_e3_?is_zero(v2):_e3_,_e5_=1 - _e4_;
            else
             var _e5_=_e2_;
            if(_e5_)
             {if(caml_call1(CollisionResolver[4],e1))
               caml_call2(caml_call1(CollisionResolver[2],e1),e1,e2);
              var _e6_=caml_call1(CollisionResolver[4],e2);
              if(_e6_)
               return caml_call2(caml_call1(CollisionResolver[2],e2),e2,e1);
              var _e7_=_e6_}
            else
             var _e7_=_e5_;
            var _e8_=_e7_}
          else
           var _e8_=_e1_;
          return _e8_}
        return caml_call2(Stdlib_list[16],_e0_,el)}
      return caml_call2(Stdlib_list[16],_eZ_,el)}
    var Game_Collision_system=[0,init$0,update$0];
    caml_register_global(574,Game_Collision_system,"Game__Collision_system");
    var
     MissingKey=[248,cst_Game_Input_handler_Missing,caml_fresh_oo_id(0)],
     commands=caml_call2(Stdlib_hashtbl[1],0,17),
     keysDown=caml_call2(Stdlib_hashtbl[1],0,32);
    function get_key(key)
     {try
       {var _eX_=caml_call2(Stdlib_hashtbl[6],keysDown,key);return _eX_}
      catch(_eY_)
       {_eY_ = caml_wrap_exception(_eY_);
        if(_eY_ === Stdlib[8])throw [0,MissingKey,key];
        throw _eY_}}
    function set_key(key,b)
     {return caml_call3(Stdlib_hashtbl[11],keysDown,key,b)}
    function get_active_key(param)
     {function _eW_(key,value,acc){return value?[0,key,value]:acc}
      return caml_call3(Stdlib_hashtbl[14],_eW_,keysDown,_c_)}
    function register_command(ev,f)
     {var _eV_=0 !== ev?1:0;
      return _eV_?caml_call3(Stdlib_hashtbl[5],commands,ev,f):_eV_}
    function get_commands(ev)
     {return caml_call2(Stdlib_hashtbl[8],commands,ev)}
    function reset_all$0(param)
     {caml_call1(Stdlib_hashtbl[2],commands);
      return caml_call1(Stdlib_hashtbl[2],keysDown)}
    var
     Game_Input_handler=
      [0,
       register_command,
       get_commands,
       get_key,
       set_key,
       get_active_key,
       reset_all$0];
    caml_register_global(575,Game_Input_handler,"Game__Input_handler");
    function init$1(param){return 0}
    function update$1(dt,el)
     {for(;;)
       {var ev=caml_call1(Gfx[21],0);
        if(typeof ev === "number")return 0;
        var _eT_=get_commands(ev),_eU_=function(f){return caml_call1(f,0)};
        caml_call2(Stdlib_list[15],_eU_,_eT_);
        continue}}
    var Game_Control_system=[0,init$1,update$1];
    caml_register_global(576,Game_Control_system,"Game__Control_system");
    var ctx=[0,0];
    function init$2(param)
     {var match=caml_call1(Gfx[4],cst_canvas),c=match[2];
      ctx[1] = [0,c];
      return 0}
    var cpt$0=[0,0.],time$0=[0,0.];
    function update$2(dt,el)
     {var ctx$0=caml_call1(Stdlib_option[4],ctx[1]);
      caml_call5(Gfx[13],ctx$0,0,0,800,640);
      function _eK_(a,b)
       {var aP=caml_call1(Priority[2],a),bP=caml_call1(Priority[2],b);
        return aP - bP | 0}
      var list_sort=caml_call2(Stdlib_list[49],_eK_,el);
      function _eL_(e)
       {var pos=caml_call1(Position[2],e);
        try {var _eR_=caml_call1(Box[2],e),box=_eR_}catch(_eS_){var box=_d_}
        var color=caml_call1(Surface[2],e);
        if(caml_call1(TextD[4],e))
         {var text=caml_call1(TextD[2],e);
          caml_call8
           (Gfx[19],
            ctx$0,
            text[1],
            text[4] | 0,
            text[5] | 0,
            text[2],
            text[3],
            80.,
            1.)}
        switch(color[0])
         {case 0:
           var color1=color[1];
           return caml_call6
                   (Gfx[12],ctx$0,pos[1] | 0,pos[2] | 0,box[1],box[2],color1);
          case 1:
           var image=color[1];
           return caml_call6
                   (Gfx[9],ctx$0,image,pos[1] | 0,pos[2] | 0,box[1],box[2]);
          case 2:
           var
            anim=color[1],
            speed=caml_call1(Velocity[2],e),
            _eM_=box[2],
            _eN_=box[1],
            _eO_=pos[2] | 0,
            _eP_=pos[1] | 0,
            _eQ_=get_frame(anim,speed[1] | 0,dt,time$0,cpt$0);
           return caml_call6(Gfx[9],ctx$0,_eQ_,_eP_,_eO_,_eN_,_eM_);
          default:
           var tilemap=color[1];
           return draw_tilemap(tilemap,ctx$0,pos[1] | 0,pos[2] | 0)}}
      return caml_call2(Stdlib_list[15],_eL_,list_sort)}
    var Game_Draw_system=[0,ctx,init$2,cpt$0,time$0,update$2];
    caml_register_global(578,Game_Draw_system,"Game__Draw_system");
    function init$3(param){return 0}
    function update$3(dt,el)
     {function _eE_(e)
       {var name=caml_call1(Name[2],e);
        if(0 === caml_call2(Stdlib_string[33],name,cst_player))
         {var vf=caml_call1(InvunerableFrame[2],e),_eF_=0 < vf?1:0;
          return _eF_?caml_call2(InvunerableFrame[1],e,vf - 1 | 0):_eF_}
        if(0 === caml_call2(Stdlib_string[33],name,cst_spider))
         {var
           cpt=caml_call1(Cpt[2],e),
           _eG_=1. < caml_sys_time(0) - cpt[1]?1:0;
          return _eG_
                  ?(caml_call1(cpt[2],e),
                    set_cpt(cpt,caml_sys_time(0)),
                    caml_call1(Stdlib_random[3],0))
                  :_eG_}
        var _eH_=0 === caml_call2(Stdlib_string[33],name,cst_skeleton)?1:0;
        if(_eH_)
         {var
           cpt$0=caml_call1(Cpt[2],e),
           _eI_=1.5 < caml_sys_time(0) - cpt$0[1]?1:0;
          if(_eI_)
           {caml_call1(cpt$0[2],e);return set_cpt(cpt$0,caml_sys_time(0))}
          var _eJ_=_eI_}
        else
         var _eJ_=_eH_;
        return _eJ_}
      return caml_call2(Stdlib_list[15],_eE_,el)}
    var Game_Logic_system=[0,init$3,update$3];
    caml_register_global(581,Game_Logic_system,"Game__Logic_system");
    function init$4(param){return 0}
    var time$1=[0,0.];
    function absF(f){return 0. < f?f:f * -1.}
    function notNul(f){return 0. < f?1.:f < 0.?-1.:0.}
    function maxF(a,b){return runtime.caml_greaterequal(a,b)?a:b}
    function move_to(e1,e2)
     {var
       posE1=caml_call1(Position[2],e1),
       posE2=caml_call1(Position[2],e2),
       vecE1=caml_call1(Velocity[2],e1),
       distX=posE2[1] - posE1[1],
       distY=posE2[2] - posE1[2],
       anim=caml_call1(Surface[2],e1),
       stats=caml_call1(Statistics[2],e1),
       speed=stats[3],
       _ex_=absF(distY);
      if(20. < absF(distX) - _ex_)
       {var _ey_=mult(speed,[254,notNul(distX),0.]);
        caml_call2(Velocity[1],e1,_ey_)}
      else
       {var _eC_=absF(distX);
        if(20. < absF(distY) - _eC_)
         {var _eD_=mult(speed,[254,0.,notNul(distY)]);
          caml_call2(Velocity[1],e1,_eD_)}}
      var newV=caml_call1(Velocity[2],e1),_ez_=1 - is_equal(vecE1,newV);
      if(_ez_)
       {if(is_equal(newV,[254,- speed,0.]))
         return play_idle(anim,cst_left_walk);
        if(is_equal(newV,[254,speed,0.]))
         return play_idle(anim,cst_right_walk);
        if(is_equal(newV,[254,0.,- speed]))
         return play_idle(anim,cst_back_walk);
        var _eA_=is_equal(newV,[254,0.,speed]);
        if(_eA_)return play_idle(anim,cst_front_walk);
        var _eB_=_eA_}
      else
       var _eB_=_ez_;
      return _eB_}
    function update$4(dt,el)
     {var
       delta_t=
        caml_call2(Stdlib[16],0.0166666666666666664,1000. * (dt - time$1[1])),
       _eq_=caml_call1(Name[3],0);
      function _er_(kv)
       {return 0 === caml_call2(Stdlib_string[33],kv[2],cst_player$0)?1:0}
      var player=caml_call2(Stdlib_list[34],_er_,_eq_)[1];
      time$1[1] = dt;
      function _es_(e)
       {var
         _et_=caml_call1(Name[2],e),
         _eu_=0 === caml_call2(Stdlib_string[33],_et_,cst_ennemy)?1:0;
        if(_eu_)
         var _ev_=_eu_;
        else
         var
          _ew_=caml_call1(Name[2],e),
          _ev_=0 === caml_call2(Stdlib_string[33],_ew_,cst_skeleton$0)?1:0;
        if(_ev_)move_to(e,player);
        var
         pos=caml_call1(Position[2],e),
         speed=mult(delta_t,caml_call1(Velocity[2],e));
        return caml_call2
                (Position[1],e,[254,pos[1] + speed[1],pos[2] + speed[2]])}
      return caml_call2(Stdlib_list[15],_es_,el)}
    var Game_Move_system=[0,init$4,time$1,absF,notNul,maxF,move_to,update$4];
    caml_register_global(582,Game_Move_system,"Game__Move_system");
    function Make(T)
     {var elem_list=[0,0],elem_table=caml_call1(Ecs_Entity[8][1],16);
      function register(e)
       {var
         _eo_=1 - caml_call2(Ecs_Entity[8][11],elem_table,e),
         _ep_=
          _eo_
           ?(caml_call3(Ecs_Entity[8][5],elem_table,e,0),
             elem_list[1]
             =
             [0,e,elem_list[1]],
             0)
           :_eo_;
        return _ep_}
      function unregister(e)
       {caml_call2(Ecs_Entity[8][6],elem_table,e);
        var _em_=elem_list[1];
        function _en_(x){return caml_notequal(x,e)}
        elem_list[1] = caml_call2(Stdlib_list[36],_en_,_em_);
        return 0}
      function init(param){return caml_call1(T[1],0)}
      function update(dt){return caml_call2(T[2],dt,elem_list[1])}
      function reset(param)
       {elem_list[1] = 0;return caml_call1(Ecs_Entity[8][2],elem_table)}
      return [0,init,update,register,unregister,reset]}
    var systems=[0,0];
    function register(m){systems[1] = [0,m,systems[1]];return 0}
    function init_all(param)
     {var _ek_=systems[1];
      function _el_(m){return caml_call1(m[1],0)}
      return caml_call2(Stdlib_list[15],_el_,_ek_)}
    function update_all(dt)
     {var _ei_=systems[1];
      function _ej_(m){return caml_call1(m[2],dt)}
      return caml_call2(Stdlib_list[15],_ej_,_ei_)}
    function reset_all$1(dt)
     {var _eg_=systems[1];
      function _eh_(m){return caml_call1(m[5],0)}
      return caml_call2(Stdlib_list[15],_eh_,_eg_)}
    var Game_System=[0,Make,systems,register,init_all,update_all,reset_all$1];
    caml_register_global(584,Game_System,"Game__System");
    var
     Control_S=Make(Game_Control_system),
     Draw_S=Make([0,init$2,update$2]),
     Move_S=Make([0,init$4,update$4]),
     Collision_S=Make(Game_Collision_system),
     Logic_S=Make(Game_Logic_system),
     Cleaning_S=Make(Game_Cleaning_system);
    register(Cleaning_S);
    register(Draw_S);
    register(Move_S);
    register(Control_S);
    register(Collision_S);
    register(Logic_S);
    var
     Game_System_defs=
      [0,Control_S,Draw_S,Move_S,Collision_S,Logic_S,Cleaning_S];
    caml_register_global(585,Game_System_defs,"Game__System_defs");
    function collision(e1,e2)
     {var
       box1=caml_call1(Box[2],e1),
       boxC1=caml_call1(BoxCollider[2],e1),
       pos1=margin(box1,boxC1,caml_call1(Position[2],e1)),
       rpos1=caml_call1(Position[2],e1),
       box2=caml_call1(Box[2],e2),
       boxC2=caml_call1(BoxCollider[2],e2),
       pos2=margin(box2,boxC2,caml_call1(Position[2],e2)),
       rpos2=caml_call1(Position[2],e2),
       v1=caml_call1(Velocity[2],e1),
       v2=caml_call1(Velocity[2],e2),
       match=mdiff(pos2,boxC2,pos1,boxC1),
       s_rect=match[2],
       s_pos=match[1],
       a=[254,s_pos[1],0.],
       b=[254,s_rect[1] + s_pos[1],0.],
       c=[254,0.,s_pos[2]],
       d=[254,0.,s_rect[2] + s_pos[2]],
       _ea_=[0,b,[0,c,[0,d,0]]];
      function _eb_(min_v,v)
       {var _ef_=norm(min_v);return norm(v) < _ef_?v:min_v}
      var
       n=caml_call3(Stdlib_list[21],_eb_,a,_ea_),
       n_v1=norm(v1),
       n_v2=norm(v2),
       s=n_v1 + n_v2,
       n1=n_v1 / s,
       n2=n_v2 / s,
       delta_pos1=mult(n1,n),
       delta_pos2=mult(- n2,n),
       _ec_=add(rpos1,delta_pos1);
      caml_call2(Position[1],e1,_ec_);
      var _ed_=add(rpos2,delta_pos2);
      caml_call2(Position[1],e2,_ed_);
      var _ee_=caml_call1(Name[2],e2);
      if(0 === caml_call2(Stdlib_string[33],_ee_,cst_spider$0))
       {var
         n$0=normalize(n),
         v=sub(v1,v2),
         m1=caml_call1(Mass[2],e1),
         m2=caml_call1(Mass[2],e2),
         switch$0=0;
        if(caml_call1(Stdlib_float[14],m1) && caml_call1(Stdlib_float[14],m2))
         if(n_v1 == 0.)
          var m1$0=m1,m2$0=1.;
         else
          if(n_v2 == 0.)var m1$0=1.,m2$0=m2;else var m1$0=0.,m2$0=0.;
        else
         switch$0 = 1;
        if(switch$0)var m1$0=m1,m2$0=m2;
        var
         j=-2. * dot(v,n$0) / (1. / m1$0 + 1. / m2$0),
         new_v1=add(v1,mult(j / m1$0,n$0)),
         new_v2=sub(v2,mult(j / m2$0,n$0));
        caml_call2(Velocity[1],e1,new_v1);
        caml_call2(Velocity[1],e2,new_v2)}
      return 0}
    function create(x,y,w,h)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Box[1],e,[0,w,h]);
      caml_call2(BoxCollider[1],e,[0,w,h]);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Priority[1],e,1);
      caml_call2(Name[1],e,cst_wall);
      caml_call2(CollisionResolver[1],e,collision);
      caml_call1(Collision_S[3],e);
      return e}
    var Game_Wall=[0,collision,create];
    caml_register_global(587,Game_Wall,"Game__Wall");
    function create$0(posX,posY,velX,velY,trappeur_img)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,posX,posY]);
      caml_call2(Velocity[1],e,[254,velX,velY]);
      caml_call2(Mass[1],e,20.);
      caml_call2(Box[1],e,_e_);
      caml_call2(BoxCollider[1],e,_f_);
      caml_call2(Name[1],e,cst_trappeur);
      var anim=create_animation(trappeur_img,3,4,160,160,40,40);
      caml_call2(Surface[1],e,anim);
      create_idle(cst_front_walk$0,_g_,anim);
      create_idle(cst_right_walk$0,_h_,anim);
      create_idle(cst_back_walk$0,_i_,anim);
      create_idle(cst_left_walk$0,_j_,anim);
      play_idle(anim,cst_front_walk$1);
      caml_call2(Priority[1],e,2);
      return e}
    function reset(e,x,y){return caml_call2(Position[1],e,[254,x,y])}
    function stop(e){return caml_call2(Velocity[1],e,zero)}
    var Game_Trappeur=[0,create$0,reset,stop];
    caml_register_global(588,Game_Trappeur,"Game__Trappeur");
    function create$1(posX,posY,img,lvl)
     {caml_call1(Stdlib_random[3],0);
      var
       velX=caml_call1(Stdlib_random[5],75) + 100 | 0,
       velY=caml_call1(Stdlib_random[5],75) + 100 | 0,
       e=caml_call1(Ecs_Entity[1],0),
       anim=create_animation(img,9,1,40,40,40,40);
      caml_call2(Position[1],e,[254,posX,posY]);
      caml_call2(Velocity[1],e,[254,velX,velY]);
      caml_call2(Mass[1],e,5.);
      caml_call2(Box[1],e,_k_);
      caml_call2(BoxCollider[1],e,_l_);
      caml_call2(Name[1],e,cst_spider$1);
      caml_call2(Surface[1],e,anim);
      create_idle(cst_front_walk$2,_m_,anim);
      caml_call2(Priority[1],e,2);
      caml_call2(Health[1],e,1 + ((lvl - 1 | 0) % 3 | 0) | 0);
      caml_call2(Active[1],e,1);
      caml_call1(Cleaning_S[3],e);
      return e}
    function reset$0(e,x,y){return caml_call2(Position[1],e,[254,x,y])}
    function stop$0(e){return caml_call2(Velocity[1],e,zero)}
    var Game_Spider=[0,create$1,reset$0,stop$0];
    caml_register_global(589,Game_Spider,"Game__Spider");
    function create$2(posX,posY,img,lvl)
     {var
       e=caml_call1(Ecs_Entity[1],0),
       anim=create_animation(img,3,4,160,160,40,40);
      caml_call2(Position[1],e,[254,posX,posY]);
      caml_call2(Velocity[1],e,_n_);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,_o_);
      caml_call2(BoxCollider[1],e,_p_);
      caml_call2(Name[1],e,cst_skeleton$1);
      caml_call2(Surface[1],e,anim);
      create_idle(cst_front_walk$3,_q_,anim);
      create_idle(cst_right_walk$1,_r_,anim);
      create_idle(cst_back_walk$1,_s_,anim);
      create_idle(cst_left_walk$1,_t_,anim);
      play_idle(anim,cst_front_walk$4);
      caml_call2(Priority[1],e,2);
      caml_call2(Health[1],e,2 + (lvl % 3 | 0) | 0);
      caml_call2(Active[1],e,1);
      caml_call2(Statistics[1],e,_u_);
      caml_call1(Cleaning_S[3],e);
      return e}
    function reset$1(e,x,y){return caml_call2(Position[1],e,[254,x,y])}
    function stop$1(e){return caml_call2(Velocity[1],e,zero)}
    var Game_Skeleton=[0,create$2,reset$1,stop$1];
    caml_register_global(590,Game_Skeleton,"Game__Skeleton");
    function hit(e,degat,spawnHeart)
     {var hp=caml_call1(Health[2],e);
      caml_call2(Health[1],e,hp - (degat | 0) | 0);
      var _d$_=(hp - (degat | 0) | 0) <= 0?1:0;
      if(_d$_)
       {var pos=caml_call1(Position[2],e);
        caml_call1(Stdlib_random[3],0);
        if(0 === caml_call1(Stdlib_random[5],5))
         caml_call2(spawnHeart,pos[1],pos[2]);
        caml_call1(Collision_S[4],e);
        caml_call1(Control_S[4],e);
        caml_call1(Draw_S[4],e);
        caml_call1(Move_S[4],e);
        caml_call1(Logic_S[4],e);
        return caml_call2(Active[1],e,0)}
      return _d$_}
    function create$3(posX,posY,velX,velY,img)
     {var
       e=caml_call1(Ecs_Entity[1],0),
       anim=create_animation(img,3,4,160,160,40,40);
      caml_call2(Position[1],e,[254,posX,posY]);
      caml_call2(Velocity[1],e,[254,velX,velY]);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,_v_);
      caml_call2(BoxCollider[1],e,_w_);
      caml_call2(Name[1],e,cst_ennemy$0);
      caml_call2(Surface[1],e,anim);
      create_idle(cst_front_walk$5,_x_,anim);
      create_idle(cst_right_walk$2,_y_,anim);
      create_idle(cst_back_walk$2,_z_,anim);
      create_idle(cst_left_walk$2,_A_,anim);
      play_idle(anim,cst_front_walk$6);
      caml_call2(Priority[1],e,2);
      caml_call2(Active[1],e,1);
      caml_call1(Cleaning_S[3],e);
      return e}
    function reset$2(e,x,y){return caml_call2(Position[1],e,[254,x,y])}
    function stop$2(e){return caml_call2(Velocity[1],e,zero)}
    var Game_Enemy=[0,create$3,reset$2,stop$2,hit];
    caml_register_global(591,Game_Enemy,"Game__Enemy");
    function destruction(e)
     {caml_call1(Collision_S[4],e);
      caml_call1(Control_S[4],e);
      caml_call1(Draw_S[4],e);
      caml_call1(Move_S[4],e);
      caml_call1(Logic_S[4],e);
      return caml_call2(Active[1],e,0)}
    function create$4(posX,posY,mine_img)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,posX,posY]);
      caml_call2(Velocity[1],e,_B_);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,_C_);
      caml_call2(BoxCollider[1],e,_D_);
      caml_call2(Name[1],e,cst_mine);
      var _d__=create_img(mine_img,40,40);
      caml_call2(Surface[1],e,_d__);
      caml_call2(Priority[1],e,2);
      caml_call2(Active[1],e,1);
      caml_call1(Cleaning_S[3],e);
      return e}
    function reset$3(e,x,y){return caml_call2(Position[1],e,[254,x,y])}
    function stop$3(e){return caml_call2(Velocity[1],e,zero)}
    var Game_Mine=[0,destruction,create$4,reset$3,stop$3];
    caml_register_global(592,Game_Mine,"Game__Mine");
    function delete$0(e)
     {caml_call1(Move_S[4],e);
      caml_call1(Draw_S[4],e);
      caml_call1(Collision_S[4],e);
      return caml_call2(Active[1],e,0)}
    function collision$0(spawnHeart,e1,e2)
     {var _d8_=caml_call1(Name[4],e2);
      if(_d8_)
       {var
         name=caml_call1(Name[2],e2),
         stats=caml_call1(Statistics[2],e1),
         switch$0=0;
        if
         (0
          !==
          caml_call2(Stdlib_string[33],name,cst_wall$0)
          &&
          0
          !==
          caml_call2(Stdlib_string[33],name,cst_bottom)
          &&
          0
          !==
          caml_call2(Stdlib_string[33],name,cst_top)
          &&
          0
          !==
          caml_call2(Stdlib_string[33],name,cst_right)
          &&
          0
          !==
          caml_call2(Stdlib_string[33],name,cst_left))
         {var switch$1=0;
          if
           (0
            !==
            caml_call2(Stdlib_string[33],name,cst_ennemy$1)
            &&
            0
            !==
            caml_call2(Stdlib_string[33],name,cst_skeleton$2))
           {if(0 === caml_call2(Stdlib_string[33],name,cst_spider$2))
             {hit(e2,stats[1],spawnHeart);return delete$0(e1)}
            if(0 === caml_call2(Stdlib_string[33],name,cst_mine$0))
             {destruction(e2);return delete$0(e1)}
            var _d9_=0;
            switch$0 = 1;
            switch$1 = 1}
          if(! switch$1){hit(e2,stats[1],spawnHeart);return delete$0(e1)}}
        if(! switch$0)return delete$0(e1)}
      else
       var _d9_=_d8_;
      return _d9_}
    function create$5(name,x,y,img,velX,velY,idle,degat,spawnHeart)
     {var
       e=caml_call1(Ecs_Entity[1],0),
       anim=create_animation(img,4,4,20,20,20,20);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Velocity[1],e,[254,velX,velY]);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,_E_);
      caml_call2(BoxCollider[1],e,_F_);
      caml_call2(Name[1],e,name);
      caml_call2(Surface[1],e,anim);
      create_idle(cst_right_shot,_G_,anim);
      create_idle(cst_down_shot,_H_,anim);
      create_idle(cst_left_shot,_I_,anim);
      create_idle(cst_up_shot,_J_,anim);
      play_idle(anim,idle);
      caml_call2(Priority[1],e,2);
      function _d5_(_d6_,_d7_){return collision$0(spawnHeart,_d6_,_d7_)}
      caml_call2(CollisionResolver[1],e,_d5_);
      caml_call2(Active[1],e,1);
      caml_call2(Statistics[1],e,[254,degat,0.,0.]);
      caml_call1(Cleaning_S[3],e);
      caml_call1(Move_S[3],e);
      caml_call1(Draw_S[3],e);
      caml_call1(Collision_S[3],e);
      return e}
    var Game_Projectile=[0,delete$0,collision$0,create$5];
    caml_register_global(593,Game_Projectile,"Game__Projectile");
    function create$6(name,x,y,img)
     {var
       e=caml_call1(Ecs_Entity[1],0),
       anim=create_animation(img,3,4,160,160,40,40);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,_K_);
      caml_call2(BoxCollider[1],e,_L_);
      caml_call2(Name[1],e,name);
      caml_call2(Surface[1],e,anim);
      create_idle(cst_front_walk$7,_M_,anim);
      create_idle(cst_right_walk$3,_N_,anim);
      create_idle(cst_back_walk$3,_O_,anim);
      create_idle(cst_left_walk$3,_P_,anim);
      create_idle(cst_front,_Q_,anim);
      create_idle(cst_right$0,_R_,anim);
      create_idle(cst_back,_S_,anim);
      create_idle(cst_left$0,_T_,anim);
      play_idle(anim,cst_front$0);
      caml_call2(Orientation[1],e,_U_);
      caml_call2(Priority[1],e,2);
      caml_call2(InvunerableFrame[1],e,0);
      caml_call2(Statistics[1],e,_V_);
      caml_call1(Collision_S[3],e);
      caml_call1(Control_S[3],e);
      caml_call1(Draw_S[3],e);
      caml_call1(Move_S[3],e);
      caml_call1(Logic_S[3],e);
      return e}
    function reset$4(e,x,y){return caml_call2(Position[1],e,[254,x,y])}
    function move_up(e)
     {var
       isPushed=get_key(cst_up),
       stats=caml_call1(Statistics[2],e),
       _d4_=1 - isPushed;
      if(_d4_)
       {var anim=caml_call1(Surface[2],e);
        set_key(cst_up$0,1);
        play_idle(anim,cst_back_walk$4);
        caml_call2(Velocity[1],e,[254,0.,-1. * stats[3]]);
        return caml_call2(Orientation[1],e,_W_)}
      return _d4_}
    function move_down(e)
     {var
       isPushed=get_key(cst_down),
       stats=caml_call1(Statistics[2],e),
       _d3_=1 - isPushed;
      if(_d3_)
       {var anim=caml_call1(Surface[2],e);
        set_key(cst_down$0,1);
        play_idle(anim,cst_front_walk$8);
        caml_call2(Velocity[1],e,[254,0.,stats[3]]);
        return caml_call2(Orientation[1],e,_X_)}
      return _d3_}
    function move_right(e)
     {var
       isPushed=get_key(cst_right$1),
       stats=caml_call1(Statistics[2],e),
       _d2_=1 - isPushed;
      if(_d2_)
       {var anim=caml_call1(Surface[2],e);
        set_key(cst_right$2,1);
        play_idle(anim,cst_right_walk$4);
        caml_call2(Velocity[1],e,[254,stats[3],0.]);
        return caml_call2(Orientation[1],e,_Y_)}
      return _d2_}
    function move_left(e)
     {var
       isPushed=get_key(cst_left$1),
       stats=caml_call1(Statistics[2],e),
       _d1_=1 - isPushed;
      if(_d1_)
       {var anim=caml_call1(Surface[2],e);
        set_key(cst_left$2,1);
        play_idle(anim,cst_left_walk$4);
        caml_call2(Velocity[1],e,[254,-1. * stats[3],0.]);
        return caml_call2(Orientation[1],e,_Z_)}
      return _d1_}
    function stop$4(key,e)
     {var anim=caml_call1(Surface[2],e),stats=caml_call1(Statistics[2],e);
      set_key(key,0);
      var match=get_active_key(0),value=match[2],nextKey=match[1];
      if(0 === caml_call2(Stdlib_string[33],key,cst_down$1))
       {play_idle(anim,cst_front$1);caml_call2(Orientation[1],e,___)}
      if(0 === caml_call2(Stdlib_string[33],key,cst_up$1))
       {play_idle(anim,cst_back$0);caml_call2(Orientation[1],e,_$_)}
      if(0 === caml_call2(Stdlib_string[33],key,cst_right$3))
       {play_idle(anim,cst_right$4);caml_call2(Orientation[1],e,_aa_)}
      if(0 === caml_call2(Stdlib_string[33],key,cst_left$3))
       {play_idle(anim,cst_left$4);caml_call2(Orientation[1],e,_ab_)}
      caml_call2(Velocity[1],e,zero);
      var
       _dX_=0 === caml_call2(Stdlib_string[33],nextKey,cst_down$2)?1:0,
       value$0=_dX_?value:_dX_;
      if(value$0)
       {play_idle(anim,cst_front_walk$9);
        caml_call2(Velocity[1],e,[254,0.,1. * stats[3]]);
        caml_call2(Orientation[1],e,_ac_)}
      var
       _dY_=0 === caml_call2(Stdlib_string[33],nextKey,cst_up$2)?1:0,
       value$1=_dY_?value:_dY_;
      if(value$1)
       {play_idle(anim,cst_back_walk$5);
        caml_call2(Velocity[1],e,[254,0.,-1. * stats[3]]);
        caml_call2(Orientation[1],e,_ad_)}
      var
       _dZ_=0 === caml_call2(Stdlib_string[33],nextKey,cst_right$5)?1:0,
       value$2=_dZ_?value:_dZ_;
      if(value$2)
       {play_idle(anim,cst_right_walk$5);
        caml_call2(Velocity[1],e,[254,1. * stats[3],0.]);
        caml_call2(Orientation[1],e,_ae_)}
      var
       _d0_=0 === caml_call2(Stdlib_string[33],nextKey,cst_left$5)?1:0,
       value$3=_d0_?value:_d0_;
      return value$3
              ?(play_idle(anim,cst_left_walk$5),
                caml_call2(Velocity[1],e,[254,-1. * stats[3],0.]),
                caml_call2(Orientation[1],e,_af_))
              :value$3}
    var
     Game_Player=
      [0,create$6,reset$4,move_up,move_down,move_right,move_left,stop$4];
    caml_register_global(594,Game_Player,"Game__Player");
    function create$7(x,y,name,img,stat,text,imgx,imgy)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Box[1],e,_ag_);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Name[1],e,name);
      var _dV_=create_img_scale(img,40,40,imgx,imgy);
      caml_call2(Surface[1],e,_dV_);
      var
       _dW_=
        [0,
         text,
         cst_12px_Verdana,
         caml_call4(Gfx[11],255,255,255,255),
         x,
         y + 50.];
      caml_call2(TextD[1],e,_dW_);
      caml_call2(Priority[1],e,1);
      caml_call2(Statistics[1],e,stat);
      return e}
    function changePos(e,x,y)
     {var text=caml_call1(TextD[2],e);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(TextD[1],e,[0,text[1],text[2],text[3],x,y + 50.]);
      return 0}
    function changeSize(e,size)
     {var
       text=caml_call1(TextD[2],e),
       sizeT=caml_call1(Stdlib[33],size),
       _dR_=text[5],
       _dS_=text[4],
       _dT_=text[3],
       _dU_=caml_call2(Stdlib[28],sizeT,cst_px_Verdana);
      caml_call2(TextD[1],e,[0,text[1],_dU_,_dT_,_dS_,_dR_]);
      return 0}
    var Game_Objet=[0,create$7,changePos,changeSize];
    caml_register_global(595,Game_Objet,"Game__Objet");
    function create$8(name,x,y,palette,map,size)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Name[1],e,name);
      var _dQ_=create_tilemap(palette,map,size);
      caml_call2(Surface[1],e,_dQ_);
      caml_call2(Priority[1],e,0);
      return e}
    var Game_Map=[0,create$8];
    caml_register_global(596,Game_Map,"Game__Map");
    function create$9(x,y,name,img,text,sizex,sizey,mx,my)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Box[1],e,[0,sizex,sizey]);
      caml_call2(BoxCollider[1],e,[0,sizex,sizey]);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Name[1],e,name);
      var _dO_=create_img(img,40,40);
      caml_call2(Surface[1],e,_dO_);
      var
       _dP_=
        [0,
         text,
         cst_18px_Verdana,
         caml_call4(Gfx[11],255,255,255,255),
         x + mx,
         y + my];
      caml_call2(TextD[1],e,_dP_);
      caml_call2(Priority[1],e,1);
      caml_call1(Draw_S[3],e);
      return e}
    function changePos$0(e,x,y,mx,my)
     {var text=caml_call1(TextD[2],e);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(TextD[1],e,[0,text[1],text[2],text[3],x + mx,y + my]);
      return 0}
    function changeText(e,t)
     {var text=caml_call1(TextD[2],e);
      caml_call2(TextD[1],e,[0,t,text[2],text[3],text[4],text[5]]);
      return 0}
    function changeSize$0(e,size)
     {var
       text=caml_call1(TextD[2],e),
       sizeT=caml_call1(Stdlib[33],size),
       _dK_=text[5],
       _dL_=text[4],
       _dM_=text[3],
       _dN_=caml_call2(Stdlib[28],sizeT,cst_px_Verdana$0);
      caml_call2(TextD[1],e,[0,text[1],_dN_,_dM_,_dL_,_dK_]);
      return 0}
    var Game_Info=[0,create$9,changePos$0,changeText,changeSize$0];
    caml_register_global(597,Game_Info,"Game__Info");
    function create$10(x,y,img)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Box[1],e,_ah_);
      caml_call2(BoxCollider[1],e,_ai_);
      caml_call2(Velocity[1],e,zero);
      var _dJ_=create_img(img,40,40);
      caml_call2(Surface[1],e,_dJ_);
      caml_call2(Priority[1],e,1);
      caml_call1(Draw_S[3],e);
      return e}
    var Game_Heart=[0,create$10];
    caml_register_global(598,Game_Heart,"Game__Heart");
    function create$11(posX,posY,img,lvl)
     {var
       e=caml_call1(Ecs_Entity[1],0),
       anim=create_animation(img,3,4,160,160,40,40);
      caml_call2(Position[1],e,[254,posX,posY]);
      caml_call2(Velocity[1],e,_aj_);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,_ak_);
      caml_call2(BoxCollider[1],e,_al_);
      caml_call2(Name[1],e,cst_ennemy$2);
      caml_call2(Surface[1],e,anim);
      create_idle(cst_front_walk$10,_am_,anim);
      create_idle(cst_right_walk$6,_an_,anim);
      create_idle(cst_back_walk$6,_ao_,anim);
      create_idle(cst_left_walk$6,_ap_,anim);
      play_idle(anim,cst_front_walk$11);
      caml_call2(Priority[1],e,2 + (lvl % 3 | 0) | 0);
      caml_call2(Health[1],e,4);
      caml_call2(Active[1],e,1);
      caml_call2(Statistics[1],e,_aq_);
      caml_call1(Cleaning_S[3],e);
      return e}
    function reset$5(e,x,y){return caml_call2(Position[1],e,[254,x,y])}
    function stop$5(e){return caml_call2(Velocity[1],e,zero)}
    var Game_Gobelin=[0,create$11,reset$5,stop$5];
    caml_register_global(599,Game_Gobelin,"Game__Gobelin");
    var
     map=
      [0,
       _aE_.slice(),
       _aD_.slice(),
       _aC_.slice(),
       _aB_.slice(),
       _aA_.slice(),
       _az_.slice(),
       _ay_.slice(),
       _ax_.slice(),
       _aw_.slice(),
       _av_.slice(),
       _au_.slice(),
       _at_.slice(),
       _as_.slice(),
       _ar_.slice()],
     _aF_=caml_call4(Gfx[11],255,0,0,255),
     _aG_=caml_call4(Gfx[11],0,255,0,255),
     _aH_=caml_call4(Gfx[11],0,0,255,255),
     _aI_=caml_call4(Gfx[11],61,61,61,255),
     _aJ_=caml_call4(Gfx[11],130,130,130,255),
     palette=[0,caml_call4(Gfx[11],0,0,0,255),_aJ_,_aI_,_aH_,_aG_,_aF_],
     Game_Global=[0,map,palette,doorTop,doorBottom,doorLeft,doorRight];
    caml_register_global(600,Game_Global,"Game__Global");
    function create$12(x,y)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Box[1],e,_aK_);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Surface[1],e,gray);
      caml_call2(Priority[1],e,0);
      caml_call1(Draw_S[3],e);
      return e}
    var Game_Background=[0,create$12];
    caml_register_global(601,Game_Background,"Game__Background");
    function dead(e)
     {caml_call1(Collision_S[4],e);
      caml_call1(Control_S[4],e);
      caml_call1(Draw_S[4],e);
      caml_call1(Logic_S[4],e);
      return caml_call2(Active[1],e,0)}
    function create$13(x,y,img)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Box[1],e,_aL_);
      caml_call2(Name[1],e,cst_heart);
      caml_call2(Velocity[1],e,zero);
      var _dI_=create_img(img,40,40);
      caml_call2(Surface[1],e,_dI_);
      caml_call2(Priority[1],e,1);
      caml_call2(Active[1],e,1);
      caml_call2(BoxCollider[1],e,_aM_);
      return e}
    var Game_Consumable=[0,dead,create$13];
    caml_register_global(602,Game_Consumable,"Game__Consumable");
    function create$14(name,x,y,xt,yt)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Teleport[1],e,[254,xt,yt]);
      caml_call2(Box[1],e,_aN_);
      caml_call2(BoxCollider[1],e,_aO_);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Name[1],e,name);
      caml_call2(Surface[1],e,black);
      caml_call2(Priority[1],e,1);
      caml_call1(Draw_S[3],e);
      caml_call1(Collision_S[3],e);
      return e}
    var Game_Door=[0,create$14];
    caml_register_global(603,Game_Door,"Game__Door");
    function delete$1(e)
     {caml_call1(Move_S[4],e);
      caml_call1(Draw_S[4],e);
      caml_call1(Collision_S[4],e);
      return caml_call2(Active[1],e,0)}
    function create$15(name,x,y,img,velX,velY,degat)
     {var
       e=caml_call1(Ecs_Entity[1],0),
       anim=create_animation(img,7,1,80,80,20,20);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Velocity[1],e,[254,velX,velY]);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,_aP_);
      caml_call2(BoxCollider[1],e,_aQ_);
      caml_call2(Name[1],e,name);
      caml_call2(Surface[1],e,anim);
      create_idle(cst_fireball_idle,_aR_,anim);
      caml_call2(Priority[1],e,2);
      caml_call2(Active[1],e,1);
      caml_call2(Statistics[1],e,[254,degat,0.,0.]);
      return e}
    var Game_Fireball=[0,delete$1,create$15];
    caml_register_global(604,Game_Fireball,"Game__Fireball");
    var
     interface$0=[0,[0,[0],0,Ecs_Entity[7],Ecs_Entity[7],Ecs_Entity[7],_aS_]],
     player_state=[0,[0,3]],
     state=
      [0,
       [0,
        Ecs_Entity[7],
        1,
        [0,-1,Ecs_Entity[7],0,0,[0],[0]],
        [0],
        1,
        [0,Ecs_Entity[7],Ecs_Entity[7],Ecs_Entity[7],Ecs_Entity[7]],
        [0,Ecs_Entity[7],Ecs_Entity[7],Ecs_Entity[7],Ecs_Entity[7]],
        0]],
     cpt$1=[0,0.];
    function set_state(b){state[1][2] = b;return 0}
    function set_floor(f){state[1][5] = f;return 0}
    function get_player(param){return state[1][1]}
    function get_status(param){return state[1][2]}
    function get_state(param){return state[1]}
    function get_floor(param){return state[1][5]}
    function load_ennemie(e)
     {caml_call1(Collision_S[3],e);
      caml_call1(Control_S[3],e);
      caml_call1(Draw_S[3],e);
      caml_call1(Move_S[3],e);
      return caml_call1(Logic_S[3],e)}
    function unload_ennemie(e)
     {caml_call1(Collision_S[4],e);
      caml_call1(Control_S[4],e);
      caml_call1(Draw_S[4],e);
      caml_call1(Move_S[4],e);
      return caml_call1(Logic_S[4],e)}
    function active_length(l)
     {var l$0=l,acc=0;
      for(;;)
       {if(l$0)
         {var t=l$0[2],e=l$0[1];
          if(caml_call1(Active[4],e))
           {if(caml_call1(Active[2],e))
             {var acc$0=acc + 1 | 0,l$0=t,acc=acc$0;continue}
            var l$0=t;
            continue}
          var l$0=t;
          continue}
        return acc}}
    function check_ennemies(param)
     {var _dF_=state[1][4],_dG_=0;
      function _dH_(acc,e){return 0 < active_length(e[3])?1:acc}
      return caml_call3(Stdlib_array[17],_dH_,_dG_,_dF_)}
    function add_obstacle(e)
     {var
       room=state[1][3],
       update=[0,room[1],room[2],room[3],[0,e,room[4]],room[5],room[6]],
       _dD_=room[1];
      caml_check_bound(state[1][4],_dD_)[1 + _dD_] = update;
      var _dE_=state[1];
      state[1]
      =
      [0,_dE_[1],_dE_[2],update,_dE_[4],_dE_[5],_dE_[6],_dE_[7],_dE_[8]];
      return 0}
    function random_between(a,b)
     {caml_call1(Stdlib_random[3],0);
      return caml_call1(Stdlib_random[5],b - a | 0) + a | 0}
    function random_between_float(a,b)
     {caml_call1(Stdlib_random[3],0);
      return caml_call1(Stdlib_random[9],b - a) + a}
    function update_health(param)
     {var _dz_=interface$0[1][1];
      function _dA_(i,e)
       {return (player_state[1][1] - 1 | 0) < i
                ?(caml_call1(Draw_S[4],e),0)
                :(caml_call1(Draw_S[3],e),0)}
      caml_call2(Stdlib_array[14],_dA_,_dz_);
      var
       _dB_=0 === player_state[1][1]?1:0,
       _dC_=_dB_?(state[1][2] = 0,0):_dB_;
      return _dC_}
    function update_count_e(param)
     {var _dw_=state[1][4],_dx_=0;
      function _dy_(acc,e){return active_length(e[3]) + acc | 0}
      var
       c=caml_call3(Stdlib_array[17],_dy_,_dx_,_dw_),
       info=interface$0[1][4];
      changeText(info,caml_call1(Stdlib[33],c));
      return 0}
    function update_count_f(param)
     {var f=state[1][5],info=interface$0[1][5];
      changeText(info,caml_call1(Stdlib[33],f));
      return 0}
    function door_f(n)
     {if(3 < n >>> 0)return -1;
      switch(n)
       {case 0:return 2;case 1:return 3;case 2:return 0;default:return 1}}
    function spawnHeart(img,x,y)
     {var cons=create$13(x,y,img);
      add_obstacle(cons);
      load_ennemie(cons);
      return 0}
    function shot(heart_img,projectile_img,e)
     {var
       pos=caml_call1(Position[2],e),
       ori=caml_call1(Orientation[2],e),
       stats=caml_call1(Statistics[2],e);
      if(0.75 <= caml_sys_time(0) - cpt$1[1])
       {var _di_=ori[1],_dj_=ori[2];
        if(_dj_ != -1.)
         {if(_dj_ != 1.)
           {if(_di_ != -1.)
             {if(_di_ != 1.){cpt$1[1] = caml_sys_time(0);return 0}
              var
               _dk_=
                function(_du_,_dv_){return spawnHeart(heart_img,_du_,_dv_)},
               projectile=
                create$5
                 (cst_projectile,
                  pos[1] + 10.,
                  pos[2] + 10.,
                  projectile_img,
                  ori[1] * stats[2],
                  ori[2] * stats[2],
                  cst_right_shot$0,
                  stats[1],
                  _dk_);
              cpt$1[1] = caml_sys_time(0);
              add_obstacle(projectile);
              return 0}
            var
             _dl_=function(_ds_,_dt_){return spawnHeart(heart_img,_ds_,_dt_)},
             projectile$0=
              create$5
               (cst_projectile$0,
                pos[1] + 10.,
                pos[2] + 10.,
                projectile_img,
                ori[1] * stats[2],
                ori[2] * stats[2],
                cst_left_shot$0,
                stats[1],
                _dl_);
            cpt$1[1] = caml_sys_time(0);
            add_obstacle(projectile$0);
            return 0}
          var
           _dm_=function(_dq_,_dr_){return spawnHeart(heart_img,_dq_,_dr_)},
           projectile$1=
            create$5
             (cst_projectile$1,
              pos[1] + 10.,
              pos[2] + 10.,
              projectile_img,
              ori[1] * stats[2],
              ori[2] * stats[2],
              cst_down_shot$0,
              stats[1],
              _dm_);
          cpt$1[1] = caml_sys_time(0);
          add_obstacle(projectile$1);
          return 0}
        var
         _dn_=function(_do_,_dp_){return spawnHeart(heart_img,_do_,_dp_)},
         projectile$2=
          create$5
           (cst_projectile$2,
            pos[1] + 10.,
            pos[2] + 10.,
            projectile_img,
            ori[1] * stats[2],
            ori[2] * stats[2],
            cst_up_shot$0,
            stats[1],
            _dn_);
        cpt$1[1] = caml_sys_time(0);
        add_obstacle(projectile$2);
        return 0}
      return 0}
    function collisionMine(e1,e2)
     {var
       name=caml_call1(Name[2],e2),
       _df_=0 === caml_call2(Stdlib_string[33],name,cst_player$1)?1:0;
      if(_df_)
       {var vf=caml_call1(InvunerableFrame[2],e2),_dg_=0 === vf?1:0;
        if(_dg_)
         {player_state[1][1] = player_state[1][1] - 1 | 0;
          update_health(0);
          caml_call2(InvunerableFrame[1],e2,65);
          return destruction(e1)}
        var _dh_=_dg_}
      else
       var _dh_=_df_;
      return _dh_}
    function collisionFireball(e1,e2)
     {var name=caml_call1(Name[2],e2);
      if(0 === caml_call2(Stdlib_string[33],name,cst_player$2))
       {var vf=caml_call1(InvunerableFrame[2],e2),_c$_=0 === vf?1:0;
        return _c$_
                ?(player_state[1][1]
                  =
                  player_state[1][1]
                  -
                  1
                  |
                  0,
                  update_health(0),
                  caml_call2(InvunerableFrame[1],e2,65),
                  delete$1(e1))
                :_c$_}
      var _da_=0 === caml_call2(Stdlib_string[33],name,cst_wall$1)?1:0;
      if(_da_)
       var _db_=_da_;
      else
       {var _dc_=0 === caml_call2(Stdlib_string[33],name,cst_bottom$0)?1:0;
        if(_dc_)
         var _db_=_dc_;
        else
         {var _dd_=0 === caml_call2(Stdlib_string[33],name,cst_top$0)?1:0;
          if(_dd_)
           var _db_=_dd_;
          else
           var
            _de_=0 === caml_call2(Stdlib_string[33],name,cst_right$6)?1:0,
            _db_=
             _de_
             ||
             (0 === caml_call2(Stdlib_string[33],name,cst_left$6)?1:0)}}
      return _db_?delete$1(e1):_db_}
    function spawnMine(img,e)
     {var pos=caml_call1(Position[2],e),mine=create$4(pos[1],pos[2],img);
      caml_call2(CollisionResolver[1],mine,collisionMine);
      load_ennemie(mine);
      add_obstacle(mine);
      return 0}
    function collisionEnnemy(ennemy,e)
     {var
       name=caml_call1(Name[2],e),
       _c8_=0 === caml_call2(Stdlib_string[33],name,cst_player$4)?1:0;
      if(_c8_)
       {var vf=caml_call1(InvunerableFrame[2],e),_c9_=0 === vf?1:0;
        if(_c9_)
         {player_state[1][1] = player_state[1][1] - 1 | 0;
          update_health(0);
          return caml_call2(InvunerableFrame[1],e,65)}
        var _c__=_c9_}
      else
       var _c__=_c8_;
      return _c__}
    function generate_map(a,p,n,images)
     {function _cC_(e)
       {var
         entity=create$8(cst_map,0.,80.,p,a,40),
         floor=get_state(0)[5],
         nb=random_between(floor,floor + 2 | 0);
        function aux(nb,images)
         {if(0 === nb)return 0;
          caml_call1(Stdlib_random[3],0);
          var r$0=random_between(0,4);
          if(3 < r$0 >>> 0)
           var
            _c0_=random_between_float(160.,280.),
            spawn=[0,random_between_float(80.,240.),_c0_];
          else
           switch(r$0)
            {case 0:
              var
               _c1_=random_between_float(160.,280.),
               spawn=[0,random_between_float(80.,240.),_c1_];
              break;
             case 1:
              var
               _c2_=random_between_float(160.,280.),
               spawn=[0,random_between_float(540.,680.),_c2_];
              break;
             case 2:
              var
               _c3_=random_between_float(400.,540.),
               spawn=[0,random_between_float(540.,680.),_c3_];
              break;
             default:
              var
               _c4_=random_between_float(400.,540.),
               spawn=[0,random_between_float(80.,240.),_c4_]}
          var x=spawn[1],y=spawn[2];
          caml_call1(Stdlib_random[3],0);
          var r=random_between(0,3);
          if(2 < r >>> 0)
           var
            _cT_=state[1][5],
            e=
             create$11
              (x,y,caml_call2(Stdlib_hashtbl[6],images,cst_gobelin_img),_cT_);
          else
           switch(r)
            {case 0:
              var
               _cU_=state[1][5],
               e=
                create$11
                 (x,
                  y,
                  caml_call2(Stdlib_hashtbl[6],images,cst_gobelin_img$0),
                  _cU_);
              break;
             case 1:
              var
               _cV_=state[1][5],
               spider=
                create$1
                 (x,
                  y,
                  caml_call2(Stdlib_hashtbl[6],images,cst_spider_img),
                  _cV_),
               _cW_=caml_call2(Stdlib_hashtbl[6],images,cst_web_img),
               _cX_=function(_c5_){return spawnMine(_cW_,_c5_)};
              caml_call2(Cpt[1],spider,[0,caml_sys_time(0),_cX_]);
              var e=spider;
              break;
             default:
              var
               _cY_=state[1][5],
               skeleton=
                create$2
                 (x,
                  y,
                  caml_call2(Stdlib_hashtbl[6],images,cst_skeleton_img),
                  _cY_),
               img=caml_call2(Stdlib_hashtbl[6],images,cst_fireball_img),
               _cZ_=
                function(e)
                 {var
                   pos1=caml_call1(Position[2],e),
                   _c6_=caml_call1(Name[3],0);
                  function _c7_(kv)
                   {return 0
                            ===
                            caml_call2(Stdlib_string[33],kv[2],cst_player$3)
                            ?1
                            :0}
                  var
                   player=caml_call2(Stdlib_list[34],_c7_,_c6_)[1],
                   pos2=caml_call1(Position[2],player),
                   diff=sub(pos2,pos1),
                   vel=mult(200.,normalize(diff)),
                   fb=
                    create$15(cst_fireball,pos1[1],pos1[2],img,vel[1],vel[2],1.);
                  caml_call2(CollisionResolver[1],fb,collisionFireball);
                  load_ennemie(fb);
                  add_obstacle(fb);
                  return 0};
              caml_call2(Cpt[1],skeleton,[0,caml_sys_time(0),_cZ_]);
              var e=skeleton}
          return [0,e,aux(nb - 1 | 0,images)]}
        var ennemies=aux(nb,images);
        function _cQ_(e)
         {return caml_call2(CollisionResolver[1],e,collisionEnnemy)}
        caml_call2(Stdlib_list[15],_cQ_,ennemies);
        var obstacles=0;
        function _cR_(e)
         {return caml_call2(CollisionResolver[1],e,collisionMine)}
        caml_call2(Stdlib_list[15],_cR_,obstacles);
        function _cS_(e){return _aT_}
        return [0,
                e,
                entity,
                ennemies,
                obstacles,
                a,
                caml_call2(Stdlib_array[2],4,_cS_)]}
      var m=caml_call2(Stdlib_list[10],n,_cC_);
      function path_aux(map,room)
       {caml_call1(Stdlib_random[3],0);
        var list=[0,0],_cE_=room[6].length - 1 - 1 | 0,_cD_=0;
        if(! (_cE_ < 0))
         {var i=_cD_;
          for(;;)
           {var door$0=caml_check_bound(room[6],i)[1 + i];
            if(0 === door$0[1])list[1] = [0,i,list[1]];
            var _cH_=i + 1 | 0;
            if(_cE_ !== i){var i=_cH_;continue}
            break}}
        var
         _cF_=caml_call1(Stdlib_list[1],list[1]),
         _cG_=caml_call1(Stdlib_random[5],_cF_),
         door=caml_call2(Stdlib_list[7],list[1],_cG_);
        if(map)
         {var _cI_=map[2],_cJ_=map[1];
          if(_cI_)
           {var _cK_=[0,1,_cJ_[1]];
            caml_check_bound(room[6],door)[1 + door] = _cK_;
            var _cL_=[0,1,room[1]],_cM_=door_f(door);
            caml_check_bound(_cJ_[6],_cM_)[1 + _cM_] = _cL_;
            return [0,room,path_aux(_cI_,_cJ_)]}
          var _cN_=[0,1,_cJ_[1]];
          caml_check_bound(room[6],door)[1 + door] = _cN_;
          var _cO_=[0,1,room[1]],_cP_=door_f(door);
          caml_check_bound(_cJ_[6],_cP_)[1 + _cP_] = _cO_;
          return [0,room,[0,_cJ_,0]]}
        return 0}
      var
       _cA_=caml_call1(Stdlib_list[5],m),
       _cB_=path_aux(caml_call1(Stdlib_list[6],m),_cA_);
      return caml_call1(Stdlib_array[12],_cB_)}
    function enable_wall(e){caml_call1(Collision_S[3],e);return 0}
    function change_door(param)
     {var d=state[1][3][6],d_e=state[1][6],w_e=state[1][7],i=0;
      for(;;)
       {if(caml_check_bound(d,i)[1 + i][1])
         {var e=caml_check_bound(d_e,i)[1 + i];
          caml_call1(Draw_S[3],e);
          caml_call1(Collision_S[3],e);
          var e$0=caml_check_bound(w_e,i)[1 + i];
          caml_call1(Collision_S[4],e$0)}
        else
         {var e$1=caml_check_bound(d_e,i)[1 + i];
          caml_call1(Draw_S[4],e$1);
          caml_call1(Collision_S[4],e$1);
          enable_wall(caml_check_bound(w_e,i)[1 + i])}
        var _cz_=i + 1 | 0;
        if(3 !== i){var i=_cz_;continue}
        return 0}}
    function collision$1(door,e)
     {var name$0=caml_call1(Name[2],e);
      if(0 === caml_call2(Stdlib_string[33],name$0,cst_player$5))
       {var
         name=caml_call1(Name[2],door),
         _cl_=
          0 === caml_call2(Stdlib_string[33],name,cst_left$7)
           ?caml_check_bound(state[1][3][6],0)[1]
           :0 === caml_call2(Stdlib_string[33],name,cst_top$1)
             ?caml_check_bound(state[1][3][6],1)[2]
             :0 === caml_call2(Stdlib_string[33],name,cst_right$7)
               ?caml_check_bound(state[1][3][6],2)[3]
               :0 === caml_call2(Stdlib_string[33],name,cst_bottom$1)
                 ?caml_check_bound(state[1][3][6],3)[4]
                 :_aU_,
         r=_cl_[2],
         room=caml_check_bound(state[1][4],r)[1 + r],
         old_room=state[1][3],
         _cm_=state[1];
        state[1]
        =
        [0,_cm_[1],_cm_[2],room,_cm_[4],_cm_[5],_cm_[6],_cm_[7],_cm_[8]];
        var _cn_=old_room[3],_co_=function(e){return unload_ennemie(e)};
        caml_call2(Stdlib_list[15],_co_,_cn_);
        var
         _cp_=room[3],
         _cq_=
          function(e)
           {if(caml_call1(Active[4],e))
             {var _cy_=caml_call1(Active[2],e);
              return _cy_?load_ennemie(e):_cy_}
            return 0};
        caml_call2(Stdlib_list[15],_cq_,_cp_);
        var _cr_=old_room[4],_cs_=function(e){return unload_ennemie(e)};
        caml_call2(Stdlib_list[15],_cs_,_cr_);
        var
         _ct_=room[4],
         _cu_=
          function(e)
           {if(caml_call1(Active[4],e))
             {var _cx_=caml_call1(Active[2],e);
              return _cx_?load_ennemie(e):_cx_}
            return 0};
        caml_call2(Stdlib_list[15],_cu_,_ct_);
        change_door(0);
        var _cv_=caml_call1(Teleport[2],door);
        return caml_call2(Position[1],e,_cv_)}
      var _cw_=0 === caml_call2(Stdlib_string[33],name$0,cst_spider$3)?1:0;
      return _cw_?collision(door,e):_cw_}
    function loot(player,obj)
     {var
       name=caml_call1(Name[2],obj),
       _ci_=0 === caml_call2(Stdlib_string[33],name,cst_heart$0)?1:0;
      if(_ci_)
       {var _cj_=player_state[1][1] < 3?1:0;
        if(_cj_)
         {player_state[1][1] = player_state[1][1] + 1 | 0;
          update_health(0);
          return dead(obj)}
        var _ck_=_cj_}
      else
       var _ck_=_ci_;
      return _ck_}
    function change_floor(map)
     {var floor=get_state(0)[5],_b5_=caml_call1(Name[3],0);
      function _b6_(kv)
       {return 0 === caml_call2(Stdlib_string[33],kv[2],cst_player$6)?1:0}
      var
       player$0=caml_call2(Stdlib_list[34],_b6_,_b5_)[1],
       itempool$0=state[1][8],
       _b0_=interface$0[1][2],
       _b7_=0 < caml_call1(Stdlib_list[1],itempool$0)?1:0,
       _b8_=_b7_?caml_call1(Stdlib_list[1],_b0_) < 6?1:0:_b7_;
      if(_b8_)
       {var
         itempool=state[1][8],
         obj_entity=interface$0[1][2],
         player=get_player(0),
         old_stats=caml_call1(Statistics[2],player);
        caml_call1(Stdlib_random[3],0);
        var
         r=random_between(0,caml_call1(Stdlib_list[1],itempool)),
         item=caml_call2(Stdlib_list[7],itempool,r),
         _b3_=function(e){return caml_notequal(e,item)},
         ip=caml_call2(Stdlib_list[36],_b3_,itempool),
         _bY_=state[1];
        state[1]
        =
        [0,_bY_[1],_bY_[2],_bY_[3],_bY_[4],_bY_[5],_bY_[6],_bY_[7],ip];
        var obj=[0,item,obj_entity],_bZ_=interface$0[1];
        interface$0[1] = [0,_bZ_[1],obj,_bZ_[3],_bZ_[4],_bZ_[5],_bZ_[6]];
        var _b4_=addStat(old_stats,caml_call1(Statistics[2],item));
        caml_call2(Statistics[1],player,_b4_);
        var
         y=17.5,
         _b1_=interface$0[1][2],
         _b2_=
          function(i,e)
           {caml_call1(Draw_S[3],e);return changePos(e,120. + 55. * i,y)};
        caml_call2(Stdlib_list[16],_b2_,_b1_)}
      var _b9_=state[1][3][4];
      function _b__(e){return unload_ennemie(e)}
      caml_call2(Stdlib_list[15],_b__,_b9_);
      var
       _b$_=state[1],
       _ca_=_b$_[8],
       _cb_=_b$_[7],
       _cc_=_b$_[6],
       _cd_=caml_check_bound(map,0)[1];
      state[1] = [0,_b$_[1],1,_cd_,map,floor + 1 | 0,_cc_,_cb_,_ca_];
      caml_call1(Draw_S[3],state[1][3][2]);
      var _ce_=state[1][3][3];
      function _cf_(e){return load_ennemie(e)}
      caml_call2(Stdlib_list[15],_cf_,_ce_);
      var _cg_=state[1][3][4];
      function _ch_(e){return load_ennemie(e)}
      caml_call2(Stdlib_list[15],_ch_,_cg_);
      caml_call2(Position[1],player$0,_aV_);
      update_health(0);
      update_count_f(0);
      return change_door(0)}
    function init$5(pe1,map,images,itempool)
     {var
       _bJ_=create$14(cst_bottom$2,400.,560.,400.,180.),
       _bK_=create$14(cst_right$8,720.,320.,100.,320.),
       _bL_=create$14(cst_top$2,400.,120.,400.,500.),
       doorsInit=[0,create$14(cst_left$8,40.,320.,660.,320.),_bL_,_bK_,_bJ_],
       _bM_=create(400.,560.,40,40),
       _bN_=create(720.,320.,40,40),
       _bO_=create(400.,120.,40,40),
       wallsInit=[0,create(40.,320.,40,40),_bO_,_bN_,_bM_],
       e_info=
        create$9
         (600.,
          25.,
          cst_info_e,
          caml_call2(Stdlib_hashtbl[6],images,cst_e_info_img),
          cst_0,
          35,
          35,
          40.,
          25.),
       f_info=
        create$9
         (700.,
          20.,
          cst_info_f,
          caml_call2(Stdlib_hashtbl[6],images,cst_f_info_img),
          cst_0$0,
          45,
          45,
          50.,
          30.);
      function _bP_(e){return caml_call2(CollisionResolver[1],e,collision$1)}
      caml_call2(Stdlib_array[13],_bP_,doorsInit);
      state[1]
      =
      [0,pe1,1,caml_check_bound(map,0)[1],map,1,doorsInit,wallsInit,itempool];
      caml_call1(Draw_S[3],state[1][3][2]);
      var _bQ_=state[1][3][3];
      function _bR_(e){return load_ennemie(e)}
      caml_call2(Stdlib_list[15],_bR_,_bQ_);
      var _bS_=state[1][3][4];
      function _bT_(e){return load_ennemie(e)}
      caml_call2(Stdlib_list[15],_bT_,_bS_);
      player_state[1] = [0,3];
      caml_call2(CollisionResolver[1],pe1,loot);
      var _bU_=interface$0[1][6],_bV_=create$12(0.,0.),_bW_=0;
      function _bX_(e)
       {return create$10
                (20. * e + 20.,
                 20.,
                 caml_call2(Stdlib_hashtbl[6],images,cst_heart_img))}
      interface$0[1]
      =
      [0,caml_call2(Stdlib_array[2],5,_bX_),_bW_,_bV_,e_info,f_info,_bU_];
      update_health(0);
      update_count_e(0);
      update_count_f(0);
      change_door(0);
      return 0}
    var
     Game_Game_state=
      [0,
       init$5,
       get_player,
       get_status,
       get_floor,
       set_state,
       set_floor,
       check_ennemies,
       update_count_e,
       update_health,
       enable_wall,
       shot,
       spawnMine,
       door_f,
       generate_map,
       change_floor];
    caml_register_global(605,Game_Game_state,"Game__Game_state");
    var
     frameStart=[0,0.],
     frameEnd=[0,0.],
     frameCount=[0,0],
     frameTimer=[0,0.],
     images=caml_call2(Stdlib_hashtbl[1],0,20),
     fps=60.,
     frameDelay=0.0166666666666666664;
    function init_game(dt)
     {init_all(0);
      var
       player=
        create$6
         (cst_player$7,
          400.,
          340.,
          caml_call2(Stdlib_hashtbl[6],images,cst_player_img)),
       _bA_=
        [0,
         create$7
          (10.,
           10.,
           cst_Botte_en_or,
           caml_call2(Stdlib_hashtbl[6],images,cst_item_img),
           _aW_,
           cst_VIT,
           320,
           0),
         0],
       _bB_=
        [0,
         create$7
          (10.,
           10.,
           cst_Botte_en_argent,
           caml_call2(Stdlib_hashtbl[6],images,cst_item_img$0),
           _aX_,
           cst_VIT$0,
           280,
           0),
         _bA_],
       _bC_=
        [0,
         create$7
          (10.,
           10.,
           cst_Botte_en_cuivre,
           caml_call2(Stdlib_hashtbl[6],images,cst_item_img$1),
           _aY_,
           cst_VIT$1,
           240,
           0),
         _bB_],
       _bD_=
        [0,
         create$7
          (10.,
           10.,
           cst_Carquois_en_or,
           caml_call2(Stdlib_hashtbl[6],images,cst_item_img$2),
           _aZ_,
           cst_VA,
           200,
           0),
         _bC_],
       _bE_=
        [0,
         create$7
          (10.,
           10.,
           cst_Carquois_en_argent,
           caml_call2(Stdlib_hashtbl[6],images,cst_item_img$3),
           _a0_,
           cst_VA$0,
           160,
           0),
         _bD_],
       _bF_=
        [0,
         create$7
          (10.,
           10.,
           cst_Carquois_en_cuivre,
           caml_call2(Stdlib_hashtbl[6],images,cst_item_img$4),
           _a1_,
           cst_VA$1,
           120,
           0),
         _bE_],
       _bG_=
        [0,
         create$7
          (10.,
           10.,
           cst_Arc_en_or,
           caml_call2(Stdlib_hashtbl[6],images,cst_item_img$5),
           _a2_,
           cst_FOR,
           80,
           0),
         _bF_],
       _bH_=
        [0,
         create$7
          (10.,
           10.,
           cst_Arc_en_argent,
           caml_call2(Stdlib_hashtbl[6],images,cst_item_img$6),
           _a3_,
           cst_FOR$0,
           40,
           0),
         _bG_],
       itempool=
        [0,
         create$7
          (10.,
           10.,
           cst_Arc_en_cuivre,
           caml_call2(Stdlib_hashtbl[6],images,cst_item_img$7),
           _a4_,
           cst_FOR$1,
           0,
           0),
         _bH_];
      register_command(_a5_,function(param){return move_up(player)});
      register_command(_a6_,function(param){return move_down(player)});
      register_command(_a7_,function(param){return move_left(player)});
      register_command(_a8_,function(param){return move_right(player)});
      register_command(_a9_,function(param){return stop$4(cst_up$3,player)});
      register_command(_a__,function(param){return stop$4(cst_down$3,player)});
      register_command(_a$_,function(param){return stop$4(cst_left$9,player)});
      register_command
       (_ba_,function(param){return stop$4(cst_right$9,player)});
      register_command
       (_bb_,
        function(param)
         {var _bI_=caml_call2(Stdlib_hashtbl[6],images,cst_projectile_img);
          return shot
                  (caml_call2(Stdlib_hashtbl[6],images,cst_heart_img$0),
                   _bI_,
                   player)});
      set_key(cst_up$4,0);
      set_key(cst_down$4,0);
      set_key(cst_left$10,0);
      set_key(cst_right$10,0);
      set_floor(1);
      var map$0=generate_map(map,palette,5,images);
      enable_wall(create(40.,120.,360,40));
      enable_wall(create(440.,120.,320,40));
      enable_wall(create(40.,560.,360,40));
      enable_wall(create(440.,560.,320,40));
      enable_wall(create(40.,160.,40,160));
      enable_wall(create(40.,360.,40,200));
      enable_wall(create(720.,160.,40,160));
      enable_wall(create(720.,360.,40,200));
      init$5(player,map$0,images,itempool);
      return 0}
    function go_screen(param)
     {var r=caml_call1(Stdlib_option[4],ctx[1]);
      caml_call5(Gfx[13],r,0,0,800,640);
      var _bt_=caml_call4(Gfx[11],0,0,0,255);
      caml_call6(Gfx[12],r,0,0,800,640,_bt_);
      var _bu_=caml_call4(Gfx[11],255,255,255,255);
      caml_call8
       (Gfx[19],r,cst_Game_Over,250,300,cst_150px_Verdana,_bu_,350.,1.);
      var
       _bv_=caml_call4(Gfx[11],255,255,255,255),
       _bw_=get_floor(0),
       _bx_=caml_call1(Stdlib[33],_bw_),
       _by_=caml_call2(Stdlib[28],cst_Score,_bx_);
      caml_call8(Gfx[19],r,_by_,350,350,cst_24px_Verdana,_bv_,250.,1.);
      var _bz_=caml_call4(Gfx[11],255,255,255,255);
      return caml_call8
              (Gfx[19],
               r,
               cst_Appuyez_sur_R_pour_recomme,
               285,
               385,
               cst_24px_Verdana$0,
               _bz_,
               250.,
               1.)}
    function play_game(dt)
     {frameStart[1] = caml_sys_time(0);
      update_all(dt);
      update_count_e(0);
      frameEnd[1] = caml_sys_time(0) - frameStart[1];
      for(;;)
       {if(frameEnd[1] < 0.0166666666666666664)
         {frameEnd[1] = caml_sys_time(0) - frameStart[1];continue}
        frameTimer[1] = frameTimer[1] + frameEnd[1];
        frameCount[1]++;
        if(1 - check_ennemies(0))
         {var map$0=generate_map(map,palette,5,images);change_floor(map$0)}
        if(1. <= frameTimer[1])
         {var _bs_=caml_call2(Stdlib_format[127],_bc_,frameCount[1]);
          caml_call1(Gfx[24],_bs_);
          frameTimer[1] = 0.;
          frameCount[1] = 0}
        return get_status(0)?1:0}}
    function end_game(dt)
     {reset_all$1(0);
      reset_all$0(0);
      register_command(_bd_,function(param){return set_state(1)});
      go_screen(0);
      return 0}
    function reset_game(dt)
     {update_all(dt);
      go_screen(0);
      return get_status(0)?(reset_all$1(0),reset_all(0),reset_all$0(0),0):1}
    function img_ready(param)
     {var _bq_=1;
      function _br_(param,i,acc){return acc?caml_call1(Gfx[15],i):acc}
      return caml_call3(Stdlib_hashtbl[14],_br_,images,_bq_)}
    function load_graphics(dt){return img_ready(0)?0:1}
    function chain_functions(f_list)
     {var funs=[0,f_list];
      return function(dt)
       {var _bp_=funs[1];
        if(_bp_)
         {var ll=_bp_[2],f=_bp_[1];
          return caml_call1(f,dt)
                  ?1
                  :(funs[1] = caml_call2(Stdlib[37],ll,[0,f,0]),1)}
        return 0}}
    function run(param)
     {var _be_=caml_call1(Gfx[14],cst_src_img_charSheet_png);
      caml_call3(Stdlib_hashtbl[5],images,cst_player_img$0,_be_);
      var _bf_=caml_call1(Gfx[14],cst_src_img_gobelinSheet_png);
      caml_call3(Stdlib_hashtbl[5],images,cst_gobelin_img$1,_bf_);
      var _bg_=caml_call1(Gfx[14],cst_src_img_heart_png);
      caml_call3(Stdlib_hashtbl[5],images,cst_heart_img$1,_bg_);
      var _bh_=caml_call1(Gfx[14],cst_src_img_projectilesheet_pn);
      caml_call3(Stdlib_hashtbl[5],images,cst_projectile_img$0,_bh_);
      var _bi_=caml_call1(Gfx[14],cst_src_img_itemSheet_png);
      caml_call3(Stdlib_hashtbl[5],images,cst_item_img$8,_bi_);
      var _bj_=caml_call1(Gfx[14],cst_src_img_info_e_png);
      caml_call3(Stdlib_hashtbl[5],images,cst_e_info_img$0,_bj_);
      var _bk_=caml_call1(Gfx[14],cst_src_img_info_f_png);
      caml_call3(Stdlib_hashtbl[5],images,cst_f_info_img$0,_bk_);
      var _bl_=caml_call1(Gfx[14],cst_src_img_spider_png);
      caml_call3(Stdlib_hashtbl[5],images,cst_spider_img$0,_bl_);
      var _bm_=caml_call1(Gfx[14],cst_src_img_web_png);
      caml_call3(Stdlib_hashtbl[5],images,cst_web_img$0,_bm_);
      var _bn_=caml_call1(Gfx[14],cst_src_img_skeleton_Sheet_png);
      caml_call3(Stdlib_hashtbl[5],images,cst_skeleton_img$0,_bn_);
      var _bo_=caml_call1(Gfx[14],cst_src_img_fireball_Sheet_png);
      caml_call3(Stdlib_hashtbl[5],images,cst_fireball_img$0,_bo_);
      var
       m=
        chain_functions
         ([0,
           load_graphics,
           [0,init_game,[0,play_game,[0,end_game,[0,reset_game,0]]]]]);
      return caml_call1(Gfx[22],m)}
    var
     Game$0=
      [0,
       frameStart,
       frameEnd,
       frameCount,
       frameTimer,
       fps,
       frameDelay,
       images,
       init_game,
       go_screen,
       play_game,
       end_game,
       reset_game,
       img_ready,
       load_graphics,
       chain_functions,
       run];
    caml_register_global(606,Game$0,"Game");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuZ2FtZS5vYmpzL2dhbWUuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbInplcm8iLCJuYW1lIiwibmFtZSQwIiwibmFtZSQxIiwibmFtZSQyIiwibmFtZSQzIiwibmFtZSQ0IiwibmFtZSQ1IiwibmFtZSQ2IiwibmFtZSQ3IiwibmFtZSQ4IiwibmFtZSQ5IiwibmFtZSQxMCIsIm5hbWUkMTEiLCJuYW1lJDEyIiwibmFtZSQxMyIsIm5hbWUkMTQiLCJuYW1lJDE1IiwibmFtZSQxNiIsImRvb3JUb3AiLCJkb29yQm90dG9tIiwiZG9vckxlZnQiLCJkb29yUmlnaHQiLCJzZXRfY3B0IiwiYyIsImNwdCIsImFkZCIsImEiLCJiIiwic3ViIiwibXVsdCIsImsiLCJkb3QiLCJub3JtIiwibm9ybWFsaXplIiwicHAiLCJmbXQiLCJpc19lcXVhbCIsImlzX3plcm8iLCJ2IiwidG9wX2xlZnQiLCJ0b3BfcmlnaHQiLCJib3R0b21fbGVmdCIsImJvdHRvbV9yaWdodCIsIm1hcmdpbiIsImIxIiwiYjIiLCJwIiwieCIsInkiLCJjZW50ZXIiLCJtZGlmZiIsInYxIiwidjIiLCJoIiwidyIsImhhc19vcmlnaW4iLCJpbnRlcnNlY3QiLCJiMyIsInBwJDAiLCJhZGRTdGF0IiwidGltZSIsImJsYWNrIiwicmVkIiwicm91Z2Vmb25jZSIsImdyZWVuIiwiYmx1ZSIsInllbGxvdyIsImdyYXkiLCJjcmVhdGVfaW1nIiwiaW1nIiwibCIsInIiLCJjcmVhdGVfaW1nX3NjYWxlIiwiY3JlYXRlX3RpbGVtYXAiLCJjb2xvcnMiLCJ0aWxlbWFwIiwic2l6ZSIsImNyZWF0ZV9hbmltYXRpb24iLCJudW1fdyIsIm51bV9oIiwic3ciLCJzaCIsImR3IiwiZGgiLCJpIiwiYXJyYXlfZnJhbWUiLCJjcmVhdGVfaWRsZSIsImlkbGVOYW1lIiwiYW5pbSIsImZpbiIsImRlYiIsImRyYXdfdGlsZW1hcCIsImN0eCIsInBvc1giLCJwb3NZIiwidGlsZSIsImNvbG9yIiwic2l6ZVgiLCJzaXplWSIsImdldF9pZGxlIiwicGxheV9pZGxlIiwiZ2V0X2ZyYW1lIiwiZGlyIiwiZHQiLCJjdXJyZW50Q2FzZSIsInRpbWUkMCIsInJlc2V0X2FsbCIsImRpc2FibGVfYWxsIiwiZSIsImluaXQiLCJ1cGRhdGUiLCJlbCIsImFjdGl2ZSIsImluaXQkMCIsInVwZGF0ZSQwIiwiZTEiLCJqIiwiZTIiLCJib3gxIiwiYm94QzEiLCJwb3MxIiwiYm94MiIsImJveEMyIiwicG9zMiIsInNfcmVjdCIsInNfcG9zIiwiY29tbWFuZHMiLCJrZXlzRG93biIsImdldF9rZXkiLCJrZXkiLCJzZXRfa2V5IiwiZ2V0X2FjdGl2ZV9rZXkiLCJ2YWx1ZSIsImFjYyIsInJlZ2lzdGVyX2NvbW1hbmQiLCJldiIsImYiLCJnZXRfY29tbWFuZHMiLCJyZXNldF9hbGwkMCIsImluaXQkMSIsInVwZGF0ZSQxIiwiaW5pdCQyIiwiY3B0JDAiLCJ1cGRhdGUkMiIsImN0eCQwIiwiYVAiLCJiUCIsImxpc3Rfc29ydCIsInBvcyIsImJveCIsInRleHQiLCJjb2xvcjEiLCJpbWFnZSIsInNwZWVkIiwiaW5pdCQzIiwidXBkYXRlJDMiLCJ2ZiIsImluaXQkNCIsInRpbWUkMSIsImFic0YiLCJub3ROdWwiLCJtYXhGIiwibW92ZV90byIsInBvc0UxIiwicG9zRTIiLCJ2ZWNFMSIsImRpc3RYIiwiZGlzdFkiLCJzdGF0cyIsIm5ld1YiLCJ1cGRhdGUkNCIsImRlbHRhX3QiLCJrdiIsInBsYXllciIsImVsZW1fbGlzdCIsImVsZW1fdGFibGUiLCJyZWdpc3RlciIsInVucmVnaXN0ZXIiLCJyZXNldCIsInN5c3RlbXMiLCJtIiwiaW5pdF9hbGwiLCJ1cGRhdGVfYWxsIiwicmVzZXRfYWxsJDEiLCJjb2xsaXNpb24iLCJycG9zMSIsInJwb3MyIiwiZCIsIm1pbl92IiwibiIsIm5fdjEiLCJuX3YyIiwicyIsIm4xIiwibjIiLCJkZWx0YV9wb3MxIiwiZGVsdGFfcG9zMiIsIm4kMCIsIm0xIiwibTIiLCJtMSQwIiwibTIkMCIsIm5ld192MSIsIm5ld192MiIsImNyZWF0ZSIsImNyZWF0ZSQwIiwidmVsWCIsInZlbFkiLCJ0cmFwcGV1cl9pbWciLCJzdG9wIiwiY3JlYXRlJDEiLCJsdmwiLCJyZXNldCQwIiwic3RvcCQwIiwiY3JlYXRlJDIiLCJyZXNldCQxIiwic3RvcCQxIiwiaGl0IiwiZGVnYXQiLCJzcGF3bkhlYXJ0IiwiaHAiLCJjcmVhdGUkMyIsInJlc2V0JDIiLCJzdG9wJDIiLCJkZXN0cnVjdGlvbiIsImNyZWF0ZSQ0IiwibWluZV9pbWciLCJyZXNldCQzIiwic3RvcCQzIiwiZGVsZXRlJDAiLCJjb2xsaXNpb24kMCIsImNyZWF0ZSQ1IiwiaWRsZSIsImNyZWF0ZSQ2IiwicmVzZXQkNCIsIm1vdmVfdXAiLCJpc1B1c2hlZCIsIm1vdmVfZG93biIsIm1vdmVfcmlnaHQiLCJtb3ZlX2xlZnQiLCJzdG9wJDQiLCJuZXh0S2V5IiwidmFsdWUkMCIsInZhbHVlJDEiLCJ2YWx1ZSQyIiwidmFsdWUkMyIsImNyZWF0ZSQ3Iiwic3RhdCIsImltZ3giLCJpbWd5IiwiY2hhbmdlUG9zIiwiY2hhbmdlU2l6ZSIsInNpemVUIiwiY3JlYXRlJDgiLCJwYWxldHRlIiwibWFwIiwiY3JlYXRlJDkiLCJzaXpleCIsInNpemV5IiwibXgiLCJteSIsImNoYW5nZVBvcyQwIiwiY2hhbmdlVGV4dCIsInQiLCJjaGFuZ2VTaXplJDAiLCJjcmVhdGUkMTAiLCJjcmVhdGUkMTEiLCJyZXNldCQ1Iiwic3RvcCQ1IiwiY3JlYXRlJDEyIiwiZGVhZCIsImNyZWF0ZSQxMyIsImNyZWF0ZSQxNCIsInh0IiwieXQiLCJkZWxldGUkMSIsImNyZWF0ZSQxNSIsImludGVyZmFjZSQwIiwicGxheWVyX3N0YXRlIiwic3RhdGUiLCJjcHQkMSIsInNldF9zdGF0ZSIsInNldF9mbG9vciIsImdldF9wbGF5ZXIiLCJnZXRfc3RhdHVzIiwiZ2V0X3N0YXRlIiwiZ2V0X2Zsb29yIiwibG9hZF9lbm5lbWllIiwidW5sb2FkX2VubmVtaWUiLCJhY3RpdmVfbGVuZ3RoIiwibCQwIiwiYWNjJDAiLCJjaGVja19lbm5lbWllcyIsImFkZF9vYnN0YWNsZSIsInJvb20iLCJyYW5kb21fYmV0d2VlbiIsInJhbmRvbV9iZXR3ZWVuX2Zsb2F0IiwidXBkYXRlX2hlYWx0aCIsInVwZGF0ZV9jb3VudF9lIiwiaW5mbyIsInVwZGF0ZV9jb3VudF9mIiwiZG9vcl9mIiwiY29ucyIsInNob3QiLCJoZWFydF9pbWciLCJwcm9qZWN0aWxlX2ltZyIsIm9yaSIsInByb2plY3RpbGUiLCJwcm9qZWN0aWxlJDAiLCJwcm9qZWN0aWxlJDEiLCJwcm9qZWN0aWxlJDIiLCJjb2xsaXNpb25NaW5lIiwiY29sbGlzaW9uRmlyZWJhbGwiLCJzcGF3bk1pbmUiLCJtaW5lIiwiY29sbGlzaW9uRW5uZW15IiwiZW5uZW15IiwiZ2VuZXJhdGVfbWFwIiwiaW1hZ2VzIiwiZW50aXR5IiwiZmxvb3IiLCJuYiIsImF1eCIsInIkMCIsInNwYXduIiwic3BpZGVyIiwic2tlbGV0b24iLCJkaWZmIiwidmVsIiwiZmIiLCJlbm5lbWllcyIsIm9ic3RhY2xlcyIsInBhdGhfYXV4IiwibGlzdCIsImRvb3IkMCIsImRvb3IiLCJlbmFibGVfd2FsbCIsImNoYW5nZV9kb29yIiwiZF9lIiwid19lIiwiZSQwIiwiZSQxIiwiY29sbGlzaW9uJDEiLCJvbGRfcm9vbSIsImxvb3QiLCJvYmoiLCJjaGFuZ2VfZmxvb3IiLCJwbGF5ZXIkMCIsIml0ZW1wb29sJDAiLCJpdGVtcG9vbCIsIm9ial9lbnRpdHkiLCJvbGRfc3RhdHMiLCJpdGVtIiwiaXAiLCJpbml0JDUiLCJwZTEiLCJkb29yc0luaXQiLCJ3YWxsc0luaXQiLCJlX2luZm8iLCJmX2luZm8iLCJmcmFtZVN0YXJ0IiwiZnJhbWVFbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVUaW1lciIsImZwcyIsImZyYW1lRGVsYXkiLCJpbml0X2dhbWUiLCJtYXAkMCIsImdvX3NjcmVlbiIsInBsYXlfZ2FtZSIsImVuZF9nYW1lIiwicmVzZXRfZ2FtZSIsImltZ19yZWFkeSIsImxvYWRfZ3JhcGhpY3MiLCJjaGFpbl9mdW5jdGlvbnMiLCJmX2xpc3QiLCJmdW5zIiwibGwiLCJydW4iXSwic291cmNlcyI6WyIvaG9tZS9hbnRvaW5lL1BGQS9QRkEtUHJvamV0LUcxMC9fYnVpbGQvZGVmYXVsdC9zcmMvY29tcG9uZW50L3ZlY3Rvci5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9jb21wb25lbnQvY29tcG9uZW50X2RlZnMubWwiLCIvaG9tZS9hbnRvaW5lL1BGQS9QRkEtUHJvamV0LUcxMC9fYnVpbGQvZGVmYXVsdC9zcmMvZ2xvYmFsLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2NvbXBvbmVudC9jb3VudC5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9jb21wb25lbnQvcmVjdC5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9jb21wb25lbnQvc3RhdHMubWwiLCIvaG9tZS9hbnRvaW5lL1BGQS9QRkEtUHJvamV0LUcxMC9fYnVpbGQvZGVmYXVsdC9zcmMvY29tcG9uZW50L3RleHR1cmUubWwiLCIvaG9tZS9hbnRvaW5lL1BGQS9QRkEtUHJvamV0LUcxMC9fYnVpbGQvZGVmYXVsdC9zcmMvc3lzdGVtL2NsZWFuaW5nX3N5c3RlbS5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9zeXN0ZW0vY29sbGlzaW9uX3N5c3RlbS5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9pby9pbnB1dF9oYW5kbGVyLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL3N5c3RlbS9jb250cm9sX3N5c3RlbS5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9nYW1lLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL3N5c3RlbS9kcmF3X3N5c3RlbS5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9zeXN0ZW0vbG9naWNfc3lzdGVtLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL3N5c3RlbS9tb3ZlX3N5c3RlbS5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9zeXN0ZW0vc3lzdGVtLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL3N5c3RlbS9zeXN0ZW1fZGVmcy5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9nYW1lL21hcC93YWxsLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvZW5lbWllcy90cmFwcGV1ci5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9nYW1lL2VuZW1pZXMvc3BpZGVyLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvZW5lbWllcy9za2VsZXRvbi5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9nYW1lL2VuZW1pZXMvZW5lbXkubWwiLCIvaG9tZS9hbnRvaW5lL1BGQS9QRkEtUHJvamV0LUcxMC9fYnVpbGQvZGVmYXVsdC9zcmMvZ2FtZS9vYnN0YWNsZXMvbWluZS5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9nYW1lL29ic3RhY2xlcy9wcm9qZWN0aWxlLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvcGxheWVyLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvaW50ZXJmYWNlL29iamV0Lm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvbWFwL21hcC5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9nYW1lL2ludGVyZmFjZS9pbmZvLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvaW50ZXJmYWNlL2hlYXJ0Lm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvZW5lbWllcy9nb2JlbGluLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvaW50ZXJmYWNlL2JhY2tncm91bmQubWwiLCIvaG9tZS9hbnRvaW5lL1BGQS9QRkEtUHJvamV0LUcxMC9fYnVpbGQvZGVmYXVsdC9zcmMvZ2FtZS9vYnN0YWNsZXMvY29uc3VtYWJsZS5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9nYW1lL21hcC9kb29yLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvb2JzdGFjbGVzL2ZpcmViYWxsLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvZ2FtZV9zdGF0ZS5t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QVFIO01BQTdCLDZCQW5JRUE7TUEySDhCLFNBU0U7TUFBbEMsNkJBcElFQTtNQTJIOEIsU0FVRTtNQUFsQyw2QkFySUVBO01BMkg4QjtPQVc1QjFJO1FBQUk7O1dBNUJOaU07Y0F0R0FQLGFBa0VBRyxhQWtCQUMsWUFRQUM7TUFzQ00sMEJBQUovTCxFQUNXO0lBdklKOzs7T0FOVG9MO09BQ0FDO09BQ0FDO09BQ0FDO09BQ0FDO09BQ0FDO09BQ0EvQztPQUlBZ0Q7T0F3REFFO09BVUFDO09Ba0JBQztPQVFBQztPQU9BQztPQUdBQztPQUlBQztPQVlBSTtJQTFIUztVIiwic291cmNlc0NvbnRlbnQiOlsidHlwZSB0ID0geyB4IDogZmxvYXQgOyB5IDogZmxvYXQgfVxubGV0IGFkZCBhIGIgPSB7IHggPSBhLnggKy4gYi54OyB5ID0gYS55ICsuIGIueSB9XG5sZXQgc3ViIGEgYiA9IHsgeCA9IGEueCAtLiBiLng7IHkgPSBhLnkgLS4gYi55IH1cblxubGV0IG11bHQgayBhID0geyB4ID0gayouIGEueDsgeSA9IGsqLiBhLnkgfVxuXG5sZXQgZG90IGEgYiA9IGEueCAqLiBiLnggKy4gYS55ICouIGIueVxubGV0IG5vcm0gYSA9IHNxcnQgKGRvdCBhIGEpXG5sZXQgbm9ybWFsaXplIGEgPSBtdWx0ICgxLjAgLy4gbm9ybSBhKSBhXG5sZXQgcHAgZm10IGEgPSBGb3JtYXQuZnByaW50ZiBmbXQgXCIoJWYsICVmKVwiIGEueCBhLnlcbmxldCBpc19lcXVhbCBhIGIgPSBhLnggPT0gYi54ICYmIGEueSA9PSBiLnlcblxubGV0IHplcm8gPSB7IHggPSAwLjA7IHkgPSAwLjAgfVxubGV0IGlzX3plcm8gdiA9IHYueCA9IDAuMCAmJiB2LnkgPSAwLjAiLCJvcGVuIEVjc1xubW9kdWxlIFBvc2l0aW9uID0gQ29tcG9uZW50Lk1ha2Uoc3RydWN0IGluY2x1ZGUgVmVjdG9yIGxldCBuYW1lID0gXCJwb3NpdGlvblwiIGVuZClcbm1vZHVsZSBUZWxlcG9ydCA9IENvbXBvbmVudC5NYWtlKHN0cnVjdCBpbmNsdWRlIFZlY3RvciBsZXQgbmFtZSA9IFwidGVsZXBvcnRcIiBlbmQpXG5tb2R1bGUgUHJpb3JpdHkgPSBDb21wb25lbnQuTWFrZShzdHJ1Y3QgdHlwZSB0ID0gaW50ICBsZXQgbmFtZSA9IFwicHJpb3JpdHlcIiBlbmQpXG5tb2R1bGUgVmVsb2NpdHkgPSBDb21wb25lbnQuTWFrZShzdHJ1Y3QgaW5jbHVkZSBWZWN0b3IgbGV0IG5hbWUgPSBcInZlbG9jaXR5XCIgZW5kKVxubW9kdWxlIE1hc3MgPSBDb21wb25lbnQuTWFrZSAoc3RydWN0IHR5cGUgdCA9IGZsb2F0IGxldCBuYW1lID0gXCJtYXNzXCIgZW5kKVxubW9kdWxlIEJveCA9IENvbXBvbmVudC5NYWtlKHN0cnVjdCBpbmNsdWRlIFJlY3QgbGV0IG5hbWUgPSBcImJveFwiIGVuZClcbm1vZHVsZSBCb3hDb2xsaWRlciA9IENvbXBvbmVudC5NYWtlKHN0cnVjdCBpbmNsdWRlIFJlY3QgbGV0IG5hbWUgPSBcImJveENvbGxpZGVyXCIgZW5kKVxubW9kdWxlIFN1cmZhY2UgPSBDb21wb25lbnQuTWFrZSAoc3RydWN0IGluY2x1ZGUgVGV4dHVyZSBsZXQgbmFtZSA9IFwidGV4dHVyZVwiIGVuZClcbm1vZHVsZSBOYW1lID0gQ29tcG9uZW50Lk1ha2Uoc3RydWN0IHR5cGUgdCA9IHN0cmluZyBsZXQgbmFtZSA9IFwibmFtZVwiIGVuZClcbm1vZHVsZSBDb2xsaXNpb25SZXNvbHZlciA9IENvbXBvbmVudC5NYWtlKHN0cnVjdCB0eXBlIHQgPSBFbnRpdHkudCAtPiBFbnRpdHkudCAtPiB1bml0IGxldCBuYW1lID0gXCJyZXNvbHZlclwiIGVuZClcbm1vZHVsZSBPd25lciA9IENvbXBvbmVudC5NYWtlKHN0cnVjdCB0eXBlIHQgPSBFbnRpdHkudCBsZXQgbmFtZSA9IFwib3duZXJcIiBlbmQpXG5tb2R1bGUgSW52dW5lcmFibGVGcmFtZSA9IENvbXBvbmVudC5NYWtlKHN0cnVjdCB0eXBlIHQgPSBpbnQgIGxldCBuYW1lID0gXCJpbnZ1bmVyYWJsZUZyYW1lXCIgZW5kKVxubW9kdWxlIE9yaWVudGF0aW9uID0gQ29tcG9uZW50Lk1ha2Uoc3RydWN0IGluY2x1ZGUgVmVjdG9yIGxldCBuYW1lID0gXCJvcmllbnRhdGlvblwiIGVuZClcbm1vZHVsZSBIZWFsdGggPSBDb21wb25lbnQuTWFrZShzdHJ1Y3QgdHlwZSB0ID0gaW50IGxldCBuYW1lID0gXCJoZWFsdGhcIiBlbmQpXG5tb2R1bGUgQWN0aXZlID0gQ29tcG9uZW50Lk1ha2Uoc3RydWN0IHR5cGUgdCA9IGJvb2wgbGV0IG5hbWUgPSBcImFjdGl2ZVwiIGVuZClcbm1vZHVsZSBTdGF0aXN0aWNzID0gQ29tcG9uZW50Lk1ha2Uoc3RydWN0IGluY2x1ZGUgU3RhdHMgbGV0IG5hbWUgPSBcInN0YXRzXCIgZW5kKVxubW9kdWxlIFRleHREID0gQ29tcG9uZW50Lk1ha2Uoc3RydWN0IGluY2x1ZGUgVGV4dCBsZXQgbmFtZSA9IFwidGV4dFwiIGVuZClcbm1vZHVsZSBDcHQgPSBDb21wb25lbnQuTWFrZShzdHJ1Y3QgaW5jbHVkZSBDb3VudCBsZXQgbmFtZSA9IFwiY29tcHRldXJcIiBlbmQpXG5cblxubGV0IHJlc2V0X2FsbCAoKSA9IFxuICBQb3NpdGlvbi5yZXNldCAoKTtcbiAgVGVsZXBvcnQucmVzZXQgKCk7XG4gIFByaW9yaXR5LnJlc2V0ICgpO1xuICBWZWxvY2l0eS5yZXNldCAoKTtcbiAgTWFzcy5yZXNldCAoKTtcbiAgQm94LnJlc2V0ICgpO1xuICBTdXJmYWNlLnJlc2V0ICgpO1xuICBOYW1lLnJlc2V0ICgpO1xuICBDb2xsaXNpb25SZXNvbHZlci5yZXNldCAoKTtcbiAgT3duZXIucmVzZXQgKCk7XG4gIEludnVuZXJhYmxlRnJhbWUucmVzZXQgKCk7XG4gIEhlYWx0aC5yZXNldCAoKTtcbiAgQWN0aXZlLnJlc2V0ICgpO1xuICBTdGF0aXN0aWNzLnJlc2V0ICgpO1xuICBUZXh0RC5yZXNldCAoKTtcbiAgQ3B0LnJlc2V0ICgpXG5cbiAgbGV0IGRpc2FibGVfYWxsIGUgPSBcbiAgICBQb3NpdGlvbi5kZWxldGUgZTtcbiAgICBUZWxlcG9ydC5kZWxldGUgZTtcbiAgICBQcmlvcml0eS5kZWxldGUgZTtcbiAgICBWZWxvY2l0eS5kZWxldGUgZTtcbiAgICBNYXNzLmRlbGV0ZSBlO1xuICAgIEJveC5kZWxldGUgZTtcbiAgICBTdXJmYWNlLmRlbGV0ZSBlO1xuICAgIE5hbWUuZGVsZXRlIGU7XG4gICAgQ29sbGlzaW9uUmVzb2x2ZXIuZGVsZXRlIGU7XG4gICAgT3duZXIuZGVsZXRlIGU7XG4gICAgSW52dW5lcmFibGVGcmFtZS5kZWxldGUgZTtcbiAgICBIZWFsdGguZGVsZXRlIGU7XG4gICAgQWN0aXZlLmRlbGV0ZSBlO1xuICAgIFN0YXRpc3RpY3MuZGVsZXRlIGU7XG4gICAgVGV4dEQuZGVsZXRlIGU7XG4gICAgQ3B0LmRlbGV0ZSBlOyIsIlxyXG5sZXQgbWFwID0gW3xcclxuW3wxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzF8XTtcclxuW3wxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzF8XTtcclxuW3wxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzF8XTtcclxufF1cclxuXHJcbmxldCBwYWxldHRlID0gW3xcclxuICAoR2Z4LmNvbG9yIDAgMCAwIDI1NSk7XHJcbiAgKEdmeC5jb2xvciAxMzAgMTMwIDEzMCAyNTUpO1xyXG4gIChHZnguY29sb3IgNjEgNjEgNjEgMjU1KTtcclxuICAoR2Z4LmNvbG9yIDAgMCAyNTUgMjU1KTtcclxuICAoR2Z4LmNvbG9yIDAgMjU1IDAgMjU1KTtcclxuICAoR2Z4LmNvbG9yIDI1NSAwIDAgMjU1KTtcclxufF1cclxuXHJcbmxldCBfZG9vclRvcCA9ICg0MDAsMTIwKVxyXG5sZXQgX2Rvb3JCb3R0b20gPSAoNDAwLDYwMClcclxubGV0IF9kb29yTGVmdCA9ICg4MCw0MDApXHJcbmxldCBfZG9vclJpZ2h0ID0gKDcyMCw0MDApXHJcblxyXG4iLCJvcGVuIEVjc1xuXG50eXBlIHQgPSB7XG4gICAgbXV0YWJsZSBjcHQgOiBmbG9hdDtcbiAgICBhY3Rpb24gOiBFbnRpdHkudCAtPiB1bml0O1xufVxuXG5cbmxldCBzZXRfY3B0IGMgY3B0ID0gXG4gICAgYy5jcHQgPC0gY3B0O1xuICAgICgpIiwib3BlbiBWZWN0b3JcblxudHlwZSB0ID0geyB3aWR0aCA6IGludDsgaGVpZ2h0IDogaW50IH1cbmxldCB0b3BfbGVmdCB2IF9iID0gdlxubGV0IHRvcF9yaWdodCB2IGIgPSB7IHYgd2l0aCB4ID0gdi54ICsuIGZsb2F0IGIud2lkdGggfVxubGV0IGJvdHRvbV9sZWZ0IHYgYiA9IHsgdiB3aXRoIHkgPSB2LnkgKy4gZmxvYXQgYi5oZWlnaHQgfVxuXG5sZXQgYm90dG9tX3JpZ2h0IHYgYiA9IHsgeCA9IHYueCArLiBmbG9hdCBiLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSB2LnkgKy4gZmxvYXQgYi5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG5sZXQgbWFyZ2luIGIxIGIyIHAgPVxuICBsZXQgeCA9ICgoKGZsb2F0X29mX2ludCBiMS53aWR0aCkgLS4gKGZsb2F0X29mX2ludCBiMi53aWR0aCkpLy4gMi4pICsuIHAueCBpblxuICBsZXQgeSA9ICgoKGZsb2F0X29mX2ludCBiMS5oZWlnaHQpIC0uIChmbG9hdF9vZl9pbnQgYjIuaGVpZ2h0KSkvLiAyLikgKy4gcC55IGluXG4gIHsgeCA9IHggOyB5ID0geX1cblxubGV0IGNlbnRlciB2IGIgPSB7IFxuICB4ID0gdi54ICsuIDAuNSAqLiBmbG9hdCBiLndpZHRoO1xuICB5ID0gdi55ICsuIDAuNSAqLiBmbG9hdCBiLmhlaWdodDtcbn1cblxubGV0IG1kaWZmIHYxIGIxIHYyIGIyID1cbiAgKCogV2UgdXNlIHRoZSBNaW5rb3dza2kgZGlmZmVyZW5jZSBvZiBCb3gxIGFuZCBCb3gyICopXG4gIGxldCB4ID0gdjEueCAtLiB2Mi54IC0uIGZsb2F0IGIyLndpZHRoIGluXG4gIGxldCB5ID0gdjEueSAtLiB2Mi55IC0uIGZsb2F0IGIyLmhlaWdodCBpblxuICBsZXQgaCA9IGIxLmhlaWdodCArIGIyLmhlaWdodCBpblxuICBsZXQgdyA9IGIxLndpZHRoICsgYjIud2lkdGggaW5cbiAgKHt4ID0geDsgeSA9IHl9LCB7d2lkdGggPSB3OyBoZWlnaHQgPSBofSlcbiBcbmxldCBoYXNfb3JpZ2luIHYgYiA9XG4gIHYueCA8IDAuMCAmJiB2LnggKy4gZmxvYXQgYi53aWR0aCA+IDAuMCAmJiB2LnkgPCAwLjAgJiYgdi55ICsuIGZsb2F0IGIuaGVpZ2h0ID4gMC4wICBcblxubGV0IGludGVyc2VjdCB2MSBiMSB2MiBiMyA9XG4gIGxldCB2LCBiID0gbWRpZmYgdjEgYjEgdjIgYjMgaW4gXG4gIGhhc19vcmlnaW4gdiBiXG5cbmxldCBwcCBmbXQgYiA9IEZvcm1hdC5mcHJpbnRmIGZtdCBcIlt3OiVkLGg6JWRdXCIgYi53aWR0aCBiLmhlaWdodFxuIiwidHlwZSB0ID0ge1xyXG4gIHN0cmVuZ3RoIDogZmxvYXQ7XHJcbiAgYXR0YWNrc3BlZWQgOiBmbG9hdDtcclxuICBtb3Zlc3BlZWQgOiBmbG9hdDtcclxufVxyXG5cclxubGV0IGFkZFN0YXQgYSBiID0ge3N0cmVuZ3RoID0gYS5zdHJlbmd0aCouYi5zdHJlbmd0aDsgYXR0YWNrc3BlZWQgPSBhLmF0dGFja3NwZWVkICouIGIuYXR0YWNrc3BlZWQ7IG1vdmVzcGVlZCA9IGEubW92ZXNwZWVkICouIGIubW92ZXNwZWVkfSIsImV4Y2VwdGlvbiBNaXNzaW5nSWRsZSBvZiBzdHJpbmdcblxudHlwZSB0dXBsZUludCA9IChpbnQgKmludClcblxubGV0IHRpbWUgPSByZWYgMC4wXG5sZXQgY3B0ID0gcmVmIDAuMFxuXG50eXBlIGFuaW1hdGlvbiA9IHtcbiAgICAgICAgZnJhbWVzIDogR2Z4LnJlbmRlciBhcnJheTtcbiAgICAgICAgaWRsZVRhYmxlIDogKHN0cmluZywgdHVwbGVJbnQpIEhhc2h0YmwudDtcbiAgICAgICAgbXV0YWJsZSBjdXJyZW50SWRsZSA6IHR1cGxlSW50O1xuICAgICAgICBtdXRhYmxlIGN1cnJlbnQgOiBpbnRcbn1cblxudHlwZSB0aWxlbWFwID0ge1xuICAgICAgICB0aWxlcyA6IEdmeC5jb2xvciBhcnJheTtcbiAgICAgICAgbWFwIDogaW50IGFycmF5IGFycmF5O1xuICAgICAgICBncmlkX3NpemUgOiBpbnQ7XG59XG5cblxudHlwZSB0ID0gQ29sb3Igb2YgR2Z4LmNvbG9yXG4gICAgICAgIHwgSW1hZ2Ugb2YgR2Z4LnJlbmRlclxuICAgICAgICB8IEFuaW1hdGlvbiBvZiBhbmltYXRpb25cbiAgICAgICAgfCBUaWxlIG9mIHRpbGVtYXBcbiAgICAgICAgXG5cbmxldCBibGFjayA9IENvbG9yIChHZnguY29sb3IgMCAwIDAgMjU1KVxubGV0IHJlZCA9IENvbG9yIChHZnguY29sb3IgMjU1IDAgMCAyNTUpXG5sZXQgcm91Z2Vmb25jZSA9IENvbG9yIChHZnguY29sb3IgMTIwIDAgMCAyNTUpXG5sZXQgZ3JlZW4gPSBDb2xvciAoR2Z4LmNvbG9yIDAgMjU1IDAgMjU1KVxubGV0IGJsdWUgPSBDb2xvciAoR2Z4LmNvbG9yIDAgMCAyNTUgMjU1KVxubGV0IHllbGxvdyA9IENvbG9yIChHZnguY29sb3IgMjU1IDI1NSAwIDI1NSlcbmxldCBncmF5ID0gQ29sb3IgKEdmeC5jb2xvciA2NCA3MCA3MiAyNTUpXG5cbmxldCBjcmVhdGVfaW1nIGltZyBsIGggPSBcbiAgICAgICAgbGV0IHIgPSBHZnguY3JlYXRlX29mZnNjcmVlbiBsIGggaW5cbiAgICAgICAgR2Z4LmRyYXdfaW1hZ2Vfc2NhbGUgciBpbWcgMCAwIGwgaCAxLjtcbiAgICAgICAgSW1hZ2UgclxuXG5sZXQgY3JlYXRlX2ltZ19zY2FsZSBpbWcgbCBoIHggeT0gXG4gICAgICAgICAgICAgICAgbGV0IHIgPSBHZnguY3JlYXRlX29mZnNjcmVlbiBsIGggaW5cbiAgICAgICAgICAgICAgICBHZnguZHJhd19pbWFnZV9mdWxsIHIgaW1nIHggeSBsIGggMCAwIGwgaCAxLjtcbiAgICAgICAgICAgICAgICBJbWFnZSByXG5cbmxldCBjcmVhdGVfdGlsZW1hcCBjb2xvcnMgdGlsZW1hcCBzaXplPSBUaWxlIHt0aWxlcyA9IGNvbG9yczsgbWFwID0gdGlsZW1hcDtncmlkX3NpemUgPSBzaXplfVxuXG5sZXQgY3JlYXRlX2FuaW1hdGlvbiBpbWcgbnVtX3cgbnVtX2ggc3cgc2ggZHcgZGggPSBcbiAgICAgICAgbGV0IGFycmF5X2ZyYW1lID0gQXJyYXkuaW5pdCAobnVtX3cgKiBudW1faCkgKGZ1biBfaSAtPiBHZnguY3JlYXRlX29mZnNjcmVlbiBkdyBkaCkgaW5cbiAgICAgICAgZm9yIHkgPSAwIHRvIChudW1faC0xKSBkb1xuICAgICAgICAgICAgICAgIGZvciB4ID0gMCB0byAobnVtX3ctMSkgZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIEdmeC5kcmF3X2ltYWdlX2Z1bGwgYXJyYXlfZnJhbWUuKHkqbnVtX3creCkgaW1nICh4KnN3KSAoeSpzaCkgc3cgc2ggMCAwIGR3IGRoIDEuO1xuICAgICAgICAgICAgICAgIGRvbmVcbiAgICAgICAgZG9uZTtcbiAgICAgICAgQW5pbWF0aW9uIHtmcmFtZXMgPSBhcnJheV9mcmFtZTsgY3VycmVudCA9IDA7Y3VycmVudElkbGUgPSAoMCxudW1fdyAqIG51bV9oKSA7IGlkbGVUYWJsZSA9IEhhc2h0YmwuY3JlYXRlIDMyfVxuXG5sZXQgY3JlYXRlX2lkbGUgaWRsZU5hbWUgKGRlYiwgZmluKSBhbmltPSBcbiAgbWF0Y2ggYW5pbSB3aXRoIFxuICAgIHwgQW5pbWF0aW9uIGEgLT4gSGFzaHRibC5yZXBsYWNlIChhLmlkbGVUYWJsZSkgaWRsZU5hbWUgKGRlYiwgZmluKVxuICAgIHwgXyAtPiAoKVxuXG5sZXQgZHJhd190aWxlbWFwIHRpbGVtYXAgY3R4IHBvc1ggcG9zWT1cbiAgICAgICAgbGV0IHRpbGUgPSByZWYgMCBpblxuICAgICAgICBsZXQgY29sb3IgPSByZWYgKEdmeC5jb2xvciAwIDAgMCAyNTUpIGluXG4gICAgICAgIGxldCBzaXplID0gdGlsZW1hcC5ncmlkX3NpemUgaW5cbiAgICAgICAgbGV0IHNpemVYID0gQXJyYXkubGVuZ3RoIHRpbGVtYXAubWFwIGluXG4gICAgICAgIGxldCBzaXplWSA9IEFycmF5Lmxlbmd0aCB0aWxlbWFwLm1hcC4oMCkgaW5cbiAgICAgICAgZm9yIHkgPSAwIHRvIChzaXplWC0xKSBkb1xuICAgICAgICAgICAgICAgIGZvciB4ID0gMCB0byAoc2l6ZVktMSkgZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUgOj0gdGlsZW1hcC5tYXAuKHkpLih4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDo9IHRpbGVtYXAudGlsZXMuKCF0aWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdmeC5maWxsX3JlY3QgY3R4ICh4KnNpemUrcG9zWCkgKHkqc2l6ZStwb3NZKSBzaXplIHNpemUgIWNvbG9yO1xuICAgICAgICAgICAgICAgIGRvbmVcbiAgICAgICAgZG9uZVxuXG5sZXQgZ2V0X2lkbGUgaWRsZU5hbWUgYW5pbT0gdHJ5XG4gIEhhc2h0YmwuZmluZCBhbmltLmlkbGVUYWJsZSBpZGxlTmFtZVxuICB3aXRoXG4gICAgTm90X2ZvdW5kIC0+IHJhaXNlIChNaXNzaW5nSWRsZShpZGxlTmFtZSkpXG5cbmxldCBwbGF5X2lkbGUgYW5pbSBpZGxlTmFtZSA9IFxuICBtYXRjaCBhbmltIHdpdGggXG4gIHxBbmltYXRpb24gYSAtPiAgbGV0IChkZWIsZmluKSA9IGdldF9pZGxlIGlkbGVOYW1lIGEgaW5cbiAgICAgICAgICAgICAgICAgICAgYS5jdXJyZW50IDwtIGRlYjtcbiAgICAgICAgICAgICAgICAgICAgYS5jdXJyZW50SWRsZSA8LSAoZGViLGZpbikgXG4gIHwgXyAtPiAoKVxuXG5cblxubGV0IGdldF9mcmFtZSBhbmltIF9kaXIgX2R0IF90aW1lIF9jcHQ9IFxuICAgICAgICBsZXQgY3VycmVudENhc2UgPSBBcnJheS5nZXQgKGFuaW0uZnJhbWVzKSAoYW5pbS5jdXJyZW50KSBpblxuICAgICAgICBsZXQgZGViID0gKGZzdCBhbmltLmN1cnJlbnRJZGxlKSBpblxuICAgICAgICBsZXQgZmluID0gKHNuZCBhbmltLmN1cnJlbnRJZGxlKSBpblxuICAgICAgICBsZXQgX2N1cnJlbnQgPSBhbmltLmN1cnJlbnQgaW5cbiAgICAgICAgbGV0IHRpbWUgPSBTeXMudGltZSAoKSBpblxuICAgICAgICBhbmltLmN1cnJlbnQgPC0gKCgoaW50X29mX2Zsb2F0ICh0aW1lKi4xMC4pKSltb2QoZmluLWRlYikpICsgZGViO1xuICAgICAgICBjdXJyZW50Q2FzZSIsIm9wZW4gQ29tcG9uZW50X2RlZnNcclxuXHJcbmxldCBpbml0ICgpID0gKClcclxuXHJcbmxldCB1cGRhdGUgX2R0IGVsID1cclxuICBMaXN0Lml0ZXIgKGZ1biBlIC0+XHJcbiAgICAgIGlmIChBY3RpdmUuaGFzX2NvbXBvbmVudCBlKSB0aGVuIGJlZ2luXHJcbiAgICAgICAgbGV0IGFjdGl2ZSA9IEFjdGl2ZS5nZXQgZSBpblxyXG4gICAgICAgIGlmIG5vdChhY3RpdmUpIHRoZW4gZGlzYWJsZV9hbGwgZVxyXG4gICAgICBlbmQ7XHJcbiAgICBcclxuICAgICkgZWwiLCJvcGVuIENvbXBvbmVudF9kZWZzXG5cbmxldCBpbml0ICgpID0gKClcblxubGV0IHVwZGF0ZSBfZHQgZWwgPVxuICBMaXN0Lml0ZXJpIChmdW4gaSBlMSAtPlxuICAgIExpc3QuaXRlcmkgKGZ1biBqIGUyIC0+XG4gICAgICAoKiBVbmUgZG91YmxlIGJvdWNsZSBxdWkgw6l2aXRlIGRlIGNvbXBhcmVyIGRldXggZm9pc1xuICAgICAgICAgbGVzIG9iamV0cyA6IHNpIG9uIGNvbXBhcmUgQSBldCBCLCBvbiBuZSBjb21wYXJlIHBhcyBCIGV0IEEuXG4gICAgICAgICBJbCBmYXVkcmEgYW3DqWxpb3JlciBjZWxhIHNpIG9uIGEgYmVhdWNvdXAgKD4gMzApIG9iamV0cyBzaW11bHRhbsOpbWVudC5cbiAgICAgICopXG4gICAgICBpZiBqID4gaSB0aGVuIGJlZ2luXG4gICAgICAgICgqIGxlcyBjb21wb3NhbnRzIGR1IHJlY3RhbmdsZSByMSAqKVxuICAgICAgICBsZXQgYm94MSA9IEJveC5nZXQgZTEgaW5cbiAgICAgICAgbGV0IGJveEMxID0gQm94Q29sbGlkZXIuZ2V0IGUxIGluXG4gICAgICAgIGxldCBwb3MxID0gUmVjdC5tYXJnaW4gYm94MSBib3hDMSAoUG9zaXRpb24uZ2V0IGUxKSBpblxuICAgICAgICBcbiAgICAgICAgKCogbGVzIGNvbXBvc2FudHMgZHUgcmVjdGFuZ2xlIHIyICopXG4gICAgICAgIGxldCBib3gyID0gQm94LmdldCBlMiBpblxuICAgICAgICBsZXQgYm94QzIgPSBCb3hDb2xsaWRlci5nZXQgZTIgaW5cbiAgICAgICAgbGV0IHBvczIgPSBSZWN0Lm1hcmdpbiBib3gyIGJveEMyIChQb3NpdGlvbi5nZXQgZTIpIGluXG4gICAgICAgIFxuICAgICAgICAoKiBsZXMgdml0ZXNzZXMgKilcbiAgICAgICAgbGV0IHYxID0gVmVsb2NpdHkuZ2V0IGUxIGluXG4gICAgICAgIGxldCB2MiA9IFZlbG9jaXR5LmdldCBlMiBpblxuICAgICAgICAoKiBbMV0gbGEgc291c3RyYWN0aW9uIGRlIE1pbmtvd3NraSAqKVxuICAgICAgICBsZXQgc19wb3MsIHNfcmVjdCA9IFJlY3QubWRpZmYgcG9zMiBib3hDMiBwb3MxIGJveEMxIGluXG4gICAgICAgICgqIFsyXSBzaSBpbnRlcnNlY3Rpb24gZXQgdW4gZGVzIG9iamV0cyBldCBtb2JpbGUsIGxlcyBvYmpldHMgcmVib25kaXNzZW50ICopXG4gICAgICAgIGlmIFJlY3QuaGFzX29yaWdpbiBzX3BvcyBzX3JlY3QgJiZcbiAgICAgICAgICBub3QgKFZlY3Rvci5pc196ZXJvIHYxICYmIFZlY3Rvci5pc196ZXJvIHYyKVxuICAgICAgICAgIHRoZW4gYmVnaW5cbiAgICAgICAgICAgICgqIFszXSBsZSBwbHVzIHBldGl0IGRlcyB2ZWN0ZXVycyBhIGIgYyBkICopXG4gICAgICAgICAgIFxuICAgICAgICAgICAgKCogWzEwXSBhcHBlbCBkZXMgcmVzb2x2ZXVycyAqKVxuICAgICAgICAgICAgaWYgQ29sbGlzaW9uUmVzb2x2ZXIuaGFzX2NvbXBvbmVudCBlMSB0aGVuIChDb2xsaXNpb25SZXNvbHZlci5nZXQgZTEpIGUxIGUyO1xuICAgICAgICAgICAgaWYgQ29sbGlzaW9uUmVzb2x2ZXIuaGFzX2NvbXBvbmVudCBlMiB0aGVuIChDb2xsaXNpb25SZXNvbHZlci5nZXQgZTIpIGUyIGUxXG4gICAgICAgICAgZW5kXG4gICAgICBlbmRcbiAgICAgICkgZWwpIGVsXG4iLCJleGNlcHRpb24gTWlzc2luZ0tleSBvZiAoc3RyaW5nKVxuXG5sZXQgY29tbWFuZHMgPSBIYXNodGJsLmNyZWF0ZSAxN1xubGV0IGtleXNEb3duID0gSGFzaHRibC5jcmVhdGUgMzJcblxubGV0IGdldF9rZXkga2V5ID0gdHJ5XG4gIEhhc2h0YmwuZmluZCBrZXlzRG93biBrZXlcbiAgd2l0aFxuICAgIE5vdF9mb3VuZCAtPiByYWlzZSAoTWlzc2luZ0tleSAoa2V5KSlcblxubGV0IHNldF9rZXkga2V5IGIgPSBcbiAgICBIYXNodGJsLnJlcGxhY2Uga2V5c0Rvd24ga2V5IGJcblxubGV0IGdldF9hY3RpdmVfa2V5ICgpID0gSGFzaHRibC5mb2xkIChmdW4ga2V5IHZhbHVlIGFjYyAtPiBpZiB2YWx1ZSB0aGVuIChrZXksdmFsdWUpZWxzZSBhY2MpIGtleXNEb3duIChcIlwiLGZhbHNlKVxuXG5sZXQgcmVnaXN0ZXJfY29tbWFuZCBldiBmID1cbiAgaWYgZXYgIT0gR2Z4Lk5vRXZlbnQgdGhlblxuICAgIEhhc2h0YmwuYWRkIGNvbW1hbmRzICBldiBmXG5cbmxldCBnZXRfY29tbWFuZHMgZXYgPSBIYXNodGJsLmZpbmRfYWxsIGNvbW1hbmRzIGV2XG5cbmxldCByZXNldF9hbGwgKCkgPSBIYXNodGJsLmNsZWFyIGNvbW1hbmRzO1xuICAgIEhhc2h0YmwuY2xlYXIga2V5c0Rvd24iLCJcbmxldCBpbml0ICgpID0gKClcblxubGV0IHVwZGF0ZSBfZHQgX2VsID1cbiAgKCogQ2hlY2sgZm9yIGtleWJvYXJkIGV2ZW50cyAqKVxuICBsZXQgcmVjIGxvb3BfZXZlbnRzICgpID1cbiAgICAgIG1hdGNoIEdmeC5wb2xsX2V2ZW50ICgpIHdpdGhcbiAgICAgTm9FdmVudCAtPiAoKVxuICAgIHwgZXYgLT4gXG4gICAgICBMaXN0Lml0ZXIgKGZ1biBmIC0+IGYgKCkpIChJbnB1dF9oYW5kbGVyLmdldF9jb21tYW5kcyBldik7XG4gICAgICBsb29wX2V2ZW50cyAoKVxuICAgIGluXG4gICAgbG9vcF9ldmVudHMgKClcbiIsIlxub3BlbiBDb21wb25lbnRfZGVmc1xubGV0IGZyYW1lU3RhcnQgPSByZWYgMC4wXG5sZXQgZnJhbWVFbmQgPSByZWYgMC4wXG5sZXQgZnJhbWVDb3VudCA9IHJlZiAwXG5sZXQgZnJhbWVUaW1lciA9IHJlZiAwLjBcbmxldCBmcHMgPSA2MC4wXG5sZXQgZnJhbWVEZWxheSA9IDEuIC8uIGZwc1xubGV0IGltYWdlcyA9IEhhc2h0YmwuY3JlYXRlIDIwXG5cblxuXG5sZXQgaW5pdF9nYW1lIF9kdCA9IFxuICBTeXN0ZW0uaW5pdF9hbGwgKCk7XG5cbiAgKCogTGUgam91ZXVyKilcbiAgbGV0IHBsYXllciA9IFBsYXllci5jcmVhdGUgXCJwbGF5ZXJcIiA0MDAuIDM0MC4gKEhhc2h0YmwuZmluZCBpbWFnZXMgXCJwbGF5ZXJfaW1nXCIpIGluXG4gICgqIExlcyBvYmpldHMqKVxuICBsZXQgaXRlbXBvb2wgPSBbXG4gICAgKE9iamV0LmNyZWF0ZSAxMC4gMTAuIFwiQXJjIGVuIGN1aXZyZVwiIChIYXNodGJsLmZpbmQgaW1hZ2VzIFwiaXRlbV9pbWdcIikge3N0cmVuZ3RoID0gMi47IGF0dGFja3NwZWVkID0gMS4wOyBtb3Zlc3BlZWQgPSAxLjA7fSBcIkZPUitcIiAwIDApO1xuICAgIChPYmpldC5jcmVhdGUgMTAuIDEwLiBcIkFyYyBlbiBhcmdlbnRcIiAoSGFzaHRibC5maW5kIGltYWdlcyBcIml0ZW1faW1nXCIpIHtzdHJlbmd0aCA9IDMuOyBhdHRhY2tzcGVlZCA9IDEuMDsgbW92ZXNwZWVkID0gMS4wO30gXCJGT1IrK1wiIDQwIDApO1xuICAgIChPYmpldC5jcmVhdGUgMTAuIDEwLiBcIkFyYyBlbiBvclwiIChIYXNodGJsLmZpbmQgaW1hZ2VzIFwiaXRlbV9pbWdcIikge3N0cmVuZ3RoID0gNC47IGF0dGFja3NwZWVkID0gMS4wOyBtb3Zlc3BlZWQgPSAxLjA7fSBcIkZPUisrK1wiIDgwIDApO1xuICAgIChPYmpldC5jcmVhdGUgMTAuIDEwLiBcIkNhcnF1b2lzIGVuIGN1aXZyZVwiIChIYXNodGJsLmZpbmQgaW1hZ2VzIFwiaXRlbV9pbWdcIikge3N0cmVuZ3RoID0gMS47IGF0dGFja3NwZWVkID0gMS41OyBtb3Zlc3BlZWQgPSAxLjA7fSBcIlZBK1wiIDEyMCAwKTtcbiAgICAoT2JqZXQuY3JlYXRlIDEwLiAxMC4gXCJDYXJxdW9pcyBlbiBhcmdlbnRcIiAoSGFzaHRibC5maW5kIGltYWdlcyBcIml0ZW1faW1nXCIpIHtzdHJlbmd0aCA9IDEuOyBhdHRhY2tzcGVlZCA9IDIuMDsgbW92ZXNwZWVkID0gMS4wO30gXCJWQSsrXCIgMTYwIDApO1xuICAgIChPYmpldC5jcmVhdGUgMTAuIDEwLiBcIkNhcnF1b2lzIGVuIG9yXCIgKEhhc2h0YmwuZmluZCBpbWFnZXMgXCJpdGVtX2ltZ1wiKSB7c3RyZW5ndGggPSAxLjsgYXR0YWNrc3BlZWQgPSAzLjA7IG1vdmVzcGVlZCA9IDEuMDt9IFwiVkErKytcIiAyMDAgMCk7XG4gICAgKE9iamV0LmNyZWF0ZSAxMC4gMTAuIFwiQm90dGUgZW4gY3VpdnJlXCIgKEhhc2h0YmwuZmluZCBpbWFnZXMgXCJpdGVtX2ltZ1wiKSB7c3RyZW5ndGggPSAxLjsgYXR0YWNrc3BlZWQgPSAxLjA7IG1vdmVzcGVlZCA9IDEuMTU7fSBcIlZJVCtcIiAyNDAgMCk7XG4gICAgKE9iamV0LmNyZWF0ZSAxMC4gMTAuIFwiQm90dGUgZW4gYXJnZW50XCIgKEhhc2h0YmwuZmluZCBpbWFnZXMgXCJpdGVtX2ltZ1wiKSB7c3RyZW5ndGggPSAxLjsgYXR0YWNrc3BlZWQgPSAxLjA7IG1vdmVzcGVlZCA9IDEuMzA7fSBcIlZJVCsrXCIgMjgwIDApO1xuICAgIChPYmpldC5jcmVhdGUgMTAuIDEwLiBcIkJvdHRlIGVuIG9yXCIgKEhhc2h0YmwuZmluZCBpbWFnZXMgXCJpdGVtX2ltZ1wiKSB7c3RyZW5ndGggPSAxLjsgYXR0YWNrc3BlZWQgPSAxLjA7IG1vdmVzcGVlZCA9IDEuNDU7fSBcIlZJVCsrK1wiIDMyMCAwKVxuICBdaW5cbiAgKCpMZXMgaW5wdXRzKilcbiAgSW5wdXRfaGFuZGxlci5yZWdpc3Rlcl9jb21tYW5kIChLZXlEb3duIFwielwiKSAoZnVuICgpIC0+IFBsYXllci5tb3ZlX3VwIHBsYXllcik7XG4gIElucHV0X2hhbmRsZXIucmVnaXN0ZXJfY29tbWFuZCAoS2V5RG93biBcInNcIikgKGZ1biAoKSAtPiBQbGF5ZXIubW92ZV9kb3duIHBsYXllcik7XG4gIElucHV0X2hhbmRsZXIucmVnaXN0ZXJfY29tbWFuZCAoS2V5RG93biBcInFcIikgKGZ1biAoKSAtPiBQbGF5ZXIubW92ZV9sZWZ0IHBsYXllcik7XG4gIElucHV0X2hhbmRsZXIucmVnaXN0ZXJfY29tbWFuZCAoS2V5RG93biBcImRcIikgKGZ1biAoKSAtPiBQbGF5ZXIubW92ZV9yaWdodCBwbGF5ZXIpO1xuICBJbnB1dF9oYW5kbGVyLnJlZ2lzdGVyX2NvbW1hbmQgKEtleVVwIFwielwiKSAoZnVuICgpIC0+IFBsYXllci5zdG9wIFwidXBcIiBwbGF5ZXIpO1xuICBJbnB1dF9oYW5kbGVyLnJlZ2lzdGVyX2NvbW1hbmQgKEtleVVwIFwic1wiKSAoZnVuICgpIC0+IFBsYXllci5zdG9wIFwiZG93blwiIHBsYXllcik7XG4gIElucHV0X2hhbmRsZXIucmVnaXN0ZXJfY29tbWFuZCAoS2V5VXAgXCJxXCIpIChmdW4gKCkgLT4gUGxheWVyLnN0b3AgXCJsZWZ0XCIgcGxheWVyKTtcbiAgSW5wdXRfaGFuZGxlci5yZWdpc3Rlcl9jb21tYW5kIChLZXlVcCBcImRcIikgKGZ1biAoKSAtPiBQbGF5ZXIuc3RvcCBcInJpZ2h0XCIgcGxheWVyKTtcbiAgSW5wdXRfaGFuZGxlci5yZWdpc3Rlcl9jb21tYW5kIChLZXlEb3duIFwiIFwiKSAoZnVuICgpIC0+ICBHYW1lX3N0YXRlLnNob3QgKEhhc2h0YmwuZmluZCBpbWFnZXMgXCJoZWFydF9pbWdcIikgKEhhc2h0YmwuZmluZCBpbWFnZXMgXCJwcm9qZWN0aWxlX2ltZ1wiKSBwbGF5ZXIpO1xuICAoKkxlcyBpbnB1dHMgcXVlIGwnb24gdmV1dCBzYXV2ZWdhcmRlciopXG4gIElucHV0X2hhbmRsZXIuc2V0X2tleSBcInVwXCIgZmFsc2U7XG4gIElucHV0X2hhbmRsZXIuc2V0X2tleSBcImRvd25cIiBmYWxzZTtcbiAgSW5wdXRfaGFuZGxlci5zZXRfa2V5IFwibGVmdFwiIGZhbHNlO1xuICBJbnB1dF9oYW5kbGVyLnNldF9rZXkgXCJyaWdodFwiIGZhbHNlO1xuXG4gIEdhbWVfc3RhdGUuc2V0X2Zsb29yIDE7XG5cbiAgKCogKilcbiAgbGV0IG1hcCA9IEdhbWVfc3RhdGUuZ2VuZXJhdGVfbWFwIEdsb2JhbC5tYXAgR2xvYmFsLnBhbGV0dGUgNSBpbWFnZXMgaW5cblxuXG4gICgqTXVycyBkdSBoYXV0KilcbiAgR2FtZV9zdGF0ZS5lbmFibGVfd2FsbCAoV2FsbC5jcmVhdGUgNDAuIDEyMC4gMzYwIDQwKTtcbiAgR2FtZV9zdGF0ZS5lbmFibGVfd2FsbCAoV2FsbC5jcmVhdGUgNDQwLiAxMjAuIDMyMCA0MCk7XG4gICgqTXVycyBkdSBiYXMqKVxuICBHYW1lX3N0YXRlLmVuYWJsZV93YWxsIChXYWxsLmNyZWF0ZSA0MC4gNTYwLiAzNjAgNDApO1xuICBHYW1lX3N0YXRlLmVuYWJsZV93YWxsIChXYWxsLmNyZWF0ZSA0NDAuIDU2MC4gMzIwIDQwKTtcbiAgKCpNdXJzIGRlIGdhdWNoZSopXG4gIEdhbWVfc3RhdGUuZW5hYmxlX3dhbGwgKFdhbGwuY3JlYXRlIDQwLiAxNjAuIDQwIDE2MCk7XG4gIEdhbWVfc3RhdGUuZW5hYmxlX3dhbGwgKFdhbGwuY3JlYXRlIDQwLiAzNjAuIDQwIDIwMCk7XG4gICgqTXVycyBkZSBkcm9pdGUqKVxuICBHYW1lX3N0YXRlLmVuYWJsZV93YWxsIChXYWxsLmNyZWF0ZSA3MjAuIDE2MC4gNDAgMTYwKTtcbiAgR2FtZV9zdGF0ZS5lbmFibGVfd2FsbCAoV2FsbC5jcmVhdGUgNzIwLiAzNjAuIDQwIDIwMCk7XG4gIFxuICBHYW1lX3N0YXRlLmluaXQgcGxheWVyIG1hcCBpbWFnZXMgaXRlbXBvb2w7XG4gIGZhbHNlXG5cbigqw4ljcmFuIGRlIGdhbWUgb3ZlciAqKVxubGV0IGdvX3NjcmVlbiAoKSA9IFxuICBsZXQgY3R4ID0gRHJhd19zeXN0ZW0uY3R4IGluXG4gIGxldCByID0gT3B0aW9uLmdldCAhY3R4IGluXG4gIEdmeC5jbGVhcl9yZWN0IHIgMCAwIDgwMCA2NDA7XG4gIEdmeC5maWxsX3JlY3QgciAoMCkgKDApIDgwMCA2NDAgKEdmeC5jb2xvciAwIDAgMCAyNTUpO1xuICBHZnguZHJhd190ZXh0IHIgXCJHYW1lIE92ZXJcIiAyNTAgMzAwIFwiMTUwcHggVmVyZGFuYVwiIChHZnguY29sb3IgMjU1IDI1NSAyNTUgMjU1KSAzNTAuIDEuO1xuICBHZnguZHJhd190ZXh0IHIgKFwiU2NvcmUgOiBcIl4oc3RyaW5nX29mX2ludCAoR2FtZV9zdGF0ZS5nZXRfZmxvb3IgKCkpKSApIDM1MCAzNTAgXCIyNHB4IFZlcmRhbmFcIiAoR2Z4LmNvbG9yIDI1NSAyNTUgMjU1IDI1NSkgMjUwLiAxLjtcbiAgR2Z4LmRyYXdfdGV4dCByIFwiQXBwdXlleiBzdXIgUiBwb3VyIHJlY29tbWVuY2VyXCIgMjg1IDM4NSBcIjI0cHggVmVyZGFuYVwiIChHZnguY29sb3IgMjU1IDI1NSAyNTUgMjU1KSAyNTAuIDEuXG5cblxubGV0IHBsYXlfZ2FtZSBkdCA9XG4gICgqIFVwZGF0ZSBhbGwgc3lzdGVtcyAqKVxuICBmcmFtZVN0YXJ0IDo9IFN5cy50aW1lICgpO1xuICBTeXN0ZW0udXBkYXRlX2FsbCBkdDtcbiAgR2FtZV9zdGF0ZS51cGRhdGVfY291bnRfZSAoKTsgIFxuICBmcmFtZUVuZCA6PSAoU3lzLnRpbWUgKCkpIC0uICFmcmFtZVN0YXJ0O1xuXG4gICgqU2kgbGEgZnJhbWUgbidhIHBhcyBkdXLDqWUgMS82MCBzZWNvbmRzIGFsb3JzIG9uIGF0dGVuZCopXG4gIHdoaWxlICFmcmFtZUVuZCA8IGZyYW1lRGVsYXkgZG8gZnJhbWVFbmQgOj0gKFN5cy50aW1lICgpKSAtLiAhZnJhbWVTdGFydDsgZG9uZTtcbiAgZnJhbWVUaW1lciA6PSAhZnJhbWVUaW1lciArLiAhZnJhbWVFbmQ7XG4gIGluY3IgZnJhbWVDb3VudDtcbiAgKCpPbiB2w6lyZmllIHNpIHRvdXMgbGVzIGVubmVtaWVzIHNvbnQgbW9ydHMgc2kgb3VpIG9uIGNoYW5nZSBkJ8OpdGFnZSopXG4gIGlmIG5vdChHYW1lX3N0YXRlLmNoZWNrX2VubmVtaWVzICgpKSB0aGVuIGJlZ2luICBsZXQgbWFwID0gR2FtZV9zdGF0ZS5nZW5lcmF0ZV9tYXAgR2xvYmFsLm1hcCBHbG9iYWwucGFsZXR0ZSA1IGltYWdlcyBpbiBHYW1lX3N0YXRlLmNoYW5nZV9mbG9vciBtYXA7IGVuZDtcbiAgaWYgIWZyYW1lVGltZXIgPj0gMS4wIHRoZW4gYmVnaW4gR2Z4LmRlYnVnIChGb3JtYXQuYXNwcmludGYgXCJmcHMgOiAlZFwiICFmcmFtZUNvdW50KTsgZnJhbWVUaW1lciA6PSAwLjtmcmFtZUNvdW50Oj0wOyBlbmQ7XG4gIFxuICBpZiAobm90KEdhbWVfc3RhdGUuZ2V0X3N0YXR1cyAoKSkpIHRoZW4gZmFsc2VcbiAgZWxzZSB0cnVlXG5cbmxldCBlbmRfZ2FtZSBfZHQgPVxuU3lzdGVtLnJlc2V0X2FsbCAoKTtcbklucHV0X2hhbmRsZXIucmVzZXRfYWxsICgpO1xuXG5JbnB1dF9oYW5kbGVyLnJlZ2lzdGVyX2NvbW1hbmQgKEtleVVwIFwiclwiKSAoZnVuICgpIC0+IEdhbWVfc3RhdGUuc2V0X3N0YXRlIHRydWUpO1xuZ29fc2NyZWVuICgpO1xuZmFsc2UgXG4gXG5sZXQgcmVzZXRfZ2FtZSBkdCA9XG5TeXN0ZW0udXBkYXRlX2FsbCBkdDtcbmdvX3NjcmVlbiAoKTtcbmlmIChHYW1lX3N0YXRlLmdldF9zdGF0dXMgKCkpIHRoZW4gYmVnaW4gU3lzdGVtLnJlc2V0X2FsbCAoKTsgcmVzZXRfYWxsICgpO0lucHV0X2hhbmRsZXIucmVzZXRfYWxsICgpOyBmYWxzZSBlbmRcbmVsc2UgdHJ1ZSBcbiBcbigqTGVzIGltYWdlcyBzb250IHN0b2Nrw6llcyBkYW5zIHVuZSBoYXNobWFwIG9uIGZhaXQgdW4gZm9sZCBwb3VyIHbDqXJpZmnDqSBzaSBlbGxlcyBzb250IGNoYXJnw6llcyopXG5sZXQgaW1nX3JlYWR5ICgpID0gSGFzaHRibC5mb2xkIChmdW4gXyBpIGFjYyAtPiAoYWNjKSYmKEdmeC5pbWFnZV9yZWFkeSBpKSkgaW1hZ2VzIHRydWVcblxuXG5sZXQgbG9hZF9ncmFwaGljcyBfZHQgPSBcbiAgaWYgKGltZ19yZWFkeSAoKSkgdGhlbiBmYWxzZVxuICBlbHNlIHRydWVcblxubGV0IGNoYWluX2Z1bmN0aW9ucyBmX2xpc3QgPSBcbiAgbGV0IGZ1bnMgPSByZWYgZl9saXN0IGluXG4gIGZ1biBkdCAtPiBtYXRjaCAhZnVucyB3aXRoXG4gICAgICAgICAgICBbXSAtPiBmYWxzZVxuICAgICAgICAgICAgfCBmIDo6IGxsIC0+IFxuICAgICAgICAgICAgICBpZiBmIGR0IHRoZW5cbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgIGVsc2UgYmVnaW5cbiAgICAgICAgICAgICAgICBmdW5zIDo9IGxsQFtmXTtcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgIGVuZFxuXG5sZXQgcnVuICgpID0gIFxuICBIYXNodGJsLmFkZCBpbWFnZXMgXCJwbGF5ZXJfaW1nXCIgKEdmeC5sb2FkX2ltYWdlIChcInNyYy9pbWcvY2hhclNoZWV0LnBuZ1wiKSk7XG4gIEhhc2h0YmwuYWRkIGltYWdlcyBcImdvYmVsaW5faW1nXCIgKEdmeC5sb2FkX2ltYWdlIChcInNyYy9pbWcvZ29iZWxpblNoZWV0LnBuZ1wiKSk7XG4gIEhhc2h0YmwuYWRkIGltYWdlcyBcImhlYXJ0X2ltZ1wiIChHZngubG9hZF9pbWFnZSAoXCJzcmMvaW1nL2hlYXJ0LnBuZ1wiKSk7XG4gIEhhc2h0YmwuYWRkIGltYWdlcyBcInByb2plY3RpbGVfaW1nXCIgKEdmeC5sb2FkX2ltYWdlIChcInNyYy9pbWcvcHJvamVjdGlsZXNoZWV0LnBuZ1wiKSk7XG4gIEhhc2h0YmwuYWRkIGltYWdlcyBcIml0ZW1faW1nXCIgKEdmeC5sb2FkX2ltYWdlIChcInNyYy9pbWcvaXRlbVNoZWV0LnBuZ1wiKSk7XG4gIEhhc2h0YmwuYWRkIGltYWdlcyBcImVfaW5mb19pbWdcIiAoR2Z4LmxvYWRfaW1hZ2UgKFwic3JjL2ltZy9pbmZvX2UucG5nXCIpKTtcbiAgSGFzaHRibC5hZGQgaW1hZ2VzIFwiZl9pbmZvX2ltZ1wiIChHZngubG9hZF9pbWFnZSAoXCJzcmMvaW1nL2luZm9fZi5wbmdcIikpO1xuICBIYXNodGJsLmFkZCBpbWFnZXMgXCJzcGlkZXJfaW1nXCIgKEdmeC5sb2FkX2ltYWdlIChcInNyYy9pbWcvc3BpZGVyLnBuZ1wiKSk7XG4gIEhhc2h0YmwuYWRkIGltYWdlcyBcIndlYl9pbWdcIiAoR2Z4LmxvYWRfaW1hZ2UgKFwic3JjL2ltZy93ZWIucG5nXCIpKTtcbiAgSGFzaHRibC5hZGQgaW1hZ2VzIFwic2tlbGV0b25faW1nXCIgKEdmeC5sb2FkX2ltYWdlIChcInNyYy9pbWcvc2tlbGV0b24tU2hlZXQucG5nXCIpKTtcbiAgSGFzaHRibC5hZGQgaW1hZ2VzIFwiZmlyZWJhbGxfaW1nXCIgKEdmeC5sb2FkX2ltYWdlIChcInNyYy9pbWcvZmlyZWJhbGwtU2hlZXQucG5nXCIpKTtcbiAgbGV0IG0gPSBjaGFpbl9mdW5jdGlvbnMgW2xvYWRfZ3JhcGhpY3M7aW5pdF9nYW1lO3BsYXlfZ2FtZTtlbmRfZ2FtZTtyZXNldF9nYW1lXSBpblxuICBHZngubWFpbl9sb29wIG1cblxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICIsIm9wZW4gQ29tcG9uZW50X2RlZnNcblxuXG5cbmxldCBjdHggPSByZWYgTm9uZVxubGV0IGluaXQgKCkgPVxuICBsZXQgXywgYyA9IEdmeC5jcmVhdGUgXCJjYW52YXNcIiAgaW5cbiAgY3R4IDo9IFNvbWUgY1xuXG5sZXQgY3B0ID0gcmVmIDAuMFxubGV0IHRpbWUgPSByZWYgMC4wXG5cbmxldCB1cGRhdGUgZHQgZWwgPVxuXG4gIGxldCBjdHggPSBPcHRpb24uZ2V0ICFjdHggaW5cbiAgR2Z4LmNsZWFyX3JlY3QgY3R4IDAgMCA4MDAgNjQwO1xuICBsZXQgbGlzdF9zb3J0ID0gTGlzdC5zb3J0IChcbiAgICAgIGZ1biBhIGIgLT5cbiAgICAgICAgbGV0IGFQID0gUHJpb3JpdHkuZ2V0IGEgaW5cbiAgICAgICAgbGV0IGJQID0gUHJpb3JpdHkuZ2V0IGIgaW4gXG4gICAgICAgIGFQIC0gYlBcbiAgICAgICAgKSBlbCBpblxuICBMaXN0Lml0ZXIgKGZ1biBlIC0+IFxuICAgIGxldCBwb3MgPSBQb3NpdGlvbi5nZXQgZSBpblxuICAgIGxldCBib3ggPSB0cnkgQm94LmdldCBlIHdpdGggXyAtPiB7d2lkdGggPSAwOyBoZWlnaHQgPSAwfSBpblxuICAgIGxldCBjb2xvciA9IFN1cmZhY2UuZ2V0IGUgaW5cbiAgICBpZiAoVGV4dEQuaGFzX2NvbXBvbmVudCBlKSB0aGVuIGJlZ2luXG4gICAgICBsZXQgdGV4dCA9IFRleHRELmdldCBlIGluXG4gICAgICBHZnguZHJhd190ZXh0IGN0eCB0ZXh0LnRleHQgKGludF9vZl9mbG9hdCB0ZXh0LngpIChpbnRfb2ZfZmxvYXQgdGV4dC55KSB0ZXh0LmZvbnQgdGV4dC5jb2xvciA4MC4gMS47XG4gICAgZW5kO1xuICAgIG1hdGNoIGNvbG9yIHdpdGggXG4gICAgICB8IENvbG9yIGNvbG9yMSAtPiBHZnguZmlsbF9yZWN0IGN0eCAoaW50X29mX2Zsb2F0IHBvcy54KSAoaW50X29mX2Zsb2F0IHBvcy55KSBib3gud2lkdGggYm94LmhlaWdodCBjb2xvcjE7XG4gICAgICB8IEltYWdlIGltYWdlIC0+IEdmeC5ibGl0X3NjYWxlIGN0eCBpbWFnZSAoaW50X29mX2Zsb2F0IHBvcy54KSAoaW50X29mX2Zsb2F0IHBvcy55KSBib3gud2lkdGggYm94LmhlaWdodDtcbiAgICAgIHwgQW5pbWF0aW9uIGFuaW0gLT4gXG4gICAgICAgIGxldCBzcGVlZCA9IFZlbG9jaXR5LmdldCBlIGluXG4gICAgICAgIEdmeC5ibGl0X3NjYWxlIGN0eCAoVGV4dHVyZS5nZXRfZnJhbWUgYW5pbSAoaW50X29mX2Zsb2F0IHNwZWVkLngpIGR0IHRpbWUgY3B0KSAoaW50X29mX2Zsb2F0IHBvcy54KSAoaW50X29mX2Zsb2F0IHBvcy55KSBib3gud2lkdGggYm94LmhlaWdodDtcbiAgICAgIHwgVGlsZSB0aWxlbWFwIC0+IFRleHR1cmUuZHJhd190aWxlbWFwIHRpbGVtYXAgY3R4IChpbnRfb2ZfZmxvYXQgcG9zLngpIChpbnRfb2ZfZmxvYXQgcG9zLnkpXG4gICAgICAgICkgKGxpc3Rfc29ydClcbiAgICAgIFxuXG4iLCJvcGVuIENvbXBvbmVudF9kZWZzXHJcbmxldCBpbml0ICgpID0gKClcclxuXHJcbmxldCB1cGRhdGUgX2R0IGVsID1cclxuICBMaXN0Lml0ZXIgKGZ1biBlIC0+XHJcbiAgICBsZXQgbmFtZSA9IE5hbWUuZ2V0IGUgaW5cclxuICAgICAgaWYgKFN0cmluZy5jb21wYXJlIG5hbWUgXCJwbGF5ZXJcIikgPT0gMCB0aGVuIGJlZ2luXHJcbiAgICAgICAgbGV0IHZmID0gSW52dW5lcmFibGVGcmFtZS5nZXQgZSBpblxyXG4gICAgICAgIGlmIHZmID4gMCB0aGVuIEludnVuZXJhYmxlRnJhbWUuc2V0IGUgKHZmLTEpXHJcbiAgICAgIGVuZFxyXG4gICAgICBlbHNlIGlmIChTdHJpbmcuY29tcGFyZSBuYW1lIFwic3BpZGVyXCIpID09IDAgdGhlbiBiZWdpblxyXG4gICAgICAgIGxldCBjcHQgPSBDcHQuZ2V0IGUgaW5cclxuICAgICAgICBpZiAoKFN5cy50aW1lICgpKS0uIGNwdC5jcHQgKT4gMS4gdGhlbiBiZWdpbiBcclxuICAgICAgICBjcHQuYWN0aW9uIGU7IFxyXG4gICAgICAgIENvdW50LnNldF9jcHQgIGNwdCAoU3lzLnRpbWUgKCkpO1xyXG4gICAgICAgIFJhbmRvbS5zZWxmX2luaXQgKCk7XHJcbiAgICAgICAgIGVuZCBcclxuICAgICAgZW5kXHJcbiAgICAgIGVsc2UgaWYgKFN0cmluZy5jb21wYXJlIG5hbWUgXCJza2VsZXRvblwiKSA9PSAwIHRoZW4gYmVnaW5cclxuICAgICAgICBsZXQgY3B0ID0gQ3B0LmdldCBlIGluXHJcbiAgICAgICAgaWYgKChTeXMudGltZSAoKSktLiBjcHQuY3B0ICk+IDEuNSB0aGVuIGJlZ2luIGNwdC5hY3Rpb24gZTsgQ291bnQuc2V0X2NwdCAgY3B0IChTeXMudGltZSAoKSkgZW5kIFxyXG4gICAgICBlbmQ7XHJcbiAgICBcclxuICAgICkgZWxcclxuIiwib3BlbiBDb21wb25lbnRfZGVmc1xub3BlbiBWZWN0b3JcblxuXG5sZXQgaW5pdCAoKSA9ICgpXG5cbmxldCB0aW1lID0gcmVmIDAuMFxuXG5sZXQgYWJzRiBmID0gaWYgZiA+IDAuMCB0aGVuIGYgZWxzZSAoZiAqLiAtMS4wKVxuXG5sZXQgbm90TnVsIGYgPSBpZiBmID4gMC4wIHRoZW4gIDEuIGVsc2UgaWYgZiA8IDAuMCB0aGVuIC0uMS4gZWxzZSAwLiBcblxubGV0IG1heEYgYSBiID0gaWYgYSA+PSBiIHRoZW4gYSBlbHNlIGJcblxubGV0IG1vdmVfdG8gZTEgZTIgPSBcbiAgbGV0IHBvc0UxID0gUG9zaXRpb24uZ2V0IGUxIGluXG4gIGxldCBwb3NFMiA9IFBvc2l0aW9uLmdldCBlMiBpblxuICBsZXQgdmVjRTEgPSBWZWxvY2l0eS5nZXQgZTEgaW5cbiAgbGV0IGRpc3RYID0gICBwb3NFMi54IC0uIHBvc0UxLnggaW5cbiAgbGV0IGRpc3RZID0gICBwb3NFMi55IC0uIHBvc0UxLnkgaW5cbiAgbGV0IF9kaXN0ID0gRmxvYXQuc3FydCAoKGRpc3RYKioyLikgKy4gKGRpc3RZKioyLikpIGluXG4gIGxldCBhbmltID0gU3VyZmFjZS5nZXQgZTEgaW5cbiAgbGV0IHN0YXRzID0gU3RhdGlzdGljcy5nZXQgZTEgaW5cbiAgbGV0IHNwZWVkID0gc3RhdHMubW92ZXNwZWVkIGluXG4gIGxldCBfbWF4IGRpc3RYIGRpc3RZID0gaWYgKGFic0YgZGlzdFgpID4gKGFic0YgZGlzdFkpIHRoZW4ge3ggPSAobm90TnVsIGRpc3RYKSA7IHkgPSAwLn0gZWxzZSAge3ggPSAwLiA7IHkgPSAobm90TnVsIGRpc3RZKX0gaW5cblxuICAoKk5vdHJlIGVubmVtaWUgc2UgZMOpcGxhY2UgdmVycyBsZSBqb3VldXIgZW4gcHJlbmFudCBsZSB4IG91IHkgbGUgcGx1cyBncmFuZCBlbiBwcmVtaWVyLlxuICAgIE9uIGEgdW5lIG1hcmdlIGRlIDIwIHBpeGVscyBwb3VyIHBhcyBhdm9pciB1biBtb3ZlbWVudCBzYWNjYWTDqSBlbiBkaWFnb25hbGUuXG4gICAqKVxuXG4gIGlmICgoKGFic0YgZGlzdFgpIC0uIChhYnNGIGRpc3RZKSkgPiAyMC4pICB0aGVuIFxuICAgICAgVmVsb2NpdHkuc2V0IGUxIChWZWN0b3IubXVsdCBzcGVlZCB7eCA9IChub3ROdWwgZGlzdFgpIDsgeSA9IDAufSlcbiAgZWxzZSBpZiAoKChhYnNGIGRpc3RZKSAtLiAoYWJzRiBkaXN0WCkpID4gMjAuKSB0aGVuICBWZWxvY2l0eS5zZXQgZTEgKFZlY3Rvci5tdWx0IHNwZWVkIHt4ID0gMC4wIDsgeSA9IChub3ROdWwgZGlzdFkpfSk7XG4gIFxuXG5cbiAgbGV0IG5ld1YgPSBWZWxvY2l0eS5nZXQgZTEgaW5cbiAgaWYgbm90KFZlY3Rvci5pc19lcXVhbCB2ZWNFMSBuZXdWKSB0aGVuIGJlZ2luXG4gICAgaWYgKCAoVmVjdG9yLmlzX2VxdWFsIG5ld1YgeyB4ID0gLS5zcGVlZDsgeSA9IDAuMCB9KSl0aGVuIFRleHR1cmUucGxheV9pZGxlIGFuaW0gXCJsZWZ0X3dhbGtcIiBcbiAgICBlbHNlIGlmICgoVmVjdG9yLmlzX2VxdWFsIG5ld1YgeyB4ID0gc3BlZWQ7IHkgPSAwLjAgfSkpdGhlbiBUZXh0dXJlLnBsYXlfaWRsZSBhbmltIFwicmlnaHRfd2Fsa1wiIFxuICAgIGVsc2UgaWYgKChWZWN0b3IuaXNfZXF1YWwgbmV3ViB7IHggPSAwLjA7IHkgPSAtLnNwZWVkIH0pKXRoZW4gVGV4dHVyZS5wbGF5X2lkbGUgYW5pbSBcImJhY2tfd2Fsa1wiIFxuICAgIGVsc2UgaWYgKChWZWN0b3IuaXNfZXF1YWwgbmV3ViB7IHggPSAwLjAgOyB5ID0gc3BlZWQgfSkpdGhlbiBUZXh0dXJlLnBsYXlfaWRsZSBhbmltIFwiZnJvbnRfd2Fsa1wiIFxuICBlbmRcblxuXG5cblxuXG5cblxuICAgICAgICBcbiAgICAgICAgXG5cbiAgXG5sZXQgdXBkYXRlIGR0IGVsID1cbiAgbGV0IGRlbHRhX3QgPSBtaW4gKDEuIC8uIDYwLikgKDEwMDAuICouKGR0IC0uICF0aW1lKSkgaW5cbiAgbGV0IHBsYXllciA9IGZzdCAoTGlzdC5maW5kIChmdW4ga3YgLT4gKFN0cmluZy5jb21wYXJlIChzbmQga3YpIFwicGxheWVyXCIpPT0wICkgKE5hbWUubWVtYmVycyAoKSkpIGluXG4gIHRpbWUgOj0gZHQ7XG4gIExpc3QuaXRlciAoZnVuIGUgLT5cbiAgICAgIGlmICgoU3RyaW5nLmNvbXBhcmUgKE5hbWUuZ2V0IGUpIFwiZW5uZW15XCIpPT0wKSB8fCAoKFN0cmluZy5jb21wYXJlIChOYW1lLmdldCBlKSBcInNrZWxldG9uXCIpPT0wKSB0aGVuIG1vdmVfdG8gZSBwbGF5ZXI7XG4gICAgICBsZXQgcG9zID0gUG9zaXRpb24uZ2V0IGUgaW5cbiAgICAgIGxldCBzcGVlZCA9IFZlY3Rvci5tdWx0IGRlbHRhX3QgKFZlbG9jaXR5LmdldCBlKSBpblxuICAgICAgUG9zaXRpb24uc2V0IGUgKHsgeCA9IHBvcy54ICsuIHNwZWVkLng7IHkgPSBwb3MueSArLiBzcGVlZC55IH0pXG4gICAgKSBlbFxuIiwib3BlbiBFY3Ncbm1vZHVsZSB0eXBlIFMgPVxuc2lnXG4gIHZhbCBpbml0IDogdW5pdCAtPiB1bml0XG4gICgqIGluaXRpYWxpemVzIHRoZSBzeXN0ZW0gKilcblxuICB2YWwgdXBkYXRlIDogZmxvYXQgLT4gdW5pdFxuICAoKiB1cGRhdGVzIHRoZSBzeXN0ZW0uIFRoZSBmbG9hdCBhcmd1bWVudCBpcyB0aGUgY3VycmVudCB0aW1lIGluIG5hbm9zZWNvbmRzICopXG5cbiAgdmFsIHJlZ2lzdGVyIDogRW50aXR5LnQgLT4gdW5pdFxuICAoKiByZWdpc3RlciBhbiBlbnRpdHkgZm9yIHRoaXMgc3lzdGVtICopXG5cbiAgdmFsIHVucmVnaXN0ZXIgOiBFbnRpdHkudCAtPiB1bml0XG4gICgqIHJlbW92ZSBhbiBlbnRpdHkgZnJvbSB0aGlzIHN5c3RlbSAqKVxuICB2YWwgcmVzZXQgOiB1bml0IC0+IHVuaXRcbiAgXG5cblxuZW5kXG5cbm1vZHVsZSBNYWtlIChUIDogc2lnIHZhbCBpbml0IDogdW5pdCAtPiB1bml0IHZhbCB1cGRhdGUgOiBmbG9hdCAtPiBFbnRpdHkudCBsaXN0IC0+IHVuaXQgZW5kKSA6IFMgPVxuc3RydWN0XG4gIGxldCBlbGVtX2xpc3QgPSByZWYgW11cbiAgbGV0IGVsZW1fdGFibGUgPSBFbnRpdHkuVGFibGUuY3JlYXRlIDE2XG4gIGxldCByZWdpc3RlciBlID1cbiAgICBpZiBub3QgKEVudGl0eS5UYWJsZS5tZW0gZWxlbV90YWJsZSBlKSB0aGVuIGJlZ2luXG4gICAgICBFbnRpdHkuVGFibGUuYWRkIGVsZW1fdGFibGUgZSAoKTtcbiAgICAgIGVsZW1fbGlzdCA6PSBlIDo6ICFlbGVtX2xpc3RcbiAgICBlbmRcblxuICBsZXQgdW5yZWdpc3RlciBlID1cbiAgICBFbnRpdHkuVGFibGUucmVtb3ZlIGVsZW1fdGFibGUgZTtcbiAgICBlbGVtX2xpc3QgOj0gTGlzdC5maWx0ZXIgKGZ1biB4IC0+IHggPD4gZSkgIWVsZW1fbGlzdFxuXG4gIGxldCBpbml0ICgpID0gVC5pbml0ICgpXG4gIGxldCB1cGRhdGUgZHQgPVxuICAgIFQudXBkYXRlIGR0ICFlbGVtX2xpc3RcbiAgbGV0IHJlc2V0ICgpID0gZWxlbV9saXN0IDo9IFtdO1xuICBFbnRpdHkuVGFibGUuY2xlYXIgZWxlbV90YWJsZVxuICAgIFxuZW5kXG5cbmxldCBzeXN0ZW1zID0gcmVmIFtdXG5cblxubGV0IHJlZ2lzdGVyIG0gPVxuICBzeXN0ZW1zIDo9IG0gOjogIXN5c3RlbXNcblxubGV0IGluaXRfYWxsICgpID1cbiAgTGlzdC5pdGVyIChmdW4gbSAtPlxuICAgIGxldCBtb2R1bGUgTSA9ICh2YWwgbSA6IFMpIGluXG4gICAgTS5pbml0ICgpXG4gICAgKSAhc3lzdGVtc1xubGV0IHVwZGF0ZV9hbGwgZHQgPVxuICAgIExpc3QuaXRlciAoZnVuIG0gLT5cbiAgICAgIGxldCBtb2R1bGUgTSA9ICh2YWwgbSA6IFMpIGluXG4gICAgICBNLnVwZGF0ZSBkdFxuICAgICAgKSAhc3lzdGVtc1xuXG5sZXQgcmVzZXRfYWxsIF9kdCA9XG4gIExpc3QuaXRlciAoZnVuIG0gLT5cbiAgICBsZXQgbW9kdWxlIE0gPSAodmFsIG0gOiBTKSBpblxuICAgIE0ucmVzZXQgKCk7XG4gICAgKSAhc3lzdGVtc1xuIiwibW9kdWxlIENvbnRyb2xfUyA9IFN5c3RlbS5NYWtlIChDb250cm9sX3N5c3RlbSlcbm1vZHVsZSBEcmF3X1MgPSBTeXN0ZW0uTWFrZShEcmF3X3N5c3RlbSlcbm1vZHVsZSBNb3ZlX1MgPSBTeXN0ZW0uTWFrZShNb3ZlX3N5c3RlbSlcbm1vZHVsZSBDb2xsaXNpb25fUyA9IFN5c3RlbS5NYWtlKENvbGxpc2lvbl9zeXN0ZW0pXG5tb2R1bGUgTG9naWNfUyA9IFN5c3RlbS5NYWtlKExvZ2ljX3N5c3RlbSlcbm1vZHVsZSBDbGVhbmluZ19TID0gU3lzdGVtLk1ha2UoQ2xlYW5pbmdfc3lzdGVtKVxuXG5sZXQgKCkgPVxuICBTeXN0ZW0ucmVnaXN0ZXIgKG1vZHVsZSBDbGVhbmluZ19TKTtcbiAgU3lzdGVtLnJlZ2lzdGVyIChtb2R1bGUgRHJhd19TKTtcbiAgU3lzdGVtLnJlZ2lzdGVyIChtb2R1bGUgTW92ZV9TKTtcbiAgU3lzdGVtLnJlZ2lzdGVyIChtb2R1bGUgQ29udHJvbF9TKTtcbiAgU3lzdGVtLnJlZ2lzdGVyIChtb2R1bGUgQ29sbGlzaW9uX1MpO1xuICBTeXN0ZW0ucmVnaXN0ZXIgKG1vZHVsZSBMb2dpY19TKVxuICBcbiIsIm9wZW4gQ29tcG9uZW50X2RlZnNcbm9wZW4gU3lzdGVtX2RlZnNcbm9wZW4gRWNzXG5cblxubGV0IGNvbGxpc2lvbiBlMSBlMiA9XG4gICAgICAgIGxldCBib3gxID0gQm94LmdldCBlMSBpblxuICAgICAgICBsZXQgYm94QzEgPSBCb3hDb2xsaWRlci5nZXQgZTEgaW5cbiAgICAgICAgbGV0IHBvczEgPSBSZWN0Lm1hcmdpbiBib3gxIGJveEMxIChQb3NpdGlvbi5nZXQgZTEpIGluXG4gICAgICAgIGxldCBycG9zMSA9IFBvc2l0aW9uLmdldCBlMSBpblxuICAgICAgICBcbiAgICAgICAgKCogbGVzIGNvbXBvc2FudHMgZHUgcmVjdGFuZ2xlIHIyICopXG4gICAgICAgIGxldCBib3gyID0gQm94LmdldCBlMiBpblxuICAgICAgICBsZXQgYm94QzIgPSBCb3hDb2xsaWRlci5nZXQgZTIgaW5cbiAgICAgICAgbGV0IHBvczIgPSBSZWN0Lm1hcmdpbiBib3gyIGJveEMyIChQb3NpdGlvbi5nZXQgZTIpIGluXG4gICAgICAgIGxldCBycG9zMiA9IFBvc2l0aW9uLmdldCBlMiBpblxuICAgICAgICAoKiBsZXMgdml0ZXNzZXMgKilcbiAgICAgICAgbGV0IHYxID0gVmVsb2NpdHkuZ2V0IGUxIGluXG4gICAgICAgIGxldCB2MiA9IFZlbG9jaXR5LmdldCBlMiBpblxuICAgICAgICAoKiBbMV0gbGEgc291c3RyYWN0aW9uIGRlIE1pbmtvd3NraSAqKVxuICAgICAgICBsZXQgc19wb3MsIHNfcmVjdCA9IFJlY3QubWRpZmYgcG9zMiBib3hDMiBwb3MxIGJveEMxIGluIFxuICBsZXQgYSA9IFZlY3Rvci57IHggPSBzX3Bvcy54OyB5ID0gMC4wfSBpblxuICBsZXQgYiA9IFZlY3Rvci57IHggPSBmbG9hdCBzX3JlY3Qud2lkdGggKy4gc19wb3MueDsgeSA9IDAuMCB9IGluXG4gIGxldCBjID0gVmVjdG9yLnsgeCA9IDAuMDsgeSA9IHNfcG9zLnkgfSBpblxuICBsZXQgZCA9IFZlY3Rvci57IHggPSAwLjA7IHkgPSBmbG9hdCBzX3JlY3QuaGVpZ2h0ICsuIHNfcG9zLnl9IGluIFxuICBsZXQgbiA9IExpc3QuZm9sZF9sZWZ0IChmdW4gbWluX3YgdiAtPlxuICAgIGlmIFZlY3Rvci5ub3JtIHYgIDwgVmVjdG9yLm5vcm0gbWluX3YgdGhlbiB2IGVsc2UgbWluX3YpIFxuICAgIGEgWyBiOyBjIDsgZF1cbiAgaW5cbiAgKCogIFs0XSByYXBwb3J0IGRlcyB2aXRlc3NlcyBldCBkw6lwbGFjZW1lbnQgZGVzIG9iamV0cyAqKVxuICBsZXQgbl92MSA9IFZlY3Rvci5ub3JtIHYxIGluXG4gIGxldCBuX3YyID0gVmVjdG9yLm5vcm0gdjIgaW5cbiAgbGV0IHMgPSAobl92MSArLiBuX3YyKSBpblxuICBsZXQgbjEgPSBuX3YxIC8uIHMgaW5cbiAgbGV0IG4yID0gbl92MiAvLiBzIGluXG4gIGxldCBkZWx0YV9wb3MxID0gVmVjdG9yLm11bHQgbjEgbiBpblxuICBsZXQgZGVsdGFfcG9zMiA9IFZlY3Rvci5tdWx0IChGbG9hdC5uZWcgbjIpIG4gaW5cbiAgUG9zaXRpb24uc2V0IGUxIChWZWN0b3IuYWRkIHJwb3MxIGRlbHRhX3BvczEpO1xuICBQb3NpdGlvbi5zZXQgZTIgKFZlY3Rvci5hZGQgcnBvczIgZGVsdGFfcG9zMik7XG4gXG4gICgqIFs1XSBPbiBub3JtYWxpc2UgbiAob24gY2FsY3VsZSB1biB2ZWN0ZXVyIGRlIG3Dqm1lIGRpcmVjdGlvbiBtYWlzIGRlIG5vcm1lIDEpICopXG4gIGlmICgoU3RyaW5nLmNvbXBhcmUgKE5hbWUuZ2V0IGUyKSBcInNwaWRlclwiKT09MCkgdGhlblxuICBiZWdpblxuICAgIGxldCBuID0gVmVjdG9yLm5vcm1hbGl6ZSBuIGluXG4gICAgKCogWzZdIFZpdGVzc2UgcmVsYXRpdmUgZW50cmUgdjIgZXQgdjEgKilcbiAgICBsZXQgdiA9IFZlY3Rvci5zdWIgdjEgdjIgaW5cbiAgICAoKiBQcsOpcGFyYXRpb24gYXUgY2FsY3VsIGRlIGwnaW1wdWxzaW9uICopXG4gICAgKCogRWxhc3RpY2l0w6kgZml4ZS4gRW4gcHJhdGlxdWUsIGwnZWxhc3RpY2l0w6kgcGV1dCDDqnRyZSBzdG9ja8OpZSBkYW5zXG4gICAgICAgbGVzIG9iamV0cyBjb21tZSB1biBjb21wb3NhbnQgOiAxIHBvdXIgbGEgYmFsbGUgZXQgbGVzIG11cnMsIDAuNSBwb3VyXG4gICAgICAgZGVzIG9ic3RhY2xlcyBhYnNvcmJhbnRzLCAxLjIgcG91ciBkZXMgb2JzdGFjbGVzIHJlYm9uZGlzc2FudCwg4oCmICopXG4gICAgbGV0IGUgPSAxLjAgaW5cbiAgICAoKiBub3JtYWxpc2F0aW9uIGRlcyBtYXNzZXMgKilcbiAgICBsZXQgbTEgPSBNYXNzLmdldCBlMSBpblxuICAgIGxldCBtMiA9IE1hc3MuZ2V0IGUyIGluICAgIFxuICAgIGxldCBtMSwgbTIgPSBcbiAgICAgIGlmIEZsb2F0LmlzX2luZmluaXRlIG0xICYmIEZsb2F0LmlzX2luZmluaXRlIG0yIHRoZW5cbiAgICAgICAgaWYgbl92MSA9IDAuMCB0aGVuIG0xLCAxLjAgZWxzZSBpZiBuX3YyID0gMC4wIHRoZW4gMS4wLCBtMiBlbHNlXG4gICAgICAgICAgMC4wLCAwLjBcbiAgICAgICAgZWxzZVxuICAgICAgICBtMSwgbTJcbiAgICBpblxuICAgICgqIFs3XSBjYWxjdWwgZGUgbCdpbXB1bHNpb24gKilcbiAgICBsZXQgaiA9XG4gICAgICAgKC0uKDEuMCArLiBlKSAqLiBWZWN0b3IuZG90IHYgbikvLiAoICgxLiAvLiBtMSkgKy4gKDEuIC8uIG0yKSlcbiAgICBpblxuICAgICgqIFs4XSBjYWxjdWwgZGVzIG5vdXZlbGxlcyB2aXRlc3NlcyAqKVxuICAgIGxldCBuZXdfdjEgPSBWZWN0b3IuYWRkIHYxIChWZWN0b3IubXVsdCAoai8uIG0xKSBuKSBpblxuICAgIGxldCBuZXdfdjIgPSBWZWN0b3Iuc3ViIHYyIChWZWN0b3IubXVsdCAoai8uIG0yKSBuKSBpblxuICAgICgqIFs5XSBtaXNlIMOgIGpvdXIgZGVzIHZpdGVzc2VzICopXG4gICAgVmVsb2NpdHkuc2V0IGUxIG5ld192MTtcbiAgICBWZWxvY2l0eS5zZXQgZTIgbmV3X3YyO1xuICBlbmQ7XG4gICgpXG5cblxubGV0IGNyZWF0ZSB4IHkgdyBoPVxubGV0IGUgPSBFbnRpdHkuY3JlYXRlICgpIGluXG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IHg7IHkgPSB5fTtcbiAgQm94LnNldCBlIHsgd2lkdGggPSB3OyBoZWlnaHQgPSBofTtcbiAgQm94Q29sbGlkZXIuc2V0IGUgeyB3aWR0aCA9IHc7IGhlaWdodCA9IGh9O1xuICBWZWxvY2l0eS5zZXQgZSBWZWN0b3IuemVybztcbiAgTWFzcy5zZXQgZSBpbmZpbml0eTtcbiAgUHJpb3JpdHkuc2V0IGUgMTtcbiAgTmFtZS5zZXQgZSBcIndhbGxcIjtcbiAgQ29sbGlzaW9uUmVzb2x2ZXIuc2V0IGUgY29sbGlzaW9uO1xuICAoKiBzeXN0ZW1zICopXG4gIENvbGxpc2lvbl9TLnJlZ2lzdGVyIGU7XG4gIGVcblxuIiwib3BlbiBDb21wb25lbnRfZGVmc1xub3BlbiBFY3NcblxuXG5sZXQgY3JlYXRlIHBvc1ggcG9zWSB2ZWxYIHZlbFkgdHJhcHBldXJfaW1nID0gKCpPbiBjaG9pc2l0IGxhIGRpcmVjdGlvbiBxdSdpbCBwcmVuZCBxdWFuZCBpbCBlc3QgY3LDqcOpKilcbiAgbGV0IGUgPSBFbnRpdHkuY3JlYXRlICgpIGluXG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IHBvc1g7IHkgPSBwb3NZfTtcbiAgVmVsb2NpdHkuc2V0IGUgeyB4ID0gdmVsWDsgeSA9IHZlbFl9O1xuICBNYXNzLnNldCBlIDIwLjtcbiAgQm94LnNldCBlIHt3aWR0aCA9IDQwOyBoZWlnaHQ9NDAgfTtcbiAgQm94Q29sbGlkZXIuc2V0IGUge3dpZHRoID0gNDA7IGhlaWdodD00MCB9O1xuICBOYW1lLnNldCBlIFwidHJhcHBldXJcIjtcbiAgbGV0IGFuaW0gPSBUZXh0dXJlLmNyZWF0ZV9hbmltYXRpb24gdHJhcHBldXJfaW1nIDMgNCAxNjAgMTYwIDQwIDQwIGluXG4gIFN1cmZhY2Uuc2V0IGUgYW5pbTtcbiAgVGV4dHVyZS5jcmVhdGVfaWRsZSBcImZyb250X3dhbGtcIiAoMCwzKSBhbmltO1xuICBUZXh0dXJlLmNyZWF0ZV9pZGxlIFwicmlnaHRfd2Fsa1wiICgzLDYpIGFuaW07XG4gIFRleHR1cmUuY3JlYXRlX2lkbGUgXCJiYWNrX3dhbGtcIiAoNiw5KSBhbmltO1xuICBUZXh0dXJlLmNyZWF0ZV9pZGxlIFwibGVmdF93YWxrXCIgKDksMTIpIGFuaW07XG4gIFRleHR1cmUucGxheV9pZGxlIGFuaW0gXCJmcm9udF93YWxrXCI7XG4gIFByaW9yaXR5LnNldCBlIDI7XG5cbiAgKCogc3lzdGVtcyAqKVxuICBcbiAgZVxuXG5sZXQgcmVzZXQgZSB4IHkgPSBcbiAgUG9zaXRpb24uc2V0IGUgeyB4ID0geDsgeSA9IHkgfVxuXG5sZXQgc3RvcCBlID1cbiAgVmVsb2NpdHkuc2V0IGUgVmVjdG9yLnplcm9cbiAgIiwib3BlbiBDb21wb25lbnRfZGVmc1xub3BlbiBTeXN0ZW1fZGVmc1xub3BlbiBFY3NcblxuXG5sZXQgY3JlYXRlIHBvc1ggcG9zWSBpbWcgbHZsPVxuICBSYW5kb20uc2VsZl9pbml0ICgpO1xuICBsZXQgdmVsWCA9IChSYW5kb20uaW50IDc1KSsxMDAgaW5cbiAgbGV0IHZlbFkgPSAoUmFuZG9tLmludCA3NSkrMTAwIGluXG4gIGxldCBlID0gRW50aXR5LmNyZWF0ZSAoKSBpblxuICBsZXQgYW5pbSA9IFRleHR1cmUuY3JlYXRlX2FuaW1hdGlvbiBpbWcgOSAxIDQwIDQwIDQwIDQwIGluXG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IHBvc1g7IHkgPSBwb3NZfTtcbiAgVmVsb2NpdHkuc2V0IGUgeyB4ID0gRmxvYXQub2ZfaW50IHZlbFggOyB5ID0gRmxvYXQub2ZfaW50IHZlbFl9O1xuICBNYXNzLnNldCBlIDUuMDtcbiAgQm94LnNldCBlIHt3aWR0aCA9IDUwOyBoZWlnaHQ9NTAgfTtcbiAgQm94Q29sbGlkZXIuc2V0IGUge3dpZHRoID0gNDA7IGhlaWdodD0zNSB9O1xuICBOYW1lLnNldCBlIFwic3BpZGVyXCI7XG4gIFN1cmZhY2Uuc2V0IGUgYW5pbTtcbiAgVGV4dHVyZS5jcmVhdGVfaWRsZSBcImZyb250X3dhbGtcIiAoMCw4KSBhbmltO1xuICBQcmlvcml0eS5zZXQgZSAyO1xuICBIZWFsdGguc2V0IGUgKDErKChsdmwtMSkgbW9kIDMpKTtcbiAgQWN0aXZlLnNldCBlIHRydWU7XG4gIFxuICBcbiAgKCogc3lzdGVtcyAqKVxuICBDbGVhbmluZ19TLnJlZ2lzdGVyIGU7XG4gIFxuICBlXG5cbmxldCByZXNldCBlIHggeSA9IFxuICBQb3NpdGlvbi5zZXQgZSB7IHggPSB4OyB5ID0geSB9XG5cbmxldCBzdG9wIGUgPVxuICBWZWxvY2l0eS5zZXQgZSBWZWN0b3IuemVyb1xuICAiLCJvcGVuIENvbXBvbmVudF9kZWZzXG5vcGVuIFN5c3RlbV9kZWZzIFxub3BlbiBFY3NcblxuXG5sZXQgY3JlYXRlIHBvc1ggcG9zWSBpbWcgbHZsID0gXG4gIGxldCBlID0gRW50aXR5LmNyZWF0ZSAoKSBpblxuICBsZXQgYW5pbSA9IFRleHR1cmUuY3JlYXRlX2FuaW1hdGlvbiBpbWcgMyA0IDE2MCAxNjAgNDAgNDAgaW5cbiAgUG9zaXRpb24uc2V0IGUgeyB4ID0gcG9zWDsgeSA9IHBvc1l9O1xuICBWZWxvY2l0eS5zZXQgZSB7IHggPSAwLjA7IHkgPSAwLjB9O1xuICBNYXNzLnNldCBlIGluZmluaXR5O1xuICBCb3guc2V0IGUge3dpZHRoID0gNDA7IGhlaWdodD00MCB9O1xuICBCb3hDb2xsaWRlci5zZXQgZSB7d2lkdGggPSAzNTsgaGVpZ2h0PTM4IH07XG4gIE5hbWUuc2V0IGUgXCJza2VsZXRvblwiO1xuICBTdXJmYWNlLnNldCBlIGFuaW07XG4gIFRleHR1cmUuY3JlYXRlX2lkbGUgXCJmcm9udF93YWxrXCIgKDAsMykgYW5pbTtcbiAgVGV4dHVyZS5jcmVhdGVfaWRsZSBcInJpZ2h0X3dhbGtcIiAoOSwxMikgYW5pbTtcbiAgVGV4dHVyZS5jcmVhdGVfaWRsZSBcImJhY2tfd2Fsa1wiICgzLDYpIGFuaW07XG4gIFRleHR1cmUuY3JlYXRlX2lkbGUgXCJsZWZ0X3dhbGtcIiAoNiw5KSBhbmltO1xuICBUZXh0dXJlLnBsYXlfaWRsZSBhbmltIFwiZnJvbnRfd2Fsa1wiO1xuICBQcmlvcml0eS5zZXQgZSAyO1xuICBIZWFsdGguc2V0IGUgKDIrKGx2bCBtb2QgMykpO1xuICBBY3RpdmUuc2V0IGUgdHJ1ZTtcbiAgU3RhdGlzdGljcy5zZXQgZSB7c3RyZW5ndGggPSAwLjA7IGF0dGFja3NwZWVkID0gMC4wOyBtb3Zlc3BlZWQgPSA3NS4wO307XG5cbiAgKCogc3lzdGVtcyAqKVxuICBDbGVhbmluZ19TLnJlZ2lzdGVyIGU7XG4gIFxuICBlXG5cbmxldCByZXNldCBlIHggeSA9IFxuICBQb3NpdGlvbi5zZXQgZSB7IHggPSB4OyB5ID0geSB9XG5cbmxldCBzdG9wIGUgPVxuICBWZWxvY2l0eS5zZXQgZSBWZWN0b3IuemVybyIsIm9wZW4gQ29tcG9uZW50X2RlZnNcbm9wZW4gRWNzXG5vcGVuIFN5c3RlbV9kZWZzXG5cbmxldCBkZWFkIGUgc3Bhd25IZWFydD1cbiAgbGV0IHBvcyA9IFBvc2l0aW9uLmdldCBlIGluXG4gIFJhbmRvbS5zZWxmX2luaXQgKCk7XG4gIGlmIChSYW5kb20uaW50IDUpID09IDAgdGhlbiBzcGF3bkhlYXJ0IHBvcy54IHBvcy55O1xuICBDb2xsaXNpb25fUy51bnJlZ2lzdGVyIGU7XG4gIENvbnRyb2xfUy51bnJlZ2lzdGVyIGU7XG4gIERyYXdfUy51bnJlZ2lzdGVyIGU7IFxuICBNb3ZlX1MudW5yZWdpc3RlciBlO1xuICBMb2dpY19TLnVucmVnaXN0ZXIgZTtcbiAgQWN0aXZlLnNldCBlIGZhbHNlXG5cbmxldCBoaXQgZSBkZWdhdCBzcGF3bkhlYXJ0PSBcbiAgbGV0IGhwID0gSGVhbHRoLmdldCBlIGluXG4gIEhlYWx0aC5zZXQgZSAoaHAtKGludF9vZl9mbG9hdCBkZWdhdCkpO1xuICBpZiAoaHAtKGludF9vZl9mbG9hdCBkZWdhdCkpIDw9IDAgdGhlbiBkZWFkIGUgc3Bhd25IZWFydFxuXG5sZXQgY3JlYXRlIHBvc1ggcG9zWSB2ZWxYIHZlbFkgaW1nPSAoKk9uIGNob2lzaXQgbGEgZGlyZWN0aW9uIHF1J2lsIHByZW5kIHF1YW5kIGlsIGVzdCBjcsOpw6kqKVxuICBsZXQgZSA9IEVudGl0eS5jcmVhdGUgKCkgaW5cbiAgbGV0IGFuaW0gPSBUZXh0dXJlLmNyZWF0ZV9hbmltYXRpb24gaW1nIDMgNCAxNjAgMTYwIDQwIDQwIGluXG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IHBvc1g7IHkgPSBwb3NZfTtcbiAgVmVsb2NpdHkuc2V0IGUgeyB4ID0gdmVsWDsgeSA9IHZlbFl9O1xuICBNYXNzLnNldCBlIGluZmluaXR5O1xuICBCb3guc2V0IGUge3dpZHRoID0gNDA7IGhlaWdodD00MCB9O1xuICBCb3hDb2xsaWRlci5zZXQgZSB7d2lkdGggPSA0MDsgaGVpZ2h0PTQwIH07XG4gIE5hbWUuc2V0IGUgXCJlbm5lbXlcIjtcbiAgU3VyZmFjZS5zZXQgZSBhbmltO1xuICBUZXh0dXJlLmNyZWF0ZV9pZGxlIFwiZnJvbnRfd2Fsa1wiICgwLDMpIGFuaW07XG4gIFRleHR1cmUuY3JlYXRlX2lkbGUgXCJyaWdodF93YWxrXCIgKDMsNikgYW5pbTtcbiAgVGV4dHVyZS5jcmVhdGVfaWRsZSBcImJhY2tfd2Fsa1wiICg2LDkpIGFuaW07XG4gIFRleHR1cmUuY3JlYXRlX2lkbGUgXCJsZWZ0X3dhbGtcIiAoOSwxMikgYW5pbTtcbiAgVGV4dHVyZS5wbGF5X2lkbGUgYW5pbSBcImZyb250X3dhbGtcIjtcbiAgUHJpb3JpdHkuc2V0IGUgMjtcbiAgQWN0aXZlLnNldCBlIHRydWU7XG5cbiAgKCogc3lzdGVtcyAqKVxuICBDbGVhbmluZ19TLnJlZ2lzdGVyIGU7XG5cbiAgZVxuXG5sZXQgcmVzZXQgZSB4IHkgPSBcbiAgUG9zaXRpb24uc2V0IGUgeyB4ID0geDsgeSA9IHkgfVxuXG5sZXQgc3RvcCBlID1cbiAgVmVsb2NpdHkuc2V0IGUgVmVjdG9yLnplcm9cbiAgIiwib3BlbiBDb21wb25lbnRfZGVmc1xub3BlbiBFY3Ncbm9wZW4gU3lzdGVtX2RlZnNcblxubGV0IGRlc3RydWN0aW9uIGUgPVxuICBDb2xsaXNpb25fUy51bnJlZ2lzdGVyIGU7XG4gIENvbnRyb2xfUy51bnJlZ2lzdGVyIGU7XG4gIERyYXdfUy51bnJlZ2lzdGVyIGU7XG4gIE1vdmVfUy51bnJlZ2lzdGVyIGU7XG4gIExvZ2ljX1MudW5yZWdpc3RlciBlO1xuICBBY3RpdmUuc2V0IGUgZmFsc2VcblxubGV0IGNyZWF0ZSBwb3NYIHBvc1kgbWluZV9pbWc9XG4gIGxldCBlID0gRW50aXR5LmNyZWF0ZSAoKSBpblxuICBQb3NpdGlvbi5zZXQgZSB7IHggPSBwb3NYOyB5ID0gcG9zWX07XG4gIFZlbG9jaXR5LnNldCBlIHsgeCA9IDAuMDsgeSA9IDAuMH07XG4gIE1hc3Muc2V0IGUgaW5maW5pdHk7XG4gIEJveC5zZXQgZSB7d2lkdGggPSA0MDsgaGVpZ2h0PTQwIH07XG4gIEJveENvbGxpZGVyLnNldCBlIHt3aWR0aCA9IDQwOyBoZWlnaHQ9NDAgfTtcbiAgTmFtZS5zZXQgZSBcIm1pbmVcIjtcbiAgU3VyZmFjZS5zZXQgZSAoVGV4dHVyZS5jcmVhdGVfaW1nIG1pbmVfaW1nIDQwIDQwKTtcbiAgUHJpb3JpdHkuc2V0IGUgMjtcbiAgQWN0aXZlLnNldCBlIHRydWU7XG5cbiAgKCogc3lzdGVtcyAqKVxuICBDbGVhbmluZ19TLnJlZ2lzdGVyIGU7XG5cbiAgZVxuXG5sZXQgcmVzZXQgZSB4IHkgPSBcbiAgUG9zaXRpb24uc2V0IGUgeyB4ID0geDsgeSA9IHkgfVxuXG5sZXQgc3RvcCBlID1cbiAgVmVsb2NpdHkuc2V0IGUgVmVjdG9yLnplcm8gIiwib3BlbiBDb21wb25lbnRfZGVmc1xyXG5vcGVuIFN5c3RlbV9kZWZzXHJcbm9wZW4gRWNzXHJcblxyXG5sZXQgZGVsZXRlIGUgPSBcclxuICBNb3ZlX1MudW5yZWdpc3RlciBlO1xyXG4gIERyYXdfUy51bnJlZ2lzdGVyIGU7XHJcbiAgQ29sbGlzaW9uX1MudW5yZWdpc3RlciBlO1xyXG4gIEFjdGl2ZS5zZXQgZSBmYWxzZVxyXG5cclxuXHJcbiAgXHJcblxyXG5sZXQgY29sbGlzaW9uIHNwYXduSGVhcnQgZTEgZTIgPSBcclxuICBpZihOYW1lLmhhc19jb21wb25lbnQgZTIpIHRoZW4gYmVnaW5cclxuICAgIGxldCBuYW1lID0gTmFtZS5nZXQgZTIgaW5cclxuICAgIGxldCBzdGF0cyA9IFN0YXRpc3RpY3MuZ2V0IGUxIGluXHJcbiAgICBpZiAoKFN0cmluZy5jb21wYXJlIG5hbWUgXCJ3YWxsXCIpID09IDAgKSB8fCgoU3RyaW5nLmNvbXBhcmUgbmFtZSBcImJvdHRvbVwiKSA9PSAwICl8fCgoU3RyaW5nLmNvbXBhcmUgbmFtZSBcInRvcFwiKSA9PSAwICl8fCgoU3RyaW5nLmNvbXBhcmUgbmFtZSBcInJpZ2h0XCIpID09IDAgKXx8KChTdHJpbmcuY29tcGFyZSBuYW1lIFwibGVmdFwiKSA9PSAwICkgdGhlbiBkZWxldGUgZTFcclxuICAgIGVsc2UgaWYgKChTdHJpbmcuY29tcGFyZSBuYW1lIFwiZW5uZW15XCIpID09IDAgKSB8fCAoKFN0cmluZy5jb21wYXJlIG5hbWUgXCJza2VsZXRvblwiKSA9PSAwICkgdGhlbiBiZWdpbiBFbmVteS5oaXQgZTIgc3RhdHMuc3RyZW5ndGggc3Bhd25IZWFydDsgZGVsZXRlIGUxIGVuZFxyXG4gICAgZWxzZSBpZiAoKFN0cmluZy5jb21wYXJlIG5hbWUgXCJzcGlkZXJcIikgPT0gMCApIHRoZW4gYmVnaW4gRW5lbXkuaGl0IGUyIHN0YXRzLnN0cmVuZ3RoIHNwYXduSGVhcnQ7IGRlbGV0ZSBlMSBlbmRcclxuICAgIGVsc2UgaWYgKChTdHJpbmcuY29tcGFyZSBuYW1lIFwibWluZVwiKSA9PSAwICkgdGhlbiBiZWdpbiBNaW5lLmRlc3RydWN0aW9uIGUyOyBkZWxldGUgZTEgZW5kXHJcbiAgICBlbHNlICgpXHJcbiAgZW5kXHJcblxyXG5cclxuXHJcblxyXG5cclxubGV0IGNyZWF0ZSBuYW1lIHggeSBpbWcgdmVsWCB2ZWxZIGlkbGUgZGVnYXQgc3Bhd25IZWFydD1cclxuICBsZXQgZSA9IEVudGl0eS5jcmVhdGUgKCkgaW5cclxuICBsZXQgYW5pbSA9IFRleHR1cmUuY3JlYXRlX2FuaW1hdGlvbiBpbWcgNCA0IDIwIDIwIDIwIDIwIGluXHJcbiAgUG9zaXRpb24uc2V0IGUgeyB4ID0geDsgeSA9IHl9O1xyXG4gIFZlbG9jaXR5LnNldCBlIHsgeCA9IHZlbFg7IHkgPSB2ZWxZfTtcclxuICBNYXNzLnNldCBlIGluZmluaXR5O1xyXG4gIEJveC5zZXQgZSB7d2lkdGggPSAyMDsgaGVpZ2h0PTIwIH07XHJcbiAgQm94Q29sbGlkZXIuc2V0IGUge3dpZHRoID0gMjA7IGhlaWdodD01IH07XHJcbiAgTmFtZS5zZXQgZSBuYW1lO1xyXG4gIFN1cmZhY2Uuc2V0IGUgYW5pbTtcclxuICBUZXh0dXJlLmNyZWF0ZV9pZGxlIFwicmlnaHRfc2hvdFwiICgwLDMpIGFuaW07XHJcbiAgVGV4dHVyZS5jcmVhdGVfaWRsZSBcImRvd25fc2hvdFwiICg0LDcpIGFuaW07XHJcbiAgVGV4dHVyZS5jcmVhdGVfaWRsZSBcImxlZnRfc2hvdFwiICg4LDExKSBhbmltO1xyXG4gIFRleHR1cmUuY3JlYXRlX2lkbGUgXCJ1cF9zaG90XCIgKDEyLDE1KSBhbmltO1xyXG4gIFRleHR1cmUucGxheV9pZGxlIGFuaW0gaWRsZTtcclxuICBQcmlvcml0eS5zZXQgZSAyO1xyXG4gIENvbGxpc2lvblJlc29sdmVyLnNldCBlIChjb2xsaXNpb24gc3Bhd25IZWFydCk7XHJcbiAgQWN0aXZlLnNldCBlIHRydWU7XHJcbiAgU3RhdGlzdGljcy5zZXQgZSB7c3RyZW5ndGggPSBkZWdhdDsgYXR0YWNrc3BlZWQgPSAwLjA7IG1vdmVzcGVlZCA9IDAuMDt9O1xyXG4gICgqIHN5c3RlbXMgKilcclxuICBDbGVhbmluZ19TLnJlZ2lzdGVyIGU7XHJcbiAgTW92ZV9TLnJlZ2lzdGVyIGU7XHJcbiAgRHJhd19TLnJlZ2lzdGVyIGU7XHJcbiAgQ29sbGlzaW9uX1MucmVnaXN0ZXIgZTtcclxuIFxyXG4gIGVcclxuXHJcbiIsIm9wZW4gQ29tcG9uZW50X2RlZnNcbm9wZW4gU3lzdGVtX2RlZnNcbm9wZW4gRWNzXG5cblxuXG5sZXQgY3JlYXRlIG5hbWUgeCB5IGltZz1cbiAgbGV0IGUgPSBFbnRpdHkuY3JlYXRlICgpIGluXG4gIGxldCBhbmltID0gVGV4dHVyZS5jcmVhdGVfYW5pbWF0aW9uIGltZyAzIDQgMTYwIDE2MCA0MCA0MCBpblxuICBQb3NpdGlvbi5zZXQgZSB7IHggPSB4OyB5ID0geX07XG4gIFZlbG9jaXR5LnNldCBlIFZlY3Rvci56ZXJvO1xuICBNYXNzLnNldCBlIGluZmluaXR5O1xuICBCb3guc2V0IGUge3dpZHRoID0gNDA7IGhlaWdodD00MCB9O1xuICBCb3hDb2xsaWRlci5zZXQgZSB7d2lkdGggPSAzMDsgaGVpZ2h0PTM1IH07XG4gIE5hbWUuc2V0IGUgbmFtZTtcbiAgU3VyZmFjZS5zZXQgZSBhbmltO1xuICBUZXh0dXJlLmNyZWF0ZV9pZGxlIFwiZnJvbnRfd2Fsa1wiICgwLDMpIGFuaW07XG4gIFRleHR1cmUuY3JlYXRlX2lkbGUgXCJyaWdodF93YWxrXCIgKDMsNikgYW5pbTtcbiAgVGV4dHVyZS5jcmVhdGVfaWRsZSBcImJhY2tfd2Fsa1wiICg2LDkpIGFuaW07XG4gIFRleHR1cmUuY3JlYXRlX2lkbGUgXCJsZWZ0X3dhbGtcIiAoOSwxMikgYW5pbTtcbiAgVGV4dHVyZS5jcmVhdGVfaWRsZSBcImZyb250XCIgKDAsMSkgYW5pbTtcbiAgVGV4dHVyZS5jcmVhdGVfaWRsZSBcInJpZ2h0XCIgKDMsNCkgYW5pbTtcbiAgVGV4dHVyZS5jcmVhdGVfaWRsZSBcImJhY2tcIiAoNiw3KSBhbmltO1xuICBUZXh0dXJlLmNyZWF0ZV9pZGxlIFwibGVmdFwiICg5LDEwKSBhbmltO1xuICBUZXh0dXJlLnBsYXlfaWRsZSBhbmltIFwiZnJvbnRcIjtcbiAgT3JpZW50YXRpb24uc2V0IGUge3ggPSAwLjsgeSA9IDEufTtcbiAgUHJpb3JpdHkuc2V0IGUgMjtcbiAgSW52dW5lcmFibGVGcmFtZS5zZXQgZSAwO1xuICBTdGF0aXN0aWNzLnNldCBlIHtzdHJlbmd0aCA9IDEuMDsgYXR0YWNrc3BlZWQgPSAyNTAuMDsgbW92ZXNwZWVkID0gMjAwLjA7fTtcbiAgKCogc3lzdGVtcyAqKVxuICBDb2xsaXNpb25fUy5yZWdpc3RlciBlO1xuICBDb250cm9sX1MucmVnaXN0ZXIgZTtcbiAgRHJhd19TLnJlZ2lzdGVyIGU7XG4gIE1vdmVfUy5yZWdpc3RlciBlO1xuICBMb2dpY19TLnJlZ2lzdGVyIGU7XG4gIGVcblxubGV0IHJlc2V0IGUgeCB5ID0gXG5cbiAgUG9zaXRpb24uc2V0IGUgeyB4ID0geDsgeSA9IHkgfVxuXG5cblxuXG5cbmxldCBtb3ZlX3VwIGUgPVxuICBsZXQgaXNQdXNoZWQgPSBJbnB1dF9oYW5kbGVyLmdldF9rZXkgXCJ1cFwiIGluXG4gIGxldCBzdGF0cyA9IFN0YXRpc3RpY3MuZ2V0IGUgaW5cbiAgaWYgbm90KGlzUHVzaGVkKSB0aGVuIGJlZ2luXG4gICAgbGV0IGFuaW0gPSBTdXJmYWNlLmdldCBlIGluXG4gICAgSW5wdXRfaGFuZGxlci5zZXRfa2V5IFwidXBcIiB0cnVlO1xuICAgIFRleHR1cmUucGxheV9pZGxlIGFuaW0gXCJiYWNrX3dhbGtcIjtcbiAgICBWZWxvY2l0eS5zZXQgZSB7IHggPSAwLjA7IHkgPSAtMS4gKi4oc3RhdHMubW92ZXNwZWVkKSB9O1xuICAgIE9yaWVudGF0aW9uLnNldCBlIHt4ID0gMC47IHkgPSAtMS59XG4gIGVuZFxuICBcbmxldCBtb3ZlX2Rvd24gZSA9XG4gIGxldCBpc1B1c2hlZCA9IElucHV0X2hhbmRsZXIuZ2V0X2tleSBcImRvd25cIiBpblxuICBsZXQgc3RhdHMgPSBTdGF0aXN0aWNzLmdldCBlIGluXG4gIGlmIG5vdChpc1B1c2hlZCkgdGhlbiBiZWdpblxuICAgIGxldCBhbmltID0gU3VyZmFjZS5nZXQgZSBpblxuICAgIElucHV0X2hhbmRsZXIuc2V0X2tleSBcImRvd25cIiB0cnVlO1xuICBUZXh0dXJlLnBsYXlfaWRsZSBhbmltIFwiZnJvbnRfd2Fsa1wiO1xuICAgIFZlbG9jaXR5LnNldCBlIHsgeCA9IDAuMDsgeSA9IChzdGF0cy5tb3Zlc3BlZWQpIH07XG4gICAgT3JpZW50YXRpb24uc2V0IGUge3ggPSAwLjsgeSA9IDEufVxuICBlbmRcblxubGV0IG1vdmVfcmlnaHQgZSA9XG4gIGxldCBpc1B1c2hlZCA9IElucHV0X2hhbmRsZXIuZ2V0X2tleSBcInJpZ2h0XCIgaW5cbiAgbGV0IHN0YXRzID0gU3RhdGlzdGljcy5nZXQgZSBpblxuICBpZiBub3QoaXNQdXNoZWQpIHRoZW4gYmVnaW5cbiAgICBsZXQgYW5pbSA9IFN1cmZhY2UuZ2V0IGUgaW5cbiAgICBJbnB1dF9oYW5kbGVyLnNldF9rZXkgXCJyaWdodFwiIHRydWU7XG4gIFRleHR1cmUucGxheV9pZGxlIGFuaW0gXCJyaWdodF93YWxrXCI7XG4gICAgVmVsb2NpdHkuc2V0IGUgeyB4ID0gKHN0YXRzLm1vdmVzcGVlZCk7IHkgPSAwLjAgfTtcbiAgICBPcmllbnRhdGlvbi5zZXQgZSB7eCA9IDEuOyB5ID0gMC59XG4gIGVuZFxuICBcbmxldCBtb3ZlX2xlZnQgZSA9XG4gIGxldCBpc1B1c2hlZCA9IElucHV0X2hhbmRsZXIuZ2V0X2tleSBcImxlZnRcIiBpblxuICBsZXQgc3RhdHMgPSBTdGF0aXN0aWNzLmdldCBlIGluXG4gIGlmIG5vdChpc1B1c2hlZCkgdGhlbiBiZWdpblxuICAgIGxldCBhbmltID0gU3VyZmFjZS5nZXQgZSBpblxuICAgIElucHV0X2hhbmRsZXIuc2V0X2tleSBcImxlZnRcIiB0cnVlO1xuICBUZXh0dXJlLnBsYXlfaWRsZSBhbmltIFwibGVmdF93YWxrXCI7XG4gICAgVmVsb2NpdHkuc2V0IGUgeyB4ID0gLTEuICouKHN0YXRzLm1vdmVzcGVlZCk7IHkgPSAwLjAgfTtcbiAgICBPcmllbnRhdGlvbi5zZXQgZSB7eCA9IC0xLjsgeSA9IDAufVxuICBlbmRcblxuKCpTaSBsZSBqb3VldXIgbidhcHB1aWUgcGx1cyBzdXIgdW5lIHRvdWNoZSBtYWlzIGNvbnRpbnVlIGQnYXBwdXllciBzdXIgdW5lIGF1dHJlIG9uIGxlIHbDqXJpZmllIHBvdXIgcGFzIGZhaXJlIGRlIG1vdXZlbWVudCBzYWNjYWTDqSopXG5sZXQgc3RvcCBrZXkgZSA9XG4gIGxldCBhbmltID0gU3VyZmFjZS5nZXQgZSBpblxuICBsZXQgc3RhdHMgPSBTdGF0aXN0aWNzLmdldCBlIGluXG4gIElucHV0X2hhbmRsZXIuc2V0X2tleSBrZXkgZmFsc2U7XG4gIGxldCBuZXh0S2V5LHZhbHVlID0gSW5wdXRfaGFuZGxlci5nZXRfYWN0aXZlX2tleSAoKWluXG4gIGlmIChTdHJpbmcuY29tcGFyZSBrZXkgXCJkb3duXCIpPT0wIHRoZW4gYmVnaW4gVGV4dHVyZS5wbGF5X2lkbGUgYW5pbSBcImZyb250XCI7T3JpZW50YXRpb24uc2V0IGUge3ggPSAwLjsgeSA9IDEufTsgZW5kO1xuICBpZiAoU3RyaW5nLmNvbXBhcmUga2V5IFwidXBcIik9PTAgdGhlbiBiZWdpbiBUZXh0dXJlLnBsYXlfaWRsZSBhbmltIFwiYmFja1wiO09yaWVudGF0aW9uLnNldCBlIHt4ID0gMC47IHkgPSAtMS59OyBlbmQ7XG4gIGlmIChTdHJpbmcuY29tcGFyZSBrZXkgXCJyaWdodFwiKT09MCB0aGVuIGJlZ2luIFRleHR1cmUucGxheV9pZGxlIGFuaW0gXCJyaWdodFwiO09yaWVudGF0aW9uLnNldCBlIHt4ID0gMS47IHkgPSAwLn07IGVuZDtcbiAgaWYgKFN0cmluZy5jb21wYXJlIGtleSBcImxlZnRcIik9PTAgdGhlbiBiZWdpbiBUZXh0dXJlLnBsYXlfaWRsZSBhbmltIFwibGVmdFwiO09yaWVudGF0aW9uLnNldCBlIHt4ID0gLTEuOyB5ID0gMC59OyBlbmQ7XG4gIFZlbG9jaXR5LnNldCBlIFZlY3Rvci56ZXJvO1xuICBpZiAoKFN0cmluZy5jb21wYXJlIG5leHRLZXkgXCJkb3duXCIpPT0wKSYmdmFsdWUgdGhlbiBiZWdpbiBUZXh0dXJlLnBsYXlfaWRsZSBhbmltIFwiZnJvbnRfd2Fsa1wiO1ZlbG9jaXR5LnNldCBlIHsgeCA9IDAuMDsgeSA9IDEuICouKHN0YXRzLm1vdmVzcGVlZCkgfTtPcmllbnRhdGlvbi5zZXQgZSB7eCA9IDAuOyB5ID0gMS59OyBlbmQ7XG4gIGlmICgoU3RyaW5nLmNvbXBhcmUgbmV4dEtleSBcInVwXCIpPT0wKSYmdmFsdWUgdGhlbiBiZWdpbiBUZXh0dXJlLnBsYXlfaWRsZSBhbmltIFwiYmFja193YWxrXCI7VmVsb2NpdHkuc2V0IGUgeyB4ID0gMC4wOyB5ID0gLTEuICouKHN0YXRzLm1vdmVzcGVlZCkgfTtPcmllbnRhdGlvbi5zZXQgZSB7eCA9IDAuOyB5ID0gLTEufTsgZW5kO1xuICBpZiAoKFN0cmluZy5jb21wYXJlIG5leHRLZXkgXCJyaWdodFwiKT09MCkmJnZhbHVlIHRoZW4gYmVnaW4gVGV4dHVyZS5wbGF5X2lkbGUgYW5pbSBcInJpZ2h0X3dhbGtcIjtWZWxvY2l0eS5zZXQgZSB7IHggPSAxLiAqLihzdGF0cy5tb3Zlc3BlZWQpOyB5ID0gMC4wIH07T3JpZW50YXRpb24uc2V0IGUge3ggPSAxLjsgeSA9IDAufTsgZW5kO1xuICBpZiAoKFN0cmluZy5jb21wYXJlIG5leHRLZXkgXCJsZWZ0XCIpPT0wKSYmdmFsdWUgdGhlbiBiZWdpbiBUZXh0dXJlLnBsYXlfaWRsZSBhbmltIFwibGVmdF93YWxrXCI7IFZlbG9jaXR5LnNldCBlIHsgeCA9IC0xLiAqLihzdGF0cy5tb3Zlc3BlZWQpOyB5ID0gMC4wIH07T3JpZW50YXRpb24uc2V0IGUge3ggPSAtMS47IHkgPSAwLn07IGVuZFxuICBcbiAgIiwib3BlbiBDb21wb25lbnRfZGVmc1xyXG5cclxub3BlbiBFY3NcclxuXHJcblxyXG5cclxuXHJcbmxldCBjcmVhdGUgeCB5IG5hbWUgaW1nIHN0YXQgdGV4dCBpbWd4IGltZ3k9XHJcbmxldCBlID0gRW50aXR5LmNyZWF0ZSAoKSBpblxyXG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IHg7IHkgPSB5fTtcclxuICBCb3guc2V0IGUgeyB3aWR0aCA9IDMwOyBoZWlnaHQgPSAzMH07XHJcblxyXG4gIFZlbG9jaXR5LnNldCBlIFZlY3Rvci56ZXJvO1xyXG4gIE5hbWUuc2V0IGUgbmFtZTtcclxuICBTdXJmYWNlLnNldCBlIChUZXh0dXJlLmNyZWF0ZV9pbWdfc2NhbGUgaW1nIDQwIDQwIGltZ3ggaW1neSk7XHJcbiAgVGV4dEQuc2V0IGUge3RleHQgPSB0ZXh0OyBmb250PVwiMTJweCBWZXJkYW5hXCI7IGNvbG9yID0gKEdmeC5jb2xvciAyNTUgMjU1IDI1NSAyNTUpOyB4PSh4KTt5PSh5Ky41MC4pOyB9O1xyXG4gIFByaW9yaXR5LnNldCBlIDE7XHJcbiAgU3RhdGlzdGljcy5zZXQgZSBzdGF0O1xyXG4gICgqIHN5c3RlbXMgKilcclxuXHJcbiAgZVxyXG5cclxubGV0IGNoYW5nZVBvcyBlIHggeSA9ICBcclxuICBsZXQgdGV4dCA9IFRleHRELmdldCBlIGluXHJcbiAgUG9zaXRpb24uc2V0IGUgeyB4ID0geDsgeSA9IHl9O1xyXG4gIFRleHRELnNldCBlIHt0ZXh0IHdpdGggeD0oeCk7eT0oeSsuNTAuKTsgfTtcclxuICAoKVxyXG5cclxuXHJcbmxldCBjaGFuZ2VTaXplIGUgc2l6ZSA9IFxyXG4gIGxldCB0ZXh0ID0gVGV4dEQuZ2V0IGUgaW5cclxuICBsZXQgc2l6ZVQgPSAoc3RyaW5nX29mX2ludCBzaXplKSBpblxyXG4gIFRleHRELnNldCBlIHt0ZXh0IHdpdGggZm9udCA9IChzaXplVF5cInB4IFZlcmRhbmFcIik7IH07XHJcbiAgKCkiLCJvcGVuIENvbXBvbmVudF9kZWZzXG5vcGVuIEVjc1xuXG5cbmxldCBjcmVhdGUgbmFtZSB4IHkgcGFsZXR0ZSBtYXAgc2l6ZT1cbmxldCBlID0gRW50aXR5LmNyZWF0ZSAoKSBpblxuICBQb3NpdGlvbi5zZXQgZSB7IHggPSB4OyB5ID0geX07XG4gIFZlbG9jaXR5LnNldCBlIFZlY3Rvci56ZXJvO1xuICBNYXNzLnNldCBlIGluZmluaXR5O1xuICBOYW1lLnNldCBlIG5hbWU7XG4gIFN1cmZhY2Uuc2V0IGUgKFRleHR1cmUuY3JlYXRlX3RpbGVtYXAgcGFsZXR0ZSBtYXAgc2l6ZSk7XG4gIFByaW9yaXR5LnNldCBlIDA7XG4gICgqIHN5c3RlbXMgKilcblxuXG4gIGVcblxuIiwib3BlbiBDb21wb25lbnRfZGVmc1xyXG5vcGVuIFN5c3RlbV9kZWZzXHJcbm9wZW4gRWNzXHJcblxyXG5cclxuXHJcbmxldCBjcmVhdGUgeCB5IG5hbWUgaW1nIHRleHQgc2l6ZXggc2l6ZXkgbXggbXk9XHJcbmxldCBlID0gRW50aXR5LmNyZWF0ZSAoKSBpblxyXG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IHg7IHkgPSB5fTtcclxuICBCb3guc2V0IGUgeyB3aWR0aCA9IHNpemV4OyBoZWlnaHQgPSBzaXpleX07XHJcbiAgQm94Q29sbGlkZXIuc2V0IGUgeyB3aWR0aCA9IHNpemV4OyBoZWlnaHQgPSBzaXpleX07XHJcbiAgVmVsb2NpdHkuc2V0IGUgVmVjdG9yLnplcm87XHJcbiAgTmFtZS5zZXQgZSBuYW1lO1xyXG4gIFN1cmZhY2Uuc2V0IGUgKFRleHR1cmUuY3JlYXRlX2ltZyBpbWcgNDAgNDApO1xyXG4gIFRleHRELnNldCBlIHt0ZXh0ID0gdGV4dDsgZm9udD1cIjE4cHggVmVyZGFuYVwiOyBjb2xvciA9IChHZnguY29sb3IgMjU1IDI1NSAyNTUgMjU1KTsgeD0oeCsubXgpO3k9KHkrLm15KTsgfTtcclxuICBQcmlvcml0eS5zZXQgZSAxO1xyXG5cclxuICAoKiBzeXN0ZW1zICopXHJcbiAgRHJhd19TLnJlZ2lzdGVyIGU7XHJcbiAgZVxyXG5cclxubGV0IGNoYW5nZVBvcyBlIHggeSBteCBteT0gIFxyXG4gIGxldCB0ZXh0ID0gVGV4dEQuZ2V0IGUgaW5cclxuICBQb3NpdGlvbi5zZXQgZSB7IHggPSB4OyB5ID0geX07XHJcbiAgVGV4dEQuc2V0IGUge3RleHQgd2l0aCB4PSh4Ky5teCk7eT0oeSsubXkpOyB9O1xyXG4gICgpXHJcblxyXG5cclxubGV0IGNoYW5nZVRleHQgZSB0ID0gIFxyXG4gIGxldCB0ZXh0ID0gVGV4dEQuZ2V0IGUgaW5cclxuICBUZXh0RC5zZXQgZSB7dGV4dCB3aXRoIHRleHQ9dCB9O1xyXG4gICgpXHJcblxyXG5cclxubGV0IGNoYW5nZVNpemUgZSBzaXplID0gXHJcbiAgbGV0IHRleHQgPSBUZXh0RC5nZXQgZSBpblxyXG4gIGxldCBzaXplVCA9IChzdHJpbmdfb2ZfaW50IHNpemUpIGluXHJcbiAgVGV4dEQuc2V0IGUge3RleHQgd2l0aCBmb250ID0gKHNpemVUXlwicHggVmVyZGFuYVwiKTsgfTtcclxuICAoKSIsIm9wZW4gQ29tcG9uZW50X2RlZnNcclxub3BlbiBTeXN0ZW1fZGVmc1xyXG5vcGVuIEVjc1xyXG5cclxuXHJcblxyXG5cclxubGV0IGNyZWF0ZSB4IHkgaW1nPVxyXG5sZXQgZSA9IEVudGl0eS5jcmVhdGUgKCkgaW5cclxuICBQb3NpdGlvbi5zZXQgZSB7IHggPSB4OyB5ID0geX07XHJcbiAgQm94LnNldCBlIHsgd2lkdGggPSA0MDsgaGVpZ2h0ID0gNDB9O1xyXG4gIEJveENvbGxpZGVyLnNldCBlIHsgd2lkdGggPSA0MDsgaGVpZ2h0ID0gNDB9O1xyXG4gIFZlbG9jaXR5LnNldCBlIFZlY3Rvci56ZXJvO1xyXG4gIFN1cmZhY2Uuc2V0IGUgKFRleHR1cmUuY3JlYXRlX2ltZyBpbWcgNDAgNDApO1xyXG4gIFByaW9yaXR5LnNldCBlIDE7XHJcbiAgXHJcbiAgKCogc3lzdGVtcyAqKVxyXG4gIERyYXdfUy5yZWdpc3RlciBlO1xyXG5cclxuICBlXHJcblxyXG5cclxuIiwib3BlbiBDb21wb25lbnRfZGVmc1xub3BlbiBTeXN0ZW1fZGVmcyBcbm9wZW4gRWNzXG5cblxubGV0IGNyZWF0ZSBwb3NYIHBvc1kgaW1nIGx2bCA9IFxuICBsZXQgZSA9IEVudGl0eS5jcmVhdGUgKCkgaW5cbiAgbGV0IGFuaW0gPSBUZXh0dXJlLmNyZWF0ZV9hbmltYXRpb24gaW1nIDMgNCAxNjAgMTYwIDQwIDQwIGluXG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IHBvc1g7IHkgPSBwb3NZfTtcbiAgVmVsb2NpdHkuc2V0IGUgeyB4ID0gMC4wOyB5ID0gMC4wfTtcbiAgTWFzcy5zZXQgZSBpbmZpbml0eTtcbiAgQm94LnNldCBlIHt3aWR0aCA9IDQwOyBoZWlnaHQ9NDAgfTtcbiAgQm94Q29sbGlkZXIuc2V0IGUge3dpZHRoID0gMzU7IGhlaWdodD0zOCB9O1xuICBOYW1lLnNldCBlIFwiZW5uZW15XCI7XG4gIFN1cmZhY2Uuc2V0IGUgYW5pbTtcbiAgVGV4dHVyZS5jcmVhdGVfaWRsZSBcImZyb250X3dhbGtcIiAoMCwzKSBhbmltO1xuICBUZXh0dXJlLmNyZWF0ZV9pZGxlIFwicmlnaHRfd2Fsa1wiICgzLDYpIGFuaW07XG4gIFRleHR1cmUuY3JlYXRlX2lkbGUgXCJiYWNrX3dhbGtcIiAoNiw5KSBhbmltO1xuICBUZXh0dXJlLmNyZWF0ZV9pZGxlIFwibGVmdF93YWxrXCIgKDksMTIpIGFuaW07XG4gIFRleHR1cmUucGxheV9pZGxlIGFuaW0gXCJmcm9udF93YWxrXCI7XG4gIFByaW9yaXR5LnNldCBlICgyKyhsdmwgbW9kIDMpKTtcbiAgSGVhbHRoLnNldCBlIDQ7XG4gIEFjdGl2ZS5zZXQgZSB0cnVlO1xuICBTdGF0aXN0aWNzLnNldCBlIHtzdHJlbmd0aCA9IDAuMDsgYXR0YWNrc3BlZWQgPSAwLjA7IG1vdmVzcGVlZCA9IDEyNS4wO307XG5cbiAgKCogc3lzdGVtcyAqKVxuICBDbGVhbmluZ19TLnJlZ2lzdGVyIGU7XG4gIFxuICBlXG5cbmxldCByZXNldCBlIHggeSA9IFxuICBQb3NpdGlvbi5zZXQgZSB7IHggPSB4OyB5ID0geSB9XG5cbmxldCBzdG9wIGUgPVxuICBWZWxvY2l0eS5zZXQgZSBWZWN0b3IuemVyb1xuICAiLCJvcGVuIENvbXBvbmVudF9kZWZzXHJcbm9wZW4gU3lzdGVtX2RlZnNcclxub3BlbiBFY3NcclxuXHJcblxyXG5cclxuXHJcbmxldCBjcmVhdGUgeCB5ID1cclxubGV0IGUgPSBFbnRpdHkuY3JlYXRlICgpIGluXHJcbiAgUG9zaXRpb24uc2V0IGUgeyB4ID0geDsgeSA9IHl9O1xyXG4gIEJveC5zZXQgZSB7IHdpZHRoID0gODAwOyBoZWlnaHQgPSA4MH07XHJcbiAgVmVsb2NpdHkuc2V0IGUgVmVjdG9yLnplcm87XHJcbiAgU3VyZmFjZS5zZXQgZSBUZXh0dXJlLmdyYXk7XHJcbiAgUHJpb3JpdHkuc2V0IGUgMDtcclxuICBcclxuICAoKiBzeXN0ZW1zICopXHJcbiAgRHJhd19TLnJlZ2lzdGVyIGU7XHJcblxyXG4gIGUiLCJvcGVuIENvbXBvbmVudF9kZWZzXG5vcGVuIFN5c3RlbV9kZWZzXG5vcGVuIEVjc1xuXG5sZXQgZGVhZCBlPVxuICBDb2xsaXNpb25fUy51bnJlZ2lzdGVyIGU7XG4gIENvbnRyb2xfUy51bnJlZ2lzdGVyIGU7XG4gIERyYXdfUy51bnJlZ2lzdGVyIGU7IFxuICBMb2dpY19TLnVucmVnaXN0ZXIgZTtcbiAgQWN0aXZlLnNldCBlIGZhbHNlXG5cblxubGV0IGNyZWF0ZSB4IHkgaW1nPVxubGV0IGUgPSBFbnRpdHkuY3JlYXRlICgpIGluXG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IHg7IHkgPSB5fTtcbiAgQm94LnNldCBlIHsgd2lkdGggPSA0MDsgaGVpZ2h0ID0gNDB9O1xuICBOYW1lLnNldCBlIFwiaGVhcnRcIjtcbiAgVmVsb2NpdHkuc2V0IGUgVmVjdG9yLnplcm87XG4gIFN1cmZhY2Uuc2V0IGUgKFRleHR1cmUuY3JlYXRlX2ltZyBpbWcgNDAgNDApO1xuICBQcmlvcml0eS5zZXQgZSAxO1xuICBBY3RpdmUuc2V0IGUgdHJ1ZTtcbiAgQm94Q29sbGlkZXIuc2V0IGUge3dpZHRoID0gNDA7IGhlaWdodD00MCB9O1xuICBcbiAgKCogc3lzdGVtcyAqKVxuXG5cbiAgZVxuXG5cbiIsIm9wZW4gQ29tcG9uZW50X2RlZnNcbm9wZW4gU3lzdGVtX2RlZnNcbm9wZW4gRWNzXG5cblxuXG5cbmxldCBjcmVhdGUgbmFtZSB4IHkgeHQgeXQ9XG5sZXQgZSA9IEVudGl0eS5jcmVhdGUgKCkgaW5cbiAgUG9zaXRpb24uc2V0IGUgeyB4ID0geDsgeSA9IHl9O1xuICBUZWxlcG9ydC5zZXQgZSB7IHggPSB4dDsgeSA9IHl0fTtcbiAgQm94LnNldCBlIHsgd2lkdGggPSA0MDsgaGVpZ2h0ID0gNDB9O1xuICBCb3hDb2xsaWRlci5zZXQgZSB7IHdpZHRoID0gNDA7IGhlaWdodCA9IDQwfTtcbiAgVmVsb2NpdHkuc2V0IGUgVmVjdG9yLnplcm87XG4gIE1hc3Muc2V0IGUgaW5maW5pdHk7XG4gIE5hbWUuc2V0IGUgbmFtZTtcbiAgU3VyZmFjZS5zZXQgZSBUZXh0dXJlLmJsYWNrO1xuICBQcmlvcml0eS5zZXQgZSAxO1xuXG4gICgqIHN5c3RlbXMgKilcbiAgRHJhd19TLnJlZ2lzdGVyIGU7XG4gIENvbGxpc2lvbl9TLnJlZ2lzdGVyIGU7XG4gIGVcblxuXG4iLCJvcGVuIENvbXBvbmVudF9kZWZzXG5vcGVuIFN5c3RlbV9kZWZzXG5vcGVuIEVjc1xuXG5sZXQgZGVsZXRlIGUgPSBcblxuICBNb3ZlX1MudW5yZWdpc3RlciBlO1xuICBEcmF3X1MudW5yZWdpc3RlciBlO1xuICBDb2xsaXNpb25fUy51bnJlZ2lzdGVyIGU7XG4gIEFjdGl2ZS5zZXQgZSBmYWxzZVxuXG5cblxuXG5cblxuXG5cblxuXG5sZXQgY3JlYXRlIG5hbWUgeCB5IGltZyB2ZWxYIHZlbFkgZGVnYXQgPVxuICBsZXQgZSA9IEVudGl0eS5jcmVhdGUgKCkgaW5cbiAgbGV0IGFuaW0gPSBUZXh0dXJlLmNyZWF0ZV9hbmltYXRpb24gaW1nIDcgMSA4MCA4MCAyMCAyMCBpblxuICBQb3NpdGlvbi5zZXQgZSB7IHggPSB4OyB5ID0geX07XG4gIFZlbG9jaXR5LnNldCBlIHsgeCA9IHZlbFg7IHkgPSB2ZWxZfTtcbiAgTWFzcy5zZXQgZSBpbmZpbml0eTtcbiAgQm94LnNldCBlIHt3aWR0aCA9IDIwOyBoZWlnaHQ9MjAgfTtcbiAgQm94Q29sbGlkZXIuc2V0IGUge3dpZHRoID0gMjA7IGhlaWdodD0yMCB9O1xuICBOYW1lLnNldCBlIG5hbWU7XG4gIFN1cmZhY2Uuc2V0IGUgYW5pbTtcbiAgVGV4dHVyZS5jcmVhdGVfaWRsZSBcImZpcmViYWxsX2lkbGVcIiAoMCw2KSBhbmltO1xuICBQcmlvcml0eS5zZXQgZSAyO1xuICBBY3RpdmUuc2V0IGUgdHJ1ZTtcbiAgU3RhdGlzdGljcy5zZXQgZSB7c3RyZW5ndGggPSBkZWdhdDsgYXR0YWNrc3BlZWQgPSAwLjA7IG1vdmVzcGVlZCA9IDAuMDt9O1xuICAoKiBzeXN0ZW1zICopXG5cbiBcbiAgZVxuXG4iLCJcbm9wZW4gRWNzXG5vcGVuIFN5c3RlbV9kZWZzXG5vcGVuIENvbXBvbmVudF9kZWZzXG50eXBlIHJvb20gPSB7IFxuICBpbmRleCA6IGludDtcbiAgaWQ6IEVudGl0eS50O1xuICBlbm5lbWllcyA6IEVudGl0eS50IGxpc3Q7XG4gIG9ic3RhY2xlcyA6IEVudGl0eS50IGxpc3Q7XG4gIHZhbHVlIDogaW50IGFycmF5IGFycmF5O1xuICBkb29ycyA6IChib29sKmludCkgYXJyYXk7XG59XG5cbnR5cGUgdCA9IHtcbiAgcGxheWVyIDogRW50aXR5LnQ7XG4gIG11dGFibGUgaXNQbGF5aW5nIDogYm9vbDtcbiAgY3VycmVudFJvb20gOiByb29tO1xuICBtYXAgOiByb29tIGFycmF5O1xuICBtdXRhYmxlIGZsb29yIDogaW50O1xuICBkb29yc19lbnRpdHkgOiBFbnRpdHkudCBhcnJheTtcbiAgd2FsbHNfZW50aXR5IDogRW50aXR5LnQgYXJyYXk7XG4gIGl0ZW1wb29sIDogRW50aXR5LnQgbGlzdDtcbn1cblxudHlwZSB0X2ludGVyZmFjZSA9IHtcbiAgdmllX2VudGl0eSA6IEVudGl0eS50IGFycmF5O1xuICBvYmpfZW50aXR5IDogRW50aXR5LnQgbGlzdDtcbiAgYmFja2dyb3VuZCA6IEVudGl0eS50O1xuICBlX2luZm8gOiBFbnRpdHkudDtcbiAgZl9pbmZvIDogRW50aXR5LnQ7XG4gIHBvcyA6IFZlY3Rvci50O1xufVxuXG50eXBlIHRfcGxheWVyX3N0YXRlID0ge1xuICBtdXRhYmxlIGhlYWx0aCA6IGludDtcbn1cblxuXG5sZXQgaW50ZXJmYWNlID0gcmVmIHtcbiAgdmllX2VudGl0eSA9IFt8fF07XG4gIG9ial9lbnRpdHkgPSBbXTtcbiAgYmFja2dyb3VuZCA9IEVudGl0eS5kdW1teTtcbiAgZV9pbmZvID0gRW50aXR5LmR1bW15O1xuICBmX2luZm8gPSBFbnRpdHkuZHVtbXk7XG4gIHBvcyA9IHt4PTIwLjt5PTYwLn07XG59XG5cblxuXG5sZXQgcGxheWVyX3N0YXRlID0gcmVmIHtcbiAgaGVhbHRoID0gMztcbn1cblxubGV0IHN0YXRlID0gcmVmIHtcbiAgcGxheWVyID0gRW50aXR5LmR1bW15O1xuICBpc1BsYXlpbmcgPSB0cnVlO1xuICBjdXJyZW50Um9vbSA9IHtpZD1FbnRpdHkuZHVtbXk7b2JzdGFjbGVzPVtdO2VubmVtaWVzPVtdO2luZGV4PSgtMSk7dmFsdWU9W3x8XTtkb29ycz1bfHxdfTtcbiAgbWFwID0gW3x8XTtcbiAgZmxvb3IgPSAxO1xuICBkb29yc19lbnRpdHkgPSBbfEVudGl0eS5kdW1teTtFbnRpdHkuZHVtbXk7RW50aXR5LmR1bW15O0VudGl0eS5kdW1teXxdO1xuICB3YWxsc19lbnRpdHkgPSBbfEVudGl0eS5kdW1teTtFbnRpdHkuZHVtbXk7RW50aXR5LmR1bW15O0VudGl0eS5kdW1teXxdO1xuICBpdGVtcG9vbCA9IFtdO1xufVxuXG5sZXQgY3B0ID0gcmVmIDAuMFxuXG5sZXQgc2V0X3N0YXRlIGIgPSAhc3RhdGUuaXNQbGF5aW5nIDwtIGJcbmxldCBzZXRfZmxvb3IgZiA9ICFzdGF0ZS5mbG9vciA8LSBmXG5sZXQgc2V0X2l0ZW1wb29sIGlwID0gc3RhdGUgOj0geyFzdGF0ZSB3aXRoIGl0ZW1wb29sID0gaXA7fVxubGV0IHNldF9vYmogb2JqID0gaW50ZXJmYWNlIDo9IHshaW50ZXJmYWNlIHdpdGggb2JqX2VudGl0eSA9IG9iajt9XG5cblxubGV0IGdldF9wbGF5ZXIgKCkgPSAhc3RhdGUucGxheWVyXG5sZXQgZ2V0X3N0YXR1cyAoKT0gIXN0YXRlLmlzUGxheWluZ1xubGV0IGdldF9zdGF0ZSAoKSA9ICFzdGF0ZVxubGV0IGdldF9vYmogKCkgPSAhaW50ZXJmYWNlLm9ial9lbnRpdHlcbmxldCBnZXRfZmxvb3IgKCkgPSAhc3RhdGUuZmxvb3JcblxubGV0IGxvYWRfZW5uZW1pZSBlID1cbiAgQ29sbGlzaW9uX1MucmVnaXN0ZXIgZTtcbiAgQ29udHJvbF9TLnJlZ2lzdGVyIGU7XG4gIERyYXdfUy5yZWdpc3RlciBlO1xuICBNb3ZlX1MucmVnaXN0ZXIgZTtcbiAgTG9naWNfUy5yZWdpc3RlciBlXG5cbmxldCB1bmxvYWRfZW5uZW1pZSBlID1cbiAgQ29sbGlzaW9uX1MudW5yZWdpc3RlciBlO1xuICBDb250cm9sX1MudW5yZWdpc3RlciBlO1xuICBEcmF3X1MudW5yZWdpc3RlciBlO1xuICBNb3ZlX1MudW5yZWdpc3RlciBlO1xuICBMb2dpY19TLnVucmVnaXN0ZXIgZVxuXG5sZXQgYWN0aXZlX2xlbmd0aCBsID0gXG4gIGxldCByZWMgYXV4IGwgYWNjID0gXG4gICAgbWF0Y2ggbCB3aXRoXG4gICAgfCBbXSAtPiBhY2NcbiAgICB8IGU6OnQgLT5cbiAgICAgICAgaWYgKEFjdGl2ZS5oYXNfY29tcG9uZW50IGUpIHRoZW5cbiAgICAgICAgICBiZWdpblxuICAgICAgICAgIGlmIChBY3RpdmUuZ2V0IGUpIHRoZW4gKGF1eCB0IChhY2MrMSkpXG4gICAgICAgICAgZWxzZSAoYXV4IHQgKGFjYykpXG4gICAgICAgICAgZW5kXG4gICAgICAgIGVsc2UgKGF1eCB0IChhY2MpKSAgXG4gIGluXG4gIGF1eCBsIDBcblxuXG5sZXQgY2hlY2tfZW5uZW1pZXMgKCkgPSBBcnJheS5mb2xkX2xlZnQgKGZ1biBhY2MgZSAtPiBpZiAoYWN0aXZlX2xlbmd0aCBlLmVubmVtaWVzKSA+IDAgdGhlbiB0cnVlIGVsc2UgYWNjKSBmYWxzZSAhc3RhdGUubWFwXG5sZXQgY291bnRfZW5uZW1pZXMgKCkgPSBBcnJheS5mb2xkX2xlZnQgKGZ1biBhY2MgZSAtPiAoYWN0aXZlX2xlbmd0aCBlLmVubmVtaWVzK2FjYykpIDAgIXN0YXRlLm1hcFxuXG4oKkxvcnNxdWUgbCdvbiBham91dGUgdW4gcHJqZWN0aWxlIG91IHVuIHBpw6hnZSAqKVxubGV0IGFkZF9vYnN0YWNsZSBlID0gXG4gIGxldCByb29tID0gIXN0YXRlLmN1cnJlbnRSb29tIGluXG4gIGxldCB1cGRhdGUgPSB7cm9vbSB3aXRoIG9ic3RhY2xlcz0oZTo6KHJvb20ub2JzdGFjbGVzKSk7fWluXG4gIEFycmF5LnNldCAhc3RhdGUubWFwIHJvb20uaW5kZXggdXBkYXRlO1xuICBzdGF0ZSA6PSB7ICFzdGF0ZSB3aXRoIGN1cnJlbnRSb29tID0gdXBkYXRlO307XG4gICgpXG5cbmxldCBfcmFuZG9tX2ludGVydmFsIGEgYiBjIGQgPSBcbiAgUmFuZG9tLnNlbGZfaW5pdCAoKTtcbiAgaWYgKFJhbmRvbS5pbnQgMikgPT0gMCB0aGVuXG4gICAgKFJhbmRvbS5mbG9hdCAoYi0uYSkpKy5hXG4gIGVsc2UgXG4gICAgKFJhbmRvbS5mbG9hdCAoZC0uYykpKy5jXG5cbmxldCByYW5kb21fYmV0d2VlbiBhIGIgPSBcbiAgUmFuZG9tLnNlbGZfaW5pdCAoKTtcbiAgKFJhbmRvbS5pbnQgKGItYSkpK2FcblxubGV0IHJhbmRvbV9iZXR3ZWVuX2Zsb2F0IGEgYiA9IFxuICBSYW5kb20uc2VsZl9pbml0ICgpO1xuICAoUmFuZG9tLmZsb2F0IChiLS5hKSkrLmFcblxubGV0IGRpc2FibGVfaGVhcnQgZSA9XG4gIERyYXdfUy51bnJlZ2lzdGVyIGU7XG4gICgpXG5cbmxldCBlbmFibGVfaGVhcnQgZSA9XG4gIERyYXdfUy5yZWdpc3RlciBlO1xuICAoKVxuXG4oKiBNaXNlIMOgIGpvdXIgZGVzIHBvaW50cyBkZSB2aWUgc3VyIGwnaW50ZXJmYWNlKilcbmxldCB1cGRhdGVfaGVhbHRoICgpID0gXG4gIEFycmF5Lml0ZXJpIChmdW4gaSBlIC0+IGlmIChpID4gKCFwbGF5ZXJfc3RhdGUuaGVhbHRoLTEpKSB0aGVuIGRpc2FibGVfaGVhcnQgZSBlbHNlIGVuYWJsZV9oZWFydCBlKSAhaW50ZXJmYWNlLnZpZV9lbnRpdHk7XG4gIGlmICFwbGF5ZXJfc3RhdGUuaGVhbHRoID09IDAgdGhlbiAhc3RhdGUuaXNQbGF5aW5nIDwtIGZhbHNlXG5cbigqIE1pc2Ugw6Agam91ciBkdSBub21icmUgZCdlbm5lbWllIGVuIHZpZSBzdXIgbCdpbnRlcmZhY2UqKVxubGV0IHVwZGF0ZV9jb3VudF9lICgpID0gXG4gICAgbGV0IGMgPSBjb3VudF9lbm5lbWllcyAoKSBpblxuICAgIGxldCBpbmZvID0gIWludGVyZmFjZS5lX2luZm8gaW5cbiAgICBJbmZvLmNoYW5nZVRleHQgaW5mbyAoc3RyaW5nX29mX2ludCBjKTtcbiAgICAoKVxuXG4oKiBNaXNlIMOgIGpvdXIgZHUgbnVtw6lybyBkZSBsJ8OpdGFnZSBzdXIgbCdpbnRlcmZhY2UqKVxubGV0IHVwZGF0ZV9jb3VudF9mICgpID0gXG4gICAgbGV0IGYgPSAhc3RhdGUuZmxvb3IgaW5cbiAgICBsZXQgaW5mbyA9ICFpbnRlcmZhY2UuZl9pbmZvIGluXG4gICAgSW5mby5jaGFuZ2VUZXh0IGluZm8gKHN0cmluZ19vZl9pbnQgZik7XG4gICAgKClcblxuKCogUmVudm9pZSBsJ2EgcG9ydGUgb3Bwb3PDqSDDoCBsYSBwb3J0ZSBuLiAoMCBkcm9pdGUsMSBoYXV0LDIgZ2F1Y2hlLCAzIGJhcykgKilcbmxldCBkb29yX2YgbiA9XG4gIG1hdGNoIG4gd2l0aCBcbiAgMCAtPiAyXG4gIHwxIC0+IDNcbiAgfDIgLT4gMFxuICB8MyAtPiAxXG4gIHxfIC0+IC0xXG5cbigqUGFybWlzIGxlcyBwb3J0ZXMgZGlzcG9uaWJsZXMsIG9uIGVuIHByZW5kIHVuZSBhbMOpYXRvaXJlbWVudCopXG5sZXQgcmFuZG9tX2Rvb3Igcm9vbSA9XG4gIFJhbmRvbS5zZWxmX2luaXQgKCk7XG4gIGxldCBsaXN0ID0gcmVmIFtdaW5cbiAgICAgZm9yIGkgPSAwIHRvIChBcnJheS5sZW5ndGggcm9vbS5kb29ycyktMSBkb1xuICAgICAgbGV0IGRvb3IgPSBBcnJheS5nZXQgcm9vbS5kb29ycyBpIGluXG4gICAgICBpZiAoZnN0IGRvb3IgPT0gZmFsc2UpIHRoZW4gbGlzdCA6PSBpOjooIWxpc3QpO1xuICAgICBkb25lO1xuICAgIExpc3QubnRoICFsaXN0IChSYW5kb20uaW50IChMaXN0Lmxlbmd0aCAhbGlzdCkpXG5cbigqIE9uIGfDqW7DqXJlIGxhIG1hcCwgbGUgY2hlbWluIGVzdCBsaW7DqWFpcmUgbWFpcyBsZXMgcG9ydGVzIHNvbnQgYWzDqWF0b2lyZSopXG5sZXQgcGF0aCBtID0gXG4gIGxldCByZWMgcGF0aF9hdXggbWFwIHJvb20gPVxuICAgIGxldCBkb29yID0gcmFuZG9tX2Rvb3Igcm9vbSBpblxuICAgIG1hdGNoIG1hcCB3aXRoIFxuICAgIHxbXSAtPiBbXVxuICAgIHxbeF0gLT4gXG4gICAgICBBcnJheS5zZXQgcm9vbS5kb29ycyBkb29yICAodHJ1ZSx4LmluZGV4KTtcbiAgICAgIEFycmF5LnNldCB4LmRvb3JzIChkb29yX2YgZG9vcikgKHRydWUscm9vbS5pbmRleCk7XG4gICAgICByb29tOjpbeF1cbiAgICB8IHg6OnRhaWwgLT4gXG4gICAgICAgIEFycmF5LnNldCByb29tLmRvb3JzIGRvb3IgICh0cnVlLHguaW5kZXgpO1xuICAgICAgICBBcnJheS5zZXQgeC5kb29ycyAoZG9vcl9mIGRvb3IpICh0cnVlLHJvb20uaW5kZXgpO1xuICAgICAgICByb29tOjoocGF0aF9hdXggdGFpbCB4KSBcblxuICBpblxuICBwYXRoX2F1eCAoTGlzdC50bCBtKSAoTGlzdC5oZCBtKSBcblxuXG5sZXQgc3Bhd25IZWFydCBpbWcgeCB5ID1cbiAgICBsZXQgY29ucyA9IENvbnN1bWFibGUuY3JlYXRlIHggeSBpbWcgaW5cbiAgICBhZGRfb2JzdGFjbGUgY29ucztcbiAgICBsb2FkX2VubmVtaWUgY29ucztcbiAgICAoKVxuXG5sZXQgc2hvdCBoZWFydF9pbWcgcHJvamVjdGlsZV9pbWcgZSA9XG4gIGxldCBwb3MgPSBQb3NpdGlvbi5nZXQgZSBpblxuICBsZXQgb3JpID0gT3JpZW50YXRpb24uZ2V0IGUgaW5cbiAgbGV0IHN0YXRzID0gU3RhdGlzdGljcy5nZXQgZSBpblxuICBpZiAoU3lzLnRpbWUgKCkgLS4gIWNwdCA+PSAwLjc1KSB0aGVuXG4gIG1hdGNoIG9yaS54LG9yaS55IHdpdGhcbiAgfCBfLDEuIC0+IGJlZ2luIGxldCBwcm9qZWN0aWxlID0gUHJvamVjdGlsZS5jcmVhdGUgXCJwcm9qZWN0aWxlXCIgKHBvcy54Ky4xMC4pIChwb3MueSsuMTAuKSBwcm9qZWN0aWxlX2ltZyAob3JpLngqLihzdGF0cy5hdHRhY2tzcGVlZCkpIChvcmkueSouKHN0YXRzLmF0dGFja3NwZWVkKSkgXCJkb3duX3Nob3RcIiBzdGF0cy5zdHJlbmd0aChzcGF3bkhlYXJ0IGhlYXJ0X2ltZykgIGluIGNwdDo9U3lzLnRpbWUgKCkgO2FkZF9vYnN0YWNsZSBwcm9qZWN0aWxlOyAoKSBlbmRcbiAgfCBfLC0xLiAtPiBiZWdpbiBsZXQgcHJvamVjdGlsZSA9IFByb2plY3RpbGUuY3JlYXRlIFwicHJvamVjdGlsZVwiIChwb3MueCsuMTAuKSAocG9zLnkrLjEwLikgcHJvamVjdGlsZV9pbWcgKG9yaS54Ki4oc3RhdHMuYXR0YWNrc3BlZWQpKSAob3JpLnkqLihzdGF0cy5hdHRhY2tzcGVlZCkpIFwidXBfc2hvdFwiIHN0YXRzLnN0cmVuZ3RoIChzcGF3bkhlYXJ0IGhlYXJ0X2ltZykgaW4gY3B0Oj1TeXMudGltZSAoKSA7YWRkX29ic3RhY2xlIHByb2plY3RpbGU7ICgpIGVuZFxuICB8IDEuLF8gLT4gYmVnaW4gbGV0IHByb2plY3RpbGUgPSBQcm9qZWN0aWxlLmNyZWF0ZSBcInByb2plY3RpbGVcIiAocG9zLngrLjEwLikgKHBvcy55Ky4xMC4pIHByb2plY3RpbGVfaW1nIChvcmkueCouKHN0YXRzLmF0dGFja3NwZWVkKSkgKG9yaS55Ki4oc3RhdHMuYXR0YWNrc3BlZWQpKSBcInJpZ2h0X3Nob3RcIiBzdGF0cy5zdHJlbmd0aCAoc3Bhd25IZWFydCBoZWFydF9pbWcpIGluIGNwdDo9U3lzLnRpbWUgKCkgO2FkZF9vYnN0YWNsZSBwcm9qZWN0aWxlOyAoKSBlbmRcbiAgfCAtMS4sXyAtPiBiZWdpbiBsZXQgcHJvamVjdGlsZSA9IFByb2plY3RpbGUuY3JlYXRlIFwicHJvamVjdGlsZVwiIChwb3MueCsuMTAuKSAocG9zLnkrLjEwLikgcHJvamVjdGlsZV9pbWcgKG9yaS54Ki4oc3RhdHMuYXR0YWNrc3BlZWQpKSAob3JpLnkqLihzdGF0cy5hdHRhY2tzcGVlZCkpIFwibGVmdF9zaG90XCIgc3RhdHMuc3RyZW5ndGggKHNwYXduSGVhcnQgaGVhcnRfaW1nKSBpbiBjcHQ6PVN5cy50aW1lICgpIDthZGRfb2JzdGFjbGUgcHJvamVjdGlsZTsgICgpIGVuZFxuICB8IF8sXyAtPiAgY3B0Oj1TeXMudGltZSAoKSA7ICgpIFxuICBlbHNlICgpXG5cblxubGV0IGNvbGxpc2lvbk1pbmUgZTEgZTIgPVxuICAgIGxldCBuYW1lID0gTmFtZS5nZXQgZTIgaW5cbiAgICAgIGlmIChTdHJpbmcuY29tcGFyZSBuYW1lIFwicGxheWVyXCIpID09IDAgdGhlbiBiZWdpblxuICAgICAgICBsZXQgdmYgPSBJbnZ1bmVyYWJsZUZyYW1lLmdldCBlMiBpblxuICAgICAgICBpZiB2ZiA9PSAwIHRoZW4gYmVnaW5cbiAgICAgICAgICAhcGxheWVyX3N0YXRlLmhlYWx0aCA8LSAhcGxheWVyX3N0YXRlLmhlYWx0aC0xO1xuICAgICAgICAgIHVwZGF0ZV9oZWFsdGggKCk7XG4gICAgICAgICAgSW52dW5lcmFibGVGcmFtZS5zZXQgZTIgNjU7XG4gICAgICAgICAgTWluZS5kZXN0cnVjdGlvbiBlMTtcbiAgICAgICAgZW5kO1xuICAgICAgZW5kXG5cbiAgbGV0IGNvbGxpc2lvbkZpcmViYWxsIGUxIGUyID1cbiAgICBsZXQgbmFtZSA9IE5hbWUuZ2V0IGUyIGluXG4gICAgICBpZiAoU3RyaW5nLmNvbXBhcmUgbmFtZSBcInBsYXllclwiKSA9PSAwIHRoZW4gYmVnaW5cbiAgICAgICAgbGV0IHZmID0gSW52dW5lcmFibGVGcmFtZS5nZXQgZTIgaW5cbiAgICAgICAgaWYgdmYgPT0gMCB0aGVuIGJlZ2luXG4gICAgICAgICAgIXBsYXllcl9zdGF0ZS5oZWFsdGggPC0gIXBsYXllcl9zdGF0ZS5oZWFsdGgtMTtcbiAgICAgICAgICB1cGRhdGVfaGVhbHRoICgpO1xuICAgICAgICAgIEludnVuZXJhYmxlRnJhbWUuc2V0IGUyIDY1O1xuICAgICAgICAgIEZpcmViYWxsLmRlbGV0ZSBlMTtcbiAgICAgICAgZW5kO1xuICAgICAgICBcbiAgICAgIGVuZFxuICAgICAgZWxzZSBpZiAoKFN0cmluZy5jb21wYXJlIG5hbWUgXCJ3YWxsXCIpID09IDAgKSB8fCgoU3RyaW5nLmNvbXBhcmUgbmFtZSBcImJvdHRvbVwiKSA9PSAwICl8fCgoU3RyaW5nLmNvbXBhcmUgbmFtZSBcInRvcFwiKSA9PSAwICl8fCgoU3RyaW5nLmNvbXBhcmUgbmFtZSBcInJpZ2h0XCIpID09IDAgKXx8KChTdHJpbmcuY29tcGFyZSBuYW1lIFwibGVmdFwiKSA9PSAwICkgdGhlbiBiZWdpbiAgICAgIFxuICAgICAgICAgIEZpcmViYWxsLmRlbGV0ZSBlMTtcbiAgICAgICAgZW5kXG5cbmxldCBzcGF3bk1pbmUgaW1nIGUgPSBcbiAgbGV0IHBvcyA9IFBvc2l0aW9uLmdldCBlIGluXG4gIGxldCBtaW5lID0gTWluZS5jcmVhdGUgcG9zLnggcG9zLnkgaW1nIGluXG4gIENvbGxpc2lvblJlc29sdmVyLnNldCBtaW5lIGNvbGxpc2lvbk1pbmU7XG4gIGxvYWRfZW5uZW1pZSBtaW5lO1xuICBhZGRfb2JzdGFjbGUgbWluZTtcbiAgKClcblxuKCpWZWN0ZXVyIGVuIGRpcmVjdGlvbiBkdSBqb3VldXIgb24gbm9ybWFsaXNlIHNpbm9uIGxhIHZpdGVzc2UgZMOpcGVuZCBkZSBsYSBkaXN0YW5jZSBlbnRyZSBsJ2VubmVtaWUgZXQgbGUgam91ZXVyKilcbmxldCBhaW1QbGF5ZXIgcG9zMSBwb3MyID0gXG4gIGxldCBkaWZmID0gVmVjdG9yLnN1YiBwb3MyIHBvczEgaW5cbiAgKFZlY3Rvci5tdWx0IDIwMC4gKFZlY3Rvci5ub3JtYWxpemUgZGlmZikpXG5cblxuXG5sZXQgc2hvdEZpcmViYWxsIGltZyBlID0gXG4gIGxldCBwb3MgPSBQb3NpdGlvbi5nZXQgZSBpblxuICBsZXQgcGxheWVyID0gZnN0IChMaXN0LmZpbmQgKGZ1biBrdiAtPiAoU3RyaW5nLmNvbXBhcmUgKHNuZCBrdikgXCJwbGF5ZXJcIik9PTAgKSAoTmFtZS5tZW1iZXJzICgpKSkgaW5cbiAgbGV0IHBvczIgPSBQb3NpdGlvbi5nZXQgcGxheWVyIGluXG4gIGxldCB2ZWwgPSBhaW1QbGF5ZXIgcG9zIHBvczIgaW5cblxuICBsZXQgZmIgPSBGaXJlYmFsbC5jcmVhdGUgXCJmaXJlYmFsbFwiIHBvcy54IHBvcy55IGltZyB2ZWwueCB2ZWwueSAxLiBpblxuICBDb2xsaXNpb25SZXNvbHZlci5zZXQgZmIgY29sbGlzaW9uRmlyZWJhbGw7XG4gIGxvYWRfZW5uZW1pZSBmYjtcbiAgYWRkX29ic3RhY2xlIGZiO1xuICAoKVxuXG5sZXQgY29sbGlzaW9uRW5uZW15IF9lbm5lbXkgZSA9XG4gIGxldCBuYW1lID0gTmFtZS5nZXQgZSBpblxuIFxuICAgIGlmIChTdHJpbmcuY29tcGFyZSBuYW1lIFwicGxheWVyXCIpID09IDAgdGhlbiBiZWdpblxuICAgICAgbGV0IHZmID0gSW52dW5lcmFibGVGcmFtZS5nZXQgZSBpblxuICAgICAgaWYgdmYgPT0gMCB0aGVuIGJlZ2luXG4gICAgICAgICFwbGF5ZXJfc3RhdGUuaGVhbHRoIDwtICFwbGF5ZXJfc3RhdGUuaGVhbHRoLTE7XG4gICAgICAgIHVwZGF0ZV9oZWFsdGggKCk7XG4gICAgICAgIEludnVuZXJhYmxlRnJhbWUuc2V0IGUgNjU7XG4gICAgICBlbmQ7XG4gICAgZW5kXG5cblxubGV0IHJhbmRvbV9lbm5lbXkgeCB5IGltYWdlcz1cbiAgUmFuZG9tLnNlbGZfaW5pdCAoKTtcbiAgbGV0IHIgPSByYW5kb21fYmV0d2VlbiAwIDMgaW5cbiAgbWF0Y2ggciB3aXRoIFxuICB8IDAgLT4gR29iZWxpbi5jcmVhdGUgeCB5IChIYXNodGJsLmZpbmQgaW1hZ2VzIFwiZ29iZWxpbl9pbWdcIikgKCFzdGF0ZS5mbG9vcilcbiAgfCAxIC0+IGxldCBzcGlkZXIgPSBTcGlkZXIuY3JlYXRlIHggeSAoSGFzaHRibC5maW5kIGltYWdlcyBcInNwaWRlcl9pbWdcIikgKCFzdGF0ZS5mbG9vcikgaW4gIENwdC5zZXQgc3BpZGVyICh7Y3B0ID0gU3lzLnRpbWUgKCk7IGFjdGlvbiA9IChzcGF3bk1pbmUgKEhhc2h0YmwuZmluZCBpbWFnZXMgXCJ3ZWJfaW1nXCIpKSB9KTsgc3BpZGVyXG4gIHwgMiAtPiBsZXQgc2tlbGV0b24gPSBTa2VsZXRvbi5jcmVhdGUgeCB5IChIYXNodGJsLmZpbmQgaW1hZ2VzIFwic2tlbGV0b25faW1nXCIpICghc3RhdGUuZmxvb3IpIGluIENwdC5zZXQgc2tlbGV0b24gKHtjcHQgPSBTeXMudGltZSAoKTsgYWN0aW9uID0gKHNob3RGaXJlYmFsbCAoSGFzaHRibC5maW5kIGltYWdlcyBcImZpcmViYWxsX2ltZ1wiKSkgfSk7IHNrZWxldG9uXG4gIHwgXyAtPiBHb2JlbGluLmNyZWF0ZSB4IHkgKEhhc2h0YmwuZmluZCBpbWFnZXMgXCJnb2JlbGluX2ltZ1wiKSAoIXN0YXRlLmZsb29yKVxuXG5cbigqTGVzIGVubmVtaWVzIHNwYXduIGxvaW4gZHUgbWlsaWV1IGV0IGRlcyBwb3J0ZXMgKilcbmxldCByYW5kb21fc3Bhd24gKCkgPSBcbiAgUmFuZG9tLnNlbGZfaW5pdCAoKTtcbiAgbGV0IHIgPSByYW5kb21fYmV0d2VlbiAwIDQgaW5cbiAgbWF0Y2ggciB3aXRoIFxuICB8IDAgLT4gKChyYW5kb21fYmV0d2Vlbl9mbG9hdCA4MC4gMjQwLiksIChyYW5kb21fYmV0d2Vlbl9mbG9hdCAxNjAuIDI4MC4pKVxuICB8IDEgLT4gKChyYW5kb21fYmV0d2Vlbl9mbG9hdCA1NDAuIDY4MC4pLCAocmFuZG9tX2JldHdlZW5fZmxvYXQgMTYwLiAyODAuKSlcbiAgfCAyIC0+ICgocmFuZG9tX2JldHdlZW5fZmxvYXQgNTQwLiA2ODAuKSwgKHJhbmRvbV9iZXR3ZWVuX2Zsb2F0IDQwMC4gNTQwLikpXG4gIHwgMyAtPiAoKHJhbmRvbV9iZXR3ZWVuX2Zsb2F0IDgwLiAyNDAuKSwgKHJhbmRvbV9iZXR3ZWVuX2Zsb2F0IDQwMC4gNTQwLikpXG4gIHwgXyAtPiAoKHJhbmRvbV9iZXR3ZWVuX2Zsb2F0IDgwLiAyNDAuKSwgKHJhbmRvbV9iZXR3ZWVuX2Zsb2F0IDE2MC4gMjgwLikpXG5cbmxldCBnZW5lcmF0ZV9lbm5lbWllcyBuYiBpbWFnZXM9IFxuICBsZXQgcmVjIGF1eCAgbmIgaW1hZ2VzPSBcbiAgICBtYXRjaCBuYiB3aXRoIFxuICAgIDAgLT4gW11cbiAgICB8IF8gLT5cbiAgICAgIGxldCBzcGF3biA9IHJhbmRvbV9zcGF3biAoKSAgaW5cbiAgICAgIGxldCB4ID0gZnN0IHNwYXduIGluXG4gICAgICBsZXQgeSA9IHNuZCBzcGF3biBpbiBcbiAgICAgIGxldCBlID0gcmFuZG9tX2VubmVteSB4IHkgaW1hZ2VzIGluXG4gICAgICBlOjooYXV4IChuYi0xKSBpbWFnZXMpXG4gIGluXG4gIGF1eCBuYiBpbWFnZXNcblxuKCogR8OpbsOpcmUgdW5lIG1hcCBkZSBuIHNhbGxlcyopXG5sZXQgZ2VuZXJhdGVfbWFwIGEgcCBuIGltYWdlcz1cbmxldCBtYXAgPSBMaXN0LmluaXQgbiAoZnVuIGUgLT4gXG4gIGxldCBlbnRpdHkgPSBNYXAuY3JlYXRlIFwibWFwXCIgMC4gODAuIHAgYSA0MCBpblxuICBsZXQgZmxvb3IgPSAoZ2V0X3N0YXRlICgpKS5mbG9vciBpblxuICBsZXQgbmJFbm5lbWllcyA9IChyYW5kb21fYmV0d2VlbiBmbG9vciAoZmxvb3IrMikpIGluXG4gIGxldCBlbm5lbWllcyA9IGdlbmVyYXRlX2VubmVtaWVzIG5iRW5uZW1pZXMgaW1hZ2VzIGluXG4gIExpc3QuaXRlciAoZnVuIGUgLT4gQ29sbGlzaW9uUmVzb2x2ZXIuc2V0IGUgY29sbGlzaW9uRW5uZW15KSBlbm5lbWllcztcbiAgbGV0IG9ic3RhY2xlcyA9IFtdIGluXG4gIExpc3QuaXRlciAoZnVuIGUgLT4gQ29sbGlzaW9uUmVzb2x2ZXIuc2V0IGUgY29sbGlzaW9uTWluZSkgb2JzdGFjbGVzO1xuICB7aWQ9ZW50aXR5O2VubmVtaWVzPWVubmVtaWVzO29ic3RhY2xlcz1vYnN0YWNsZXM7aW5kZXg9ZTt2YWx1ZT1hO2Rvb3JzPShBcnJheS5pbml0IDQgKGZ1biBfZSAtPiAoZmFsc2UsLTEpKSl9IFxuICApaW5cbiAgQXJyYXkub2ZfbGlzdCAocGF0aCBtYXApXG4gIFxubGV0IGRpc2FibGVfZG9vciBlID1cbiAgRHJhd19TLnVucmVnaXN0ZXIgZTtcbiAgQ29sbGlzaW9uX1MudW5yZWdpc3RlciBlO1xuICAoKVxuXG5sZXQgZW5hYmxlX2Rvb3IgZSA9XG4gIERyYXdfUy5yZWdpc3RlciBlO1xuICBDb2xsaXNpb25fUy5yZWdpc3RlciBlO1xuICAoKVxuXG5sZXQgZW5hYmxlX3dhbGwgZSA9XG4gIENvbGxpc2lvbl9TLnJlZ2lzdGVyIGU7XG4gICgpXG4gICAgICBcbmxldCBkaXNhYmxlX3dhbGwgZSA9XG4gIENvbGxpc2lvbl9TLnVucmVnaXN0ZXIgZTtcbiAgKClcblxuKCpDaGFuZ2UgbGVzIHBvcnRlcyBkZSBsYSBzYWxsZSopXG5sZXQgY2hhbmdlX2Rvb3IgKCkgPVxuICBsZXQgZCA9ICFzdGF0ZS5jdXJyZW50Um9vbS5kb29ycyBpblxuICBsZXQgZF9lID0gIXN0YXRlLmRvb3JzX2VudGl0eSBpblxuICBsZXQgd19lID0gIXN0YXRlLndhbGxzX2VudGl0eSBpblxuICBmb3IgaSA9IDAgdG8gMyBkb1xuICBpZiAoZnN0IChBcnJheS5nZXQgZCBpKSkgdGhlbiBiZWdpblxuICAgIGVuYWJsZV9kb29yIChBcnJheS5nZXQgZF9lIGkpO1xuICAgIGRpc2FibGVfd2FsbCAoQXJyYXkuZ2V0IHdfZSBpKTtcbiAgICBlbmRcbiAgZWxzZSBiZWdpbiBcbiAgICBkaXNhYmxlX2Rvb3IgKEFycmF5LmdldCBkX2UgaSk7XG4gICAgZW5hYmxlX3dhbGwgKEFycmF5LmdldCB3X2UgaSk7XG4gICAgZW5kXG4gIGRvbmVcblxubGV0IGdldF9kb29yIG5hbWUgPSBcbiAgaWYgKFN0cmluZy5jb21wYXJlIG5hbWUgXCJsZWZ0XCIpPT0wIHRoZW4gKEFycmF5LmdldCAhc3RhdGUuY3VycmVudFJvb20uZG9vcnMgMClcbiAgZWxzZSBpZiAoU3RyaW5nLmNvbXBhcmUgbmFtZSBcInRvcFwiKT09MCB0aGVuIChBcnJheS5nZXQgIXN0YXRlLmN1cnJlbnRSb29tLmRvb3JzIDEpXG4gIGVsc2UgaWYgKFN0cmluZy5jb21wYXJlIG5hbWUgXCJyaWdodFwiKT09MCB0aGVuKEFycmF5LmdldCAhc3RhdGUuY3VycmVudFJvb20uZG9vcnMgMilcbiAgZWxzZSBpZiAoU3RyaW5nLmNvbXBhcmUgbmFtZSBcImJvdHRvbVwiKT09MCB0aGVuKEFycmF5LmdldCAhc3RhdGUuY3VycmVudFJvb20uZG9vcnMgMylcbiAgZWxzZSAoZmFsc2UsMSlcblxuXG4oKiB1cGRhdGUgbCdpbnRlcmZhY2UqKVxubGV0IHVwZGF0ZV9vYmogKCkgPVxuICBsZXQgeCA9IDU1LiBpblxuICBsZXQgeSA9IDE3LjUgaW5cbiAgTGlzdC5pdGVyaSAoZnVuIGkgZSAtPlxuICAgIERyYXdfUy5yZWdpc3RlciBlO1xuICAgIE9iamV0LmNoYW5nZVBvcyBlICgxMjAuKy4oeCouKGZsb2F0X29mX2ludCBpKSkpIHk7XG4gICAgKSAhaW50ZXJmYWNlLm9ial9lbnRpdHk7XG4gICgpXG4gIFxuKCpBam91dGUgdW4gaXRlbSBhbMOpYXRvaXJlbWVudCopXG5sZXQgYXBwZW5kaXRlbSAoKSA9XG4gICAgbGV0IGl0ZW1wb29sID0gIXN0YXRlLml0ZW1wb29sIGluXG4gICAgbGV0IG9ial9lbnRpdHkgPSAhaW50ZXJmYWNlLm9ial9lbnRpdHkgaW5cbiAgICBsZXQgcGxheWVyID0gZ2V0X3BsYXllciAoKSBpblxuICAgIGxldCBvbGRfc3RhdHMgPSBTdGF0aXN0aWNzLmdldCBwbGF5ZXIgaW5cbiAgICBSYW5kb20uc2VsZl9pbml0ICgpO1xuICAgIGxldCByID0gcmFuZG9tX2JldHdlZW4gMCAoTGlzdC5sZW5ndGggaXRlbXBvb2wpaW5cbiAgICBsZXQgaXRlbSA9IChMaXN0Lm50aCBpdGVtcG9vbCByKSBpblxuICAgIHNldF9pdGVtcG9vbCAoTGlzdC5maWx0ZXIgKGZ1biBlIC0+IGUgPD4gaXRlbSkgaXRlbXBvb2wpO1xuICAgIHNldF9vYmogKGl0ZW06Om9ial9lbnRpdHkpO1xuICAgIFN0YXRpc3RpY3Muc2V0IHBsYXllciAoU3RhdHMuYWRkU3RhdCBvbGRfc3RhdHMgKFN0YXRpc3RpY3MuZ2V0IGl0ZW0pKTtcbiAgICB1cGRhdGVfb2JqICgpO1xuICAgICgpXG5cblxuICgqIENoYW5nZSBkZSBzYWxsZSopICAgICAgIFxubGV0IGNoYW5nZV9yb29tIGUgPVxuICBsZXQgbmFtZSA9IE5hbWUuZ2V0IGUgaW5cbiAgbGV0IHIgPSBzbmQgKGdldF9kb29yIG5hbWUpIGluXG4gIGxldCByb29tID0gKEFycmF5LmdldCAhc3RhdGUubWFwIHIpaW5cbiAgbGV0IG9sZF9yb29tID0gIXN0YXRlLmN1cnJlbnRSb29tIGluXG4gIHN0YXRlIDo9IHsgIXN0YXRlIHdpdGggY3VycmVudFJvb20gPSByb29tO307XG4gIExpc3QuaXRlciAoZnVuIGUgLT4gdW5sb2FkX2VubmVtaWUgZSkgb2xkX3Jvb20uZW5uZW1pZXM7XG4gIExpc3QuaXRlciAoZnVuIGUgLT5cbiAgICBpZiAoQWN0aXZlLmhhc19jb21wb25lbnQgZSkgdGhlblxuICAgICAgYmVnaW4gICAgICBcbiAgICAgICAgaWYgKEFjdGl2ZS5nZXQgZSl0aGVuICBsb2FkX2VubmVtaWUgZSBcbiAgICAgIGVuZFxuICAgIGVsc2UgKClcbiAgICApIHJvb20uZW5uZW1pZXM7XG4gIExpc3QuaXRlciAoZnVuIGUgLT4gdW5sb2FkX2VubmVtaWUgZSkgb2xkX3Jvb20ub2JzdGFjbGVzO1xuICBMaXN0Lml0ZXIgKGZ1biBlIC0+XG4gIGlmIChBY3RpdmUuaGFzX2NvbXBvbmVudCBlKSB0aGVuXG4gICAgYmVnaW4gICAgICBcbiAgICAgIGlmIChBY3RpdmUuZ2V0IGUpdGhlbiAgbG9hZF9lbm5lbWllIGUgXG4gICAgZW5kXG4gIGVsc2UgKClcbiAgKSByb29tLm9ic3RhY2xlcztcbiAgY2hhbmdlX2Rvb3IgKCkgICAgICAgIFxuXG5sZXQgY29sbGlzaW9uIGRvb3IgZSA9IFxuICBsZXQgbmFtZSA9IE5hbWUuZ2V0IGUgaW5cbiAgaWYgKFN0cmluZy5jb21wYXJlIG5hbWUgXCJwbGF5ZXJcIikgPT0gMCB0aGVuIGJlZ2luXG4gICAgY2hhbmdlX3Jvb20gZG9vcjtcbiAgICBQb3NpdGlvbi5zZXQgZSAoVGVsZXBvcnQuZ2V0IGRvb3IpO1xuICBlbmRcbiAgZWxzZSBpZiAoU3RyaW5nLmNvbXBhcmUgbmFtZSBcInNwaWRlclwiKSA9PSAwIHRoZW5cbiAgICBXYWxsLmNvbGxpc2lvbiBkb29yIGVcblxuXG5cbmxldCBsb290IF9wbGF5ZXIgb2JqID0gXG4gIGxldCBuYW1lID0gTmFtZS5nZXQgb2JqIGluXG4gIGlmIChTdHJpbmcuY29tcGFyZSBuYW1lIFwiaGVhcnRcIikgPT0gMCB0aGVuIGJlZ2luXG4gICAgICBpZiAhcGxheWVyX3N0YXRlLmhlYWx0aCA8IDMgdGhlbiBiZWdpblxuICAgICAgICAhcGxheWVyX3N0YXRlLmhlYWx0aCA8LSAhcGxheWVyX3N0YXRlLmhlYWx0aCArMTtcbiAgICAgICAgdXBkYXRlX2hlYWx0aCAoKTtcbiAgICAgICAgQ29uc3VtYWJsZS5kZWFkIG9ialxuICAgICAgZW5kXG4gIGVuZCAgICBcblxuICBcblxuKCogQ2hhbmdlIGQnw6l0YWdlKilcbmxldCBjaGFuZ2VfZmxvb3IgbWFwID0gXG4gIGxldCBmbG9vciA9IChnZXRfc3RhdGUgKCkpLmZsb29yIGluXG4gIGxldCBwbGF5ZXIgPSBmc3QgKExpc3QuZmluZCAoZnVuIGt2IC0+IChTdHJpbmcuY29tcGFyZSAoc25kIGt2KSBcInBsYXllclwiKT09MCApIChOYW1lLm1lbWJlcnMgKCkpKSBpblxuICBsZXQgaXRlbXBvb2wgPSAhc3RhdGUuaXRlbXBvb2wgaW5cbiAgbGV0IG9iaiA9IGdldF9vYmogKClpblxuICBpZiAoKExpc3QubGVuZ3RoIGl0ZW1wb29sKT4wKSAmJiAoKExpc3QubGVuZ3RoIG9iaik8NikgdGhlbiBiZWdpbiBhcHBlbmRpdGVtICgpOyBlbmQ7XG4gIExpc3QuaXRlciAoZnVuIGUgLT4gdW5sb2FkX2VubmVtaWUgZSkgIXN0YXRlLmN1cnJlbnRSb29tLm9ic3RhY2xlcztcbiAgc3RhdGUgOj0geyFzdGF0ZSB3aXRoIGZsb29yID0gZmxvb3IrMTtpc1BsYXlpbmcgPSB0cnVlOyBtYXAgPSBtYXA7Y3VycmVudFJvb209KEFycmF5LmdldCBtYXAgMCk7fTtcbiAgRHJhd19TLnJlZ2lzdGVyICFzdGF0ZS5jdXJyZW50Um9vbS5pZDtcbiAgTGlzdC5pdGVyIChmdW4gZSAtPiBsb2FkX2VubmVtaWUgZSkgIXN0YXRlLmN1cnJlbnRSb29tLmVubmVtaWVzO1xuICBMaXN0Lml0ZXIgKGZ1biBlIC0+IGxvYWRfZW5uZW1pZSBlKSAhc3RhdGUuY3VycmVudFJvb20ub2JzdGFjbGVzO1xuICBQb3NpdGlvbi5zZXQgcGxheWVyIHt4PTQwMC47eT0zNDAufTtcbiAgdXBkYXRlX2hlYWx0aCAoKTsgIFxuICB1cGRhdGVfY291bnRfZiAoKTsgXG4gIGNoYW5nZV9kb29yICgpXG5cbiAgXG5cblxuXG5sZXQgaW5pdCBwZTEgbWFwIGltYWdlcyBpdGVtcG9vbD1cbiAgbGV0IGRvb3JzSW5pdCA9IFt8KERvb3IuY3JlYXRlIFwibGVmdFwiIDQwLiAzMjAuIDY2MC4gMzIwLik7KERvb3IuY3JlYXRlIFwidG9wXCIgNDAwLiAxMjAuIDQwMC4gNTAwLik7KERvb3IuY3JlYXRlIFwicmlnaHRcIiA3MjAuIDMyMC4gMTAwLiAzMjAuKTsoRG9vci5jcmVhdGUgXCJib3R0b21cIiA0MDAuIDU2MC4gNDAwLiAxODAuKSB8XWluXG4gIGxldCB3YWxsc0luaXQgPSBbfChXYWxsLmNyZWF0ZSA0MC4gMzIwLiA0MCA0MCk7KFdhbGwuY3JlYXRlIDQwMC4gMTIwLiA0MCA0MCk7KFdhbGwuY3JlYXRlIDcyMC4gMzIwLiA0MCA0MCk7KFdhbGwuY3JlYXRlIDQwMC4gNTYwLiA0MCA0MCl8XSBpblxuICBsZXQgZV9pbmZvID0gSW5mby5jcmVhdGUgNjAwLiAyNS4gXCJpbmZvX2VcIiAoSGFzaHRibC5maW5kIGltYWdlcyBcImVfaW5mb19pbWdcIiApIFwiMFwiIDM1IDM1IDQwLiAyNS4gaW5cbiAgbGV0IGZfaW5mbyA9IEluZm8uY3JlYXRlIDcwMC4gMjAuIFwiaW5mb19mXCIgKEhhc2h0YmwuZmluZCBpbWFnZXMgXCJmX2luZm9faW1nXCIpIFwiMFwiIDQ1IDQ1IDUwLiAzMC4gaW5cbiAgQXJyYXkuaXRlciAoZnVuIGUgLT4gQ29sbGlzaW9uUmVzb2x2ZXIuc2V0IGUgY29sbGlzaW9uKSBkb29yc0luaXQ7XG4gIHN0YXRlIDo9IHsgIGZsb29yID0gMTsgbWFwID0gbWFwO2N1cnJlbnRSb29tPShBcnJheS5nZXQgbWFwIDApO2lzUGxheWluZyA9IHRydWU7IHBsYXllciA9IHBlMTtkb29yc19lbnRpdHkgPSBkb29yc0luaXQ7d2FsbHNfZW50aXR5ID0gd2FsbHNJbml0OyBpdGVtcG9vbCA9IGl0ZW1wb29sO307XG4gIERyYXdfUy5yZWdpc3RlciAhc3RhdGUuY3VycmVudFJvb20uaWQ7XG4gIExpc3QuaXRlciAoZnVuIGUgLT4gbG9hZF9lbm5lbWllIGUpICFzdGF0ZS5jdXJyZW50Um9vbS5lbm5lbWllcztcbiAgTGlzdC5pdGVyIChmdW4gZSAtPiBsb2FkX2VubmVtaWUgZSkgIXN0YXRlLmN1cnJlbnRSb29tLm9ic3RhY2xlcztcbiAgcGxheWVyX3N0YXRlIDo9IHtoZWFsdGggPTN9O1xuICBDb2xsaXNpb25SZXNvbHZlci5zZXQgcGUxIGxvb3Q7XG4gIGludGVyZmFjZSA6PSB7IWludGVyZmFjZSB3aXRoIGZfaW5mbyA9IGZfaW5mbzsgZV9pbmZvID0gZV9pbmZvOyBvYmpfZW50aXR5ID1bXTsgIHZpZV9lbnRpdHkgPSAoQXJyYXkuaW5pdCA1IChmdW4gZSAtPiBIZWFydC5jcmVhdGUgKCgyMC4qLihmbG9hdF9vZl9pbnQgZSkpKy4yMC4pIDIwLiAoSGFzaHRibC5maW5kIGltYWdlcyBcImhlYXJ0X2ltZ1wiKSkpO2JhY2tncm91bmQgPSAoQmFja2dyb3VuZC5jcmVhdGUgMC4gMC4pfTtcbiAgdXBkYXRlX2hlYWx0aCAoKTtcbiAgdXBkYXRlX2NvdW50X2UgKCk7XG4gIHVwZGF0ZV9jb3VudF9mICgpO1xuICBjaGFuZ2VfZG9vciAoKTtcbiAgKCkgXG5cbiAgICBcblxuXG5cblxuXG5cbiJdfQ==
