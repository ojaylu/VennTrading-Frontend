(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[306],{3606:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(1413),a=n(7294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},l=n(2135),i=function(e,t){return a.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};i.displayName="CheckOutlined";var c=a.forwardRef(i)},9708:function(e,t,n){"use strict";n.d(t,{F:function(){return i},Z:function(){return l}});var r=n(4942),a=n(4184),o=n.n(a);function l(e,t,n){var a;return o()((a={},(0,r.Z)(a,"".concat(e,"-status-success"),"success"===t),(0,r.Z)(a,"".concat(e,"-status-warning"),"warning"===t),(0,r.Z)(a,"".concat(e,"-status-error"),"error"===t),(0,r.Z)(a,"".concat(e,"-status-validating"),"validating"===t),(0,r.Z)(a,"".concat(e,"-has-feedback"),n),a))}(0,n(3355).b)("warning","error","");var i=function(e,t){return t||e}},5223:function(e,t,n){"use strict";n.d(t,{RV:function(){return u},Rk:function(){return s},Ux:function(){return d},aM:function(){return f},q3:function(){return i},qI:function(){return c}});var r=n(7462),a=n(8731),o=n(8423),l=n(7294),i=l.createContext({labelAlign:"right",vertical:!1,itemRef:function(){}}),c=l.createContext(null),u=function(e){var t=(0,o.Z)(e,["prefixCls"]);return l.createElement(a.RV,(0,r.Z)({},t))},s=l.createContext({prefixCls:""}),f=l.createContext({}),d=function(e){var t=e.children,n=e.status,a=e.override,o=(0,l.useContext)(f),i=(0,l.useMemo)(function(){var e=(0,r.Z)({},o);return a&&delete e.isFormItemInput,n&&(delete e.status,delete e.hasFeedback,delete e.feedbackIcon),e},[n,a,o]);return l.createElement(f.Provider,{value:i},t)}},6591:function(e,t,n){"use strict";n.d(t,{ZP:function(){return j},D7:function(){return A},rJ:function(){return P},nH:function(){return T}});var r=n(4942),a=n(7462),o=n(1002),l=n(4340),i=n(4184),c=n.n(i),u=n(7294);function s(e){return!!(e.addonBefore||e.addonAfter)}function f(e){return!!(e.prefix||e.suffix||e.allowClear)}function d(e,t,n,r){if(n){var a=t;if("click"===t.type){var o=e.cloneNode(!0);a=Object.create(t,{target:{value:o},currentTarget:{value:o}}),o.value="",n(a);return}if(void 0!==r){a=Object.create(t,{target:{value:e},currentTarget:{value:e}}),e.value=r,n(a);return}n(a)}}function p(e){return null==e?"":String(e)}var v=function(e){var t=e.inputElement,n=e.prefixCls,a=e.prefix,l=e.suffix,i=e.addonBefore,d=e.addonAfter,p=e.className,v=e.style,m=e.affixWrapperClassName,g=e.groupClassName,b=e.wrapperClassName,h=e.disabled,y=e.readOnly,x=e.focused,Z=e.triggerFocus,w=e.allowClear,C=e.value,E=e.handleReset,S=e.hidden,O=(0,u.useRef)(null),R=function(e){var t;null!==(t=O.current)&&void 0!==t&&t.contains(e.target)&&(null==Z||Z())},N=(0,u.cloneElement)(t,{value:C,hidden:S});if(f(e)){var k,z="".concat(n,"-affix-wrapper"),A=c()(z,(k={},(0,r.Z)(k,"".concat(z,"-disabled"),h),(0,r.Z)(k,"".concat(z,"-focused"),x),(0,r.Z)(k,"".concat(z,"-readonly"),y),(0,r.Z)(k,"".concat(z,"-input-with-clear-btn"),l&&w&&C),k),!s(e)&&p,m),P=(l||w)&&u.createElement("span",{className:"".concat(n,"-suffix")},function(){if(!w)return null;var e,t="".concat(n,"-clear-icon"),a="object"===(0,o.Z)(w)&&null!=w&&w.clearIcon?w.clearIcon:"✖";return u.createElement("span",{onClick:E,onMouseDown:function(e){return e.preventDefault()},className:c()(t,(e={},(0,r.Z)(e,"".concat(t,"-hidden"),!(!h&&!y&&C)),(0,r.Z)(e,"".concat(t,"-has-suffix"),!!l),e)),role:"button",tabIndex:-1},a)}(),l);N=u.createElement("span",{className:A,style:v,hidden:!s(e)&&S,onClick:R,ref:O},a&&u.createElement("span",{className:"".concat(n,"-prefix")},a),(0,u.cloneElement)(t,{style:null,value:C,hidden:null}),P)}if(s(e)){var T="".concat(n,"-group"),j="".concat(T,"-addon"),I=c()("".concat(n,"-wrapper"),T,b),D=c()("".concat(n,"-group-wrapper"),p,g);return u.createElement("span",{className:D,style:v,hidden:S},u.createElement("span",{className:I},i&&u.createElement("span",{className:j},i),(0,u.cloneElement)(N,{style:null,hidden:null}),d&&u.createElement("span",{className:j},d)))}return N},m=n(4902),g=n(7685),b=n(91),h=n(8423),y=n(1770),x=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","type","inputClassName"],Z=(0,u.forwardRef)(function(e,t){var n=e.autoComplete,l=e.onChange,i=e.onFocus,Z=e.onBlur,w=e.onPressEnter,C=e.onKeyDown,E=e.prefixCls,S=void 0===E?"rc-input":E,O=e.disabled,R=e.htmlSize,N=e.className,k=e.maxLength,z=e.suffix,A=e.showCount,P=e.type,T=e.inputClassName,j=(0,b.Z)(e,x),I=(0,y.Z)(e.defaultValue,{value:e.value}),D=(0,g.Z)(I,2),M=D[0],F=D[1],H=(0,u.useState)(!1),V=(0,g.Z)(H,2),B=V[0],L=V[1],K=(0,u.useRef)(null),U=function(e){K.current&&function(e,t){if(e){e.focus(t);var n=(t||{}).cursor;if(n){var r=e.value.length;switch(n){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(r,r);break;default:e.setSelectionRange(0,r)}}}}(K.current,e)};(0,u.useImperativeHandle)(t,function(){return{focus:U,blur:function(){var e;null===(e=K.current)||void 0===e||e.blur()},setSelectionRange:function(e,t,n){var r;null===(r=K.current)||void 0===r||r.setSelectionRange(e,t,n)},select:function(){var e;null===(e=K.current)||void 0===e||e.select()},input:K.current}}),(0,u.useEffect)(function(){L(function(e){return(!e||!O)&&e})},[O]);var W,_=function(t){void 0===e.value&&F(t.target.value),K.current&&d(K.current,t,l)},J=function(e){w&&"Enter"===e.key&&w(e),null==C||C(e)},Q=function(e){L(!0),null==i||i(e)},q=function(e){L(!1),null==Z||Z(e)},X=function(e){F(""),U(),K.current&&d(K.current,e,l)};return u.createElement(v,(0,a.Z)({},j,{prefixCls:S,className:N,inputElement:(W=(0,h.Z)(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","affixWrapperClassName","groupClassName","inputClassName","wrapperClassName","htmlSize"]),u.createElement("input",(0,a.Z)({autoComplete:n},W,{onChange:_,onFocus:Q,onBlur:q,onKeyDown:J,className:c()(S,(0,r.Z)({},"".concat(S,"-disabled"),O),T,!s(e)&&!f(e)&&N),ref:K,size:R,type:void 0===P?"text":P}))),handleReset:X,value:p(M),focused:B,triggerFocus:U,suffix:function(){var e=Number(k)>0;if(z||A){var t=p(M),n=(0,m.Z)(t).length,a="object"===(0,o.Z)(A)?A.formatter({value:t,count:n,maxLength:k}):"".concat(n).concat(e?" / ".concat(k):"");return u.createElement(u.Fragment,null,!!A&&u.createElement("span",{className:c()("".concat(S,"-show-count-suffix"),(0,r.Z)({},"".concat(S,"-show-count-has-suffix"),!!z))},a),z)}return null}(),disabled:O}))}),w=n(2550),C=n(3124),E=n(8866),S=n(7647),O=n(5223),R=n(4173),N=n(9708),k=n(2922),z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function A(e){return null==e?"":String(e)}function P(e,t,n,r){if(n){var a=t;if("click"===t.type){var o=e.cloneNode(!0);a=Object.create(t,{target:{value:o},currentTarget:{value:o}}),o.value="",n(a);return}if(void 0!==r){a=Object.create(t,{target:{value:e},currentTarget:{value:e}}),e.value=r,n(a);return}n(a)}}function T(e,t){if(e){e.focus(t);var n=(t||{}).cursor;if(n){var r=e.value.length;switch(n){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(r,r);break;default:e.setSelectionRange(0,r)}}}}var j=(0,u.forwardRef)(function(e,t){var n,i,s,f,d,p=e.prefixCls,v=e.bordered,m=void 0===v||v,g=e.status,b=e.size,h=e.disabled,y=e.onBlur,x=e.onFocus,A=e.suffix,P=e.allowClear,T=e.addonAfter,j=e.addonBefore,I=e.className,D=e.onChange,M=z(e,["prefixCls","bordered","status","size","disabled","onBlur","onFocus","suffix","allowClear","addonAfter","addonBefore","className","onChange"]),F=u.useContext(C.E_),H=F.getPrefixCls,V=F.direction,B=F.input,L=H("input",p),K=(0,u.useRef)(null),U=(0,R.ri)(L,V),W=U.compactSize,_=U.compactItemClassnames,J=u.useContext(S.Z),Q=W||b||J,q=u.useContext(E.Z),X=(0,u.useContext)(O.aM),Y=X.status,G=X.hasFeedback,$=X.feedbackIcon,ee=(0,N.F)(Y,g),et=!!(e.prefix||e.suffix||e.allowClear)||!!G,en=(0,u.useRef)(et);(0,u.useEffect)(function(){et&&en.current,en.current=et},[et]);var er=(0,k.Z)(K,!0),ea=function(e){er(),null==y||y(e)},eo=function(e){er(),null==x||x(e)},el=function(e){er(),null==D||D(e)},ei=(G||A)&&u.createElement(u.Fragment,null,A,G&&$);return"object"===(0,o.Z)(P)&&(null==P?void 0:P.clearIcon)?f=P:P&&(f={clearIcon:u.createElement(l.Z,null)}),u.createElement(Z,(0,a.Z)({ref:(0,w.sQ)(t,K),prefixCls:L,autoComplete:null==B?void 0:B.autoComplete},M,{disabled:(null!=h?h:q)||void 0,onBlur:ea,onFocus:eo,suffix:ei,allowClear:f,className:c()(I,_),onChange:el,addonAfter:T&&u.createElement(R.BR,null,u.createElement(O.Ux,{override:!0,status:!0},T)),addonBefore:j&&u.createElement(R.BR,null,u.createElement(O.Ux,{override:!0,status:!0},j)),inputClassName:c()((n={},(0,r.Z)(n,"".concat(L,"-sm"),"small"===Q),(0,r.Z)(n,"".concat(L,"-lg"),"large"===Q),(0,r.Z)(n,"".concat(L,"-rtl"),"rtl"===V),(0,r.Z)(n,"".concat(L,"-borderless"),!m),n),!et&&(0,N.Z)(L,ee)),affixWrapperClassName:c()((i={},(0,r.Z)(i,"".concat(L,"-affix-wrapper-sm"),"small"===Q),(0,r.Z)(i,"".concat(L,"-affix-wrapper-lg"),"large"===Q),(0,r.Z)(i,"".concat(L,"-affix-wrapper-rtl"),"rtl"===V),(0,r.Z)(i,"".concat(L,"-affix-wrapper-borderless"),!m),i),(0,N.Z)("".concat(L,"-affix-wrapper"),ee,G)),wrapperClassName:c()((0,r.Z)({},"".concat(L,"-group-rtl"),"rtl"===V)),groupClassName:c()((s={},(0,r.Z)(s,"".concat(L,"-group-wrapper-sm"),"small"===Q),(0,r.Z)(s,"".concat(L,"-group-wrapper-lg"),"large"===Q),(0,r.Z)(s,"".concat(L,"-group-wrapper-rtl"),"rtl"===V),s),(0,N.Z)("".concat(L,"-group-wrapper"),ee,G))}))})},6994:function(e,t,n){"use strict";n.d(t,{Z:function(){return B}});var r,a=n(1002),o=n(4942),l=n(7462),i=n(7685),c=n(4902),u=n(4184),s=n.n(u),f=n(5671),d=n(3144),p=n(2531),v=n(3568),m=n(7294),g=n(1413),b=n(91),h=n(8555),y=n(8410),x=n(5164),Z=n(1770),w=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break"],C={},E=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],S=m.forwardRef(function(e,t){var n=e.prefixCls,c=void 0===n?"rc-textarea":n,u=(e.onPressEnter,e.defaultValue),f=e.value,d=e.autoSize,p=e.onResize,v=e.className,S=e.style,O=e.disabled,R=e.onChange,N=(e.onInternalAutoSize,(0,b.Z)(e,E)),k=(0,Z.Z)(u,{value:f,postState:function(e){return null!=e?e:""}}),z=(0,i.Z)(k,2),A=z[0],P=z[1],T=function(e){P(e.target.value),null==R||R(e)},j=m.useRef();m.useImperativeHandle(t,function(){return{textArea:j.current}});var I=m.useMemo(function(){return d&&"object"===(0,a.Z)(d)?[d.minRows,d.maxRows]:[]},[d]),D=(0,i.Z)(I,2),M=D[0],F=D[1],H=!!d,V=function(){try{if(document.activeElement===j.current){var e=j.current,t=e.selectionStart,n=e.selectionEnd,r=e.scrollTop;j.current.setSelectionRange(t,n),j.current.scrollTop=r}}catch(a){}},B=m.useState(2),L=(0,i.Z)(B,2),K=L[0],U=L[1],W=m.useState(),_=(0,i.Z)(W,2),J=_[0],Q=_[1],q=function(){U(0)};(0,y.Z)(function(){H&&q()},[f,M,F,H]),(0,y.Z)(function(){if(0===K)U(1);else if(1===K){var e=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;r||((r=document.createElement("textarea")).setAttribute("tab-index","-1"),r.setAttribute("aria-hidden","true"),document.body.appendChild(r)),e.getAttribute("wrap")?r.setAttribute("wrap",e.getAttribute("wrap")):r.removeAttribute("wrap");var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&C[n])return C[n];var r=window.getComputedStyle(e),a=r.getPropertyValue("box-sizing")||r.getPropertyValue("-moz-box-sizing")||r.getPropertyValue("-webkit-box-sizing"),o=parseFloat(r.getPropertyValue("padding-bottom"))+parseFloat(r.getPropertyValue("padding-top")),l=parseFloat(r.getPropertyValue("border-bottom-width"))+parseFloat(r.getPropertyValue("border-top-width")),i={sizingStyle:w.map(function(e){return"".concat(e,":").concat(r.getPropertyValue(e))}).join(";"),paddingSize:o,borderSize:l,boxSizing:a};return t&&n&&(C[n]=i),i}(e,n),i=l.paddingSize,c=l.borderSize,u=l.boxSizing,s=l.sizingStyle;r.setAttribute("style","".concat(s,";").concat("\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n")),r.value=e.value||e.placeholder||"";var f=void 0,d=void 0,p=r.scrollHeight;if("border-box"===u?p+=c:"content-box"===u&&(p-=i),null!==a||null!==o){r.value=" ";var v=r.scrollHeight-i;null!==a&&(f=v*a,"border-box"===u&&(f=f+i+c),p=Math.max(f,p)),null!==o&&(d=v*o,"border-box"===u&&(d=d+i+c),t=p>d?"":"hidden",p=Math.min(d,p))}var m={height:p,overflowY:t,resize:"none"};return f&&(m.minHeight=f),d&&(m.maxHeight=d),m}(j.current,!1,M,F);U(2),Q(e)}else V()},[K]);var X=m.useRef(),Y=function(){x.Z.cancel(X.current)},G=function(e){2===K&&(null==p||p(e),d&&(Y(),X.current=(0,x.Z)(function(){q()})))};m.useEffect(function(){return Y},[]);var $=(0,g.Z)((0,g.Z)({},S),H?J:null);return(0===K||1===K)&&($.overflowY="hidden",$.overflowX="hidden"),m.createElement(h.Z,{onResize:G,disabled:!(d||p)},m.createElement("textarea",(0,l.Z)({},N,{ref:j,style:$,className:s()(c,v,(0,o.Z)({},"".concat(c,"-disabled"),O)),disabled:O,value:A,onChange:T})))}),O=function(e){(0,p.Z)(n,e);var t=(0,v.Z)(n);function n(e){(0,f.Z)(this,n),(r=t.call(this,e)).resizableTextArea=void 0,r.focus=function(){r.resizableTextArea.textArea.focus()},r.saveTextArea=function(e){r.resizableTextArea=e},r.handleChange=function(e){var t=r.props.onChange;r.setValue(e.target.value),t&&t(e)},r.handleKeyDown=function(e){var t=r.props,n=t.onPressEnter,a=t.onKeyDown;13===e.keyCode&&n&&n(e),a&&a(e)};var r,a=void 0===e.value||null===e.value?e.defaultValue:e.value;return r.state={value:a},r}return(0,d.Z)(n,[{key:"setValue",value:function(e,t){"value"in this.props||this.setState({value:e},t)}},{key:"blur",value:function(){this.resizableTextArea.textArea.blur()}},{key:"render",value:function(){return m.createElement(S,(0,l.Z)({},this.props,{value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,ref:this.saveTextArea}))}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value}:null}}]),n}(m.Component),R=n(8423),N=n(3124),k=n(8866),z=n(7647),A=n(5223),P=n(9708),T=n(4340),j=n(6159),I=(0,n(3355).b)("text","input"),D=function(e){(0,p.Z)(n,e);var t=(0,v.Z)(n);function n(){return(0,f.Z)(this,n),t.apply(this,arguments)}return(0,d.Z)(n,[{key:"renderClearIcon",value:function(e){var t,n=this.props,r=n.value,a=n.disabled,l=n.readOnly,i=n.handleReset,c=n.suffix,u="".concat(e,"-clear-icon");return m.createElement(T.Z,{onClick:i,onMouseDown:function(e){return e.preventDefault()},className:s()((t={},(0,o.Z)(t,"".concat(u,"-hidden"),!(!a&&!l&&r)),(0,o.Z)(t,"".concat(u,"-has-suffix"),!!c),t),u),role:"button"})}},{key:"renderTextAreaWithClearIcon",value:function(e,t,n){var r,a=this.props,l=a.value,i=a.allowClear,c=a.className,u=a.style,f=a.direction,d=a.bordered,p=a.hidden,v=a.status,g=n.status,b=n.hasFeedback;if(!i)return(0,j.Tm)(t,{value:l});var h,y=s()("".concat(e,"-affix-wrapper"),"".concat(e,"-affix-wrapper-textarea-with-clear-btn"),(0,P.Z)("".concat(e,"-affix-wrapper"),(0,P.F)(g,v),b),(r={},(0,o.Z)(r,"".concat(e,"-affix-wrapper-rtl"),"rtl"===f),(0,o.Z)(r,"".concat(e,"-affix-wrapper-borderless"),!d),(0,o.Z)(r,"".concat(c),!(h=this.props).addonBefore&&!h.addonAfter&&c),r));return m.createElement("span",{className:y,style:u,hidden:p},(0,j.Tm)(t,{style:null,value:l}),this.renderClearIcon(e))}},{key:"render",value:function(){var e=this;return m.createElement(A.aM.Consumer,null,function(t){var n=e.props,r=n.prefixCls,a=n.inputType,o=n.element;if(a===I[0])return e.renderTextAreaWithClearIcon(r,o,t)})}}]),n}(m.Component),M=n(6591),F=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function H(e,t){return(0,c.Z)(e||"").slice(0,t).join("")}function V(e,t,n,r){var a=n;return e?a=H(n,r):(0,c.Z)(t||"").length<n.length&&(0,c.Z)(n||"").length>r&&(a=t),a}var B=m.forwardRef(function(e,t){var n=e.prefixCls,r=e.bordered,u=void 0===r||r,f=e.showCount,d=void 0!==f&&f,p=e.maxLength,v=e.className,g=e.style,b=e.size,h=e.disabled,y=e.onCompositionStart,x=e.onCompositionEnd,w=e.onChange,C=e.status,E=F(e,["prefixCls","bordered","showCount","maxLength","className","style","size","disabled","onCompositionStart","onCompositionEnd","onChange","status"]),S=m.useContext(N.E_),T=S.getPrefixCls,j=S.direction,I=m.useContext(z.Z),B=m.useContext(k.Z),L=null!=h?h:B,K=m.useContext(A.aM),U=K.status,W=K.hasFeedback,_=K.isFormItemInput,J=K.feedbackIcon,Q=(0,P.F)(U,C),q=m.useRef(null),X=m.useRef(null),Y=m.useState(!1),G=(0,i.Z)(Y,2),$=G[0],ee=G[1],et=m.useRef(),en=m.useRef(0),er=(0,Z.Z)(E.defaultValue,{value:E.value}),ea=(0,i.Z)(er,2),eo=ea[0],el=ea[1],ei=E.hidden,ec=function(e,t){void 0===E.value&&(el(e),null==t||t())},eu=Number(p)>0,es=function(e){ee(!0),et.current=eo,en.current=e.currentTarget.selectionStart,null==y||y(e)},ef=function(e){ee(!1);var t,n=e.currentTarget.value;eu&&(n=V(en.current>=p+1||en.current===(null===(t=et.current)||void 0===t?void 0:t.length),et.current,n,p)),n!==eo&&(ec(n),(0,M.rJ)(e.currentTarget,e,w,n)),null==x||x(e)},ed=function(e){var t=e.target.value;!$&&eu&&(t=V(e.target.selectionStart>=p+1||e.target.selectionStart===t.length||!e.target.selectionStart,eo,t,p)),ec(t),(0,M.rJ)(e.currentTarget,e,w,t)},ep=function(e){var t,n,r;ec(""),null===(t=q.current)||void 0===t||t.focus(),(0,M.rJ)(null===(r=null===(n=q.current)||void 0===n?void 0:n.resizableTextArea)||void 0===r?void 0:r.textArea,e,w)},ev=T("input",n);m.useImperativeHandle(t,function(){var e;return{resizableTextArea:null===(e=q.current)||void 0===e?void 0:e.resizableTextArea,focus:function(e){var t,n;(0,M.nH)(null===(n=null===(t=q.current)||void 0===t?void 0:t.resizableTextArea)||void 0===n?void 0:n.textArea,e)},blur:function(){var e;return null===(e=q.current)||void 0===e?void 0:e.blur()}}});var em=m.createElement(O,(0,l.Z)({},(0,R.Z)(E,["allowClear"]),{disabled:L,className:s()((eh={},(0,o.Z)(eh,"".concat(ev,"-borderless"),!u),(0,o.Z)(eh,v,v&&!d),(0,o.Z)(eh,"".concat(ev,"-sm"),"small"===I||"small"===b),(0,o.Z)(eh,"".concat(ev,"-lg"),"large"===I||"large"===b),eh),(0,P.Z)(ev,Q)),style:d?{resize:null==g?void 0:g.resize}:g,prefixCls:ev,onCompositionStart:es,onChange:ed,onCompositionEnd:ef,ref:q})),eg=(0,M.D7)(eo);!$&&eu&&(null===E.value||void 0===E.value)&&(eg=H(eg,p));var eb=m.createElement(D,(0,l.Z)({disabled:L},E,{prefixCls:ev,direction:j,inputType:"text",value:eg,element:em,handleReset:ep,ref:X,bordered:u,status:C,style:d?void 0:g}));if(d||W){var eh,ey,ex=(0,c.Z)(eg).length,eZ="";return eZ="object"===(0,a.Z)(d)?d.formatter({value:eg,count:ex,maxLength:p}):"".concat(ex).concat(eu?" / ".concat(p):""),m.createElement("div",{hidden:ei,className:s()("".concat(ev,"-textarea"),(ey={},(0,o.Z)(ey,"".concat(ev,"-textarea-rtl"),"rtl"===j),(0,o.Z)(ey,"".concat(ev,"-textarea-show-count"),d),(0,o.Z)(ey,"".concat(ev,"-textarea-in-form-item"),_),ey),(0,P.Z)("".concat(ev,"-textarea"),Q,W),v),style:g,"data-count":eZ},eb,W&&m.createElement("span",{className:"".concat(ev,"-textarea-suffix")},J))}return eb})},2922:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294);function a(e,t){var n=(0,r.useRef)([]),a=function(){n.current.push(window.setTimeout(function(){var t,n,r,a;(null===(t=e.current)||void 0===t?void 0:t.input)&&(null===(n=e.current)||void 0===n?void 0:n.input.getAttribute("type"))==="password"&&(null===(r=e.current)||void 0===r?void 0:r.input.hasAttribute("value"))&&(null===(a=e.current)||void 0===a||a.input.removeAttribute("value"))}))};return(0,r.useEffect)(function(){return t&&a(),function(){return n.current.forEach(function(e){return window.clearTimeout(e)})}},[]),a}},7306:function(e,t,n){"use strict";n.d(t,{Z:function(){return ef}});var r=n(7462),a=n(7294),o=n(4942),l=n(1002),i=n(7685),c=n(3606),u=n(1413),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},f=n(2135),d=function(e,t){return a.createElement(f.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:s}))};d.displayName="CopyOutlined";var p=a.forwardRef(d),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},m=function(e,t){return a.createElement(f.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:v}))};m.displayName="EditOutlined";var g=a.forwardRef(m),b=n(4184),h=n.n(b),y=n(640),x=n.n(y),Z=n(8555),w=n(344),C=n(8410),E=n(1770),S=n(8423),O=n(2550),R=n(3124),N=n(3715),k=n(4952),z=n(8924),A=function(e){if((0,z.Z)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some(function(e){return e in n.style})}return!1},P=function(e,t){if(!A(e))return!1;var n=document.createElement("div"),r=n.style[e];return n.style[e]=t,n.style[e]!==r};function T(e,t){return Array.isArray(e)||void 0===t?A(e):P(e,t)}var j=n(7939),I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},D=function(e,t){return a.createElement(f.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:I}))};D.displayName="EnterOutlined";var M=a.forwardRef(D),F=n(617),H=n(6994),V=n(6159),B=function(e){var t=e.prefixCls,n=e["aria-label"],r=e.className,l=e.style,c=e.direction,u=e.maxLength,s=e.autoSize,f=e.value,d=e.onSave,p=e.onCancel,v=e.onEnd,m=e.component,g=e.enterIcon,b=void 0===g?a.createElement(M,null):g,y=a.useRef(null),x=a.useRef(!1),Z=a.useRef(),w=a.useState(f),C=(0,i.Z)(w,2),E=C[0],S=C[1];a.useEffect(function(){S(f)},[f]),a.useEffect(function(){if(y.current&&y.current.resizableTextArea){var e=y.current.resizableTextArea.textArea;e.focus();var t=e.value.length;e.setSelectionRange(t,t)}},[]);var O=function(e){S(e.target.value.replace(/[\n\r]/g,""))},R=function(){x.current=!0},N=function(){x.current=!1},k=function(e){var t=e.keyCode;x.current||(Z.current=t)},z=function(){d(E.trim())},A=function(e){var t=e.keyCode,n=e.ctrlKey,r=e.altKey,a=e.metaKey,o=e.shiftKey;Z.current!==t||x.current||n||r||a||o||(t===F.Z.ENTER?(z(),null==v||v()):t===F.Z.ESC&&p())},P=function(){z()},T=m?"".concat(t,"-").concat(m):"",j=h()(t,"".concat(t,"-edit-content"),(0,o.Z)({},"".concat(t,"-rtl"),"rtl"===c),r,T);return a.createElement("div",{className:j,style:l},a.createElement(H.Z,{ref:y,maxLength:u,value:E,onChange:O,onKeyDown:k,onKeyUp:A,onCompositionStart:R,onCompositionEnd:N,onBlur:P,"aria-label":n,rows:1,autoSize:void 0===s||s}),null!==b?(0,V.Tm)(b,{className:"".concat(t,"-edit-content-confirm")}):null)};function L(e,t){return a.useMemo(function(){var n=!!e;return[n,(0,r.Z)((0,r.Z)({},t),n&&"object"===(0,l.Z)(e)?e:null)]},[e])}var K=function(e,t){var n=a.useRef(!1);a.useEffect(function(){n.current?e():n.current=!0},t)},U=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},W=a.forwardRef(function(e,t){var n=e.prefixCls,l=e.component,i=e.className,c=e.setContentRef,u=e.children,s=e.direction,f=U(e,["prefixCls","component","className","setContentRef","children","direction"]),d=a.useContext(R.E_),p=d.getPrefixCls,v=d.direction,m=t;c&&(m=(0,O.sQ)(t,c));var g=p("typography",n),b=h()(g,(0,o.Z)({},"".concat(g,"-rtl"),"rtl"===(null!=s?s:v)),i);return a.createElement(void 0===l?"article":l,(0,r.Z)({className:b,ref:m},f),u)});function _(e){var t=(0,l.Z)(e);return"string"===t||"number"===t}function J(e,t){for(var n=0,r=[],a=0;a<e.length;a+=1){if(n===t)return r;var o=e[a],l=n+(_(o)?String(o).length:1);if(l>t){var i=t-n;return r.push(String(o).slice(0,i)),r}r.push(o),n=l}return e}var Q=function(e){var t=e.enabledMeasure,n=e.children,o=e.text,l=e.width,c=e.fontSize,u=e.rows,s=e.onEllipsis,f=a.useState([0,0,0]),d=(0,i.Z)(f,2),p=(0,i.Z)(d[0],3),v=p[0],m=p[1],g=p[2],b=d[1],h=a.useState(0),y=(0,i.Z)(h,2),x=y[0],Z=y[1],E=a.useState(0),S=(0,i.Z)(E,2),O=S[0],R=S[1],N=a.useRef(null),k=a.useRef(null),z=a.useMemo(function(){return(0,w.Z)(o)},[o]),A=a.useMemo(function(){var e,t;return t=0,z.forEach(function(e){_(e)?t+=String(e).length:t+=1}),t},[z]),P=a.useMemo(function(){return t&&3===x?n(J(z,m),m<A):n(z,!1)},[t,x,n,z,m,A]);(0,C.Z)(function(){t&&l&&c&&A&&(Z(1),b([0,Math.ceil(A/2),A]))},[t,l,c,o,A,u]),(0,C.Z)(function(){var e;1===x&&R((null===(e=N.current)||void 0===e?void 0:e.offsetHeight)||0)},[x]),(0,C.Z)(function(){if(O){if(1===x){((null===(e=k.current)||void 0===e?void 0:e.offsetHeight)||0)<=u*O?(Z(4),s(!1)):Z(2)}else if(2===x){if(v!==g){var e,t,n,r=(null===(t=k.current)||void 0===t?void 0:t.offsetHeight)||0,a=v,o=g;v===g-1?o=v:r<=u*O?a=m:o=m;var l=Math.ceil((a+o)/2);b([a,l,o])}else Z(3),s(!0)}}},[x,v,g,u,O]);var T,j,I,D={width:l,whiteSpace:"normal",margin:0,padding:0},M=function(e,t,n){return a.createElement("span",{"aria-hidden":!0,ref:t,style:(0,r.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:2*Math.floor(c/2)},n)},e)};return a.createElement(a.Fragment,null,P,t&&3!==x&&4!==x&&a.createElement(a.Fragment,null,M("lg",N,{wordBreak:"keep-all",whiteSpace:"nowrap"}),1===x?M(n(z,!1),k,D):(I=J(z,m),M(n(I,!0),k,D))))},q=function(e){var t=e.enabledEllipsis,n=e.isEllipsis,o=e.children,l=e.tooltipProps;return(null==l?void 0:l.title)&&t?a.createElement(j.Z,(0,r.Z)({open:!!n&&void 0},l),o):o},X=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function Y(e,t,n){return!0===e||void 0===e?t:e||n&&t}function G(e){return!1===e?[!1,!1]:Array.isArray(e)?e:[e]}var $=a.forwardRef(function(e,t){var n,u,s,f=e.prefixCls,d=e.className,v=e.style,m=e.type,b=e.disabled,y=e.children,z=e.ellipsis,A=e.editable,P=e.copyable,I=e.component,D=e.title,M=X(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),F=a.useContext(R.E_),H=F.getPrefixCls,V=F.direction,U=(0,N.E)("Text")[0],_=a.useRef(null),J=a.useRef(null),$=H("typography",f),ee=(0,S.Z)(M,["mark","code","delete","underline","strong","keyboard","italic"]),et=L(A),en=(0,i.Z)(et,2),er=en[0],ea=en[1],eo=(0,E.Z)(!1,{value:ea.editing}),el=(0,i.Z)(eo,2),ei=el[0],ec=el[1],eu=ea.triggerType,es=void 0===eu?["icon"]:eu,ef=function(e){var t;e&&(null===(t=ea.onStart)||void 0===t||t.call(ea)),ec(e)};K(function(){var e;ei||null===(e=J.current)||void 0===e||e.focus()},[ei]);var ed=function(e){null==e||e.preventDefault(),ef(!0)},ep=function(e){var t;null===(t=ea.onChange)||void 0===t||t.call(ea,e),ef(!1)},ev=function(){var e;null===(e=ea.onCancel)||void 0===e||e.call(ea),ef(!1)},em=L(P),eg=(0,i.Z)(em,2),eb=eg[0],eh=eg[1],ey=a.useState(!1),ex=(0,i.Z)(ey,2),eZ=ex[0],ew=ex[1],eC=a.useRef(),eE={};eh.format&&(eE.format=eh.format);var eS=function(){window.clearTimeout(eC.current)},eO=function(e){var t;null==e||e.preventDefault(),null==e||e.stopPropagation(),x()(eh.text||String(y)||"",eE),ew(!0),eS(),eC.current=window.setTimeout(function(){ew(!1)},3e3),null===(t=eh.onCopy)||void 0===t||t.call(eh,e)};a.useEffect(function(){return eS},[]);var eR=a.useState(!1),eN=(0,i.Z)(eR,2),ek=eN[0],ez=eN[1],eA=a.useState(!1),eP=(0,i.Z)(eA,2),eT=eP[0],ej=eP[1],eI=a.useState(!1),eD=(0,i.Z)(eI,2),eM=eD[0],eF=eD[1],eH=a.useState(!1),eV=(0,i.Z)(eH,2),eB=eV[0],eL=eV[1],eK=a.useState(!1),eU=(0,i.Z)(eK,2),eW=eU[0],e_=eU[1],eJ=a.useState(!0),eQ=(0,i.Z)(eJ,2),eq=eQ[0],eX=eQ[1],eY=L(z,{expandable:!1}),eG=(0,i.Z)(eY,2),e$=eG[0],e0=eG[1],e1=e$&&!eM,e2=e0.rows,e4=void 0===e2?1:e2,e3=a.useMemo(function(){return!e1||void 0!==e0.suffix||e0.onEllipsis||e0.expandable||er||eb},[e1,e0,er,eb]);(0,C.Z)(function(){e$&&!e3&&(ez(T("webkitLineClamp")),ej(T("textOverflow")))},[e3,e$]);var e6=a.useMemo(function(){return!e3&&(1===e4?eT:ek)},[e3,eT,ek]),e8=e1&&(e6?eW:eB),e7=e1&&1===e4&&e6,e9=e1&&e4>1&&e6,e5=function(e){var t;eF(!0),null===(t=e0.onExpand)||void 0===t||t.call(e0,e)},te=a.useState(0),tt=(0,i.Z)(te,2),tn=tt[0],tr=tt[1],ta=a.useState(0),to=(0,i.Z)(ta,2),tl=to[0],ti=to[1],tc=function(e,t){var n;tr(e.offsetWidth),ti(parseInt(null===(n=window.getComputedStyle)||void 0===n?void 0:n.call(window,t).fontSize,10)||0)},tu=function(e){var t;eL(e),eB!==e&&(null===(t=e0.onEllipsis)||void 0===t||t.call(e0,e))};a.useEffect(function(){var e=_.current;if(e$&&e6&&e){var t=e9?e.offsetHeight<e.scrollHeight:e.offsetWidth<e.scrollWidth;eW!==t&&e_(t)}},[e$,e6,y,e9,eq]),a.useEffect(function(){var e=_.current;if("undefined"!=typeof IntersectionObserver&&e&&e6&&e1){var t=new IntersectionObserver(function(){eX(!!e.offsetParent)});return t.observe(e),function(){t.disconnect()}}},[e6,e1]);var ts={};ts=!0===e0.tooltip?{title:null!==(n=ea.text)&&void 0!==n?n:y}:a.isValidElement(e0.tooltip)?{title:e0.tooltip}:"object"===(0,l.Z)(e0.tooltip)?(0,r.Z)({title:null!==(u=ea.text)&&void 0!==u?u:y},e0.tooltip):{title:e0.tooltip};var tf=a.useMemo(function(){var e=function(e){return["string","number"].includes((0,l.Z)(e))};return!e$||e6?void 0:e(ea.text)?ea.text:e(y)?y:e(D)?D:e(ts.title)?ts.title:void 0},[e$,e6,D,ts.title,e8]);if(ei)return a.createElement(B,{value:null!==(s=ea.text)&&void 0!==s?s:"string"==typeof y?y:"",onSave:ep,onCancel:ev,onEnd:ea.onEnd,prefixCls:$,className:d,style:v,direction:V,component:I,maxLength:ea.maxLength,autoSize:ea.autoSize,enterIcon:ea.enterIcon});var td=function(){var e,t=e0.expandable,n=e0.symbol;return t?(e=n||U.expand,a.createElement("a",{key:"expand",className:"".concat($,"-expand"),onClick:e5,"aria-label":U.expand},e)):null},tp=function(){if(er){var e=ea.icon,t=ea.tooltip,n=(0,w.Z)(t)[0]||U.edit;return es.includes("icon")?a.createElement(j.Z,{key:"edit",title:!1===t?"":n},a.createElement(k.Z,{ref:J,className:"".concat($,"-edit"),onClick:ed,"aria-label":"string"==typeof n?n:""},e||a.createElement(g,{role:"button"}))):null}},tv=function(){if(eb){var e=eh.tooltips,t=eh.icon,n=G(e),r=G(t),o=eZ?Y(n[1],U.copied):Y(n[0],U.copy),l=eZ?U.copied:U.copy;return a.createElement(j.Z,{key:"copy",title:o},a.createElement(k.Z,{className:h()("".concat($,"-copy"),eZ&&"".concat($,"-copy-success")),onClick:eO,"aria-label":"string"==typeof o?o:l},eZ?Y(r[1],a.createElement(c.Z,null),!0):Y(r[0],a.createElement(p,null),!0)))}},tm=function(e){var t;return[e&&a.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),e0.suffix,[e&&td(),tp(),tv()]]};return a.createElement(Z.Z,{onResize:tc,disabled:!e1||e6},function(n){var l;return a.createElement(q,{tooltipProps:ts,enabledEllipsis:e1,isEllipsis:e8},a.createElement(W,(0,r.Z)({className:h()((l={},(0,o.Z)(l,"".concat($,"-").concat(m),m),(0,o.Z)(l,"".concat($,"-disabled"),b),(0,o.Z)(l,"".concat($,"-ellipsis"),e$),(0,o.Z)(l,"".concat($,"-single-line"),e1&&1===e4),(0,o.Z)(l,"".concat($,"-ellipsis-single-line"),e7),(0,o.Z)(l,"".concat($,"-ellipsis-multiple-line"),e9),l),d),style:(0,r.Z)((0,r.Z)({},v),{WebkitLineClamp:e9?e4:void 0}),component:I,ref:(0,O.sQ)(n,_,t),direction:V,onClick:es.includes("text")?ed:void 0,"aria-label":null==tf?void 0:tf.toString(),title:D},ee),a.createElement(Q,{enabledMeasure:e1&&!e6,text:y,rows:e4,width:tn,fontSize:tl,onEllipsis:tu},function(t,n){var r=t;return t.length&&n&&tf&&(r=a.createElement("span",{key:"show-content","aria-hidden":!0},r)),function(e,t){var n=e.mark,r=e.code,o=e.underline,l=e.delete,i=e.strong,c=e.keyboard,u=e.italic,s=t;function f(e,t){e&&(s=a.createElement(t,{},s))}return f(i,"strong"),f(o,"u"),f(l,"del"),f(r,"code"),f(n,"mark"),f(c,"kbd"),f(u,"i"),s}(e,a.createElement(a.Fragment,null,r,tm(n)))})))})}),ee=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},et=a.forwardRef(function(e,t){var n=e.ellipsis,o=e.rel,l=ee(e,["ellipsis","rel"]),i=(0,r.Z)((0,r.Z)({},l),{rel:void 0===o&&"_blank"===l.target?"noopener noreferrer":o});return delete i.navigate,a.createElement($,(0,r.Z)({},i,{ref:t,ellipsis:!!n,component:"a"}))}),en=a.forwardRef(function(e,t){return a.createElement($,(0,r.Z)({ref:t},e,{component:"div"}))}),er=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},ea=function(e,t){var n=e.ellipsis,o=er(e,["ellipsis"]),i=a.useMemo(function(){return n&&"object"===(0,l.Z)(n)?(0,S.Z)(n,["expandable","rows"]):n},[n]);return a.createElement($,(0,r.Z)({ref:t},o,{ellipsis:i,component:"span"}))},eo=a.forwardRef(ea),el=n(3355),ei=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},ec=(0,el.a)(1,2,3,4,5),eu=a.forwardRef(function(e,t){var n,o=e.level,l=void 0===o?1:o,i=ei(e,["level"]);return n=ec.includes(l)?"h".concat(l):"h1",a.createElement($,(0,r.Z)({ref:t},i,{component:n}))}),es=W;es.Text=eo,es.Link=et,es.Title=eu,es.Paragraph=en;var ef=es},640:function(e,t,n){"use strict";var r=n(1742),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,o,l,i,c,u,s,f,d=!1;t||(t={}),l=t.debug||!1;try{if(c=r(),u=document.createRange(),s=document.getSelection(),(f=document.createElement("span")).textContent=e,f.ariaHidden="true",f.style.all="unset",f.style.position="fixed",f.style.top=0,f.style.clip="rect(0, 0, 0, 0)",f.style.whiteSpace="pre",f.style.webkitUserSelect="text",f.style.MozUserSelect="text",f.style.msUserSelect="text",f.style.userSelect="text",f.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=a[t.format]||a.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(f),u.selectNodeContents(f),s.addRange(u),!document.execCommand("copy"))throw Error("copy command was unsuccessful");d=!0}catch(v){l&&console.error("unable to copy using execCommand: ",v),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(p){l&&console.error("unable to copy using clipboardData: ",p),l&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",o=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",i=n.replace(/#{\s*key\s*}/g,o),window.prompt(i,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(u):s.removeAllRanges()),f&&document.body.removeChild(f),c()}return d}},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);