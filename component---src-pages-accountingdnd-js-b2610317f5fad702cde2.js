"use strict";(self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5=self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5||[]).push([[125],{861:function(e,a,t){t.d(a,{FT:function(){return s}});var n=t(7294),r=t(5893);const l=["as","disabled"];function s({tagName:e,disabled:a,href:t,target:n,rel:r,role:l,onClick:s,tabIndex:o=0,type:d}){e||(e=null!=t||null!=n||null!=r?"a":"button");const c={tagName:e};if("button"===e)return[{type:d||"button",disabled:a},c];const i=n=>{(a||"a"===e&&function(e){return!e||"#"===e.trim()}(t))&&n.preventDefault(),a?n.stopPropagation():null==s||s(n)};return"a"===e&&(t||(t="#"),a&&(t=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:a?void 0:o,href:t,target:"a"===e?n:void 0,"aria-disabled":a||void 0,rel:"a"===e?r:void 0,onClick:i,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),i(e))}},c]}const o=n.forwardRef(((e,a)=>{let{as:t,disabled:n}=e,o=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l);const[d,{tagName:c}]=s(Object.assign({tagName:t,disabled:n},o));return(0,r.jsx)(c,Object.assign({},o,d,{ref:a}))}));o.displayName="Button",a.ZP=o},6463:function(e,a,t){t.r(a),t.d(a,{Head:function(){return p}});var n=t(5785),r=t(7294),l=t(5998),s=t(6301),o=t(1707),d=t(4284),c=t(2030),i=t(2410),u=t(4051),m=t(682),f=t(5005),y=t(1407),b=t(5453);function v(){const e=(0,l.I0)(),a=(0,l.v9)(d.SN),t=(0,l.v9)(d.Gs),n=(0,l.v9)(c.zJ);return r.createElement(m.Z,null,r.createElement(u.Z,null,r.createElement("div",{className:"d-grid gap-2 m-2"},r.createElement(f.Z,{variant:"outline-secondary",size:"sm",onClick:()=>function(){if(e((0,d.Rn)({arrayName:"caseArray",arrayItems:t.filter((e=>"Проводки"===e.dndcolumn))})),e((0,d.Rn)({arrayName:"caseArrayTrash",arrayItems:t.filter((e=>"Корзина"===e.dndcolumn))})),console.log(n),null!=n&&n.email&&null!=a&&a.id){let e=n.email.replace(/[^a-zA-Z0-9]/g,"_"),r={};t.filter((e=>"Проводки"===e.dndcolumn)).forEach(((t,n)=>{let{dndcolumn:l,...s}=t;r["/usersCraft/"+e+"/posts/"+a.id+"/content/"+n]=s})),t.filter((e=>"Корзина"===e.dndcolumn)).forEach(((t,n)=>{let{dndcolumn:l,...s}=t;r["/usersCraft/"+e+"/posts/"+a.id+"/trash/"+n]=s})),console.log(r),(0,b.Z)(r,"reload")}}()},"Сохранить изменения в проекте"))))}a.default=function(){const e=(0,l.I0)(),a=(0,l.v9)(d.L7),t=(0,l.v9)(d.NS);return r.useEffect((()=>{console.log("Records DnD");let r=a.map((e=>({id:null!=e&&e.id?e.id:(0,y.Z)("/usersCraft/"),dndcontent:e.d+" / "+e.k+" "+e.type+" "+e.sum,dndcolumn:"Проводки",...e}))),l=t.map((e=>({id:null!=e&&e.id?e.id:(0,y.Z)("/usersCraft/"),dndcontent:e.d+" / "+e.k+" "+e.type+" "+e.sum,dndcolumn:"Корзина",...e}))),s=[].concat((0,n.Z)(r),(0,n.Z)(l));e((0,d.Rn)({arrayName:"caseDNDArrayFinal",arrayItems:s})),e((0,d.Rn)({arrayName:"caseDndItemsArray",arrayItems:r})),e((0,d.Rn)({arrayName:"caseDndItems2Array",arrayItems:l}))}),[]),r.createElement(s.Z,null,r.createElement("div",{className:"container text-center my-5"},r.createElement(v,null),r.createElement(i.Z,null)))};const p=()=>r.createElement(o.p,{title:"Accounting records Drag and Drop"})},5005:function(e,a,t){var n=t(4184),r=t.n(n),l=t(7294),s=t(861),o=t(6792),d=t(5893);const c=l.forwardRef((({as:e,bsPrefix:a,variant:t,size:n,active:l,className:c,...i},u)=>{const m=(0,o.vE)(a,"btn"),[f,{tagName:y}]=(0,s.FT)({tagName:e,...i}),b=y;return(0,d.jsx)(b,{...f,...i,ref:u,className:r()(c,m,l&&"active",t&&`${m}-${t}`,n&&`${m}-${n}`,i.href&&i.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=c}}]);
//# sourceMappingURL=component---src-pages-accountingdnd-js-b2610317f5fad702cde2.js.map