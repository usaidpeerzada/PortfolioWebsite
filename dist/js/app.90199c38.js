(function(t){function e(e){for(var o,n,l=e[0],i=e[1],c=e[2],u=0,f=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,n=1;n<a.length;n++){var l=a[n];0!==r[l]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},n={app:0},r={app:0},s=[];function l(t){return i.p+"js/"+({"BlogHome~BlogPost":"BlogHome~BlogPost",BlogHome:"BlogHome",BlogPost:"BlogPost",NotFound:"NotFound",Projects:"Projects"}[t]||t)+"."+{"BlogHome~BlogPost":"ad4003d8",BlogHome:"5bb4ec0d",BlogPost:"8dd1fb8a",NotFound:"445b962b",Projects:"feece735"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={BlogHome:1,BlogPost:1,NotFound:1,Projects:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var o="css/"+({"BlogHome~BlogPost":"BlogHome~BlogPost",BlogHome:"BlogHome",BlogPost:"BlogPost",NotFound:"NotFound",Projects:"Projects"}[t]||t)+"."+{"BlogHome~BlogPost":"31d6cfe0",BlogHome:"5617d41b",BlogPost:"2528face",NotFound:"c0171ff8",Projects:"7e86ce6b"}[t]+".css",r=i.p+o,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var c=s[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===r))return e()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){c=f[l],u=c.getAttribute("data-href");if(u===o||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete n[t],d.parentNode.removeChild(d),a(s)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){n[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise((function(e,a){o=r[t]=[e,a]}));e.push(o[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=l(t);var f=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",f.name="ChunkLoadError",f.type=o,f.request=n,a[1](f)}r[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1ca7":function(t,e,a){"use strict";var o=a("5549"),n=a.n(o);n.a},"2e93":function(t,e){},"4be6":function(t,e,a){},"53a4":function(t,e,a){},5549:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("NavBar")],1),a("router-view"),a("Footer")],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space"},[a("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Unica+One&display=swap",rel:"stylesheet"}}),a("div",[a("b-navbar",{staticClass:"navbar",attrs:{toggleable:"lg",type:"dark"}},[a("b-navbar-brand",{staticClass:"brand font-weight-bold",attrs:{href:"/"}},[t._v("Usaid Peerzada")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{staticClass:"font-weight-bold",attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{href:"/"}},[t._v("Home")]),a("b-nav-item",{attrs:{href:"/projects"}},[t._v("Projects")]),a("b-nav-item",{attrs:{href:"/blog"}},[t._v("Blog")])],1)],1)],1)],1)])},l=[],i={},c=i,u=(a("fa15"),a("2877")),f=Object(u["a"])(c,s,l,!1,null,"abf03df4",null),d=f.exports,m=a("fd2d"),p={components:{NavBar:d,Footer:m["default"]}},g=p,v=(a("dd88"),Object(u["a"])(g,n,r,!1,null,"24e4b6c8",null)),b=v.exports,h=(a("d3b7"),a("8c4f")),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Alegreya&family=Alegreya+Sans&family=Bungee&family=Merriweather&family=Merriweather+Sans&family=Nunito&family=Nunito+Sans:wght@400;900&family=Quattrocento&family=Quattrocento+Sans&family=Roboto&family=Roboto+Mono&family=Roboto+Slab&display=swap",rel:"stylesheet"}}),o("div",{staticClass:"container mx-auto home-div text-center"},[o("div",{staticClass:"md:flex center "},[o("div",{staticClass:"md:flex-shrink-0"},[o("img",{staticClass:"rounded-lg md:w-56",attrs:{src:a("6f50"),alt:"avatar"}})]),o("div",{staticClass:"mt-4 md:mt-0 md:ml-6 p-4"},[o("div",{staticClass:"uppercase tracking-wide text-sm text-gray-200 font-bold"},[t._v(" Hi, I'm Usaid ")]),o("a",{staticClass:"block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline",attrs:{href:"#"}},[t._v("I'm a Full Stack Developer")]),o("p",{staticClass:"mt-2 text-gray-200 text-md -mx-12"},[t._v(" I love my laptop and coffee, passionate about coding and learning new things, somedays I click pictures of beautiful nature. ")])])])]),o("div",{staticClass:"home-div-bottom"},[o("div",{staticClass:"flex flex-row justify-center"},[o("div",{staticClass:"text-gray-700 text-center px-1 py-2 m-2"},[o("a",{attrs:{href:"https://www.twitter.com/Usaidamin",target:"_blank"}},[o("i",{staticClass:"fab fa-2x fa-twitter"})])]),o("div",{staticClass:"text-gray-700 text-center px-1 py-2 m-2"},[o("a",{staticClass:"social",attrs:{href:"https://www.github.com/usaidpeerzada",target:"_blank"}},[o("i",{staticClass:"fab fa-2x fa-github"})])]),o("div",{staticClass:"text-gray-700 text-center px-1 py-2 m-2"},[o("a",{attrs:{href:"tel:+918825014161",target:"_blank"}},[o("i",{staticClass:"fab fa-2x fa-whatsapp"})])]),o("div",{staticClass:"text-gray-700 text-center px-1 py-2 m-2"},[o("a",{attrs:{href:"https://t.me/usaidev",target:"_blank"}},[o("i",{staticClass:"fab fa-2x fa-telegram"})])]),o("div",{staticClass:"text-gray-700 text-center px-1 py-2 m-2"},[o("a",{attrs:{href:"mailto:usaidpeerzada@gmail.com",target:"_blank"}},[o("i",{staticClass:"fas fa-2x fa-envelope"})])]),o("div",{staticClass:"text-gray-700 text-center px-1 py-2 m-2"},[o("a",{attrs:{href:"https://dev.to/usaidpeerzada",target:"_blank"}},[o("i",{staticClass:"fab fa-2x fa-dev"})])])])])])}],w={data:function(){return{hover:!1}}},B=w,P=(a("1ca7"),Object(u["a"])(B,y,x,!1,null,"0602f3b7",null)),_=P.exports;o["default"].use(h["a"]);var C=[{path:"/",name:"Home",component:_},{path:"/projects",name:"Projects",component:function(){return a.e("Projects").then(a.bind(null,"acca"))}},{path:"/blog/",name:"blog-home",component:function(){return Promise.all([a.e("BlogHome~BlogPost"),a.e("BlogHome")]).then(a.bind(null,"32e8"))}},{path:"/blog/:slug",name:"blog-post",component:function(){return Promise.all([a.e("BlogHome~BlogPost"),a.e("BlogPost")]).then(a.bind(null,"6b0f"))}},{path:"*",name:"NotFound",component:function(){return a.e("NotFound").then(a.bind(null,"9703"))}}],j=new h["a"]({mode:"history",routes:C}),k=j,H=a("2f62");o["default"].use(H["a"]);var N=new H["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=a("5f5b");a("f9e3"),a("2dd8"),a("15f5"),a("7051"),a("def6");a("ed18").config(),o["default"].config.productionTip=!1,o["default"].use(O["a"]),new o["default"]({router:k,store:N,render:function(t){return t(b)}}).$mount("#app")},"67c3":function(t,e,a){"use strict";var o=a("b6d0"),n=a.n(o);n.a},"6f50":function(t,e,a){t.exports=a.p+"img/usaid.72e3327b.png"},"716c":function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return n}));var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("footer",[a("p",[a("b",[t._v("USAID")]),t._v(" © 2020")])])])}]},"94d4":function(t,e,a){"use strict";var o=a("2e93"),n=a.n(o);e["default"]=n.a},b6d0:function(t,e,a){},dd88:function(t,e,a){"use strict";var o=a("4be6"),n=a.n(o);n.a},def6:function(t,e,a){},fa15:function(t,e,a){"use strict";var o=a("53a4"),n=a.n(o);n.a},fd2d:function(t,e,a){"use strict";var o=a("716c"),n=a("94d4"),r=(a("67c3"),a("2877")),s=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,"be618788",null);e["default"]=s.exports}});
//# sourceMappingURL=app.90199c38.js.map