(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cb8c4b4"],{"057f":function(t,e,s){var a=s("fc6a"),r=s("241c").f,n={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return r(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==n.call(t)?i(t):r(a(t))}},"1dde":function(t,e,s){var a=s("d039"),r=s("b622"),n=s("2d00"),o=r("species");t.exports=function(t){return n>=51||!a((function(){var e=[],s=e.constructor={};return s[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,s){"use strict";var a=s("23e7"),r=s("b727").filter,n=s("1dde"),o=s("ae40"),i=n("filter"),l=o("filter");a({target:"Array",proto:!0,forced:!i||!l},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b");var a=s("ade3");function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}},"746f":function(t,e,s){var a=s("428f"),r=s("5135"),n=s("e538"),o=s("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});r(e,t)||o(e,t,{value:n.f(t)})}},"779d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("base-page-heading",{attrs:{title:"View "+t.zoneName,subtitle:"View Zone Details Here"},scopedSlots:t._u([{key:"extra",fn:function(){return[s("b-breadcrumb",{staticClass:"breadcrumb-alt"},[s("b-breadcrumb-item",{attrs:{active:""}},[s("router-link",{attrs:{to:"/operations"}},[s("i",{staticClass:"fa fa-home"})])],1),t._v(" "),s("b-breadcrumb-item",{attrs:{active:""}},[s("router-link",{attrs:{to:"/zonal_operations"}},[t._v("Zonal Operations")])],1),t._v(" "),s("b-breadcrumb-item",{attrs:{href:"javascript:void(0)",active:""}},[t._v(t._s(t.zoneName))])],1)]},proxy:!0}])}),t._v(" "),s("div",{staticClass:"content"},[s("b-row",[s("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[s("base-block",{attrs:{tag:"a",rounded:"","link-shadow":"","content-class":"d-flex py-4"}},[s("div",{staticClass:"flex-grow-1"},[s("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n                Zonal Coordinator\n              ")]),t._v(" "),s("div",{staticClass:"font-size-h3"},[t._v("\n                Col Fataih"),s("span",{staticClass:"font-size-sm text-muted"})])]),t._v(" "),s("div",{staticClass:"d-flex ml-2"},[s("div",{staticClass:"flex-grow-1 px-1 bg-warning-light rounded-lg"})])])],1),t._v(" "),s("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[s("base-block",{attrs:{tag:"a",rounded:"","link-shadow":"","content-class":"d-flex py-4"}},[s("div",{staticClass:"flex-grow-1"},[s("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n                Zonal Capacity\n              ")]),t._v(" "),s("div",{staticClass:"font-size-h3"},[t._v("\n                81% "),s("span",{staticClass:"font-size-sm text-muted"},[t._v("occupied")])])]),t._v(" "),s("div",{staticClass:"d-flex ml-2"},[s("div",{staticClass:"flex-grow-1 px-1 bg-warning-light rounded-lg"})])])],1),t._v(" "),s("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[s("base-block",{attrs:{tag:"a",rounded:"","link-shadow":"","content-class":"d-flex py-4"}},[s("div",{staticClass:"flex-grow-1"},[s("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n                State Commands\n              ")]),t._v(" "),s("div",{staticClass:"font-size-h3"},[t._v("\n                "+t._s(t.stateCount)+" "),s("span",{staticClass:"font-size-sm text-muted"},[t._v("total")])])]),t._v(" "),s("div",{staticClass:"d-flex ml-2"},[s("div",{staticClass:"flex-grow-1 px-1 bg-warning-light rounded-lg"})])])],1),t._v(" "),s("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[s("base-block",{attrs:{tag:"a",rounded:"","link-shadow":"","content-class":"d-flex py-4"}},[s("div",{staticClass:"flex-grow-1"},[s("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n                State Coordinators\n              ")]),t._v(" "),s("div",{staticClass:"font-size-h3"},[t._v("\n                0 "),s("span",{staticClass:"font-size-sm text-muted"},[t._v("total")])])]),t._v(" "),s("div",{staticClass:"d-flex ml-2"},[s("div",{staticClass:"flex-grow-1 px-1 bg-warning-light rounded-lg"})])])],1),t._v(" "),s("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[s("base-block",{attrs:{tag:"a",rounded:"","link-shadow":"","content-class":"d-flex py-4"}},[s("div",{staticClass:"flex-grow-1"},[s("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n                Custodial Centers\n              ")]),t._v(" "),s("div",{staticClass:"font-size-h3"},[t._v("\n                "+t._s(t.ccs)+" "),s("span",{staticClass:"font-size-sm text-muted"},[t._v("total")])])]),t._v(" "),s("div",{staticClass:"d-flex ml-2"},[s("div",{staticClass:"flex-grow-1 px-1 bg-danger-light rounded-lg"})])])],1),t._v(" "),s("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[s("base-block",{attrs:{tag:"a",rounded:"","link-shadow":"","content-class":"d-flex py-4",href:"javascript:void(0)"}},[s("div",{staticClass:"flex-grow-1"},[s("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n                Inmates\n              ")]),t._v(" "),s("div",{staticClass:"font-size-h3"},[t._v("\n                3,129 "),s("span",{staticClass:"font-size-sm text-muted"},[t._v("convicted")])])]),t._v(" "),s("div",{staticClass:"d-flex ml-2"},[s("div",{staticClass:"flex-grow-1 px-1 bg-info-light rounded-lg"})])])],1),t._v(" "),s("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[s("base-block",{attrs:{tag:"a",rounded:"","link-shadow":"","content-class":"d-flex py-4",href:"javascript:void(0)"}},[s("div",{staticClass:"flex-grow-1"},[s("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n                Inmates\n              ")]),t._v(" "),s("div",{staticClass:"font-size-h3"},[t._v("\n                6,320 "),s("span",{staticClass:"font-size-sm text-muted"},[t._v("awaiting trial")])])]),t._v(" "),s("div",{staticClass:"d-flex ml-2"},[s("div",{staticClass:"flex-grow-1 px-1 bg-info-light rounded-lg"})])])],1)],1),t._v(" "),s("b-row",[s("b-col",[s("base-block",{attrs:{rounded:"",title:"All States Commands In "+t.zoneName,subtitle:t.totalRows+" total state commands","btn-option-fullscreen":""}},[s("b-row",[s("b-col",{staticClass:"my-1",attrs:{lg:"4"}},[s("b-form-group",{staticClass:"mb-2",attrs:{"label-size":"sm","label-for":"filterInput"}},[s("b-input-group",{attrs:{size:"sm"}},[s("b-form-input",{staticClass:"form-control-alt",attrs:{type:"search",id:"filterInput",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),t._v(" "),s("b-input-group-append",[s("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1),t._v(" "),s("b-col",{attrs:{lg:"4"}})],1),t._v(" "),s("b-table",{staticClass:"mb-2",attrs:{selectable:"","selected-variant":"primary","show-empty":"",striped:"",hover:"",bordered:"","head-variant":"light",filter:t.filter,items:t.statesSN,fields:t.stateFields,"current-page":t.currentPage,"per-page":t.perPage},on:{filtered:t.onFiltered,"row-clicked":t.viewState}}),t._v(" "),s("b-row",[s("b-col",{staticClass:"my-1",attrs:{lg:"2"}},[s("b-form-group",{staticClass:"mb-3",attrs:{"label-for":"perPageSelect"}},[s("b-form-select",{staticClass:"form-control-alt",attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),t._v(" "),s("b-col",{attrs:{lg:"8"}}),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{lg:"2"}},[s("b-pagination",{staticClass:"mb-3 my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)],1)],1)],1)},r=[],n=(s("d81d"),s("5530")),o={computed:{statesSN:function(){return this.states.map((function(t,e){return Object(n["a"])(Object(n["a"])({},t),{},{sno:e+1})}))}},data:function(){return{zoneName:this.$store.getters.getZoneNameParam,states:this.$store.getters.getZoneDetails.states,ccs:this.$store.getters.getZoneDetails.numCenters,stateCount:this.$store.getters.getZoneDetails.numStates,stateFields:[{key:"sno",label:"S/n",thStyle:"width: 10%"},{key:"state_name",sortable:!0},{key:"cc_count",label:"Total Custodial Centers",sortable:!0},{key:"inmate_count",label:"Total Inmates",sortable:!0}],exportFields:{"State ID":"state_id","State Name":"state_name"},filter:null,filteredItems:this.states,totalRows:this.$store.getters.getZoneDetails.numStates,currentPage:1,perPage:10,pageOptions:[{value:5,text:"5 per page"},{value:10,text:"10 per page"},{value:15,text:"15 per page"}]}},methods:{viewState:function(t){var e=t.state_id,s=t.state_name;this.$store.commit("setStateRouteParam",{stateID:e,stateName:s}),this.getStateDetails(),this.$router.push("/zonal_operations/zone/state")},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1,this.filteredItems=t}},destroyed:function(){}},i=o,l=s("2877"),c=Object(l["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports},8418:function(t,e,s){"use strict";var a=s("c04e"),r=s("9bf2"),n=s("5c6c");t.exports=function(t,e,s){var o=a(e);o in t?r.f(t,o,n(0,s)):t[o]=s}},a4d3:function(t,e,s){"use strict";var a=s("23e7"),r=s("da84"),n=s("d066"),o=s("c430"),i=s("83ab"),l=s("4930"),c=s("fdbf"),f=s("d039"),u=s("5135"),d=s("e8b5"),b=s("861d"),p=s("825a"),v=s("7b0b"),g=s("fc6a"),m=s("c04e"),h=s("5c6c"),w=s("7c73"),x=s("df75"),y=s("241c"),C=s("057f"),_=s("7418"),O=s("06cf"),S=s("9bf2"),P=s("d1e7"),k=s("9112"),j=s("6eeb"),z=s("5692"),D=s("f772"),N=s("d012"),I=s("90e3"),Z=s("b622"),F=s("e538"),$=s("746f"),E=s("d44e"),R=s("69f3"),T=s("b727").forEach,J=D("hidden"),A="Symbol",V="prototype",B=Z("toPrimitive"),H=R.set,Q=R.getterFor(A),W=Object[V],q=r.Symbol,G=n("JSON","stringify"),K=O.f,L=S.f,M=C.f,U=P.f,X=z("symbols"),Y=z("op-symbols"),tt=z("string-to-symbol-registry"),et=z("symbol-to-string-registry"),st=z("wks"),at=r.QObject,rt=!at||!at[V]||!at[V].findChild,nt=i&&f((function(){return 7!=w(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a}))?function(t,e,s){var a=K(W,e);a&&delete W[e],L(t,e,s),a&&t!==W&&L(W,e,a)}:L,ot=function(t,e){var s=X[t]=w(q[V]);return H(s,{type:A,tag:t,description:e}),i||(s.description=e),s},it=c?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},lt=function(t,e,s){t===W&&lt(Y,e,s),p(t);var a=m(e,!0);return p(s),u(X,a)?(s.enumerable?(u(t,J)&&t[J][a]&&(t[J][a]=!1),s=w(s,{enumerable:h(0,!1)})):(u(t,J)||L(t,J,h(1,{})),t[J][a]=!0),nt(t,a,s)):L(t,a,s)},ct=function(t,e){p(t);var s=g(e),a=x(s).concat(pt(s));return T(a,(function(e){i&&!ut.call(s,e)||lt(t,e,s[e])})),t},ft=function(t,e){return void 0===e?w(t):ct(w(t),e)},ut=function(t){var e=m(t,!0),s=U.call(this,e);return!(this===W&&u(X,e)&&!u(Y,e))&&(!(s||!u(this,e)||!u(X,e)||u(this,J)&&this[J][e])||s)},dt=function(t,e){var s=g(t),a=m(e,!0);if(s!==W||!u(X,a)||u(Y,a)){var r=K(s,a);return!r||!u(X,a)||u(s,J)&&s[J][a]||(r.enumerable=!0),r}},bt=function(t){var e=M(g(t)),s=[];return T(e,(function(t){u(X,t)||u(N,t)||s.push(t)})),s},pt=function(t){var e=t===W,s=M(e?Y:g(t)),a=[];return T(s,(function(t){!u(X,t)||e&&!u(W,t)||a.push(X[t])})),a};if(l||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),s=function(t){this===W&&s.call(Y,t),u(this,J)&&u(this[J],e)&&(this[J][e]=!1),nt(this,e,h(1,t))};return i&&rt&&nt(W,e,{configurable:!0,set:s}),ot(e,t)},j(q[V],"toString",(function(){return Q(this).tag})),j(q,"withoutSetter",(function(t){return ot(I(t),t)})),P.f=ut,S.f=lt,O.f=dt,y.f=C.f=bt,_.f=pt,F.f=function(t){return ot(Z(t),t)},i&&(L(q[V],"description",{configurable:!0,get:function(){return Q(this).description}}),o||j(W,"propertyIsEnumerable",ut,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:q}),T(x(st),(function(t){$(t)})),a({target:A,stat:!0,forced:!l},{for:function(t){var e=String(t);if(u(tt,e))return tt[e];var s=q(e);return tt[e]=s,et[s]=e,s},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(u(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),a({target:"Object",stat:!0,forced:!l,sham:!i},{create:ft,defineProperty:lt,defineProperties:ct,getOwnPropertyDescriptor:dt}),a({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),a({target:"Object",stat:!0,forced:f((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(v(t))}}),G){var vt=!l||f((function(){var t=q();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));a({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,s){var a,r=[t],n=1;while(arguments.length>n)r.push(arguments[n++]);if(a=e,(b(e)||void 0!==t)&&!it(t))return d(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!it(e))return e}),r[1]=e,G.apply(null,r)}})}q[V][B]||k(q[V],B,q[V].valueOf),E(q,A),N[J]=!0},b64b:function(t,e,s){var a=s("23e7"),r=s("7b0b"),n=s("df75"),o=s("d039"),i=o((function(){n(1)}));a({target:"Object",stat:!0,forced:i},{keys:function(t){return n(r(t))}})},d81d:function(t,e,s){"use strict";var a=s("23e7"),r=s("b727").map,n=s("1dde"),o=s("ae40"),i=n("map"),l=o("map");a({target:"Array",proto:!0,forced:!i||!l},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,s){var a=s("23e7"),r=s("83ab"),n=s("56ef"),o=s("fc6a"),i=s("06cf"),l=s("8418");a({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,s,a=o(t),r=i.f,c=n(a),f={},u=0;while(c.length>u)s=r(a,e=c[u++]),void 0!==s&&l(f,e,s);return f}})},e439:function(t,e,s){var a=s("23e7"),r=s("d039"),n=s("fc6a"),o=s("06cf").f,i=s("83ab"),l=r((function(){o(1)})),c=!i||l;a({target:"Object",stat:!0,forced:c,sham:!i},{getOwnPropertyDescriptor:function(t,e){return o(n(t),e)}})},e538:function(t,e,s){var a=s("b622");e.f=a}}]);