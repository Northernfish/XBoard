(function(e){function t(t){for(var a,o,c=t[0],i=t[1],u=t[2],l=0,f=[];l<c.length;l++)o=c[l],r[o]&&f.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r={app:0},s=[];function c(e){return i.p+""+({about:"about"}[e]||e)+"."+{about:"902e2c0fac696bd3f518"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"619de122"}[e]+".css",r=i.p+a,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===a||l===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete o[e],d.parentNode.removeChild(d),n(s)},d.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(d)}).then(function(){o[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e),u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");s.type=a,s.request=o,n[1](s)}r[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/XBoard/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3dfd":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},o=[],r={name:"App"},s=r,c=n("2877"),i=Object(c["a"])(s,a,o,!1,null,"07cb9d3c",null);t["a"]=i.exports},"41cb":function(e,t,n){"use strict";var a=n("2b0e"),o=n("8c4f");a["default"].use(o["a"]),t["a"]=new o["a"]({mode:"history",base:"/XBoard/",routes:[{path:"/",name:"Board",component:function(){return n.e("about").then(n.bind(null,"5d6d"))}}]})},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="4678"},"4de4":function(e,t,n){"use strict";n("7f7f");var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.type?n("span",{staticClass:"icon iconfont",class:[e.type?"icon-"+e.type:""]}):e._e()},o=[],r={name:"Icon",props:{type:String}},s=r,c=(n("f26a"),n("2877")),i=Object(c["a"])(s,a,o,!1,null,"134c9f88",null),u=i.exports,l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"tooltipBox",class:{"tooltip-box":!0,hover:e.isShow},on:{mouseover:e.handleMouseOver,mouseout:e.handleMouseOut}},[n("div",{ref:"tooltip",staticClass:"tooltip",style:e.tooltipStyle},[e._t("content",[e._v(e._s(e.content))])],2),n("div",{staticClass:"content"},[e._t("default")],2)])},f=[],d=(n("c5f6"),{name:"Tooltip",props:{content:[String,Number]},data:function(){return{isShow:!1,tooltipStyle:{}}},methods:{handleMouseOver:function(){this.isShow=!0},handleMouseOut:function(){this.isShow=!1}},mounted:function(){var e=this,t=e.$refs.tooltip,n=t.clientWidth?t.clientWidth/-2:0;n&&(e.tooltipStyle={"margin-left":n+"px"})}}),b=d,j=(n("b866"),Object(c["a"])(b,l,f,!1,null,"570be5aa",null)),p=j.exports,m="X",h={Icon:u,Tooltip:p},g={install:function(e,t){for(var n in h)n&&h[n]&&e.component("".concat(m).concat(n),h[n])}};t["a"]=g},"56d7":function(e,t,n){"use strict";n.r(t),function(e){n("cadf"),n("551c"),n("f751"),n("097d");var t=n("2b0e"),a=n("c1df"),o=n.n(a),r=n("a78e"),s=n("3dfd"),c=n("9225"),i=n("41cb"),u=n("c0d6"),l=(n("ddb8"),n("bee9")),f=n("4de4"),d=n("f121"),b=n("e069"),j=n.n(b),p=(n("dcad"),n("dbaa"),e&&!1);t["default"].config.debug=p,t["default"].config.devtools=p,t["default"].config.productionTip=p,t["default"].config.performance=p,t["default"].prototype.$X={isDev:p,utils:l["a"],config:d["a"],moment:o.a,Cookies:r};var m=Object(c["a"])(t["default"],"en-us");t["default"].use(j.a,{i18n:function(e,t){return m.t(e,t)}}),t["default"].use(f["a"]),new t["default"]({i18n:m,router:i["a"],store:u["a"],render:function(e){return e(s["a"])}}).$mount("#app")}.call(this,n("f28c"))},"594e":function(e,t,n){},9225:function(e,t,n){"use strict";n("ac6a"),n("456d");var a=n("a925"),o=n("cebc"),r=n("69c5"),s=n.n(r),c=n("9ef8"),i=n.n(c),u={L10001:"移动（V）",L10002:"Marquee（M）",L10003:"铅笔（P）",L10004:"Line（L）",L10005:"文字（T）",L10006:"橡皮擦（E）",L10007:"撤消（Ctrl + Z）",L10008:"重做（Ctrl + Shift + Z）",L10009:"上传图片（U）",L10010:"清除（C）",L10011:"下载（Ctrl + S）",L10012:"全屏",L10013:"铅笔颜色",L10014:"画布颜色",L10015:"铅笔大小",L10016:"语言",L10101:"提示",L10102:"确认清空当前画板吗？",L10103:"切换背景色将清空当前画板，确认切换？"},l={L10001:"Move (V)",L10002:"Marquee (M)",L10003:"Pencil (P)",L10004:"Line (L)",L10005:"Text (T)",L10006:"Eraser (E)",L10007:"Undo (Ctrl + Z)",L10008:"Redo (Ctrl + Shift + Z)",L10009:"Upload Image (U)",L10010:"Clear (C)",L10011:"Download (Ctrl + S)",L10012:"Full Screen",L10013:"Pencil color",L10014:"Canvas Color",L10015:"Pencil size",L10016:"Language",L10101:"Hint",L10102:"Are you sure to clear the current artboard? ",L10103:"Switching the background color will clear the current artboard, confirm the switch? "},f={label:{"zh-cn":"简体中文","en-us":"English"},icon:{"zh-cn":n("984f"),"en-us":n("d3ea")},data:{"zh-cn":Object(o["a"])({},i.a,u),"en-us":Object(o["a"])({},s.a,l)}};t["a"]=function(e,t){var n=e.prototype.$X,o=n.config,r=n.Cookies,s=o.cookie.getItem("locale"),c=r.get(s);if(!t){var i=Object.keys(f.label);t=c||i[0]}return e.use(a["a"]),e.locale=function(){},e.prototype.$X.langs=f,e.prototype.$X.locale=t,new a["a"]({locale:t,messages:f.data})}},"984f":function(e,t,n){e.exports=n.p+"img/zh-cn.da9261ef.png"},"9a15":function(e,t,n){},"9d64":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACjElEQVRoQ+1ZPW/TUBQ994WqC819EVJVsaRJGICFr50BCTGyMDAxlN/Al8o3CJXyExAdOjHwByomZgSCBZAgSbOgCgnFL2FAQHyRIyc4rZNi14kd6XlL/D7Oufdc2/c8wpRfNOX4YQmknUGbgcxmoNFuH3Vd94LruipNkEopVyn1ojg39yEMxw4JNRyn0AGeAFgCMlPkAmAtB1wpat0MEhkg8F0k7xjzloBKmlEftrcAVc188gBRqzdmgEDdmNsici+L4PuAie6UmO+HEqg5zkcAh/2bW4poqZjPbxCRmwYpEVGNVuucK7IGYMHH8Kms9ZEdBESE6sZ0eroXYLWi9bU0gG/fs+o4jwm46v8vJeYcEXl18a9IP4vM5oz5GZi8XNb6URYI1BxnGcDDHpYS8ywR/YpEwCtwY8xFETk4TlJE9JWZnwcLNRECtWbzHYiOjRN8f22R9+VC4Xjv954JiEiubsyfiYD3Nykx7yMiryaRBIGZujFdzU3qKjHPEFE3aJaAiNgMRJWelRCA/ovMSiiqfgBYCVkJxZBNcIqVkJWQlZD9mBv5Jn69n/nMPNGPUUqptdun0em8iqOmpJ9Cgw0N0a0yc79HHQbQNwpiORqJNjTdpiLQUnreUaVQuLtbZGN/QyXdUnpAg029ItpaZH5GRL9HkdhsNk90gPO7EQ3eH1tTHwVE0mP/q6UMMbZWKlrfSBpMnPWqjrNCQM9kCze2/Oa5by0K8E0RXVrM51+maS1utlpnXZF1AuZ98uHWYpeAMTch8iBOlCY2Z9sTMMxef0PAoYkBirCRAF8086mh9rq3ln/AsQrgcsYOOJ7mgOsjDziCwZjaI6YIGc3EUHvMmnYabAZsBvYYgb9su4ZP7eojSwAAAABJRU5ErkJggg=="},b866:function(e,t,n){"use strict";var a=n("9a15"),o=n.n(a);o.a},bee9:function(e,t,n){"use strict";var a=n("2b0e"),o=new a["default"],r=o,s={},c={sortByNumber:function(e,t,n){return"desc"===n?parseInt(e)<parseInt(t)?1:-1:parseInt(e)>parseInt(t)?1:-1}},i=(n("34ef"),n("28a5"),{base642Blob:function(e){for(var t=e.split(";base64,"),n=t[0].split(":")[1],a=window.atob(t[1]),o=a.length,r=new Uint8Array(o),s=0;s<o;s++)r[s]=a.charCodeAt(s);return new Blob([r],{type:n})},downloadFile:function(e,t){var n=this.base642Blob(t),a=URL.createObjectURL(n),o=document.createElement("a");o.textContent="download image",o.href=a,o.download=e,o.click(),URL.revokeObjectURL(a)}});t["a"]={bus:r,filters:s,sort:c,file:i}},c0d6:function(e,t,n){"use strict";var a=n("2b0e"),o=n("2f62");a["default"].use(o["a"]),t["a"]=new o["a"].Store({state:{},mutations:{},actions:{}})},d3ea:function(e,t,n){e.exports=n.p+"img/en-us.349a281a.png"},dbaa:function(e,t,n){},ddb8:function(e,t,n){"use strict";var a=n("9483");Object(a["a"])("".concat("/XBoard/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}})},f121:function(e,t,n){"use strict";var a={version:"1.0.0",name:"XBoard",title:"XBoard",subtitle:"XBoard",minTitle:"XBoard",logo:n("9d64"),copyright:"© 2019 OXOYO All Rights Reserved."},o={prefix:"x-board-",path:"/",items:{account:"a",token:"t",locale:"l"},unless:["locale"],getItem:function(e){return e?this.prefix+this.items[e]:""}};t["a"]={system:a,cookie:o}},f26a:function(e,t,n){"use strict";var a=n("594e"),o=n.n(a);o.a}});
//# sourceMappingURL=app.05a00695.js.map