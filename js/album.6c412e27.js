(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["album"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?c(t):i(n(t))}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),a=r("2d00"),o=i("species");t.exports=function(t){return a>=51||!n((function(){var e=[],r=e.constructor={};return r[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,r){"use strict";var n=r("23e7"),i=r("5a34"),a=r("1d80"),o=r("ab13");n({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~String(a(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,r){var n=r("861d"),i=r("c6b6"),a=r("b622"),o=a("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),a=r("b622"),o=a("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),a=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||o(e,t,{value:a.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var o=n(e);o in t?i.f(t,o,a(0,r)):t[o]=r}},a434:function(t,e,r){"use strict";var n=r("23e7"),i=r("23cb"),a=r("a691"),o=r("50c4"),c=r("7b0b"),s=r("65f0"),u=r("8418"),f=r("1dde"),l=r("ae40"),d=f("splice"),p=l("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,m=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d||!p},{splice:function(t,e){var r,n,f,l,d,p,g=c(this),y=o(g.length),w=i(t,y),x=arguments.length;if(0===x?r=n=0:1===x?(r=0,n=y-w):(r=x-2,n=m(b(a(e),0),y-w)),y+r-n>h)throw TypeError(v);for(f=s(g,n),l=0;l<n;l++)d=w+l,d in g&&u(f,l,g[d]);if(f.length=n,r<n){for(l=w;l<y-n;l++)d=l+n,p=l+r,d in g?g[p]=g[d]:delete g[p];for(l=y;l>y-n+r;l--)delete g[l-1]}else if(r>n)for(l=y-n;l>w;l--)d=l+n-1,p=l+r-1,d in g?g[p]=g[d]:delete g[p];for(l=0;l<r;l++)g[l+w]=arguments[l+2];return g.length=y-n+r,f}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),a=r("d066"),o=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),p=r("861d"),b=r("825a"),m=r("7b0b"),h=r("fc6a"),v=r("c04e"),g=r("5c6c"),y=r("7c73"),w=r("df75"),x=r("241c"),S=r("057f"),O=r("7418"),k=r("06cf"),_=r("9bf2"),$=r("d1e7"),j=r("9112"),A=r("6eeb"),E=r("5692"),C=r("f772"),P=r("d012"),N=r("90e3"),T=r("b622"),R=r("e538"),J=r("746f"),z=r("d44e"),D=r("69f3"),F=r("b727").forEach,M=C("hidden"),I="Symbol",B="prototype",Q=T("toPrimitive"),W=D.set,q=D.getterFor(I),G=Object[B],H=i.Symbol,K=a("JSON","stringify"),L=k.f,U=_.f,V=S.f,X=$.f,Y=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),rt=E("wks"),nt=i.QObject,it=!nt||!nt[B]||!nt[B].findChild,at=c&&f((function(){return 7!=y(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=L(G,e);n&&delete G[e],U(t,e,r),n&&t!==G&&U(G,e,n)}:U,ot=function(t,e){var r=Y[t]=y(H[B]);return W(r,{type:I,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},st=function(t,e,r){t===G&&st(Z,e,r),b(t);var n=v(e,!0);return b(r),l(Y,n)?(r.enumerable?(l(t,M)&&t[M][n]&&(t[M][n]=!1),r=y(r,{enumerable:g(0,!1)})):(l(t,M)||U(t,M,g(1,{})),t[M][n]=!0),at(t,n,r)):U(t,n,r)},ut=function(t,e){b(t);var r=h(e),n=w(r).concat(bt(r));return F(n,(function(e){c&&!lt.call(r,e)||st(t,e,r[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=v(t,!0),r=X.call(this,e);return!(this===G&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,M)&&this[M][e])||r)},dt=function(t,e){var r=h(t),n=v(e,!0);if(r!==G||!l(Y,n)||l(Z,n)){var i=L(r,n);return!i||!l(Y,n)||l(r,M)&&r[M][n]||(i.enumerable=!0),i}},pt=function(t){var e=V(h(t)),r=[];return F(e,(function(t){l(Y,t)||l(P,t)||r.push(t)})),r},bt=function(t){var e=t===G,r=V(e?Z:h(t)),n=[];return F(r,(function(t){!l(Y,t)||e&&!l(G,t)||n.push(Y[t])})),n};if(s||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),r=function(t){this===G&&r.call(Z,t),l(this,M)&&l(this[M],e)&&(this[M][e]=!1),at(this,e,g(1,t))};return c&&it&&at(G,e,{configurable:!0,set:r}),ot(e,t)},A(H[B],"toString",(function(){return q(this).tag})),A(H,"withoutSetter",(function(t){return ot(N(t),t)})),$.f=lt,_.f=st,k.f=dt,x.f=S.f=pt,O.f=bt,R.f=function(t){return ot(T(t),t)},c&&(U(H[B],"description",{configurable:!0,get:function(){return q(this).description}}),o||A(G,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:H}),F(w(rt),(function(t){J(t)})),n({target:I,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=H(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),n({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(m(t))}}),K){var mt=!s||f((function(){var t=H();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));n({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,r){var n,i=[t],a=1;while(arguments.length>a)i.push(arguments[a++]);if(n=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),i[1]=e,K.apply(null,i)}})}H[B][Q]||j(H[B],Q,H[B].valueOf),z(H,I),P[M]=!0},ab13:function(t,e,r){var n=r("b622"),i=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[i]=!1,"/./"[t](e)}catch(n){}}return!1}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),a=r("5135"),o=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(a(c,t))return c[t];e||(e={});var r=[][t],u=!!a(e,"ACCESSORS")&&e.ACCESSORS,f=a(e,0)?e[0]:s,l=a(e,1)?e[1]:void 0;return c[t]=!!r&&!i((function(){if(u&&!n)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:s}):t[1]=1,r.call(t,f,l)}))}},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),a=r("7b0b"),o=r("50c4"),c=r("65f0"),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,d=7==t,p=5==t||l;return function(b,m,h,v){for(var g,y,w=a(b),x=i(w),S=n(m,h,3),O=o(x.length),k=0,_=v||c,$=e?_(b,O):r||d?_(b,0):void 0;O>k;k++)if((p||k in x)&&(g=x[k],y=S(g,k,w),t))if(e)$[k]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return k;case 2:s.call($,g)}else switch(t){case 4:return!1;case 7:s.call($,g)}return l?-1:u||f?f:$}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},caad:function(t,e,r){"use strict";var n=r("23e7"),i=r("4d64").includes,a=r("44d2"),o=r("ae40"),c=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!c},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d81d:function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").map,a=r("1dde"),o=r("ae40"),c=a("map"),s=o("map");n({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),a=r("da84"),o=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),f=a.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var p=d.prototype=f.prototype;p.constructor=d;var b=p.toString,m="Symbol(test)"==String(f("test")),h=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=b.call(t);if(o(l,t))return"";var r=m?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},ee18:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"album"}},[r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"text-center"},[t._v("我的相簿")]),r("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("b-form-group",{attrs:{id:"input-group-1",label:"圖片說明","label-for":"input-1",state:t.descState,description:"最多200個字","invalid-feedback":"格式不符"}},[r("b-form-textarea",{attrs:{id:"input-1",type:"text",placeholder:"請輸入相片說明...",state:t.descState},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),r("img-inputer",{staticClass:"mx-auto",attrs:{placeholder:"請選擇圖片","bottom-text":"點擊或拖曳更換圖片","max-size":1024,exceedSizeText:"檔案大小不能超過",accept:"image/*"},model:{value:t.image,callback:function(e){t.image=e},expression:"image"}}),r("br"),r("br"),r("b-btn",{attrs:{type:"submit",variant:"success"}},[t._v("送出")])],1)],1)],1),r("hr"),r("Photoswipe",[r("b-row",t._l(t.images,(function(e,n){return r("b-col",{key:e._id,attrs:{cols:"12",md:"60",lg:"3"}},[r("b-card",[r("b-card-img",{directives:[{name:"pswp",rawName:"v-pswp",value:e,expression:"image"}],attrs:{src:e.src}}),r("b-card-body",[e.edit?r("b-btn",{attrs:{variant:"danger"},on:{click:function(r){return t.cancel(e)}}},[t._v("取消")]):t._e(),e.edit?r("b-btn",{attrs:{variant:"success"},on:{click:function(r){return t.save(e)}}},[t._v("保存")]):t._e(),e.edit?t._e():r("b-btn",{attrs:{variant:"success"},on:{click:function(r){return t.edit(e)}}},[t._v("編輯")]),e.edit?t._e():r("b-btn",{attrs:{variant:"danger"},on:{click:function(r){return t.del(e,n)}}},[t._v("刪除")]),r("hr"),e.edit?r("b-form-textarea",{model:{value:e.model,callback:function(r){t.$set(e,"model",r)},expression:"image.model"}}):r("b-card-text",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(e.title))])],1)],1)],1)})),1)],1)],1)],1)},i=[],a=(r("a4d3"),r("e01a"),r("caad"),r("d81d"),r("a434"),r("2532"),{name:"Album",data:function(){return{image:null,description:"",images:[]}},computed:{descState:function(){return 0===this.description.length?null:!(this.description.length>200)},user:function(){return this.$store.state.user}},methods:{onSubmit:function(){var t=this;if(this.image.size>1048576)this.$swal({icon:"error",title:"錯誤",text:"圖片太大"});else if(this.image.type.includes("image")){var e=new FormData;e.append("image",this.image),e.append("description",this.description),this.axios.post("https://arubanmu.herokuapp.com/albums/",e).then((function(e){e.data.success?(e.data.result.src="https://arubanmu.herokuapp.com/albums/file/"+e.data.result.file,e.data.result.title=e.data.result.description,e.data.result.edit=!1,e.data.result.model=e.data.result.description,delete e.data.result.file,delete e.data.result.description,t.images.push(e.data.result),t.image=null,t.description=""):t.$swal({icon:"error",title:"錯誤",text:e.data.message})})).catch((function(e){t.$swal({icon:"error",title:"錯誤",text:e.response.data.message})}))}else this.$swal({icon:"error",title:"錯誤",text:"檔案格式錯誤"})},cancel:function(t){t.edit=!1,t.model=t.title},save:function(t){var e=this;this.axios.patch("https://arubanmu.herokuapp.com/albums/"+t._id,{description:t.model}).then((function(r){r.data.success?(t.edit=!1,t.title=t.model):e.$swal({icon:"error",title:"錯誤",text:r.data.message})})).catch((function(t){e.$swal({icon:"error",title:"錯誤",text:t.response.data.message})}))},edit:function(t){t.edit=!0,t.model=t.title},del:function(t,e){var r=this;this.axios.delete("https://arubanmu.herokuapp.com/albums/"+t._id).then((function(t){t.data.success?r.images.splice(e,1):r.$swal({icon:"error",title:"錯誤",text:t.data.message})})).catch((function(t){r.$swal({icon:"error",title:"錯誤",text:t.response.data.message})}))}},mounted:function(){var t=this;this.axios.get("https://arubanmu.herokuapp.com/albums/user/"+this.user.id).then((function(e){e.data.success?t.images=e.data.result.map((function(t){return t.src="https://arubanmu.herokuapp.com/albums/file/"+t.file,t.title=t.description,t.edit=!1,t.model=t.description,delete t.file,delete t.description,t})):t.$swal({icon:"error",title:"錯誤",text:e.data.message})})).catch((function(e){t.$swal({icon:"error",title:"錯誤",text:e.response.data.message})}))}}),o=a,c=r("2877"),s=Object(c["a"])(o,n,i,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=album.6c412e27.js.map