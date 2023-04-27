"use strict";(self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5=self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5||[]).push([[376],{861:function(e,a,s){s.d(a,{FT:function(){return n}});var t=s(7294),r=s(5893);const l=["as","disabled"];function n({tagName:e,disabled:a,href:s,target:t,rel:r,role:l,onClick:n,tabIndex:o=0,type:i}){e||(e=null!=s||null!=t||null!=r?"a":"button");const c={tagName:e};if("button"===e)return[{type:i||"button",disabled:a},c];const d=t=>{(a||"a"===e&&function(e){return!e||"#"===e.trim()}(s))&&t.preventDefault(),a?t.stopPropagation():null==n||n(t)};return"a"===e&&(s||(s="#"),a&&(s=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:a?void 0:o,href:s,target:"a"===e?t:void 0,"aria-disabled":a||void 0,rel:"a"===e?r:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},c]}const o=t.forwardRef(((e,a)=>{let{as:s,disabled:t}=e,o=function(e,a){if(null==e)return{};var s,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)s=l[t],a.indexOf(s)>=0||(r[s]=e[s]);return r}(e,l);const[i,{tagName:c}]=n(Object.assign({tagName:s,disabled:t},o));return(0,r.jsx)(c,Object.assign({},o,i,{ref:a}))}));o.displayName="Button",a.ZP=o},5005:function(e,a,s){var t=s(4184),r=s.n(t),l=s(7294),n=s(861),o=s(6792),i=s(5893);const c=l.forwardRef((({as:e,bsPrefix:a,variant:s,size:t,active:l,className:c,...d},f)=>{const m=(0,o.vE)(a,"btn"),[u,{tagName:p}]=(0,n.FT)({tagName:e,...d}),v=p;return(0,i.jsx)(v,{...u,...d,ref:f,className:r()(c,m,l&&"active",s&&`${m}-${s}`,t&&`${m}-${t}`,d.href&&d.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=c},1555:function(e,a,s){var t=s(4184),r=s.n(t),l=s(7294),n=s(6792),o=s(5893);const i=l.forwardRef(((e,a)=>{const[{className:s,...t},{as:l="div",bsPrefix:i,spans:c}]=function({as:e,bsPrefix:a,className:s,...t}){a=(0,n.vE)(a,"col");const l=(0,n.pi)(),o=(0,n.zG)(),i=[],c=[];return l.forEach((e=>{const s=t[e];let r,l,n;delete t[e],"object"==typeof s&&null!=s?({span:r,offset:l,order:n}=s):r=s;const d=e!==o?`-${e}`:"";r&&i.push(!0===r?`${a}${d}`:`${a}${d}-${r}`),null!=n&&c.push(`order${d}-${n}`),null!=l&&c.push(`offset${d}-${l}`)})),[{...t,className:r()(s,...i,...c)},{as:e,bsPrefix:a,spans:i}]}(e);return(0,o.jsx)(l,{...t,ref:a,className:r()(s,!c.length&&i)})}));i.displayName="Col",a.Z=i},7833:function(e,a,s){s.d(a,{Z:function(){return D}});var t=s(4184),r=s.n(t),l=s(5697),n=s.n(l),o=s(7294),i=s(5893);const c={type:n().string,tooltip:n().bool,as:n().elementType},d=o.forwardRef((({as:e="div",className:a,type:s="valid",tooltip:t=!1,...l},n)=>(0,i.jsx)(e,{...l,ref:n,className:r()(a,`${s}-${t?"tooltip":"feedback"}`)})));d.displayName="Feedback",d.propTypes=c;var f=d;var m=o.createContext({}),u=s(6792);const p=o.forwardRef((({id:e,bsPrefix:a,className:s,type:t="checkbox",isValid:l=!1,isInvalid:n=!1,as:c="input",...d},f)=>{const{controlId:p}=(0,o.useContext)(m);return a=(0,u.vE)(a,"form-check-input"),(0,i.jsx)(c,{...d,ref:f,type:t,id:e||p,className:r()(s,a,l&&"is-valid",n&&"is-invalid")})}));p.displayName="FormCheckInput";var v=p;const b=o.forwardRef((({bsPrefix:e,className:a,htmlFor:s,...t},l)=>{const{controlId:n}=(0,o.useContext)(m);return e=(0,u.vE)(e,"form-check-label"),(0,i.jsx)("label",{...t,ref:l,htmlFor:s||n,className:r()(a,e)})}));b.displayName="FormCheckLabel";var x=b;const N=o.forwardRef((({id:e,bsPrefix:a,bsSwitchPrefix:s,inline:t=!1,reverse:l=!1,disabled:n=!1,isValid:c=!1,isInvalid:d=!1,feedbackTooltip:p=!1,feedback:b,feedbackType:N,className:y,style:h,title:j="",type:g="checkbox",label:w,children:$,as:k="input",...F},C)=>{a=(0,u.vE)(a,"form-check"),s=(0,u.vE)(s,"form-switch");const{controlId:I}=(0,o.useContext)(m),P=(0,o.useMemo)((()=>({controlId:e||I})),[I,e]),R=!$&&null!=w&&!1!==w||function(e,a){return o.Children.toArray(e).some((e=>o.isValidElement(e)&&e.type===a))}($,x),E=(0,i.jsx)(v,{...F,type:"switch"===g?"checkbox":g,ref:C,isValid:c,isInvalid:d,disabled:n,as:k});return(0,i.jsx)(m.Provider,{value:P,children:(0,i.jsx)("div",{style:h,className:r()(y,R&&a,t&&`${a}-inline`,l&&`${a}-reverse`,"switch"===g&&s),children:$||(0,i.jsxs)(i.Fragment,{children:[E,R&&(0,i.jsx)(x,{title:j,children:w}),b&&(0,i.jsx)(f,{type:N,tooltip:p,children:b})]})})})}));N.displayName="FormCheck";var y=Object.assign(N,{Input:v,Label:x});s(2473);const h=o.forwardRef((({bsPrefix:e,type:a,size:s,htmlSize:t,id:l,className:n,isValid:c=!1,isInvalid:d=!1,plaintext:f,readOnly:p,as:v="input",...b},x)=>{const{controlId:N}=(0,o.useContext)(m);let y;return e=(0,u.vE)(e,"form-control"),y=f?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${s}`]:s},(0,i.jsx)(v,{...b,type:a,size:t,ref:x,readOnly:p,id:l||N,className:r()(n,y,c&&"is-valid",d&&"is-invalid","color"===a&&`${e}-color`)})}));h.displayName="FormControl";var j=Object.assign(h,{Feedback:f}),g=(0,s(4680).Z)("form-floating");const w=o.forwardRef((({controlId:e,as:a="div",...s},t)=>{const r=(0,o.useMemo)((()=>({controlId:e})),[e]);return(0,i.jsx)(m.Provider,{value:r,children:(0,i.jsx)(a,{...s,ref:t})})}));w.displayName="FormGroup";var $=w,k=s(1555);const F=o.forwardRef((({as:e="label",bsPrefix:a,column:s,visuallyHidden:t,className:l,htmlFor:n,...c},d)=>{const{controlId:f}=(0,o.useContext)(m);a=(0,u.vE)(a,"form-label");let p="col-form-label";"string"==typeof s&&(p=`${p} ${p}-${s}`);const v=r()(l,a,t&&"visually-hidden",s&&p);return n=n||f,s?(0,i.jsx)(k.Z,{ref:d,as:"label",className:v,htmlFor:n,...c}):(0,i.jsx)(e,{ref:d,className:v,htmlFor:n,...c})}));F.displayName="FormLabel",F.defaultProps={column:!1,visuallyHidden:!1};var C=F;const I=o.forwardRef((({bsPrefix:e,className:a,id:s,...t},l)=>{const{controlId:n}=(0,o.useContext)(m);return e=(0,u.vE)(e,"form-range"),(0,i.jsx)("input",{...t,type:"range",ref:l,className:r()(a,e),id:s||n})}));I.displayName="FormRange";var P=I;const R=o.forwardRef((({bsPrefix:e,size:a,htmlSize:s,className:t,isValid:l=!1,isInvalid:n=!1,id:c,...d},f)=>{const{controlId:p}=(0,o.useContext)(m);return e=(0,u.vE)(e,"form-select"),(0,i.jsx)("select",{...d,size:s,ref:f,className:r()(t,e,a&&`${e}-${a}`,l&&"is-valid",n&&"is-invalid"),id:c||p})}));R.displayName="FormSelect";var E=R;const _=o.forwardRef((({bsPrefix:e,className:a,as:s="small",muted:t,...l},n)=>(e=(0,u.vE)(e,"form-text"),(0,i.jsx)(s,{...l,ref:n,className:r()(a,e,t&&"text-muted")}))));_.displayName="FormText";var O=_;const T=o.forwardRef(((e,a)=>(0,i.jsx)(y,{...e,ref:a,type:"switch"})));T.displayName="Switch";var z=Object.assign(T,{Input:y.Input,Label:y.Label});const L=o.forwardRef((({bsPrefix:e,className:a,children:s,controlId:t,label:l,...n},o)=>(e=(0,u.vE)(e,"form-floating"),(0,i.jsxs)($,{ref:o,className:r()(a,e),controlId:t,...n,children:[s,(0,i.jsx)("label",{htmlFor:t,children:l})]}))));L.displayName="FloatingLabel";var S=L;const Z={_ref:n().any,validated:n().bool,as:n().elementType},V=o.forwardRef((({className:e,validated:a,as:s="form",...t},l)=>(0,i.jsx)(s,{...t,ref:l,className:r()(e,a&&"was-validated")})));V.displayName="Form",V.propTypes=Z;var D=Object.assign(V,{Group:$,Control:j,Floating:g,Check:y,Switch:z,Label:C,Text:O,Range:P,Select:E,FloatingLabel:S})},4680:function(e,a,s){s.d(a,{Z:function(){return d}});var t=s(4184),r=s.n(t),l=/-(.)/g;var n=s(7294),o=s(6792),i=s(5893);const c=e=>{return e[0].toUpperCase()+(a=e,a.replace(l,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function d(e,{displayName:a=c(e),Component:s,defaultProps:t}={}){const l=n.forwardRef((({className:a,bsPrefix:t,as:l=s||"div",...n},c)=>{const d=(0,o.vE)(t,e);return(0,i.jsx)(l,{ref:c,className:r()(a,d),...n})}));return l.defaultProps=t,l.displayName=a,l}},2473:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=36217adf420664449d70e9e71ea52b3ba7f0615a-4897aa7e9329d065c803.js.map