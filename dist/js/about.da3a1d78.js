(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"00b4":function(t,e,n){"use strict";n("ac1f");var r=n("23e7"),i=n("da84"),o=n("c65b"),a=n("e330"),c=n("1626"),u=n("861d"),s=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),l=i.Error,f=a(/./.test);r({target:"RegExp",proto:!0,forced:!s},{test:function(t){var e=this.exec;if(!c(e))return f(this,t);var n=o(e,this,t);if(null!==n&&!u(n))throw new l("RegExp exec method returned something other than an Object or null");return!!n}})},"057f":function(t,e,n){var r=n("c6b6"),i=n("fc6a"),o=n("241c").f,a=n("f36a"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(e){return a(c)}};t.exports.f=function(t){return c&&"Window"==r(t)?u(t):o(i(t))}},"0b42":function(t,e,n){var r=n("da84"),i=n("e8b5"),o=n("68ee"),a=n("861d"),c=n("b622"),u=c("species"),s=r.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,o(e)&&(e===s||i(e.prototype))?e=void 0:a(e)&&(e=e[u],null===e&&(e=void 0))),void 0===e?s:e}},"107c":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),a=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"33c0":function(t,e,n){},"428f":function(t,e,n){var r=n("da84");t.exports=r},"4df4":function(t,e,n){"use strict";var r=n("da84"),i=n("0366"),o=n("c65b"),a=n("7b0b"),c=n("9bdd"),u=n("e95a"),s=n("68ee"),l=n("07fa"),f=n("8418"),h=n("9a1f"),d=n("35a1"),v=r.Array;t.exports=function(t){var e=a(t),n=s(this),r=arguments.length,p=r>1?arguments[1]:void 0,y=void 0!==p;y&&(p=i(p,r>2?arguments[2]:void 0));var g,b,m,x,w,O,k=d(e),j=0;if(!k||this==v&&u(k))for(g=l(e),b=n?new this(g):v(g);g>j;j++)O=y?p(e[j],j):e[j],f(b,j,O);else for(x=h(e,k),w=x.next,b=n?new this:[];!(m=o(w,x)).done;j++)O=y?c(x,p,[m.value,j],!0):m.value,f(b,j,O);return b.length=j,b}},"610f":function(t,e,n){"use strict";n("33c0")},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),i=n("1a2d"),o=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?i.f(t,a,o(0,n)):t[a]=n}},9263:function(t,e,n){"use strict";var r=n("c65b"),i=n("e330"),o=n("577e"),a=n("ad6d"),c=n("9f7f"),u=n("5692"),s=n("7c73"),l=n("69f3").get,f=n("fce3"),h=n("107c"),d=u("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,p=v,y=i("".charAt),g=i("".indexOf),b=i("".replace),m=i("".slice),x=function(){var t=/a/,e=/b*/g;return r(v,t,"a"),r(v,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),w=c.UNSUPPORTED_Y||c.BROKEN_CARET,O=void 0!==/()??/.exec("")[1],k=x||O||w||f||h;k&&(p=function(t){var e,n,i,c,u,f,h,k=this,j=l(k),T=o(t),E=j.raw;if(E)return E.lastIndex=k.lastIndex,e=r(p,E,T),k.lastIndex=E.lastIndex,e;var L=j.groups,I=w&&k.sticky,S=r(a,k),P=k.source,M=0,R=T;if(I&&(S=b(S,"y",""),-1===g(S,"g")&&(S+="g"),R=m(T,k.lastIndex),k.lastIndex>0&&(!k.multiline||k.multiline&&"\n"!==y(T,k.lastIndex-1))&&(P="(?: "+P+")",R=" "+R,M++),n=new RegExp("^(?:"+P+")",S)),O&&(n=new RegExp("^"+P+"$(?!\\s)",S)),x&&(i=k.lastIndex),c=r(v,I?n:k,R),I?c?(c.input=m(c.input,M),c[0]=m(c[0],M),c.index=k.lastIndex,k.lastIndex+=c[0].length):k.lastIndex=0:x&&c&&(k.lastIndex=k.global?c.index+c[0].length:i),O&&c&&c.length>1&&r(d,c[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)})),c&&L)for(c.groups=f=s(null),u=0;u<L.length;u++)h=L[u],f[h[0]]=c[h[1]];return c}),t.exports=p},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(R){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=T(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(R){return{type:"throw",arg:R}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",v="completed",p={};function y(){}function g(){}function b(){}var m={};u(m,o,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(P([])));w&&w!==n&&r.call(w,o)&&(m=w);var O=b.prototype=y.prototype=Object.create(m);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(i,o,a,c){var u=l(t[i],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function T(t,e,n){var r=f;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return M()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?v:h,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:M}}function M(){return{value:e,done:!0}}return g.prototype=b,u(O,"constructor",b),u(b,"constructor",g),g.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},k(j.prototype),u(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new j(s(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(O),u(O,c,"Generator"),u(O,o,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;I(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(a){i(t,"throw",a)}}},"9f7f":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),a=n("2ba4"),c=n("c65b"),u=n("e330"),s=n("c430"),l=n("83ab"),f=n("4930"),h=n("d039"),d=n("1a2d"),v=n("e8b5"),p=n("1626"),y=n("861d"),g=n("3a9b"),b=n("d9b5"),m=n("825a"),x=n("7b0b"),w=n("fc6a"),O=n("a04b"),k=n("577e"),j=n("5c6c"),T=n("7c73"),E=n("df75"),L=n("241c"),I=n("057f"),S=n("7418"),P=n("06cf"),M=n("9bf2"),R=n("d1e7"),A=n("f36a"),_=n("6eeb"),N=n("5692"),B=n("f772"),C=n("d012"),F=n("90e3"),G=n("b622"),U=n("e538"),Y=n("746f"),$=n("d44e"),J=n("69f3"),q=n("b727").forEach,D=B("hidden"),K="Symbol",V="prototype",X=G("toPrimitive"),z=J.set,Q=J.getterFor(K),W=Object[V],H=i.Symbol,Z=H&&H[V],tt=i.TypeError,et=i.QObject,nt=o("JSON","stringify"),rt=P.f,it=M.f,ot=I.f,at=R.f,ct=u([].push),ut=N("symbols"),st=N("op-symbols"),lt=N("string-to-symbol-registry"),ft=N("symbol-to-string-registry"),ht=N("wks"),dt=!et||!et[V]||!et[V].findChild,vt=l&&h((function(){return 7!=T(it({},"a",{get:function(){return it(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=rt(W,e);r&&delete W[e],it(t,e,n),r&&t!==W&&it(W,e,r)}:it,pt=function(t,e){var n=ut[t]=T(Z);return z(n,{type:K,tag:t,description:e}),l||(n.description=e),n},yt=function(t,e,n){t===W&&yt(st,e,n),m(t);var r=O(e);return m(n),d(ut,r)?(n.enumerable?(d(t,D)&&t[D][r]&&(t[D][r]=!1),n=T(n,{enumerable:j(0,!1)})):(d(t,D)||it(t,D,j(1,{})),t[D][r]=!0),vt(t,r,n)):it(t,r,n)},gt=function(t,e){m(t);var n=w(e),r=E(n).concat(Ot(n));return q(r,(function(e){l&&!c(mt,n,e)||yt(t,e,n[e])})),t},bt=function(t,e){return void 0===e?T(t):gt(T(t),e)},mt=function(t){var e=O(t),n=c(at,this,e);return!(this===W&&d(ut,e)&&!d(st,e))&&(!(n||!d(this,e)||!d(ut,e)||d(this,D)&&this[D][e])||n)},xt=function(t,e){var n=w(t),r=O(e);if(n!==W||!d(ut,r)||d(st,r)){var i=rt(n,r);return!i||!d(ut,r)||d(n,D)&&n[D][r]||(i.enumerable=!0),i}},wt=function(t){var e=ot(w(t)),n=[];return q(e,(function(t){d(ut,t)||d(C,t)||ct(n,t)})),n},Ot=function(t){var e=t===W,n=ot(e?st:w(t)),r=[];return q(n,(function(t){!d(ut,t)||e&&!d(W,t)||ct(r,ut[t])})),r};if(f||(H=function(){if(g(Z,this))throw tt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?k(arguments[0]):void 0,e=F(t),n=function(t){this===W&&c(n,st,t),d(this,D)&&d(this[D],e)&&(this[D][e]=!1),vt(this,e,j(1,t))};return l&&dt&&vt(W,e,{configurable:!0,set:n}),pt(e,t)},Z=H[V],_(Z,"toString",(function(){return Q(this).tag})),_(H,"withoutSetter",(function(t){return pt(F(t),t)})),R.f=mt,M.f=yt,P.f=xt,L.f=I.f=wt,S.f=Ot,U.f=function(t){return pt(G(t),t)},l&&(it(Z,"description",{configurable:!0,get:function(){return Q(this).description}}),s||_(W,"propertyIsEnumerable",mt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:H}),q(E(ht),(function(t){Y(t)})),r({target:K,stat:!0,forced:!f},{for:function(t){var e=k(t);if(d(lt,e))return lt[e];var n=H(e);return lt[e]=n,ft[n]=e,n},keyFor:function(t){if(!b(t))throw tt(t+" is not a symbol");if(d(ft,t))return ft[t]},useSetter:function(){dt=!0},useSimple:function(){dt=!1}}),r({target:"Object",stat:!0,forced:!f,sham:!l},{create:bt,defineProperty:yt,defineProperties:gt,getOwnPropertyDescriptor:xt}),r({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:wt,getOwnPropertySymbols:Ot}),r({target:"Object",stat:!0,forced:h((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(x(t))}}),nt){var kt=!f||h((function(){var t=H();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));r({target:"JSON",stat:!0,forced:kt},{stringify:function(t,e,n){var r=A(arguments),i=e;if((y(e)||void 0!==t)&&!b(t))return v(e)||(e=function(t,e){if(p(i)&&(e=c(i,this,t,e)),!b(e))return e}),r[1]=e,a(nt,null,r)}})}if(!Z[X]){var jt=Z.valueOf;_(Z,X,(function(t){return c(jt,this)}))}$(H,K),C[D]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),a=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:a},{from:i})},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("e330"),a=n("9bf2").f,c=Function.prototype,u=o(c.toString),s=/^\s*function ([^ (]*)/,l=o(s.exec),f="name";r&&!i&&a(c,f,{configurable:!0,get:function(){try{return l(s,u(this))[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("0366"),i=n("e330"),o=n("44ad"),a=n("7b0b"),c=n("07fa"),u=n("65f0"),s=i([].push),l=function(t){var e=1==t,n=2==t,i=3==t,l=4==t,f=6==t,h=7==t,d=5==t||f;return function(v,p,y,g){for(var b,m,x=a(v),w=o(x),O=r(p,y),k=c(w),j=0,T=g||u,E=e?T(v,k):n||h?T(v,0):void 0;k>j;j++)if((d||j in w)&&(b=w[j],m=O(b,j,x),t))if(e)E[j]=m;else if(m)switch(t){case 3:return!0;case 5:return b;case 6:return j;case 2:s(E,b)}else switch(t){case 4:return!1;case 7:s(E,b)}return f?-1:i||l?l:E}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},d28b:function(t,e,n){var r=n("746f");r("iterator")},d6dd:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),i={class:"boardBorder"},o={class:"board"},a=["id","onClick"],c=["src","id"];function u(t,e,n,u,s,l){return Object(r["r"])(),Object(r["e"])("div",i,[Object(r["f"])("table",o,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(s.totalTiles,(function(t){return Object(r["r"])(),Object(r["e"])("tr",{key:t,class:"row"},[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(s.totalTiles,(function(e){return Object(r["r"])(),Object(r["e"])("td",{key:e,id:"tile"+s.getIndex(t,e),onClick:function(n){return s.selectedTile=s.selected(t,e,s.pieceLocation,s.selectedTile)},class:"column"},[Object(r["f"])("div",{class:Object(r["n"])({active:s.getIndex(t,e)==s.selectedTile})},[s.pieceLocation[s.getIndex(t,e)]?(Object(r["r"])(),Object(r["e"])("img",{key:0,src:s.getPiece(t,e,s.pieceLocation),id:"img"+s.getIndex(t,e)},null,8,c)):Object(r["d"])("",!0)],2)],8,a)})),128))])})),128))])])}n("d3b7");function s(t,e,n,r,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,i)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){s(o,r,i,a,c,"next",t)}function c(t){s(o,r,i,a,c,"throw",t)}a(void 0)}))}}n("96cf");function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(t){if(Array.isArray(t))return f(t)}n("a4d3"),n("e01a"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function d(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n("fb6a"),n("b0c0"),n("ac1f"),n("00b4");function v(t,e){if(t){if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(t){return h(t)||d(t)||v(t)||p()}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e,n){return e&&b(t.prototype,e),n&&b(t,n),t}var x=function(){function t(e,n){g(this,t),this.org=e,this.final=n,this.piece=e["piece"],this.xo=e["loc"][1],this.xf=n["loc"][1],this.xd=this.xf-this.xo,this.yo=e["loc"][0],this.yf=n["loc"][0],this.yd=this.yf-this.yo}return m(t,[{key:"getMovementRules",value:function(){if(this.org["player"]==this.final["player"])return console.log("same player piece"),this.valid=!1;switch(this.piece){case"knight":this.knightMovement();break;case"rook":this.rookMovement();break;case"bishop":this.bishopMovement();break;case"queen":this.queenMovement();break;case"king":this.kingMovement();break;case"pawn":this.pawnMovement();break;default:return console.log("Somethinga wenta wronga"),this.valid=!1}return this.valid}},{key:"invalid",value:function(){return console.log("invalid move"),this.valid=!1}},{key:"knightMovement",value:function(){if(Math.abs(this.xd)+Math.abs(this.yd)==3&&1==Math.abs(Math.abs(this.xd)-Math.abs(this.yd)))return this.valid=!0;this.invalid()}},{key:"bishopMovement",value:function(){if(Math.abs(this.xd)==Math.abs(this.yd))return this.valid=!0;this.invalid()}},{key:"rookMovement",value:function(){if(0==this.xd&&0!=this.yd||0==this.yd&&0!=this.xd)return this.valid=!0;this.invalid()}},{key:"queenMovement",value:function(){if(this.bishopMovement()||this.rookMovement())return this.valid=!0;this.invalid()}},{key:"kingMovement",value:function(){if((1==Math.abs(this.xd)||1==Math.abs(this.yd))&&(this.bishopMovement()||this.rookMovement()))return this.valid=!0;this.invalid()}},{key:"pawnMovement",value:function(){if("b"==this.org["player"]&&(1==this.yd&&0==this.xd||2==this.yo&&2==this.yd)||"w"==this.org["player"]&&(-1==this.yd&&0==this.xd||7==this.yo&&-2==this.yd))return this.valid=!0;this.invalid()}}]),t}(),w=function(){function t(){g(this,t),self=this,this.pieceLocation=[{}],this.totalTiles=this.buildBoard(),this.selectedTile=65,this.currentTurn="w"}return m(t,[{key:"setPieceLoc",value:function(t){return this.pieceLocation=t,self}},{key:"changeTurn",value:function(){return"w"==this.currentTurn?(this.currentTurn="b",console.log("turn is black"),this):"b"==this.currentTurn?(this.currentTurn="w",console.log("turn is white"),this):void console.log("Turn has error")}},{key:"buildBoard",value:function(){return this.totalTiles=y(Array(9).keys()),self.totalTiles.shift(),this.totalTiles}},{key:"getIndex",value:function(t,e){var n=8*(t-1)+e-1;return n}},{key:"getPiece",value:function(t,e,n){var r=self.getIndex(t,e);if(void 0!=n[r]){var i="https://chessapp.s3.us-west-2.amazonaws.com/"+n[r]["player"]+n[r]["piece"]+".png";return i}console.log("page loading")}},{key:"selected",value:function(t,e,n){var r=this,i=self.getIndex(t,e);if(65!=this.selectedTile&&self.isValid(this.selectedTile,n,i)){var o=this.selectedTile,a=function(t){return new Promise((function(e){return setTimeout(e,t)}))},c=function(){var t=l(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return self.animatePiece(r.selectedTile,i),t.next=3,a(750);case 3:r.selectedTile=o,document.getElementById("img"+r.selectedTile).style.transform=null,n[i]["piece"]=n[r.selectedTile]["piece"],n[i]["player"]=n[r.selectedTile]["player"],n[r.selectedTile]["piece"]="none",n[r.selectedTile]["player"]="";case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c(),void self.changeTurn()}if("none"!=n[i]["piece"])return this.selectedTile=i,this.selectedTile}},{key:"isValid",value:function(t,e,n){return null!=t&&n!=t&&1==new x(e[t],e[n]).getMovementRules()&&e[t]["player"]==this.currentTurn&&("knight"==e[t]["piece"]||1==self.checkPath(e[t],e[n]))}},{key:"animatePiece",value:function(t,e){var n=document.getElementById("tile"+e).getBoundingClientRect(),r=document.getElementById("img"+t);r.style.transform="translateY("+(n["y"]-r.getBoundingClientRect()["y"]+1)+"px)",r.style.transform+="translateX("+(n["x"]-r.getBoundingClientRect()["x"]+2.5)+"px)"}},{key:"checkPath",value:function(t,e){var n=t["loc"][0],r=t["loc"][1],i=n-e["loc"][0]>0,o=!0,a=e["loc"][1]-r>0,c=n-e["loc"][0]==0,u=e["loc"][1]-r==0,s=!0;while(0==(n==e["loc"][0]&&r==e["loc"][1])){var l=self.getIndex(n,r);if(1!=i||c||n--,0!=i||c||n++,1!=a||u||r++,0!=a||u||r--,"none"!=this.pieceLocation[l]["piece"]&&0==s)return console.log("piece is in the way"),!1;s=!1}return o}}]),t}(),O=function(){var t=l(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:8082/board");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=new w,j={data:function(){return{pieceLocation:k.pieceLocation,totalTiles:k.totalTiles,selectedTile:k.selectedTile,getIndex:k.getIndex.bind({}),getPiece:k.getPiece.bind({}),selected:k.selected.bind({})}},mounted:function(){var t=this;O().then((function(e){k.setPieceLoc(e),t.pieceLocation=k.pieceLocation}))}},T=n("6b0d"),E=n.n(T);const L=E()(j,[["render",u]]);var I=L,S={class:"chess"},P={setup:function(t){return function(t,e){return Object(r["r"])(),Object(r["e"])("div",S,[Object(r["h"])(I)])}}};n("610f");const M=P;e["default"]=M},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),a=n("e330"),c=n("1a2d"),u=n("1626"),s=n("3a9b"),l=n("577e"),f=n("9bf2").f,h=n("e893"),d=o.Symbol,v=d&&d.prototype;if(i&&u(d)&&(!("description"in v)||void 0!==d().description)){var p={},y=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=s(v,this)?new d(t):void 0===t?d():d(t);return""===t&&(p[e]=!0),e};h(y,d),y.prototype=v,v.constructor=y;var g="Symbol(test)"==String(d("test")),b=a(v.toString),m=a(v.valueOf),x=/^Symbol\((.*)\)[^)]+$/,w=a("".replace),O=a("".slice);f(v,"description",{configurable:!0,get:function(){var t=m(this),e=b(t);if(c(p,t))return"";var n=g?O(e,7,-1):w(e,x,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:y})}},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f820:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),i={class:"about"},o=Object(r["f"])("h1",null,"This is an about page",-1),a=[o];function c(t,e){return Object(r["r"])(),Object(r["e"])("div",i,a)}var u=n("6b0d"),s=n.n(u);const l={},f=s()(l,[["render",c]]);e["default"]=f},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("e8b5"),a=n("68ee"),c=n("861d"),u=n("23cb"),s=n("07fa"),l=n("fc6a"),f=n("8418"),h=n("b622"),d=n("1dde"),v=n("f36a"),p=d("slice"),y=h("species"),g=i.Array,b=Math.max;r({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var n,r,i,h=l(this),d=s(h),p=u(t,d),m=u(void 0===e?d:e,d);if(o(h)&&(n=h.constructor,a(n)&&(n===g||o(n.prototype))?n=void 0:c(n)&&(n=n[y],null===n&&(n=void 0)),n===g||void 0===n))return v(h,p,m);for(r=new(void 0===n?g:n)(b(m-p,0)),i=0;p<m;p++,i++)p in h&&f(r,i,h[p]);return r.length=i,r}})},fce3:function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=about.da3a1d78.js.map