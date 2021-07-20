(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_js_wrap_callback=runtime.caml_js_wrap_callback,
     caml_jsstring_of_string=runtime.caml_jsstring_of_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_of_jsstring=runtime.caml_string_of_jsstring,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst=caml_string_of_jsbytes(""),
     cst_Gfx_Gfx_base_GfxError=
      caml_string_of_jsbytes("Gfx__Gfx_base.GfxError"),
     cst_0=caml_string_of_jsbytes("0)"),
     cst$0=caml_string_of_jsbytes(", "),
     cst$1=caml_string_of_jsbytes(", "),
     cst$2=caml_string_of_jsbytes(", "),
     cst_rgba=caml_string_of_jsbytes("rgba("),
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_scanf=global_data.Stdlib__scanf,
     Stdlib=global_data.Stdlib,
     Stdlib_format=global_data.Stdlib__format,
     Js_of_ocaml_Firebug=global_data.Js_of_ocaml__Firebug,
     Js_of_ocaml_Dom_html=global_data.Js_of_ocaml__Dom_html,
     Stdlib_queue=global_data.Stdlib__queue,
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     Gfx_gfx_jsoo=[0];
    caml_register_global(52,Gfx_gfx_jsoo,"Gfx__gfx_jsoo__");
    var Gfx=[0];
    caml_register_global(53,Gfx,"Gfx__");
    var
     GfxError=[248,cst_Gfx_Gfx_base_GfxError,runtime.caml_fresh_oo_id(0)],
     _d_=
      [0,
       [20,
        0,
        caml_string_of_jsbytes
         ("\xff\xff\xff\xff\xff\xff\xff\xfb\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),
        [12,58,[4,0,0,0,[12,120,[4,0,0,0,[12,58,[2,0,0]]]]]]],
       caml_string_of_jsbytes("%[^:]:%dx%d:%s")],
     _a_=
      [0,
       [11,
        caml_string_of_jsbytes("Invalid window spec `"),
        [2,0,[11,caml_string_of_jsbytes("` : "),[2,0,0]]]],
       caml_string_of_jsbytes("Invalid window spec `%s` : %s")],
     _b_=
      [0,
       [11,caml_string_of_jsbytes("Invalid window spec `"),[2,0,[12,96,0]]],
       caml_string_of_jsbytes("Invalid window spec `%s`")],
     _c_=
      [0,
       [11,caml_string_of_jsbytes("Invalid window spec `"),[2,0,[12,96,0]]],
       caml_string_of_jsbytes("Invalid window spec `%s`")],
     _e_=
      [0,
       [11,
        caml_string_of_jsbytes("Cannot find canvas with id `"),
        [2,0,[12,96,0]]],
       caml_string_of_jsbytes("Cannot find canvas with id `%s`")];
    function gfx_error(fmt)
     {function _C_(msg){throw [0,GfxError,msg]}
      return caml_call2(Stdlib_format[134],_C_,fmt)}
    function parse_window_spec(s)
     {try
       {var
         _A_=
          function(title,width,height,flags)
           {return [0,
                    title,
                    width,
                    height,
                    caml_call2(Stdlib_string[35],44,flags)]},
         _B_=caml_call3(Stdlib_scanf[4],s,_d_,_A_);
        return _B_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Stdlib_scanf[2])
         {var msg=exn[2],match=caml_call2(Stdlib_string[35],58,msg);
          if(match)
           {var _y_=match[2];
            if(_y_)
             {var l=_y_[2],_z_=caml_call2(Stdlib_string[7],cst,l);
              return caml_call2(gfx_error(_a_),s,_z_)}}
          return caml_call1(gfx_error(_b_),s)}
        if(exn === Stdlib[12])return caml_call1(gfx_error(_c_),s);
        throw exn}}
    var include=[0,GfxError,gfx_error,parse_window_spec];
    caml_register_global(58,include,"Gfx__Gfx_base");
    var events=caml_call1(Stdlib_queue[2],0);
    function create(s)
     {var
       match=
        caml_call2(Js_of_ocaml_Dom_html[5],s,Js_of_ocaml_Dom_html[117][10]);
      if(match)
       {var
         canvas=match[1],
         ctx=canvas.getContext(Js_of_ocaml_Dom_html[1]),
         _s_=
          function(e)
           {function _w_(k)
             {var _x_=[1,caml_string_of_jsstring(k)];
              return caml_call2(Stdlib_queue[3],_x_,events)}
            caml_call2(Js_of_ocaml_Js[6][6],e.key,_w_);
            return Js_of_ocaml_Js[7]};
        canvas.onkeydown = caml_call1(Js_of_ocaml_Dom_html[10],_s_);
        var
         _t_=
          function(e)
           {function _u_(k)
             {var _v_=[0,caml_string_of_jsstring(k)];
              return caml_call2(Stdlib_queue[3],_v_,events)}
            caml_call2(Js_of_ocaml_Js[6][6],e.key,_u_);
            return Js_of_ocaml_Js[7]};
        canvas.onkeyup = caml_call1(Js_of_ocaml_Dom_html[10],_t_);
        return [0,canvas,ctx]}
      return caml_call1(gfx_error(_e_),s)}
    function create_offscreen(w,h)
     {var
       canvas=
        caml_call1(Js_of_ocaml_Dom_html[110],Js_of_ocaml_Dom_html[2]);
      canvas.height = h;
      canvas.width = w;
      return canvas.getContext(Js_of_ocaml_Dom_html[1])}
    function render_width(ctx){return ctx.canvas.width}
    function render_height(ctx){return ctx.canvas.width}
    function blit(dst,src,x,y){return dst.drawImage(src.canvas,x,y)}
    function blit_scale(dst,src,dx,dy,dw,dh)
     {return dst.drawImage(src.canvas,dx,dy,dw,dh)}
    function blit_full(dst,src,sx,sy,sw,sh,dx,dy,dw,dh)
     {return dst.drawImage(src.canvas,sx,sy,sw,sh,dx,dy,dw,dh)}
    function color(r,g,b,a)
     {var
       _h_=caml_call1(Stdlib[35],a / 255.),
       _i_=caml_call2(Stdlib[28],_h_,cst_0),
       _j_=caml_call2(Stdlib[28],cst$0,_i_),
       _k_=caml_call1(Stdlib[33],b),
       _l_=caml_call2(Stdlib[28],_k_,_j_),
       _m_=caml_call2(Stdlib[28],cst$1,_l_),
       _n_=caml_call1(Stdlib[33],g),
       _o_=caml_call2(Stdlib[28],_n_,_m_),
       _p_=caml_call2(Stdlib[28],cst$2,_o_),
       _q_=caml_call1(Stdlib[33],r),
       _r_=caml_call2(Stdlib[28],_q_,_p_);
      return caml_call2(Stdlib[28],cst_rgba,_r_)}
    function clear_rect(ctx,x,y,w,h){return ctx.clearRect(x,y,w,h)}
    function fill_rect(ctx,x,y,w,h,c)
     {ctx.fillStyle = caml_jsstring_of_string(c);return ctx.fillRect(x,y,w,h)}
    function load_image(src)
     {var img=caml_call1(Js_of_ocaml_Dom_html[67],Js_of_ocaml_Dom_html[2]);
      img.src = caml_jsstring_of_string(src);
      return img}
    function image_ready(img){return img.complete | 0}
    function draw_image(ctx,img,x,y,alpha)
     {ctx.globalAlpha = alpha;return ctx.drawImage(img,x,y)}
    function draw_image_scale(ctx,img,dx,dy,dw,dh,alpha)
     {ctx.globalAlpha = alpha;return ctx.drawImage(img,dx,dy,dw,dh)}
    function draw_image_full(ctx,img,sx,sy,sw,sh,dx,dy,dw,dh,alpha)
     {ctx.globalAlpha = alpha;
      return ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh)}
    function draw_text(ctx,text,x,y,font,color,size,alpha)
     {ctx.globalAlpha = alpha;
      ctx.font = caml_jsstring_of_string(font);
      ctx.fillStyle = caml_jsstring_of_string(color);
      return ctx.fillText(caml_jsstring_of_string(text),x,y,size)}
    function measure_text(ctx,text,font)
     {ctx.font = caml_jsstring_of_string(font);
      var m=ctx.measureText(caml_jsstring_of_string(text));
      return m.width | 0}
    function poll_event(param)
     {return caml_call1(Stdlib_queue[13],events)
              ?0
              :caml_call1(Stdlib_queue[7],events)}
    function main_loop(f)
     {var cb=[0,caml_js_wrap_callback(function(param){return 0})];
      function loop(dt)
       {var
         _f_=caml_call1(f,dt),
         _g_=_f_?(Js_of_ocaml_Dom_html[8].requestAnimationFrame(cb[1]),0):_f_;
        return _g_}
      cb[1] = caml_js_wrap_callback(loop);
      Js_of_ocaml_Dom_html[8].requestAnimationFrame(cb[1]);
      return 0}
    function commit(param){return 0}
    function debug(msg)
     {return Js_of_ocaml_Firebug[1].log(caml_jsstring_of_string(msg))}
    var
     Gfx$0=
      [0,
       GfxError,
       gfx_error,
       parse_window_spec,
       create,
       create_offscreen,
       render_width,
       render_height,
       blit,
       blit_scale,
       blit_full,
       color,
       fill_rect,
       clear_rect,
       load_image,
       image_ready,
       draw_image,
       draw_image_scale,
       draw_image_full,
       draw_text,
       measure_text,
       poll_event,
       main_loop,
       commit,
       debug];
    caml_register_global(63,Gfx$0,"Gfx");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuZ2Z4X2pzb28ub2Jqcy9nZnhfanNvby5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsiZ2Z4X2Vycm9yIiwiZm10IiwibXNnIiwicGFyc2Vfd2luZG93X3NwZWMiLCJzIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsImZsYWdzIiwibCIsImV2ZW50cyIsImNyZWF0ZSIsImNhbnZhcyIsImN0eCIsImUiLCJrIiwiY3JlYXRlX29mZnNjcmVlbiIsInciLCJoIiwicmVuZGVyX3dpZHRoIiwicmVuZGVyX2hlaWdodCIsImJsaXQiLCJkc3QiLCJzcmMiLCJ4IiwieSIsImJsaXRfc2NhbGUiLCJkeCIsImR5IiwiZHciLCJkaCIsImJsaXRfZnVsbCIsInN4Iiwic3kiLCJzdyIsInNoIiwiY29sb3IiLCJyIiwiZyIsImIiLCJhIiwiY2xlYXJfcmVjdCIsImZpbGxfcmVjdCIsImMiLCJsb2FkX2ltYWdlIiwiaW1nIiwiaW1hZ2VfcmVhZHkiLCJkcmF3X2ltYWdlIiwiYWxwaGEiLCJkcmF3X2ltYWdlX3NjYWxlIiwiZHJhd19pbWFnZV9mdWxsIiwiZHJhd190ZXh0IiwidGV4dCIsImZvbnQiLCJzaXplIiwibWVhc3VyZV90ZXh0IiwibSIsInBvbGxfZXZlbnQiLCJtYWluX2xvb3AiLCJmIiwiY2IiLCJsb29wIiwiZHQiLCJjb21taXQiLCJkZWJ1ZyJdLCJzb3VyY2VzIjpbIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L2xpYi9nZngvZ2Z4X2Jhc2UubWwiLCIvaG9tZS9hbnRvaW5lL1BGQS9QRkEtUHJvamV0LUcxMC9fYnVpbGQvZGVmYXVsdC9saWIvZ2Z4L2dmeF9qc29vL2dmeC5tbCJdLCJtYXBwaW5ncyI6Ijs7STs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBR0lBLFVBQVVDO01BQ1osYUFDS0MsS0FBTyxrQkFBUEEsSUFBMkI7TUFEaEMs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SUF0RmhDLFNBd0ZUcUIsVUFBV3RDLElBQWN1QyxLQUFLNUIsRUFBRUMsRUFBRTRCLEtBQUtqQixNQUFNa0IsS0FBS047TUFDcEQsa0JBRG9EQTtNQUVwRCxXQUFnQix3QkFGb0JLO01BR3BDLGdCQUFxQix3QkFIb0JqQjtNQUlmLDRDQUpDZ0IsTUFBSzVCLEVBQUVDLEVBQWE2QixLQUlxQjtJQTVGekQsU0FnR1RDLGFBQWMxQyxJQUFjdUMsS0FBS0M7TUFDbkMsV0FBZ0Isd0JBRG1CQTtNQUUzQixJQUFKRyxFQUFJLGdCQUFtQix3QkFGR0o7TUFHakIsT0FEVEksV0FDc0I7SUFuR2YsU0FxR1RDO01BQ0MsbUNBdEdEL0M7O2VBdUdHLDJCQXZHSEEsT0F1R21CO0lBdkdWLFNBMEdUZ0QsVUFBVUM7TUFDQyxJQUFUQyxNQUFTLHNDQUE0QixRQUFFO01BQTlCLFNBQ1RDLEtBQUtDO1FBQ0Y7d0JBSEtILEVBRUhHO1NBQ0YsU0FDTSw4Q0FIVEY7UUFBcUMsVUFHb0I7TUFFN0QsOEJBSklDO01BS0UsOENBTkZEO01BTUUsUUFBOEM7SUFqSHpDLFNBbUhURyxjQUFXLFFBQUU7SUFuSEosU0FxSFRDLE1BQU05RDtNQUNlLDBEQURmQSxLQUM4QjtJQXRIM0I7Ozs7T0RMVEY7T0FZQUc7T0NOQVE7T0FrQkFLO09BTUFHO09BR0FDO09BSUFDO09BR0FLO09BSUFLO09BS0FLO09BZUFNO09BSEFEO09BVUFHO09BS0FFO09BR0FDO09BSUFFO09BSUFDO09BTUFDO09BUUFJO09BS0FFO09BS0FDO09BU0FLO09BRUFDO0lBckhTO1UiLCJzb3VyY2VzQ29udGVudCI6WyIoKiBFeGNlcHRpb24gcmFpc2VkIHdoZW4gYSBncmFwaGljYWwgZXJyb3Igb2NjdXJzICopXG5leGNlcHRpb24gR2Z4RXJyb3Igb2Ygc3RyaW5nXG5cbmxldCBnZnhfZXJyb3IgZm10ID1cbiAgRm9ybWF0Lmthc3ByaW50ZiBcbiAgKGZ1biBtc2cgLT4gcmFpc2UgKEdmeEVycm9yIG1zZykpXG4gIGZtdFxuXG4oKiBUeXBlIG9mIHVzZXIgaW5wdXQgZXZlbnRzICopXG50eXBlIGV2ZW50ID1cbiAgTm9FdmVudCAgICAgICAgICAoKiBubyBldmVudCAqKVxufCBLZXlVcCBvZiBzdHJpbmcgICgqIEtleSB3aXRoIGEgZ2l2ZW4gbmFtZSB3YXMgcmVsZWFzZWQgKilcbnwgS2V5RG93biBvZiBzdHJpbmcgKCogS2V5IHdpdGggYSBnaXZlbiBuYW1lIHdhcyBwcmVzc2VkICopXG5cblxubGV0IHBhcnNlX3dpbmRvd19zcGVjIHMgPVxuICB0cnlcbiAgIFNjYW5mLnNzY2FuZiBzIFwiJVteOl06JWR4JWQ6JXNcIiAoZnVuIHRpdGxlIHdpZHRoIGhlaWdodCBmbGFncyAtPlxuICAgICAodGl0bGUsIHdpZHRoLCBoZWlnaHQsIFN0cmluZy5zcGxpdF9vbl9jaGFyICcsJyBmbGFncylcbiAgICApXG4gIHdpdGggU2NhbmYuU2Nhbl9mYWlsdXJlIG1zZyAtPlxuICAgIGJlZ2luIG1hdGNoIFN0cmluZy5zcGxpdF9vbl9jaGFyICc6JyBtc2cgd2l0aFxuICAgICAgXzo6Xzo6bCAtPiBnZnhfZXJyb3IgXCJJbnZhbGlkIHdpbmRvdyBzcGVjIGAlc2AgOiAlc1wiIHMgKFN0cmluZy5jb25jYXQgXCJcIiBsKVxuICAgICAgfCBfIC0+ICBnZnhfZXJyb3IgXCJJbnZhbGlkIHdpbmRvdyBzcGVjIGAlc2BcIiBzXG4gICAgZW5kXG4gIHwgRW5kX29mX2ZpbGUgIC0+IGdmeF9lcnJvciBcIkludmFsaWQgd2luZG93IHNwZWMgYCVzYFwiIHMgXG4iLCJvcGVuIEpzX29mX29jYW1sXG5pbmNsdWRlIEdmeF9iYXNlXG5cblxudHlwZSB3aW5kb3cgPSBEb21faHRtbC5jYW52YXNFbGVtZW50IEpzLnRcbnR5cGUgcmVuZGVyID0gRG9tX2h0bWwuY2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIEpzLnRcbnR5cGUgY29sb3IgPSBzdHJpbmdcblxubGV0IGV2ZW50cyA9IFF1ZXVlLmNyZWF0ZSAoKVxubGV0IGNyZWF0ZSBzID1cbiAgKCpsZXQgaWQsIHcsIGgsIF8gPSBwYXJzZV93aW5kb3dfc3BlYyBzIGluICopXG4gIG1hdGNoIERvbV9odG1sLmdldEVsZW1lbnRCeUlkX2NvZXJjZSBzIERvbV9odG1sLkNvZXJjZVRvLmNhbnZhcyB3aXRoXG4gICAgIE5vbmUgLT4gIGdmeF9lcnJvciBcIkNhbm5vdCBmaW5kIGNhbnZhcyB3aXRoIGlkIGAlc2BcIiBzXG4gICB8IFNvbWUgY2FudmFzIC0+XG4gICAgICAoKmNhbnZhcyAjIy53aWR0aCA6PSAgdztcbiAgICAgIGNhbnZhcyAjIy5oZWlnaHQgOj0gaDsqKVxuICAgICAgbGV0IGN0eCA9IGNhbnZhcyAjI2dldENvbnRleHQgRG9tX2h0bWwuXzJkXyBpblxuICAgICAgY2FudmFzICMjLiBvbmtleWRvd24gOj0gRG9tX2h0bWwuaGFuZGxlciAoZnVuIGUgLT5cbiAgICAgICAgSnMuT3B0ZGVmLml0ZXIgZSAjIy5rZXkgKGZ1biBrIC0+XG4gICAgICAgICAgUXVldWUuYWRkIChHZnhfYmFzZS5LZXlEb3duIChKcy50b19zdHJpbmcgaykpIGV2ZW50cyk7XG4gICAgICAgIEpzLl90cnVlKTtcbiAgICAgIGNhbnZhcyAjIy4gb25rZXl1cCA6PSBEb21faHRtbC5oYW5kbGVyIChmdW4gZSAtPlxuICAgICAgICBKcy5PcHRkZWYuaXRlciBlICMjLmtleSAoZnVuIGsgLT5cbiAgICAgICAgICBRdWV1ZS5hZGQgKEdmeF9iYXNlLktleVVwIChKcy50b19zdHJpbmcgaykpIGV2ZW50cyk7XG4gICAgICAgIEpzLl90cnVlKTtcbiAgICAgIChjYW52YXMsIGN0eClcblxubGV0IGNyZWF0ZV9vZmZzY3JlZW4gdyBoID1cbiAgbGV0IGNhbnZhcyA9IERvbV9odG1sLmNyZWF0ZUNhbnZhcyBEb21faHRtbC5kb2N1bWVudCBpblxuICAgIGNhbnZhcyAjIy4gaGVpZ2h0IDo9IGg7XG4gICAgY2FudmFzICMjLiB3aWR0aCA6PSB3O1xuICAgIGNhbnZhcyMjZ2V0Q29udGV4dCBEb21faHRtbC5fMmRfXG5cbmxldCByZW5kZXJfd2lkdGggKGN0eCA6IHJlbmRlcikgPVxuICBjdHggIyMuIGNhbnZhcyAjIy4gd2lkdGhcblxubGV0IHJlbmRlcl9oZWlnaHQgKGN0eCA6IHJlbmRlcikgPVxuICBjdHggIyMuIGNhbnZhcyAjIy4gd2lkdGhcblxuXG5sZXQgYmxpdCAoZHN0IDogcmVuZGVyKSAoc3JjIDogcmVuZGVyKSB4IHkgPVxuICBkc3QgIyMgZHJhd0ltYWdlX2Zyb21DYW52YXMgKHNyYyAjIy4gY2FudmFzKSAoZmxvYXQgeCkgKGZsb2F0IHkpXG5cbmxldCBibGl0X3NjYWxlIChkc3QgOiByZW5kZXIpIChzcmMgOiByZW5kZXIpIGR4IGR5IGR3IGRoID1cbiAgICBkc3QgIyMgZHJhd0ltYWdlX2Zyb21DYW52YXNXaXRoU2l6ZSAoc3JjICMjLiBjYW52YXMpXG4gICAgIChmbG9hdCBkeCkgKGZsb2F0IGR5KSAoZmxvYXQgZHcpIChmbG9hdCBkaClcblxubGV0IGJsaXRfZnVsbCAoZHN0IDogcmVuZGVyKSAoc3JjIDogcmVuZGVyKSBzeCBzeSBzdyBzaCBkeCBkeSBkdyBkaCA9XG4gICAgZHN0ICMjIGRyYXdJbWFnZV9mdWxsRnJvbUNhbnZhcyAoc3JjICMjLiBjYW52YXMpXG4gICAgKGZsb2F0IHN4KSAoZmxvYXQgc3kpIChmbG9hdCBzdykgKGZsb2F0IHNoKVxuICAgIChmbG9hdCBkeCkgKGZsb2F0IGR5KSAoZmxvYXQgZHcpIChmbG9hdCBkaClcblxubGV0IGNvbG9yIHIgZyBiIGEgPVxuICBcInJnYmEoXCIgXiBzdHJpbmdfb2ZfaW50IHIgXiBcIiwgXCIgXlxuICAgICAgICAgICAgc3RyaW5nX29mX2ludCBnIF4gXCIsIFwiIF5cbiAgICAgICAgICAgIHN0cmluZ19vZl9pbnQgYiBeIFwiLCBcIiBeXG4gICAgICAgICAgICBzdHJpbmdfb2ZfZmxvYXQgKGZsb2F0IGEgLy4gMjU1LikgXiBcIjApXCIgKCogd29yayBhcm91bmQ6XG4gICAgICAgICAgICBPY2FtbCBnZW5lcmF0ZXMgdGhlIGxpdGVyYWwgZm9yIHN0cmluZ19vZl9mbG9hdCAoMS4wKSBcIjEuXCIsXG4gICAgICAgICAgICB3aGljaCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSByZ2JhIHN5bnRheC4gSXQncyBhbHdheXMgc2FmZVxuICAgICAgICAgICAgdG8gYWRkIGEgdHJhaW5saW5nIDAgaW4gdGhpcyBjYXNlLCBzaW5jZSB0aGUgbnVtYmVyIGlzIGVpdGhlcjpcbiAgICAgICAgICAgIDAuIOKGkiAwLjBcbiAgICAgICAgICAgIDEuIC0+IDEuMFxuICAgICAgICAgICAgMC4yNDIzIC0+IDAuMjQyMzBcbiopXG5sZXQgY2xlYXJfcmVjdCAoY3R4IDogcmVuZGVyKSB4IHkgdyBoID1cbiAgY3R4ICMjIGNsZWFyUmVjdCAoZmxvYXQgeCkgKGZsb2F0IHkpIChmbG9hdCB3KSAoZmxvYXQgaClcblxubGV0IGZpbGxfcmVjdCAoY3R4IDogcmVuZGVyKSB4IHkgdyBoIGMgPVxuICAoKiBGaXJlYnVnLmNvbnNvbGUgIyMgbG9nIChKcy5zdHJpbmcgYyk7ICopXG4gICAgY3R4ICMjLiBmaWxsU3R5bGUgOj0gSnMuc3RyaW5nIGM7XG4gICAgY3R4ICMjIGZpbGxSZWN0IChmbG9hdCB4KSAoZmxvYXQgeSkgKGZsb2F0IHcpIChmbG9hdCBoKVxuXG50eXBlIGltYWdlID0gRG9tX2h0bWwuaW1hZ2VFbGVtZW50IEpzLnRcblxubGV0IGxvYWRfaW1hZ2Ugc3JjID1cbiAgbGV0IGltZyA9IERvbV9odG1sLmNyZWF0ZUltZyBEb21faHRtbC5kb2N1bWVudCBpblxuICBpbWcgIyMuc3JjIDo9IEpzLnN0cmluZyBzcmM7XG4gIGltZ1xuXG5sZXQgaW1hZ2VfcmVhZHkgaW1nID1cbiAgSnMudG9fYm9vbCBpbWcgIyMuY29tcGxldGVcblxubGV0IGRyYXdfaW1hZ2UgKGN0eCA6IHJlbmRlcikgaW1nIHggeSBhbHBoYT1cbiAgY3R4ICMjLiBnbG9iYWxBbHBoYSA6PSBhbHBoYTtcbiAgY3R4ICMjIGRyYXdJbWFnZSBpbWcgKGZsb2F0IHgpIChmbG9hdCB5KVxuXG5sZXQgZHJhd19pbWFnZV9zY2FsZSAoY3R4IDogcmVuZGVyKSBpbWcgZHggZHkgZHcgZGggYWxwaGE9XG4gIGN0eCAjIy4gZ2xvYmFsQWxwaGEgOj0gYWxwaGE7XG4gIGN0eCAjIyBkcmF3SW1hZ2Vfd2l0aFNpemUgaW1nICAoZmxvYXQgZHgpIChmbG9hdCBkeSkgKGZsb2F0IGR3KSAoZmxvYXQgZGgpXG5cbmxldCBkcmF3X2ltYWdlX2Z1bGwgKGN0eCA6IHJlbmRlcikgaW1nIHN4IHN5IHN3IHNoIGR4IGR5IGR3IGRoIGFscGhhPVxuICBjdHggIyMuIGdsb2JhbEFscGhhIDo9IGFscGhhO1xuICBjdHggIyMgZHJhd0ltYWdlX2Z1bGwgaW1nXG4gIChmbG9hdCBzeCkgKGZsb2F0IHN5KSAoZmxvYXQgc3cpIChmbG9hdCBzaClcbiAgKGZsb2F0IGR4KSAoZmxvYXQgZHkpIChmbG9hdCBkdykgKGZsb2F0IGRoKVxuXG5sZXQgZHJhd190ZXh0IChjdHggOiByZW5kZXIpIHRleHQgeCB5IGZvbnQgY29sb3Igc2l6ZSBhbHBoYT1cbiAgY3R4ICMjLiBnbG9iYWxBbHBoYSA6PSBhbHBoYTtcbiAgY3R4ICMjLiBmb250IDo9IEpzLnN0cmluZyBmb250O1xuICBjdHggIyMuIGZpbGxTdHlsZSA6PSBKcy5zdHJpbmcgY29sb3I7XG4gIGN0eCAjIyBmaWxsVGV4dF93aXRoV2lkdGggKEpzLnN0cmluZyB0ZXh0KSAoZmxvYXQgeCkgKGZsb2F0IHkpICBzaXplXG5cblxuXG5sZXQgbWVhc3VyZV90ZXh0IChjdHggOiByZW5kZXIpIHRleHQgZm9udCA9XG4gIGN0eCAjIy4gZm9udCA6PSBKcy5zdHJpbmcgZm9udDtcbiAgbGV0IG0gPSBjdHggIyMgbWVhc3VyZVRleHQgKEpzLnN0cmluZyB0ZXh0KSBpblxuICBpbnRfb2ZfZmxvYXQgKG0gIyMuIHdpZHRoKVxuXG5sZXQgcG9sbF9ldmVudCAoKSA9XG4gIGlmIFF1ZXVlLmlzX2VtcHR5IGV2ZW50cyB0aGVuIEdmeF9iYXNlLk5vRXZlbnRcbiAgZWxzZSBRdWV1ZS5wb3AgZXZlbnRzXG5cblxubGV0IG1haW5fbG9vcCBmID1cbiAgbGV0IGNiID0gcmVmIChKcy53cmFwX2NhbGxiYWNrIChmdW4gXyAtPiAoKSkpIGluXG4gIGxldCBsb29wIGR0ID1cbiAgICAgIGlmIGYgZHQgdGhlblxuICAgICAgICBpZ25vcmUgKERvbV9odG1sLndpbmRvdyAjIyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKCFjYikpXG4gIGluXG4gIGNiIDo9IEpzLndyYXBfY2FsbGJhY2sgbG9vcDtcbiAgaWdub3JlKERvbV9odG1sLndpbmRvdyAjIyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIWNiKVxuXG5sZXQgY29tbWl0IF8gPSAoKVxuXG5sZXQgZGVidWcgbXNnID1cbiAgRmlyZWJ1Zy5jb25zb2xlICMjIGxvZyAoSnMuc3RyaW5nIG1zZykiXX0=
