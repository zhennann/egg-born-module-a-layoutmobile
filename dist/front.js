window["a-layoutmobile"]=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){var o=n(1);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(9).default)("70408eae",o,!0,{})},function(e,t,n){(t=n(2)(!0)).push([e.i,":root .eb-layout-container-mobile {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background: var(--f7-page-bg-color);\n}\n:root .eb-layout-container-mobile .eb-layout-scene-tool,\n:root .eb-layout-container-mobile .eb-layout-group {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n:root .eb-layout-container-mobile .eb-layout-scene-tool {\n  z-index: 5000;\n}\n:root .eb-layout-container-mobile .eb-layout-group {\n  z-index: 5001;\n  display: none;\n}\n:root .eb-layout-container-mobile .view.eb-layout-view {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n:root .eb-layout-container-mobile .view.eb-layout-view.eb-transition-close {\n  animation: md-page-current-to-next var(--f7-page-transition-duration) forwards;\n}\n","",{version:3,sources:["/Users/yangjian/Documents/data/cabloy/egg-born-demo/src/module/a-layoutmobile/front/src/assets/css/module.less","module.less"],names:[],mappings:"AAAA;EAEI,kBAAA;EACA,YAAA;EACA,WAAA;EACA,mCAAA;ACAJ;ADLA;;EASM,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;ACAN;ADbA;EAiBM,aAAA;ACDN;ADhBA;EAqBM,aAAA;EACA,aAAA;ACFN;ADpBA;EA0BM,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;ACHN;AD3BA;EAkCM,8EAAA;ACJN",file:"module.less",sourcesContent:[":root {\n  .eb-layout-container-mobile {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    background: var(--f7-page-bg-color);\n\n    .eb-layout-scene-tool,\n    .eb-layout-group {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n      box-sizing: border-box;\n    }\n\n    .eb-layout-scene-tool {\n      z-index: 5000;\n    }\n\n    .eb-layout-group {\n      z-index: 5001;\n      display: none;\n    }\n\n    .view.eb-layout-view {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n      box-sizing: border-box;\n    }\n\n    .view.eb-layout-view.eb-transition-close {\n      animation: md-page-current-to-next var(--f7-page-transition-duration) forwards;\n    }\n\n  }\n}\n",":root .eb-layout-container-mobile {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background: var(--f7-page-bg-color);\n}\n:root .eb-layout-container-mobile .eb-layout-scene-tool,\n:root .eb-layout-container-mobile .eb-layout-group {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n:root .eb-layout-container-mobile .eb-layout-scene-tool {\n  z-index: 5000;\n}\n:root .eb-layout-container-mobile .eb-layout-group {\n  z-index: 5001;\n  display: none;\n}\n:root .eb-layout-container-mobile .view.eb-layout-view {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n:root .eb-layout-container-mobile .view.eb-layout-view.eb-transition-close {\n  animation: md-page-current-to-next var(--f7-page-transition-duration) forwards;\n}\n"]}]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([i]).join("\n")}var a,s,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);o&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";n.r(t),t.default=[]},function(e,t,n){"use strict";n.r(t),t.default=function(e){return{state:{},getters:{},mutations:{},actions:{}}}},function(e,t,n){"use strict";n.r(t),t.default={layout:{login:"/a/login/login",loginOnStart:!0,toolbar:{tabbar:!0,labels:!0,bottom:!0},tabs:[{name:"Home",tabLinkActive:!0,iconMaterial:"home",url:"/a/base/menu/list"},{name:"Atom",tabLinkActive:!1,iconMaterial:"group_work",url:"/a/base/atom/list"},{name:"Mine",tabLinkActive:!1,iconMaterial:"person",url:"/a/user/user/mine"}],size:{small:320}}}},function(e,t,n){"use strict";n.r(t),t.default={"zh-cn":n(7).default}},function(e,t,n){"use strict";n.r(t),t.default={Home:"首页",Atom:"原子",Mine:"我的"}},function(e,t,n){"use strict";n.r(t);function o(e,t,n,o,i,r,a,s){var u,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(e,t){return u.call(t),c(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:l}}var i,r=o({render:function(e){var t=this,n=[],o=[];this.$config.layout.tabs.forEach((function(i){var r="eb-layout-tab-".concat(i.name),a=t.$utils.extend({},i);a.text=t.$text(a.text||a.name),a.tabLink="#".concat(r),n.push(e("f7-link",{attrs:a}));var s={id:r,name:i.name,tab:!0,"data-url":i.url,init:!0,tabActive:i.tabLinkActive,pushState:!1,stackPages:!0,pushStateOnLoad:!1,preloadPreviousPage:!1,"data-size":t.size};o.push(e("eb-view",{key:r,staticClass:"eb-layout-tab ".concat(t.layout._combineViewSizeClass()),attrs:s,props:{size:t.size,sizeExtent:t.sizeExtent},on:{"tab:show":t.onTabShow}}))}));var i=this.$utils.extend({},this.$config.layout.toolbar),r=e("f7-toolbar",{attrs:i},n);return e("f7-views",{staticClass:"eb-layout-scene eb-layout-scene-tool",attrs:{tabs:!0}},[r].concat(o))},computed:{layout:function(){return this.$parent},size:function(){return this.$parent.size},sizeExtent:function(){return this.$parent.sizeExtent}},mounted:function(){this.onTabShow()},methods:{onTabShow:function(e){var t=e?this.$$(e):this.$$(".view.eb-layout-tab.tab-active");if(t.hasClass("eb-layout-tab")){var n=t[0].f7View.router.currentRoute.path;n&&"/"!==n||t[0].f7View.router.navigate(t.data("url"))}}}},void 0,void 0,!1,null,"5e0cfc81",null).exports,a=o({render:function(e){for(var t=this,n=!this.$device.ios,o=[],i=0;i<this.views.length;i++){var r=this.views[i],a={id:r.id,name:r.zIndex+"",init:!1,pushState:n,stackPages:!0,pushStateOnLoad:!1,preloadPreviousPage:!1,"data-zindex":r.zIndex,"data-size":this.size};o.push(e("eb-view",{ref:r.id,id:r.id,key:r.id,staticClass:"eb-layout-view ".concat(this.layout._combineViewSizeClass()),style:{zIndex:r.zIndex+""},attrs:a,props:{size:this.size,sizeExtent:this.sizeExtent},on:{"view:ready":function(e){t.onViewReady(e)}}}))}return e("div",{staticClass:"eb-layout-group"},o)},data:function(){return{views:[],viewIndex:1e4}},computed:{layout:function(){return this.$parent},size:function(){return this.$parent.size},sizeExtent:function(){return this.$parent.sizeExtent}},methods:{closeView:function(e){var t=this,n=this.$$(e.$el);n.addClass("eb-transition-close").animationEnd((function(){var e=parseInt(n.data("zindex")),o=t.views.findIndex((function(t){return t.zIndex===e}));o>-1&&(t.views.splice(o,1),0===t.views.length&&(t.$$(t.$el).hide(),t.layout.tabShowed||(t.layout.tabShowed=!0)))}))},createView:function(e){var t=this,n=(e.ctx,e.url);return new Promise((function(e){var o=++t.viewIndex;t.views.push({id:"layoutview_".concat(o),zIndex:o,url:n,callback:function(n){var o=n.view;t.$nextTick((function(){e({view:o,options:null})}))}}),t.$$(t.$el).show()}))},onViewReady:function(e){var t=this.views.find((function(t){return t.id===e.id}));this.$meta.vueLayout._patchRouter.loadRoute(t.url,(function(n){if(!n)throw new Error("not found route: ".concat(t.url));t.callback({view:e}),delete t.callback}))},getView:function(e){return this.$refs[e]}}},void 0,void 0,!1,null,"33be2dc8",null),s=o({meta:{global:!1},components:{ebTabViews:r,ebGroup:a.exports},render:function(e){var t=[];return this.tabShowed&&t.push(e("eb-tab-views",{ref:"tabViews"})),t.push(e("eb-group",{ref:"group"})),e("div",{staticClass:"eb-layout-container eb-layout-container-mobile"},t)},data:function(){return{started:!1,tabShowed:!1,sizeExtent:null,size:null}},created:function(){this._onSize()},mounted:function(){var e=this;this.$f7ready((function(){e.start()}))},methods:{onResize:function(){this._onSize()},_onSize:function(){var e=this.$$(window).width(),t=this.$$(window).height();this.sizeExtent={width:e,height:t},e<=2*this.$config.layout.size.small?this.size="small":e>3*this.$config.layout.size.small?this.size="large":this.size="medium"},start:function(){var e=this,t=this.$meta.vueApp;if(t.checkIfNeedOpenLogin())this.openLogin();else{var n=t.popupHashInit();n?this.navigate(n):this.openHome()}this.$nextTick((function(){e.started=!0}))},openHome:function(){this.tabShowed=!0},navigate:function(e,t){var n=this;if(e){if(0===e.indexOf("https://")||0===e.indexOf("http://"))return location.assign(e);var o=(t=t||{}).ctx,i=t.target;if("_self"===i)o.$view.f7View.router.navigate(e,t);else{var r=o&&o.$view&&this.$$(o.$view.$el);!r||"_view"===i||r.parents(".eb-layout-scene").length>0?this.$refs.group.createView({ctx:o,url:e}).then((function(o){o&&(o.options&&(t=n.$utils.extend({},t,o.options)),o.view.f7View.router.navigate(e,t))})):o.$view.f7View.router.navigate(e,t)}}},openLogin:function(e){var t=e&&"string"!=typeof e?e.url.url:e;t&&"/"!==t&&this.$store.commit("auth/setHashInit",t),this.navigate(this.$config.layout.login)},closeView:function(e){this.$refs.group.closeView(e)},backLink:function(e){var t=!1;this.$meta.util.historyUrlEmpty(e.$f7router.history[e.$f7router.history.length-1])?e.$$(e.$el).parents(".eb-layout-view").length>0&&(t=!0):t=!0;return t},_combineViewSizeClass:function(){var e="";switch(this.size){case"small":e="eb-view-size-small";break;case"medium":e="eb-view-size-small eb-view-size-medium";break;case"large":e="eb-view-size-small eb-view-size-medium eb-view-size-large"}return e}}},void 0,void 0,!1,null,"5039ed42",null).exports;n(0);t.default={install:function(e,t){return i?console.error("already installed."):(i=e,t({routes:n(3).default,store:n(4).default(i),config:n(5).default,locales:n(6).default,components:{layout:s}}))}}},function(e,t,n){"use strict";function o(e,t){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],a=r[0],s={id:e+":"+i,css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}n.r(t),n.d(t,"default",(function(){return h}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,l=!1,c=function(){},d=null,f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,i){l=n,d=i||{};var a=o(e,t);return b(a),function(t){for(var n=[],i=0;i<a.length;i++){var s=a[i];(u=r[s.id]).refs--,n.push(u)}t?b(a=o(e,t)):a=[];for(i=0;i<n.length;i++){var u;if(0===(u=n[i]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete r[u.id]}}}}function b(e){for(var t=0;t<e.length;t++){var n=e[t],o=r[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(v(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(v(n.parts[i]));r[n.id]={id:n.id,refs:1,parts:a}}}}function p(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function v(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(l)return c;o.parentNode.removeChild(o)}if(f){var i=u++;o=s||(s=p()),t=A.bind(null,o,i,!1),n=A.bind(null,o,i,!0)}else o=p(),t=y.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}var g,m=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function A(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function y(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),d.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}]);