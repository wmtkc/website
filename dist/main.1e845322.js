!function(e){function n(n){for(var r,i,s=n[0],c=n[1],l=n[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(n);f.length;)f.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,s=1;s<t.length;s++){var c=t[s];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={1:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=o[e]=[n,r]});n.push(t[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+"templates/"+({2:"src/containers/BlogPost",3:"src/pages/404",4:"src/pages/about",5:"src/pages/blog",6:"src/pages/index",8:"vendors~src/containers/BlogPost"}[e]||e)+"."+{2:"a730b856",3:"21da474f",4:"51f90028",5:"78c3745b",6:"8c84de05",8:"f5f72f8d"}[e]+".js"}(e);var c=new Error;a=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,t[1](c)}o[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var u=c;a.push([64,0,7]),t()}({115:function(e,n,t){var r={".":12,"./":12,"./index":12,"./index.js":12};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=115},122:function(e,n,t){"use strict";t.r(n),function(e){var r=t(0),o=t.n(r),a=t(35),i=t.n(a),s=t(57),c=t(18);if(n.default=c.a,"undefined"!=typeof document){var l=document.getElementById("root"),u=l.hasChildNodes()?i.a.hydrate:i.a.render,d=function(e){u(o.a.createElement(s.AppContainer,null,o.a.createElement(e,null)),l)};d(c.a),e&&e.hot&&e.hot.accept("./App",function(){d(c.a)}),window.netlifyIdentity&&window.netlifyIdentity.on("init",function(e){e||window.netlifyIdentity.on("login",function(){document.location.href="/admin/"})})}}.call(this,t(123)(e))},18:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(15),i=t(19),s=t.n(i),c=t(20),l=t.n(c),u=t(21),d=t.n(u),f=t(22),p=t.n(f),m=t(24),g=t.n(m),h=t(23),v=t.n(h),b=t(25),y=t.n(b),j=t(13),E=(t(127),function(e){function n(){var e;return s()(this,n),e=d()(this,p()(n).call(this)),y()(g()(e),"toggleExtended",function(){e.setState({extended:!e.state.extended})}),e.state={extended:!0},e}return v()(n,e),l()(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"nav-wrapper"},o.a.createElement("div",{className:this.state.extended?"navbar":"collapsed"},o.a.createElement("div",{className:"icon desktop-only"}),o.a.createElement("div",null,o.a.createElement(j.NavLink,{exact:!0,to:"/"},"Home"),o.a.createElement(j.NavLink,{to:"/blog"},"Blog"),o.a.createElement(j.NavLink,{to:"/about"},"About")),o.a.createElement("div",{className:"icon desktop-only"})),o.a.createElement("div",{className:"menu-toggle",onClick:this.toggleExtended},"☰"))}}]),n}(o.a.Component));t(128),n.a=function(){return o.a.createElement(a.Root,null,o.a.createElement(E,null),o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"content-wrapper"},o.a.createElement(o.a.Suspense,{fallback:o.a.createElement("em",null,"Loading...")},o.a.createElement(a.Routes,null)))))}},37:function(e,n,t){"use strict";t.r(n);var r=t(55),o=[{location:"../node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"../node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"../node_modules/react-static-plugin-react-router",plugins:[],hooks:t.n(r)()({})},{location:"..",plugins:[],hooks:{}}];n.default=o},54:function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"notFoundTemplate",function(){return v});var r=t(4),o=t.n(r),a=t(5),i=t.n(a),s=t(0),c=t.n(s),l=t(6),u=t.n(l);Object(l.setHasBabelPlugin)();var d={loading:function(){return null},error:function(e){return console.error(e.error),c.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},f=u()(i()({id:"../src/pages/404.js",load:function(){return Promise.all([Promise.all([t.e(0),t.e(3)]).then(t.bind(null,58))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/404.js")},resolve:function(){return 58},chunkName:function(){return"src/pages/404"}}),d);f.template="../src/pages/404.js";var p=u()(i()({id:"../src/pages/about.js",load:function(){return Promise.all([Promise.all([t.e(0),t.e(4)]).then(t.bind(null,60))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/about.js")},resolve:function(){return 60},chunkName:function(){return"src/pages/about"}}),d);p.template="../src/pages/about.js";var m=u()(i()({id:"../src/pages/blog.js",load:function(){return Promise.all([Promise.all([t.e(0),t.e(5)]).then(t.bind(null,63))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/blog.js")},resolve:function(){return 63},chunkName:function(){return"src/pages/blog"}}),d);m.template="../src/pages/blog.js";var g=u()(i()({id:"../src/pages/index.js",load:function(){return Promise.all([Promise.all([t.e(0),t.e(6)]).then(t.bind(null,61))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/index.js")},resolve:function(){return 61},chunkName:function(){return"src/pages/index"}}),d);g.template="../src/pages/index.js";var h=u()(i()({id:"../src/containers/BlogPost",load:function(){return Promise.all([Promise.all([t.e(0),t.e(8),t.e(2)]).then(t.bind(null,62))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/containers/BlogPost")},resolve:function(){return 62},chunkName:function(){return"src/containers/BlogPost"}}),d);h.template="../src/containers/BlogPost",n.default={"../src/pages/404.js":f,"../src/pages/about.js":p,"../src/pages/blog.js":m,"../src/pages/index.js":g,"../src/containers/BlogPost":h};var v="../src/pages/404.js"}.call(this,"/")},64:function(e,n,t){t(65),t(113),e.exports=t(119)}});