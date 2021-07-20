(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Ecs_Component_MissingCompo=
      caml_string_of_jsbytes("Ecs.Component.MissingComponent"),
     Stdlib_format=global_data.Stdlib__format,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib=global_data.Stdlib,
     Ecs=[0];
    caml_register_global(3,Ecs,"Ecs");
    var
     c=[0,0],
     _b_=
      [0,
       [11,caml_string_of_jsbytes("<e:"),[4,0,0,0,[12,62,0]]],
       caml_string_of_jsbytes("<e:%d>")],
     _a_=
      [0,
       [11,caml_string_of_jsbytes("<e:"),[4,0,0,0,[12,62,0]]],
       caml_string_of_jsbytes("<e:%d>")];
    function create(param){c[1]++;return c[1]}
    function pp(ppf,e){return caml_call3(Stdlib_format[123],ppf,_a_,e)}
    function pp2(e){return caml_call2(Stdlib_format[127],_b_,e)}
    function hash(i){return i}
    function equal(a,b){return a === b?1:0}
    var
     compare=runtime.caml_compare,
     Table=caml_call1(Stdlib_hashtbl[25],[0,equal,hash]),
     Ecs_Entity=[0,create,pp,pp2,hash,equal,compare,-1,Table];
    caml_register_global(6,Ecs_Entity,"Ecs__Entity");
    var
     MissingComponent=
      [248,cst_Ecs_Component_MissingCompo,runtime.caml_fresh_oo_id(0)],
     Ecs_Component=
      [0,
       function(T)
        {var elements=caml_call1(Table[1],16);
         function set(e,v){return caml_call3(Table[10],elements,e,v)}
         function get(e)
          {try
            {var _e_=caml_call2(Table[7],elements,e);return _e_}
           catch(_f_)
            {_f_ = caml_wrap_exception(_f_);
             if(_f_ === Stdlib[8])throw [0,MissingComponent,[0,e,T[1]]];
             throw _f_}}
         function members(param)
          {var _c_=0;
           function _d_(k,v,a){return [0,[0,k,v],a]}
           return caml_call3(Table[14],_d_,elements,_c_)}
         function reset(param){return caml_call1(Table[2],elements)}
         function has_component(e){return caml_call2(Table[11],elements,e)}
         function delete$0(e){return caml_call2(Table[6],elements,e)}
         return [0,set,get,members,has_component,delete$0,reset]},
       MissingComponent];
    caml_register_global(8,Ecs_Component,"Ecs__Component");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuZWNzLm9ianMvZWNzLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJjIiwiY3JlYXRlIiwicHAiLCJwcGYiLCJlIiwicHAyIiwiaGFzaCIsImkiLCJlcXVhbCIsImEiLCJiIiwiY29tcGFyZSIsImVsZW1lbnRzIiwic2V0IiwidiIsImdldCIsIm1lbWJlcnMiLCJrIiwicmVzZXQiLCJoYXNfY29tcG9uZW50IiwiZGVsZXRlJDAiXSwic291cmNlcyI6WyIvaG9tZS9hbnRvaW5lL1BGQS9QRkEtUHJvamV0LUcxMC9fYnVpbGQvZGVmYXVsdC9saWIvZWNzL2VudGl0eS5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L2xpYi9lY3MvY29tcG9uZW50Lm1sIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FJUUE7Ozs7Ozs7OzthQURGQyxjQUdBLGNBRkVELElBR0E7YUFFRkUsR0FBR0MsSUFBSUMsR0FBSSxxQ0FBUkQsUUFBSUMsRUFBaUM7YUFDeENDLElBQUlELEdBQUkseUNBQUpBLEVBQThCO2FBRWxDRSxLQUFLQyxHQUFJLE9BQUpBLENBQUs7YUFFVkMsTUFBTUMsRUFBRUMsR0FBSSxPQUFORCxNQUFFQyxLQUFVOztLQUVsQkM7NENBRkFILE1BRkFGO21CQVRBTCxPQU1BQyxHQUNBRyxJQUVBQyxLQUVBRSxNQUVBRzs7Ozs7Ozs7U0NYRixJQURFQyxTQUNGO2tCQUVFQyxJQUFJVCxFQUFFVSxHQUFJLDRCQUhWRixTQUdJUixFQUFFVSxFQUFxQztTQUY3QyxTQUdFQyxJQUFJWDtXQUFJO2FBQ1YsNEJBTEVRLFNBSUlSOzs7a0NBR08sNkJBSFBBO3VCQUcwQztTQU5oRCxTQVFFWTtXQUFhO3dCQUF1QkMsRUFBRUgsRUFBRUwsR0FBSyxhQUFUUSxFQUFFSCxHQUFFTCxFQUFnQjtXQUEzQyxnQ0FUYkcsYUFTcUU7U0FSdkUsU0FTRU0sYUFBVywyQkFWWE4sU0FVc0M7U0FUeEMsU0FVRU8sY0FBY2YsR0FBSSw0QkFYbEJRLFNBV2NSLEVBQStCO1NBVi9DLFNBWUVnQixTQUFPaEIsR0FBSSwyQkFiWFEsU0FhT1IsRUFBa0M7bUJBVnpDUyxJQUNBRSxJQUtBQyxRQUVBRyxjQUVBQyxTQUhBRjs7O1UiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUgRSA9IHN0cnVjdFxuICB0eXBlIHQgPSBpbnRcblxuICBsZXQgY3JlYXRlID1cbiAgICBsZXQgYyA9IHJlZiAwIGluXG4gICAgZnVuICgpIC0+XG4gICAgICBpbmNyIGM7XG4gICAgICAhY1xuXG4gIGxldCBwcCBwcGYgZSA9IEZvcm1hdC5mcHJpbnRmIHBwZiBcIjxlOiVkPlwiIGVcbiAgbGV0IHBwMiBlID0gRm9ybWF0LmFzcHJpbnRmIFwiPGU6JWQ+XCIgZVxuXG4gIGxldCBoYXNoIGkgPSBpXG5cbiAgbGV0IGVxdWFsIGEgYiA9IGEgPT0gYlxuXG4gIGxldCBjb21wYXJlIGEgYiA9IGNvbXBhcmUgYSBiXG5lbmRcblxubW9kdWxlIFRhYmxlID0gSGFzaHRibC5NYWtlIChFKVxuaW5jbHVkZSBFXG5cbmxldCBkdW1teSA9IC0xXG4iLCJleGNlcHRpb24gTWlzc2luZ0NvbXBvbmVudCBvZiAoRW50aXR5LnQgKiBzdHJpbmcpXG5cbm1vZHVsZSBNYWtlIChUIDogc2lnIHR5cGUgdCB2YWwgbmFtZSA6IHN0cmluZyBlbmQpID1cbnN0cnVjdFxuICBsZXQgZWxlbWVudHMgOiBULnQgRW50aXR5LlRhYmxlLnQgPVxuICAgIEVudGl0eS5UYWJsZS5jcmVhdGUgMTZcblxuICBsZXQgc2V0IGUgdiA9IEVudGl0eS5UYWJsZS5yZXBsYWNlIGVsZW1lbnRzIGUgdlxuICBsZXQgZ2V0IGUgPSB0cnlcbiAgICBFbnRpdHkuVGFibGUuZmluZCBlbGVtZW50cyBlXG4gIHdpdGhcbiAgICBOb3RfZm91bmQgLT4gcmFpc2UgKE1pc3NpbmdDb21wb25lbnQoZSwgVC5uYW1lKSlcblxuICBsZXQgbWVtYmVycyAoKSA9IEVudGl0eS5UYWJsZS5mb2xkIChmdW4gayB2IGEgLT4gKGssIHYpIDo6IGEpIGVsZW1lbnRzIFtdXG4gIGxldCByZXNldCAoKSA9IEVudGl0eS5UYWJsZS5jbGVhciBlbGVtZW50c1xuICBsZXQgaGFzX2NvbXBvbmVudCBlID0gRW50aXR5LlRhYmxlLm1lbSBlbGVtZW50cyBlXG5cbiAgbGV0IGRlbGV0ZSBlID0gRW50aXR5LlRhYmxlLnJlbW92ZSBlbGVtZW50cyBlXG5lbmRcbiJdfQ==
