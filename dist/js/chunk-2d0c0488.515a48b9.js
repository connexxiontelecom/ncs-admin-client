(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0488"],{"40b8":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-layout",{attrs:{"layout-classes":t.layoutClasses},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"content-header"},[e("div",{staticClass:"d-flex align-items-center"},[e("router-link",{staticClass:"font-w600 font-size-h5 tracking-wider text-dual mr-3",attrs:{to:"/"}},[e("span",[e("img",{staticClass:"mr-2 mb-2",attrs:{src:"img/logos/logo.png",width:"40",alt:""}})]),t._v("  NCS "),e("span",{staticClass:"font-w400"},[t._v("Admin")])]),t._v(" "),e("b-dropdown",{staticClass:"d-inline-block mr-2",attrs:{size:"sm",variant:"dual","menu-class":"dropdown-menu-lg p-0 border-0 font-size-sm","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("i",{staticClass:"fa fa-fw fa-bell"}),t._v(" "),t.notifications.length?e("span",{staticClass:"text-primary"},[t._v("•")]):t._e()]},proxy:!0}])},[t._v(" "),e("li",[e("div",{staticClass:"p-2 bg-primary-dark text-center rounded-top"},[e("h5",{staticClass:"dropdown-header text-uppercase text-white"},[t._v("Notifications")])]),t._v(" "),e("ul",{staticClass:"nav-items mb-0"},[t._l(t.notifications,(function(a,s){return e("li",{key:"notification-"+s},[e("a",{staticClass:"text-dark media py-2",attrs:{href:""+a.href}},[e("div",{staticClass:"mr-2 ml-3"},[e("i",{class:""+a.icon})]),t._v(" "),e("div",{staticClass:"media-body pr-2"},[e("div",{staticClass:"font-w600"},[t._v(t._s(a.title))]),t._v(" "),e("span",{staticClass:"font-w500 text-muted"},[t._v(t._s(a.time))])])])])})),t._v(" "),t.notifications.length?t._e():e("li",{staticClass:"p-2"},[e("b-alert",{staticClass:"text-center m-0",attrs:{variant:"warning",show:""}},[e("p",{staticClass:"mb-0"},[t._v("\n                      No new notifications!\n                    ")])])],1)],2),t._v(" "),t.notifications.length?e("div",{staticClass:"p-2 border-top"},[e("b-button",{staticClass:"text-center",attrs:{size:"sm",variant:"light",block:"",href:"javascript:void(0)"}},[e("i",{staticClass:"fa fa-fw fa-arrow-down mr-1"}),t._v(" Load More..\n                ")])],1):t._e()])]),t._v(" "),t.isHQ?e("b-button",{staticClass:"mr-2",attrs:{variant:"dual",size:"sm"}},[t._v("NCS HQ")]):t._e()],1),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("base-layout-modifier",{staticClass:"d-sm-none",attrs:{action:"headerSearchOn",variant:"dual",size:"sm"}},[e("i",{staticClass:"fa fa-search"})]),t._v(" "),e("b-form",{staticClass:"d-none d-sm-inline-block",on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),t.onSubmit(a)}}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{staticClass:"form-control-alt",attrs:{placeholder:"Search.."},model:{value:t.baseSearchTerm,callback:function(a){t.baseSearchTerm=a},expression:"baseSearchTerm"}}),t._v(" "),e("b-input-group-append",[e("span",{staticClass:"input-group-text bg-body border-0"},[e("i",{staticClass:"fa fa-search"})])])],1)],1),t._v(" "),e("b-dropdown",{ref:"oneDropdownBoxedUser",staticClass:"d-inline-block ml-2",attrs:{size:"sm",variant:"dual","menu-class":"p-0 border-0 font-size-sm",right:"","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("div",{staticClass:"d-flex align-items-center"},[e("img",{staticClass:"rounded-circle",staticStyle:{width:"21px"},attrs:{src:"img/avatars/avatar10.jpg",alt:"Header Avatar"}}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline-block ml-2"},[t._v(t._s(t.user.user_username))]),t._v(" "),e("i",{staticClass:"fa fa-fw fa-angle-down d-none d-sm-inline-block ml-1 mt-1"})])]},proxy:!0}])},[t._v(" "),e("li",{on:{click:function(a){return t.$refs.oneDropdownBoxedUser.hide(!0)}}},[e("div",{staticClass:"p-3 text-center bg-primary-dark rounded-top"},[e("img",{staticClass:"img-avatar img-avatar48 img-avatar-thumb",attrs:{src:"img/avatars/avatar10.jpg",alt:"Avatar"}}),t._v(" "),e("p",{staticClass:"mt-2 mb-0 text-white font-w500"},[t._v(t._s(t.user.user_first_name))]),t._v(" "),e("p",{staticClass:"mb-0 text-white-50 font-size-sm"},[t._v(t._s(t.user.user_last_name))])]),t._v(" "),e("div",{staticClass:"p-2"},[e("a",{staticClass:"dropdown-item d-flex align-items-center justify-content-between",attrs:{href:"javascript:void(0)"}},[e("span",{staticClass:"font-size-sm font-w500"},[t._v("Inbox")]),t._v(" "),e("span",{staticClass:"badge badge-pill badge-primary ml-2"},[t._v("3")])]),t._v(" "),e("a",{staticClass:"dropdown-item d-flex align-items-center justify-content-between",attrs:{href:"javascript:void(0)"}},[e("span",{staticClass:"font-size-sm font-w500"},[t._v("Settings")])]),t._v(" "),e("div",{staticClass:"dropdown-divider",attrs:{role:"separator"}}),t._v(" "),e("router-link",{staticClass:"dropdown-item d-flex align-items-center justify-content-between",attrs:{to:"/auth/lock"}},[e("span",{staticClass:"font-size-sm font-w500"},[t._v("Lock Account")])]),t._v(" "),e("a",{staticClass:"dropdown-item d-flex align-items-center justify-content-between",attrs:{href:"javascript:void(0)"},on:{click:t.logout}},[e("span",{staticClass:"font-size-sm font-w500"},[t._v("Log Out")])])],1)])])],1)]),t._v(" "),e("div",{staticClass:"overlay-header bg-white",class:{show:t.$store.state.settings.headerSearch},attrs:{id:"page-header-search"},on:{keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"esc",27,a.key,["Esc","Escape"])?null:function(){return t.$store.commit("headerSearch",{mode:"off"})}()}}},[e("div",{staticClass:"content-header"},[e("b-form",{staticClass:"w-100",on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),t.onSubmit(a)}}},[e("b-input-group",[e("b-form-input",{attrs:{placeholder:"Search or hit ESC.."},model:{value:t.baseSearchTerm,callback:function(a){t.baseSearchTerm=a},expression:"baseSearchTerm"}}),t._v(" "),e("b-input-group-append",[e("base-layout-modifier",{attrs:{action:"headerSearchOff",variant:"alt-danger"}},[e("i",{staticClass:"fa fa-fw fa-times-circle"})])],1)],1)],1)],1)]),t._v(" "),e("div",{staticClass:"overlay-header bg-primary-lighter",class:{show:t.$store.state.settings.headerLoader},attrs:{id:"page-header-loader"}},[e("div",{staticClass:"content-header"},[e("div",{staticClass:"w-100 text-center"},[e("i",{staticClass:"fa fa-fw fa-circle-notch fa-spin text-primary"})])])])]},proxy:!0},{key:"content",fn:function(){return[e("div",{staticClass:"bg-white"},[e("div",{staticClass:"content py-3"},[e("div",{staticClass:"d-lg-none"},[e("b-button",{directives:[{name:"toggle-class",rawName:"v-toggle-class",value:{targetId:"horizontal-navigation",class:"d-none"},expression:"{ targetId: 'horizontal-navigation', class: 'd-none' }"}],staticClass:"d-flex justify-content-between align-items-center",attrs:{variant:"alt-secondary",block:""}},[t._v("\n              Menu\n              "),e("i",{staticClass:"fa fa-bars"})])],1),t._v(" "),e("div",{staticClass:"d-none d-lg-block mt-2 mt-lg-0",attrs:{id:"horizontal-navigation"}},[e("base-navigation",{attrs:{nodes:t.navigation,horizontal:"","horizontal-hover":""}})],1)])])]},proxy:!0}])})},i=[],n=e("2cef"),o={main:[{name:"Dashboard",to:"/operations",icon:"si si-compass"},{name:"Custodial Centers",to:"",icon:"si si-lock"},{name:"States",to:"",icon:"si si-globe"},{name:"Zones",to:"/zonal_operations",icon:"si si-layers"},{name:"Go Back",to:"/dashboard",icon:"si si-action-undo"}]},r={name:"LayoutBackend",components:{BaseLayout:n["a"]},data:function(){return{user:this.$store.getters.getUser,isHQ:this.$store.getters.getIsHQ,layoutClasses:{sideOverlay:"",sidebar:"",header:"",footer:""},navigation:o.main,baseSearchTerm:"",notifications:[{href:"javascript:void(0)",icon:"fa fa-fw fa-check-circle text-success",title:"You have a new follower",time:"15 min ago"},{href:"javascript:void(0)",icon:"fa fa-fw fa-plus-circle text-info",title:"1 new sale, keep it up",time:"22 min ago"},{href:"javascript:void(0)",icon:"fa fa-fw fa-times-circle text-danger",title:"Update failed, restart server",time:"15 min ago"},{href:"javascript:void(0)",icon:"fa fa-fw fa-plus-circle text-info",title:"2 new sales, keep it up",time:"33 min ago"},{href:"javascript:void(0)",icon:"fa fa-fw fa-user-plus text-success",title:"You have a new subscriber",time:"41 min ago"},{href:"javascript:void(0)",icon:"fa fa-fw fa-check-circle text-success",title:"You have a new follower",time:"42 min ago"}]}},methods:{onSubmit:function(){this.$router.push("/backend-boxed/search?"+this.baseSearchTerm)},eventHeaderSearch:function(t){27===t.which&&(t.preventDefault(),this.$store.commit("headerSearch",{mode:"off"}))},logout:function(){var t=this;this.$store.dispatch("logout").then((function(){t.$router.push("/auth/signin")}))}},mounted:function(){document.addEventListener("keydown",this.eventHeaderSearch)},destroyed:function(){document.removeEventListener("keydown",this.eventHeaderSearch)},created:function(){this.$store.commit("setLayout",{header:!0,sidebar:!1,sideOverlay:!1,footer:!0}),this.$store.commit("headerStyle",{mode:"dark"}),this.$store.commit("mainContent",{mode:"full"})}},c=r,l=e("2877"),d=Object(l["a"])(c,s,i,!1,null,null,null);a["default"]=d.exports}}]);