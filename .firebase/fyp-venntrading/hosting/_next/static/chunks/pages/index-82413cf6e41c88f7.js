(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},6840:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(1799),i=n(9396),l=n(9534),a=n(5893),u=n(7183),s=n(5105),o=u.Z.Header;function d(e){var t=e.style,n=e.children,u=(0,l.Z)(e,["style","children"]),d=(0,s.E)().currentTheme;return(0,a.jsx)(o,(0,i.Z)((0,r.Z)({},u),{style:(0,r.Z)({padding:0,height:"auto",backgroundColor:"light"==d?"inherit":null},void 0===t?{}:t),children:n}))}},1293:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1799),i=n(5893),l=n(7306),a=n(5675),u=n.n(a),s=n(1363);function o(e){var t=e.style,n=e.width,a=e.height,o=e.level,d=e.className;return(0,i.jsxs)("div",{className:d,style:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(u(),{src:s.JV,height:a,width:n}),(0,i.jsx)(l.Z.Title,{level:o,style:(0,r.Z)({margin:0,marginLeft:"5px"},t),children:"VennTrading"})]})}},9475:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(5893),i=n(2806),l=n(3013),a=n(1973),u=n(2443),s=n(3253),o=n(7547),d=n(4594),c=n(5105),f=function(){var e=(0,c.E)(),t=e.switcher,n=e.themes,i=e.currentTheme;return(0,r.jsx)(d.Z,{checkedChildren:"Dark",unCheckedChildren:"Light",checked:"dark"==i,onClick:function(e){t({theme:e?n.dark:n.light})}})},h=n(1664),p=n.n(h);function m(e){var t=e.children,n=e.onClick;return(0,r.jsx)(i.Z,{type:"text",size:"small",onClick:n,children:t})}function y(){var e=(0,a.a)(),t=e.isAuthenticated,n=e.logout,d=[{key:"1",label:(0,r.jsxs)(m,{onClick:n,children:[(0,r.jsx)(u.Z,{style:{marginRight:"5px"}}),"Logout"]})}],c=[{key:"1",label:(0,r.jsx)(p(),{href:"/login",children:(0,r.jsxs)(m,{type:"text",children:[(0,r.jsx)(s.Z,{style:{marginRight:"5px"}}),"Login"]})})}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{menu:{items:t?d:c},placement:"bottomLeft",arrow:!0,children:(0,r.jsx)(i.Z,{type:"text",shape:"circle",icon:(0,r.jsx)(o.Z,{})})}),(0,r.jsx)(f,{})]})}},2533:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(5893),i=n(1664),l=n.n(i),a=n(7183),u=n(2806),s=n(5238),o=n(1363),d=n(5105),c=n(9475);function f(){var e=(0,d.E)().currentTheme,t=[{label:"Introduction",path:"/"},{label:"Contact Us",path:"/contact-us"}].map(function(t,n){return(0,r.jsx)(l(),{href:t.path,children:(0,r.jsx)(u.Z,{type:"link",className:"light"==e?"main-header-light":"main-header-dark",children:t.label})},n)});return(0,r.jsx)(s.Z,{title:"VennTrading",avatar:{src:"light"==e?o.I9:o.JV},subTitle:t,className:"title",extra:(0,r.jsx)(c.Z,{})})}var h=n(6840),p=a.Z.Content,m=a.Z.Footer;function y(e){var t=e.children,n=e.className;return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(h.Z,{children:(0,r.jsx)(f,{})}),(0,r.jsx)(p,{style:{display:"flex",flexDirection:"column",alignItems:"center"},className:n,children:t}),(0,r.jsxs)(m,{children:[(0,r.jsx)(l(),{href:"/test-loading",children:"hi"}),(0,r.jsx)(l(),{href:"/login",children:"hi"})]})]})}},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,l=(null==t?void 0:t.suspense)?{}:{loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(r(e,Promise)?l.loader=function(){return e}:"function"==typeof e?l.loader=e:"object"==typeof e&&(l=i({},l,e)),(l=i({},l,t)).suspense&&(delete l.ssr,delete l.loading),l.loadableGenerated&&delete(l=i({},l,l.loadableGenerated)).loadableGenerated,"boolean"==typeof l.ssr&&!l.suspense){if(!l.ssr)return delete l.ssr,u(n,l);delete l.ssr}return n(l)},t.noSSR=u;var i=n(6495).Z,l=n(2648).Z,a=(l(n(7294)),l(n(4302)));function u(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,i=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(6495).Z,a=(0,n(2648).Z)(n(7294)),u=n(6319),s=n(7294).useSyncExternalStore,o=[],d=[],c=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var h=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function p(e){return function(e,t){var n=function(){if(!p){var t=new h(e,f);p={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return p.promise()},r=function(){n();var e=a.default.useContext(u.LoadableContext);e&&Array.isArray(f.modules)&&f.modules.forEach(function(t){e(t)})},i=function(e,t){r();var n=s(p.subscribe,p.getCurrentValue,p.getCurrentValue);return a.default.useImperativeHandle(t,function(){return{retry:p.retry}},[]),a.default.useMemo(function(){var t;return n.loading||n.error?a.default.createElement(f.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:p.retry}):n.loaded?a.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null},[e,n])},o=function(e,t){return r(),a.default.createElement(f.lazy,l({},e,{ref:t}))},f=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);f.suspense&&(f.lazy=a.default.lazy(f.loader));var p=null;if(!c){var m=f.webpack?f.webpack():f.modules;m&&d.push(function(e){var t=!0,r=!1,i=void 0;try{for(var l,a=m[Symbol.iterator]();!(t=(l=a.next()).done);t=!0){var u=l.value;if(-1!==e.indexOf(u))return n()}}catch(s){r=!0,i=s}finally{try{t||null==a.return||a.return()}finally{if(r)throw i}}})}var y=f.suspense?o:i;return y.preload=function(){return n()},y.displayName="LoadableComponent",a.default.forwardRef(y)}(f,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then(function(){if(e.length)return m(e,t)})}p.preloadAll=function(){return new Promise(function(e,t){m(o).then(e,t)})},p.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var n=function(){return c=!0,t()};m(d,e).then(n,n)})},window.__NEXT_PRELOADREADY=p.preloadReady,t.default=p},3678:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),i=n(7294),l=n(7306),a=n(2806),u=n(1363),s=n(5152),o=n.n(s),d=n(1163),c=n(5105),f=n(1293),h=n(2533),p=o()(function(){return n.e(492).then(n.bind(n,492)).then(function(e){return e.AdvancedRealTimeChart})},{loadableGenerated:{webpack:function(){return[492]}},ssr:!1});function m(){var e=(0,i.useState)(!1),t=e[0],n=e[1],s=(0,c.E)().currentTheme,o=(0,d.useRouter)(),m=function(){n(!0),o.push("/login").then(function(){n(!1)})};return(0,r.jsxs)(h.Z,{className:"public-page",children:[(0,r.jsx)("div",{style:{backgroundImage:"url(".concat(u.K_,")"),height:"400px",backgroundSize:"cover",display:"flex",flexDirection:"row-reverse",width:"100%"},children:(0,r.jsxs)("div",{style:{flexBasis:"50%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",color:"white"},children:[(0,r.jsx)(f.Z,{style:{color:"inherit"},width:"50px",height:"50px",level:1}),(0,r.jsxs)(l.Z.Paragraph,{style:{color:"inherit",textAlign:"center"},children:["Trading platform equipped with ",(0,r.jsx)("br",{}),"self-optimizing AI trading bot."]}),(0,r.jsx)(a.Z,{type:"primary",shape:"round",onClick:m,loading:t,children:"Learn more"})]})}),(0,r.jsx)(l.Z.Title,{style:{textAlign:"center",marginBottom:"10px"},children:"Market Summary"}),(0,r.jsx)("div",{style:{height:"500px",width:"80%"},children:(0,r.jsx)(p,{autosize:!0,theme:s,disabled_features:["datasource_copypaste"]})})]})}},5152:function(e,t,n){e.exports=n(638)}},function(e){e.O(0,[338,985,306,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);