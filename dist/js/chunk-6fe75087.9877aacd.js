(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fe75087"],{"057f":function(t,e,s){var r=s("fc6a"),a=s("241c").f,n={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(t){try{return a(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==n.call(t)?l(t):a(r(t))}},"1dde":function(t,e,s){var r=s("d039"),a=s("b622"),n=s("2d00"),o=a("species");t.exports=function(t){return n>=51||!r((function(){var e=[],s=e.constructor={};return s[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,s){"use strict";var r=s("23e7"),a=s("b727").filter,n=s("1dde"),o=s("ae40"),l=n("filter"),i=o("filter");r({target:"Array",proto:!0,forced:!l||!i},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b");var r=s("ade3");function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){Object(r["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}},"746f":function(t,e,s){var r=s("428f"),a=s("5135"),n=s("e538"),o=s("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});a(e,t)||o(e,t,{value:n.f(t)})}},8418:function(t,e,s){"use strict";var r=s("c04e"),a=s("9bf2"),n=s("5c6c");t.exports=function(t,e,s){var o=r(e);o in t?a.f(t,o,n(0,s)):t[o]=s}},"94c4":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("base-page-heading",{attrs:{title:"View "+t.centerName,subtitle:"View Custodial Center Details Here"},scopedSlots:t._u([{key:"extra",fn:function(){return[s("b-breadcrumb",{staticClass:"breadcrumb-alt"},[s("b-breadcrumb-item",{attrs:{active:""}},[s("router-link",{attrs:{to:"/operations"}},[s("i",{staticClass:"fa fa-home"})])],1),t._v(" "),s("b-breadcrumb-item",{attrs:{active:""}},[s("router-link",{attrs:{to:"/zonal_operations"}},[t._v("Zonal Operations")])],1),t._v(" "),s("b-breadcrumb-item",{attrs:{active:""}},[s("router-link",{attrs:{to:"/zonal_operations/zone"}},[t._v(t._s(t.zoneName))])],1),t._v(" "),s("b-breadcrumb-item",{attrs:{active:""}},[s("router-link",{attrs:{to:"/zonal_operations/zone/state"}},[t._v(t._s(t.stateName))])],1),t._v(" "),s("b-breadcrumb-item",{attrs:{href:"javascript:void(0)",active:""}},[t._v(t._s(t.centerName))])],1)]},proxy:!0}])}),t._v(" "),s("div",{staticClass:"content"},[s("b-row",[s("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[s("base-block",{attrs:{tag:"a",rounded:"","link-shadow":"","content-class":"d-flex py-4"}},[s("div",{staticClass:"flex-grow-1"},[s("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n              Center Coordinator\n            ")]),t._v(" "),s("div",{staticClass:"font-size-h3"},[t._v("\n              Sgt Abubakar"),s("span",{staticClass:"font-size-sm text-muted"})])]),t._v(" "),s("div",{staticClass:"d-flex ml-2"},[s("div",{staticClass:"flex-grow-1 px-1 bg-warning-light rounded-lg"})])])],1),t._v(" "),s("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[s("base-block",{attrs:{tag:"a",rounded:"","link-shadow":"","content-class":"d-flex py-4"}},[s("div",{staticClass:"flex-grow-1"},[s("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n              Center Capacity\n            ")]),t._v(" "),s("div",{staticClass:"font-size-h3"},[t._v("\n              64% "),s("span",{staticClass:"font-size-sm text-muted"},[t._v("occupied")])])]),t._v(" "),s("div",{staticClass:"d-flex ml-2"},[s("div",{staticClass:"flex-grow-1 px-1 bg-warning-light rounded-lg"})])])],1),t._v(" "),s("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[s("base-block",{attrs:{tag:"a",rounded:"","link-shadow":"","content-class":"d-flex py-4"}},[s("div",{staticClass:"flex-grow-1"},[s("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n              Cell Blocks\n            ")]),t._v(" "),s("div",{staticClass:"font-size-h3"},[t._v("\n              "+t._s(t.cellBlockCount)+" "),s("span",{staticClass:"font-size-sm text-muted"},[t._v("total")])])]),t._v(" "),s("div",{staticClass:"d-flex ml-2"},[s("div",{staticClass:"flex-grow-1 px-1 bg-warning-light rounded-lg"})])])],1),t._v(" "),s("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[s("base-block",{attrs:{tag:"a",rounded:"","link-shadow":"","content-class":"d-flex py-4"}},[s("div",{staticClass:"flex-grow-1"},[s("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n              Cell Block Wardens\n            ")]),t._v(" "),s("div",{staticClass:"font-size-h3"},[t._v("\n              "+t._s(t.cellBlockCount)+" "),s("span",{staticClass:"font-size-sm text-muted"},[t._v("total")])])]),t._v(" "),s("div",{staticClass:"d-flex ml-2"},[s("div",{staticClass:"flex-grow-1 px-1 bg-warning-light rounded-lg"})])])],1),t._v(" "),s("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[s("base-block",{attrs:{tag:"a",rounded:"","link-shadow":"","content-class":"d-flex py-4"}},[s("div",{staticClass:"flex-grow-1"},[s("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n              Cells\n            ")]),t._v(" "),s("div",{staticClass:"font-size-h3"},[t._v("\n              "+t._s(t.cellCounts)+" "),s("span",{staticClass:"font-size-sm text-muted"},[t._v("total")])])]),t._v(" "),s("div",{staticClass:"d-flex ml-2"},[s("div",{staticClass:"flex-grow-1 px-1 bg-warning-light rounded-lg"})])])],1),t._v(" "),s("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[s("base-block",{attrs:{tag:"a",rounded:"","link-shadow":"","content-class":"d-flex py-4"}},[s("div",{staticClass:"flex-grow-1"},[s("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n              Inmates\n            ")]),t._v(" "),s("div",{staticClass:"font-size-h3"},[t._v("\n              "+t._s(t.inmateCounts)+" "),s("span",{staticClass:"font-size-sm text-muted"},[t._v("convicted")])])]),t._v(" "),s("div",{staticClass:"d-flex ml-2"},[s("div",{staticClass:"flex-grow-1 px-1 bg-warning-light rounded-lg"})])])],1),t._v(" "),s("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[s("base-block",{attrs:{tag:"a",rounded:"","link-shadow":"","content-class":"d-flex py-4"}},[s("div",{staticClass:"flex-grow-1"},[s("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n              Inmates\n            ")]),t._v(" "),s("div",{staticClass:"font-size-h3"},[t._v("\n              "+t._s(t.inmateCounts)+" "),s("span",{staticClass:"font-size-sm text-muted"},[t._v("awaiting trial")])])]),t._v(" "),s("div",{staticClass:"d-flex ml-2"},[s("div",{staticClass:"flex-grow-1 px-1 bg-warning-light rounded-lg"})])])],1)],1),t._v(" "),s("b-row",[s("b-col",[s("base-block",{attrs:{rounded:"",title:"All Cell Blocks In "+t.centerName,subtitle:t.totalRows+" total cell blocks","btn-option-fullscreen":""}},[s("b-row",[s("b-col",{staticClass:"my-1",attrs:{lg:"4"}},[s("b-form-group",{staticClass:"mb-2",attrs:{"label-size":"sm","label-for":"filterInput"}},[s("b-input-group",{attrs:{size:"sm"}},[s("b-form-input",{staticClass:"form-control-alt",attrs:{type:"search",id:"filterInput",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),t._v(" "),s("b-input-group-append",[s("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1),t._v(" "),s("b-col",{attrs:{lg:"4"}})],1),t._v(" "),s("b-table",{staticClass:"mb-2",attrs:{selectable:"","selected-variant":"primary","show-empty":"",striped:"",hover:"",bordered:"","head-variant":"light",filter:t.filter,items:t.cellBlocksSN,fields:t.cellBlockFields,"current-page":t.currentPage,"per-page":t.perPage},on:{filtered:t.onFiltered,"row-clicked":t.viewCellBlock}}),t._v(" "),s("b-row",[s("b-col",{staticClass:"my-1",attrs:{lg:"2"}},[s("b-form-group",{staticClass:"mb-3",attrs:{"label-for":"perPageSelect"}},[s("b-form-select",{staticClass:"form-control-alt",attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),t._v(" "),s("b-col",{attrs:{lg:"8"}}),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{lg:"2"}},[s("b-pagination",{staticClass:"mb-3 my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)],1)],1)],1)},a=[],n=(s("d81d"),s("5530")),o={computed:{cellBlocksSN:function(){return this.cellBlocks.map((function(t,e){return Object(n["a"])(Object(n["a"])({},t),{},{sno:e+1})}))}},data:function(){return{zoneName:this.$store.getters.getZoneNameParam,stateName:this.$store.getters.getStateNameParam,centerName:this.$store.getters.getCenterNameParam,cellBlocks:this.$store.getters.getCenterDetails.cellBlocks,cellBlockCount:this.$store.getters.getCenterDetails.numCellBlocks,cellCounts:this.$store.getters.getCenterDetails.numCells,inmateCounts:this.$store.getters.getCenterDetails.numInmates,cellBlockFields:[{key:"sno",label:"S/n",thStyle:"width: 10%"},{key:"cell_block_alias",label:"Cell Block Alias",sortable:!0}],filter:null,filteredItems:this.centers,totalRows:this.$store.getters.getCenterDetails.numCellBlocks,currentPage:1,perPage:10,pageOptions:[{value:5,text:"5 per page"},{value:10,text:"10 per page"},{value:15,text:"15 per page"}]}},methods:{viewCellBlock:function(t){var e=t.cell_block_alias,s=t.cell_block_id;this.$store.commit("setCellBlockRouteParam",{cellBlockID:s,cellBlockAlias:e}),this.getCellBlockDetails(),this.$router.push("/zonal_operations/zone/state/center/cell_block")},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1,this.filteredItems=t}}},l=o,i=s("2877"),c=Object(i["a"])(l,r,a,!1,null,null,null);e["default"]=c.exports},a4d3:function(t,e,s){"use strict";var r=s("23e7"),a=s("da84"),n=s("d066"),o=s("c430"),l=s("83ab"),i=s("4930"),c=s("fdbf"),f=s("d039"),u=s("5135"),d=s("e8b5"),b=s("861d"),p=s("825a"),v=s("7b0b"),g=s("fc6a"),m=s("c04e"),h=s("5c6c"),C=s("7c73"),w=s("df75"),_=s("241c"),x=s("057f"),y=s("7418"),k=s("06cf"),O=s("9bf2"),P=s("d1e7"),z=s("9112"),j=s("6eeb"),S=s("5692"),B=s("f772"),N=s("d012"),D=s("90e3"),$=s("b622"),I=s("e538"),E=s("746f"),A=s("d44e"),F=s("69f3"),R=s("b727").forEach,J=B("hidden"),T="Symbol",V="prototype",W=$("toPrimitive"),Z=F.set,H=F.getterFor(T),Q=Object[V],q=a.Symbol,G=n("JSON","stringify"),K=k.f,L=O.f,M=x.f,U=P.f,X=S("symbols"),Y=S("op-symbols"),tt=S("string-to-symbol-registry"),et=S("symbol-to-string-registry"),st=S("wks"),rt=a.QObject,at=!rt||!rt[V]||!rt[V].findChild,nt=l&&f((function(){return 7!=C(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a}))?function(t,e,s){var r=K(Q,e);r&&delete Q[e],L(t,e,s),r&&t!==Q&&L(Q,e,r)}:L,ot=function(t,e){var s=X[t]=C(q[V]);return Z(s,{type:T,tag:t,description:e}),l||(s.description=e),s},lt=c?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},it=function(t,e,s){t===Q&&it(Y,e,s),p(t);var r=m(e,!0);return p(s),u(X,r)?(s.enumerable?(u(t,J)&&t[J][r]&&(t[J][r]=!1),s=C(s,{enumerable:h(0,!1)})):(u(t,J)||L(t,J,h(1,{})),t[J][r]=!0),nt(t,r,s)):L(t,r,s)},ct=function(t,e){p(t);var s=g(e),r=w(s).concat(pt(s));return R(r,(function(e){l&&!ut.call(s,e)||it(t,e,s[e])})),t},ft=function(t,e){return void 0===e?C(t):ct(C(t),e)},ut=function(t){var e=m(t,!0),s=U.call(this,e);return!(this===Q&&u(X,e)&&!u(Y,e))&&(!(s||!u(this,e)||!u(X,e)||u(this,J)&&this[J][e])||s)},dt=function(t,e){var s=g(t),r=m(e,!0);if(s!==Q||!u(X,r)||u(Y,r)){var a=K(s,r);return!a||!u(X,r)||u(s,J)&&s[J][r]||(a.enumerable=!0),a}},bt=function(t){var e=M(g(t)),s=[];return R(e,(function(t){u(X,t)||u(N,t)||s.push(t)})),s},pt=function(t){var e=t===Q,s=M(e?Y:g(t)),r=[];return R(s,(function(t){!u(X,t)||e&&!u(Q,t)||r.push(X[t])})),r};if(i||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),s=function(t){this===Q&&s.call(Y,t),u(this,J)&&u(this[J],e)&&(this[J][e]=!1),nt(this,e,h(1,t))};return l&&at&&nt(Q,e,{configurable:!0,set:s}),ot(e,t)},j(q[V],"toString",(function(){return H(this).tag})),j(q,"withoutSetter",(function(t){return ot(D(t),t)})),P.f=ut,O.f=it,k.f=dt,_.f=x.f=bt,y.f=pt,I.f=function(t){return ot($(t),t)},l&&(L(q[V],"description",{configurable:!0,get:function(){return H(this).description}}),o||j(Q,"propertyIsEnumerable",ut,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!i,sham:!i},{Symbol:q}),R(w(st),(function(t){E(t)})),r({target:T,stat:!0,forced:!i},{for:function(t){var e=String(t);if(u(tt,e))return tt[e];var s=q(e);return tt[e]=s,et[s]=e,s},keyFor:function(t){if(!lt(t))throw TypeError(t+" is not a symbol");if(u(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),r({target:"Object",stat:!0,forced:!i,sham:!l},{create:ft,defineProperty:it,defineProperties:ct,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!i},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:f((function(){y.f(1)}))},{getOwnPropertySymbols:function(t){return y.f(v(t))}}),G){var vt=!i||f((function(){var t=q();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,s){var r,a=[t],n=1;while(arguments.length>n)a.push(arguments[n++]);if(r=e,(b(e)||void 0!==t)&&!lt(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!lt(e))return e}),a[1]=e,G.apply(null,a)}})}q[V][W]||z(q[V],W,q[V].valueOf),A(q,T),N[J]=!0},b64b:function(t,e,s){var r=s("23e7"),a=s("7b0b"),n=s("df75"),o=s("d039"),l=o((function(){n(1)}));r({target:"Object",stat:!0,forced:l},{keys:function(t){return n(a(t))}})},d81d:function(t,e,s){"use strict";var r=s("23e7"),a=s("b727").map,n=s("1dde"),o=s("ae40"),l=n("map"),i=o("map");r({target:"Array",proto:!0,forced:!l||!i},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,s){var r=s("23e7"),a=s("83ab"),n=s("56ef"),o=s("fc6a"),l=s("06cf"),i=s("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,s,r=o(t),a=l.f,c=n(r),f={},u=0;while(c.length>u)s=a(r,e=c[u++]),void 0!==s&&i(f,e,s);return f}})},e439:function(t,e,s){var r=s("23e7"),a=s("d039"),n=s("fc6a"),o=s("06cf").f,l=s("83ab"),i=a((function(){o(1)})),c=!l||i;r({target:"Object",stat:!0,forced:c,sham:!l},{getOwnPropertyDescriptor:function(t,e){return o(n(t),e)}})},e538:function(t,e,s){var r=s("b622");e.f=r}}]);