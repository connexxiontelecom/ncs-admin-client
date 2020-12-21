(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31aa67b4"],{"057f":function(e,t,r){var n=r("fc6a"),o=r("241c").f,a={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(e){try{return o(e)}catch(t){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==a.call(e)?i(e):o(n(e))}},"1dde":function(e,t,r){var n=r("d039"),o=r("b622"),a=r("2d00"),s=o("species");e.exports=function(e){return a>=51||!n((function(){var t=[],r=t.constructor={};return r[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"4de4":function(e,t,r){"use strict";var n=r("23e7"),o=r("b727").filter,a=r("1dde"),s=r("ae40"),i=a("filter"),c=s("filter");n({target:"Array",proto:!0,forced:!i||!c},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var n=r("ade3");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},"71d5":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("base-page-heading",{attrs:{title:"Custodial Centers",subtitle:"Create and manage custodial centers here"},scopedSlots:e._u([{key:"extra",fn:function(){return[r("b-breadcrumb",{staticClass:"breadcrumb-alt"},[r("b-breadcrumb-item",{attrs:{active:""}},[r("router-link",{attrs:{to:"/dashboard"}},[r("i",{staticClass:"fa fa-home"})])],1),e._v(" "),r("b-breadcrumb-item",{attrs:{href:"javascript:void(0)",active:""}},[e._v("Custodial Centers")])],1)]},proxy:!0}])}),e._v(" "),r("div",{staticClass:"content"},[r("b-modal",{attrs:{id:"new-center-form","dialog-class":"modal-dialog-slideup","body-class":"p-0","hide-footer":"","hide-header":""}},[r("div",{staticClass:"block block-rounded block-themed block-transparent mb-0"},[r("div",{staticClass:"block-header bg-primary-dark"},[r("h3",{staticClass:"block-title"},[e._v("Create Custodial Center")]),e._v(" "),r("div",{staticClass:"block-options"},[r("button",{staticClass:"btn-block-option",attrs:{type:"button"},on:{click:function(t){return e.$bvModal.hide("new-center-form")}}},[r("i",{staticClass:"fa fa-fw fa-times"})])])]),e._v(" "),r("b-form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit(t)}}},[r("div",{staticClass:"block-content font-size-sm"},[r("b-row",[r("b-col",[r("b-form-group",{attrs:{"label-for":"center-name"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                   Custodial Center Name "),r("span",{staticClass:"text-danger"},[e._v("*")])]},proxy:!0}])},[e._v(" "),r("b-form-input",{attrs:{id:"center-name",type:"text",name:"centerName",state:e.$v.newCenterForm.centerName.$dirty?!e.$v.newCenterForm.centerName.$error:null},model:{value:e.$v.newCenterForm.centerName.$model,callback:function(t){e.$set(e.$v.newCenterForm.centerName,"$model",t)},expression:"$v.newCenterForm.centerName.$model"}}),e._v(" "),r("b-form-invalid-feedback",[e._v("\n                    please fill in a custodial center name\n                  ")])],1)],1)],1),e._v(" "),r("b-row",[r("b-col",[r("b-form-group",{attrs:{"label-for":"cc-type"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                    Custodial Center Type "),r("span",{staticClass:"text-danger"},[e._v("*")])]},proxy:!0}])},[e._v(" "),r("b-form-select",{attrs:{id:"cc-type",name:"centerTypeSelected",state:e.$v.newCenterForm.centerTypeSelected.$dirty?!e.$v.newCenterForm.centerTypeSelected.$error:null,options:e.newCenterForm.centerTypeOptions},model:{value:e.$v.newCenterForm.centerTypeSelected.$model,callback:function(t){e.$set(e.$v.newCenterForm.centerTypeSelected,"$model",t)},expression:"$v.newCenterForm.centerTypeSelected.$model"}}),e._v(" "),r("b-form-invalid-feedback",[e._v("\n                    please select a center type for this custodial center\n                  ")])],1)],1)],1),e._v(" "),r("b-row",[r("b-col",[r("b-form-group",{attrs:{"label-for":"center-state"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                    Custodial Center State "),r("span",{staticClass:"text-danger"},[e._v("*")])]},proxy:!0}])},[e._v(" "),r("b-form-select",{attrs:{id:"center-state",name:"centerStateSelected",state:e.$v.newCenterForm.centerStateSelected.$dirty?!e.$v.newCenterForm.centerTypeSelected.$error:null,options:e.newCenterForm.centerStateOptions},model:{value:e.$v.newCenterForm.centerStateSelected.$model,callback:function(t){e.$set(e.$v.newCenterForm.centerStateSelected,"$model",t)},expression:"$v.newCenterForm.centerStateSelected.$model"}}),e._v(" "),r("b-form-invalid-feedback",[e._v("\n                    please select a center state for this custodial center\n                  ")])],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"block-content block-content-full text-right border-top"},[r("b-button",{directives:[{name:"click-ripple",rawName:"v-click-ripple"}],staticClass:"mr-2",attrs:{type:"submit",variant:"alt-primary"}},[e._v("Create Center")]),e._v(" "),r("b-button",{directives:[{name:"click-ripple",rawName:"v-click-ripple"}],staticClass:"mr-1",attrs:{variant:"alt-secondary"},on:{click:function(t){return e.$bvModal.hide("new-center-form")}}},[e._v("Close")])],1)])],1)]),e._v(" "),r("b-row",[r("b-col",[r("base-block",{attrs:{rounded:"",title:"All Custodial Centers",subtitle:e.totalRows+" total custodial centers","btn-option-fullscreen":""},scopedSlots:e._u([{key:"options",fn:function(){return[r("button",{staticClass:"btn-block-option",attrs:{type:"button"},on:{click:function(t){return e.$bvModal.show("new-center-form")}}},[r("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.nofade.topleft",value:"Create Custodial Center",expression:"'Create Custodial Center'",modifiers:{hover:!0,nofade:!0,topleft:!0}}],staticClass:"si si-plus"})])]},proxy:!0}])},[e._v(" "),r("b-row",[r("b-col",{staticClass:"my-1",attrs:{lg:"4"}},[r("b-form-group",{staticClass:"mb-2",attrs:{"label-size":"sm","label-for":"filterInput"}},[r("b-input-group",{attrs:{size:"sm"}},[r("b-form-input",{staticClass:"form-control-alt",attrs:{type:"search",id:"filterInput",placeholder:"Type to Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),e._v(" "),r("b-input-group-append",[r("b-button",{attrs:{disabled:!e.filter},on:{click:function(t){e.filter=""}}},[e._v("Clear")])],1)],1)],1)],1),e._v(" "),r("b-col",{attrs:{lg:"4"}}),e._v(" "),r("b-col",{staticClass:"text-right",attrs:{lg:"4"}},[r("download-excel",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.nofade.topleft",value:"Export Excel",expression:"'Export Excel'",modifiers:{hover:!0,nofade:!0,topleft:!0}}],staticClass:"btn btn-secondary btn-sm",attrs:{data:this.filteredItems,fields:this.exportFields,name:"NCS Admin - Custodial Centers.xls"}},[r("i",{staticClass:"fa fa-file-excel"})]),e._v(" "),r("download-excel",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.nofade.topleft",value:"Export CSV",expression:"'Export CSV'",modifiers:{hover:!0,nofade:!0,topleft:!0}}],staticClass:"btn btn-secondary btn-sm",attrs:{type:"csv",data:this.filteredItems,fields:this.exportFields,name:"NCS Admin - Custodial Centers.csv"}},[r("i",{staticClass:"fa fa-file-csv"})])],1)],1),e._v(" "),r("b-table",{staticClass:"mb-2",attrs:{selectable:"","show-empty":"",striped:"",hover:"",bordered:"","head-variant":"light",filter:e.filter,items:e.centersSN,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage},on:{filtered:e.onFiltered,"row-clicked":e.viewCenter}}),e._v(" "),r("b-row",[r("b-col",{staticClass:"my-1",attrs:{lg:"2"}},[r("b-form-group",{staticClass:"mb-3",attrs:{"label-for":"perPageSelect"}},[r("b-form-select",{staticClass:"form-control-alt",attrs:{id:"perPageSelect",size:"sm",options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1),e._v(" "),r("b-col",{attrs:{lg:"7"}}),e._v(" "),r("b-col",{staticClass:"my-1",attrs:{lg:"3"}},[r("b-pagination",{staticClass:"mb-3 my-0",attrs:{"total-rows":e.totalRows,"per-page":e.perPage,align:"fill",size:"sm"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1)],1)],1),e._v(" "),r("b-modal",{attrs:{id:"view-center","dialog-class":"modal-dialog-slideup","body-class":"p-0","hide-footer":"","hide-header":""}},[r("div",{staticClass:"block block-rounded block-themed block-transparent mb-0"},[r("div",{staticClass:"block-header bg-primary-dark"},[r("h3",{staticClass:"block-title"},[e._v("View Custodial Center")]),e._v(" "),r("div",{staticClass:"block-options"},[r("button",{staticClass:"btn-block-option",attrs:{type:"button"},on:{click:function(t){return e.$bvModal.hide("view-center")}}},[r("i",{staticClass:"fa fa-fw fa-times"})])])]),e._v(" "),r("div",{staticClass:"block-content font-size-sm"},[r("b-row",[r("b-col",[r("b-form-group",{attrs:{"label-for":"zone-name"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                  Custodial Center Name\n                ")]},proxy:!0}])},[e._v(" "),r("b-form-input",{attrs:{id:"zone-name",type:"text",value:e.center,readonly:""}})],1)],1)],1),e._v(" "),r("b-row",[r("b-col",[r("b-form-group",{attrs:{"label-for":"type"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                  Custodial Center Type\n                ")]},proxy:!0}])},[e._v(" "),r("b-form-input",{attrs:{id:"type",type:"text",value:e.centerType,readonly:""}})],1)],1)],1),e._v(" "),r("b-row",[r("b-col",[r("b-form-group",{attrs:{"label-for":"state"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                  Custodial Center State\n                ")]},proxy:!0}])},[e._v(" "),r("b-form-input",{attrs:{id:"state",type:"text",value:e.centerState,readonly:""}})],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"block-content block-content-full text-right border-top"},[r("b-button",{directives:[{name:"click-ripple",rawName:"v-click-ripple"}],staticClass:"mr-1",attrs:{variant:"alt-secondary"},on:{click:function(t){return e.$bvModal.hide("view-center")}}},[e._v("Close")])],1)])])],1)],1)},o=[],a=(r("4160"),r("d81d"),r("159b"),r("96cf"),r("1da1")),s=r("5530"),i=r("1dce"),c=r("b5ae"),l={mixins:[i["validationMixin"]],computed:{centersSN:function(){return this.centers.map((function(e,t){return Object(s["a"])(Object(s["a"])({},e),{},{sno:t+1})}))}},mounted:function(){this.getCenterTypeOptions(),this.getCenterStateOptions()},data:function(){return{center:null,centerType:null,centerState:null,newCenterForm:{centerName:null,centerTypeSelected:null,centerTypeOptions:[{value:null,text:"Please select"}],centerStateSelected:null,centerStateOptions:[{value:null,text:"Please select"}]},fields:[{key:"sno",label:"S/n",thStyle:"width: 10%"},{key:"cc_name",label:"Correctional Center",sortable:!0},{key:"cc_type_name",label:"Center Type",sortable:!0},{key:"state_name",label:"State",sortable:!0},{key:"zone_name",label:"Zone",sortable:!0}],exportFields:{"S/n":"sno","Correctional Center Name":"cc_name","Correctional Center Type":"cc_type","Correctional Center State":"state_name","Zone Name":"zone_name"},centers:this.$store.getters.getCenters,filter:null,filteredItems:this.centers,totalRows:this.$store.getters.getNumCenters,currentPage:1,perPage:10,pageOptions:[{value:5,text:"5 per page"},{value:10,text:"10 per page"},{value:15,text:"15 per page"}]}},validations:{newCenterForm:{centerName:{required:c["required"]},centerTypeSelected:{required:c["required"]},centerStateSelected:{required:c["required"]}}},methods:{getCenterTypeOptions:function(){var e=this,t=this.$store.getters.getCCTypes;t&&t.forEach((function(t){e.newCenterForm.centerTypeOptions.push({value:t.cc_type_id,text:t.cc_type_name})}))},getCenterStateOptions:function(){var e=this,t=this.$store.getters.getStates;t&&t.forEach((function(t){e.newCenterForm.centerStateOptions.push({value:t.state_id,text:t.state_name})}))},onSubmit:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$v.newCenterForm.$touch(),!e.$v.newCenterForm.$anyError){t.next=4;break}return e.launchToast("Create Custodial Center Failure","Please fill all required fields","warning"),t.abrupt("return");case 4:return t.next=6,e.$store.dispatch("createCustodialCenter",{newCenterForm:e.newCenterForm}).then((function(t){e.launchToast("Create Custodial Center Success",t.data.message,"success"),e.$bvModal.hide("new-center-form"),e.newCenterForm.centerName=null,e.newCenterForm.centerTypeSelected=null,e.newCenterForm.centerStateSelected=null,e.getCenters().then((function(){e.centers=e.$store.getters.getCenters,e.totalRows=e.$store.getters.getNumCenters}))})).catch((function(t){e.launchToast("Create Custodial Center Failure",t.response.data.message,"warning")}));case 6:case"end":return t.stop()}}),t)})))()},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1,this.filteredItems=e},viewCenter:function(e){this.center=e.cc_name,this.centerType=e.cc_type_name,this.centerState=e.state_name,this.$bvModal.show("view-center")}}},u=l,f=r("2877"),d=Object(f["a"])(u,n,o,!1,null,null,null);t["default"]=d.exports},"746f":function(e,t,r){var n=r("428f"),o=r("5135"),a=r("e538"),s=r("9bf2").f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});o(t,e)||s(t,e,{value:a.f(e)})}},8418:function(e,t,r){"use strict";var n=r("c04e"),o=r("9bf2"),a=r("5c6c");e.exports=function(e,t,r){var s=n(t);s in e?o.f(e,s,a(0,r)):e[s]=r}},a4d3:function(e,t,r){"use strict";var n=r("23e7"),o=r("da84"),a=r("d066"),s=r("c430"),i=r("83ab"),c=r("4930"),l=r("fdbf"),u=r("d039"),f=r("5135"),d=r("e8b5"),p=r("861d"),b=r("825a"),m=r("7b0b"),v=r("fc6a"),C=r("c04e"),y=r("5c6c"),g=r("7c73"),h=r("df75"),w=r("241c"),S=r("057f"),_=r("7418"),k=r("06cf"),x=r("9bf2"),O=r("d1e7"),$=r("9112"),F=r("6eeb"),P=r("5692"),j=r("f772"),N=r("d012"),T=r("90e3"),E=r("b622"),z=r("e538"),D=r("746f"),M=r("d44e"),q=r("69f3"),I=r("b727").forEach,R=j("hidden"),A="Symbol",J="prototype",V=E("toPrimitive"),Z=q.set,B=q.getterFor(A),Q=Object[J],W=o.Symbol,G=a("JSON","stringify"),H=k.f,K=x.f,L=S.f,U=O.f,X=P("symbols"),Y=P("op-symbols"),ee=P("string-to-symbol-registry"),te=P("symbol-to-string-registry"),re=P("wks"),ne=o.QObject,oe=!ne||!ne[J]||!ne[J].findChild,ae=i&&u((function(){return 7!=g(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=H(Q,t);n&&delete Q[t],K(e,t,r),n&&e!==Q&&K(Q,t,n)}:K,se=function(e,t){var r=X[e]=g(W[J]);return Z(r,{type:A,tag:e,description:t}),i||(r.description=t),r},ie=l?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof W},ce=function(e,t,r){e===Q&&ce(Y,t,r),b(e);var n=C(t,!0);return b(r),f(X,n)?(r.enumerable?(f(e,R)&&e[R][n]&&(e[R][n]=!1),r=g(r,{enumerable:y(0,!1)})):(f(e,R)||K(e,R,y(1,{})),e[R][n]=!0),ae(e,n,r)):K(e,n,r)},le=function(e,t){b(e);var r=v(t),n=h(r).concat(be(r));return I(n,(function(t){i&&!fe.call(r,t)||ce(e,t,r[t])})),e},ue=function(e,t){return void 0===t?g(e):le(g(e),t)},fe=function(e){var t=C(e,!0),r=U.call(this,t);return!(this===Q&&f(X,t)&&!f(Y,t))&&(!(r||!f(this,t)||!f(X,t)||f(this,R)&&this[R][t])||r)},de=function(e,t){var r=v(e),n=C(t,!0);if(r!==Q||!f(X,n)||f(Y,n)){var o=H(r,n);return!o||!f(X,n)||f(r,R)&&r[R][n]||(o.enumerable=!0),o}},pe=function(e){var t=L(v(e)),r=[];return I(t,(function(e){f(X,e)||f(N,e)||r.push(e)})),r},be=function(e){var t=e===Q,r=L(t?Y:v(e)),n=[];return I(r,(function(e){!f(X,e)||t&&!f(Q,e)||n.push(X[e])})),n};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=T(e),r=function(e){this===Q&&r.call(Y,e),f(this,R)&&f(this[R],t)&&(this[R][t]=!1),ae(this,t,y(1,e))};return i&&oe&&ae(Q,t,{configurable:!0,set:r}),se(t,e)},F(W[J],"toString",(function(){return B(this).tag})),F(W,"withoutSetter",(function(e){return se(T(e),e)})),O.f=fe,x.f=ce,k.f=de,w.f=S.f=pe,_.f=be,z.f=function(e){return se(E(e),e)},i&&(K(W[J],"description",{configurable:!0,get:function(){return B(this).description}}),s||F(Q,"propertyIsEnumerable",fe,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),I(h(re),(function(e){D(e)})),n({target:A,stat:!0,forced:!c},{for:function(e){var t=String(e);if(f(ee,t))return ee[t];var r=W(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(f(te,e))return te[e]},useSetter:function(){oe=!0},useSimple:function(){oe=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!i},{create:ue,defineProperty:ce,defineProperties:le,getOwnPropertyDescriptor:de}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pe,getOwnPropertySymbols:be}),n({target:"Object",stat:!0,forced:u((function(){_.f(1)}))},{getOwnPropertySymbols:function(e){return _.f(m(e))}}),G){var me=!c||u((function(){var e=W();return"[null]"!=G([e])||"{}"!=G({a:e})||"{}"!=G(Object(e))}));n({target:"JSON",stat:!0,forced:me},{stringify:function(e,t,r){var n,o=[e],a=1;while(arguments.length>a)o.push(arguments[a++]);if(n=t,(p(t)||void 0!==e)&&!ie(e))return d(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!ie(t))return t}),o[1]=t,G.apply(null,o)}})}W[J][V]||$(W[J],V,W[J].valueOf),M(W,A),N[R]=!0},b64b:function(e,t,r){var n=r("23e7"),o=r("7b0b"),a=r("df75"),s=r("d039"),i=s((function(){a(1)}));n({target:"Object",stat:!0,forced:i},{keys:function(e){return a(o(e))}})},d81d:function(e,t,r){"use strict";var n=r("23e7"),o=r("b727").map,a=r("1dde"),s=r("ae40"),i=a("map"),c=s("map");n({target:"Array",proto:!0,forced:!i||!c},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(e,t,r){var n=r("23e7"),o=r("83ab"),a=r("56ef"),s=r("fc6a"),i=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,r,n=s(e),o=i.f,l=a(n),u={},f=0;while(l.length>f)r=o(n,t=l[f++]),void 0!==r&&c(u,t,r);return u}})},e439:function(e,t,r){var n=r("23e7"),o=r("d039"),a=r("fc6a"),s=r("06cf").f,i=r("83ab"),c=o((function(){s(1)})),l=!i||c;n({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(e,t){return s(a(e),t)}})},e538:function(e,t,r){var n=r("b622");t.f=n}}]);