/*! For license information please see c61bafa3083b25fd70d9bc454c7b8ed605097128-bc1dca3e8f367fdc16f3.js.LICENSE.txt */
"use strict";(self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5=self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5||[]).push([[35],{3638:function(e,t,n){n.d(t,{Oq:function(){return f},dO:function(){return c},jn:function(){return a},iz:function(){return p},Dz:function(){return o},cv:function(){return l},oc:function(){return d}});var r="Invariant failed";var o=function(e){var t=e.top,n=e.right,r=e.bottom,o=e.left;return{top:t,right:n,bottom:r,left:o,width:n-o,height:r-t,x:o,y:t,center:{x:(n+o)/2,y:(r+t)/2}}},a=function(e,t){return{top:e.top-t.top,left:e.left-t.left,bottom:e.bottom+t.bottom,right:e.right+t.right}},i=function(e,t){return{top:e.top+t.top,left:e.left+t.left,bottom:e.bottom-t.bottom,right:e.right-t.right}},u={top:0,right:0,bottom:0,left:0},c=function(e){var t=e.borderBox,n=e.margin,r=void 0===n?u:n,c=e.border,s=void 0===c?u:c,l=e.padding,d=void 0===l?u:l,f=o(a(t,r)),p=o(i(t,s)),m=o(i(p,d));return{marginBox:f,borderBox:o(t),paddingBox:p,contentBox:m,margin:r,border:s,padding:d}},s=function(e){var t=e.slice(0,-2);if("px"!==e.slice(-2))return 0;var n=Number(t);return isNaN(n)&&function(e,t){if(!e)throw new Error(r)}(!1),n},l=function(e,t){var n,r,o=e.borderBox,a=e.border,i=e.margin,u=e.padding,s=(r=t,{top:(n=o).top+r.y,left:n.left+r.x,bottom:n.bottom+r.y,right:n.right+r.x});return c({borderBox:s,border:a,margin:i,padding:u})},d=function(e,t){return void 0===t&&(t={x:window.pageXOffset,y:window.pageYOffset}),l(e,t)},f=function(e,t){var n={top:s(t.marginTop),right:s(t.marginRight),bottom:s(t.marginBottom),left:s(t.marginLeft)},r={top:s(t.paddingTop),right:s(t.paddingRight),bottom:s(t.paddingBottom),left:s(t.paddingLeft)},o={top:s(t.borderTopWidth),right:s(t.borderRightWidth),bottom:s(t.borderBottomWidth),left:s(t.borderLeftWidth)};return c({borderBox:e,margin:n,padding:r,border:o})},p=function(e){var t=e.getBoundingClientRect(),n=window.getComputedStyle(e);return f(t,n)}},2410:function(e,t,n){var r=n(5785),o=n(7294),a=n(5948),i=n(2902),u=n(5998),c=n(4284);const s=(0,i.ZP)(((e,t)=>{if(console.log(t),"MOVE"===t.type){e[t.from]=e[t.from]||[],e[t.to]=e[t.to]||[];const[n]=e[t.from].splice(t.fromIndex,1);e[t.to].splice(t.toIndex,0,n)}}));function l(){const e=(0,u.I0)(),t=(0,u.v9)(c.$E),n=(0,u.v9)(c.YP),[l,d]=o.useReducer(s,{items:t,items2:n,itemsTitle:Array.isArray(t)&&t.length>0?t[0].dndcolumn:"...",items2Title:Array.isArray(n)&&n.length>0?n[0].dndcolumn:"Корзина"}),f=o.useCallback((t=>{if("DROP"===t.reason){var n,o;if(!t.destination)return;const a=(0,i.ZP)(l,(e=>{e[t.source.droppableId]=e[t.source.droppableId]||[],e[t.destination.droppableId]=e[t.destination.droppableId]||[];const[n]=e[t.source.droppableId].splice(t.source.index,1);e[t.destination.droppableId].splice(t.destination.index,0,n)}));(n=console).log.apply(n,(0,r.Z)(a.items.map((e=>({...e,dndcolumn:l.itemsTitle}))).map((e=>{let{dndcontent:t,...n}=e;return n})))),(o=console).log.apply(o,(0,r.Z)(a.items2.map((e=>({...e,dndcolumn:l.items2Title}))).map((e=>{let{dndcontent:t,...n}=e;return n})))),e((0,c.Rn)({arrayName:"caseDNDArrayFinal",arrayItems:[].concat((0,r.Z)(a.items.map((e=>({...e,dndcolumn:l.itemsTitle}))).map((e=>{let{dndcontent:t,...n}=e;return n}))),(0,r.Z)(a.items2.map((e=>({...e,dndcolumn:l.items2Title}))).map((e=>{let{dndcontent:t,...n}=e;return n}))))})),d({type:"MOVE",from:t.source.droppableId,to:t.destination.droppableId,fromIndex:t.source.index,toIndex:t.destination.index})}}));function p(e,t){return{userSelect:"none",padding:16,margin:"0 0 8px 0",color:e?"white":"grey",background:e?"#185abd":"white",...t}}function m(e){return{background:e?"#107a40":"#f8f9fa",padding:8,width:500}}return"undefined"!=typeof window?o.createElement("div",{className:"container p-5"},o.createElement("div",{style:{display:"flex"}},o.createElement(a.Z5,{onDragEnd:f},o.createElement(a.bK,{droppableId:"items",type:"PERSON"},((t,n)=>o.createElement("div",Object.assign({ref:t.innerRef},t.droppableProps,{style:m(n.isDraggingOver)}),o.createElement("small",null,l.itemsTitle),Array.isArray(null==l?void 0:l.items)&&l.items.map(((t,n)=>o.createElement(a._l,{key:t.id,draggableId:t.id,index:n},((n,r)=>o.createElement("div",Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps,{style:p(r.isDragging,n.draggableProps.style),className:"border border-secondary"}),o.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},t.dndcontent,o.createElement("button",{className:"btn btn-sm",onClick:()=>e((0,c.YE)({key:"selectedNote",value:t}))},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-binoculars",viewBox:"0 0 16 16"},o.createElement("path",{d:"M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z"}))))))))),t.placeholder))),o.createElement(a.bK,{droppableId:"items2",type:"PERSON"},((t,n)=>o.createElement("div",Object.assign({ref:t.innerRef},t.droppableProps,{style:m(n.isDraggingOver)}),o.createElement("small",null,l.items2Title),Array.isArray(null==l?void 0:l.items2)&&l.items2.map(((t,n)=>o.createElement(a._l,{key:t.id,draggableId:t.id,index:n},((n,r)=>o.createElement("div",Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps,{style:p(r.isDragging,n.draggableProps.style),className:"border border-secondary"}),o.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},t.dndcontent,o.createElement("button",{className:"btn btn-sm",onClick:()=>e((0,c.YE)({key:"selectedNote",value:t}))},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-binoculars",viewBox:"0 0 16 16"},o.createElement("path",{d:"M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z"}))))))))),t.placeholder)))))):null}t.Z=function(){return o.createElement(l,null)}},845:function(e,t){var n=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function r(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(o=e[r],a=t[r],!(o===a||n(o)&&n(a)))return!1;var o,a;return!0}t.Z=function(e,t){var n;void 0===t&&(t=r);var o,a=[],i=!1;return function(){for(var r=[],u=0;u<arguments.length;u++)r[u]=arguments[u];return i&&n===this&&t(r,a)||(o=e.apply(this,r),i=!0,n=this,a=r),o}}},5729:function(e,t){t.Z=function(e){var t=[],n=null,r=function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];t=o,n||(n=requestAnimationFrame((function(){n=null,e.apply(void 0,t)})))};return r.cancel=function(){n&&(cancelAnimationFrame(n),n=null)},r}},1693:function(e,t){var n=60103,r=60106,o=60107,a=60108,i=60114,u=60109,c=60110,s=60112,l=60113,d=60120,f=60115,p=60116,m=60121,v=60122,g=60117,h=60129,b=60131;if("function"==typeof Symbol&&Symbol.for){var y=Symbol.for;n=y("react.element"),r=y("react.portal"),o=y("react.fragment"),a=y("react.strict_mode"),i=y("react.profiler"),u=y("react.provider"),c=y("react.context"),s=y("react.forward_ref"),l=y("react.suspense"),d=y("react.suspense_list"),f=y("react.memo"),p=y("react.lazy"),m=y("react.block"),v=y("react.server.block"),g=y("react.fundamental"),h=y("react.debug_trace_mode"),b=y("react.legacy_hidden")}function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case i:case a:case l:case d:return e;default:switch(e=e&&e.$$typeof){case c:case s:case p:case f:case u:return e;default:return t}}case r:return t}}}t.isContextConsumer=function(e){return w(e)===c}},6001:function(e,t,n){e.exports=n(1693)},5169:function(e,t,n){n.d(t,{zt:function(){return l},$j:function(){return $}});var r=n(7294),o=r.createContext(null);var a=function(e){e()},i=function(){return a};var u={notify:function(){},get:function(){return[]}};function c(e,t){var n,r=u;function o(){c.onStateChange&&c.onStateChange()}function a(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=function(){var e=i(),t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}var c={addNestedSub:function(e){return a(),r.subscribe(e)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(n)},trySubscribe:a,tryUnsubscribe:function(){n&&(n(),n=void 0,r.clear(),r=u)},getListeners:function(){return r}};return c}var s="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;var l=function(e){var t=e.store,n=e.context,a=e.children,i=(0,r.useMemo)((function(){var e=c(t);return{store:t,subscription:e}}),[t]),u=(0,r.useMemo)((function(){return t.getState()}),[t]);s((function(){var e=i.subscription;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),u!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[i,u]);var l=n||o;return r.createElement(l.Provider,{value:i},a)},d=n(7462),f=n(3366),p=n(8679),m=n.n(p),v=n(6001),g=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],h=["reactReduxForwardedRef"],b=[],y=[null,null];function w(e,t){var n=e[1];return[t.payload,n+1]}function P(e,t,n){s((function(){return e.apply(void 0,t)}),n)}function E(e,t,n,r,o,a,i){e.current=r,t.current=o,n.current=!1,a.current&&(a.current=null,i())}function x(e,t,n,r,o,a,i,u,c,s){if(e){var l=!1,d=null,f=function(){if(!l){var e,n,f=t.getState();try{e=r(f,o.current)}catch(p){n=p,d=p}n||(d=null),e===a.current?i.current||c():(a.current=e,u.current=e,i.current=!0,s({type:"STORE_UPDATED",payload:{error:n}}))}};n.onStateChange=f,n.trySubscribe(),f();return function(){if(l=!0,n.tryUnsubscribe(),n.onStateChange=null,d)throw d}}}var O=function(){return[null,0]};function S(e,t){void 0===t&&(t={});var n=t,a=n.getDisplayName,i=void 0===a?function(e){return"ConnectAdvanced("+e+")"}:a,u=n.methodName,s=void 0===u?"connectAdvanced":u,l=n.renderCountProp,p=void 0===l?void 0:l,S=n.shouldHandleStateChanges,A=void 0===S||S,N=n.storeKey,C=void 0===N?"store":N,R=(n.withRef,n.forwardRef),V=void 0!==R&&R,M=n.context,T=void 0===M?o:M,B=(0,f.Z)(n,g),Z=T;return function(t){var n=t.displayName||t.name||"Component",o=i(n),a=(0,d.Z)({},B,{getDisplayName:i,methodName:s,renderCountProp:p,shouldHandleStateChanges:A,storeKey:C,displayName:o,wrappedComponentName:n,WrappedComponent:t}),u=B.pure;var l=u?r.useMemo:function(e){return e()};function g(n){var o=(0,r.useMemo)((function(){var e=n.reactReduxForwardedRef,t=(0,f.Z)(n,h);return[n.context,e,t]}),[n]),i=o[0],u=o[1],s=o[2],p=(0,r.useMemo)((function(){return i&&i.Consumer&&(0,v.isContextConsumer)(r.createElement(i.Consumer,null))?i:Z}),[i,Z]),m=(0,r.useContext)(p),g=Boolean(n.store)&&Boolean(n.store.getState)&&Boolean(n.store.dispatch);Boolean(m)&&Boolean(m.store);var S=g?n.store:m.store,N=(0,r.useMemo)((function(){return function(t){return e(t.dispatch,a)}(S)}),[S]),C=(0,r.useMemo)((function(){if(!A)return y;var e=c(S,g?null:m.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[S,g,m]),R=C[0],V=C[1],M=(0,r.useMemo)((function(){return g?m:(0,d.Z)({},m,{subscription:R})}),[g,m,R]),T=(0,r.useReducer)(w,b,O),B=T[0][0],_=T[1];if(B&&B.error)throw B.error;var j=(0,r.useRef)(),I=(0,r.useRef)(s),k=(0,r.useRef)(),D=(0,r.useRef)(!1),q=l((function(){return k.current&&s===I.current?k.current:N(S.getState(),s)}),[S,B,s]);P(E,[I,j,D,s,q,k,V]),P(x,[A,S,R,N,I,j,D,k,V,_],[S,R,N]);var z=(0,r.useMemo)((function(){return r.createElement(t,(0,d.Z)({},q,{ref:u}))}),[u,t,q]);return(0,r.useMemo)((function(){return A?r.createElement(p.Provider,{value:M},z):z}),[p,z,M])}var S=u?r.memo(g):g;if(S.WrappedComponent=t,S.displayName=g.displayName=o,V){var N=r.forwardRef((function(e,t){return r.createElement(S,(0,d.Z)({},e,{reactReduxForwardedRef:t}))}));return N.displayName=o,N.WrappedComponent=t,m()(N,t)}return m()(S,t)}}function A(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function N(e,t){if(A(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!A(e[n[o]],t[n[o]]))return!1;return!0}function C(e){return function(t,n){var r=e(t,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function R(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function V(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=R(e);var o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=R(o),o=r(t,n)),o},r}}var M=[function(e){return"function"==typeof e?V(e):void 0},function(e){return e?void 0:C((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?C((function(t){return function(e,t){var n={},r=function(r){var o=e[r];"function"==typeof o&&(n[r]=function(){return t(o.apply(void 0,arguments))})};for(var o in e)r(o);return n}(e,t)})):void 0}];var T=[function(e){return"function"==typeof e?V(e):void 0},function(e){return e?void 0:C((function(){return{}}))}];function B(e,t,n){return(0,d.Z)({},n,e,t)}var Z=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r,o=n.pure,a=n.areMergedPropsEqual,i=!1;return function(t,n,u){var c=e(t,n,u);return i?o&&a(c,r)||(r=c):(i=!0,r=c),r}}}(e):void 0},function(e){return e?void 0:function(){return B}}],_=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function j(e,t,n,r){return function(o,a){return n(e(o,a),t(r,a),a)}}function I(e,t,n,r,o){var a,i,u,c,s,l=o.areStatesEqual,d=o.areOwnPropsEqual,f=o.areStatePropsEqual,p=!1;function m(o,p){var m,v,g=!d(p,i),h=!l(o,a,p,i);return a=o,i=p,g&&h?(u=e(a,i),t.dependsOnOwnProps&&(c=t(r,i)),s=n(u,c,i)):g?(e.dependsOnOwnProps&&(u=e(a,i)),t.dependsOnOwnProps&&(c=t(r,i)),s=n(u,c,i)):h?(m=e(a,i),v=!f(m,u),u=m,v&&(s=n(u,c,i)),s):s}return function(o,l){return p?m(o,l):(u=e(a=o,i=l),c=t(r,i),s=n(u,c,i),p=!0,s)}}function k(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,a=(0,f.Z)(t,_),i=n(e,a),u=r(e,a),c=o(e,a);return(a.pure?I:j)(i,u,c,e,a)}var D=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function q(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function z(e,t){return e===t}function H(e){var t=void 0===e?{}:e,n=t.connectHOC,r=void 0===n?S:n,o=t.mapStateToPropsFactories,a=void 0===o?T:o,i=t.mapDispatchToPropsFactories,u=void 0===i?M:i,c=t.mergePropsFactories,s=void 0===c?Z:c,l=t.selectorFactory,p=void 0===l?k:l;return function(e,t,n,o){void 0===o&&(o={});var i=o,c=i.pure,l=void 0===c||c,m=i.areStatesEqual,v=void 0===m?z:m,g=i.areOwnPropsEqual,h=void 0===g?N:g,b=i.areStatePropsEqual,y=void 0===b?N:b,w=i.areMergedPropsEqual,P=void 0===w?N:w,E=(0,f.Z)(i,D),x=q(e,a,"mapStateToProps"),O=q(t,u,"mapDispatchToProps"),S=q(n,s,"mergeProps");return r(p,(0,d.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:x,initMapDispatchToProps:O,initMergeProps:S,pure:l,areStatesEqual:v,areOwnPropsEqual:h,areStatePropsEqual:y,areMergedPropsEqual:P},E))}}var $=H();var F,W=n(3935);F=W.unstable_batchedUpdates,a=F},4051:function(e,t,n){var r=n(4184),o=n.n(r),a=n(7294),i=n(6792),u=n(5893);const c=a.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},a)=>{const c=(0,i.vE)(e,"row"),s=(0,i.pi)(),l=(0,i.zG)(),d=`${c}-cols`,f=[];return s.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const o=e!==l?`-${e}`:"";null!=n&&f.push(`${d}${o}-${n}`)})),(0,u.jsx)(n,{ref:a,...r,className:o()(t,c,...f)})}));c.displayName="Row",t.Z=c},1163:function(e,t,n){n.d(t,{I4:function(){return i},Ye:function(){return a}});var r=n(7294);function o(e,t){var n=(0,r.useState)((function(){return{inputs:t,result:e()}}))[0],o=(0,r.useRef)(!0),a=(0,r.useRef)(n),i=o.current||Boolean(t&&a.current.inputs&&function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.current.inputs))?a.current:{inputs:t,result:e()};return(0,r.useEffect)((function(){o.current=!1,a.current=i}),[i]),i.result}var a=o,i=function(e,t){return o((function(){return e}),t)}},7462:function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=c61bafa3083b25fd70d9bc454c7b8ed605097128-bc1dca3e8f367fdc16f3.js.map