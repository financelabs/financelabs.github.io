"use strict";(self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5=self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5||[]).push([[518],{7536:function(e,t,r){r.d(t,{cI:function(){return we}});var s=r(7294),a=e=>"checkbox"===e.type,i=e=>e instanceof Date,n=e=>null==e;const o=e=>"object"==typeof e;var u=e=>!n(e)&&!Array.isArray(e)&&o(e)&&!i(e),l=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),d=e=>{const t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")},f="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function y(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(f&&(e instanceof Blob||e instanceof FileList)||!r&&!u(e))return e;if(t=r?[]:{},Array.isArray(e)||d(e))for(const r in e)t[r]=y(e[r]);else t=e}return t}var m=e=>Array.isArray(e)?e.filter(Boolean):[],h=e=>void 0===e,v=(e,t,r)=>{if(!t||!u(e))return r;const s=m(t.split(/[,[\].]+?/)).reduce(((e,t)=>n(e)?e:e[t]),e);return h(s)||s===e?h(e[t])?r:e[t]:s};const g={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},p={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},_="max",b="min",V="maxLength",A="minLength",w="pattern",S="required",F="validate";s.createContext(null);var x=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const a=i;return t._proxyFormState[a]!==p.all&&(t._proxyFormState[a]=!s||p.all),r&&(r[a]=!0),e[a]}});return a},k=e=>u(e)&&!Object.keys(e).length,D=(e,t,r,s)=>{r(e);const{name:a,...i}=e;return k(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find((e=>t[e]===(!s||p.all)))},O=e=>Array.isArray(e)?e:[e];function C(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}var T=e=>"string"==typeof e,E=(e,t,r,s,a)=>T(e)?(s&&t.watch.add(e),v(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),v(r,e)))):(s&&(t.watchAll=!0),r);var U=e=>/^\w*$/.test(e),L=e=>m(e.replace(/["|']|\]/g,"").split(/\.|\[/));function B(e,t,r){let s=-1;const a=U(t)?[t]:L(t),i=a.length,n=i-1;for(;++s<i;){const t=a[s];let i=r;if(s!==n){const r=e[t];i=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=i,e=e[t]}return e}var N=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{};const j=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=v(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else u(s)&&j(s,t)}}};var M=e=>({isOnSubmit:!e||e===p.onSubmit,isOnBlur:e===p.onBlur,isOnChange:e===p.onChange,isOnAll:e===p.all,isOnTouch:e===p.onTouched}),q=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),R=(e,t,r)=>{const s=m(v(e,r));return B(s,"root",t[r]),B(e,r,s),e},H=e=>"boolean"==typeof e,I=e=>"file"===e.type,P=e=>"function"==typeof e,$=e=>{if(!f)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},W=e=>T(e),G=e=>"radio"===e.type,z=e=>e instanceof RegExp;const J={value:!1,isValid:!1},K={value:!0,isValid:!0};var Q=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!h(e[0].attributes.value)?h(e[0].value)||""===e[0].value?K:{value:e[0].value,isValid:!0}:K:J}return J};const X={isValid:!1,value:null};var Y=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),X):X;function Z(e,t,r="validate"){if(W(e)||Array.isArray(e)&&e.every(W)||H(e)&&!e)return{type:r,message:W(e)?e:"",ref:t}}var ee=e=>u(e)&&!z(e)?e:{value:e,message:""},te=async(e,t,r,s,i)=>{const{ref:o,refs:l,required:c,maxLength:d,minLength:f,min:y,max:m,pattern:g,validate:p,name:x,valueAsNumber:D,mount:O,disabled:C}=e._f,E=v(t,x);if(!O||C)return{};const U=l?l[0]:o,L=e=>{s&&U.reportValidity&&(U.setCustomValidity(H(e)?"":e||""),U.reportValidity())},B={},j=G(o),M=a(o),q=j||M,R=(D||I(o))&&h(o.value)&&h(E)||$(o)&&""===o.value||""===E||Array.isArray(E)&&!E.length,J=N.bind(null,x,r,B),K=(e,t,r,s=V,a=A)=>{const i=e?t:r;B[x]={type:e?s:a,message:i,ref:o,...J(e?s:a,i)}};if(i?!Array.isArray(E)||!E.length:c&&(!q&&(R||n(E))||H(E)&&!E||M&&!Q(l).isValid||j&&!Y(l).isValid)){const{value:e,message:t}=W(c)?{value:!!c,message:c}:ee(c);if(e&&(B[x]={type:S,message:t,ref:U,...J(S,t)},!r))return L(t),B}if(!(R||n(y)&&n(m))){let e,t;const s=ee(m),a=ee(y);if(n(E)||isNaN(E)){const r=o.valueAsDate||new Date(E),i=e=>new Date((new Date).toDateString()+" "+e),n="time"==o.type,u="week"==o.type;T(s.value)&&E&&(e=n?i(E)>i(s.value):u?E>s.value:r>new Date(s.value)),T(a.value)&&E&&(t=n?i(E)<i(a.value):u?E<a.value:r<new Date(a.value))}else{const r=o.valueAsNumber||(E?+E:E);n(s.value)||(e=r>s.value),n(a.value)||(t=r<a.value)}if((e||t)&&(K(!!e,s.message,a.message,_,b),!r))return L(B[x].message),B}if((d||f)&&!R&&(T(E)||i&&Array.isArray(E))){const e=ee(d),t=ee(f),s=!n(e.value)&&E.length>+e.value,a=!n(t.value)&&E.length<+t.value;if((s||a)&&(K(s,e.message,t.message),!r))return L(B[x].message),B}if(g&&!R&&T(E)){const{value:e,message:t}=ee(g);if(z(e)&&!E.match(e)&&(B[x]={type:w,message:t,ref:o,...J(w,t)},!r))return L(t),B}if(p)if(P(p)){const e=Z(await p(E,t),U);if(e&&(B[x]={...e,...J(F,e.message)},!r))return L(e.message),B}else if(u(p)){let e={};for(const s in p){if(!k(e)&&!r)break;const a=Z(await p[s](E,t),U,s);a&&(e={...a,...J(s,a.message)},L(a.message),r&&(B[x]=e))}if(!k(e)&&(B[x]={ref:U,...e},!r))return B}return L(!0),B};function re(e,t){const r=Array.isArray(t)?t:U(t)?[t]:L(t),s=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=h(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,i=r[a];return s&&delete s[i],0!==a&&(u(s)&&k(s)||Array.isArray(s)&&function(e){for(const t in e)if(!h(e[t]))return!1;return!0}(s))&&re(e,r.slice(0,-1)),e}function se(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var ae=e=>n(e)||!o(e);function ie(e,t){if(ae(e)||ae(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(i(r)&&i(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!ie(r,e):r!==e)return!1}}return!0}var ne=e=>"select-multiple"===e.type,oe=e=>G(e)||a(e),ue=e=>$(e)&&e.isConnected,le=e=>{for(const t in e)if(P(e[t]))return!0;return!1};function ce(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const s in e)Array.isArray(e[s])||u(e[s])&&!le(e[s])?(t[s]=Array.isArray(e[s])?[]:{},ce(e[s],t[s])):n(e[s])||(t[s]=!0);return t}function de(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const a in e)Array.isArray(e[a])||u(e[a])&&!le(e[a])?h(t)||ae(r[a])?r[a]=Array.isArray(e[a])?ce(e[a],[]):{...ce(e[a])}:de(e[a],n(t)?{}:t[a],r[a]):r[a]=!ie(e[a],t[a]);return r}var fe=(e,t)=>de(e,t,ce(t)),ye=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>h(e)?e:t?""===e?NaN:e?+e:e:r&&T(e)?new Date(e):s?s(e):e;function me(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return I(t)?t.files:G(t)?Y(e.refs).value:ne(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?Q(e.refs).value:ye(h(t.value)?e.ref.value:t.value,e)}var he=(e,t,r,s)=>{const a={};for(const i of e){const e=v(t,i);e&&B(a,i,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},ve=e=>h(e)?e:z(e)?e.source:u(e)?z(e.value)?e.value.source:e.value:e,ge=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function pe(e,t,r){const s=v(e,r);if(s||U(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=v(t,s),n=v(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}var _e=(e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e),be=(e,t)=>!m(v(e,t)).length&&re(e,t);const Ve={mode:p.onSubmit,reValidateMode:p.onChange,shouldFocusError:!0};function Ae(e={},t){let r,s={...Ve,...e},o={submitCount:0,isDirty:!1,isLoading:P(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},d={},_=(u(s.defaultValues)||u(s.values))&&y(s.defaultValues||s.values)||{},b=s.shouldUnregister?{}:y(_),V={action:!1,mount:!1,watch:!1},A={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w=0;const S={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},F={values:se(),array:se(),state:se()},x=e.resetOptions&&e.resetOptions.keepDirtyValues,D=M(s.mode),C=M(s.reValidateMode),U=s.criteriaMode===p.all,L=async e=>{if(S.isValid||e){const e=s.resolver?k((await J()).errors):await K(d,!0);e!==o.isValid&&F.state.next({isValid:e})}},N=e=>S.isValidating&&F.state.next({isValidating:e}),W=(e,t,r,s)=>{const a=v(d,e);if(a){const i=v(b,e,h(r)?v(_,e):r);h(i)||s&&s.defaultChecked||t?B(b,e,t?i:me(a._f)):Y(e,i),V.mount&&L()}},G=(e,t,r,s,a)=>{let i=!1,n=!1;const u={name:e};if(!r||s){S.isDirty&&(n=o.isDirty,o.isDirty=u.isDirty=Q(),i=n!==u.isDirty);const r=ie(v(_,e),t);n=v(o.dirtyFields,e),r?re(o.dirtyFields,e):B(o.dirtyFields,e,!0),u.dirtyFields=o.dirtyFields,i=i||S.dirtyFields&&n!==!r}if(r){const t=v(o.touchedFields,e);t||(B(o.touchedFields,e,r),u.touchedFields=o.touchedFields,i=i||S.touchedFields&&t!==r)}return i&&a&&F.state.next(u),i?u:{}},z=(t,s,a,i)=>{const n=v(o.errors,t),u=S.isValid&&H(s)&&o.isValid!==s;var l;if(e.delayError&&a?(l=()=>((e,t)=>{B(o.errors,e,t),F.state.next({errors:o.errors})})(t,a),r=e=>{clearTimeout(w),w=setTimeout(l,e)},r(e.delayError)):(clearTimeout(w),r=null,a?B(o.errors,t,a):re(o.errors,t)),(a?!ie(n,a):n)||!k(i)||u){const e={...i,...u&&H(s)?{isValid:s}:{},errors:o.errors,name:t};o={...o,...e},F.state.next(e)}N(!1)},J=async e=>s.resolver(b,s.context,he(e||A.mount,d,s.criteriaMode,s.shouldUseNativeValidation)),K=async(e,t,r={valid:!0})=>{for(const a in e){const i=e[a];if(i){const{_f:e,...a}=i;if(e){const a=A.array.has(e.name),n=await te(i,b,U,s.shouldUseNativeValidation&&!t,a);if(n[e.name]&&(r.valid=!1,t))break;!t&&(v(n,e.name)?a?R(o.errors,n,e.name):B(o.errors,e.name,n[e.name]):re(o.errors,e.name))}a&&await K(a,t,r)}}return r.valid},Q=(e,t)=>(e&&t&&B(b,e,t),!ie(de(),_)),X=(e,t,r)=>E(e,A,{...V.mount?b:h(t)?_:T(e)?{[e]:t}:t},r,t),Y=(e,t,r={})=>{const s=v(d,e);let i=t;if(s){const r=s._f;r&&(!r.disabled&&B(b,e,ye(t,r)),i=$(r.ref)&&n(t)?"":t,ne(r.ref)?[...r.ref.options].forEach((e=>e.selected=i.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find((t=>t===e.value)):i===e.value))):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach((e=>e.checked=e.value===i)):I(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||F.values.next({name:e,values:{...b}})))}(r.shouldDirty||r.shouldTouch)&&G(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ce(e)},Z=(e,t,r)=>{for(const s in t){const a=t[s],n=`${e}.${s}`,o=v(d,n);!A.array.has(e)&&ae(a)&&(!o||o._f)||i(a)?Y(n,a,r):Z(n,a,r)}},ee=(e,r,s={})=>{const a=v(d,e),i=A.array.has(e),u=y(r);B(b,e,u),i?(F.array.next({name:e,values:{...b}}),(S.isDirty||S.dirtyFields)&&s.shouldDirty&&F.state.next({name:e,dirtyFields:fe(_,b),isDirty:Q(e,u)})):!a||a._f||n(u)?Y(e,u,s):Z(e,u,s),q(e,A)&&F.state.next({...o}),F.values.next({name:e,values:{...b}}),!V.mount&&t()},le=async e=>{const t=e.target;let a=t.name,i=!0;const n=v(d,a);if(n){let u,c;const f=t.type?me(n._f):l(e),y=e.type===g.BLUR||e.type===g.FOCUS_OUT,m=!ge(n._f)&&!s.resolver&&!v(o.errors,a)&&!n._f.deps||_e(y,v(o.touchedFields,a),o.isSubmitted,C,D),h=q(a,A,y);B(b,a,f),y?(n._f.onBlur&&n._f.onBlur(e),r&&r(0)):n._f.onChange&&n._f.onChange(e);const p=G(a,f,y,!1),_=!k(p)||h;if(!y&&F.values.next({name:a,type:e.type,values:{...b}}),m)return S.isValid&&L(),_&&F.state.next({name:a,...h?{}:p});if(!y&&h&&F.state.next({...o}),N(!0),s.resolver){const{errors:e}=await J([a]),t=pe(o.errors,d,a),r=pe(e,d,t.name||a);u=r.error,a=r.name,c=k(e)}else u=(await te(n,b,U,s.shouldUseNativeValidation))[a],i=isNaN(f)||f===v(b,a,f),i&&(u?c=!1:S.isValid&&(c=await K(d,!0)));i&&(n._f.deps&&ce(n._f.deps),z(a,c,u,p))}},ce=async(e,t={})=>{let r,a;const i=O(e);if(N(!0),s.resolver){const t=await(async e=>{const{errors:t}=await J();if(e)for(const r of e){const e=v(t,r);e?B(o.errors,r,e):re(o.errors,r)}else o.errors=t;return t})(h(e)?e:i);r=k(t),a=e?!i.some((e=>v(t,e))):r}else e?(a=(await Promise.all(i.map((async e=>{const t=v(d,e);return await K(t&&t._f?{[e]:t}:t)})))).every(Boolean),(a||o.isValid)&&L()):a=r=await K(d);return F.state.next({...!T(e)||S.isValid&&r!==o.isValid?{}:{name:e},...s.resolver||!e?{isValid:r}:{},errors:o.errors,isValidating:!1}),t.shouldFocus&&!a&&j(d,(e=>e&&v(o.errors,e)),e?i:A.mount),a},de=e=>{const t={..._,...V.mount?b:{}};return h(e)?t:T(e)?v(t,e):e.map((e=>v(t,e)))},Ae=(e,t)=>({invalid:!!v((t||o).errors,e),isDirty:!!v((t||o).dirtyFields,e),isTouched:!!v((t||o).touchedFields,e),error:v((t||o).errors,e)}),we=(e,t={})=>{for(const r of e?O(e):A.mount)A.mount.delete(r),A.array.delete(r),t.keepValue||(re(d,r),re(b,r)),!t.keepError&&re(o.errors,r),!t.keepDirty&&re(o.dirtyFields,r),!t.keepTouched&&re(o.touchedFields,r),!s.shouldUnregister&&!t.keepDefaultValue&&re(_,r);F.values.next({values:{...b}}),F.state.next({...o,...t.keepDirty?{isDirty:Q()}:{}}),!t.keepIsValid&&L()},Se=(e,t={})=>{let r=v(d,e);const a=H(t.disabled);return B(d,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),A.mount.add(e),r?a&&B(b,e,t.disabled?void 0:v(b,e,me(r._f))):W(e,!0,t.value),{...a?{disabled:t.disabled}:{},...s.shouldUseNativeValidation?{required:!!t.required,min:ve(t.min),max:ve(t.max),minLength:ve(t.minLength),maxLength:ve(t.maxLength),pattern:ve(t.pattern)}:{},name:e,onChange:le,onBlur:le,ref:a=>{if(a){Se(e,t),r=v(d,e);const s=h(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,i=oe(s),n=r._f.refs||[];if(i?n.find((e=>e===s)):s===r._f.ref)return;B(d,e,{_f:{...r._f,...i?{refs:[...n.filter(ue),s,...Array.isArray(v(_,e))?[{}]:[]],ref:{type:s.type,name:e}}:{ref:s}}}),W(e,!1,void 0,s)}else r=v(d,e,{}),r._f&&(r._f.mount=!1),(s.shouldUnregister||t.shouldUnregister)&&(!c(A.array,e)||!V.action)&&A.unMount.add(e)}}},Fe=()=>s.shouldFocusError&&j(d,(e=>e&&v(o.errors,e)),A.mount),xe=(r,s={})=>{const a=r||_,i=y(a),n=r&&!k(r)?i:_;if(s.keepDefaultValues||(_=a),!s.keepValues){if(s.keepDirtyValues||x)for(const e of A.mount)v(o.dirtyFields,e)?B(n,e,v(b,e)):ee(e,v(n,e));else{if(f&&h(r))for(const e of A.mount){const t=v(d,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if($(e)){const t=e.closest("form");if(t){t.reset();break}}}}d={}}b=e.shouldUnregister?s.keepDefaultValues?y(_):{}:i,F.array.next({values:{...n}}),F.values.next({values:{...n}})}A={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!V.mount&&t(),V.mount=!S.isValid||!!s.keepIsValid,V.watch=!!e.shouldUnregister,F.state.next({submitCount:s.keepSubmitCount?o.submitCount:0,isDirty:s.keepDirty?o.isDirty:!(!s.keepDefaultValues||ie(r,_)),isSubmitted:!!s.keepIsSubmitted&&o.isSubmitted,dirtyFields:s.keepDirtyValues?o.dirtyFields:s.keepDefaultValues&&r?fe(_,r):{},touchedFields:s.keepTouched?o.touchedFields:{},errors:s.keepErrors?o.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},ke=(e,t)=>xe(P(e)?e(b):e,t);return{control:{register:Se,unregister:we,getFieldState:Ae,_executeSchema:J,_getWatch:X,_getDirty:Q,_updateValid:L,_removeUnmounted:()=>{for(const e of A.unMount){const t=v(d,e);t&&(t._f.refs?t._f.refs.every((e=>!ue(e))):!ue(t._f.ref))&&we(e)}A.unMount=new Set},_updateFieldArray:(e,t=[],r,s,a=!0,i=!0)=>{if(s&&r){if(V.action=!0,i&&Array.isArray(v(d,e))){const t=r(v(d,e),s.argA,s.argB);a&&B(d,e,t)}if(i&&Array.isArray(v(o.errors,e))){const t=r(v(o.errors,e),s.argA,s.argB);a&&B(o.errors,e,t),be(o.errors,e)}if(S.touchedFields&&i&&Array.isArray(v(o.touchedFields,e))){const t=r(v(o.touchedFields,e),s.argA,s.argB);a&&B(o.touchedFields,e,t)}S.dirtyFields&&(o.dirtyFields=fe(_,b)),F.state.next({name:e,isDirty:Q(e,t),dirtyFields:o.dirtyFields,errors:o.errors,isValid:o.isValid})}else B(b,e,t)},_getFieldArray:t=>m(v(V.mount?b:_,t,e.shouldUnregister?v(_,t,[]):[])),_reset:xe,_resetDefaultValues:()=>P(s.defaultValues)&&s.defaultValues().then((e=>{ke(e,s.resetOptions),F.state.next({isLoading:!1})})),_updateFormState:e=>{o={...o,...e}},_subjects:F,_proxyFormState:S,get _fields(){return d},get _formValues(){return b},get _state(){return V},set _state(e){V=e},get _defaultValues(){return _},get _names(){return A},set _names(e){A=e},get _formState(){return o},set _formState(e){o=e},get _options(){return s},set _options(e){s={...s,...e}}},trigger:ce,register:Se,handleSubmit:(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let a=y(b);if(F.state.next({isSubmitting:!0}),s.resolver){const{errors:e,values:t}=await J();o.errors=e,a=t}else await K(d);re(o.errors,"root"),k(o.errors)?(F.state.next({errors:{}}),await e(a,r)):(t&&await t({...o.errors},r),Fe(),setTimeout(Fe)),F.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:k(o.errors),submitCount:o.submitCount+1,errors:o.errors})},watch:(e,t)=>P(e)?F.values.subscribe({next:r=>e(X(void 0,t),r)}):X(e,t,!0),setValue:ee,getValues:de,reset:ke,resetField:(e,t={})=>{v(d,e)&&(h(t.defaultValue)?ee(e,v(_,e)):(ee(e,t.defaultValue),B(_,e,t.defaultValue)),t.keepTouched||re(o.touchedFields,e),t.keepDirty||(re(o.dirtyFields,e),o.isDirty=t.defaultValue?Q(e,v(_,e)):Q()),t.keepError||(re(o.errors,e),S.isValid&&L()),F.state.next({...o}))},clearErrors:e=>{e&&O(e).forEach((e=>re(o.errors,e))),F.state.next({errors:e?o.errors:{}})},unregister:we,setError:(e,t,r)=>{const s=(v(d,e,{_f:{}})._f||{}).ref;B(o.errors,e,{...t,ref:s}),F.state.next({name:e,errors:o.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},setFocus:(e,t={})=>{const r=v(d,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:Ae}}function we(e={}){const t=s.useRef(),[r,a]=s.useState({isDirty:!1,isValidating:!1,isLoading:P(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:P(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Ae(e,(()=>a((e=>({...e}))))),formState:r});const i=t.current.control;return i._options=e,C({subject:i._subjects.state,next:e=>{D(e,i._proxyFormState,i._updateFormState,!0)&&a({...i._formState})}}),s.useEffect((()=>{e.values&&!ie(e.values,i._defaultValues)?i._reset(e.values,i._options.resetOptions):i._resetDefaultValues()}),[e.values,i]),s.useEffect((()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()})),t.current.formState=x(r,i),t.current}}}]);
//# sourceMappingURL=c76007b176f872152ed7588ad6870fb35b4903d9-de138a92fe2ff1887bd8.js.map