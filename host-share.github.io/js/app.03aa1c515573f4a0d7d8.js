webpackJsonp([1],{"+rTZ":function(t,e){},"/Aas":function(t,e){},"/yaB":function(t,e,a){"use strict";(function(t){var s=a("Xxa5"),n=a.n(s),i=a("exGp"),o=a.n(i);e.a={name:"Files",data:function(){return{url:""}},mouted:function(){document.addEventListener("beforeunload",this.handler)},methods:{handler:function(t){console.log(", ...args"),alert("laave")},leaving:function(){alert("You leaving page")},Upload:function(){this.url="";var t=window.location.href.split("/"),e=t[2].split(":");this.url=t[0]+"//"+e[0]+":55555";var a=new FormData,s=document.getElementById("files");if(0===s.files.length)document.getElementById("msg").innerHTML+='<div class="alert alert-warning alert-dismissible fade show" role="alert"> <strong>Nenhum</strong> arquivos selecionado. <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> ',setTimeout(function(){document.getElementById("msg").innerHTML=""},3e3);else{document.getElementById("p").removeAttribute("hidden",""),document.getElementById("btnsend").setAttribute("disabled","");for(var i=0;i<s.files.length;i++)a.append("files",s.files[i]);this.$http.post(this.url+"/files/upload",a,{progress:function(t){var e=this;return o()(n.a.mark(function a(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.lengthComputable&&(document.getElementById("progress").setAttribute("style","width: "+t.loaded/t.total*100+"%;"),document.getElementById("progress").innerHTML=(t.loaded/t.total*100).toFixed(2)+"%");case 1:case"end":return e.stop()}},a,e)}))()}}).then(function(t){t&&setTimeout(function(t){document.getElementById("msg").innerHTML+='<div class="alert alert-success alert-dismissible fade show" role="alert"> <strong>Arquivo(s)</strong> enviados com sucesso. <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> ',setTimeout(function(t){document.getElementById("p").setAttribute("hidden",""),document.getElementById("progress").style.width="0%"},1e3),console.log("sucesso"),document.getElementById("up").reset(),setTimeout(function(){document.getElementById("msg").innerHTML=""},3e3),document.getElementById("btnsend").removeAttribute("disabled","")},500),document.getElementById("progress").display="none"},function(t){t&&(document.getElementById("msg").innerHTML+='<div class="alert alert-danger alert-dismissible fade show" role="alert"> <strong>Erro</strong> arquivos não enviados. <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> ',setTimeout(function(){document.getElementById("btnsend").removeAttribute("disabled",""),document.getElementById("msg").innerHTML=""},3e3),console.log("erro"))})}}}}}).call(e,a("lNQ5"))},0:function(t,e){},Bfei:function(t,e){},M11W:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={data:function(){return{url:"",active:[!0,!1,!1,!1,!1,!1],active2:!1,teste:"olá!",types:[]}},mounted:function(){},created:function(){var t=this;this.url="";var e=window.location.href.split("/"),a=e[2].split(":");this.url=e[0]+"//"+a[0]+":55555",this.$http.get(this.url+"/files/list").then(function(e){t.types=e.body,t.types.active=t.active},function(t){})},methods:{show:function(){},changeTab:function(t){console.log(t);for(var e=["divdoc","divimage","divvideo","divcompress","divmusic","divother"].sort(),a=["doc","image","video","compress","music","other"].sort(),s=0;s<e.length;s++){var n=document.getElementById(e[s]),i=document.getElementById(a[s]);n.classList.remove("active"),i.classList.remove("active")}var o=document.getElementById(e[t]),l=document.getElementById(a[t]);o.classList.add("active"),l.classList.add("active"),console.log(this.$route)}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container center-items"},[a("nav",[a("div",{staticClass:"nav nav-tabs",attrs:{id:"nav-tab",role:"tablist"}},t._l(t.types,function(e,s){return a("a",{staticClass:"nav-item nav-link  tab_link",class:{active:t.active[s]},attrs:{id:"div"+e.type,"data-toggle":"tab",href:"#"+e.type,role:"tab","aria-controls":e.type,"aria-selected":"true"}},[t._v(t._s(e.type))])}))]),t._v(" "),a("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},t._l(t.types,function(e,s){return a("div",{staticClass:"tab-pane fade show ",class:{active:t.active[s]},attrs:{id:e.type,role:"tabpanel","aria-labelledby":"nav-home-tab"}},[a("div",{staticClass:"list-group"},[0===e.files.length?a("label",[t._v("\n                        No "+t._s(e.type)+" for Download \n                    ")]):t._e(),t._v(" "),t._l(e.files,function(e){return a("div",{staticClass:"list-group-item-action list-group-item-ligth  list-group-item d-flex justify-content-between align-items-center  "},[a("span",{staticClass:"file-list container"},[a("a",{attrs:{href:t.url+"/files/download/"+e.id}},[a("span",{staticClass:" badge badge-primary badge-pill material-icons"},[t._v("cloud_download")])]),t._v("\n                                "+t._s(e.filename)+"\n                            ")])])})],2)])}))])},staticRenderFns:[]};var o=a("VU/8")(n,i,!1,function(t){a("dXpG")},null,null).exports,l={data:function(){return{}},methods:{closeSideMenu:function(){document.getElementById("second_menu").classList.remove("is-visible"),document.getElementById("second_menu").setAttribute("aria-data","false");for(var t=0;t<document.getElementsByClassName("mdl-layout__obfuscator").length;t++)document.getElementsByClassName("mdl-layout__obfuscator")[t].classList.remove("is-visible")},closeMenu:function(){document.getElementById("togglerMenu").classList.add("collapsed"),document.getElementById("togglerMenu").setAttribute("aria-expanded","false"),document.getElementById("navbarNav").classList.remove("show")}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar    navbar-expand-sm navbar-dark bg-dark fixed-top "},[a("router-link",{staticClass:" navbar-brand",attrs:{to:"/"},nativeOn:{click:function(e){t.closeMenu()}}},[t._v("Host Share")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse justify-content-end navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"},nativeOn:{click:function(e){t.closeMenu()}}},[a("i",{staticClass:"fas fa-home    "}),t._v(" Home\n                ")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/filesdownload"},nativeOn:{click:function(e){t.closeMenu()}}},[a("i",{staticClass:"fas fa-cloud-download-alt    "}),t._v(" Downloads\n                ")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/filesupload"},nativeOn:{click:function(e){t.closeMenu()}}},[a("i",{staticClass:"fas fa-cloud-upload-alt    "}),t._v(" Uploads\n                ")])],1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{id:"togglerMenu",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]};var c=a("VU/8")(l,r,!1,function(t){a("uwD6")},null,null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("nav",{staticClass:"navbar navbar-dark bg-primary navbar-expand-sm"},[a("div",{staticClass:"container"},[a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item active"},[a("div",{staticClass:"dropup"},[a("label",{staticClass:"nav-link text-white  dropdown-toggle",attrs:{id:"triggerId","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                                    Personal\n                                ")]),t._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"triggerId"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"https://github.com/mayconrebordao",target:"_blank"}},[a("i",{staticClass:"fab fa-github-alt"}),t._v(" Github")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"https://www.facebook.com/maycon.rebordao",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook    "}),t._v(" Facebook")])])])]),t._v(" "),a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:"https://github.com/mayconrebordao/host-share",target:"_blank"}},[a("i",{staticClass:"fas fa-code    "}),t._v(" Source Code")])])])])])])])}]};var u=a("VU/8")({data:function(){return{}}},d,!1,function(t){a("+rTZ")},null,null).exports,m={name:"App",components:{HeaderSite:c,FooterSite:u},children:{Files:o,HeaderSite:c,FooterSite:u},mounted:function(){},methods:{closeSideMenu:function(){document.getElementById("second_menu").classList.remove("is-visible"),document.getElementById("second_menu").setAttribute("aria-data","false");for(var t=0;t<document.getElementsByClassName("mdl-layout__obfuscator").length;t++)document.getElementsByClassName("mdl-layout__obfuscator")[t].classList.remove("is-visible")},closeMenu:function(){document.getElementById("togglerMenu").classList.add("collapsed"),document.getElementById("togglerMenu").setAttribute("aria-expanded","false"),document.getElementById("navbarNav").classList.remove("show")}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("body",[e("header",{staticClass:"pos-f-t"},[e("HeaderSite")],1),this._v(" "),e("main",{staticClass:"center-items container main_content",attrs:{role:"main"}},[e("div",{staticClass:"row"},[e("router-view")],1)]),this._v(" "),e("FooterSite")],1)},staticRenderFns:[]};var f=a("VU/8")(m,v,!1,function(t){a("zGGc")},null,null).exports,p=a("/ocq"),g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:" mdl-card mdl-shadow--2dp"},[e("div",{staticClass:"mdl-card__title"},[e("h2",{staticClass:"mdl-card__title-text"})]),this._v(" "),e("div",{staticClass:"mdl-card__supporting-text"}),this._v(" "),e("div",{staticClass:"mdl-card__actions mdl-card--border"},[e("a",{staticClass:"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"},[this._v("\n    teste\n  ")])]),this._v(" "),e("div",{staticClass:"mdl-card__menu"},[e("button",{staticClass:"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"},[e("i",{staticClass:"material-icons"},[this._v("share")])])])]),this._v(" "),e("div")])}]};var b=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},g,!1,function(t){a("OogU")},"data-v-3f97584e",null).exports,h=a("/yaB"),_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container row center-items"},[a("div",{staticClass:"card"},[a("form",{attrs:{id:"up",method:"post",enctype:"mult-part/form-data"}},[a("div",{staticClass:"card-header"},[t._v("\n\t\t\t\tUpload de Arquivos\n\t\t\t")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"card-footer"},[a("button",{staticClass:"card-link btn btn-success  ",attrs:{id:"btnsend",type:"submit"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.Upload()}}},[t._v("ENVIAR "),a("span",{staticClass:"badge badge-pill material-icons"},[t._v("cloud_upload")])])]),t._v(" "),a("div",{attrs:{id:"msg"}})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-body bg-light"},[e("div",{staticClass:"card-text"},[e("p",[this._v("\n\t\t\t\t\t\tÉ possível fazer o upload de multiplos arquivos e de diversos tipos, limite máximo de 200 arquivos.\n\t\t\t\t\t")])]),this._v(" "),e("input",{staticClass:"btn btn-outline-dark container",attrs:{id:"files",type:"file",name:"files",multiple:""}}),this._v(" "),e("div",{staticClass:"progress",attrs:{id:"p",hidden:""}},[e("div",{staticClass:"progress-bar",attrs:{id:"progress",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"25"}})])])}]};var y=function(t){a("M11W")},C=a("VU/8")(h.a,_,!1,y,"data-v-0288868f",null).exports;s.a.use(p.a);var w=new p.a({mode:"history",routes:[{path:"/",name:"HelloWorld",component:b,meta:{title:"Host Share - Home"}},{path:"/filesdownload",name:"FilesDownload",component:o,meta:{title:"Host Share - Download de Arquivos"}},{path:"/filesupload",name:"FilesUpload",component:C,meta:{title:"Host Share - Upload de Arquivos"}}]});w.beforeEach(function(t,e,a){document.title=t.meta.title,a()});var E=w,B=a("8+8L");a("cwFx"),a("/Aas"),a("Bfei"),a("Bb4J"),a("qb6w"),a("aqYZ"),a("Kt1F"),a("OF5A");s.a.use(B.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:E,components:{App:f},template:"<App/>"})},OogU:function(t,e){},aqYZ:function(t,e){},cwFx:function(t,e){},dXpG:function(t,e){},qb6w:function(t,e){},uwD6:function(t,e){},zGGc:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.03aa1c515573f4a0d7d8.js.map