(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BlogHome"],{"180e":function(t,s,e){"use strict";var a=e("fb42"),i=e.n(a);i.a},"32e8":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"blog-home"}},[e("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap",rel:"stylesheet"}}),e("b-container",{staticClass:"bv-example-row"},[e("b-row",[e("b-col",[e("h3",[t._v(t._s(t.page_title))])])],1),e("b-row",[e("b-col",t._l(t.posts,(function(s,a){return e("b-container",{key:s.slug+"_"+a,staticClass:"mains",attrs:{fluid:""}},[e("router-link",{attrs:{to:"/blog/"+s.slug}},[e("article",{staticClass:"media"},[e("ul",[e("li",[e("figure",[s.featured_image?e("img",{staticClass:"img",attrs:{src:s.featured_image,alt:""}}):e("img",{attrs:{src:"http://via.placeholder.com/250x250",alt:""}})]),e("h2",{staticClass:"title"},[t._v(t._s(s.title))])])])])])],1)})),1)],1)],1)],1)},i=[],o=e("7731"),l={name:"blog-home",data:function(){return{page_title:"Check out my Blog Posts",posts:[]}},methods:{getPosts:function(){var t=this;o["a"].post.list({page:1,page_size:10}).then((function(s){t.posts=s.data.data}))}},created:function(){this.getPosts()}},n=l,r=(e("180e"),e("2877")),c=Object(r["a"])(n,a,i,!1,null,"511ca98f",null);s["default"]=c.exports},fb42:function(t,s,e){}}]);
//# sourceMappingURL=BlogHome.44239542.js.map