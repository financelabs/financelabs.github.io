/*! For license information please see 22c3e41dead401d1cfb716926ea6bf170c12a611-a4670ee60fd9b952838f.js.LICENSE.txt */
(self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5=self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5||[]).push([[307],{4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return _},DV:function(){return j},GJ:function(){return T},L:function(){return u},LL:function(){return A},P0:function(){return g},Sg:function(){return v},UI:function(){return H},US:function(){return o},Wl:function(){return k},Yr:function(){return I},ZR:function(){return C},aH:function(){return b},b$:function(){return w},cI:function(){return N},dS:function(){return z},eu:function(){return D},g5:function(){return a},gK:function(){return V},gQ:function(){return F},h$:function(){return l},hl:function(){return S},hu:function(){return i},m9:function(){return W},p$:function(){return f},r3:function(){return R},uI:function(){return y},ug:function(){return U},vZ:function(){return M},w9:function(){return L},xO:function(){return x},xb:function(){return P}});const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw a(t)},a=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],a=i+1<e.length,s=a?e[i+1]:0,o=i+2<e.length,c=o?e[i+2]:0,l=t>>2,u=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;o||(f=64,a||(h=64)),r.push(n[l],n[u],n[h],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){const a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{const a=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const s=i<e.length?n[e.charAt(i)]:64;++i;const o=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==s||null==o)throw new c;const l=t<<2|a>>4;if(r.push(l),64!==s){const e=a<<4&240|s>>2;if(r.push(e),64!==o){const e=s<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l=function(e){const t=s(e);return o.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function f(e){return d(void 0,e)}function d(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=d(e[n],t[n]));return e}const p=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,m=()=>{try{return p()||(()=>{if("undefined"==typeof process||void 0==={})return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&h(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},g=e=>{const t=(e=>{var t,n;return null===(n=null===(t=m())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},b=()=>{var e;return null===(e=m())||void 0===e?void 0:e.config};class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}function v(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(a)),""].join(".")}function E(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function y(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function w(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function I(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function S(){try{return"object"==typeof indexedDB}catch(e){return!1}}function D(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}class C extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?function(e,t){return e.replace(O,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${a} (${r}).`;return new C(r,s,n)}}const O=/\{\$([^}]+)}/g;function N(e){return JSON.parse(e)}function k(e){return JSON.stringify(e)}const B=function(e){let t={},n={},r={},i="";try{const a=e.split(".");t=N(h(a[0])||""),n=N(h(a[1])||""),i=a[2],r=n.d||{},delete n.d}catch(a){}return{header:t,claims:n,data:r,signature:i}},L=function(e){const t=B(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},T=function(e){const t=B(e).claims;return"object"==typeof t&&!0===t.admin};function R(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function j(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function P(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function H(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function M(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],a=t[i];if($(n)&&$(a)){if(!M(n,a))return!1}else if(n!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $(e){return null!==e&&"object"==typeof e}function x(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class F{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let r,i,a=this.chain_[0],s=this.chain_[1],o=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=c^s&(o^c),i=1518500249):(r=s^o^c,i=1859775393):u<60?(r=s&o|c&(s|o),i=2400959708):(r=s^o^c,i=3395469782);const e=(a<<5|a>>>27)+r+l+i+n[u]&4294967295;l=c,c=o,o=4294967295&(s<<30|s>>>2),s=a,a=e}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let a=this.inbuf_;for(;r<t;){if(0===a)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[a]=e.charCodeAt(r),++a,++r,a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++a,++r,a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function V(e,t){return`${e} failed: ${t} argument `}const z=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);if(a>=55296&&a<=56319){const t=a-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");a=65536+(t<<10)+(e.charCodeAt(r)-56320)}a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):a<65536?(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},U=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};function W(e){return e&&e._delegate?e._delegate:e}},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=i.apply(null,n);s&&e.push(s)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},7440:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(389);(0,r.KN)("firebase","9.19.1","app");const i={apiKey:"AIzaSyDUamZR2aXuP2rFG1AFpb1Ni8aZA5uhSj4",authDomain:"fincalculations.firebaseapp.com",databaseURL:"https://fincalculations.firebaseio.com",projectId:"fincalculations",storageBucket:"fincalculations.appspot.com",messagingSenderId:"892270777573",appId:"1:892270777573:web:bdc13e9b47334b4319700c",measurementId:void 0};var a=(0,r.ZF)(i)},6301:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(7294),i=n(1883),a=n(5998),s=n(4284);const o=e=>{let{isCurrent:t}=e;return t?{className:"nav-link active"}:{className:"nav-link"}},c=e=>r.createElement(i.Link,Object.assign({getProps:o},e));function l(e){let{siteTitle:t}=e;const n=(0,a.v9)(s.zb)||"",o=(0,a.v9)(s.L7)||[];return r.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-secondary"},r.createElement("div",{className:"container-fluid"},r.createElement(i.Link,{to:"/",className:"navbar-brand",href:"#"},t),r.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#main-navbar","aria-controls":"main-navbar","aria-expanded":"false","aria-label":"Toggle navigation"},r.createElement("span",{className:"navbar-toggler-icon"})),r.createElement("div",{className:"collapse navbar-collapse",id:"main-navbar"},r.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"},r.createElement("li",{className:"nav-item"},r.createElement(c,{to:"/login"},"Login")),r.createElement("li",{className:"nav-item"},r.createElement(c,{to:"/accountingwithprofitscash"},"Accounting With Profits Cash")),Array.isArray(o)&o.length>0&n.includes("accounting")?r.createElement("li",{className:"nav-item"},r.createElement(c,{to:"/accountingdnd"},"Accounting DnD")):null,r.createElement("li",{className:"nav-item"},r.createElement(c,{to:"/myworkbookdnd"},"Workbook DnD")),Array.isArray(o)&o.length>0&n.includes("myworkbook")?r.createElement("li",{className:"nav-item"},r.createElement(c,{to:"/myworkbook"},"Workbook")):null,Array.isArray(o)&o.length>0&n.includes("myworkbook")?r.createElement("li",{className:"nav-item"},r.createElement(c,{to:"/myworkbooktrash"},"Workbook trash")):null)),r.createElement("a",{href:"/"},r.createElement("img",{src:"https://sun9-37.userapi.com/c317630/v317630439/76a0/Bz6QTfBog0I.jpg?ava=1",alt:"",style:{marginRight:"1rem",width:"40px",height:"40px",borderRadius:"50%",filter:"grayscale(100%)",objectFit:"cover"}}))))}l.defaultProps={siteTitle:""};var u=l;var h=e=>{var t;let{children:n}=e;const a=(0,i.useStaticQuery)("3649515864");return r.createElement("div",{className:"container-fluid p-0"},r.createElement(u,{siteTitle:(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("main",null,n))}},1707:function(e,t,n){"use strict";n.d(t,{p:function(){return a}});var r=n(7294),i=n(1883);const a=e=>{let{title:t,description:n,pathname:a,children:s}=e;const{title:o,description:c,siteUrl:l}=(0,i.useStaticQuery)("63159454").site.siteMetadata,u={title:t||o,description:n||c,url:""+l+(a||"")};return r.createElement(r.Fragment,null,r.createElement("title",null,u.title),r.createElement("meta",{name:"description",content:u.description}),r.createElement("meta",{name:"twitter:title",content:u.title}),r.createElement("meta",{name:"twitter:url",content:u.url}),r.createElement("meta",{name:"twitter:description",content:u.description}),s)}},1407:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7440),i=n(1019);function a(e){void 0===e&&(e="crafts/temp_gmail_com/posts/-Ml6DEjYhdnjuW6HiHB7");const t=(0,i.N8)(r.Z),n=(0,i.iH)(t,e);return(0,i.VF)(n).key}},5453:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7440),i=n(1019);function a(e,t){void 0===e&&(e={"crafts/temp_gmail_com/posts/-Ml6DEjYhdnjuW6HiHB7":{id:0}}),void 0===t&&(t=null);const n=(0,i.N8)(r.Z);(0,i.Vx)((0,i.iH)(n),e).then((()=>{console.log("Done"),"reload"===t&&window.location.reload()})).catch((e=>{console.log(e)}))}},682:function(e,t,n){"use strict";var r=n(4184),i=n.n(r),a=n(7294),s=n(6792),o=n(5893);const c=a.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...a},c)=>{const l=(0,s.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,o.jsx)(n,{ref:c,...a,className:i()(r,t?`${l}${u}`:l)})}));c.displayName="Container",c.defaultProps={fluid:!1},t.Z=c},6792:function(e,t,n){"use strict";n.d(t,{SC:function(){return h},pi:function(){return l},vE:function(){return c},zG:function(){return u}});var r=n(7294);n(5893);const i=["xxl","xl","lg","md","sm","xs"],a=r.createContext({prefixes:{},breakpoints:i,minBreakpoint:"xs"}),{Consumer:s,Provider:o}=a;function c(e,t){const{prefixes:n}=(0,r.useContext)(a);return e||n[t]||t}function l(){const{breakpoints:e}=(0,r.useContext)(a);return e}function u(){const{minBreakpoint:e}=(0,r.useContext)(a);return e}function h(){const{dir:e}=(0,r.useContext)(a);return"rtl"===e}},389:function(e,t,n){"use strict";n.d(t,{Jn:function(){return H},qX:function(){return T},Xd:function(){return L},Mq:function(){return $},ZF:function(){return M},KN:function(){return x}});var r=n(8463),i=n(3333),a=n(4444);const s=(e,t)=>t.some((t=>e instanceof t));let o,c;const l=new WeakMap,u=new WeakMap,h=new WeakMap,f=new WeakMap,d=new WeakMap;let p={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function m(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(_(this),t),b(l.get(this))}:function(...t){return b(e.apply(_(this),t))}:function(t,...n){const r=e.call(_(this),t,...n);return h.set(r,t.sort?t.sort():[t]),b(r)}}function g(e){return"function"==typeof e?m(e):(e instanceof IDBTransaction&&function(e){if(u.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));u.set(e,t)}(e),s(e,o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,p):e)}function b(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(b(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&l.set(t,e)})).catch((()=>{})),d.set(t,e),t}(e);if(f.has(e))return f.get(e);const t=g(e);return t!==e&&(f.set(e,t),d.set(t,e)),t}const _=e=>d.get(e);const v=["get","getKey","getAll","getAllKeys","count"],E=["put","add","delete","clear"],y=new Map;function w(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(y.get(t))return y.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=E.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!v.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,i?"readwrite":"readonly");let s=a.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&a.done]))[0]};return y.set(t,a),a}p=(e=>({...e,get:(t,n,r)=>w(t,n)||e.get(t,n,r),has:(t,n)=>!!w(t,n)||e.has(t,n)}))(p);class I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const S="@firebase/app",D="0.9.7",C=new i.Yd("@firebase/app"),A="[DEFAULT]",O={[S]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},N=new Map,k=new Map;function B(e,t){try{e.container.addComponent(t)}catch(n){C.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function L(e){const t=e.name;if(k.has(t))return C.debug(`There were multiple attempts to register component ${t}.`),!1;k.set(t,e);for(const n of N.values())B(n,e);return!0}function T(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const R={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},j=new a.LL("app","Firebase",R);class P{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw j.create("app-deleted",{appName:this._name})}}const H="9.19.1";function M(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:A,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw j.create("bad-app-name",{appName:String(s)});if(n||(n=(0,a.aH)()),!n)throw j.create("no-options");const o=N.get(s);if(o){if((0,a.vZ)(n,o.options)&&(0,a.vZ)(i,o.config))return o;throw j.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of k.values())c.addComponent(r);const l=new P(n,i,c);return N.set(s,l),l}function $(e=A){const t=N.get(e);if(!t&&e===A)return M();if(!t)throw j.create("no-app",{appName:e});return t}function x(e,t,n){var i;let a=null!==(i=O[e])&&void 0!==i?i:e;n&&(a+=`-${n}`);const s=a.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${a}" with version "${t}":`];return s&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void C.warn(e.join(" "))}L(new r.wA(`${a}-version`,(()=>({library:a,version:t})),"VERSION"))}const F="firebase-heartbeat-database",V=1,z="firebase-heartbeat-store";let U=null;function W(){return U||(U=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const s=indexedDB.open(e,t),o=b(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(b(s.result),e.oldVersion,e.newVersion,b(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),o.then((e=>{a&&e.addEventListener("close",(()=>a())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),o}(F,V,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(z)}}).catch((e=>{throw j.create("idb-open",{originalErrorMessage:e.message})}))),U}async function Z(e,t){try{const n=(await W()).transaction(z,"readwrite"),r=n.objectStore(z);return await r.put(t,J(e)),n.done}catch(n){if(n instanceof a.ZR)C.warn(n.message);else{const e=j.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});C.warn(e.message)}}}function J(e){return`${e.name}!${e.options.appId}`}class G{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Y(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=K();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=K(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Q(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Q(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,a.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function K(){return(new Date).toISOString().substring(0,10)}class Y{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,a.hl)()&&(0,a.eu)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await W()).transaction(z).objectStore(z).get(J(e))}catch(t){if(t instanceof a.ZR)C.warn(t.message);else{const e=j.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});C.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Q(e){return(0,a.L)(JSON.stringify({version:2,heartbeats:e})).length}var X;X="",L(new r.wA("platform-logger",(e=>new I(e)),"PRIVATE")),L(new r.wA("heartbeat",(e=>new G(e)),"PRIVATE")),x(S,D,X),x(S,D,"esm2017"),x("fire-js","")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return o},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const a="[DEFAULT]";class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:a})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=a){return this.instances.has(e)}getOptions(e=a){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&a.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===a?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=a){return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";n.d(t,{Yd:function(){return l},in:function(){return i}});const r=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const a={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,o={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=o[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},1019:function(e,t,n){"use strict";n.d(t,{N8:function(){return r.N8},VF:function(){return r.VF},Vx:function(){return r.Vx},iH:function(){return r.iH}});var r=n(5276)}}]);
//# sourceMappingURL=22c3e41dead401d1cfb716926ea6bf170c12a611-a4670ee60fd9b952838f.js.map