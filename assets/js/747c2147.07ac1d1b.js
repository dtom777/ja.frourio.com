"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[6226],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,p=f["".concat(u,".").concat(d)]||f[d]||m[d]||c;return r?n.createElement(p,i(i({ref:t},s),{},{components:r})):n.createElement(p,i({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[f]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(7294),o=r(6010),c=r(3438),i=r(9960),a=r(3919),u=r(5999),l="cardContainer_fWXF",s="cardTitle_rnsV",f="cardDescription_PWke";function m(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},r)}function d(e){var t=e.href,r=e.icon,c=e.title,i=e.description;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:c},r," ",c),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",f),title:i},i))}function p(e){var t=e.item,r=(0,c.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,r=e.item,o=(0,a.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(d,{href:r.href,icon:o,title:r.label,description:null==i?void 0:i.description})}function v(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,r=(0,c.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(g,e);var i=(0,c.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e}))})))}},55:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),i=r(2991),a=["components"],u={id:"index",title:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"},l=void 0,s={unversionedId:"reference/index",id:"reference/index",title:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Frourio \u306b\u304a\u3051\u308b\u57fa\u672c\u7684\u306a\u4ed5\u7d44\u307f\u3084\u4ed5\u69d8\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/docs/reference/index.mdx",sourceDirName:"reference",slug:"/reference/",permalink:"/docs/reference/",draft:!1,editUrl:"https://github.com/frouriojs/ja.frourio.com/edit/master/docs/reference/index.mdx",tags:[],version:"current",frontMatter:{id:"index",title:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"},sidebar:"docs",previous:{title:"Frourio \u306b\u3064\u3044\u3066",permalink:"/docs/"},next:{title:"GUI \u306b\u3088\u308b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",permalink:"/docs/reference/cfa/gui"}},f={},m=[],d={toc:m};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Frourio \u306b\u304a\u3051\u308b\u57fa\u672c\u7684\u306a\u4ed5\u7d44\u307f\u3084\u4ed5\u69d8\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,c.kt)(i.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);