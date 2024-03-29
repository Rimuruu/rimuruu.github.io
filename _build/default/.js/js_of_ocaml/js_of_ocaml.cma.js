(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_exn_with_js_backtrace=runtime.caml_exn_with_js_backtrace,
     caml_float_of_string=runtime.caml_float_of_string,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_int_of_string=runtime.caml_int_of_string,
     caml_js_from_array=runtime.caml_js_from_array,
     caml_js_get=runtime.caml_js_get,
     caml_js_html_escape=runtime.caml_js_html_escape,
     caml_js_set=runtime.caml_js_set,
     caml_js_wrap_callback=runtime.caml_js_wrap_callback,
     caml_js_wrap_meth_callback=runtime.caml_js_wrap_meth_callback,
     caml_jsbytes_of_string=runtime.caml_jsbytes_of_string,
     caml_jsstring_of_string=runtime.caml_jsstring_of_string,
     caml_list_of_js_array=runtime.caml_list_of_js_array,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_array=runtime.caml_string_of_array,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_of_jsstring=runtime.caml_string_of_jsstring,
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
    var
     global_data=runtime.caml_get_global_data(),
     cst_parseFloat=caml_string_of_jsbytes("parseFloat"),
     cst_parseInt=caml_string_of_jsbytes("parseInt"),
     cst_Js_of_ocaml_Js_Error=caml_string_of_jsbytes("Js_of_ocaml__Js.Error"),
     cst_jsError=caml_string_of_jsbytes("jsError"),
     cst_can_t_retrieve_file_name_n=
      caml_string_of_jsbytes("can't retrieve file name: not implemented"),
     cst_endings=caml_string_of_jsbytes("endings"),
     cst_type=caml_string_of_jsbytes("type"),
     cst_loadstart=caml_string_of_jsbytes("loadstart"),
     cst_progress=caml_string_of_jsbytes("progress"),
     cst_abort=caml_string_of_jsbytes("abort"),
     cst_error=caml_string_of_jsbytes("error"),
     cst_load=caml_string_of_jsbytes("load"),
     cst_loadend=caml_string_of_jsbytes("loadend"),
     cst_a$1=caml_string_of_jsbytes("a"),
     cst_area$1=caml_string_of_jsbytes("area"),
     cst_audio$1=caml_string_of_jsbytes("audio"),
     cst_base$1=caml_string_of_jsbytes("base"),
     cst_blockquote$1=caml_string_of_jsbytes("blockquote"),
     cst_body$1=caml_string_of_jsbytes("body"),
     cst_br$1=caml_string_of_jsbytes("br"),
     cst_button$1=caml_string_of_jsbytes("button"),
     cst_canvas$1=caml_string_of_jsbytes("canvas"),
     cst_caption$1=caml_string_of_jsbytes("caption"),
     cst_col$1=caml_string_of_jsbytes("col"),
     cst_colgroup$1=caml_string_of_jsbytes("colgroup"),
     cst_del$1=caml_string_of_jsbytes("del"),
     cst_div$1=caml_string_of_jsbytes("div"),
     cst_dl$1=caml_string_of_jsbytes("dl"),
     cst_embed$1=caml_string_of_jsbytes("embed"),
     cst_fieldset$1=caml_string_of_jsbytes("fieldset"),
     cst_form$1=caml_string_of_jsbytes("form"),
     cst_frame$1=caml_string_of_jsbytes("frame"),
     cst_frameset$1=caml_string_of_jsbytes("frameset"),
     cst_h1$1=caml_string_of_jsbytes("h1"),
     cst_h2$1=caml_string_of_jsbytes("h2"),
     cst_h3$1=caml_string_of_jsbytes("h3"),
     cst_h4$1=caml_string_of_jsbytes("h4"),
     cst_h5$1=caml_string_of_jsbytes("h5"),
     cst_h6$1=caml_string_of_jsbytes("h6"),
     cst_head$1=caml_string_of_jsbytes("head"),
     cst_hr$1=caml_string_of_jsbytes("hr"),
     cst_html$1=caml_string_of_jsbytes("html"),
     cst_iframe$1=caml_string_of_jsbytes("iframe"),
     cst_img$1=caml_string_of_jsbytes("img"),
     cst_input$2=caml_string_of_jsbytes("input"),
     cst_ins$1=caml_string_of_jsbytes("ins"),
     cst_label$1=caml_string_of_jsbytes("label"),
     cst_legend$1=caml_string_of_jsbytes("legend"),
     cst_li$1=caml_string_of_jsbytes("li"),
     cst_link$1=caml_string_of_jsbytes("link"),
     cst_map$1=caml_string_of_jsbytes("map"),
     cst_meta$1=caml_string_of_jsbytes("meta"),
     cst_object$1=caml_string_of_jsbytes("object"),
     cst_ol$1=caml_string_of_jsbytes("ol"),
     cst_optgroup$1=caml_string_of_jsbytes("optgroup"),
     cst_option$1=caml_string_of_jsbytes("option"),
     cst_p$1=caml_string_of_jsbytes("p"),
     cst_param$1=caml_string_of_jsbytes("param"),
     cst_pre$1=caml_string_of_jsbytes("pre"),
     cst_q$1=caml_string_of_jsbytes("q"),
     cst_script$1=caml_string_of_jsbytes("script"),
     cst_select$2=caml_string_of_jsbytes("select"),
     cst_style$1=caml_string_of_jsbytes("style"),
     cst_table$1=caml_string_of_jsbytes("table"),
     cst_tbody$1=caml_string_of_jsbytes("tbody"),
     cst_td$1=caml_string_of_jsbytes("td"),
     cst_textarea$1=caml_string_of_jsbytes("textarea"),
     cst_tfoot$1=caml_string_of_jsbytes("tfoot"),
     cst_th$1=caml_string_of_jsbytes("th"),
     cst_thead$1=caml_string_of_jsbytes("thead"),
     cst_title$1=caml_string_of_jsbytes("title"),
     cst_tr$1=caml_string_of_jsbytes("tr"),
     cst_ul$1=caml_string_of_jsbytes("ul"),
     cst_video$1=caml_string_of_jsbytes("video"),
     cst_KeyH=caml_string_of_jsbytes("KeyH"),
     cst_Digit6=caml_string_of_jsbytes("Digit6"),
     cst_BrowserRefresh=caml_string_of_jsbytes("BrowserRefresh"),
     cst_Backslash=caml_string_of_jsbytes("Backslash"),
     cst_AltLeft=caml_string_of_jsbytes("AltLeft"),
     cst_AltRight=caml_string_of_jsbytes("AltRight"),
     cst_ArrowDown=caml_string_of_jsbytes("ArrowDown"),
     cst_ArrowLeft=caml_string_of_jsbytes("ArrowLeft"),
     cst_ArrowRight=caml_string_of_jsbytes("ArrowRight"),
     cst_ArrowUp=caml_string_of_jsbytes("ArrowUp"),
     cst_Backquote=caml_string_of_jsbytes("Backquote"),
     cst_Backspace=caml_string_of_jsbytes("Backspace"),
     cst_BracketLeft=caml_string_of_jsbytes("BracketLeft"),
     cst_BracketRight=caml_string_of_jsbytes("BracketRight"),
     cst_BrowserBack=caml_string_of_jsbytes("BrowserBack"),
     cst_BrowserFavorites=caml_string_of_jsbytes("BrowserFavorites"),
     cst_BrowserForward=caml_string_of_jsbytes("BrowserForward"),
     cst_BrowserHome=caml_string_of_jsbytes("BrowserHome"),
     cst_Delete=caml_string_of_jsbytes("Delete"),
     cst_BrowserSearch=caml_string_of_jsbytes("BrowserSearch"),
     cst_BrowserStop=caml_string_of_jsbytes("BrowserStop"),
     cst_CapsLock=caml_string_of_jsbytes("CapsLock"),
     cst_Comma=caml_string_of_jsbytes("Comma"),
     cst_ContextMenu=caml_string_of_jsbytes("ContextMenu"),
     cst_ControlLeft=caml_string_of_jsbytes("ControlLeft"),
     cst_ControlRight=caml_string_of_jsbytes("ControlRight"),
     cst_Digit0=caml_string_of_jsbytes("Digit0"),
     cst_Digit1=caml_string_of_jsbytes("Digit1"),
     cst_Digit2=caml_string_of_jsbytes("Digit2"),
     cst_Digit3=caml_string_of_jsbytes("Digit3"),
     cst_Digit4=caml_string_of_jsbytes("Digit4"),
     cst_Digit5=caml_string_of_jsbytes("Digit5"),
     cst_F6=caml_string_of_jsbytes("F6"),
     cst_F1=caml_string_of_jsbytes("F1"),
     cst_Digit7=caml_string_of_jsbytes("Digit7"),
     cst_Digit8=caml_string_of_jsbytes("Digit8"),
     cst_Digit9=caml_string_of_jsbytes("Digit9"),
     cst_End=caml_string_of_jsbytes("End"),
     cst_Enter=caml_string_of_jsbytes("Enter"),
     cst_Equal=caml_string_of_jsbytes("Equal"),
     cst_Escape=caml_string_of_jsbytes("Escape"),
     cst_F10=caml_string_of_jsbytes("F10"),
     cst_F11=caml_string_of_jsbytes("F11"),
     cst_F12=caml_string_of_jsbytes("F12"),
     cst_F2=caml_string_of_jsbytes("F2"),
     cst_F3=caml_string_of_jsbytes("F3"),
     cst_F4=caml_string_of_jsbytes("F4"),
     cst_F5=caml_string_of_jsbytes("F5"),
     cst_KeyA=caml_string_of_jsbytes("KeyA"),
     cst_F7=caml_string_of_jsbytes("F7"),
     cst_F8=caml_string_of_jsbytes("F8"),
     cst_F9=caml_string_of_jsbytes("F9"),
     cst_Home=caml_string_of_jsbytes("Home"),
     cst_Insert=caml_string_of_jsbytes("Insert"),
     cst_IntlBackslash=caml_string_of_jsbytes("IntlBackslash"),
     cst_IntlYen=caml_string_of_jsbytes("IntlYen"),
     cst_KeyB=caml_string_of_jsbytes("KeyB"),
     cst_KeyC=caml_string_of_jsbytes("KeyC"),
     cst_KeyD=caml_string_of_jsbytes("KeyD"),
     cst_KeyE=caml_string_of_jsbytes("KeyE"),
     cst_KeyF=caml_string_of_jsbytes("KeyF"),
     cst_KeyG=caml_string_of_jsbytes("KeyG"),
     cst_Numpad4=caml_string_of_jsbytes("Numpad4"),
     cst_KeyX=caml_string_of_jsbytes("KeyX"),
     cst_KeyP=caml_string_of_jsbytes("KeyP"),
     cst_KeyI=caml_string_of_jsbytes("KeyI"),
     cst_KeyJ=caml_string_of_jsbytes("KeyJ"),
     cst_KeyK=caml_string_of_jsbytes("KeyK"),
     cst_KeyL=caml_string_of_jsbytes("KeyL"),
     cst_KeyM=caml_string_of_jsbytes("KeyM"),
     cst_KeyN=caml_string_of_jsbytes("KeyN"),
     cst_KeyO=caml_string_of_jsbytes("KeyO"),
     cst_KeyQ=caml_string_of_jsbytes("KeyQ"),
     cst_KeyR=caml_string_of_jsbytes("KeyR"),
     cst_KeyS=caml_string_of_jsbytes("KeyS"),
     cst_KeyT=caml_string_of_jsbytes("KeyT"),
     cst_KeyU=caml_string_of_jsbytes("KeyU"),
     cst_KeyV=caml_string_of_jsbytes("KeyV"),
     cst_KeyW=caml_string_of_jsbytes("KeyW"),
     cst_MetaRight=caml_string_of_jsbytes("MetaRight"),
     cst_KeyY=caml_string_of_jsbytes("KeyY"),
     cst_KeyZ=caml_string_of_jsbytes("KeyZ"),
     cst_MediaPlayPause=caml_string_of_jsbytes("MediaPlayPause"),
     cst_MediaStop=caml_string_of_jsbytes("MediaStop"),
     cst_MediaTrackNext=caml_string_of_jsbytes("MediaTrackNext"),
     cst_MediaTrackPrevious=caml_string_of_jsbytes("MediaTrackPrevious"),
     cst_MetaLeft=caml_string_of_jsbytes("MetaLeft"),
     cst_Minus=caml_string_of_jsbytes("Minus"),
     cst_NumLock=caml_string_of_jsbytes("NumLock"),
     cst_Numpad0=caml_string_of_jsbytes("Numpad0"),
     cst_Numpad1=caml_string_of_jsbytes("Numpad1"),
     cst_Numpad2=caml_string_of_jsbytes("Numpad2"),
     cst_Numpad3=caml_string_of_jsbytes("Numpad3"),
     cst_PageUp=caml_string_of_jsbytes("PageUp"),
     cst_NumpadDivide=caml_string_of_jsbytes("NumpadDivide"),
     cst_Numpad5=caml_string_of_jsbytes("Numpad5"),
     cst_Numpad6=caml_string_of_jsbytes("Numpad6"),
     cst_Numpad7=caml_string_of_jsbytes("Numpad7"),
     cst_Numpad8=caml_string_of_jsbytes("Numpad8"),
     cst_Numpad9=caml_string_of_jsbytes("Numpad9"),
     cst_NumpadAdd=caml_string_of_jsbytes("NumpadAdd"),
     cst_NumpadDecimal=caml_string_of_jsbytes("NumpadDecimal"),
     cst_NumpadEnter=caml_string_of_jsbytes("NumpadEnter"),
     cst_NumpadEqual=caml_string_of_jsbytes("NumpadEqual"),
     cst_NumpadMultiply=caml_string_of_jsbytes("NumpadMultiply"),
     cst_NumpadSubtract=caml_string_of_jsbytes("NumpadSubtract"),
     cst_OSLeft=caml_string_of_jsbytes("OSLeft"),
     cst_OSRight=caml_string_of_jsbytes("OSRight"),
     cst_PageDown=caml_string_of_jsbytes("PageDown"),
     cst_ShiftRight=caml_string_of_jsbytes("ShiftRight"),
     cst_Pause=caml_string_of_jsbytes("Pause"),
     cst_Period=caml_string_of_jsbytes("Period"),
     cst_PrintScreen=caml_string_of_jsbytes("PrintScreen"),
     cst_Quote=caml_string_of_jsbytes("Quote"),
     cst_ScrollLock=caml_string_of_jsbytes("ScrollLock"),
     cst_Semicolon=caml_string_of_jsbytes("Semicolon"),
     cst_ShiftLeft=caml_string_of_jsbytes("ShiftLeft"),
     cst_Slash=caml_string_of_jsbytes("Slash"),
     cst_Space=caml_string_of_jsbytes("Space"),
     cst_Tab=caml_string_of_jsbytes("Tab"),
     cst_VolumeDown=caml_string_of_jsbytes("VolumeDown"),
     cst_VolumeMute=caml_string_of_jsbytes("VolumeMute"),
     cst_VolumeUp=caml_string_of_jsbytes("VolumeUp"),
     cst_mouseout$0=caml_string_of_jsbytes("mouseout"),
     cst_mouseover$0=caml_string_of_jsbytes("mouseover"),
     cst_video$0=caml_string_of_jsbytes("video"),
     cst_audio$0=caml_string_of_jsbytes("audio"),
     cst_ul$0=caml_string_of_jsbytes("ul"),
     cst_tr$0=caml_string_of_jsbytes("tr"),
     cst_title$0=caml_string_of_jsbytes("title"),
     cst_thead$0=caml_string_of_jsbytes("thead"),
     cst_th$0=caml_string_of_jsbytes("th"),
     cst_tfoot$0=caml_string_of_jsbytes("tfoot"),
     cst_textarea$0=caml_string_of_jsbytes("textarea"),
     cst_td$0=caml_string_of_jsbytes("td"),
     cst_tbody$0=caml_string_of_jsbytes("tbody"),
     cst_table$0=caml_string_of_jsbytes("table"),
     cst_style$0=caml_string_of_jsbytes("style"),
     cst_select$1=caml_string_of_jsbytes("select"),
     cst_script$0=caml_string_of_jsbytes("script"),
     cst_q$0=caml_string_of_jsbytes("q"),
     cst_pre$0=caml_string_of_jsbytes("pre"),
     cst_param$0=caml_string_of_jsbytes("param"),
     cst_p$0=caml_string_of_jsbytes("p"),
     cst_option$0=caml_string_of_jsbytes("option"),
     cst_optgroup$0=caml_string_of_jsbytes("optgroup"),
     cst_ol$0=caml_string_of_jsbytes("ol"),
     cst_object$0=caml_string_of_jsbytes("object"),
     cst_meta$0=caml_string_of_jsbytes("meta"),
     cst_map$0=caml_string_of_jsbytes("map"),
     cst_link$0=caml_string_of_jsbytes("link"),
     cst_li$0=caml_string_of_jsbytes("li"),
     cst_legend$0=caml_string_of_jsbytes("legend"),
     cst_label$0=caml_string_of_jsbytes("label"),
     cst_ins$0=caml_string_of_jsbytes("ins"),
     cst_input$1=caml_string_of_jsbytes("input"),
     cst_img$0=caml_string_of_jsbytes("img"),
     cst_iframe$0=caml_string_of_jsbytes("iframe"),
     cst_html$0=caml_string_of_jsbytes("html"),
     cst_hr$0=caml_string_of_jsbytes("hr"),
     cst_head$0=caml_string_of_jsbytes("head"),
     cst_h6$0=caml_string_of_jsbytes("h6"),
     cst_h5$0=caml_string_of_jsbytes("h5"),
     cst_h4$0=caml_string_of_jsbytes("h4"),
     cst_h3$0=caml_string_of_jsbytes("h3"),
     cst_h2$0=caml_string_of_jsbytes("h2"),
     cst_h1$0=caml_string_of_jsbytes("h1"),
     cst_frame$0=caml_string_of_jsbytes("frame"),
     cst_frameset$0=caml_string_of_jsbytes("frameset"),
     cst_form$0=caml_string_of_jsbytes("form"),
     cst_embed$0=caml_string_of_jsbytes("embed"),
     cst_fieldset$0=caml_string_of_jsbytes("fieldset"),
     cst_dl$0=caml_string_of_jsbytes("dl"),
     cst_div$0=caml_string_of_jsbytes("div"),
     cst_del$0=caml_string_of_jsbytes("del"),
     cst_colgroup$0=caml_string_of_jsbytes("colgroup"),
     cst_col$0=caml_string_of_jsbytes("col"),
     cst_caption$0=caml_string_of_jsbytes("caption"),
     cst_canvas$0=caml_string_of_jsbytes("canvas"),
     cst_button$0=caml_string_of_jsbytes("button"),
     cst_br$0=caml_string_of_jsbytes("br"),
     cst_body$0=caml_string_of_jsbytes("body"),
     cst_blockquote$0=caml_string_of_jsbytes("blockquote"),
     cst_base$0=caml_string_of_jsbytes("base"),
     cst_area$0=caml_string_of_jsbytes("area"),
     cst_a$0=caml_string_of_jsbytes("a"),
     cst_canvas=caml_string_of_jsbytes("canvas"),
     cst_video=caml_string_of_jsbytes("video"),
     cst_audio=caml_string_of_jsbytes("audio"),
     cst_iframe=caml_string_of_jsbytes("iframe"),
     cst_frame=caml_string_of_jsbytes("frame"),
     cst_frameset=caml_string_of_jsbytes("frameset"),
     cst_address=caml_string_of_jsbytes("address"),
     cst_noscript=caml_string_of_jsbytes("noscript"),
     cst_dt=caml_string_of_jsbytes("dt"),
     cst_dd=caml_string_of_jsbytes("dd"),
     cst_abbr=caml_string_of_jsbytes("abbr"),
     cst_var=caml_string_of_jsbytes("var"),
     cst_kbd=caml_string_of_jsbytes("kbd"),
     cst_samp=caml_string_of_jsbytes("samp"),
     cst_code=caml_string_of_jsbytes("code"),
     cst_dfn=caml_string_of_jsbytes("dfn"),
     cst_cite=caml_string_of_jsbytes("cite"),
     cst_strong=caml_string_of_jsbytes("strong"),
     cst_em=caml_string_of_jsbytes("em"),
     cst_small=caml_string_of_jsbytes("small"),
     cst_big=caml_string_of_jsbytes("big"),
     cst_b=caml_string_of_jsbytes("b"),
     cst_i=caml_string_of_jsbytes("i"),
     cst_tt=caml_string_of_jsbytes("tt"),
     cst_span=caml_string_of_jsbytes("span"),
     cst_sup=caml_string_of_jsbytes("sup"),
     cst_sub=caml_string_of_jsbytes("sub"),
     cst_td=caml_string_of_jsbytes("td"),
     cst_th=caml_string_of_jsbytes("th"),
     cst_tr=caml_string_of_jsbytes("tr"),
     cst_tbody=caml_string_of_jsbytes("tbody"),
     cst_tfoot=caml_string_of_jsbytes("tfoot"),
     cst_thead=caml_string_of_jsbytes("thead"),
     cst_colgroup=caml_string_of_jsbytes("colgroup"),
     cst_col=caml_string_of_jsbytes("col"),
     cst_caption=caml_string_of_jsbytes("caption"),
     cst_table=caml_string_of_jsbytes("table"),
     cst_script=caml_string_of_jsbytes("script"),
     cst_area=caml_string_of_jsbytes("area"),
     cst_map=caml_string_of_jsbytes("map"),
     cst_param=caml_string_of_jsbytes("param"),
     cst_object=caml_string_of_jsbytes("object"),
     cst_img=caml_string_of_jsbytes("img"),
     cst_a=caml_string_of_jsbytes("a"),
     cst_del=caml_string_of_jsbytes("del"),
     cst_ins=caml_string_of_jsbytes("ins"),
     cst_hr=caml_string_of_jsbytes("hr"),
     cst_br=caml_string_of_jsbytes("br"),
     cst_pre=caml_string_of_jsbytes("pre"),
     cst_blockquote=caml_string_of_jsbytes("blockquote"),
     cst_q=caml_string_of_jsbytes("q"),
     cst_h6=caml_string_of_jsbytes("h6"),
     cst_h5=caml_string_of_jsbytes("h5"),
     cst_h4=caml_string_of_jsbytes("h4"),
     cst_h3=caml_string_of_jsbytes("h3"),
     cst_h2=caml_string_of_jsbytes("h2"),
     cst_h1=caml_string_of_jsbytes("h1"),
     cst_p=caml_string_of_jsbytes("p"),
     cst_embed=caml_string_of_jsbytes("embed"),
     cst_div=caml_string_of_jsbytes("div"),
     cst_li=caml_string_of_jsbytes("li"),
     cst_dl=caml_string_of_jsbytes("dl"),
     cst_ol=caml_string_of_jsbytes("ol"),
     cst_ul=caml_string_of_jsbytes("ul"),
     cst_legend=caml_string_of_jsbytes("legend"),
     cst_fieldset=caml_string_of_jsbytes("fieldset"),
     cst_label=caml_string_of_jsbytes("label"),
     cst_button=caml_string_of_jsbytes("button"),
     cst_textarea=caml_string_of_jsbytes("textarea"),
     cst_input$0=caml_string_of_jsbytes("input"),
     cst_select$0=caml_string_of_jsbytes("select"),
     cst_option=caml_string_of_jsbytes("option"),
     cst_optgroup=caml_string_of_jsbytes("optgroup"),
     cst_form=caml_string_of_jsbytes("form"),
     cst_body=caml_string_of_jsbytes("body"),
     cst_style=caml_string_of_jsbytes("style"),
     cst_base=caml_string_of_jsbytes("base"),
     cst_meta=caml_string_of_jsbytes("meta"),
     cst_title=caml_string_of_jsbytes("title"),
     cst_link=caml_string_of_jsbytes("link"),
     cst_head=caml_string_of_jsbytes("head"),
     cst_html=caml_string_of_jsbytes("html"),
     cst_click=caml_string_of_jsbytes("click"),
     cst_copy=caml_string_of_jsbytes("copy"),
     cst_cut=caml_string_of_jsbytes("cut"),
     cst_paste=caml_string_of_jsbytes("paste"),
     cst_dblclick=caml_string_of_jsbytes("dblclick"),
     cst_mousedown=caml_string_of_jsbytes("mousedown"),
     cst_mouseup=caml_string_of_jsbytes("mouseup"),
     cst_mouseover=caml_string_of_jsbytes("mouseover"),
     cst_mousemove=caml_string_of_jsbytes("mousemove"),
     cst_mouseout=caml_string_of_jsbytes("mouseout"),
     cst_keypress=caml_string_of_jsbytes("keypress"),
     cst_keydown=caml_string_of_jsbytes("keydown"),
     cst_keyup=caml_string_of_jsbytes("keyup"),
     cst_mousewheel=caml_string_of_jsbytes("mousewheel"),
     cst_DOMMouseScroll=caml_string_of_jsbytes("DOMMouseScroll"),
     cst_touchstart=caml_string_of_jsbytes("touchstart"),
     cst_touchmove=caml_string_of_jsbytes("touchmove"),
     cst_touchend=caml_string_of_jsbytes("touchend"),
     cst_touchcancel=caml_string_of_jsbytes("touchcancel"),
     cst_dragstart=caml_string_of_jsbytes("dragstart"),
     cst_dragend=caml_string_of_jsbytes("dragend"),
     cst_dragenter=caml_string_of_jsbytes("dragenter"),
     cst_dragover=caml_string_of_jsbytes("dragover"),
     cst_dragleave=caml_string_of_jsbytes("dragleave"),
     cst_drag=caml_string_of_jsbytes("drag"),
     cst_drop=caml_string_of_jsbytes("drop"),
     cst_hashchange=caml_string_of_jsbytes("hashchange"),
     cst_change=caml_string_of_jsbytes("change"),
     cst_input=caml_string_of_jsbytes("input"),
     cst_timeupdate=caml_string_of_jsbytes("timeupdate"),
     cst_submit=caml_string_of_jsbytes("submit"),
     cst_scroll=caml_string_of_jsbytes("scroll"),
     cst_focus=caml_string_of_jsbytes("focus"),
     cst_blur=caml_string_of_jsbytes("blur"),
     cst_load$0=caml_string_of_jsbytes("load"),
     cst_unload=caml_string_of_jsbytes("unload"),
     cst_beforeunload=caml_string_of_jsbytes("beforeunload"),
     cst_resize=caml_string_of_jsbytes("resize"),
     cst_orientationchange=caml_string_of_jsbytes("orientationchange"),
     cst_popstate=caml_string_of_jsbytes("popstate"),
     cst_error$0=caml_string_of_jsbytes("error"),
     cst_abort$0=caml_string_of_jsbytes("abort"),
     cst_select=caml_string_of_jsbytes("select"),
     cst_online=caml_string_of_jsbytes("online"),
     cst_offline=caml_string_of_jsbytes("offline"),
     cst_checking=caml_string_of_jsbytes("checking"),
     cst_noupdate=caml_string_of_jsbytes("noupdate"),
     cst_downloading=caml_string_of_jsbytes("downloading"),
     cst_progress$0=caml_string_of_jsbytes("progress"),
     cst_updateready=caml_string_of_jsbytes("updateready"),
     cst_cached=caml_string_of_jsbytes("cached"),
     cst_obsolete=caml_string_of_jsbytes("obsolete"),
     cst_DOMContentLoaded=caml_string_of_jsbytes("DOMContentLoaded"),
     cst_animationstart=caml_string_of_jsbytes("animationstart"),
     cst_animationend=caml_string_of_jsbytes("animationend"),
     cst_animationiteration=caml_string_of_jsbytes("animationiteration"),
     cst_animationcancel=caml_string_of_jsbytes("animationcancel"),
     cst_canplay=caml_string_of_jsbytes("canplay"),
     cst_canplaythrough=caml_string_of_jsbytes("canplaythrough"),
     cst_durationchange=caml_string_of_jsbytes("durationchange"),
     cst_emptied=caml_string_of_jsbytes("emptied"),
     cst_ended=caml_string_of_jsbytes("ended"),
     cst_gotpointercapture=caml_string_of_jsbytes("gotpointercapture"),
     cst_loadeddata=caml_string_of_jsbytes("loadeddata"),
     cst_loadedmetadata=caml_string_of_jsbytes("loadedmetadata"),
     cst_loadstart$0=caml_string_of_jsbytes("loadstart"),
     cst_lostpointercapture=caml_string_of_jsbytes("lostpointercapture"),
     cst_pause=caml_string_of_jsbytes("pause"),
     cst_play=caml_string_of_jsbytes("play"),
     cst_playing=caml_string_of_jsbytes("playing"),
     cst_pointerenter=caml_string_of_jsbytes("pointerenter"),
     cst_pointercancel=caml_string_of_jsbytes("pointercancel"),
     cst_pointerdown=caml_string_of_jsbytes("pointerdown"),
     cst_pointerleave=caml_string_of_jsbytes("pointerleave"),
     cst_pointermove=caml_string_of_jsbytes("pointermove"),
     cst_pointerout=caml_string_of_jsbytes("pointerout"),
     cst_pointerover=caml_string_of_jsbytes("pointerover"),
     cst_pointerup=caml_string_of_jsbytes("pointerup"),
     cst_ratechange=caml_string_of_jsbytes("ratechange"),
     cst_seeked=caml_string_of_jsbytes("seeked"),
     cst_seeking=caml_string_of_jsbytes("seeking"),
     cst_stalled=caml_string_of_jsbytes("stalled"),
     cst_suspend=caml_string_of_jsbytes("suspend"),
     cst_volumechange=caml_string_of_jsbytes("volumechange"),
     cst_waiting=caml_string_of_jsbytes("waiting"),
     cst_Js_of_ocaml_Dom_html_Canva=
      caml_string_of_jsbytes("Js_of_ocaml__Dom_html.Canvas_not_available"),
     cst_checkbox=caml_string_of_jsbytes("checkbox"),
     cst_file=caml_string_of_jsbytes("file"),
     cst_password=caml_string_of_jsbytes("password"),
     cst_radio=caml_string_of_jsbytes("radio"),
     cst_reset=caml_string_of_jsbytes("reset"),
     cst_submit$0=caml_string_of_jsbytes("submit"),
     cst_text=caml_string_of_jsbytes("text"),
     cst_readystatechange=caml_string_of_jsbytes("readystatechange"),
     cst_loadstart$1=caml_string_of_jsbytes("loadstart"),
     cst_progress$1=caml_string_of_jsbytes("progress"),
     cst_abort$1=caml_string_of_jsbytes("abort"),
     cst_error$1=caml_string_of_jsbytes("error"),
     cst_load$1=caml_string_of_jsbytes("load"),
     cst_timeout=caml_string_of_jsbytes("timeout"),
     cst_loadend$0=caml_string_of_jsbytes("loadend"),
     cst_Worker_onmessage_is_undefi$0=
      caml_string_of_jsbytes("Worker.onmessage is undefined"),
     cst_Worker_onmessage_is_undefi=
      caml_string_of_jsbytes("Worker.onmessage is undefined"),
     cst_Worker_import_scripts_is_u=
      caml_string_of_jsbytes("Worker.import_scripts is undefined"),
     cst_webglcontextlost=caml_string_of_jsbytes("webglcontextlost"),
     cst_webglcontextrestored=caml_string_of_jsbytes("webglcontextrestored"),
     cst_webglcontextcreationerror=
      caml_string_of_jsbytes("webglcontextcreationerror"),
     cst_g=caml_string_of_jsbytes("g"),
     cst=caml_string_of_jsbytes("[\\][()\\\\|+*.?{}^$]"),
     cst$37=caml_string_of_jsbytes(""),
     cst$13=caml_string_of_jsbytes(""),
     cst$21=caml_string_of_jsbytes(""),
     cst$14=caml_string_of_jsbytes("#"),
     cst$15=caml_string_of_jsbytes("?"),
     cst$20=caml_string_of_jsbytes(""),
     cst$16=caml_string_of_jsbytes("/"),
     cst$17=caml_string_of_jsbytes("/"),
     cst$19=caml_string_of_jsbytes(":"),
     cst$18=caml_string_of_jsbytes(""),
     cst_http$1=caml_string_of_jsbytes("http://"),
     cst$22=caml_string_of_jsbytes(""),
     cst$30=caml_string_of_jsbytes(""),
     cst$23=caml_string_of_jsbytes("#"),
     cst$24=caml_string_of_jsbytes("?"),
     cst$29=caml_string_of_jsbytes(""),
     cst$25=caml_string_of_jsbytes("/"),
     cst$26=caml_string_of_jsbytes("/"),
     cst$28=caml_string_of_jsbytes(":"),
     cst$27=caml_string_of_jsbytes(""),
     cst_https$1=caml_string_of_jsbytes("https://"),
     cst$31=caml_string_of_jsbytes(""),
     cst$36=caml_string_of_jsbytes(""),
     cst$32=caml_string_of_jsbytes("#"),
     cst$33=caml_string_of_jsbytes("?"),
     cst$35=caml_string_of_jsbytes(""),
     cst$34=caml_string_of_jsbytes("/"),
     cst_file$2=caml_string_of_jsbytes("file://"),
     cst$12=caml_string_of_jsbytes(""),
     cst$11=caml_string_of_jsbytes(""),
     cst$10=caml_string_of_jsbytes(""),
     cst$9=caml_string_of_jsbytes(""),
     cst$8=caml_string_of_jsbytes(""),
     cst$7=caml_string_of_jsbytes(""),
     cst$6=caml_string_of_jsbytes(""),
     cst$4=caml_string_of_jsbytes("="),
     cst$5=caml_string_of_jsbytes("&"),
     cst$2=caml_string_of_jsbytes(""),
     cst$3=caml_string_of_jsbytes(""),
     cst_file$0=caml_string_of_jsbytes("file"),
     cst_file$1=caml_string_of_jsbytes("file:"),
     cst_http=caml_string_of_jsbytes("http"),
     cst_http$0=caml_string_of_jsbytes("http:"),
     cst_https=caml_string_of_jsbytes("https"),
     cst_https$0=caml_string_of_jsbytes("https:"),
     cst$1=caml_string_of_jsbytes(" "),
     cst_2B=caml_string_of_jsbytes("%2B"),
     cst_Js_of_ocaml_Url_Local_exn=
      caml_string_of_jsbytes("Js_of_ocaml__Url.Local_exn"),
     cst$0=caml_string_of_jsbytes("+"),
     cst_Js_of_ocaml_Url_Not_an_htt=
      caml_string_of_jsbytes("Js_of_ocaml__Url.Not_an_http_protocol"),
     cst_Hh_Tt_Tt_Pp_Ss_0_9a_zA_Z_0=
      caml_string_of_jsbytes
       ("^([Hh][Tt][Tt][Pp][Ss]?)://([0-9a-zA-Z.-]+|\\[[0-9a-zA-Z.-]+\\]|\\[[0-9A-Fa-f:.]+\\])?(:([0-9]+))?(/([^\\?#]*)(\\?([^#]*))?(#(.*))?)?$"),
     cst_Ff_Ii_Ll_Ee=
      caml_string_of_jsbytes
       ("^([Ff][Ii][Ll][Ee])://([^\\?#]*)(\\?([^#]*))?(#(.*))?$"),
     s=caml_string_of_jsbytes("3.9.0"),
     git_version=caml_string_of_jsbytes(""),
     cst$38=caml_string_of_jsbytes(""),
     cst$41=caml_string_of_jsbytes("+"),
     cst_Jstable_keys=caml_string_of_jsbytes("Jstable.keys"),
     dummy_string=caml_string_of_jsbytes(""),
     dummy_int64=runtime.caml_int64_create_lo_mi_hi(1,0,0),
     cst_is_not_a_valid_length$0=
      caml_string_of_jsbytes(" is not a valid length"),
     cst_d_d_deg_grad_rad_turns=
      caml_string_of_jsbytes("^(\\d*(?:\\.\\d*))(deg|grad|rad|turns)$"),
     cst_length_conversion_error$0=
      caml_string_of_jsbytes("length conversion error: "),
     cst_deg$0=caml_string_of_jsbytes("deg"),
     cst_grad$0=caml_string_of_jsbytes("grad"),
     cst_rad$0=caml_string_of_jsbytes("rad"),
     cst_turns$0=caml_string_of_jsbytes("turns"),
     cst_deg=caml_string_of_jsbytes("deg"),
     cst_grad=caml_string_of_jsbytes("grad"),
     cst_rad=caml_string_of_jsbytes("rad"),
     cst_turns=caml_string_of_jsbytes("turns"),
     cst_is_not_a_valid_length=
      caml_string_of_jsbytes(" is not a valid length"),
     cst_0$0=caml_string_of_jsbytes("0"),
     cst_d_d_s_S=caml_string_of_jsbytes("^(\\d*(?:\\.\\d*)?)\\s*(\\S*)$"),
     cst_length_conversion_error=
      caml_string_of_jsbytes("length conversion error: "),
     cst_pc$0=caml_string_of_jsbytes("pc"),
     cst_ch$0=caml_string_of_jsbytes("ch"),
     cst_cm$0=caml_string_of_jsbytes("cm"),
     cst_em$1=caml_string_of_jsbytes("em"),
     cst_ex$0=caml_string_of_jsbytes("ex"),
     cst_gd$0=caml_string_of_jsbytes("gd"),
     cst_in$0=caml_string_of_jsbytes("in"),
     cst_mm$0=caml_string_of_jsbytes("mm"),
     cst_pt$0=caml_string_of_jsbytes("pt"),
     cst_px$0=caml_string_of_jsbytes("px"),
     cst_rem$0=caml_string_of_jsbytes("rem"),
     cst_vh$0=caml_string_of_jsbytes("vh"),
     cst_vm$0=caml_string_of_jsbytes("vm"),
     cst_vw$0=caml_string_of_jsbytes("vw"),
     cst_0=caml_string_of_jsbytes("0"),
     cst_em$0=caml_string_of_jsbytes("em"),
     cst_ex=caml_string_of_jsbytes("ex"),
     cst_px=caml_string_of_jsbytes("px"),
     cst_gd=caml_string_of_jsbytes("gd"),
     cst_rem=caml_string_of_jsbytes("rem"),
     cst_vw=caml_string_of_jsbytes("vw"),
     cst_vh=caml_string_of_jsbytes("vh"),
     cst_vm=caml_string_of_jsbytes("vm"),
     cst_ch=caml_string_of_jsbytes("ch"),
     cst_mm=caml_string_of_jsbytes("mm"),
     cst_cm=caml_string_of_jsbytes("cm"),
     cst_in=caml_string_of_jsbytes("in"),
     cst_pt=caml_string_of_jsbytes("pt"),
     cst_pc=caml_string_of_jsbytes("pc"),
     cst$40=caml_string_of_jsbytes("): "),
     cst_color_conversion_error$0=
      caml_string_of_jsbytes("color conversion error ("),
     cst$39=caml_string_of_jsbytes("): "),
     cst_color_conversion_error=
      caml_string_of_jsbytes("color conversion error ("),
     cst_is_not_a_valid_color$0=
      caml_string_of_jsbytes(" is not a valid color"),
     cst_rgba_d_d_d_d_d=
      caml_string_of_jsbytes
       ("(rgba?)\\((?:(\\d*),(\\d*),(\\d*)(?:,(\\d*(?:\\.\\d*)?))?)\\)"),
     cst_rgba_d_d_d_d_d$0=
      caml_string_of_jsbytes
       ("(rgba?)\\((?:(\\d*)%,(\\d*)%,(\\d*)%(?:,(\\d*(?:\\.\\d*)?))?)\\)"),
     cst_hsla_d_d_d_d_d=
      caml_string_of_jsbytes
       ("(hsla?)\\((?:(\\d*),(\\d*)%,(\\d*)%(?:,(\\d*(?:\\.\\d*)?))?)\\)"),
     cst_rgb=caml_string_of_jsbytes("rgb"),
     cst_rgba=caml_string_of_jsbytes("rgba"),
     cst_rgb$0=caml_string_of_jsbytes("rgb"),
     cst_rgba$0=caml_string_of_jsbytes("rgba"),
     cst_hsl=caml_string_of_jsbytes("hsl"),
     cst_hsla=caml_string_of_jsbytes("hsla"),
     cst_rgb_s_d_s_d_s_d=
      caml_string_of_jsbytes("^rgb\\(\\s*\\d*,\\s*\\d*,\\s*\\d*\\)$"),
     cst_rgb_s_d_s_d_s_d$0=
      caml_string_of_jsbytes("^rgb\\(\\s*\\d*%,\\s*\\d*%,\\s*\\d*%\\)$"),
     cst_rgba_s_d_s_d_s_d_d_d=
      caml_string_of_jsbytes
       ("^rgba\\(\\s*\\d*,\\s*\\d*,\\s*\\d*,\\d*\\.?\\d*\\)$"),
     cst_rgba_s_d_s_d_s_d_d_d$0=
      caml_string_of_jsbytes
       ("^rgba\\(\\s*\\d*%,\\s*\\d*%,\\s*\\d*%,\\d*\\.?\\d*\\)$"),
     cst_hsl_s_d_s_d_s_d=
      caml_string_of_jsbytes("^hsl\\(\\s*\\d*,\\s*\\d*%,\\s*\\d*%\\)$"),
     cst_hsla_s_d_s_d_s_d_d_d=
      caml_string_of_jsbytes
       ("^hsla\\(\\s*\\d*,\\s*\\d*%,\\s*\\d*%,\\d*\\.?\\d*\\)$"),
     cst_is_not_a_valid_color=caml_string_of_jsbytes(" is not a valid color"),
     cst_is_out_of_valid_range=
      caml_string_of_jsbytes(" is out of valid range"),
     partial=[8,0,0,0,[12,41,0]],
     partial$0=[12,41,0],
     cst_lightgrey$0=caml_string_of_jsbytes("lightgrey"),
     cst_darkslategray$0=caml_string_of_jsbytes("darkslategray"),
     cst_cornsilk$0=caml_string_of_jsbytes("cornsilk"),
     cst_blue$0=caml_string_of_jsbytes("blue"),
     cst_aliceblue$0=caml_string_of_jsbytes("aliceblue"),
     cst_antiquewhite$0=caml_string_of_jsbytes("antiquewhite"),
     cst_aqua$0=caml_string_of_jsbytes("aqua"),
     cst_aquamarine$0=caml_string_of_jsbytes("aquamarine"),
     cst_azure$0=caml_string_of_jsbytes("azure"),
     cst_beige$0=caml_string_of_jsbytes("beige"),
     cst_bisque$0=caml_string_of_jsbytes("bisque"),
     cst_black$0=caml_string_of_jsbytes("black"),
     cst_blanchedalmond$0=caml_string_of_jsbytes("blanchedalmond"),
     cst_blueviolet$0=caml_string_of_jsbytes("blueviolet"),
     cst_brown$0=caml_string_of_jsbytes("brown"),
     cst_burlywood$0=caml_string_of_jsbytes("burlywood"),
     cst_cadetblue$0=caml_string_of_jsbytes("cadetblue"),
     cst_chartreuse$0=caml_string_of_jsbytes("chartreuse"),
     cst_chocolate$0=caml_string_of_jsbytes("chocolate"),
     cst_coral$0=caml_string_of_jsbytes("coral"),
     cst_cornflowerblue$0=caml_string_of_jsbytes("cornflowerblue"),
     cst_darkkhaki$0=caml_string_of_jsbytes("darkkhaki"),
     cst_crimson$0=caml_string_of_jsbytes("crimson"),
     cst_cyan$0=caml_string_of_jsbytes("cyan"),
     cst_darkblue$0=caml_string_of_jsbytes("darkblue"),
     cst_darkcyan$0=caml_string_of_jsbytes("darkcyan"),
     cst_darkgoldenrod$0=caml_string_of_jsbytes("darkgoldenrod"),
     cst_darkgray$0=caml_string_of_jsbytes("darkgray"),
     cst_darkgreen$0=caml_string_of_jsbytes("darkgreen"),
     cst_darkgrey$0=caml_string_of_jsbytes("darkgrey"),
     cst_darkmagenta$0=caml_string_of_jsbytes("darkmagenta"),
     cst_darkolivegreen$0=caml_string_of_jsbytes("darkolivegreen"),
     cst_darkorange$0=caml_string_of_jsbytes("darkorange"),
     cst_darkorchid$0=caml_string_of_jsbytes("darkorchid"),
     cst_darkred$0=caml_string_of_jsbytes("darkred"),
     cst_darksalmon$0=caml_string_of_jsbytes("darksalmon"),
     cst_darkseagreen$0=caml_string_of_jsbytes("darkseagreen"),
     cst_darkslateblue$0=caml_string_of_jsbytes("darkslateblue"),
     cst_greenyellow$0=caml_string_of_jsbytes("greenyellow"),
     cst_floralwhite$0=caml_string_of_jsbytes("floralwhite"),
     cst_darkslategrey$0=caml_string_of_jsbytes("darkslategrey"),
     cst_darkturquoise$0=caml_string_of_jsbytes("darkturquoise"),
     cst_darkviolet$0=caml_string_of_jsbytes("darkviolet"),
     cst_deeppink$0=caml_string_of_jsbytes("deeppink"),
     cst_deepskyblue$0=caml_string_of_jsbytes("deepskyblue"),
     cst_dimgray$0=caml_string_of_jsbytes("dimgray"),
     cst_dimgrey$0=caml_string_of_jsbytes("dimgrey"),
     cst_dodgerblue$0=caml_string_of_jsbytes("dodgerblue"),
     cst_firebrick$0=caml_string_of_jsbytes("firebrick"),
     cst_forestgreen$0=caml_string_of_jsbytes("forestgreen"),
     cst_fuchsia$0=caml_string_of_jsbytes("fuchsia"),
     cst_gainsboro$0=caml_string_of_jsbytes("gainsboro"),
     cst_ghostwhite$0=caml_string_of_jsbytes("ghostwhite"),
     cst_gold$0=caml_string_of_jsbytes("gold"),
     cst_goldenrod$0=caml_string_of_jsbytes("goldenrod"),
     cst_gray$0=caml_string_of_jsbytes("gray"),
     cst_green$0=caml_string_of_jsbytes("green"),
     cst_lavenderblush$0=caml_string_of_jsbytes("lavenderblush"),
     cst_grey$0=caml_string_of_jsbytes("grey"),
     cst_honeydew$0=caml_string_of_jsbytes("honeydew"),
     cst_hotpink$0=caml_string_of_jsbytes("hotpink"),
     cst_indianred$0=caml_string_of_jsbytes("indianred"),
     cst_indigo$0=caml_string_of_jsbytes("indigo"),
     cst_ivory$0=caml_string_of_jsbytes("ivory"),
     cst_khaki$0=caml_string_of_jsbytes("khaki"),
     cst_lavender$0=caml_string_of_jsbytes("lavender"),
     cst_lawngreen$0=caml_string_of_jsbytes("lawngreen"),
     cst_lemonchiffon$0=caml_string_of_jsbytes("lemonchiffon"),
     cst_lightblue$0=caml_string_of_jsbytes("lightblue"),
     cst_lightcoral$0=caml_string_of_jsbytes("lightcoral"),
     cst_lightcyan$0=caml_string_of_jsbytes("lightcyan"),
     cst_lightgoldenrodyellow$0=caml_string_of_jsbytes("lightgoldenrodyellow"),
     cst_lightgray$0=caml_string_of_jsbytes("lightgray"),
     cst_lightgreen$0=caml_string_of_jsbytes("lightgreen"),
     cst_paleturquoise$0=caml_string_of_jsbytes("paleturquoise"),
     cst_mediumslateblue$0=caml_string_of_jsbytes("mediumslateblue"),
     cst_limegreen$0=caml_string_of_jsbytes("limegreen"),
     cst_lightpink$0=caml_string_of_jsbytes("lightpink"),
     cst_lightsalmon$0=caml_string_of_jsbytes("lightsalmon"),
     cst_lightseagreen$0=caml_string_of_jsbytes("lightseagreen"),
     cst_lightskyblue$0=caml_string_of_jsbytes("lightskyblue"),
     cst_lightslategray$0=caml_string_of_jsbytes("lightslategray"),
     cst_lightslategrey$0=caml_string_of_jsbytes("lightslategrey"),
     cst_lightsteelblue$0=caml_string_of_jsbytes("lightsteelblue"),
     cst_lightyellow$0=caml_string_of_jsbytes("lightyellow"),
     cst_lime$0=caml_string_of_jsbytes("lime"),
     cst_linen$0=caml_string_of_jsbytes("linen"),
     cst_magenta$0=caml_string_of_jsbytes("magenta"),
     cst_maroon$0=caml_string_of_jsbytes("maroon"),
     cst_mediumaquamarine$0=caml_string_of_jsbytes("mediumaquamarine"),
     cst_mediumblue$0=caml_string_of_jsbytes("mediumblue"),
     cst_mediumorchid$0=caml_string_of_jsbytes("mediumorchid"),
     cst_mediumpurple$0=caml_string_of_jsbytes("mediumpurple"),
     cst_mediumseagreen$0=caml_string_of_jsbytes("mediumseagreen"),
     cst_navy$0=caml_string_of_jsbytes("navy"),
     cst_mediumspringgreen$0=caml_string_of_jsbytes("mediumspringgreen"),
     cst_mediumturquoise$0=caml_string_of_jsbytes("mediumturquoise"),
     cst_mediumvioletred$0=caml_string_of_jsbytes("mediumvioletred"),
     cst_midnightblue$0=caml_string_of_jsbytes("midnightblue"),
     cst_mintcream$0=caml_string_of_jsbytes("mintcream"),
     cst_mistyrose$0=caml_string_of_jsbytes("mistyrose"),
     cst_moccasin$0=caml_string_of_jsbytes("moccasin"),
     cst_navajowhite$0=caml_string_of_jsbytes("navajowhite"),
     cst_oldlace$0=caml_string_of_jsbytes("oldlace"),
     cst_olive$0=caml_string_of_jsbytes("olive"),
     cst_olivedrab$0=caml_string_of_jsbytes("olivedrab"),
     cst_orange$0=caml_string_of_jsbytes("orange"),
     cst_orangered$0=caml_string_of_jsbytes("orangered"),
     cst_orchid$0=caml_string_of_jsbytes("orchid"),
     cst_palegoldenrod$0=caml_string_of_jsbytes("palegoldenrod"),
     cst_palegreen$0=caml_string_of_jsbytes("palegreen"),
     cst_skyblue$0=caml_string_of_jsbytes("skyblue"),
     cst_rosybrown$0=caml_string_of_jsbytes("rosybrown"),
     cst_palevioletred$0=caml_string_of_jsbytes("palevioletred"),
     cst_papayawhip$0=caml_string_of_jsbytes("papayawhip"),
     cst_peachpuff$0=caml_string_of_jsbytes("peachpuff"),
     cst_peru$0=caml_string_of_jsbytes("peru"),
     cst_pink$0=caml_string_of_jsbytes("pink"),
     cst_plum$0=caml_string_of_jsbytes("plum"),
     cst_powderblue$0=caml_string_of_jsbytes("powderblue"),
     cst_purple$0=caml_string_of_jsbytes("purple"),
     cst_red$0=caml_string_of_jsbytes("red"),
     cst_royalblue$0=caml_string_of_jsbytes("royalblue"),
     cst_saddlebrown$0=caml_string_of_jsbytes("saddlebrown"),
     cst_salmon$0=caml_string_of_jsbytes("salmon"),
     cst_sandybrown$0=caml_string_of_jsbytes("sandybrown"),
     cst_seagreen$0=caml_string_of_jsbytes("seagreen"),
     cst_seashell$0=caml_string_of_jsbytes("seashell"),
     cst_sienna$0=caml_string_of_jsbytes("sienna"),
     cst_silver$0=caml_string_of_jsbytes("silver"),
     cst_thistle$0=caml_string_of_jsbytes("thistle"),
     cst_slateblue$0=caml_string_of_jsbytes("slateblue"),
     cst_slategray$0=caml_string_of_jsbytes("slategray"),
     cst_slategrey$0=caml_string_of_jsbytes("slategrey"),
     cst_snow$0=caml_string_of_jsbytes("snow"),
     cst_springgreen$0=caml_string_of_jsbytes("springgreen"),
     cst_steelblue$0=caml_string_of_jsbytes("steelblue"),
     cst_tan$0=caml_string_of_jsbytes("tan"),
     cst_teal$0=caml_string_of_jsbytes("teal"),
     cst_tomato$0=caml_string_of_jsbytes("tomato"),
     cst_turquoise$0=caml_string_of_jsbytes("turquoise"),
     cst_violet$0=caml_string_of_jsbytes("violet"),
     cst_wheat$0=caml_string_of_jsbytes("wheat"),
     cst_white$0=caml_string_of_jsbytes("white"),
     cst_whitesmoke$0=caml_string_of_jsbytes("whitesmoke"),
     cst_yellow$0=caml_string_of_jsbytes("yellow"),
     cst_yellowgreen$0=caml_string_of_jsbytes("yellowgreen"),
     cst_is_not_a_valid_color_name=
      caml_string_of_jsbytes(" is not a valid color name"),
     cst_aliceblue=caml_string_of_jsbytes("aliceblue"),
     cst_antiquewhite=caml_string_of_jsbytes("antiquewhite"),
     cst_aqua=caml_string_of_jsbytes("aqua"),
     cst_aquamarine=caml_string_of_jsbytes("aquamarine"),
     cst_azure=caml_string_of_jsbytes("azure"),
     cst_beige=caml_string_of_jsbytes("beige"),
     cst_bisque=caml_string_of_jsbytes("bisque"),
     cst_black=caml_string_of_jsbytes("black"),
     cst_blanchedalmond=caml_string_of_jsbytes("blanchedalmond"),
     cst_blue=caml_string_of_jsbytes("blue"),
     cst_blueviolet=caml_string_of_jsbytes("blueviolet"),
     cst_brown=caml_string_of_jsbytes("brown"),
     cst_burlywood=caml_string_of_jsbytes("burlywood"),
     cst_cadetblue=caml_string_of_jsbytes("cadetblue"),
     cst_chartreuse=caml_string_of_jsbytes("chartreuse"),
     cst_chocolate=caml_string_of_jsbytes("chocolate"),
     cst_coral=caml_string_of_jsbytes("coral"),
     cst_cornflowerblue=caml_string_of_jsbytes("cornflowerblue"),
     cst_cornsilk=caml_string_of_jsbytes("cornsilk"),
     cst_crimson=caml_string_of_jsbytes("crimson"),
     cst_cyan=caml_string_of_jsbytes("cyan"),
     cst_darkblue=caml_string_of_jsbytes("darkblue"),
     cst_darkcyan=caml_string_of_jsbytes("darkcyan"),
     cst_darkgoldenrod=caml_string_of_jsbytes("darkgoldenrod"),
     cst_darkgray=caml_string_of_jsbytes("darkgray"),
     cst_darkgreen=caml_string_of_jsbytes("darkgreen"),
     cst_darkgrey=caml_string_of_jsbytes("darkgrey"),
     cst_darkkhaki=caml_string_of_jsbytes("darkkhaki"),
     cst_darkmagenta=caml_string_of_jsbytes("darkmagenta"),
     cst_darkolivegreen=caml_string_of_jsbytes("darkolivegreen"),
     cst_darkorange=caml_string_of_jsbytes("darkorange"),
     cst_darkorchid=caml_string_of_jsbytes("darkorchid"),
     cst_darkred=caml_string_of_jsbytes("darkred"),
     cst_darksalmon=caml_string_of_jsbytes("darksalmon"),
     cst_darkseagreen=caml_string_of_jsbytes("darkseagreen"),
     cst_darkslateblue=caml_string_of_jsbytes("darkslateblue"),
     cst_darkslategray=caml_string_of_jsbytes("darkslategray"),
     cst_darkslategrey=caml_string_of_jsbytes("darkslategrey"),
     cst_darkturquoise=caml_string_of_jsbytes("darkturquoise"),
     cst_darkviolet=caml_string_of_jsbytes("darkviolet"),
     cst_deeppink=caml_string_of_jsbytes("deeppink"),
     cst_deepskyblue=caml_string_of_jsbytes("deepskyblue"),
     cst_dimgray=caml_string_of_jsbytes("dimgray"),
     cst_dimgrey=caml_string_of_jsbytes("dimgrey"),
     cst_dodgerblue=caml_string_of_jsbytes("dodgerblue"),
     cst_firebrick=caml_string_of_jsbytes("firebrick"),
     cst_floralwhite=caml_string_of_jsbytes("floralwhite"),
     cst_forestgreen=caml_string_of_jsbytes("forestgreen"),
     cst_fuchsia=caml_string_of_jsbytes("fuchsia"),
     cst_gainsboro=caml_string_of_jsbytes("gainsboro"),
     cst_ghostwhite=caml_string_of_jsbytes("ghostwhite"),
     cst_gold=caml_string_of_jsbytes("gold"),
     cst_goldenrod=caml_string_of_jsbytes("goldenrod"),
     cst_gray=caml_string_of_jsbytes("gray"),
     cst_grey=caml_string_of_jsbytes("grey"),
     cst_green=caml_string_of_jsbytes("green"),
     cst_greenyellow=caml_string_of_jsbytes("greenyellow"),
     cst_honeydew=caml_string_of_jsbytes("honeydew"),
     cst_hotpink=caml_string_of_jsbytes("hotpink"),
     cst_indianred=caml_string_of_jsbytes("indianred"),
     cst_indigo=caml_string_of_jsbytes("indigo"),
     cst_ivory=caml_string_of_jsbytes("ivory"),
     cst_khaki=caml_string_of_jsbytes("khaki"),
     cst_lavender=caml_string_of_jsbytes("lavender"),
     cst_lavenderblush=caml_string_of_jsbytes("lavenderblush"),
     cst_lawngreen=caml_string_of_jsbytes("lawngreen"),
     cst_lemonchiffon=caml_string_of_jsbytes("lemonchiffon"),
     cst_lightblue=caml_string_of_jsbytes("lightblue"),
     cst_lightcoral=caml_string_of_jsbytes("lightcoral"),
     cst_lightcyan=caml_string_of_jsbytes("lightcyan"),
     cst_lightgoldenrodyellow=caml_string_of_jsbytes("lightgoldenrodyellow"),
     cst_lightgray=caml_string_of_jsbytes("lightgray"),
     cst_lightgreen=caml_string_of_jsbytes("lightgreen"),
     cst_lightgrey=caml_string_of_jsbytes("lightgrey"),
     cst_lightpink=caml_string_of_jsbytes("lightpink"),
     cst_lightsalmon=caml_string_of_jsbytes("lightsalmon"),
     cst_lightseagreen=caml_string_of_jsbytes("lightseagreen"),
     cst_lightskyblue=caml_string_of_jsbytes("lightskyblue"),
     cst_lightslategray=caml_string_of_jsbytes("lightslategray"),
     cst_lightslategrey=caml_string_of_jsbytes("lightslategrey"),
     cst_lightsteelblue=caml_string_of_jsbytes("lightsteelblue"),
     cst_lightyellow=caml_string_of_jsbytes("lightyellow"),
     cst_lime=caml_string_of_jsbytes("lime"),
     cst_limegreen=caml_string_of_jsbytes("limegreen"),
     cst_linen=caml_string_of_jsbytes("linen"),
     cst_magenta=caml_string_of_jsbytes("magenta"),
     cst_maroon=caml_string_of_jsbytes("maroon"),
     cst_mediumaquamarine=caml_string_of_jsbytes("mediumaquamarine"),
     cst_mediumblue=caml_string_of_jsbytes("mediumblue"),
     cst_mediumorchid=caml_string_of_jsbytes("mediumorchid"),
     cst_mediumpurple=caml_string_of_jsbytes("mediumpurple"),
     cst_mediumseagreen=caml_string_of_jsbytes("mediumseagreen"),
     cst_mediumslateblue=caml_string_of_jsbytes("mediumslateblue"),
     cst_mediumspringgreen=caml_string_of_jsbytes("mediumspringgreen"),
     cst_mediumturquoise=caml_string_of_jsbytes("mediumturquoise"),
     cst_mediumvioletred=caml_string_of_jsbytes("mediumvioletred"),
     cst_midnightblue=caml_string_of_jsbytes("midnightblue"),
     cst_mintcream=caml_string_of_jsbytes("mintcream"),
     cst_mistyrose=caml_string_of_jsbytes("mistyrose"),
     cst_moccasin=caml_string_of_jsbytes("moccasin"),
     cst_navajowhite=caml_string_of_jsbytes("navajowhite"),
     cst_navy=caml_string_of_jsbytes("navy"),
     cst_oldlace=caml_string_of_jsbytes("oldlace"),
     cst_olive=caml_string_of_jsbytes("olive"),
     cst_olivedrab=caml_string_of_jsbytes("olivedrab"),
     cst_orange=caml_string_of_jsbytes("orange"),
     cst_orangered=caml_string_of_jsbytes("orangered"),
     cst_orchid=caml_string_of_jsbytes("orchid"),
     cst_palegoldenrod=caml_string_of_jsbytes("palegoldenrod"),
     cst_palegreen=caml_string_of_jsbytes("palegreen"),
     cst_paleturquoise=caml_string_of_jsbytes("paleturquoise"),
     cst_palevioletred=caml_string_of_jsbytes("palevioletred"),
     cst_papayawhip=caml_string_of_jsbytes("papayawhip"),
     cst_peachpuff=caml_string_of_jsbytes("peachpuff"),
     cst_peru=caml_string_of_jsbytes("peru"),
     cst_pink=caml_string_of_jsbytes("pink"),
     cst_plum=caml_string_of_jsbytes("plum"),
     cst_powderblue=caml_string_of_jsbytes("powderblue"),
     cst_purple=caml_string_of_jsbytes("purple"),
     cst_red=caml_string_of_jsbytes("red"),
     cst_rosybrown=caml_string_of_jsbytes("rosybrown"),
     cst_royalblue=caml_string_of_jsbytes("royalblue"),
     cst_saddlebrown=caml_string_of_jsbytes("saddlebrown"),
     cst_salmon=caml_string_of_jsbytes("salmon"),
     cst_sandybrown=caml_string_of_jsbytes("sandybrown"),
     cst_seagreen=caml_string_of_jsbytes("seagreen"),
     cst_seashell=caml_string_of_jsbytes("seashell"),
     cst_sienna=caml_string_of_jsbytes("sienna"),
     cst_silver=caml_string_of_jsbytes("silver"),
     cst_skyblue=caml_string_of_jsbytes("skyblue"),
     cst_slateblue=caml_string_of_jsbytes("slateblue"),
     cst_slategray=caml_string_of_jsbytes("slategray"),
     cst_slategrey=caml_string_of_jsbytes("slategrey"),
     cst_snow=caml_string_of_jsbytes("snow"),
     cst_springgreen=caml_string_of_jsbytes("springgreen"),
     cst_steelblue=caml_string_of_jsbytes("steelblue"),
     cst_tan=caml_string_of_jsbytes("tan"),
     cst_teal=caml_string_of_jsbytes("teal"),
     cst_thistle=caml_string_of_jsbytes("thistle"),
     cst_tomato=caml_string_of_jsbytes("tomato"),
     cst_turquoise=caml_string_of_jsbytes("turquoise"),
     cst_violet=caml_string_of_jsbytes("violet"),
     cst_wheat=caml_string_of_jsbytes("wheat"),
     cst_white=caml_string_of_jsbytes("white"),
     cst_whitesmoke=caml_string_of_jsbytes("whitesmoke"),
     cst_yellow=caml_string_of_jsbytes("yellow"),
     cst_yellowgreen=caml_string_of_jsbytes("yellowgreen"),
     cst_vkern$0=caml_string_of_jsbytes("vkern"),
     cst_view$0=caml_string_of_jsbytes("view"),
     cst_use$0=caml_string_of_jsbytes("use"),
     cst_tspan$0=caml_string_of_jsbytes("tspan"),
     cst_tref$0=caml_string_of_jsbytes("tref"),
     cst_title$3=caml_string_of_jsbytes("title"),
     cst_textpath$0=caml_string_of_jsbytes("textpath"),
     cst_text$1=caml_string_of_jsbytes("text"),
     cst_symbol$0=caml_string_of_jsbytes("symbol"),
     cst_switch$0=caml_string_of_jsbytes("switch"),
     cst_svg$0=caml_string_of_jsbytes("svg"),
     cst_style$3=caml_string_of_jsbytes("style"),
     cst_stop$0=caml_string_of_jsbytes("stop"),
     cst_set$0=caml_string_of_jsbytes("set"),
     cst_script$3=caml_string_of_jsbytes("script"),
     cst_rect$0=caml_string_of_jsbytes("rect"),
     cst_radialgradient$0=caml_string_of_jsbytes("radialgradient"),
     cst_polyline$0=caml_string_of_jsbytes("polyline"),
     cst_polygon$0=caml_string_of_jsbytes("polygon"),
     cst_pattern$0=caml_string_of_jsbytes("pattern"),
     cst_path$0=caml_string_of_jsbytes("path"),
     cst_mpath$0=caml_string_of_jsbytes("mpath"),
     cst_missing_glyph$0=caml_string_of_jsbytes("missing-glyph"),
     cst_metadata$0=caml_string_of_jsbytes("metadata"),
     cst_mask$0=caml_string_of_jsbytes("mask"),
     cst_lineargradient$0=caml_string_of_jsbytes("lineargradient"),
     cst_line$0=caml_string_of_jsbytes("line"),
     cst_image$0=caml_string_of_jsbytes("image"),
     cst_hkern$0=caml_string_of_jsbytes("hkern"),
     cst_glyphref$0=caml_string_of_jsbytes("glyphref"),
     cst_glyph$0=caml_string_of_jsbytes("glyph"),
     cst_g$1=caml_string_of_jsbytes("g"),
     cst_foreignobject=caml_string_of_jsbytes("foreignobject"),
     cst_font_face_uri$0=caml_string_of_jsbytes("font-face-uri"),
     cst_font_face_src$0=caml_string_of_jsbytes("font-face-src"),
     cst_font_face_name$0=caml_string_of_jsbytes("font-face-name"),
     cst_font_face_format$0=caml_string_of_jsbytes("font-face-format"),
     cst_font_face$0=caml_string_of_jsbytes("font-face"),
     cst_font$0=caml_string_of_jsbytes("font"),
     cst_filter$0=caml_string_of_jsbytes("filter"),
     cst_ellipse$0=caml_string_of_jsbytes("ellipse"),
     cst_desc$0=caml_string_of_jsbytes("desc"),
     cst_defs$0=caml_string_of_jsbytes("defs"),
     cst_cursor$0=caml_string_of_jsbytes("cursor"),
     cst_clippath$0=caml_string_of_jsbytes("clippath"),
     cst_circle$0=caml_string_of_jsbytes("circle"),
     cst_animatetransform$0=caml_string_of_jsbytes("animatetransform"),
     cst_animatemotion$0=caml_string_of_jsbytes("animatemotion"),
     cst_animatecolor$0=caml_string_of_jsbytes("animatecolor"),
     cst_animate$0=caml_string_of_jsbytes("animate"),
     cst_altglyphitem$0=caml_string_of_jsbytes("altglyphitem"),
     cst_altglyphdef$0=caml_string_of_jsbytes("altglyphdef"),
     cst_altglyph$0=caml_string_of_jsbytes("altglyph"),
     cst_a$3=caml_string_of_jsbytes("a"),
     cst_vkern=caml_string_of_jsbytes("vkern"),
     cst_view=caml_string_of_jsbytes("view"),
     cst_use=caml_string_of_jsbytes("use"),
     cst_tspan=caml_string_of_jsbytes("tspan"),
     cst_tref=caml_string_of_jsbytes("tref"),
     cst_title$2=caml_string_of_jsbytes("title"),
     cst_textpath=caml_string_of_jsbytes("textpath"),
     cst_text$0=caml_string_of_jsbytes("text"),
     cst_symbol=caml_string_of_jsbytes("symbol"),
     cst_switch=caml_string_of_jsbytes("switch"),
     cst_svg=caml_string_of_jsbytes("svg"),
     cst_style$2=caml_string_of_jsbytes("style"),
     cst_stop=caml_string_of_jsbytes("stop"),
     cst_set=caml_string_of_jsbytes("set"),
     cst_script$2=caml_string_of_jsbytes("script"),
     cst_rect=caml_string_of_jsbytes("rect"),
     cst_radialgradient=caml_string_of_jsbytes("radialgradient"),
     cst_polyline=caml_string_of_jsbytes("polyline"),
     cst_polygon=caml_string_of_jsbytes("polygon"),
     cst_pattern=caml_string_of_jsbytes("pattern"),
     cst_path=caml_string_of_jsbytes("path"),
     cst_mpath=caml_string_of_jsbytes("mpath"),
     cst_missing_glyph=caml_string_of_jsbytes("missing-glyph"),
     cst_metadata=caml_string_of_jsbytes("metadata"),
     cst_mask=caml_string_of_jsbytes("mask"),
     cst_lineargradient=caml_string_of_jsbytes("lineargradient"),
     cst_line=caml_string_of_jsbytes("line"),
     cst_image=caml_string_of_jsbytes("image"),
     cst_hkern=caml_string_of_jsbytes("hkern"),
     cst_glyphref=caml_string_of_jsbytes("glyphref"),
     cst_glyph=caml_string_of_jsbytes("glyph"),
     cst_g$0=caml_string_of_jsbytes("g"),
     cst_foreignObject=caml_string_of_jsbytes("foreignObject"),
     cst_font_face_uri=caml_string_of_jsbytes("font-face-uri"),
     cst_font_face_src=caml_string_of_jsbytes("font-face-src"),
     cst_font_face_name=caml_string_of_jsbytes("font-face-name"),
     cst_font_face_format=caml_string_of_jsbytes("font-face-format"),
     cst_font_face=caml_string_of_jsbytes("font-face"),
     cst_font=caml_string_of_jsbytes("font"),
     cst_filter=caml_string_of_jsbytes("filter"),
     cst_ellipse=caml_string_of_jsbytes("ellipse"),
     cst_desc=caml_string_of_jsbytes("desc"),
     cst_defs=caml_string_of_jsbytes("defs"),
     cst_cursor=caml_string_of_jsbytes("cursor"),
     cst_clippath=caml_string_of_jsbytes("clippath"),
     cst_circle=caml_string_of_jsbytes("circle"),
     cst_animatetransform=caml_string_of_jsbytes("animatetransform"),
     cst_animatemotion=caml_string_of_jsbytes("animatemotion"),
     cst_animatecolor=caml_string_of_jsbytes("animatecolor"),
     cst_animate=caml_string_of_jsbytes("animate"),
     cst_altglyphitem=caml_string_of_jsbytes("altglyphitem"),
     cst_altglyphdef=caml_string_of_jsbytes("altglyphdef"),
     cst_altglyph=caml_string_of_jsbytes("altglyph"),
     cst_a$2=caml_string_of_jsbytes("a"),
     cst_Js_of_ocaml_Dom_svg_SVGErr=
      caml_string_of_jsbytes("Js_of_ocaml__Dom_svg.SVGError"),
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_char=global_data.Stdlib__char,
     Stdlib=global_data.Stdlib,
     Stdlib_callback=global_data.Stdlib__callback,
     Stdlib_printexc=global_data.Stdlib__printexc,
     Assert_failure=global_data.Assert_failure,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_uchar=global_data.Stdlib__uchar,
     Stdlib_printf=global_data.Stdlib__printf,
     Js_of_ocaml=[0];
    caml_register_global(1632,Js_of_ocaml,"Js_of_ocaml__");
    var
     Poly=[0],
     _f_=[0,caml_string_of_jsbytes("lib/js_of_ocaml/dom.ml"),351,67],
     _g_=[0,caml_string_of_jsbytes("transparent")],
     _h_=[0,caml_string_of_jsbytes("native")],
     _l_=[0,caml_string_of_jsbytes("lib/js_of_ocaml/dom_html.ml"),2816,58],
     _k_=[0,caml_string_of_jsbytes("lib/js_of_ocaml/dom_html.ml"),2815,61],
     _j_=
      [0,
       [11,
        caml_string_of_jsbytes("getElementById_exn: "),
        [3,0,[11,caml_string_of_jsbytes(" not found"),0]]],
       caml_string_of_jsbytes("getElementById_exn: %S not found")],
     _n_=[0,caml_string_of_jsbytes("lib/js_of_ocaml/form.ml"),177,13],
     _m_=[0,1],
     _o_=[0,caml_string_of_jsbytes("lib/js_of_ocaml/regexp.ml"),34,64],
     _p_=[0,caml_string_of_jsbytes(""),0],
     _cj_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _ck_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _cl_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _cm_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _b7_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _b8_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _b9_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _b__=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _b$_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _ca_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _cb_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _cc_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _cd_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _ce_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _cf_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _cg_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _ch_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _ci_=[0,[8,0,0,0,[2,0,0]],caml_string_of_jsbytes("%f%s")],
     _b6_=
      caml_list_of_js_array
       ([caml_string_of_jsbytes("aliceblue"),
         caml_string_of_jsbytes("antiquewhite"),
         caml_string_of_jsbytes("aqua"),
         caml_string_of_jsbytes("aquamarine"),
         caml_string_of_jsbytes("azure"),
         caml_string_of_jsbytes("beige"),
         caml_string_of_jsbytes("bisque"),
         caml_string_of_jsbytes("black"),
         caml_string_of_jsbytes("blanchedalmond"),
         caml_string_of_jsbytes("blue"),
         caml_string_of_jsbytes("blueviolet"),
         caml_string_of_jsbytes("brown"),
         caml_string_of_jsbytes("burlywood"),
         caml_string_of_jsbytes("cadetblue"),
         caml_string_of_jsbytes("chartreuse"),
         caml_string_of_jsbytes("chocolate"),
         caml_string_of_jsbytes("coral"),
         caml_string_of_jsbytes("cornflowerblue"),
         caml_string_of_jsbytes("cornsilk"),
         caml_string_of_jsbytes("crimson"),
         caml_string_of_jsbytes("cyan"),
         caml_string_of_jsbytes("darkblue"),
         caml_string_of_jsbytes("darkcyan"),
         caml_string_of_jsbytes("darkgoldenrod"),
         caml_string_of_jsbytes("darkgray"),
         caml_string_of_jsbytes("darkgreen"),
         caml_string_of_jsbytes("darkgrey"),
         caml_string_of_jsbytes("darkkhaki"),
         caml_string_of_jsbytes("darkmagenta"),
         caml_string_of_jsbytes("darkolivegreen"),
         caml_string_of_jsbytes("darkorange"),
         caml_string_of_jsbytes("darkorchid"),
         caml_string_of_jsbytes("darkred"),
         caml_string_of_jsbytes("darksalmon"),
         caml_string_of_jsbytes("darkseagreen"),
         caml_string_of_jsbytes("darkslateblue"),
         caml_string_of_jsbytes("darkslategray"),
         caml_string_of_jsbytes("darkslategrey"),
         caml_string_of_jsbytes("darkturquoise"),
         caml_string_of_jsbytes("darkviolet"),
         caml_string_of_jsbytes("deeppink"),
         caml_string_of_jsbytes("deepskyblue"),
         caml_string_of_jsbytes("dimgray"),
         caml_string_of_jsbytes("dimgrey"),
         caml_string_of_jsbytes("dodgerblue"),
         caml_string_of_jsbytes("firebrick"),
         caml_string_of_jsbytes("floralwhite"),
         caml_string_of_jsbytes("forestgreen"),
         caml_string_of_jsbytes("fuchsia"),
         caml_string_of_jsbytes("gainsboro"),
         caml_string_of_jsbytes("ghostwhite"),
         caml_string_of_jsbytes("gold"),
         caml_string_of_jsbytes("goldenrod"),
         caml_string_of_jsbytes("gray"),
         caml_string_of_jsbytes("green"),
         caml_string_of_jsbytes("greenyellow"),
         caml_string_of_jsbytes("grey"),
         caml_string_of_jsbytes("honeydew"),
         caml_string_of_jsbytes("hotpink"),
         caml_string_of_jsbytes("indianred"),
         caml_string_of_jsbytes("indigo"),
         caml_string_of_jsbytes("ivory"),
         caml_string_of_jsbytes("khaki"),
         caml_string_of_jsbytes("lavender"),
         caml_string_of_jsbytes("lavenderblush"),
         caml_string_of_jsbytes("lawngreen"),
         caml_string_of_jsbytes("lemonchiffon"),
         caml_string_of_jsbytes("lightblue"),
         caml_string_of_jsbytes("lightcoral"),
         caml_string_of_jsbytes("lightcyan"),
         caml_string_of_jsbytes("lightgoldenrodyellow"),
         caml_string_of_jsbytes("lightgray"),
         caml_string_of_jsbytes("lightgreen"),
         caml_string_of_jsbytes("lightgrey"),
         caml_string_of_jsbytes("lightpink"),
         caml_string_of_jsbytes("lightsalmon"),
         caml_string_of_jsbytes("lightseagreen"),
         caml_string_of_jsbytes("lightskyblue"),
         caml_string_of_jsbytes("lightslategray"),
         caml_string_of_jsbytes("lightslategrey"),
         caml_string_of_jsbytes("lightsteelblue"),
         caml_string_of_jsbytes("lightyellow"),
         caml_string_of_jsbytes("lime"),
         caml_string_of_jsbytes("limegreen"),
         caml_string_of_jsbytes("linen"),
         caml_string_of_jsbytes("magenta"),
         caml_string_of_jsbytes("maroon"),
         caml_string_of_jsbytes("mediumaquamarine"),
         caml_string_of_jsbytes("mediumblue"),
         caml_string_of_jsbytes("mediumorchid"),
         caml_string_of_jsbytes("mediumpurple"),
         caml_string_of_jsbytes("mediumseagreen"),
         caml_string_of_jsbytes("mediumslateblue"),
         caml_string_of_jsbytes("mediumspringgreen"),
         caml_string_of_jsbytes("mediumturquoise"),
         caml_string_of_jsbytes("mediumvioletred"),
         caml_string_of_jsbytes("midnightblue"),
         caml_string_of_jsbytes("mintcream"),
         caml_string_of_jsbytes("mistyrose"),
         caml_string_of_jsbytes("moccasin"),
         caml_string_of_jsbytes("navajowhite"),
         caml_string_of_jsbytes("navy"),
         caml_string_of_jsbytes("oldlace"),
         caml_string_of_jsbytes("olive"),
         caml_string_of_jsbytes("olivedrab"),
         caml_string_of_jsbytes("orange"),
         caml_string_of_jsbytes("orangered"),
         caml_string_of_jsbytes("orchid"),
         caml_string_of_jsbytes("palegoldenrod"),
         caml_string_of_jsbytes("palegreen"),
         caml_string_of_jsbytes("paleturquoise"),
         caml_string_of_jsbytes("palevioletred"),
         caml_string_of_jsbytes("papayawhip"),
         caml_string_of_jsbytes("peachpuff"),
         caml_string_of_jsbytes("peru"),
         caml_string_of_jsbytes("pink"),
         caml_string_of_jsbytes("plum"),
         caml_string_of_jsbytes("powderblue"),
         caml_string_of_jsbytes("purple"),
         caml_string_of_jsbytes("red"),
         caml_string_of_jsbytes("rosybrown"),
         caml_string_of_jsbytes("royalblue"),
         caml_string_of_jsbytes("saddlebrown"),
         caml_string_of_jsbytes("salmon"),
         caml_string_of_jsbytes("sandybrown"),
         caml_string_of_jsbytes("seagreen"),
         caml_string_of_jsbytes("seashell"),
         caml_string_of_jsbytes("sienna"),
         caml_string_of_jsbytes("silver"),
         caml_string_of_jsbytes("skyblue"),
         caml_string_of_jsbytes("slateblue"),
         caml_string_of_jsbytes("slategray"),
         caml_string_of_jsbytes("slategrey"),
         caml_string_of_jsbytes("snow"),
         caml_string_of_jsbytes("springgreen"),
         caml_string_of_jsbytes("steelblue"),
         caml_string_of_jsbytes("tan"),
         caml_string_of_jsbytes("teal"),
         caml_string_of_jsbytes("thistle"),
         caml_string_of_jsbytes("tomato"),
         caml_string_of_jsbytes("turquoise"),
         caml_string_of_jsbytes("violet"),
         caml_string_of_jsbytes("wheat"),
         caml_string_of_jsbytes("white"),
         caml_string_of_jsbytes("whitesmoke"),
         caml_string_of_jsbytes("yellow"),
         caml_string_of_jsbytes("yellowgreen")]),
     _b5_=
      [0,
       [12,35,[4,8,[0,2,2],0,[4,8,[0,2,2],0,[4,8,[0,2,2],0,0]]]],
       caml_string_of_jsbytes("#%02X%02X%02X")],
     _bZ_=
      [0,
       [11,
        caml_string_of_jsbytes("rgb("),
        [4,0,0,0,[12,44,[4,0,0,0,[12,44,[4,0,0,0,[12,41,0]]]]]]],
       caml_string_of_jsbytes("rgb(%d,%d,%d)")],
     _b0_=
      [0,
       [11,
        caml_string_of_jsbytes("rgb("),
        [4,
         0,
         0,
         0,
         [12,37,[12,44,[4,0,0,0,[12,37,[12,44,[4,0,0,0,[12,37,[12,41,0]]]]]]]]]],
       caml_string_of_jsbytes("rgb(%d%%,%d%%,%d%%)")],
     _b1_=
      [0,
       [11,
        caml_string_of_jsbytes("rgba("),
        [4,
         0,
         0,
         0,
         [12,44,[4,0,0,0,[12,44,[4,0,0,0,[12,44,[8,0,0,0,[12,41,0]]]]]]]]],
       caml_string_of_jsbytes("rgba(%d,%d,%d,%f)")],
     _b2_=
      [0,
       [11,
        caml_string_of_jsbytes("rgba("),
        [4,
         0,
         0,
         0,
         [12,
          37,
          [12,44,[4,0,0,0,[12,37,[12,44,[4,0,0,0,[12,37,[12,44,partial]]]]]]]]]],
       caml_string_of_jsbytes("rgba(%d%%,%d%%,%d%%,%f)")],
     _b3_=
      [0,
       [11,
        caml_string_of_jsbytes("hsl("),
        [4,
         0,
         0,
         0,
         [12,44,[4,0,0,0,[12,37,[12,44,[4,0,0,0,[12,37,[12,41,0]]]]]]]]],
       caml_string_of_jsbytes("hsl(%d,%d%%,%d%%)")],
     _b4_=
      [0,
       [11,
        caml_string_of_jsbytes("hsla("),
        [4,
         0,
         0,
         0,
         [12,
          44,
          [4,
           0,
           0,
           0,
           [12,37,[12,44,[4,0,0,0,[12,37,[12,44,[8,0,0,0,partial$0]]]]]]]]]],
       caml_string_of_jsbytes("hsla(%d,%d%%,%d%%,%f)")],
     _w_=[0,240,248,255],
     _x_=[0,250,235,215],
     _y_=[0,0,255,255],
     _z_=[0,127,255,212],
     _A_=[0,240,255,255],
     _B_=[0,245,245,220],
     _C_=[0,255,228,196],
     _D_=[0,0,0,0],
     _E_=[0,255,235,205],
     _F_=[0,0,0,255],
     _G_=[0,138,43,226],
     _H_=[0,165,42,42],
     _I_=[0,222,184,135],
     _J_=[0,95,158,160],
     _K_=[0,127,255,0],
     _L_=[0,210,105,30],
     _M_=[0,255,127,80],
     _N_=[0,100,149,237],
     _O_=[0,255,248,220],
     _P_=[0,220,20,60],
     _Q_=[0,0,255,255],
     _R_=[0,0,0,139],
     _S_=[0,0,139,139],
     _T_=[0,184,134,11],
     _U_=[0,169,169,169],
     _V_=[0,0,100,0],
     _W_=[0,169,169,169],
     _X_=[0,189,183,107],
     _Y_=[0,139,0,139],
     _Z_=[0,85,107,47],
     ___=[0,255,140,0],
     _$_=[0,153,50,204],
     _aa_=[0,139,0,0],
     _ab_=[0,233,150,122],
     _ac_=[0,143,188,143],
     _ad_=[0,72,61,139],
     _ae_=[0,47,79,79],
     _af_=[0,47,79,79],
     _ag_=[0,0,206,209],
     _ah_=[0,148,0,211],
     _ai_=[0,255,20,147],
     _aj_=[0,0,191,255],
     _ak_=[0,105,105,105],
     _al_=[0,105,105,105],
     _am_=[0,30,144,255],
     _an_=[0,178,34,34],
     _ao_=[0,255,250,240],
     _ap_=[0,34,139,34],
     _aq_=[0,255,0,255],
     _ar_=[0,220,220,220],
     _as_=[0,248,248,255],
     _at_=[0,255,215,0],
     _au_=[0,218,165,32],
     _av_=[0,128,128,128],
     _aw_=[0,128,128,128],
     _ax_=[0,0,128,0],
     _ay_=[0,173,255,47],
     _az_=[0,240,255,240],
     _aA_=[0,255,105,180],
     _aB_=[0,205,92,92],
     _aC_=[0,75,0,130],
     _aD_=[0,255,255,240],
     _aE_=[0,240,230,140],
     _aF_=[0,230,230,250],
     _aG_=[0,255,240,245],
     _aH_=[0,124,252,0],
     _aI_=[0,255,250,205],
     _aJ_=[0,173,216,230],
     _aK_=[0,240,128,128],
     _aL_=[0,224,255,255],
     _aM_=[0,250,250,210],
     _aN_=[0,211,211,211],
     _aO_=[0,144,238,144],
     _aP_=[0,211,211,211],
     _aQ_=[0,255,182,193],
     _aR_=[0,255,160,122],
     _aS_=[0,32,178,170],
     _aT_=[0,135,206,250],
     _aU_=[0,119,136,153],
     _aV_=[0,119,136,153],
     _aW_=[0,176,196,222],
     _aX_=[0,255,255,224],
     _aY_=[0,0,255,0],
     _aZ_=[0,50,205,50],
     _a0_=[0,250,240,230],
     _a1_=[0,255,0,255],
     _a2_=[0,128,0,0],
     _a3_=[0,102,205,170],
     _a4_=[0,0,0,205],
     _a5_=[0,186,85,211],
     _a6_=[0,147,112,219],
     _a7_=[0,60,179,113],
     _a8_=[0,123,104,238],
     _a9_=[0,0,250,154],
     _a__=[0,72,209,204],
     _a$_=[0,199,21,133],
     _ba_=[0,25,25,112],
     _bb_=[0,245,255,250],
     _bc_=[0,255,228,225],
     _bd_=[0,255,228,181],
     _be_=[0,255,222,173],
     _bf_=[0,0,0,128],
     _bg_=[0,253,245,230],
     _bh_=[0,128,128,0],
     _bi_=[0,107,142,35],
     _bj_=[0,255,165,0],
     _bk_=[0,255,69,0],
     _bl_=[0,218,112,214],
     _bm_=[0,238,232,170],
     _bn_=[0,152,251,152],
     _bo_=[0,175,238,238],
     _bp_=[0,219,112,147],
     _bq_=[0,255,239,213],
     _br_=[0,255,218,185],
     _bs_=[0,205,133,63],
     _bt_=[0,255,192,203],
     _bu_=[0,221,160,221],
     _bv_=[0,176,224,230],
     _bw_=[0,128,0,128],
     _bx_=[0,255,0,0],
     _by_=[0,188,143,143],
     _bz_=[0,65,105,225],
     _bA_=[0,139,69,19],
     _bB_=[0,250,128,114],
     _bC_=[0,244,164,96],
     _bD_=[0,46,139,87],
     _bE_=[0,255,245,238],
     _bF_=[0,160,82,45],
     _bG_=[0,192,192,192],
     _bH_=[0,135,206,235],
     _bI_=[0,106,90,205],
     _bJ_=[0,112,128,144],
     _bK_=[0,112,128,144],
     _bL_=[0,255,250,250],
     _bM_=[0,0,255,127],
     _bN_=[0,70,130,180],
     _bO_=[0,210,180,140],
     _bP_=[0,0,128,128],
     _bQ_=[0,216,191,216],
     _bR_=[0,255,99,71],
     _bS_=[0,64,224,208],
     _bT_=[0,238,130,238],
     _bU_=[0,245,222,179],
     _bV_=[0,255,255,255],
     _bW_=[0,245,245,245],
     _bX_=[0,255,255,0],
     _bY_=[0,154,205,50];
    function symbol(x,y){return x < y?1:0}
    function symbol$0(x,y){return x <= y?1:0}
    function symbol$1(x,y){return x !== y?1:0}
    function symbol$2(x,y){return x === y?1:0}
    function symbol$3(x,y){return y < x?1:0}
    function symbol$4(x,y){return y <= x?1:0}
    var compare=runtime.caml_int_compare;
    function equal(x,y){return x === y?1:0}
    function max(x,y){return y <= x?x:y}
    function min(x,y){return x <= y?x:y}
    var
     Int_replace_polymorphic_compar=
      [0,
       symbol,
       symbol$0,
       symbol$1,
       symbol$2,
       symbol$3,
       symbol$4,
       compare,
       equal,
       max,
       min],
     make=Stdlib_string[1],
     init=Stdlib_string[2],
     copy=Stdlib_string[3],
     sub=Stdlib_string[4],
     fill=Stdlib_string[5],
     blit=Stdlib_string[6],
     concat=Stdlib_string[7],
     iter=Stdlib_string[8],
     iteri=Stdlib_string[9],
     map=Stdlib_string[10],
     mapi=Stdlib_string[11],
     trim=Stdlib_string[12],
     escaped=Stdlib_string[13],
     index=Stdlib_string[14],
     index_opt=Stdlib_string[15],
     rindex=Stdlib_string[16],
     rindex_opt=Stdlib_string[17],
     index_from=Stdlib_string[18],
     index_from_opt=Stdlib_string[19],
     rindex_from=Stdlib_string[20],
     rindex_from_opt=Stdlib_string[21],
     contains=Stdlib_string[22],
     contains_from=Stdlib_string[23],
     rcontains_from=Stdlib_string[24],
     uppercase=Stdlib_string[25],
     lowercase=Stdlib_string[26],
     capitalize=Stdlib_string[27],
     uncapitalize=Stdlib_string[28],
     uppercase_ascii=Stdlib_string[29],
     lowercase_ascii=Stdlib_string[30],
     capitalize_ascii=Stdlib_string[31],
     uncapitalize_ascii=Stdlib_string[32],
     compare$0=Stdlib_string[33],
     split_on_char=Stdlib_string[35],
     to_seq=Stdlib_string[36],
     to_seqi=Stdlib_string[37],
     of_seq=Stdlib_string[38],
     equal$0=runtime.caml_string_equal,
     String=
      [0,
       make,
       init,
       copy,
       sub,
       fill,
       blit,
       concat,
       iter,
       iteri,
       map,
       mapi,
       trim,
       escaped,
       index,
       index_opt,
       rindex,
       rindex_opt,
       index_from,
       index_from_opt,
       rindex_from,
       rindex_from_opt,
       contains,
       contains_from,
       rcontains_from,
       uppercase,
       lowercase,
       capitalize,
       uncapitalize,
       uppercase_ascii,
       lowercase_ascii,
       capitalize_ascii,
       uncapitalize_ascii,
       compare$0,
       split_on_char,
       to_seq,
       to_seqi,
       of_seq,
       equal$0],
     chr=Stdlib_char[1],
     escaped$0=Stdlib_char[2],
     lowercase$0=Stdlib_char[3],
     uppercase$0=Stdlib_char[4],
     lowercase_ascii$0=Stdlib_char[5],
     uppercase_ascii$0=Stdlib_char[6],
     compare$1=Stdlib_char[7];
    function equal$1(x,y){return x === y?1:0}
    var
     Char=
      [0,
       chr,
       escaped$0,
       lowercase$0,
       uppercase$0,
       lowercase_ascii$0,
       uppercase_ascii$0,
       compare$1,
       equal$1],
     symbol$5=Int_replace_polymorphic_compar[1],
     symbol$6=Int_replace_polymorphic_compar[2],
     symbol$7=Int_replace_polymorphic_compar[3],
     symbol$8=Int_replace_polymorphic_compar[4],
     symbol$9=Int_replace_polymorphic_compar[5],
     symbol$10=Int_replace_polymorphic_compar[6],
     compare$2=Int_replace_polymorphic_compar[7],
     equal$2=Int_replace_polymorphic_compar[8],
     max$0=Int_replace_polymorphic_compar[9],
     min$0=Int_replace_polymorphic_compar[10],
     Js_of_ocaml_Import=
      [0,
       Poly,
       Int_replace_polymorphic_compar,
       String,
       Char,
       symbol$5,
       symbol$6,
       symbol$7,
       symbol$8,
       symbol$9,
       symbol$10,
       compare$2,
       equal$2,
       max$0,
       min$0];
    caml_register_global(1635,Js_of_ocaml_Import,"Js_of_ocaml__Import");
    var
     global=joo_global_object,
     Unsafe=[0,global],
     no_handler=null,
     t39=undefined;
    function return$0(_gI_){return _gI_}
    function map$0(x,f){return x == no_handler?no_handler:caml_call1(f,x)}
    function bind(x,f){return x == no_handler?no_handler:caml_call1(f,x)}
    function test(x){return 1 - (x == no_handler?1:0)}
    function iter$0(x,f)
     {var _gH_=1 - (x == no_handler?1:0);return _gH_?caml_call1(f,x):_gH_}
    function case$0(x,f,g)
     {return x == no_handler?caml_call1(f,0):caml_call1(g,x)}
    function get(x,f){return x == no_handler?caml_call1(f,0):x}
    function option(x){if(x){var x$0=x[1];return x$0}return no_handler}
    function to_option(x)
     {function _gG_(x){return [0,x]}
      return case$0(x,function(param){return 0},_gG_)}
    var
     Opt=
      [0,
       no_handler,
       return$0,
       map$0,
       bind,
       test,
       iter$0,
       case$0,
       get,
       option,
       to_option];
    function return$1(_gF_){return _gF_}
    function map$1(x,f){return x === t39?t39:caml_call1(f,x)}
    function bind$0(x,f){return x === t39?t39:caml_call1(f,x)}
    function test$0(x){return x !== t39?1:0}
    function iter$1(x,f)
     {var _gE_=x !== t39?1:0;return _gE_?caml_call1(f,x):_gE_}
    function case$1(x,f,g){return x === t39?caml_call1(f,0):caml_call1(g,x)}
    function get$0(x,f){return x === t39?caml_call1(f,0):x}
    function option$0(x){if(x){var x$0=x[1];return x$0}return t39}
    function to_option$0(x)
     {function _gD_(x){return [0,x]}
      return case$1(x,function(param){return 0},_gD_)}
    var
     Optdef=
      [0,
       t39,
       return$1,
       map$1,
       bind$0,
       test$0,
       iter$1,
       case$1,
       get$0,
       option$0,
       to_option$0];
    function coerce(x,f,g)
     {function _gB_(param){return caml_call1(g,x)}
      var _gC_=caml_call1(f,x);
      return caml_call2(Opt[8],_gC_,_gB_)}
    function coerce_opt(x,f,g)
     {function _gz_(param){return caml_call1(g,x)}
      var _gA_=caml_call2(Opt[4],x,f);
      return caml_call2(Opt[8],_gA_,_gz_)}
    var
     true$0=true,
     false$0=false,
     string_constr=Unsafe[1].String,
     regExp_withFlags=Unsafe[1].RegExp,
     object_constructor=Unsafe[1].Object;
    function object_keys(o){return object_constructor.keys(o)}
    var
     array_length=Unsafe[1].Array,
     array_get=caml_js_get,
     array_set=caml_js_set;
    function array_map(f,a)
     {return a.map
              (caml_js_wrap_callback
                (function(x,idx,param){return caml_call1(f,x)}))}
    function array_mapi(f,a)
     {return a.map
              (caml_js_wrap_callback
                (function(x,idx,param){return caml_call2(f,idx,x)}))}
    function str_array(_gy_){return _gy_}
    function match_result(_gx_){return _gx_}
    var
     date_ms=Unsafe[1].Date,
     math=Unsafe[1].Math,
     Error=[248,cst_Js_of_ocaml_Js_Error,caml_fresh_oo_id(0)],
     error_constr=Unsafe[1].Error;
    caml_call2(Stdlib_callback[2],cst_jsError,[0,Error,{}]);
    function raise_js_error(exn){throw exn}
    var JSON=Unsafe[1].JSON;
    function decodeURI(s){return Unsafe[1].decodeURI(s)}
    function decodeURIComponent(s){return Unsafe[1].decodeURIComponent(s)}
    function encodeURI(s){return Unsafe[1].encodeURI(s)}
    function encodeURIComponent(s){return Unsafe[1].encodeURIComponent(s)}
    function escape(s){return Unsafe[1].escape(s)}
    function unescape(s){return Unsafe[1].unescape(s)}
    function isNaN(i){return Unsafe[1].isNaN(i) | 0}
    function parseInt(s)
     {var s$0=Unsafe[1].parseInt(s);
      return isNaN(s$0)?caml_call1(Stdlib[2],cst_parseInt):s$0}
    function parseFloat(s)
     {var s$0=Unsafe[1].parseFloat(s);
      return isNaN(s$0)?caml_call1(Stdlib[2],cst_parseFloat):s$0}
    function _a_(param)
     {if(param[1] === Error)
       {var e=param[2];return [0,caml_string_of_jsstring(e.toString())]}
      return 0}
    caml_call1(Stdlib_printexc[8],_a_);
    function _b_(e)
     {return e instanceof array_length
              ?0
              :[0,caml_string_of_jsstring(e.toString())]}
    caml_call1(Stdlib_printexc[8],_b_);
    function string_of_error(e){return caml_string_of_jsstring(e.toString())}
    function export_js(field,x)
     {return runtime.caml_js_export_var(0)[field] = x}
    function export$0(field,x)
     {return export_js(caml_jsstring_of_string(field),x)}
    function export_all(obj)
     {var keys=object_keys(obj);
      return keys.forEach
              (caml_js_wrap_callback
                (function(key,param,_gw_){return export_js(key,obj[key])}))}
    var _c_=runtime.caml_js_error_of_exception,_d_=caml_exn_with_js_backtrace;
    function _e_(_gv_){return _gv_}
    var
     Js_of_ocaml_Js=
      [0,
       no_handler,
       function(_gu_){return _gu_},
       t39,
       _e_,
       Opt,
       Optdef,
       true$0,
       false$0,
       string_constr,
       regExp_withFlags,
       regExp_withFlags,
       regExp_withFlags,
       object_keys,
       array_length,
       array_length,
       array_get,
       array_set,
       array_map,
       array_mapi,
       str_array,
       match_result,
       date_ms,
       date_ms,
       date_ms,
       date_ms,
       date_ms,
       date_ms,
       date_ms,
       date_ms,
       date_ms,
       math,
       error_constr,
       string_of_error,
       raise_js_error,
       _d_,
       _c_,
       Error,
       JSON,
       decodeURI,
       decodeURIComponent,
       encodeURI,
       encodeURIComponent,
       escape,
       unescape,
       isNaN,
       parseInt,
       parseFloat,
       coerce,
       coerce_opt,
       export$0,
       export_all,
       Unsafe];
    caml_register_global(1639,Js_of_ocaml_Js,"Js_of_ocaml__Js");
    function list_of_nodeList(nodeList)
     {var length=nodeList.length,acc=0,i=0;
      for(;;)
       {if(caml_call2(symbol$5,i,length))
         {var _gt_=nodeList.item(i),match=caml_call1(Opt[10],_gt_);
          if(match)
           {var e=match[1],i$0=i + 1 | 0,acc$0=[0,e,acc],acc=acc$0,i=i$0;
            continue}
          var i$1=i + 1 | 0,i=i$1;
          continue}
        return caml_call1(Stdlib_list[9],acc)}}
    var
     disconnected=1,
     preceding=2,
     following=4,
     contains$0=8,
     contained_by=16,
     implementation_specific=32;
    function has(t,mask){return caml_call2(symbol$8,t & mask,mask)}
    function add(x,y){return x | y}
    var
     DocumentPosition=
      [0,
       disconnected,
       preceding,
       following,
       contains$0,
       contained_by,
       implementation_specific,
       has,
       add,
       add];
    function appendChild(p,n){p.appendChild(n);return 0}
    function removeChild(p,n){p.removeChild(n);return 0}
    function replaceChild(p,n,o){p.replaceChild(n,o);return 0}
    function insertBefore(p,n,o){p.insertBefore(n,o);return 0}
    function nodeType(e)
     {var match=e.nodeType;
      if(0 !== match)
       {var switcher=match - 1 | 0;
        switch(switcher)
         {case 0:return [0,e];case 1:return [1,e];case 2:case 3:return [2,e]}}
      return [3,e]}
    function cast(e,t){return e.nodeType === t?e:no_handler}
    function element(e){return cast(e,1)}
    function text(e)
     {if(3 !== e.nodeType && 4 !== e.nodeType)return no_handler;return e}
    function attr(e){return cast(e,2)}
    function handler(f)
     {return function(e)
       {if(caml_call1(Opt[5],e))
         {var res=caml_call1(f,e);
          if(1 - (res | 0))e.preventDefault();
          return res}
        var e$0=event,res$0=caml_call1(f,e$0);
        if(1 - (res$0 | 0))e$0.returnValue = res$0;
        return res$0}}
    function full_handler(f)
     {return runtime.caml_js_wrap_meth_callback_unsafe
              (function(this$0,e)
                {if(caml_call1(Opt[5],e))
                  {var res=caml_call2(f,this$0,e);
                   if(1 - (res | 0))e.preventDefault();
                   return res}
                 var e$0=event,res$0=caml_call2(f,this$0,e$0);
                 if(1 - (res$0 | 0))e$0.returnValue = res$0;
                 return res$0})}
    function invoke_handler(f,this$0,event){return f.call(this$0,event)}
    function eventTarget(e)
     {function _gq_(param)
       {function _gs_(param){throw Stdlib[8]}
        return caml_call2(Opt[8],e.srcElement,_gs_)}
      var target=caml_call2(Opt[8],e.target,_gq_);
      if(target instanceof Unsafe[1].Node)
       {if(3 === target.nodeType)
         {var _gr_=function(param){throw [0,Assert_failure,_f_]};
          return caml_call2(Opt[8],target.parentNode,_gr_)}
        return target}
      return target}
    var make$0=caml_jsstring_of_string,Event=[0,make$0];
    function addEventListenerWithOptions(e,typ,capture,once,passive,h)
     {if(e.addEventListener === t39)
       {var
         ev="on".concat(typ),
         callback=
          function(e)
           {var _gn_=[0,h,e,[0]];
            return function(_go_,_gp_)
             {return runtime.caml_js_call(_gn_,_go_,_gp_)}};
        e.attachEvent(ev,callback);
        return function(param){return e.detachEvent(ev,callback)}}
      var opts={};
      function iter(t,f){if(t){var b=t[1];return caml_call1(f,b)}return 0}
      iter(capture,function(b){return opts.capture = b});
      iter(once,function(b){return opts.once = b});
      iter(passive,function(b){return opts.passive = b});
      e.addEventListener(typ,h,opts);
      return function(param){return e.removeEventListener(typ,h,opts)}}
    function addEventListener(e,typ,h,capt)
     {return addEventListenerWithOptions(e,typ,[0,capt],0,0,h)}
    function removeEventListener(id){return caml_call1(id,0)}
    function preventDefault(ev)
     {return caml_call1(Optdef[5],ev.preventDefault)
              ?ev.preventDefault()
              :ev.returnValue = ! ! 0}
    function createCustomEvent(bubbles,cancelable,detail,typ)
     {function opt_iter(f,param)
       {if(param){var x=param[1];return caml_call1(f,x)}return 0}
      var opts={};
      opt_iter(function(x){return opts.bubbles = ! ! x},bubbles);
      opt_iter(function(x){return opts.cancelable = ! ! x},cancelable);
      opt_iter(function(x){return opts.detail = x},detail);
      var constr=Unsafe[1].CustomEvent;
      return new constr(typ,opts)}
    var
     Js_of_ocaml_Dom=
      [0,
       DocumentPosition,
       insertBefore,
       replaceChild,
       removeChild,
       appendChild,
       list_of_nodeList,
       nodeType,
       [0,element,text,attr],
       no_handler,
       handler,
       full_handler,
       invoke_handler,
       eventTarget,
       Event,
       addEventListenerWithOptions,
       addEventListener,
       removeEventListener,
       preventDefault,
       createCustomEvent];
    caml_register_global(1642,Js_of_ocaml_Dom,"Js_of_ocaml__Dom");
    var
     arrayBuffer=Unsafe[1].ArrayBuffer,
     int8Array_inBuffer=Unsafe[1].Int8Array,
     uint8Array_fromBuffer=Unsafe[1].Uint8Array,
     int16Array_inBuffer=Unsafe[1].Int16Array,
     uint16Array_inBuffer=Unsafe[1].Uint16Array,
     int32Array_inBuffer=Unsafe[1].Int32Array,
     uint32Array_inBuffer=Unsafe[1].Uint32Array,
     float32Array_inBuffer=Unsafe[1].Float32Array,
     float64Array_inBuffer=Unsafe[1].Float64Array,
     set=caml_js_set,
     get$1=caml_js_get,
     unsafe_get=caml_js_get,
     dataView=Unsafe[1].DataView;
    function of_arrayBuffer(ab)
     {var uint8=new uint8Array_fromBuffer(ab);
      return caml_string_of_array(uint8)}
    var
     Js_of_ocaml_Typed_array=
      [0,
       arrayBuffer,
       runtime.caml_ba_kind_of_typed_array,
       runtime.caml_ba_to_typed_array,
       runtime.caml_ba_from_typed_array,
       int8Array_inBuffer,
       int8Array_inBuffer,
       int8Array_inBuffer,
       int8Array_inBuffer,
       int8Array_inBuffer,
       uint8Array_fromBuffer,
       uint8Array_fromBuffer,
       uint8Array_fromBuffer,
       uint8Array_fromBuffer,
       uint8Array_fromBuffer,
       int16Array_inBuffer,
       int16Array_inBuffer,
       int16Array_inBuffer,
       int16Array_inBuffer,
       int16Array_inBuffer,
       uint16Array_inBuffer,
       uint16Array_inBuffer,
       uint16Array_inBuffer,
       uint16Array_inBuffer,
       uint16Array_inBuffer,
       int32Array_inBuffer,
       int32Array_inBuffer,
       int32Array_inBuffer,
       int32Array_inBuffer,
       int32Array_inBuffer,
       uint32Array_inBuffer,
       uint32Array_inBuffer,
       uint32Array_inBuffer,
       uint32Array_inBuffer,
       uint32Array_inBuffer,
       float32Array_inBuffer,
       float32Array_inBuffer,
       float32Array_inBuffer,
       float32Array_inBuffer,
       float32Array_inBuffer,
       float64Array_inBuffer,
       float64Array_inBuffer,
       float64Array_inBuffer,
       float64Array_inBuffer,
       float64Array_inBuffer,
       set,
       get$1,
       unsafe_get,
       dataView,
       dataView,
       [0,
        runtime.bigstring_to_array_buffer,
        runtime.bigstring_to_typed_array,
        runtime.bigstring_of_array_buffer,
        runtime.bigstring_of_typed_array],
       [0,of_arrayBuffer,caml_string_of_array]];
    caml_register_global
     (1643,Js_of_ocaml_Typed_array,"Js_of_ocaml__Typed_array");
    var blob_constr=Unsafe[1].Blob;
    function filter_map(f,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var q=param$0[2],v=param$0[1],match=caml_call1(f,v);
          if(match){var v$0=match[1];return [0,v$0,filter_map(f,q)]}
          var param$0=q;
          continue}
        return 0}}
    function blob_raw(contentType,endings,a)
     {var _gj_=0;
      if(endings)
       var _gk_=116179762 <= endings[1]?_g_:_h_,_gl_=_gk_;
      else
       var _gl_=0;
      var
       _gm_=[0,[0,cst_type,contentType],[0,[0,cst_endings,_gl_],_gj_]],
       options=
        filter_map
         (function(param)
           {var v=param[2],name=param[1];
            if(v)
             {var v$0=v[1];return [0,[0,name,caml_jsstring_of_string(v$0)]]}
            return 0},
          _gm_),
       options$0=
        options
         ?runtime.caml_js_object(caml_call1(Stdlib_array[12],options))
         :t39;
      return new blob_constr(caml_js_from_array(a),options$0)}
    function blob_from_string(contentType,endings,s)
     {return blob_raw(contentType,endings,[0,caml_jsstring_of_string(s)])}
    function blob_from_any(contentType,endings,l)
     {function _gh_(param)
       {var _gi_=param[1];
        if(155580615 === _gi_){var s=param[2];return s}
        if(486041214 <= _gi_)
         {if(1037850489 <= _gi_){var a=param[2];return a}
          var a$0=param[2];
          return a$0}
        if(288368849 <= _gi_)
         {var s$0=param[2];return caml_jsstring_of_string(s$0)}
        var b=param[2];
        return b}
      var l$0=caml_call2(Stdlib_list[17],_gh_,l);
      return blob_raw(contentType,endings,caml_call1(Stdlib_array[12],l$0))}
    function filename(file)
     {var match=caml_call1(Optdef[10],file.name);
      if(match){var name=match[1];return name}
      var match$0=caml_call1(Optdef[10],file.fileName);
      if(match$0){var name$0=match$0[1];return name$0}
      return caml_call1(Stdlib[2],cst_can_t_retrieve_file_name_n)}
    var doc_constr=Unsafe[1].Document;
    function document(e){return e instanceof doc_constr?e:no_handler}
    function blob(e){return e instanceof blob_constr?e:no_handler}
    function string(e){return typeof e === "string"?e:no_handler}
    function arrayBuffer$0(e){return e instanceof arrayBuffer?e:no_handler}
    var
     loadstart=caml_call1(Event[1],cst_loadstart),
     progress=caml_call1(Event[1],cst_progress),
     abort=caml_call1(Event[1],cst_abort),
     error=caml_call1(Event[1],cst_error),
     load=caml_call1(Event[1],cst_load),
     loadend=caml_call1(Event[1],cst_loadend),
     ReaderEvent=[0,loadstart,progress,abort,error,load,loadend],
     fileReader=Unsafe[1].FileReader,
     Js_of_ocaml_File=
      [0,
       blob_from_string,
       blob_from_any,
       [0,document,blob,function(_gg_){return _gg_},string,arrayBuffer$0],
       ReaderEvent,
       filename,
       fileReader,
       addEventListener];
    caml_register_global(1645,Js_of_ocaml_File,"Js_of_ocaml__File");
    var
     onIE=runtime.caml_js_on_ie(0) | 0,
     click=caml_call1(Event[1],cst_click),
     copy$0=caml_call1(Event[1],cst_copy),
     cut=caml_call1(Event[1],cst_cut),
     paste=caml_call1(Event[1],cst_paste),
     dblclick=caml_call1(Event[1],cst_dblclick),
     mousedown=caml_call1(Event[1],cst_mousedown),
     mouseup=caml_call1(Event[1],cst_mouseup),
     mouseover=caml_call1(Event[1],cst_mouseover),
     mousemove=caml_call1(Event[1],cst_mousemove),
     mouseout=caml_call1(Event[1],cst_mouseout),
     keypress=caml_call1(Event[1],cst_keypress),
     keydown=caml_call1(Event[1],cst_keydown),
     keyup=caml_call1(Event[1],cst_keyup),
     mousewheel=caml_call1(Event[1],cst_mousewheel),
     DOMMouseScroll=caml_call1(Event[1],cst_DOMMouseScroll),
     touchstart=caml_call1(Event[1],cst_touchstart),
     touchmove=caml_call1(Event[1],cst_touchmove),
     touchend=caml_call1(Event[1],cst_touchend),
     touchcancel=caml_call1(Event[1],cst_touchcancel),
     dragstart=caml_call1(Event[1],cst_dragstart),
     dragend=caml_call1(Event[1],cst_dragend),
     dragenter=caml_call1(Event[1],cst_dragenter),
     dragover=caml_call1(Event[1],cst_dragover),
     dragleave=caml_call1(Event[1],cst_dragleave),
     drag=caml_call1(Event[1],cst_drag),
     drop=caml_call1(Event[1],cst_drop),
     hashchange=caml_call1(Event[1],cst_hashchange),
     change=caml_call1(Event[1],cst_change),
     input=caml_call1(Event[1],cst_input),
     timeupdate=caml_call1(Event[1],cst_timeupdate),
     submit=caml_call1(Event[1],cst_submit),
     scroll=caml_call1(Event[1],cst_scroll),
     focus=caml_call1(Event[1],cst_focus),
     blur=caml_call1(Event[1],cst_blur),
     load$0=caml_call1(Event[1],cst_load$0),
     unload=caml_call1(Event[1],cst_unload),
     beforeunload=caml_call1(Event[1],cst_beforeunload),
     resize=caml_call1(Event[1],cst_resize),
     orientationchange=caml_call1(Event[1],cst_orientationchange),
     popstate=caml_call1(Event[1],cst_popstate),
     error$0=caml_call1(Event[1],cst_error$0),
     abort$0=caml_call1(Event[1],cst_abort$0),
     select=caml_call1(Event[1],cst_select),
     online=caml_call1(Event[1],cst_online),
     offline=caml_call1(Event[1],cst_offline),
     checking=caml_call1(Event[1],cst_checking),
     noupdate=caml_call1(Event[1],cst_noupdate),
     downloading=caml_call1(Event[1],cst_downloading),
     progress$0=caml_call1(Event[1],cst_progress$0),
     updateready=caml_call1(Event[1],cst_updateready),
     cached=caml_call1(Event[1],cst_cached),
     obsolete=caml_call1(Event[1],cst_obsolete),
     domContentLoaded=caml_call1(Event[1],cst_DOMContentLoaded),
     animationstart=caml_call1(Event[1],cst_animationstart),
     animationend=caml_call1(Event[1],cst_animationend),
     animationiteration=caml_call1(Event[1],cst_animationiteration),
     animationcancel=caml_call1(Event[1],cst_animationcancel),
     canplay=caml_call1(Event[1],cst_canplay),
     canplaythrough=caml_call1(Event[1],cst_canplaythrough),
     durationchange=caml_call1(Event[1],cst_durationchange),
     emptied=caml_call1(Event[1],cst_emptied),
     ended=caml_call1(Event[1],cst_ended),
     gotpointercapture=caml_call1(Event[1],cst_gotpointercapture),
     loadeddata=caml_call1(Event[1],cst_loadeddata),
     loadedmetadata=caml_call1(Event[1],cst_loadedmetadata),
     loadstart$0=caml_call1(Event[1],cst_loadstart$0),
     lostpointercapture=caml_call1(Event[1],cst_lostpointercapture),
     pause=caml_call1(Event[1],cst_pause),
     play=caml_call1(Event[1],cst_play),
     playing=caml_call1(Event[1],cst_playing),
     pointerenter=caml_call1(Event[1],cst_pointerenter),
     pointercancel=caml_call1(Event[1],cst_pointercancel),
     pointerdown=caml_call1(Event[1],cst_pointerdown),
     pointerleave=caml_call1(Event[1],cst_pointerleave),
     pointermove=caml_call1(Event[1],cst_pointermove),
     pointerout=caml_call1(Event[1],cst_pointerout),
     pointerover=caml_call1(Event[1],cst_pointerover),
     pointerup=caml_call1(Event[1],cst_pointerup),
     ratechange=caml_call1(Event[1],cst_ratechange),
     seeked=caml_call1(Event[1],cst_seeked),
     seeking=caml_call1(Event[1],cst_seeking),
     stalled=caml_call1(Event[1],cst_stalled),
     suspend=caml_call1(Event[1],cst_suspend),
     volumechange=caml_call1(Event[1],cst_volumechange),
     waiting=caml_call1(Event[1],cst_waiting),
     make$1=Event[1],
     Event$0=
      [0,
       click,
       copy$0,
       cut,
       paste,
       dblclick,
       mousedown,
       mouseup,
       mouseover,
       mousemove,
       mouseout,
       keypress,
       keydown,
       keyup,
       mousewheel,
       DOMMouseScroll,
       touchstart,
       touchmove,
       touchend,
       touchcancel,
       dragstart,
       dragend,
       dragenter,
       dragover,
       dragleave,
       drag,
       drop,
       hashchange,
       change,
       input,
       timeupdate,
       submit,
       scroll,
       focus,
       blur,
       load$0,
       unload,
       beforeunload,
       resize,
       orientationchange,
       popstate,
       error$0,
       abort$0,
       select,
       online,
       offline,
       checking,
       noupdate,
       downloading,
       progress$0,
       updateready,
       cached,
       obsolete,
       domContentLoaded,
       animationstart,
       animationend,
       animationiteration,
       animationcancel,
       canplay,
       canplaythrough,
       durationchange,
       emptied,
       ended,
       gotpointercapture,
       loadeddata,
       loadedmetadata,
       loadstart$0,
       lostpointercapture,
       pause,
       play,
       playing,
       pointerenter,
       pointercancel,
       pointerdown,
       pointerleave,
       pointermove,
       pointerout,
       pointerover,
       pointerup,
       ratechange,
       seeked,
       seeking,
       stalled,
       suspend,
       volumechange,
       waiting,
       make$1],
     d="2d";
    function location_origin(loc)
     {function _ge_(o){return o}
      function _gf_(param)
       {var protocol=loc.protocol,hostname=loc.hostname,port=loc.port;
        if
         (caml_call2(symbol$8,protocol.length,0)
          &&
          caml_call2(symbol$8,hostname.length,0))
         return "";
        var origin=protocol.concat("//",hostname);
        return caml_call2(symbol$9,port.length,0)
                ?origin.concat(":",loc.port)
                :origin}
      return caml_call3(Optdef[7],loc.origin,_gf_,_ge_)}
    var _i_=Unsafe[1],document$0=_i_.document;
    function getElementById(id)
     {function _gb_(pnode){return pnode}
      function _gc_(param){throw Stdlib[8]}
      var _gd_=document$0.getElementById(caml_jsstring_of_string(id));
      return caml_call3(Opt[7],_gd_,_gc_,_gb_)}
    function getElementById_exn(id)
     {function _f9_(pnode){return pnode}
      function _f__(param)
       {var _ga_=caml_call2(Stdlib_printf[4],_j_,id);
        return caml_call1(Stdlib[2],_ga_)}
      var _f$_=document$0.getElementById(caml_jsstring_of_string(id));
      return caml_call3(Opt[7],_f$_,_f__,_f9_)}
    function getElementById_opt(id)
     {var _f8_=document$0.getElementById(caml_jsstring_of_string(id));
      return caml_call1(Opt[10],_f8_)}
    function getElementById_coerce(id,coerce)
     {function _f4_(e)
       {var _f7_=caml_call1(coerce,e);return caml_call1(Opt[10],_f7_)}
      function _f5_(param){return 0}
      var _f6_=document$0.getElementById(caml_jsstring_of_string(id));
      return caml_call3(Opt[7],_f6_,_f5_,_f4_)}
    function opt_iter(x,f){if(x){var v=x[1];return caml_call1(f,v)}return 0}
    function createElement(doc,name)
     {return doc.createElement(caml_jsstring_of_string(name))}
    function unsafeCreateElement(doc,name){return createElement(doc,name)}
    var createElementSyntax=[0,785140586];
    function unsafeCreateElementEx(type,name,doc,elt)
     {for(;;)
       {if(0 === type && 0 === name)return createElement(doc,elt);
        var _fY_=createElementSyntax[1];
        if(785140586 === _fY_)
         {try
           {var
             el=document$0.createElement('<input name="x">'),
             _f1_=el.tagName.toLowerCase() === "input"?1:0,
             _f2_=_f1_?el.name === "x"?1:0:_f1_,
             _fZ_=_f2_}
          catch(_f3_){var _fZ_=0}
          var _f0_=_fZ_?982028505:-1003883683;
          createElementSyntax[1] = _f0_;
          continue}
        if(982028505 <= _fY_)
         {var a=new array_length();
          a.push("<",caml_jsstring_of_string(elt));
          opt_iter
           (type,
            function(t){a.push(' type="',caml_js_html_escape(t),'"');return 0});
          opt_iter
           (name,
            function(n){a.push(' name="',caml_js_html_escape(n),'"');return 0});
          a.push(">");
          return doc.createElement(a.join(""))}
        var res=createElement(doc,elt);
        opt_iter(type,function(t){return res.type = t});
        opt_iter(name,function(n){return res.name = n});
        return res}}
    function createHtml(doc){return unsafeCreateElement(doc,cst_html)}
    function createHead(doc){return unsafeCreateElement(doc,cst_head)}
    function createLink(doc){return unsafeCreateElement(doc,cst_link)}
    function createTitle(doc){return unsafeCreateElement(doc,cst_title)}
    function createMeta(doc){return unsafeCreateElement(doc,cst_meta)}
    function createBase(doc){return unsafeCreateElement(doc,cst_base)}
    function createStyle(doc){return unsafeCreateElement(doc,cst_style)}
    function createBody(doc){return unsafeCreateElement(doc,cst_body)}
    function createForm(doc){return unsafeCreateElement(doc,cst_form)}
    function createOptgroup(doc){return unsafeCreateElement(doc,cst_optgroup)}
    function createOption(doc){return unsafeCreateElement(doc,cst_option)}
    function createSelect(type,name,doc)
     {return unsafeCreateElementEx(type,name,doc,cst_select$0)}
    function createInput(type,name,doc)
     {return unsafeCreateElementEx(type,name,doc,cst_input$0)}
    function createTextarea(type,name,doc)
     {return unsafeCreateElementEx(type,name,doc,cst_textarea)}
    function createButton(type,name,doc)
     {return unsafeCreateElementEx(type,name,doc,cst_button)}
    function createLabel(doc){return unsafeCreateElement(doc,cst_label)}
    function createFieldset(doc){return unsafeCreateElement(doc,cst_fieldset)}
    function createLegend(doc){return unsafeCreateElement(doc,cst_legend)}
    function createUl(doc){return unsafeCreateElement(doc,cst_ul)}
    function createOl(doc){return unsafeCreateElement(doc,cst_ol)}
    function createDl(doc){return unsafeCreateElement(doc,cst_dl)}
    function createLi(doc){return unsafeCreateElement(doc,cst_li)}
    function createDiv(doc){return unsafeCreateElement(doc,cst_div)}
    function createEmbed(doc){return unsafeCreateElement(doc,cst_embed)}
    function createP(doc){return unsafeCreateElement(doc,cst_p)}
    function createH1(doc){return unsafeCreateElement(doc,cst_h1)}
    function createH2(doc){return unsafeCreateElement(doc,cst_h2)}
    function createH3(doc){return unsafeCreateElement(doc,cst_h3)}
    function createH4(doc){return unsafeCreateElement(doc,cst_h4)}
    function createH5(doc){return unsafeCreateElement(doc,cst_h5)}
    function createH6(doc){return unsafeCreateElement(doc,cst_h6)}
    function createQ(doc){return unsafeCreateElement(doc,cst_q)}
    function createBlockquote(doc)
     {return unsafeCreateElement(doc,cst_blockquote)}
    function createPre(doc){return unsafeCreateElement(doc,cst_pre)}
    function createBr(doc){return unsafeCreateElement(doc,cst_br)}
    function createHr(doc){return unsafeCreateElement(doc,cst_hr)}
    function createIns(doc){return unsafeCreateElement(doc,cst_ins)}
    function createDel(doc){return unsafeCreateElement(doc,cst_del)}
    function createA(doc){return unsafeCreateElement(doc,cst_a)}
    function createImg(doc){return unsafeCreateElement(doc,cst_img)}
    function createObject(doc){return unsafeCreateElement(doc,cst_object)}
    function createParam(doc){return unsafeCreateElement(doc,cst_param)}
    function createMap(doc){return unsafeCreateElement(doc,cst_map)}
    function createArea(doc){return unsafeCreateElement(doc,cst_area)}
    function createScript(doc){return unsafeCreateElement(doc,cst_script)}
    function createTable(doc){return unsafeCreateElement(doc,cst_table)}
    function createCaption(doc){return unsafeCreateElement(doc,cst_caption)}
    function createCol(doc){return unsafeCreateElement(doc,cst_col)}
    function createColgroup(doc){return unsafeCreateElement(doc,cst_colgroup)}
    function createThead(doc){return unsafeCreateElement(doc,cst_thead)}
    function createTfoot(doc){return unsafeCreateElement(doc,cst_tfoot)}
    function createTbody(doc){return unsafeCreateElement(doc,cst_tbody)}
    function createTr(doc){return unsafeCreateElement(doc,cst_tr)}
    function createTh(doc){return unsafeCreateElement(doc,cst_th)}
    function createTd(doc){return unsafeCreateElement(doc,cst_td)}
    function createSub(doc){return createElement(doc,cst_sub)}
    function createSup(doc){return createElement(doc,cst_sup)}
    function createSpan(doc){return createElement(doc,cst_span)}
    function createTt(doc){return createElement(doc,cst_tt)}
    function createI(doc){return createElement(doc,cst_i)}
    function createB(doc){return createElement(doc,cst_b)}
    function createBig(doc){return createElement(doc,cst_big)}
    function createSmall(doc){return createElement(doc,cst_small)}
    function createEm(doc){return createElement(doc,cst_em)}
    function createStrong(doc){return createElement(doc,cst_strong)}
    function createCite(doc){return createElement(doc,cst_cite)}
    function createDfn(doc){return createElement(doc,cst_dfn)}
    function createCode(doc){return createElement(doc,cst_code)}
    function createSamp(doc){return createElement(doc,cst_samp)}
    function createKbd(doc){return createElement(doc,cst_kbd)}
    function createVar(doc){return createElement(doc,cst_var)}
    function createAbbr(doc){return createElement(doc,cst_abbr)}
    function createDd(doc){return createElement(doc,cst_dd)}
    function createDt(doc){return createElement(doc,cst_dt)}
    function createNoscript(doc){return createElement(doc,cst_noscript)}
    function createAddress(doc){return createElement(doc,cst_address)}
    function createFrameset(doc){return unsafeCreateElement(doc,cst_frameset)}
    function createFrame(doc){return unsafeCreateElement(doc,cst_frame)}
    function createIframe(doc){return unsafeCreateElement(doc,cst_iframe)}
    function createAudio(doc){return unsafeCreateElement(doc,cst_audio)}
    function createVideo(doc){return unsafeCreateElement(doc,cst_video)}
    var
     Canvas_not_available=
      [248,cst_Js_of_ocaml_Dom_html_Canva,caml_fresh_oo_id(0)];
    function createCanvas(doc)
     {var c=unsafeCreateElement(doc,cst_canvas);
      if(1 - caml_call1(Opt[5],c.getContext))throw Canvas_not_available;
      return c}
    var
     html_element=Unsafe[1].HTMLElement,
     element$0=
      html_element === t39
       ?function(e){return e.innerHTML === t39?no_handler:e}
       :function(e){return e instanceof html_element?e:no_handler};
    function unsafeCoerce(tag,e)
     {var _fX_=caml_jsstring_of_string(tag);
      return e.tagName.toLowerCase() === _fX_?e:no_handler}
    function a(e){return unsafeCoerce(cst_a$0,e)}
    function area(e){return unsafeCoerce(cst_area$0,e)}
    function base(e){return unsafeCoerce(cst_base$0,e)}
    function blockquote(e){return unsafeCoerce(cst_blockquote$0,e)}
    function body(e){return unsafeCoerce(cst_body$0,e)}
    function br(e){return unsafeCoerce(cst_br$0,e)}
    function button(e){return unsafeCoerce(cst_button$0,e)}
    function canvas(e){return unsafeCoerce(cst_canvas$0,e)}
    function caption(e){return unsafeCoerce(cst_caption$0,e)}
    function col(e){return unsafeCoerce(cst_col$0,e)}
    function colgroup(e){return unsafeCoerce(cst_colgroup$0,e)}
    function del(e){return unsafeCoerce(cst_del$0,e)}
    function div(e){return unsafeCoerce(cst_div$0,e)}
    function dl(e){return unsafeCoerce(cst_dl$0,e)}
    function fieldset(e){return unsafeCoerce(cst_fieldset$0,e)}
    function embed(e){return unsafeCoerce(cst_embed$0,e)}
    function form(e){return unsafeCoerce(cst_form$0,e)}
    function frameset(e){return unsafeCoerce(cst_frameset$0,e)}
    function frame(e){return unsafeCoerce(cst_frame$0,e)}
    function h1(e){return unsafeCoerce(cst_h1$0,e)}
    function h2(e){return unsafeCoerce(cst_h2$0,e)}
    function h3(e){return unsafeCoerce(cst_h3$0,e)}
    function h4(e){return unsafeCoerce(cst_h4$0,e)}
    function h5(e){return unsafeCoerce(cst_h5$0,e)}
    function h6(e){return unsafeCoerce(cst_h6$0,e)}
    function head(e){return unsafeCoerce(cst_head$0,e)}
    function hr(e){return unsafeCoerce(cst_hr$0,e)}
    function html(e){return unsafeCoerce(cst_html$0,e)}
    function iframe(e){return unsafeCoerce(cst_iframe$0,e)}
    function img(e){return unsafeCoerce(cst_img$0,e)}
    function input$0(e){return unsafeCoerce(cst_input$1,e)}
    function ins(e){return unsafeCoerce(cst_ins$0,e)}
    function label(e){return unsafeCoerce(cst_label$0,e)}
    function legend(e){return unsafeCoerce(cst_legend$0,e)}
    function li(e){return unsafeCoerce(cst_li$0,e)}
    function link(e){return unsafeCoerce(cst_link$0,e)}
    function map$2(e){return unsafeCoerce(cst_map$0,e)}
    function meta(e){return unsafeCoerce(cst_meta$0,e)}
    function object(e){return unsafeCoerce(cst_object$0,e)}
    function ol(e){return unsafeCoerce(cst_ol$0,e)}
    function optgroup(e){return unsafeCoerce(cst_optgroup$0,e)}
    function option$1(e){return unsafeCoerce(cst_option$0,e)}
    function p(e){return unsafeCoerce(cst_p$0,e)}
    function param(e){return unsafeCoerce(cst_param$0,e)}
    function pre(e){return unsafeCoerce(cst_pre$0,e)}
    function q(e){return unsafeCoerce(cst_q$0,e)}
    function script(e){return unsafeCoerce(cst_script$0,e)}
    function select$0(e){return unsafeCoerce(cst_select$1,e)}
    function style(e){return unsafeCoerce(cst_style$0,e)}
    function table(e){return unsafeCoerce(cst_table$0,e)}
    function tbody(e){return unsafeCoerce(cst_tbody$0,e)}
    function td(e){return unsafeCoerce(cst_td$0,e)}
    function textarea(e){return unsafeCoerce(cst_textarea$0,e)}
    function tfoot(e){return unsafeCoerce(cst_tfoot$0,e)}
    function th(e){return unsafeCoerce(cst_th$0,e)}
    function thead(e){return unsafeCoerce(cst_thead$0,e)}
    function title(e){return unsafeCoerce(cst_title$0,e)}
    function tr(e){return unsafeCoerce(cst_tr$0,e)}
    function ul(e){return unsafeCoerce(cst_ul$0,e)}
    function audio(e){return unsafeCoerce(cst_audio$0,e)}
    function video(e){return unsafeCoerce(cst_video$0,e)}
    function unsafeCoerceEvent(constr,ev)
     {if(constr !== t39 && ev instanceof constr)return ev;return no_handler}
    function mouseEvent(ev){return unsafeCoerceEvent(Unsafe[1].MouseEvent,ev)}
    function keyboardEvent(ev)
     {return unsafeCoerceEvent(Unsafe[1].KeyboardEvent,ev)}
    function wheelEvent(ev){return unsafeCoerceEvent(Unsafe[1].WheelEvent,ev)}
    function mouseScrollEvent(ev)
     {return unsafeCoerceEvent(Unsafe[1].MouseScrollEvent,ev)}
    function popStateEvent(ev)
     {return unsafeCoerceEvent(Unsafe[1].PopStateEvent,ev)}
    function eventRelatedTarget(e)
     {function _fU_(param)
       {var match=caml_string_of_jsstring(e.type);
        if(caml_string_notequal(match,cst_mouseout$0))
         {if(caml_string_notequal(match,cst_mouseover$0))return no_handler;
          var _fV_=function(param){throw [0,Assert_failure,_k_]};
          return caml_call2(Optdef[8],e.fromElement,_fV_)}
        function _fW_(param){throw [0,Assert_failure,_l_]}
        return caml_call2(Optdef[8],e.toElement,_fW_)}
      return caml_call2(Optdef[8],e.relatedTarget,_fU_)}
    function eventAbsolutePosition(e)
     {var body=document$0.body,html=document$0.documentElement;
      return [0,
              (e.clientX + body.scrollLeft | 0) + html.scrollLeft | 0,
              (e.clientY + body.scrollTop | 0) + html.scrollTop | 0]}
    function eventAbsolutePosition$0(e)
     {function _fQ_(x)
       {function _fS_(y){return [0,x,y]}
        function _fT_(param){return eventAbsolutePosition(e)}
        return caml_call3(Optdef[7],e.pageY,_fT_,_fS_)}
      function _fR_(param){return eventAbsolutePosition(e)}
      return caml_call3(Optdef[7],e.pageX,_fR_,_fQ_)}
    function elementClientPosition(e)
     {var
       r=e.getBoundingClientRect(),
       body=document$0.body,
       html=document$0.documentElement;
      return [0,
              ((r.left | 0) - body.clientLeft | 0) - html.clientLeft | 0,
              ((r.top | 0) - body.clientTop | 0) - html.clientTop | 0]}
    function getDocumentScroll(param)
     {var body=document$0.body,html=document$0.documentElement;
      return [0,
              body.scrollLeft + html.scrollLeft | 0,
              body.scrollTop + html.scrollTop | 0]}
    function buttonPressed(ev)
     {function _fO_(x){return x}
      function _fP_(param)
       {var match=ev.button,switcher=match - 1 | 0;
        if(! (3 < switcher >>> 0))
         switch(switcher)
          {case 0:return 1;case 1:return 3;case 2:break;default:return 2}
        return 0}
      return caml_call3(Optdef[7],ev.which,_fP_,_fO_)}
    function addMousewheelEventListenerWith(e,capture,once,passive,h)
     {var d=createDiv(document$0);
      d.setAttribute("onmousewheel","return;");
      if(typeof d.onmousewheel === "function")
       {var
         _fK_=
          handler
           (function(e)
             {function _fM_(param){return 0}
              var
               dx=
                (- caml_call2(Optdef[8],e.wheelDeltaX,_fM_) | 0) / 40 | 0;
              function _fN_(param){return e.wheelDelta}
              var
               dy=
                (- caml_call2(Optdef[8],e.wheelDeltaY,_fN_) | 0) / 40 | 0;
              return caml_call3(h,e,dx,dy)});
        return addEventListenerWithOptions
                (e,Event$0[14],capture,once,passive,_fK_)}
      var
       _fL_=
        handler
         (function(e)
           {var d=e.detail;
            return e.axis === e.HORIZONTAL
                    ?caml_call3(h,e,d,0)
                    :caml_call3(h,e,0,d)});
      return addEventListenerWithOptions
              (e,Event$0[15],capture,once,passive,_fL_)}
    function addMousewheelEventListener(e,h,capt)
     {return addMousewheelEventListenerWith(e,[0,capt],0,0,h)}
    function f(v)
     {var
       match=caml_string_of_jsstring(v),
       switch$0=caml_string_compare(match,cst_KeyH);
      if(0 <= switch$0)
       {if(! (0 < switch$0))return 8;
        var switch$1=caml_string_compare(match,cst_Numpad4);
        if(0 <= switch$1)
         {if(! (0 < switch$1))return 72;
          var switch$2=caml_string_compare(match,cst_PageUp);
          if(0 <= switch$2)
           {if(! (0 < switch$2))return 98;
            var switch$3=caml_string_compare(match,cst_ShiftRight);
            if(0 <= switch$3)
             {if(! (0 < switch$3))return 91;
              if(! caml_string_notequal(match,cst_Slash))return 55;
              if(! caml_string_notequal(match,cst_Space))return 41;
              if(! caml_string_notequal(match,cst_Tab))return 39;
              if(! caml_string_notequal(match,cst_VolumeDown))return 103;
              if(! caml_string_notequal(match,cst_VolumeMute))return 102;
              if(! caml_string_notequal(match,cst_VolumeUp))return 104}
            else
             {if(! caml_string_notequal(match,cst_Pause))return 123;
              if(! caml_string_notequal(match,cst_Period))return 54;
              if(! caml_string_notequal(match,cst_PrintScreen))return 120;
              if(! caml_string_notequal(match,cst_Quote))return 50;
              if(! caml_string_notequal(match,cst_ScrollLock))return 119;
              if(! caml_string_notequal(match,cst_Semicolon))return 49;
              if(! caml_string_notequal(match,cst_ShiftLeft))return 90}}
          else
           {var switch$4=caml_string_compare(match,cst_NumpadDivide);
            if(0 <= switch$4)
             {if(! (0 < switch$4))return 84;
              if(! caml_string_notequal(match,cst_NumpadEnter))return 83;
              if(! caml_string_notequal(match,cst_NumpadEqual))return 82;
              if(! caml_string_notequal(match,cst_NumpadMultiply))return 78;
              if(! caml_string_notequal(match,cst_NumpadSubtract))return 79;
              if(! caml_string_notequal(match,cst_OSLeft))return 117;
              if(! caml_string_notequal(match,cst_OSRight))return 118;
              if(! caml_string_notequal(match,cst_PageDown))return 99}
            else
             {if(! caml_string_notequal(match,cst_Numpad5))return 73;
              if(! caml_string_notequal(match,cst_Numpad6))return 74;
              if(! caml_string_notequal(match,cst_Numpad7))return 75;
              if(! caml_string_notequal(match,cst_Numpad8))return 76;
              if(! caml_string_notequal(match,cst_Numpad9))return 77;
              if(! caml_string_notequal(match,cst_NumpadAdd))return 80;
              if(! caml_string_notequal(match,cst_NumpadDecimal))return 81}}}
        else
         {var switch$5=caml_string_compare(match,cst_KeyX);
          if(0 <= switch$5)
           {if(! (0 < switch$5))return 24;
            var switch$6=caml_string_compare(match,cst_MetaRight);
            if(0 <= switch$6)
             {if(! (0 < switch$6))return 89;
              if(! caml_string_notequal(match,cst_Minus))return 37;
              if(! caml_string_notequal(match,cst_NumLock))return 85;
              if(! caml_string_notequal(match,cst_Numpad0))return 68;
              if(! caml_string_notequal(match,cst_Numpad1))return 69;
              if(! caml_string_notequal(match,cst_Numpad2))return 70;
              if(! caml_string_notequal(match,cst_Numpad3))return 71}
            else
             {if(! caml_string_notequal(match,cst_KeyY))return 25;
              if(! caml_string_notequal(match,cst_KeyZ))return 26;
              if(! caml_string_notequal(match,cst_MediaPlayPause))return 107;
              if(! caml_string_notequal(match,cst_MediaStop))return 108;
              if(! caml_string_notequal(match,cst_MediaTrackNext))return 106;
              if(! caml_string_notequal(match,cst_MediaTrackPrevious))
               return 105;
              if(! caml_string_notequal(match,cst_MetaLeft))return 88}}
          else
           {var switch$7=caml_string_compare(match,cst_KeyP);
            if(0 <= switch$7)
             {if(! (0 < switch$7))return 16;
              if(! caml_string_notequal(match,cst_KeyQ))return 17;
              if(! caml_string_notequal(match,cst_KeyR))return 18;
              if(! caml_string_notequal(match,cst_KeyS))return 19;
              if(! caml_string_notequal(match,cst_KeyT))return 20;
              if(! caml_string_notequal(match,cst_KeyU))return 21;
              if(! caml_string_notequal(match,cst_KeyV))return 22;
              if(! caml_string_notequal(match,cst_KeyW))return 23}
            else
             {if(! caml_string_notequal(match,cst_KeyI))return 9;
              if(! caml_string_notequal(match,cst_KeyJ))return 10;
              if(! caml_string_notequal(match,cst_KeyK))return 11;
              if(! caml_string_notequal(match,cst_KeyL))return 12;
              if(! caml_string_notequal(match,cst_KeyM))return 13;
              if(! caml_string_notequal(match,cst_KeyN))return 14;
              if(! caml_string_notequal(match,cst_KeyO))return 15}}}}
      else
       {var switch$8=caml_string_compare(match,cst_Digit6);
        if(0 <= switch$8)
         {if(! (0 < switch$8))return 33;
          var switch$9=caml_string_compare(match,cst_F6);
          if(0 <= switch$9)
           {if(! (0 < switch$9))return 61;
            var switch$10=caml_string_compare(match,cst_KeyA);
            if(0 <= switch$10)
             {if(! (0 < switch$10))return 1;
              if(! caml_string_notequal(match,cst_KeyB))return 2;
              if(! caml_string_notequal(match,cst_KeyC))return 3;
              if(! caml_string_notequal(match,cst_KeyD))return 4;
              if(! caml_string_notequal(match,cst_KeyE))return 5;
              if(! caml_string_notequal(match,cst_KeyF))return 6;
              if(! caml_string_notequal(match,cst_KeyG))return 7}
            else
             {if(! caml_string_notequal(match,cst_F7))return 62;
              if(! caml_string_notequal(match,cst_F8))return 63;
              if(! caml_string_notequal(match,cst_F9))return 64;
              if(! caml_string_notequal(match,cst_Home))return 100;
              if(! caml_string_notequal(match,cst_Insert))return 44;
              if(! caml_string_notequal(match,cst_IntlBackslash))return 121;
              if(! caml_string_notequal(match,cst_IntlYen))return 122}}
          else
           {var switch$11=caml_string_compare(match,cst_F1);
            if(0 <= switch$11)
             {if(! (0 < switch$11))return 56;
              if(! caml_string_notequal(match,cst_F10))return 65;
              if(! caml_string_notequal(match,cst_F11))return 66;
              if(! caml_string_notequal(match,cst_F12))return 67;
              if(! caml_string_notequal(match,cst_F2))return 57;
              if(! caml_string_notequal(match,cst_F3))return 58;
              if(! caml_string_notequal(match,cst_F4))return 59;
              if(! caml_string_notequal(match,cst_F5))return 60}
            else
             {if(! caml_string_notequal(match,cst_Digit7))return 34;
              if(! caml_string_notequal(match,cst_Digit8))return 35;
              if(! caml_string_notequal(match,cst_Digit9))return 36;
              if(! caml_string_notequal(match,cst_End))return 101;
              if(! caml_string_notequal(match,cst_Enter))return 40;
              if(! caml_string_notequal(match,cst_Equal))return 38;
              if(! caml_string_notequal(match,cst_Escape))return 42}}}
        else
         {var switch$12=caml_string_compare(match,cst_BrowserRefresh);
          if(0 <= switch$12)
           {if(! (0 < switch$12))return 113;
            var switch$13=caml_string_compare(match,cst_Delete);
            if(0 <= switch$13)
             {if(! (0 < switch$13))return 45;
              if(! caml_string_notequal(match,cst_Digit0))return 27;
              if(! caml_string_notequal(match,cst_Digit1))return 28;
              if(! caml_string_notequal(match,cst_Digit2))return 29;
              if(! caml_string_notequal(match,cst_Digit3))return 30;
              if(! caml_string_notequal(match,cst_Digit4))return 31;
              if(! caml_string_notequal(match,cst_Digit5))return 32}
            else
             {if(! caml_string_notequal(match,cst_BrowserSearch))return 110;
              if(! caml_string_notequal(match,cst_BrowserStop))return 114;
              if(! caml_string_notequal(match,cst_CapsLock))return 46;
              if(! caml_string_notequal(match,cst_Comma))return 53;
              if(! caml_string_notequal(match,cst_ContextMenu))return 109;
              if(! caml_string_notequal(match,cst_ControlLeft))return 86;
              if(! caml_string_notequal(match,cst_ControlRight))return 87}}
          else
           {var switch$14=caml_string_compare(match,cst_Backslash);
            if(0 <= switch$14)
             {if(! (0 < switch$14))return 52;
              if(! caml_string_notequal(match,cst_Backspace))return 43;
              if(! caml_string_notequal(match,cst_BracketLeft))return 47;
              if(! caml_string_notequal(match,cst_BracketRight))return 48;
              if(! caml_string_notequal(match,cst_BrowserBack))return 116;
              if(! caml_string_notequal(match,cst_BrowserFavorites))
               return 112;
              if(! caml_string_notequal(match,cst_BrowserForward))return 115;
              if(! caml_string_notequal(match,cst_BrowserHome))return 111}
            else
             {if(! caml_string_notequal(match,cst_AltLeft))return 92;
              if(! caml_string_notequal(match,cst_AltRight))return 93;
              if(! caml_string_notequal(match,cst_ArrowDown))return 97;
              if(! caml_string_notequal(match,cst_ArrowLeft))return 94;
              if(! caml_string_notequal(match,cst_ArrowRight))return 95;
              if(! caml_string_notequal(match,cst_ArrowUp))return 96;
              if(! caml_string_notequal(match,cst_Backquote))return 51}}}}
      return 0}
    function try_key_code_left(param)
     {if(19 <= param)
       {if(91 === param)return 88}
      else
       if(16 <= param)
        {var switcher=param - 16 | 0;
         switch(switcher){case 0:return 90;case 1:return 86;default:return 92}}
      return 0}
    function try_key_code_right(param)
     {if(19 <= param)
       {if(91 === param)return 89}
      else
       if(16 <= param)
        {var switcher=param - 16 | 0;
         switch(switcher){case 0:return 91;case 1:return 87;default:return 93}}
      return 0}
    function try_key_code_numpad(param)
     {if(47 <= param)
       {var switcher=param - 96 | 0;
        if(! (15 < switcher >>> 0))
         switch(switcher)
          {case 0:return 68;
           case 1:return 69;
           case 2:return 70;
           case 3:return 71;
           case 4:return 72;
           case 5:return 73;
           case 6:return 74;
           case 7:return 75;
           case 8:return 76;
           case 9:return 77;
           case 10:return 78;
           case 11:return 80;
           case 12:break;
           case 13:return 79;
           case 14:return 81;
           default:return 84}}
      else
       if(12 <= param)
        {var switcher$0=param - 12 | 0;
         switch(switcher$0)
          {case 0:return 73;
           case 1:return 83;
           case 21:return 77;
           case 22:return 71;
           case 23:return 69;
           case 24:return 75;
           case 25:return 72;
           case 26:return 76;
           case 27:return 74;
           case 28:return 70;
           case 33:return 68;
           case 34:return 81
           }}
      return 0}
    function try_key_code_normal(param)
     {var switcher=param - 8 | 0;
      if(! (214 < switcher >>> 0))
       {var _fJ_=switcher;
        if(67 <= _fJ_)
         switch(_fJ_)
          {case 67:return 11;
           case 68:return 12;
           case 69:return 13;
           case 70:return 14;
           case 71:return 15;
           case 72:return 16;
           case 73:return 17;
           case 74:return 18;
           case 75:return 19;
           case 76:return 20;
           case 77:return 21;
           case 78:return 22;
           case 79:return 23;
           case 80:return 24;
           case 81:return 25;
           case 82:return 26;
           case 85:return 109;
           case 104:return 56;
           case 105:return 57;
           case 106:return 58;
           case 107:return 59;
           case 108:return 60;
           case 109:return 61;
           case 110:return 62;
           case 111:return 63;
           case 112:return 64;
           case 113:return 65;
           case 114:return 66;
           case 115:return 67;
           case 137:return 119;
           case 178:return 49;
           case 179:return 38;
           case 180:return 53;
           case 181:return 37;
           case 182:return 54;
           case 183:return 55;
           case 184:return 51;
           case 211:return 47;
           case 212:return 52;
           case 213:return 48;
           case 214:return 50
           }
        else
         switch(_fJ_)
          {case 0:return 43;
           case 1:return 39;
           case 5:return 40;
           case 11:return 123;
           case 12:return 46;
           case 19:return 42;
           case 24:return 41;
           case 25:return 98;
           case 26:return 99;
           case 27:return 101;
           case 28:return 100;
           case 29:return 94;
           case 30:return 96;
           case 31:return 95;
           case 32:return 97;
           case 34:return 120;
           case 37:return 44;
           case 38:return 45;
           case 40:return 27;
           case 41:return 28;
           case 42:return 29;
           case 43:return 30;
           case 44:return 31;
           case 45:return 32;
           case 46:return 33;
           case 47:return 34;
           case 48:return 35;
           case 49:return 36;
           case 57:return 1;
           case 58:return 2;
           case 59:return 3;
           case 60:return 4;
           case 61:return 5;
           case 62:return 6;
           case 63:return 7;
           case 64:return 8;
           case 65:return 9;
           case 66:return 10
           }}
      return 0}
    function make_unidentified(param){return 0}
    function run_next(value,f,v){return 0 === v?caml_call1(f,value):v}
    function symbol$11(x,f){return caml_call1(f,x)}
    function of_event(evt)
     {var _fC_=evt.keyCode;
      function _fD_(_fI_){return run_next(_fC_,try_key_code_normal,_fI_)}
      var match=evt.location,switcher=match - 1 | 0;
      if(2 < switcher >>> 0)
       var _fE_=make_unidentified;
      else
       switch(switcher)
        {case 0:
          var
           _fz_=evt.keyCode,
           _fE_=function(_fG_){return run_next(_fz_,try_key_code_left,_fG_)};
          break;
         case 1:
          var
           _fA_=evt.keyCode,
           _fE_=function(_fF_){return run_next(_fA_,try_key_code_right,_fF_)};
          break;
         default:
          var
           _fB_=evt.keyCode,
           _fE_=function(_fH_){return run_next(_fB_,try_key_code_numpad,_fH_)}}
      var value=evt.code;
      return symbol$11
              (symbol$11
                (symbol$11
                  (0,
                   function(v)
                    {return 0 === v
                             ?caml_call3(Optdef[7],value,make_unidentified,f)
                             :v}),
                 _fE_),
               _fD_)}
    function char_of_int(value)
     {if(caml_call2(symbol$5,0,value))
       try
        {var _fx_=[0,caml_call1(Stdlib_uchar[8],value)];return _fx_}
       catch(_fy_){return 0}
      return 0}
    function empty_string(param){return ""}
    function none(param){return 0}
    function of_event$0(evt)
     {var key=caml_call2(Optdef[8],evt.key,empty_string),match=key.length;
      return 0 === match
              ?caml_call3(Optdef[7],evt.charCode,none,char_of_int)
              :1 === match?char_of_int(key.charCodeAt(0) | 0):0}
    function element$1(_fw_){return _fw_}
    function tagged(e)
     {var tag=caml_string_of_jsbytes(e.tagName.toLowerCase());
      if(caml_call2(symbol$8,caml_ml_string_length(tag),0))return [61,e];
      var match=runtime.caml_string_unsafe_get(tag,0),switcher=match - 97 | 0;
      if(! (21 < switcher >>> 0))
       switch(switcher)
        {case 0:
          return caml_string_notequal(tag,cst_a$1)
                  ?caml_string_notequal(tag,cst_area$1)
                    ?caml_string_notequal(tag,cst_audio$1)?[61,e]:[2,e]
                    :[1,e]
                  :[0,e];
         case 1:
          return caml_string_notequal(tag,cst_base$1)
                  ?caml_string_notequal(tag,cst_blockquote$1)
                    ?caml_string_notequal(tag,cst_body$1)
                      ?caml_string_notequal(tag,cst_br$1)
                        ?caml_string_notequal(tag,cst_button$1)?[61,e]:[7,e]
                        :[6,e]
                      :[5,e]
                    :[4,e]
                  :[3,e];
         case 2:
          return caml_string_notequal(tag,cst_canvas$1)
                  ?caml_string_notequal(tag,cst_caption$1)
                    ?caml_string_notequal(tag,cst_col$1)
                      ?caml_string_notequal(tag,cst_colgroup$1)?[61,e]:[11,e]
                      :[10,e]
                    :[9,e]
                  :[8,e];
         case 3:
          return caml_string_notequal(tag,cst_del$1)
                  ?caml_string_notequal(tag,cst_div$1)
                    ?caml_string_notequal(tag,cst_dl$1)?[61,e]:[14,e]
                    :[13,e]
                  :[12,e];
         case 4:return caml_string_notequal(tag,cst_embed$1)?[61,e]:[15,e];
         case 5:
          return caml_string_notequal(tag,cst_fieldset$1)
                  ?caml_string_notequal(tag,cst_form$1)
                    ?caml_string_notequal(tag,cst_frame$1)
                      ?caml_string_notequal(tag,cst_frameset$1)?[61,e]:[18,e]
                      :[19,e]
                    :[17,e]
                  :[16,e];
         case 7:
          return caml_string_notequal(tag,cst_h1$1)
                  ?caml_string_notequal(tag,cst_h2$1)
                    ?caml_string_notequal(tag,cst_h3$1)
                      ?caml_string_notequal(tag,cst_h4$1)
                        ?caml_string_notequal(tag,cst_h5$1)
                          ?caml_string_notequal(tag,cst_h6$1)
                            ?caml_string_notequal(tag,cst_head$1)
                              ?caml_string_notequal(tag,cst_hr$1)
                                ?caml_string_notequal(tag,cst_html$1)?[61,e]:[28,e]
                                :[27,e]
                              :[26,e]
                            :[25,e]
                          :[24,e]
                        :[23,e]
                      :[22,e]
                    :[21,e]
                  :[20,e];
         case 8:
          return caml_string_notequal(tag,cst_iframe$1)
                  ?caml_string_notequal(tag,cst_img$1)
                    ?caml_string_notequal(tag,cst_input$2)
                      ?caml_string_notequal(tag,cst_ins$1)?[61,e]:[32,e]
                      :[31,e]
                    :[30,e]
                  :[29,e];
         case 11:
          return caml_string_notequal(tag,cst_label$1)
                  ?caml_string_notequal(tag,cst_legend$1)
                    ?caml_string_notequal(tag,cst_li$1)
                      ?caml_string_notequal(tag,cst_link$1)?[61,e]:[36,e]
                      :[35,e]
                    :[34,e]
                  :[33,e];
         case 12:
          return caml_string_notequal(tag,cst_map$1)
                  ?caml_string_notequal(tag,cst_meta$1)?[61,e]:[38,e]
                  :[37,e];
         case 14:
          return caml_string_notequal(tag,cst_object$1)
                  ?caml_string_notequal(tag,cst_ol$1)
                    ?caml_string_notequal(tag,cst_optgroup$1)
                      ?caml_string_notequal(tag,cst_option$1)?[61,e]:[42,e]
                      :[41,e]
                    :[40,e]
                  :[39,e];
         case 15:
          return caml_string_notequal(tag,cst_p$1)
                  ?caml_string_notequal(tag,cst_param$1)
                    ?caml_string_notequal(tag,cst_pre$1)?[61,e]:[45,e]
                    :[44,e]
                  :[43,e];
         case 16:return caml_string_notequal(tag,cst_q$1)?[61,e]:[46,e];
         case 18:
          return caml_string_notequal(tag,cst_script$1)
                  ?caml_string_notequal(tag,cst_select$2)
                    ?caml_string_notequal(tag,cst_style$1)?[61,e]:[49,e]
                    :[48,e]
                  :[47,e];
         case 19:
          return caml_string_notequal(tag,cst_table$1)
                  ?caml_string_notequal(tag,cst_tbody$1)
                    ?caml_string_notequal(tag,cst_td$1)
                      ?caml_string_notequal(tag,cst_textarea$1)
                        ?caml_string_notequal(tag,cst_tfoot$1)
                          ?caml_string_notequal(tag,cst_th$1)
                            ?caml_string_notequal(tag,cst_thead$1)
                              ?caml_string_notequal(tag,cst_title$1)
                                ?caml_string_notequal(tag,cst_tr$1)?[61,e]:[58,e]
                                :[57,e]
                              :[56,e]
                            :[55,e]
                          :[54,e]
                        :[53,e]
                      :[52,e]
                    :[51,e]
                  :[50,e];
         case 20:return caml_string_notequal(tag,cst_ul$1)?[61,e]:[59,e];
         case 21:return caml_string_notequal(tag,cst_video$1)?[61,e]:[60,e]
         }
      return [61,e]}
    function opt_tagged(e)
     {function _fu_(e){return [0,tagged(e)]}
      function _fv_(param){return 0}
      return caml_call3(Opt[7],e,_fv_,_fu_)}
    function taggedEvent(ev)
     {function _ff_(ev){return [0,ev]}
      function _fg_(param)
       {function _fi_(ev){return [1,ev]}
        function _fj_(param)
         {function _fl_(ev){return [2,ev]}
          function _fm_(param)
           {function _fo_(ev){return [3,ev]}
            function _fp_(param)
             {function _fr_(ev){return [4,ev]}
              function _fs_(param){return [5,ev]}
              var _ft_=popStateEvent(ev);
              return caml_call3(Opt[7],_ft_,_fs_,_fr_)}
            var _fq_=mouseScrollEvent(ev);
            return caml_call3(Opt[7],_fq_,_fp_,_fo_)}
          var _fn_=wheelEvent(ev);
          return caml_call3(Opt[7],_fn_,_fm_,_fl_)}
        var _fk_=keyboardEvent(ev);
        return caml_call3(Opt[7],_fk_,_fj_,_fi_)}
      var _fh_=mouseEvent(ev);
      return caml_call3(Opt[7],_fh_,_fg_,_ff_)}
    function opt_taggedEvent(ev)
     {function _fd_(ev){return [0,taggedEvent(ev)]}
      function _fe_(param){return 0}
      return caml_call3(Opt[7],ev,_fe_,_fd_)}
    function stopPropagation(ev)
     {function _fb_(param){return ev.stopPropagation()}
      function _fc_(param){return ev.cancelBubble = true$0}
      return caml_call3(Optdef[7],ev.stopPropagation,_fc_,_fb_)}
    var
     requestAnimationFrame=
      runtime.caml_js_pure_expr
       (function(param)
         {var
           l=
            [0,
             _i_.requestAnimationFrame,
             [0,
              _i_.mozRequestAnimationFrame,
              [0,
               _i_.webkitRequestAnimationFrame,
               [0,
                _i_.oRequestAnimationFrame,
                [0,_i_.msRequestAnimationFrame,0]]]]];
          try
           {var
             _e__=function(c){return caml_call1(Optdef[5],c)},
             req=caml_call2(Stdlib_list[34],_e__,l),
             _e$_=function(callback){return req(callback)};
            return _e$_}
          catch(_fa_)
           {_fa_ = caml_wrap_exception(_fa_);
            if(_fa_ === Stdlib[8])
             {var
               now=function(param){return new date_ms().getTime()},
               last=[0,now(0)];
              return function(callback)
               {var
                 t=now(0),
                 dt=last[1] + 16.6666666666666679 - t,
                 dt$0=dt < 0.?0.:dt;
                last[1] = t;
                _i_.setTimeout(callback,dt$0);
                return 0}}
            throw _fa_}});
    function hasPushState(param)
     {return caml_call1(Optdef[5],_i_.history.pushState)}
    function hasPlaceholder(param)
     {var i=createInput(0,0,document$0);
      return caml_call1(Optdef[5],i.placeholder)}
    function hasRequired(param)
     {var i=createInput(0,0,document$0);
      return caml_call1(Optdef[5],i.required)}
    var overflow_limit=2147483000.;
    function setTimeout(callback,d)
     {var id=[0,0];
      function loop(step,param)
       {if(2147483000. < step)
         var step$0=overflow_limit,remain=step - 2147483000.;
        else
         var step$0=step,remain=0.;
        var cb=remain == 0.?callback:function(_e9_){return loop(remain,_e9_)};
        id[1] = [0,_i_.setTimeout(caml_js_wrap_callback(cb),step$0)];
        return 0}
      loop(d,0);
      return id}
    function clearTimeout(id)
     {var _e8_=id[1];
      if(_e8_){var x=_e8_[1];id[1] = 0;return _i_.clearTimeout(x)}
      return 0}
    function js_array_of_collection(c){return [].slice.call(c)}
    var
     Js_of_ocaml_Dom_html=
      [0,
       d,
       document$0,
       getElementById_opt,
       getElementById_exn,
       getElementById_coerce,
       getElementById,
       location_origin,
       _i_,
       no_handler,
       handler,
       full_handler,
       invoke_handler,
       eventTarget,
       eventRelatedTarget,
       Event$0,
       addEventListenerWithOptions,
       addEventListener,
       removeEventListener,
       addMousewheelEventListenerWith,
       addMousewheelEventListener,
       createCustomEvent,
       buttonPressed,
       eventAbsolutePosition$0,
       elementClientPosition,
       getDocumentScroll,
       [0,of_event,try_key_code_normal],
       [0,of_event$0],
       createHtml,
       createHead,
       createLink,
       createTitle,
       createMeta,
       createBase,
       createStyle,
       createBody,
       createForm,
       createOptgroup,
       createOption,
       createSelect,
       createInput,
       createTextarea,
       createButton,
       createLabel,
       createFieldset,
       createLegend,
       createUl,
       createOl,
       createDl,
       createLi,
       createDiv,
       createEmbed,
       createP,
       createH1,
       createH2,
       createH3,
       createH4,
       createH5,
       createH6,
       createQ,
       createBlockquote,
       createPre,
       createBr,
       createHr,
       createIns,
       createDel,
       createA,
       createImg,
       createObject,
       createParam,
       createMap,
       createArea,
       createScript,
       createTable,
       createCaption,
       createCol,
       createColgroup,
       createThead,
       createTfoot,
       createTbody,
       createTr,
       createTh,
       createTd,
       createSub,
       createSup,
       createSpan,
       createTt,
       createI,
       createB,
       createBig,
       createSmall,
       createEm,
       createStrong,
       createCite,
       createDfn,
       createCode,
       createSamp,
       createKbd,
       createVar,
       createAbbr,
       createDd,
       createDt,
       createNoscript,
       createAddress,
       createFrameset,
       createFrame,
       createIframe,
       createAudio,
       createVideo,
       Canvas_not_available,
       createCanvas,
       element$1,
       tagged,
       opt_tagged,
       taggedEvent,
       opt_taggedEvent,
       stopPropagation,
       [0,
        element$0,
        a,
        area,
        audio,
        base,
        blockquote,
        body,
        br,
        button,
        canvas,
        caption,
        col,
        colgroup,
        del,
        div,
        embed,
        dl,
        fieldset,
        form,
        frameset,
        frame,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        head,
        hr,
        html,
        iframe,
        img,
        input$0,
        ins,
        label,
        legend,
        li,
        link,
        map$2,
        meta,
        object,
        ol,
        optgroup,
        option$1,
        p,
        param,
        pre,
        q,
        script,
        select$0,
        style,
        table,
        tbody,
        td,
        textarea,
        tfoot,
        th,
        thead,
        title,
        tr,
        ul,
        video,
        mouseEvent,
        keyboardEvent,
        wheelEvent,
        mouseScrollEvent,
        popStateEvent],
       setTimeout,
       clearTimeout,
       js_array_of_collection,
       requestAnimationFrame,
       runtime.caml_js_html_entities,
       onIE,
       hasPushState,
       hasPlaceholder,
       hasRequired];
    caml_register_global(1648,Js_of_ocaml_Dom_html,"Js_of_ocaml__Dom_html");
    var formData=Unsafe[1].FormData,formData_form=Unsafe[1].FormData;
    function filter_map$0(f,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var q=param$0[2],v=param$0[1],match=caml_call1(f,v);
          if(match){var v$0=match[1];return [0,v$0,filter_map$0(f,q)]}
          var param$0=q;
          continue}
        return 0}}
    function have_content(elt)
     {var
       _e6_=caml_call2(symbol$9,elt.name.length,0),
       _e7_=_e6_?1 - (elt.disabled | 0):_e6_;
      return _e7_}
    function form_elements(get,form)
     {var length=form.elements.length;
      function _eU_(i)
       {var _e5_=form.elements.item(i);return caml_call1(Opt[10],_e5_)}
      var
       _eV_=caml_call2(Stdlib_array[2],length,_eU_),
       elements=caml_call1(Stdlib_array[11],_eV_);
      function _eW_(param)
       {if(param)
         {var v=param[1],match$3=tagged(v);
          switch(match$3[0])
           {case 31:
             var v$0=match$3[1];
             if(get)var sth=get[1],get$0=sth;else var get$0=0;
             if(have_content(v$0))
              {var
                name$1=caml_string_of_jsstring(v$0.name),
                value=v$0.value,
                match=caml_string_of_jsbytes(v$0.type.toLowerCase());
               if(caml_string_notequal(match,cst_checkbox))
                {if(! caml_string_notequal(match,cst_file))
                  {if(get$0)return [0,[0,name$1,[0,-976970511,value]],0];
                   var match$0=caml_call1(Optdef[10],v$0.files);
                   if(match$0)
                    {var list=match$0[1];
                     if(caml_call2(symbol$8,list.length,0))
                      return [0,[0,name$1,[0,-976970511,""]],0];
                     var match$1=caml_call1(Optdef[10],v$0.multiple);
                     if(match$1 && 0 !== match$1[1])
                      {var
                        _e1_=function(i){return list.item(i)},
                        _e2_=caml_call2(Stdlib_array[2],list.length,_e1_),
                        _e3_=caml_call1(Stdlib_array[11],_e2_);
                       return filter_map$0
                               (function(f)
                                 {var match=caml_call1(Opt[10],f);
                                  if(match)
                                   {var file=match[1];return [0,[0,name$1,[0,781515420,file]]]}
                                  return 0},
                                _e3_)}
                     var _e0_=list.item(0),match$2=caml_call1(Opt[10],_e0_);
                     if(match$2)
                      {var file=match$2[1];
                       return [0,[0,name$1,[0,781515420,file]],0]}
                     return 0}
                   return 0}
                 var switch$0=0;
                 if(caml_string_notequal(match,cst_password))
                  {if(caml_string_notequal(match,cst_radio))
                    {var switch$1=0;
                     if
                      (caml_string_notequal(match,cst_reset)
                       &&
                       caml_string_notequal(match,cst_submit$0))
                      {if(caml_string_notequal(match,cst_text))
                        return [0,[0,name$1,[0,-976970511,value]],0];
                       switch$0 = 1;
                       switch$1 = 1}
                     if(! switch$1)return 0}}
                 else
                  switch$0 = 1;
                 if(switch$0)return [0,[0,name$1,[0,-976970511,value]],0]}
               return v$0.checked | 0?[0,[0,name$1,[0,-976970511,value]],0]:0}
             return 0;
            case 48:
             var v$1=match$3[1];
             if(have_content(v$1))
              {var name$0=caml_string_of_jsstring(v$1.name);
               if(v$1.multiple | 0)
                {var
                  _eY_=
                   function(i)
                    {var _e4_=v$1.options.item(i);
                     return caml_call1(Opt[10],_e4_)},
                  options=caml_call2(Stdlib_array[2],v$1.options.length,_eY_),
                  _eZ_=caml_call1(Stdlib_array[11],options);
                 return filter_map$0
                         (function(param)
                           {if(param)
                             {var e=param[1];
                              return e.selected | 0
                                      ?[0,[0,name$0,[0,-976970511,e.value]]]
                                      :0}
                            return 0},
                          _eZ_)}
               return [0,[0,name$0,[0,-976970511,v$1.value]],0]}
             return 0;
            case 53:
             var v$2=match$3[1];
             if(have_content(v$2))
              {var name=caml_string_of_jsstring(v$2.name);
               return [0,[0,name,[0,-976970511,v$2.value]],0]}
             return 0;
            default:return 0}}
        return 0}
      var
       _eX_=caml_call2(Stdlib_list[17],_eW_,elements),
       contents=caml_call1(Stdlib_list[14],_eX_);
      return contents}
    function append(form_contents,form_elt)
     {if(891486873 <= form_contents[1])
       {var list=form_contents[2];list[1] = [0,form_elt,list[1]];return 0}
      var f=form_contents[2],_eS_=form_elt[2],_eT_=form_elt[1];
      if(781515420 <= _eS_[1])
       {var file=_eS_[2];return f.append(caml_jsstring_of_string(_eT_),file)}
      var s=_eS_[2];
      return f.append(caml_jsstring_of_string(_eT_),s)}
    function empty_form_contents(param)
     {var match=caml_call1(Optdef[10],formData);
      if(match){var constr=match[1];return [0,808620462,new constr()]}
      return [0,891486873,[0,0]]}
    function post_form_contents(form)
     {var contents=empty_form_contents(0),_eP_=form_elements(0,form);
      function _eQ_(_eR_){return append(contents,_eR_)}
      caml_call2(Stdlib_list[15],_eQ_,_eP_);
      return contents}
    function get_form_contents(form)
     {var _eL_=form_elements(_m_,form);
      function _eM_(param)
       {var _eN_=param[2],_eO_=param[1];
        if(typeof _eN_ !== "number" && -976970511 === _eN_[1])
         {var s=_eN_[2];return [0,_eO_,caml_string_of_jsstring(s)]}
        throw [0,Assert_failure,_n_]}
      return caml_call2(Stdlib_list[17],_eM_,_eL_)}
    var
     Js_of_ocaml_Form=
      [0,
       formData,
       formData_form,
       append,
       post_form_contents,
       get_form_contents,
       empty_form_contents,
       form_elements];
    caml_register_global(1649,Js_of_ocaml_Form,"Js_of_ocaml__Form");
    var
     readystatechange=caml_call1(Event[1],cst_readystatechange),
     loadstart$1=caml_call1(Event[1],cst_loadstart$1),
     progress$1=caml_call1(Event[1],cst_progress$1),
     abort$1=caml_call1(Event[1],cst_abort$1),
     error$1=caml_call1(Event[1],cst_error$1),
     load$1=caml_call1(Event[1],cst_load$1),
     timeout=caml_call1(Event[1],cst_timeout),
     loadend$0=caml_call1(Event[1],cst_loadend$0),
     Event$1=
      [0,
       readystatechange,
       loadstart$1,
       progress$1,
       abort$1,
       error$1,
       load$1,
       timeout,
       loadend$0],
     Js_of_ocaml_XmlHttpRequest=[0,runtime.caml_xmlhttprequest_create,Event$1];
    caml_register_global
     (1650,Js_of_ocaml_XmlHttpRequest,"Js_of_ocaml__XmlHttpRequest");
    var worker=Unsafe[1].Worker;
    function create(script)
     {return new worker(caml_jsstring_of_string(script))}
    function import_scripts(scripts)
     {if(Unsafe[1].importScripts === t39)
       caml_call1(Stdlib[1],cst_Worker_import_scripts_is_u);
      var
       _eJ_=caml_call1(Stdlib_array[12],scripts),
       _eK_=caml_call2(Stdlib_array[15],caml_jsstring_of_string,_eJ_);
      return runtime.caml_js_fun_call(Unsafe[1].importScripts,_eK_)}
    function set_onmessage(handler)
     {if(Unsafe[1].onmessage === t39)
       caml_call1(Stdlib[1],cst_Worker_onmessage_is_undefi);
      function js_handler(ev){return caml_call1(handler,ev.data)}
      return Unsafe[1].onmessage = caml_js_wrap_callback(js_handler)}
    function post_message(msg)
     {if(Unsafe[1].postMessage === t39)
       caml_call1(Stdlib[1],cst_Worker_onmessage_is_undefi$0);
      return Unsafe[1].postMessage(msg)}
    var
     Js_of_ocaml_Worker=
      [0,create,import_scripts,set_onmessage,post_message];
    caml_register_global(1651,Js_of_ocaml_Worker,"Js_of_ocaml__Worker");
    var webSocket=Unsafe[1].WebSocket;
    function is_supported(param){return caml_call1(Optdef[5],webSocket)}
    var Js_of_ocaml_WebSockets=[0,webSocket,webSocket,webSocket,is_supported];
    caml_register_global
     (1652,Js_of_ocaml_WebSockets,"Js_of_ocaml__WebSockets");
    var
     defaultContextAttributes=
      {"alpha":true$0,
       "depth":true$0,
       "stencil":false$0,
       "antialias":true$0,
       "premultipliedAlpha":false$0,
       "preserveDrawingBuffer":false$0,
       "preferLowPowerToHighPerformance":false$0,
       "failIfMajorPerformanceCaveat":false$0},
     webglcontextlost=caml_call1(Event$0[86],cst_webglcontextlost),
     webglcontextrestored=caml_call1(Event$0[86],cst_webglcontextrestored),
     webglcontextcreationerror=
      caml_call1(Event$0[86],cst_webglcontextcreationerror),
     Event$2=
      [0,webglcontextlost,webglcontextrestored,webglcontextcreationerror];
    function getContext(c)
     {var ctx=c.getContext("webgl");
      return caml_call1(Opt[5],ctx)?ctx:c.getContext("experimental-webgl")}
    function getContextWithAttributes(c,attribs)
     {var ctx=c.getContext("webgl",attribs);
      return caml_call1(Opt[5],ctx)
              ?ctx
              :c.getContext("experimental-webgl",attribs)}
    var
     Js_of_ocaml_WebGL=
      [0,defaultContextAttributes,Event$2,getContext,getContextWithAttributes];
    caml_register_global(1653,Js_of_ocaml_WebGL,"Js_of_ocaml__WebGL");
    function regexp(s)
     {return new regExp_withFlags(caml_jsbytes_of_string(s),"g")}
    function regexp_case_fold(s)
     {return new regExp_withFlags(caml_jsbytes_of_string(s),"gi")}
    function regexp_with_flag(s,f)
     {return new
              regExp_withFlags
              (caml_jsbytes_of_string(s),
               caml_jsstring_of_string(caml_call2(Stdlib[28],cst_g,f)))}
    function blunt_str_array_get(a,i)
     {function _eI_(param){throw [0,Assert_failure,_o_]}
      return caml_string_of_jsbytes(caml_call2(Optdef[8],a[i],_eI_))}
    function string_match(r,s,i)
     {r.lastIndex = i;
      var
       _eG_=r.exec(caml_jsbytes_of_string(s)),
       _eH_=caml_call2(Opt[3],_eG_,match_result);
      return caml_call1(Opt[10],_eH_)}
    function search_forward(r,s,i)
     {r.lastIndex = i;
      function _eD_(res){return [0,res.index,res]}
      var
       _eE_=r.exec(caml_jsbytes_of_string(s)),
       _eF_=caml_call2(Opt[3],_eE_,_eD_);
      return caml_call1(Opt[10],_eF_)}
    function matched_string(r){return blunt_str_array_get(r,0)}
    function matched_group(r,i)
     {var _eC_=caml_call2(Optdef[3],r[i],caml_string_of_jsbytes);
      return caml_call1(Optdef[10],_eC_)}
    var quote_repl_re=new regExp_withFlags("[$]","g");
    function quote_repl(s)
     {return caml_jsbytes_of_string(s).replace(quote_repl_re,"$$$$")}
    function global_replace(r,s,s_by)
     {r.lastIndex = 0;
      return caml_string_of_jsbytes
              (caml_jsbytes_of_string(s).replace(r,quote_repl(s_by)))}
    function replace_first(r,s,s_by)
     {var
       match=r.ignoreCase | 0,
       match$0=r.multiline | 0,
       flags=0 === match?0 === match$0?"":"m":0 === match$0?"i":"mi",
       r$0=new regExp_withFlags(r.source,flags);
      return caml_string_of_jsbytes
              (caml_jsbytes_of_string(s).replace(r$0,quote_repl(s_by)))}
    function list_of_js_array(a)
     {var idx$1=a.length - 1 | 0,accu=0,idx=idx$1;
      for(;;)
       {if(caml_call2(symbol$5,idx,0))return accu;
        var
         idx$0=idx - 1 | 0,
         accu$0=[0,blunt_str_array_get(a,idx),accu],
         accu=accu$0,
         idx=idx$0;
        continue}}
    function split(r,s)
     {r.lastIndex = 0;
      return list_of_js_array(caml_jsbytes_of_string(s).split(r))}
    function bounded_split(r,s,i)
     {r.lastIndex = 0;
      return list_of_js_array(caml_jsbytes_of_string(s).split(r,i))}
    var quote_re=regexp(cst);
    function quote(s)
     {return caml_string_of_jsbytes
              (caml_jsbytes_of_string(s).replace(quote_re,"\\$&"))}
    function regexp_string(s){return regexp(quote(s))}
    function regexp_string_case_fold(s){return regexp_case_fold(quote(s))}
    var
     Js_of_ocaml_Regexp=
      [0,
       regexp,
       regexp_case_fold,
       regexp_with_flag,
       quote,
       regexp_string,
       regexp_string_case_fold,
       string_match,
       search_forward,
       search_forward,
       matched_string,
       matched_group,
       global_replace,
       replace_first,
       split,
       bounded_split];
    caml_register_global(1654,Js_of_ocaml_Regexp,"Js_of_ocaml__Regexp");
    var Local_exn=[248,cst_Js_of_ocaml_Url_Local_exn,caml_fresh_oo_id(0)];
    function interrupt(param){throw Local_exn}
    var
     plus_re=regexp_string(cst$0),
     plus_re_js_string=new regExp_withFlags("\\+","g");
    function urldecode_js_string_string(s)
     {plus_re_js_string.lastIndex = 0;
      return caml_string_of_jsbytes
              (unescape(s.replace(plus_re_js_string," ")))}
    function urldecode(s)
     {return caml_string_of_jsbytes
              (unescape
                (caml_jsbytes_of_string(global_replace(plus_re,s,cst$1))))}
    function urlencode(opt,s)
     {if(opt)var sth=opt[1],with_plus=sth;else var with_plus=1;
      if(with_plus)
       {var s$0=caml_string_of_jsbytes(escape(caml_jsbytes_of_string(s)));
        return global_replace(plus_re,s$0,cst_2B)}
      return caml_string_of_jsbytes(escape(caml_jsbytes_of_string(s)))}
    var
     Not_an_http_protocol=
      [248,cst_Js_of_ocaml_Url_Not_an_htt,caml_fresh_oo_id(0)],
     default_http_port=80,
     default_https_port=443;
    function path_of_path_string(s)
     {var l=caml_ml_string_length(s);
      function aux(i)
       {try
         {var _eA_=caml_call3(String[18],s,i,47),j=_eA_}
        catch(_eB_)
         {_eB_ = caml_wrap_exception(_eB_);
          if(_eB_ !== Stdlib[8])throw _eB_;
          var j=l}
        var word=caml_call3(String[4],s,i,j - i | 0);
        return caml_call2(symbol$10,j,l)?[0,word,0]:[0,word,aux(j + 1 | 0)]}
      var a=aux(0);
      if(a && ! caml_string_notequal(a[1],cst$2))
       {var _ez_=a[2];
        if(! _ez_)return 0;
        if(! caml_string_notequal(_ez_[1],cst$3) && ! _ez_[2])return _p_}
      return a}
    function encode_arguments(l)
     {function _eu_(param)
       {var
         v=param[2],
         n=param[1],
         _ew_=urlencode(0,v),
         _ex_=caml_call2(Stdlib[28],cst$4,_ew_),
         _ey_=urlencode(0,n);
        return caml_call2(Stdlib[28],_ey_,_ex_)}
      var _ev_=caml_call2(Stdlib_list[17],_eu_,l);
      return caml_call2(String[7],cst$5,_ev_)}
    function decode_arguments_js_string(s)
     {var
       arr=s.split(caml_jsstring_of_string(caml_call2(String[1],1,38))),
       len=arr.length;
      function aux(acc,idx)
       {var idx$0=idx;
        for(;;)
         {if(caml_call2(symbol$5,idx$0,0))return acc;
          try
           {var
             _em_=idx$0 - 1 | 0,
             _en_=
              function(s)
               {function _es_(param)
                 {var
                   y=param[2],
                   x=param[1],
                   _et_=urldecode_js_string_string(y);
                  return [0,urldecode_js_string_string(x),_et_]}
                var
                 index=
                  s.indexOf
                   (caml_jsstring_of_string(caml_call2(String[1],1,61)));
                if(caml_call2(symbol$5,index,0))
                 var _er_=t39;
                else
                 var
                  _eq_=s.slice(index + 1 | 0),
                  _er_=[0,s.slice(0,index),_eq_];
                return caml_call3(Optdef[7],_er_,interrupt,_es_)},
             _eo_=
              aux
               ([0,caml_call3(Optdef[7],arr[idx$0],interrupt,_en_),acc],_em_);
            return _eo_}
          catch(_ep_)
           {_ep_ = caml_wrap_exception(_ep_);
            if(_ep_ === Local_exn)
             {var idx$1=idx$0 - 1 | 0,idx$0=idx$1;continue}
            throw _ep_}}}
      return aux(0,len - 1 | 0)}
    function decode_arguments(s)
     {return decode_arguments_js_string(caml_jsbytes_of_string(s))}
    var
     url_re=
      new
       regExp_withFlags
       (caml_jsbytes_of_string(cst_Hh_Tt_Tt_Pp_Ss_0_9a_zA_Z_0)),
     file_re=new regExp_withFlags(caml_jsbytes_of_string(cst_Ff_Ii_Ll_Ee));
    function url_of_js_string(s)
     {function _d5_(res)
       {var
         prot_string=caml_call2(Optdef[8],res[1],interrupt),
         match=caml_string_of_jsbytes(prot_string.toLowerCase());
        if
         (caml_string_notequal(match,cst_file$0)
          &&
          caml_string_notequal(match,cst_file$1))
         {var switch$0=0;
          if
           (caml_string_notequal(match,cst_http)
            &&
            caml_string_notequal(match,cst_http$0))
           {var switch$1=0;
            if
             (caml_string_notequal(match,cst_https)
              &&
              caml_string_notequal(match,cst_https$0))
             switch$1 = 1;
            if(! switch$1){var ssl=1;switch$0 = 2}}
          else
           switch$0 = 1;
          var switch$2=0;
          switch(switch$0)
           {case 1:var ssl=0;switch$2 = 1;break;
            case 0:break;
            default:switch$2 = 1}
          if(switch$2)
           {var
             _ed_=function(param){return caml_jsbytes_of_string(cst$7)},
             path_str=
              urldecode_js_string_string(caml_call2(Optdef[8],res[6],_ed_)),
             _ee_=function(param){return caml_jsbytes_of_string(cst$8)},
             _ef_=
              urldecode_js_string_string(caml_call2(Optdef[8],res[10],_ee_)),
             _eg_=function(param){return caml_jsbytes_of_string(cst$9)},
             _eh_=
              decode_arguments_js_string(caml_call2(Optdef[8],res[8],_eg_)),
             _ei_=path_of_path_string(path_str),
             _ej_=function(param){return caml_jsbytes_of_string(cst$10)},
             s=caml_string_of_jsbytes(caml_call2(Optdef[8],res[4],_ej_)),
             _ek_=
              caml_string_notequal(s,cst$6)?caml_int_of_string(s):ssl?443:80,
             url=
              [0,
               urldecode_js_string_string
                (caml_call2(Optdef[8],res[2],interrupt)),
               _ek_,
               _ei_,
               path_str,
               _eh_,
               _ef_],
             _el_=ssl?[1,url]:[0,url];
            return [0,_el_]}}
        throw Not_an_http_protocol}
      function _d6_(param)
       {function _d8_(res)
         {var
           path_str=
            urldecode_js_string_string(caml_call2(Optdef[8],res[2],interrupt));
          function _d$_(param){return caml_jsbytes_of_string(cst$11)}
          var _ea_=caml_string_of_jsbytes(caml_call2(Optdef[8],res[6],_d$_));
          function _eb_(param){return caml_jsbytes_of_string(cst$12)}
          var
           _ec_=
            decode_arguments_js_string(caml_call2(Optdef[8],res[4],_eb_));
          return [0,[2,[0,path_of_path_string(path_str),path_str,_ec_,_ea_]]]}
        function _d9_(param){return 0}
        var _d__=file_re.exec(s);
        return caml_call3(Opt[7],_d__,_d9_,_d8_)}
      var _d7_=url_re.exec(s);
      return caml_call3(Opt[7],_d7_,_d6_,_d5_)}
    function url_of_string(s)
     {return url_of_js_string(caml_jsbytes_of_string(s))}
    function string_of_url(param)
     {switch(param[0])
       {case 0:
         var
          match=param[1],
          frag=match[6],
          args=match[5],
          path=match[3],
          port=match[2],
          host=match[1];
         if(caml_string_notequal(frag,cst$13))
          var _ds_=urlencode(0,frag),_dt_=caml_call2(Stdlib[28],cst$14,_ds_);
         else
          var _dt_=cst$21;
         if(args)
          var
           _du_=encode_arguments(args),
           _dv_=caml_call2(Stdlib[28],cst$15,_du_);
         else
          var _dv_=cst$20;
         var
          _dw_=caml_call2(Stdlib[28],_dv_,_dt_),
          _dx_=function(x){return urlencode(0,x)},
          _dy_=caml_call2(Stdlib_list[17],_dx_,path),
          _dz_=caml_call2(String[7],cst$16,_dy_),
          _dA_=caml_call2(Stdlib[28],_dz_,_dw_),
          _dB_=caml_call2(Stdlib[28],cst$17,_dA_);
         if(80 === port)
          var _dC_=cst$18;
         else
          var
           _dG_=caml_call1(Stdlib[33],port),
           _dC_=caml_call2(Stdlib[28],cst$19,_dG_);
         var
          _dD_=caml_call2(Stdlib[28],_dC_,_dB_),
          _dE_=urlencode(0,host),
          _dF_=caml_call2(Stdlib[28],_dE_,_dD_);
         return caml_call2(Stdlib[28],cst_http$1,_dF_);
        case 1:
         var
          match$0=param[1],
          frag$0=match$0[6],
          args$0=match$0[5],
          path$0=match$0[3],
          port$0=match$0[2],
          host$0=match$0[1];
         if(caml_string_notequal(frag$0,cst$22))
          var
           _dH_=urlencode(0,frag$0),
           _dI_=caml_call2(Stdlib[28],cst$23,_dH_);
         else
          var _dI_=cst$30;
         if(args$0)
          var
           _dJ_=encode_arguments(args$0),
           _dK_=caml_call2(Stdlib[28],cst$24,_dJ_);
         else
          var _dK_=cst$29;
         var
          _dL_=caml_call2(Stdlib[28],_dK_,_dI_),
          _dM_=function(x){return urlencode(0,x)},
          _dN_=caml_call2(Stdlib_list[17],_dM_,path$0),
          _dO_=caml_call2(String[7],cst$25,_dN_),
          _dP_=caml_call2(Stdlib[28],_dO_,_dL_),
          _dQ_=caml_call2(Stdlib[28],cst$26,_dP_);
         if(443 === port$0)
          var _dR_=cst$27;
         else
          var
           _dV_=caml_call1(Stdlib[33],port$0),
           _dR_=caml_call2(Stdlib[28],cst$28,_dV_);
         var
          _dS_=caml_call2(Stdlib[28],_dR_,_dQ_),
          _dT_=urlencode(0,host$0),
          _dU_=caml_call2(Stdlib[28],_dT_,_dS_);
         return caml_call2(Stdlib[28],cst_https$1,_dU_);
        default:
         var
          match$1=param[1],
          frag$1=match$1[4],
          args$1=match$1[3],
          path$1=match$1[1];
         if(caml_string_notequal(frag$1,cst$31))
          var
           _dW_=urlencode(0,frag$1),
           _dX_=caml_call2(Stdlib[28],cst$32,_dW_);
         else
          var _dX_=cst$36;
         if(args$1)
          var
           _dY_=encode_arguments(args$1),
           _dZ_=caml_call2(Stdlib[28],cst$33,_dY_);
         else
          var _dZ_=cst$35;
         var
          _d0_=caml_call2(Stdlib[28],_dZ_,_dX_),
          _d1_=function(x){return urlencode(0,x)},
          _d2_=caml_call2(Stdlib_list[17],_d1_,path$1),
          _d3_=caml_call2(String[7],cst$34,_d2_),
          _d4_=caml_call2(Stdlib[28],_d3_,_d0_);
         return caml_call2(Stdlib[28],cst_file$2,_d4_)}}
    var _q_=caml_call1(Optdef[2],_i_.location);
    if(caml_call1(Optdef[5],_q_))
     var _r_=_i_.location;
    else
     var
      t42=function(param,_dr_){return 0},
      t41=function(param,_dq_){return 0},
      t40=function(param){return 0},
      _r_=
       {"href":"",
        "protocol":"",
        "host":"",
        "hostname":"",
        "port":"",
        "pathname":"",
        "search":"",
        "hash":"",
        "origin":t39,
        "reload":caml_js_wrap_meth_callback(t40),
        "replace":caml_js_wrap_meth_callback(t41),
        "assign":caml_js_wrap_meth_callback(t42)};
    var
     host=urldecode_js_string_string(_r_.hostname),
     protocol=urldecode_js_string_string(_r_.protocol),
     _s_=0,
     port=
      function(param)
        {try
          {var _do_=[0,caml_int_of_string(caml_string_of_jsbytes(_r_.port))];
           return _do_}
         catch(_dp_)
          {_dp_ = caml_wrap_exception(_dp_);
           if(_dp_[1] === Stdlib[7])return 0;
           throw _dp_}}
       (_s_),
     path_string=urldecode_js_string_string(_r_.pathname),
     path=path_of_path_string(path_string),
     _t_=_r_.search.charAt(0) === "?"?_r_.search.slice(1):_r_.search,
     arguments$0=decode_arguments_js_string(_t_);
    function get_fragment(param)
     {function _dk_(res){return caml_string_of_jsstring(res[1])}
      function _dl_(param){return cst$37}
      var _dm_=new regExp_withFlags("#(.*)"),_dn_=_r_.href.match(_dm_);
      return caml_call3(Opt[7],_dn_,_dl_,_dk_)}
    function set_fragment(s)
     {return _r_.hash = caml_jsbytes_of_string(urlencode(0,s))}
    function get$2(param){return url_of_js_string(_r_.href)}
    function set$0(u)
     {return _r_.href = caml_jsbytes_of_string(string_of_url(u))}
    var
     as_string=urldecode_js_string_string(_r_.href),
     Js_of_ocaml_Url=
      [0,
       urldecode,
       urlencode,
       default_http_port,
       default_https_port,
       path_of_path_string,
       encode_arguments,
       decode_arguments,
       url_of_string,
       string_of_url,
       [0,
        host,
        port,
        protocol,
        path_string,
        path,
        arguments$0,
        get_fragment,
        set_fragment,
        get$2,
        set$0,
        as_string]];
    caml_register_global(1656,Js_of_ocaml_Url,"Js_of_ocaml__Url");
    var Js_of_ocaml_Lib_version=[0,s,git_version];
    caml_register_global
     (1657,Js_of_ocaml_Lib_version,"Js_of_ocaml__Lib_version");
    function update_file(name,content)
     {var oc=caml_call1(Stdlib[60],name);
      caml_call2(Stdlib[66],oc,content);
      return caml_call1(Stdlib[76],oc)}
    function set_channel_flusher(out_channel,f)
     {var
       f$0=
        caml_js_wrap_callback
         (function(s){return caml_call1(f,caml_string_of_jsbytes(s))});
      return runtime.caml_ml_set_channel_output(out_channel,f$0)}
    function set_channel_filler(in_channel,f)
     {var f$0=caml_js_wrap_callback(f);
      return runtime.caml_ml_set_channel_refill(in_channel,f$0)}
    function mount(path,f)
     {return runtime.caml_mount_autoload
              (path,
               caml_js_wrap_callback
                (function(prefix,path){return caml_call2(f,prefix,path)}))}
    var unmount=runtime.caml_unmount;
    if(caml_call2(String[38],git_version,cst$38))
     var js_of_ocaml_version=s;
    else
     var
      _cn_=caml_call2(Stdlib[28],cst$41,git_version),
      js_of_ocaml_version=caml_call2(Stdlib[28],s,_cn_);
    var
     _u_=runtime.caml_create_file,
     _v_=runtime.caml_read_file_content,
     Js_of_ocaml_Sys_js=
      [0,
       set_channel_flusher,
       set_channel_filler,
       function(_dj_){return runtime.caml_list_mount_point(_dj_)},
       unmount,
       mount,
       _v_,
       _u_,
       update_file,
       js_of_ocaml_version];
    caml_register_global(1658,Js_of_ocaml_Sys_js,"Js_of_ocaml__Sys_js");
    function empty_resize_observer_options(param){return {}}
    var resizeObserver=Unsafe[1].ResizeObserver;
    function is_supported$0(param)
     {return caml_call1(Optdef[5],resizeObserver)}
    function observe(node,f,box,param)
     {var obs=new resizeObserver(caml_js_wrap_callback(f));
      if(box)
       {var box$0=box[1],opts={};opts.box = box$0;obs.observe(node,opts)}
      else
       obs.observe(node);
      return obs}
    var
     Js_of_ocaml_ResizeObserver=
      [0,empty_resize_observer_options,resizeObserver,is_supported$0,observe];
    caml_register_global
     (1659,Js_of_ocaml_ResizeObserver,"Js_of_ocaml__ResizeObserver");
    function empty_mutation_observer_init(param){return {}}
    var mutationObserver=Unsafe[1].MutationObserver;
    function is_supported$1(param)
     {return caml_call1(Optdef[5],mutationObserver)}
    function observe$0
     (node,
      f,
      child_list,
      attributes,
      character_data,
      subtree,
      attribute_old_value,
      character_data_old_value,
      attribute_filter,
      param)
     {function opt_iter(x,f)
       {if(x){var x$0=x[1];return caml_call1(f,x$0)}return 0}
      var obs=new mutationObserver(caml_js_wrap_callback(f)),cfg={};
      opt_iter(child_list,function(v){return cfg.childList = v});
      opt_iter(attributes,function(v){return cfg.attributes = v});
      opt_iter(character_data,function(v){return cfg.characterData = v});
      opt_iter(subtree,function(v){return cfg.subtree = v});
      opt_iter
       (attribute_old_value,function(v){return cfg.attributeOldValue = v});
      opt_iter
       (character_data_old_value,
        function(v){return cfg.characterDataOldValue = v});
      opt_iter
       (attribute_filter,
        function(l)
         {return cfg.attributeFilter
                 =
                 caml_js_from_array(caml_call1(Stdlib_array[12],l))});
      obs.observe(node,cfg);
      return obs}
    var
     Js_of_ocaml_MutationObserver=
      [0,
       empty_mutation_observer_init,
       mutationObserver,
       is_supported$1,
       observe$0];
    caml_register_global
     (1660,Js_of_ocaml_MutationObserver,"Js_of_ocaml__MutationObserver");
    var obj=Unsafe[1].Object;
    function create$0(param){return new obj()}
    function add$0(t,k,v){return t[k.concat("_")] = v}
    function remove(t,k){return delete t[k.concat("_")]}
    function find(t,k){return t[k.concat("_")]}
    function keys(t)
     {var
       key_array=Unsafe[1].Object.keys(t),
       res=[0,0],
       _df_=key_array.length - 1 | 0,
       _de_=0;
      if(! (_df_ < 0))
       {var i=_de_;
        for(;;)
         {var
           _dg_=function(param){return caml_call1(Stdlib[2],cst_Jstable_keys)},
           key=caml_call2(Optdef[8],key_array[i],_dg_),
           _dh_=res[1];
          res[1] = [0,key.substring(0,key.length - 1 | 0),_dh_];
          var _di_=i + 1 | 0;
          if(_df_ !== i){var i=_di_;continue}
          break}}
      return caml_call1(Stdlib_list[9],res[1])}
    var Js_of_ocaml_Jstable=[0,create$0,add$0,remove,find,keys];
    caml_register_global(1661,Js_of_ocaml_Jstable,"Js_of_ocaml__Jstable");
    var json=Unsafe[1].JSON;
    function reviver(this$0,key,value)
     {if(typeof value == typeof "foo")return caml_string_of_jsbytes(value);
      if
       (value instanceof array_length
        &&
        4
        ===
        value.length
        &&
        255
        ===
        value[0])
       return runtime.caml_int64_create_lo_mi_hi(value[1],value[2],value[3]);
      return value}
    var input_reviver=caml_js_wrap_meth_callback(reviver);
    function unsafe_input(s){return json.parse(s,input_reviver)}
    var
     mlString_constr=dummy_string.constructor,
     mlInt64_constr=dummy_int64.constructor;
    function output_reviver(key,value)
     {return value instanceof mlString_constr
              ?caml_jsbytes_of_string(value)
              :value instanceof mlInt64_constr
                ?caml_js_from_array([0,255,value.lo,value.mi,value.hi])
                :value}
    function output(obj){return json.stringify(obj,output_reviver)}
    var Js_of_ocaml_Json=[0,output,unsafe_input];
    caml_register_global(1662,Js_of_ocaml_Json,"Js_of_ocaml__Json");
    function string_of_name(param)
     {var _dd_=param;
      if(74 <= _dd_)
       {if(111 <= _dd_)
         switch(_dd_)
          {case 111:return cst_palevioletred;
           case 112:return cst_papayawhip;
           case 113:return cst_peachpuff;
           case 114:return cst_peru;
           case 115:return cst_pink;
           case 116:return cst_plum;
           case 117:return cst_powderblue;
           case 118:return cst_purple;
           case 119:return cst_red;
           case 120:return cst_rosybrown;
           case 121:return cst_royalblue;
           case 122:return cst_saddlebrown;
           case 123:return cst_salmon;
           case 124:return cst_sandybrown;
           case 125:return cst_seagreen;
           case 126:return cst_seashell;
           case 127:return cst_sienna;
           case 128:return cst_silver;
           case 129:return cst_skyblue;
           case 130:return cst_slateblue;
           case 131:return cst_slategray;
           case 132:return cst_slategrey;
           case 133:return cst_snow;
           case 134:return cst_springgreen;
           case 135:return cst_steelblue;
           case 136:return cst_tan;
           case 137:return cst_teal;
           case 138:return cst_thistle;
           case 139:return cst_tomato;
           case 140:return cst_turquoise;
           case 141:return cst_violet;
           case 142:return cst_wheat;
           case 143:return cst_white;
           case 144:return cst_whitesmoke;
           case 145:return cst_yellow;
           default:return cst_yellowgreen}
        switch(_dd_)
         {case 74:return cst_lightpink;
          case 75:return cst_lightsalmon;
          case 76:return cst_lightseagreen;
          case 77:return cst_lightskyblue;
          case 78:return cst_lightslategray;
          case 79:return cst_lightslategrey;
          case 80:return cst_lightsteelblue;
          case 81:return cst_lightyellow;
          case 82:return cst_lime;
          case 83:return cst_limegreen;
          case 84:return cst_linen;
          case 85:return cst_magenta;
          case 86:return cst_maroon;
          case 87:return cst_mediumaquamarine;
          case 88:return cst_mediumblue;
          case 89:return cst_mediumorchid;
          case 90:return cst_mediumpurple;
          case 91:return cst_mediumseagreen;
          case 92:return cst_mediumslateblue;
          case 93:return cst_mediumspringgreen;
          case 94:return cst_mediumturquoise;
          case 95:return cst_mediumvioletred;
          case 96:return cst_midnightblue;
          case 97:return cst_mintcream;
          case 98:return cst_mistyrose;
          case 99:return cst_moccasin;
          case 100:return cst_navajowhite;
          case 101:return cst_navy;
          case 102:return cst_oldlace;
          case 103:return cst_olive;
          case 104:return cst_olivedrab;
          case 105:return cst_orange;
          case 106:return cst_orangered;
          case 107:return cst_orchid;
          case 108:return cst_palegoldenrod;
          case 109:return cst_palegreen;
          default:return cst_paleturquoise}}
      if(37 <= _dd_)
       switch(_dd_)
        {case 37:return cst_darkslategrey;
         case 38:return cst_darkturquoise;
         case 39:return cst_darkviolet;
         case 40:return cst_deeppink;
         case 41:return cst_deepskyblue;
         case 42:return cst_dimgray;
         case 43:return cst_dimgrey;
         case 44:return cst_dodgerblue;
         case 45:return cst_firebrick;
         case 46:return cst_floralwhite;
         case 47:return cst_forestgreen;
         case 48:return cst_fuchsia;
         case 49:return cst_gainsboro;
         case 50:return cst_ghostwhite;
         case 51:return cst_gold;
         case 52:return cst_goldenrod;
         case 53:return cst_gray;
         case 54:return cst_grey;
         case 55:return cst_green;
         case 56:return cst_greenyellow;
         case 57:return cst_honeydew;
         case 58:return cst_hotpink;
         case 59:return cst_indianred;
         case 60:return cst_indigo;
         case 61:return cst_ivory;
         case 62:return cst_khaki;
         case 63:return cst_lavender;
         case 64:return cst_lavenderblush;
         case 65:return cst_lawngreen;
         case 66:return cst_lemonchiffon;
         case 67:return cst_lightblue;
         case 68:return cst_lightcoral;
         case 69:return cst_lightcyan;
         case 70:return cst_lightgoldenrodyellow;
         case 71:return cst_lightgray;
         case 72:return cst_lightgreen;
         default:return cst_lightgrey}
      switch(_dd_)
       {case 0:return cst_aliceblue;
        case 1:return cst_antiquewhite;
        case 2:return cst_aqua;
        case 3:return cst_aquamarine;
        case 4:return cst_azure;
        case 5:return cst_beige;
        case 6:return cst_bisque;
        case 7:return cst_black;
        case 8:return cst_blanchedalmond;
        case 9:return cst_blue;
        case 10:return cst_blueviolet;
        case 11:return cst_brown;
        case 12:return cst_burlywood;
        case 13:return cst_cadetblue;
        case 14:return cst_chartreuse;
        case 15:return cst_chocolate;
        case 16:return cst_coral;
        case 17:return cst_cornflowerblue;
        case 18:return cst_cornsilk;
        case 19:return cst_crimson;
        case 20:return cst_cyan;
        case 21:return cst_darkblue;
        case 22:return cst_darkcyan;
        case 23:return cst_darkgoldenrod;
        case 24:return cst_darkgray;
        case 25:return cst_darkgreen;
        case 26:return cst_darkgrey;
        case 27:return cst_darkkhaki;
        case 28:return cst_darkmagenta;
        case 29:return cst_darkolivegreen;
        case 30:return cst_darkorange;
        case 31:return cst_darkorchid;
        case 32:return cst_darkred;
        case 33:return cst_darksalmon;
        case 34:return cst_darkseagreen;
        case 35:return cst_darkslateblue;
        default:return cst_darkslategray}}
    function name_of_string(s)
     {var switch$0=caml_string_compare(s,cst_lightgrey$0);
      if(0 <= switch$0)
       {if(! (0 < switch$0))return 73;
        var switch$1=caml_string_compare(s,cst_paleturquoise$0);
        if(0 <= switch$1)
         {if(! (0 < switch$1))return 110;
          var switch$2=caml_string_compare(s,cst_skyblue$0);
          if(0 <= switch$2)
           {if(! (0 < switch$2))return 129;
            var switch$3=caml_string_compare(s,cst_thistle$0);
            if(0 <= switch$3)
             {if(! (0 < switch$3))return 138;
              if(! caml_string_notequal(s,cst_tomato$0))return 139;
              if(! caml_string_notequal(s,cst_turquoise$0))return 140;
              if(! caml_string_notequal(s,cst_violet$0))return 141;
              if(! caml_string_notequal(s,cst_wheat$0))return 142;
              if(! caml_string_notequal(s,cst_white$0))return 143;
              if(! caml_string_notequal(s,cst_whitesmoke$0))return 144;
              if(! caml_string_notequal(s,cst_yellow$0))return 145;
              if(! caml_string_notequal(s,cst_yellowgreen$0))return 146}
            else
             {if(! caml_string_notequal(s,cst_slateblue$0))return 130;
              if(! caml_string_notequal(s,cst_slategray$0))return 131;
              if(! caml_string_notequal(s,cst_slategrey$0))return 132;
              if(! caml_string_notequal(s,cst_snow$0))return 133;
              if(! caml_string_notequal(s,cst_springgreen$0))return 134;
              if(! caml_string_notequal(s,cst_steelblue$0))return 135;
              if(! caml_string_notequal(s,cst_tan$0))return 136;
              if(! caml_string_notequal(s,cst_teal$0))return 137}}
          else
           {var switch$4=caml_string_compare(s,cst_rosybrown$0);
            if(0 <= switch$4)
             {if(! (0 < switch$4))return 120;
              if(! caml_string_notequal(s,cst_royalblue$0))return 121;
              if(! caml_string_notequal(s,cst_saddlebrown$0))return 122;
              if(! caml_string_notequal(s,cst_salmon$0))return 123;
              if(! caml_string_notequal(s,cst_sandybrown$0))return 124;
              if(! caml_string_notequal(s,cst_seagreen$0))return 125;
              if(! caml_string_notequal(s,cst_seashell$0))return 126;
              if(! caml_string_notequal(s,cst_sienna$0))return 127;
              if(! caml_string_notequal(s,cst_silver$0))return 128}
            else
             {if(! caml_string_notequal(s,cst_palevioletred$0))return 111;
              if(! caml_string_notequal(s,cst_papayawhip$0))return 112;
              if(! caml_string_notequal(s,cst_peachpuff$0))return 113;
              if(! caml_string_notequal(s,cst_peru$0))return 114;
              if(! caml_string_notequal(s,cst_pink$0))return 115;
              if(! caml_string_notequal(s,cst_plum$0))return 116;
              if(! caml_string_notequal(s,cst_powderblue$0))return 117;
              if(! caml_string_notequal(s,cst_purple$0))return 118;
              if(! caml_string_notequal(s,cst_red$0))return 119}}}
        else
         {var switch$5=caml_string_compare(s,cst_mediumslateblue$0);
          if(0 <= switch$5)
           {if(! (0 < switch$5))return 92;
            var switch$6=caml_string_compare(s,cst_navy$0);
            if(0 <= switch$6)
             {if(! (0 < switch$6))return 101;
              if(! caml_string_notequal(s,cst_oldlace$0))return 102;
              if(! caml_string_notequal(s,cst_olive$0))return 103;
              if(! caml_string_notequal(s,cst_olivedrab$0))return 104;
              if(! caml_string_notequal(s,cst_orange$0))return 105;
              if(! caml_string_notequal(s,cst_orangered$0))return 106;
              if(! caml_string_notequal(s,cst_orchid$0))return 107;
              if(! caml_string_notequal(s,cst_palegoldenrod$0))return 108;
              if(! caml_string_notequal(s,cst_palegreen$0))return 109}
            else
             {if(! caml_string_notequal(s,cst_mediumspringgreen$0))return 93;
              if(! caml_string_notequal(s,cst_mediumturquoise$0))return 94;
              if(! caml_string_notequal(s,cst_mediumvioletred$0))return 95;
              if(! caml_string_notequal(s,cst_midnightblue$0))return 96;
              if(! caml_string_notequal(s,cst_mintcream$0))return 97;
              if(! caml_string_notequal(s,cst_mistyrose$0))return 98;
              if(! caml_string_notequal(s,cst_moccasin$0))return 99;
              if(! caml_string_notequal(s,cst_navajowhite$0))return 100}}
          else
           {var switch$7=caml_string_compare(s,cst_limegreen$0);
            if(0 <= switch$7)
             {if(! (0 < switch$7))return 83;
              if(! caml_string_notequal(s,cst_linen$0))return 84;
              if(! caml_string_notequal(s,cst_magenta$0))return 85;
              if(! caml_string_notequal(s,cst_maroon$0))return 86;
              if(! caml_string_notequal(s,cst_mediumaquamarine$0))return 87;
              if(! caml_string_notequal(s,cst_mediumblue$0))return 88;
              if(! caml_string_notequal(s,cst_mediumorchid$0))return 89;
              if(! caml_string_notequal(s,cst_mediumpurple$0))return 90;
              if(! caml_string_notequal(s,cst_mediumseagreen$0))return 91}
            else
             {if(! caml_string_notequal(s,cst_lightpink$0))return 74;
              if(! caml_string_notequal(s,cst_lightsalmon$0))return 75;
              if(! caml_string_notequal(s,cst_lightseagreen$0))return 76;
              if(! caml_string_notequal(s,cst_lightskyblue$0))return 77;
              if(! caml_string_notequal(s,cst_lightslategray$0))return 78;
              if(! caml_string_notequal(s,cst_lightslategrey$0))return 79;
              if(! caml_string_notequal(s,cst_lightsteelblue$0))return 80;
              if(! caml_string_notequal(s,cst_lightyellow$0))return 81;
              if(! caml_string_notequal(s,cst_lime$0))return 82}}}}
      else
       {var switch$8=caml_string_compare(s,cst_darkslategray$0);
        if(0 <= switch$8)
         {if(! (0 < switch$8))return 36;
          var switch$9=caml_string_compare(s,cst_greenyellow$0);
          if(0 <= switch$9)
           {if(! (0 < switch$9))return 56;
            var switch$10=caml_string_compare(s,cst_lavenderblush$0);
            if(0 <= switch$10)
             {if(! (0 < switch$10))return 64;
              if(! caml_string_notequal(s,cst_lawngreen$0))return 65;
              if(! caml_string_notequal(s,cst_lemonchiffon$0))return 66;
              if(! caml_string_notequal(s,cst_lightblue$0))return 67;
              if(! caml_string_notequal(s,cst_lightcoral$0))return 68;
              if(! caml_string_notequal(s,cst_lightcyan$0))return 69;
              if(! caml_string_notequal(s,cst_lightgoldenrodyellow$0))
               return 70;
              if(! caml_string_notequal(s,cst_lightgray$0))return 71;
              if(! caml_string_notequal(s,cst_lightgreen$0))return 72}
            else
             {if(! caml_string_notequal(s,cst_grey$0))return 54;
              if(! caml_string_notequal(s,cst_honeydew$0))return 57;
              if(! caml_string_notequal(s,cst_hotpink$0))return 58;
              if(! caml_string_notequal(s,cst_indianred$0))return 59;
              if(! caml_string_notequal(s,cst_indigo$0))return 60;
              if(! caml_string_notequal(s,cst_ivory$0))return 61;
              if(! caml_string_notequal(s,cst_khaki$0))return 62;
              if(! caml_string_notequal(s,cst_lavender$0))return 63}}
          else
           {var switch$11=caml_string_compare(s,cst_floralwhite$0);
            if(0 <= switch$11)
             {if(! (0 < switch$11))return 46;
              if(! caml_string_notequal(s,cst_forestgreen$0))return 47;
              if(! caml_string_notequal(s,cst_fuchsia$0))return 48;
              if(! caml_string_notequal(s,cst_gainsboro$0))return 49;
              if(! caml_string_notequal(s,cst_ghostwhite$0))return 50;
              if(! caml_string_notequal(s,cst_gold$0))return 51;
              if(! caml_string_notequal(s,cst_goldenrod$0))return 52;
              if(! caml_string_notequal(s,cst_gray$0))return 53;
              if(! caml_string_notequal(s,cst_green$0))return 55}
            else
             {if(! caml_string_notequal(s,cst_darkslategrey$0))return 37;
              if(! caml_string_notequal(s,cst_darkturquoise$0))return 38;
              if(! caml_string_notequal(s,cst_darkviolet$0))return 39;
              if(! caml_string_notequal(s,cst_deeppink$0))return 40;
              if(! caml_string_notequal(s,cst_deepskyblue$0))return 41;
              if(! caml_string_notequal(s,cst_dimgray$0))return 42;
              if(! caml_string_notequal(s,cst_dimgrey$0))return 43;
              if(! caml_string_notequal(s,cst_dodgerblue$0))return 44;
              if(! caml_string_notequal(s,cst_firebrick$0))return 45}}}
        else
         {var switch$12=caml_string_compare(s,cst_cornsilk$0);
          if(0 <= switch$12)
           {if(! (0 < switch$12))return 18;
            var switch$13=caml_string_compare(s,cst_darkkhaki$0);
            if(0 <= switch$13)
             {if(! (0 < switch$13))return 27;
              if(! caml_string_notequal(s,cst_darkmagenta$0))return 28;
              if(! caml_string_notequal(s,cst_darkolivegreen$0))return 29;
              if(! caml_string_notequal(s,cst_darkorange$0))return 30;
              if(! caml_string_notequal(s,cst_darkorchid$0))return 31;
              if(! caml_string_notequal(s,cst_darkred$0))return 32;
              if(! caml_string_notequal(s,cst_darksalmon$0))return 33;
              if(! caml_string_notequal(s,cst_darkseagreen$0))return 34;
              if(! caml_string_notequal(s,cst_darkslateblue$0))return 35}
            else
             {if(! caml_string_notequal(s,cst_crimson$0))return 19;
              if(! caml_string_notequal(s,cst_cyan$0))return 20;
              if(! caml_string_notequal(s,cst_darkblue$0))return 21;
              if(! caml_string_notequal(s,cst_darkcyan$0))return 22;
              if(! caml_string_notequal(s,cst_darkgoldenrod$0))return 23;
              if(! caml_string_notequal(s,cst_darkgray$0))return 24;
              if(! caml_string_notequal(s,cst_darkgreen$0))return 25;
              if(! caml_string_notequal(s,cst_darkgrey$0))return 26}}
          else
           {var switch$14=caml_string_compare(s,cst_blue$0);
            if(0 <= switch$14)
             {if(! (0 < switch$14))return 9;
              if(! caml_string_notequal(s,cst_blueviolet$0))return 10;
              if(! caml_string_notequal(s,cst_brown$0))return 11;
              if(! caml_string_notequal(s,cst_burlywood$0))return 12;
              if(! caml_string_notequal(s,cst_cadetblue$0))return 13;
              if(! caml_string_notequal(s,cst_chartreuse$0))return 14;
              if(! caml_string_notequal(s,cst_chocolate$0))return 15;
              if(! caml_string_notequal(s,cst_coral$0))return 16;
              if(! caml_string_notequal(s,cst_cornflowerblue$0))return 17}
            else
             {if(! caml_string_notequal(s,cst_aliceblue$0))return 0;
              if(! caml_string_notequal(s,cst_antiquewhite$0))return 1;
              if(! caml_string_notequal(s,cst_aqua$0))return 2;
              if(! caml_string_notequal(s,cst_aquamarine$0))return 3;
              if(! caml_string_notequal(s,cst_azure$0))return 4;
              if(! caml_string_notequal(s,cst_beige$0))return 5;
              if(! caml_string_notequal(s,cst_bisque$0))return 6;
              if(! caml_string_notequal(s,cst_black$0))return 7;
              if(! caml_string_notequal(s,cst_blanchedalmond$0))return 8}}}}
      var _dc_=caml_call2(Stdlib[28],s,cst_is_not_a_valid_color_name);
      throw [0,Stdlib[6],_dc_]}
    function rgb_of_name(param)
     {var _db_=param;
      if(74 <= _db_)
       {if(111 <= _db_)
         switch(_db_)
          {case 111:return _bp_;
           case 112:return _bq_;
           case 113:return _br_;
           case 114:return _bs_;
           case 115:return _bt_;
           case 116:return _bu_;
           case 117:return _bv_;
           case 118:return _bw_;
           case 119:return _bx_;
           case 120:return _by_;
           case 121:return _bz_;
           case 122:return _bA_;
           case 123:return _bB_;
           case 124:return _bC_;
           case 125:return _bD_;
           case 126:return _bE_;
           case 127:return _bF_;
           case 128:return _bG_;
           case 129:return _bH_;
           case 130:return _bI_;
           case 131:return _bJ_;
           case 132:return _bK_;
           case 133:return _bL_;
           case 134:return _bM_;
           case 135:return _bN_;
           case 136:return _bO_;
           case 137:return _bP_;
           case 138:return _bQ_;
           case 139:return _bR_;
           case 140:return _bS_;
           case 141:return _bT_;
           case 142:return _bU_;
           case 143:return _bV_;
           case 144:return _bW_;
           case 145:return _bX_;
           default:return _bY_}
        switch(_db_)
         {case 74:return _aQ_;
          case 75:return _aR_;
          case 76:return _aS_;
          case 77:return _aT_;
          case 78:return _aU_;
          case 79:return _aV_;
          case 80:return _aW_;
          case 81:return _aX_;
          case 82:return _aY_;
          case 83:return _aZ_;
          case 84:return _a0_;
          case 85:return _a1_;
          case 86:return _a2_;
          case 87:return _a3_;
          case 88:return _a4_;
          case 89:return _a5_;
          case 90:return _a6_;
          case 91:return _a7_;
          case 92:return _a8_;
          case 93:return _a9_;
          case 94:return _a__;
          case 95:return _a$_;
          case 96:return _ba_;
          case 97:return _bb_;
          case 98:return _bc_;
          case 99:return _bd_;
          case 100:return _be_;
          case 101:return _bf_;
          case 102:return _bg_;
          case 103:return _bh_;
          case 104:return _bi_;
          case 105:return _bj_;
          case 106:return _bk_;
          case 107:return _bl_;
          case 108:return _bm_;
          case 109:return _bn_;
          default:return _bo_}}
      if(37 <= _db_)
       switch(_db_)
        {case 37:return _af_;
         case 38:return _ag_;
         case 39:return _ah_;
         case 40:return _ai_;
         case 41:return _aj_;
         case 42:return _ak_;
         case 43:return _al_;
         case 44:return _am_;
         case 45:return _an_;
         case 46:return _ao_;
         case 47:return _ap_;
         case 48:return _aq_;
         case 49:return _ar_;
         case 50:return _as_;
         case 51:return _at_;
         case 52:return _au_;
         case 53:return _av_;
         case 54:return _aw_;
         case 55:return _ax_;
         case 56:return _ay_;
         case 57:return _az_;
         case 58:return _aA_;
         case 59:return _aB_;
         case 60:return _aC_;
         case 61:return _aD_;
         case 62:return _aE_;
         case 63:return _aF_;
         case 64:return _aG_;
         case 65:return _aH_;
         case 66:return _aI_;
         case 67:return _aJ_;
         case 68:return _aK_;
         case 69:return _aL_;
         case 70:return _aM_;
         case 71:return _aN_;
         case 72:return _aO_;
         default:return _aP_}
      switch(_db_)
       {case 0:return _w_;
        case 1:return _x_;
        case 2:return _y_;
        case 3:return _z_;
        case 4:return _A_;
        case 5:return _B_;
        case 6:return _C_;
        case 7:return _D_;
        case 8:return _E_;
        case 9:return _F_;
        case 10:return _G_;
        case 11:return _H_;
        case 12:return _I_;
        case 13:return _J_;
        case 14:return _K_;
        case 15:return _L_;
        case 16:return _M_;
        case 17:return _N_;
        case 18:return _O_;
        case 19:return _P_;
        case 20:return _Q_;
        case 21:return _R_;
        case 22:return _S_;
        case 23:return _T_;
        case 24:return _U_;
        case 25:return _V_;
        case 26:return _W_;
        case 27:return _X_;
        case 28:return _Y_;
        case 29:return _Z_;
        case 30:return ___;
        case 31:return _$_;
        case 32:return _aa_;
        case 33:return _ab_;
        case 34:return _ac_;
        case 35:return _ad_;
        default:return _ae_}}
    function rgb(a,r,g,b)
     {if(a){var a$0=a[1];return [3,[0,r,g,b,a$0]]}return [1,[0,r,g,b]]}
    function hsl(a,h,s,l)
     {if(a){var a$0=a[1];return [6,[0,h,s,l,a$0]]}return [5,[0,h,s,l]]}
    function string_of_t(param)
     {switch(param[0])
       {case 0:var n=param[1];return string_of_name(n);
        case 1:
         var match=param[1],b=match[3],g=match[2],r=match[1];
         return caml_call4(Stdlib_printf[4],_bZ_,r,g,b);
        case 2:
         var match$0=param[1],b$0=match$0[3],g$0=match$0[2],r$0=match$0[1];
         return caml_call4(Stdlib_printf[4],_b0_,r$0,g$0,b$0);
        case 3:
         var
          match$1=param[1],
          a=match$1[4],
          b$1=match$1[3],
          g$1=match$1[2],
          r$1=match$1[1];
         return caml_call5(Stdlib_printf[4],_b1_,r$1,g$1,b$1,a);
        case 4:
         var
          match$2=param[1],
          a$0=match$2[4],
          b$2=match$2[3],
          g$2=match$2[2],
          r$2=match$2[1];
         return caml_call5(Stdlib_printf[4],_b2_,r$2,g$2,b$2,a$0);
        case 5:
         var match$3=param[1],l=match$3[3],s=match$3[2],h=match$3[1];
         return caml_call4(Stdlib_printf[4],_b3_,h,s,l);
        default:
         var
          match$4=param[1],
          a$1=match$4[4],
          l$0=match$4[3],
          s$0=match$4[2],
          h$0=match$4[1];
         return caml_call5(Stdlib_printf[4],_b4_,h$0,s$0,l$0,a$1)}}
    function hex_of_rgb(param)
     {var blue=param[3],green=param[2],red=param[1];
      function in_range(i)
       {var
         _c9_=caml_call2(symbol$5,i,0),
         _c__=_c9_ || caml_call2(symbol$9,i,255);
        if(_c__)
         {var
           _c$_=caml_call1(Stdlib[33],i),
           _da_=caml_call2(Stdlib[28],_c$_,cst_is_out_of_valid_range);
          throw [0,Stdlib[6],_da_]}
        return _c__}
      in_range(red);
      in_range(green);
      in_range(blue);
      return caml_call4(Stdlib_printf[4],_b5_,red,green,blue)}
    function js_t_of_js_string(s)
     {var
       rgb_re=
        new regExp_withFlags(caml_jsbytes_of_string(cst_rgb_s_d_s_d_s_d)),
       rgb_pct_re=
        new regExp_withFlags(caml_jsbytes_of_string(cst_rgb_s_d_s_d_s_d$0)),
       rgba_re=
        new regExp_withFlags(caml_jsbytes_of_string(cst_rgba_s_d_s_d_s_d_d_d)),
       rgba_pct_re=
        new
         regExp_withFlags
         (caml_jsbytes_of_string(cst_rgba_s_d_s_d_s_d_d_d$0)),
       hsl_re=
        new regExp_withFlags(caml_jsbytes_of_string(cst_hsl_s_d_s_d_s_d)),
       hsla_re=
        new regExp_withFlags(caml_jsbytes_of_string(cst_hsla_s_d_s_d_s_d_d_d));
      if
       (!
        (rgb_re.test(s) | 0)
        &&
        !
        (rgba_re.test(s) | 0)
        &&
        !
        (rgb_pct_re.test(s) | 0)
        &&
        !
        (rgba_pct_re.test(s) | 0)
        &&
        !
        (hsl_re.test(s) | 0)
        &&
        !
        (hsla_re.test(s) | 0))
       {var _c6_=caml_string_of_jsstring(s);
        if(caml_call2(Stdlib_list[32],_c6_,_b6_))return s;
        var
         _c7_=caml_string_of_jsstring(s),
         _c8_=caml_call2(Stdlib[28],_c7_,cst_is_not_a_valid_color);
        throw [0,Stdlib[6],_c8_]}
      return s}
    function js(c)
     {if(0 === c[0])
       {var n=c[1];return caml_jsstring_of_string(string_of_name(n))}
      return caml_jsstring_of_string(string_of_t(c))}
    function ml(c)
     {var s=caml_string_of_jsstring(c);
      try
       {var _cT_=[0,name_of_string(s)];return _cT_}
      catch(_cU_)
       {_cU_ = caml_wrap_exception(_cU_);
        if(_cU_[1] === Stdlib[6])
         {var
           fail=
            function(param)
             {var _c5_=caml_call2(Stdlib[28],s,cst_is_not_a_valid_color$0);
              throw [0,Stdlib[6],_c5_]},
           re_rgb=regexp(cst_rgba_d_d_d_d_d),
           re_rgb_pct=regexp(cst_rgba_d_d_d_d_d$0),
           re_hsl=regexp(cst_hsla_d_d_d_d_d),
           i_of_s_o=
            function(param)
             {if(param)
               {var i=param[1];
                try
                 {var _c3_=caml_int_of_string(i);return _c3_}
                catch(_c4_)
                 {_c4_ = caml_wrap_exception(_c4_);
                  if(_c4_[1] === Stdlib[6])
                   var s=_c4_[2];
                  else
                   {if(_c4_[1] !== Stdlib[7])throw _c4_;var s=_c4_[2]}
                  var
                   _c0_=caml_call2(Stdlib[28],cst$39,s),
                   _c1_=caml_call2(Stdlib[28],i,_c0_),
                   _c2_=caml_call2(Stdlib[28],cst_color_conversion_error,_c1_);
                  throw [0,Stdlib[6],_c2_]}}
              return fail(0)},
           f_of_s=
            function(f)
             {try
               {var _cY_=caml_float_of_string(f);return _cY_}
              catch(_cZ_)
               {_cZ_ = caml_wrap_exception(_cZ_);
                if(_cZ_[1] === Stdlib[6])
                 var s=_cZ_[2];
                else
                 {if(_cZ_[1] !== Stdlib[7])throw _cZ_;var s=_cZ_[2]}
                var
                 _cV_=caml_call2(Stdlib[28],cst$40,s),
                 _cW_=caml_call2(Stdlib[28],f,_cV_),
                 _cX_=caml_call2(Stdlib[28],cst_color_conversion_error$0,_cW_);
                throw [0,Stdlib[6],_cX_]}},
           match=string_match(re_rgb,s,0);
          if(match)
           {var
             r=match[1],
             red=matched_group(r,2),
             green=matched_group(r,3),
             blue=matched_group(r,4),
             alpha=matched_group(r,5),
             match$0=matched_group(r,1);
            if(match$0)
             {var _cB_=match$0[1];
              if(! caml_string_notequal(_cB_,cst_rgb))
               {if(alpha)return fail(0);
                var _cF_=i_of_s_o(blue),_cG_=i_of_s_o(green);
                return [1,[0,i_of_s_o(red),_cG_,_cF_]]}
              if(! caml_string_notequal(_cB_,cst_rgba))
               {if(alpha)
                 {var
                   a=alpha[1],
                   _cC_=f_of_s(a),
                   _cD_=i_of_s_o(blue),
                   _cE_=i_of_s_o(green);
                  return [3,[0,i_of_s_o(red),_cE_,_cD_,_cC_]]}
                return fail(0)}}
            return fail(0)}
          var match$1=string_match(re_rgb_pct,s,0);
          if(match$1)
           {var
             r$0=match$1[1],
             red$0=matched_group(r$0,2),
             green$0=matched_group(r$0,3),
             blue$0=matched_group(r$0,4),
             alpha$0=matched_group(r$0,5),
             match$2=matched_group(r$0,1);
            if(match$2)
             {var _cH_=match$2[1];
              if(! caml_string_notequal(_cH_,cst_rgb$0))
               {if(alpha$0)return fail(0);
                var _cL_=i_of_s_o(blue$0),_cM_=i_of_s_o(green$0);
                return [2,[0,i_of_s_o(red$0),_cM_,_cL_]]}
              if(! caml_string_notequal(_cH_,cst_rgba$0))
               {if(alpha$0)
                 {var
                   a$0=alpha$0[1],
                   _cI_=f_of_s(a$0),
                   _cJ_=i_of_s_o(blue$0),
                   _cK_=i_of_s_o(green$0);
                  return [4,[0,i_of_s_o(red$0),_cK_,_cJ_,_cI_]]}
                return fail(0)}}
            return fail(0)}
          var match$3=string_match(re_hsl,s,0);
          if(match$3)
           {var
             r$1=match$3[1],
             red$1=matched_group(r$1,2),
             green$1=matched_group(r$1,3),
             blue$1=matched_group(r$1,4),
             alpha$1=matched_group(r$1,5),
             match$4=matched_group(r$1,1);
            if(match$4)
             {var _cN_=match$4[1];
              if(! caml_string_notequal(_cN_,cst_hsl))
               {if(alpha$1)return fail(0);
                var _cR_=i_of_s_o(blue$1),_cS_=i_of_s_o(green$1);
                return [5,[0,i_of_s_o(red$1),_cS_,_cR_]]}
              if(! caml_string_notequal(_cN_,cst_hsla))
               {if(alpha$1)
                 {var
                   a$1=alpha$1[1],
                   _cO_=f_of_s(a$1),
                   _cP_=i_of_s_o(blue$1),
                   _cQ_=i_of_s_o(green$1);
                  return [6,[0,i_of_s_o(red$1),_cQ_,_cP_,_cO_]]}
                return fail(0)}}
            return fail(0)}
          return fail(0)}
        throw _cU_}}
    function string_of_t$0(param)
     {if(typeof param === "number")
       return cst_0;
      else
       switch(param[0])
        {case 0:
          var f=param[1];return caml_call3(Stdlib_printf[4],_b7_,f,cst_em$0);
         case 1:
          var f$0=param[1];
          return caml_call3(Stdlib_printf[4],_b8_,f$0,cst_ex);
         case 2:
          var f$1=param[1];
          return caml_call3(Stdlib_printf[4],_b9_,f$1,cst_px);
         case 3:
          var f$2=param[1];
          return caml_call3(Stdlib_printf[4],_b__,f$2,cst_gd);
         case 4:
          var f$3=param[1];
          return caml_call3(Stdlib_printf[4],_b$_,f$3,cst_rem);
         case 5:
          var f$4=param[1];
          return caml_call3(Stdlib_printf[4],_ca_,f$4,cst_vw);
         case 6:
          var f$5=param[1];
          return caml_call3(Stdlib_printf[4],_cb_,f$5,cst_vh);
         case 7:
          var f$6=param[1];
          return caml_call3(Stdlib_printf[4],_cc_,f$6,cst_vm);
         case 8:
          var f$7=param[1];
          return caml_call3(Stdlib_printf[4],_cd_,f$7,cst_ch);
         case 9:
          var f$8=param[1];
          return caml_call3(Stdlib_printf[4],_ce_,f$8,cst_mm);
         case 10:
          var f$9=param[1];
          return caml_call3(Stdlib_printf[4],_cf_,f$9,cst_cm);
         case 11:
          var f$10=param[1];
          return caml_call3(Stdlib_printf[4],_cg_,f$10,cst_in);
         case 12:
          var f$11=param[1];
          return caml_call3(Stdlib_printf[4],_ch_,f$11,cst_pt);
         default:
          var f$12=param[1];
          return caml_call3(Stdlib_printf[4],_ci_,f$12,cst_pc)}}
    function js$0(t){return caml_jsstring_of_string(string_of_t$0(t))}
    function ml$0(t)
     {var s=caml_string_of_jsstring(t);
      if(caml_call2(String[38],s,cst_0$0))return 0;
      function fail(param)
       {var _cA_=caml_call2(Stdlib[28],s,cst_is_not_a_valid_length);
        throw [0,Stdlib[6],_cA_]}
      var re=regexp(cst_d_d_s_S),match=string_match(re,s,0);
      if(match)
       {var r=match[1],match$0=matched_group(r,1);
        if(match$0)
         {var f=match$0[1];
          try
           {var _cy_=caml_float_of_string(f)}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            if(exn[1] === Stdlib[6])
             {var
               s$0=exn[2],
               _cx_=caml_call2(Stdlib[28],cst_length_conversion_error,s$0);
              throw [0,Stdlib[6],_cx_]}
            throw exn}
          var f$0=_cy_}
        else
         var f$0=fail(0);
        var match$1=matched_group(r,2);
        if(match$1)
         {var _cz_=match$1[1],switch$0=caml_string_compare(_cz_,cst_pc$0);
          if(0 <= switch$0)
           {if(! (0 < switch$0))return [13,f$0];
            if(! caml_string_notequal(_cz_,cst_pt$0))return [12,f$0];
            if(! caml_string_notequal(_cz_,cst_px$0))return [2,f$0];
            if(! caml_string_notequal(_cz_,cst_rem$0))return [4,f$0];
            if(! caml_string_notequal(_cz_,cst_vh$0))return [6,f$0];
            if(! caml_string_notequal(_cz_,cst_vm$0))return [7,f$0];
            if(! caml_string_notequal(_cz_,cst_vw$0))return [5,f$0]}
          else
           {if(! caml_string_notequal(_cz_,cst_ch$0))return [8,f$0];
            if(! caml_string_notequal(_cz_,cst_cm$0))return [10,f$0];
            if(! caml_string_notequal(_cz_,cst_em$1))return [0,f$0];
            if(! caml_string_notequal(_cz_,cst_ex$0))return [1,f$0];
            if(! caml_string_notequal(_cz_,cst_gd$0))return [3,f$0];
            if(! caml_string_notequal(_cz_,cst_in$0))return [11,f$0];
            if(! caml_string_notequal(_cz_,cst_mm$0))return [9,f$0]}
          return fail(0)}
        return fail(0)}
      return fail(0)}
    var Length=[0,string_of_t$0,js$0,ml$0];
    function string_of_t$1(param)
     {switch(param[0])
       {case 0:
         var f=param[1];return caml_call3(Stdlib_printf[4],_cj_,f,cst_deg);
        case 1:
         var f$0=param[1];
         return caml_call3(Stdlib_printf[4],_ck_,f$0,cst_grad);
        case 2:
         var f$1=param[1];
         return caml_call3(Stdlib_printf[4],_cl_,f$1,cst_rad);
        default:
         var f$2=param[1];
         return caml_call3(Stdlib_printf[4],_cm_,f$2,cst_turns)}}
    function js$1(t){return caml_jsstring_of_string(string_of_t$1(t))}
    function ml$1(j)
     {var s=caml_string_of_jsstring(j),re=regexp(cst_d_d_deg_grad_rad_turns);
      function fail(param)
       {var _cw_=caml_call2(Stdlib[28],s,cst_is_not_a_valid_length$0);
        throw [0,Stdlib[6],_cw_]}
      var match=string_match(re,s,0);
      if(match)
       {var r=match[1],match$0=matched_group(r,1);
        if(match$0)
         {var f=match$0[1];
          try
           {var _cu_=caml_float_of_string(f)}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            if(exn[1] === Stdlib[6])
             {var
               s$0=exn[2],
               _ct_=caml_call2(Stdlib[28],cst_length_conversion_error$0,s$0);
              throw [0,Stdlib[6],_ct_]}
            throw exn}
          var f$0=_cu_}
        else
         var f$0=fail(0);
        var match$1=matched_group(r,2);
        if(match$1)
         {var _cv_=match$1[1];
          if(! caml_string_notequal(_cv_,cst_deg$0))return [0,f$0];
          if(! caml_string_notequal(_cv_,cst_grad$0))return [1,f$0];
          if(! caml_string_notequal(_cv_,cst_rad$0))return [2,f$0];
          if(! caml_string_notequal(_cv_,cst_turns$0))return [3,f$0]}
        return fail(0)}
      return fail(0)}
    var
     Angle=[0,string_of_t$1,js$1,ml$1],
     Js_of_ocaml_CSS=
      [0,
       [0,
        string_of_name,
        rgb_of_name,
        hex_of_rgb,
        rgb,
        hsl,
        string_of_t,
        js,
        ml,
        js_t_of_js_string],
       Length,
       Angle];
    caml_register_global(1663,Js_of_ocaml_CSS,"Js_of_ocaml__CSS");
    function listen(opt,target,typ,cb)
     {if(opt)var sth=opt[1],capture=sth;else var capture=0;
      var _cs_=! ! capture;
      return addEventListener
              (target,
               typ,
               full_handler(function(n,e){return ! ! caml_call2(cb,n,e)}),
               _cs_)}
    var Js_of_ocaml_Dom_events=[0,Event$0,listen,removeEventListener];
    caml_register_global
     (1664,Js_of_ocaml_Dom_events,"Js_of_ocaml__Dom_events");
    var
     xmlns="http://www.w3.org/2000/svg",
     SVGError=[248,cst_Js_of_ocaml_Dom_svg_SVGErr,caml_fresh_oo_id(0)];
    function createElement$0(doc,name)
     {return doc.createElementNS
              ("http://www.w3.org/2000/svg",caml_jsstring_of_string(name))}
    function unsafeCreateElement$0(doc,name){return createElement$0(doc,name)}
    function createA$0(doc){return unsafeCreateElement$0(doc,cst_a$2)}
    function createAltGlyph(doc)
     {return unsafeCreateElement$0(doc,cst_altglyph)}
    function createAltGlyphDef(doc)
     {return unsafeCreateElement$0(doc,cst_altglyphdef)}
    function createAltGlyphItem(doc)
     {return unsafeCreateElement$0(doc,cst_altglyphitem)}
    function createAnimate(doc){return unsafeCreateElement$0(doc,cst_animate)}
    function createAnimateColor(doc)
     {return unsafeCreateElement$0(doc,cst_animatecolor)}
    function createAnimateMotion(doc)
     {return unsafeCreateElement$0(doc,cst_animatemotion)}
    function createAnimateTransform(doc)
     {return unsafeCreateElement$0(doc,cst_animatetransform)}
    function createCircle(doc){return unsafeCreateElement$0(doc,cst_circle)}
    function createClipPath(doc)
     {return unsafeCreateElement$0(doc,cst_clippath)}
    function createCursor(doc){return unsafeCreateElement$0(doc,cst_cursor)}
    function createDefs(doc){return unsafeCreateElement$0(doc,cst_defs)}
    function createDesc(doc){return unsafeCreateElement$0(doc,cst_desc)}
    function createEllipse(doc){return unsafeCreateElement$0(doc,cst_ellipse)}
    function createFilter(doc){return unsafeCreateElement$0(doc,cst_filter)}
    function createFont(doc){return unsafeCreateElement$0(doc,cst_font)}
    function createFontFace(doc)
     {return unsafeCreateElement$0(doc,cst_font_face)}
    function createFontFaceFormat(doc)
     {return unsafeCreateElement$0(doc,cst_font_face_format)}
    function createFontFaceName(doc)
     {return unsafeCreateElement$0(doc,cst_font_face_name)}
    function createFontFaceSrc(doc)
     {return unsafeCreateElement$0(doc,cst_font_face_src)}
    function createFontFaceUri(doc)
     {return unsafeCreateElement$0(doc,cst_font_face_uri)}
    function createForeignObject(doc)
     {return unsafeCreateElement$0(doc,cst_foreignObject)}
    function createG(doc){return unsafeCreateElement$0(doc,cst_g$0)}
    function createGlyph(doc){return unsafeCreateElement$0(doc,cst_glyph)}
    function createGlyphRef(doc)
     {return unsafeCreateElement$0(doc,cst_glyphref)}
    function createhkern(doc){return unsafeCreateElement$0(doc,cst_hkern)}
    function createImage(doc){return unsafeCreateElement$0(doc,cst_image)}
    function createLineElement(doc)
     {return unsafeCreateElement$0(doc,cst_line)}
    function createLinearElement(doc)
     {return unsafeCreateElement$0(doc,cst_lineargradient)}
    function createMask(doc){return unsafeCreateElement$0(doc,cst_mask)}
    function createMetaData(doc)
     {return unsafeCreateElement$0(doc,cst_metadata)}
    function createMissingGlyph(doc)
     {return unsafeCreateElement$0(doc,cst_missing_glyph)}
    function createMPath(doc){return unsafeCreateElement$0(doc,cst_mpath)}
    function createPath(doc){return unsafeCreateElement$0(doc,cst_path)}
    function createPattern(doc){return unsafeCreateElement$0(doc,cst_pattern)}
    function createPolygon(doc){return unsafeCreateElement$0(doc,cst_polygon)}
    function createPolyline(doc)
     {return unsafeCreateElement$0(doc,cst_polyline)}
    function createRadialgradient(doc)
     {return unsafeCreateElement$0(doc,cst_radialgradient)}
    function createRect(doc){return unsafeCreateElement$0(doc,cst_rect)}
    function createScript$0(doc)
     {return unsafeCreateElement$0(doc,cst_script$2)}
    function createSet(doc){return unsafeCreateElement$0(doc,cst_set)}
    function createStop(doc){return unsafeCreateElement$0(doc,cst_stop)}
    function createStyle$0(doc){return unsafeCreateElement$0(doc,cst_style$2)}
    function createSvg(doc){return unsafeCreateElement$0(doc,cst_svg)}
    function createSwitch(doc){return unsafeCreateElement$0(doc,cst_switch)}
    function createSymbol(doc){return unsafeCreateElement$0(doc,cst_symbol)}
    function createTextElement(doc)
     {return unsafeCreateElement$0(doc,cst_text$0)}
    function createTextpath(doc)
     {return unsafeCreateElement$0(doc,cst_textpath)}
    function createTitle$0(doc){return unsafeCreateElement$0(doc,cst_title$2)}
    function createTref(doc){return unsafeCreateElement$0(doc,cst_tref)}
    function createTspan(doc){return unsafeCreateElement$0(doc,cst_tspan)}
    function createUse(doc){return unsafeCreateElement$0(doc,cst_use)}
    function createView(doc){return unsafeCreateElement$0(doc,cst_view)}
    function createvkern(doc){return unsafeCreateElement$0(doc,cst_vkern)}
    var svg_element=Unsafe[1].SVGElement,document$1=Unsafe[1].document;
    function getElementById$0(id)
     {function _cp_(e){if(e instanceof svg_element)return e;throw Stdlib[8]}
      function _cq_(param){throw Stdlib[8]}
      var _cr_=Unsafe[1].document.getElementById(caml_jsstring_of_string(id));
      return caml_call3(Opt[7],_cr_,_cq_,_cp_)}
    function element$2(e){return e instanceof svg_element?e:no_handler}
    function unsafeCoerce$0(e,tag)
     {var _co_=caml_jsstring_of_string(tag);
      return e.tagName.toLowerCase() === _co_?e:no_handler}
    function a$0(e){return unsafeCoerce$0(e,cst_a$3)}
    function altGlyph(e){return unsafeCoerce$0(e,cst_altglyph$0)}
    function altGlyphDef(e){return unsafeCoerce$0(e,cst_altglyphdef$0)}
    function altGlyphItem(e){return unsafeCoerce$0(e,cst_altglyphitem$0)}
    function animate(e){return unsafeCoerce$0(e,cst_animate$0)}
    function animateColor(e){return unsafeCoerce$0(e,cst_animatecolor$0)}
    function animateMotion(e){return unsafeCoerce$0(e,cst_animatemotion$0)}
    function animateTransform(e)
     {return unsafeCoerce$0(e,cst_animatetransform$0)}
    function circle(e){return unsafeCoerce$0(e,cst_circle$0)}
    function clipPath(e){return unsafeCoerce$0(e,cst_clippath$0)}
    function cursor(e){return unsafeCoerce$0(e,cst_cursor$0)}
    function defs(e){return unsafeCoerce$0(e,cst_defs$0)}
    function desc(e){return unsafeCoerce$0(e,cst_desc$0)}
    function ellipse(e){return unsafeCoerce$0(e,cst_ellipse$0)}
    function filter(e){return unsafeCoerce$0(e,cst_filter$0)}
    function font(e){return unsafeCoerce$0(e,cst_font$0)}
    function fontFace(e){return unsafeCoerce$0(e,cst_font_face$0)}
    function fontFaceFormat(e)
     {return unsafeCoerce$0(e,cst_font_face_format$0)}
    function fontFaceName(e){return unsafeCoerce$0(e,cst_font_face_name$0)}
    function fontFaceSrc(e){return unsafeCoerce$0(e,cst_font_face_src$0)}
    function fontFaceUri(e){return unsafeCoerce$0(e,cst_font_face_uri$0)}
    function foreignObject(e){return unsafeCoerce$0(e,cst_foreignobject)}
    function g(e){return unsafeCoerce$0(e,cst_g$1)}
    function glyph(e){return unsafeCoerce$0(e,cst_glyph$0)}
    function glyphRef(e){return unsafeCoerce$0(e,cst_glyphref$0)}
    function hkern(e){return unsafeCoerce$0(e,cst_hkern$0)}
    function image(e){return unsafeCoerce$0(e,cst_image$0)}
    function lineElement(e){return unsafeCoerce$0(e,cst_line$0)}
    function linearElement(e){return unsafeCoerce$0(e,cst_lineargradient$0)}
    function mask(e){return unsafeCoerce$0(e,cst_mask$0)}
    function metaData(e){return unsafeCoerce$0(e,cst_metadata$0)}
    function missingGlyph(e){return unsafeCoerce$0(e,cst_missing_glyph$0)}
    function mPath(e){return unsafeCoerce$0(e,cst_mpath$0)}
    function path$0(e){return unsafeCoerce$0(e,cst_path$0)}
    function pattern(e){return unsafeCoerce$0(e,cst_pattern$0)}
    function polygon(e){return unsafeCoerce$0(e,cst_polygon$0)}
    function polyline(e){return unsafeCoerce$0(e,cst_polyline$0)}
    function radialgradient(e){return unsafeCoerce$0(e,cst_radialgradient$0)}
    function rect(e){return unsafeCoerce$0(e,cst_rect$0)}
    function script$0(e){return unsafeCoerce$0(e,cst_script$3)}
    function set$1(e){return unsafeCoerce$0(e,cst_set$0)}
    function stop(e){return unsafeCoerce$0(e,cst_stop$0)}
    function style$0(e){return unsafeCoerce$0(e,cst_style$3)}
    function svg(e){return unsafeCoerce$0(e,cst_svg$0)}
    function switch$0(e){return unsafeCoerce$0(e,cst_switch$0)}
    function symbol$12(e){return unsafeCoerce$0(e,cst_symbol$0)}
    function textElement(e){return unsafeCoerce$0(e,cst_text$1)}
    function textpath(e){return unsafeCoerce$0(e,cst_textpath$0)}
    function title$0(e){return unsafeCoerce$0(e,cst_title$3)}
    function tref(e){return unsafeCoerce$0(e,cst_tref$0)}
    function tspan(e){return unsafeCoerce$0(e,cst_tspan$0)}
    function use(e){return unsafeCoerce$0(e,cst_use$0)}
    function view(e){return unsafeCoerce$0(e,cst_view$0)}
    function vkern(e){return unsafeCoerce$0(e,cst_vkern$0)}
    var
     Js_of_ocaml_Dom_svg=
      [0,
       xmlns,
       SVGError,
       createElement$0,
       createA$0,
       createAltGlyph,
       createAltGlyphDef,
       createAltGlyphItem,
       createAnimate,
       createAnimateColor,
       createAnimateMotion,
       createAnimateTransform,
       createCircle,
       createClipPath,
       createCursor,
       createDefs,
       createDesc,
       createEllipse,
       createFilter,
       createFont,
       createFontFace,
       createFontFaceFormat,
       createFontFaceName,
       createFontFaceSrc,
       createFontFaceUri,
       createForeignObject,
       createG,
       createGlyph,
       createGlyphRef,
       createhkern,
       createImage,
       createLineElement,
       createLinearElement,
       createMask,
       createMetaData,
       createMissingGlyph,
       createMPath,
       createPath,
       createPattern,
       createPolygon,
       createPolyline,
       createRadialgradient,
       createRect,
       createScript$0,
       createSet,
       createStop,
       createStyle$0,
       createSvg,
       createSwitch,
       createSymbol,
       createTextElement,
       createTextpath,
       createTitle$0,
       createTref,
       createTspan,
       createUse,
       createView,
       createvkern,
       svg_element,
       document$1,
       getElementById$0,
       [0,
        element$2,
        a$0,
        altGlyph,
        altGlyphDef,
        altGlyphItem,
        animate,
        animateColor,
        animateMotion,
        animateTransform,
        circle,
        clipPath,
        cursor,
        defs,
        desc,
        ellipse,
        filter,
        font,
        fontFace,
        fontFaceFormat,
        fontFaceName,
        fontFaceSrc,
        fontFaceUri,
        foreignObject,
        g,
        glyph,
        glyphRef,
        hkern,
        image,
        lineElement,
        linearElement,
        mask,
        metaData,
        missingGlyph,
        mPath,
        path$0,
        pattern,
        polygon,
        polyline,
        radialgradient,
        rect,
        script$0,
        set$1,
        stop,
        style$0,
        svg,
        switch$0,
        symbol$12,
        textElement,
        textpath,
        title$0,
        tref,
        tspan,
        use,
        view,
        vkern]];
    caml_register_global(1665,Js_of_ocaml_Dom_svg,"Js_of_ocaml__Dom_svg");
    function withCredentials(b)
     {var init={};init.withCredentials = ! ! b;return init}
    var
     eventSource=Unsafe[1].EventSource,
     eventSource_options=Unsafe[1].EventSource,
     Js_of_ocaml_EventSource=
      [0,withCredentials,eventSource,eventSource_options,addEventListener];
    caml_register_global
     (1666,Js_of_ocaml_EventSource,"Js_of_ocaml__EventSource");
    var
     console=runtime.caml_js_get_console(0),
     Js_of_ocaml_Firebug=[0,console];
    caml_register_global(1667,Js_of_ocaml_Firebug,"Js_of_ocaml__Firebug");
    function empty_position_options(param){return {}}
    var
     x=Unsafe[1].navigator,
     geolocation=caml_call1(Optdef[5],x)?x.geolocation:x;
    function is_supported$2(param){return caml_call1(Optdef[5],geolocation)}
    var
     Js_of_ocaml_Geolocation=
      [0,empty_position_options,geolocation,is_supported$2];
    caml_register_global
     (1668,Js_of_ocaml_Geolocation,"Js_of_ocaml__Geolocation");
    function empty_intersection_observer_op(param){return {}}
    var intersectionObserver_unsafe=Unsafe[1].IntersectionObserver;
    function is_supported$3(param)
     {return caml_call1(Optdef[5],intersectionObserver_unsafe)}
    var
     Js_of_ocaml_IntersectionObserv=
      [0,
       empty_intersection_observer_op,
       is_supported$3,
       intersectionObserver_unsafe];
    caml_register_global
     (1669,Js_of_ocaml_IntersectionObserv,"Js_of_ocaml__IntersectionObserver");
    function object_options(param){return {"localeMatcher":"best fit"}}
    function options(param)
     {return {"localeMatcher":"best fit",
              "usage":"sort",
              "sensitivity":"variant",
              "ignorePunctuation":false$0,
              "numeric":false$0,
              "caseFirst":"false"}}
    var Collator=[0,object_options,options];
    function options$0(param)
     {return {"localeMatcher":"best fit",
              "timeZone":t39,
              "hour12":t39,
              "hourCycle":t39,
              "formatMatcher":"best fit",
              "weekday":t39,
              "era":t39,
              "year":t39,
              "month":t39,
              "day":t39,
              "hour":t39,
              "minute":t39,
              "second":t39,
              "timeZoneName":t39}}
    var DateTimeFormat=[0,object_options,options$0];
    function options$1(param)
     {return {"localeMatcher":"best fit",
              "style":"decimal",
              "currency":t39,
              "currencyDisplay":t39,
              "useGrouping":true$0,
              "minimumIntegerDigits":t39,
              "minimumFractionDigits":t39,
              "maximumFractionDigits":t39,
              "minimumSignificantDigits":t39,
              "maximumSignificantDigits":t39}}
    var NumberFormat=[0,object_options,options$1];
    function options$2(param)
     {return {"localeMatcher":"best fit","type":"cardinal"}}
    var
     PluralRules=[0,object_options,options$2],
     intl=Unsafe[1].Intl,
     collator_constr=Unsafe[1].Intl.Collator,
     dateTimeFormat_constr=Unsafe[1].Intl.DateTimeFormat,
     numberFormat_constr=Unsafe[1].Intl.NumberFormat,
     pluralRules_constr=Unsafe[1].Intl.PluralRules;
    function is_supported$4(param){return caml_call1(Optdef[5],intl)}
    var
     Js_of_ocaml_Intl=
      [0,
       Collator,
       DateTimeFormat,
       NumberFormat,
       PluralRules,
       intl,
       collator_constr,
       dateTimeFormat_constr,
       numberFormat_constr,
       pluralRules_constr,
       is_supported$4];
    caml_register_global(1670,Js_of_ocaml_Intl,"Js_of_ocaml__Intl");
    var Js_of_ocaml$0=[0];
    caml_register_global(1671,Js_of_ocaml$0,"Js_of_ocaml");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJqc19vZl9vY2FtbC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsiam9vX2dsb2JhbF9vYmplY3QiLCJudWxsIiwidW5kZWZpbmVkIiwiZXhuIiwiZXZlbnQiXSwic291cmNlcyI6WyIiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQUE7O0ssV0FBQUM7SyxJQUFBQztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFBV0MsS0FBTyxNQUFNQSxHQUF2QjtJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFBREMsTTs7Ozs7Ozs7Ozt5QkFBQUEsTSIsInNvdXJjZXNDb250ZW50IjpbbnVsbF19
