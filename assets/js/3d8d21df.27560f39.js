"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[6535],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),l=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(a.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(t),d=o,m=s["".concat(a,".").concat(d)]||s[d]||f[d]||i;return t?n.createElement(m,u(u({ref:r},p),{},{components:t})):n.createElement(m,u({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=s;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var l=2;l<i;l++)u[l]=t[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1171:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),u=["components"],c={id:"about",title:"Frourio \u306b\u3064\u3044\u3066",slug:"/"},a=void 0,l={unversionedId:"about",id:"about",title:"Frourio \u306b\u3064\u3044\u3066",description:"Frourio \u3068\u306f",source:"@site/docs/about.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/frouriojs/ja.frourio.com/edit/master/docs/about.md",tags:[],version:"current",frontMatter:{id:"about",title:"Frourio \u306b\u3064\u3044\u3066",slug:"/"},sidebar:"docs",next:{title:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",permalink:"/docs/reference/"}},p={},f=[{value:"Frourio \u3068\u306f",id:"what-is-frourio",level:2},{value:"\u306a\u305c frourio \u3092\u4f7f\u3046\u306e\u304b",id:"why-frourio",level:2}],s={toc:f};function d(e){var r=e.components,c=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},s,c,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-frourio"},"Frourio \u3068\u306f"),(0,i.kt)("p",null,"Frourio \u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u30fc\u3068\u306e\u9593\u3067 TypeScript \u306b\u3088\u308b\u9759\u7684\u306a\u578b\u691c\u67fb\u3092\u53ef\u80fd\u3068\u3059\u308b CLI \u30c4\u30fc\u30eb\u3067\u3059\u3002\u6a4b\u6e21\u3057\u306e\u305f\u3081\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u3067\u3001\u578b\u99c6\u52d5\u958b\u767a\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"Frourio \u304c\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u30fc\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u81ea\u7531\u306b\u7d44\u307f\u5408\u308f\u305b\u3066\u3001\u7c21\u5358\u306b\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"why-frourio"},"\u306a\u305c frourio \u3092\u4f7f\u3046\u306e\u304b"),(0,i.kt)("p",null,"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u30fc\u306e\u53cc\u65b9\u3092 TypeScript \u3067\u958b\u767a\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u304a\u3044\u3066\u3082\u3001\u4e21\u8005\u9593\u306e API \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u578b\u5b89\u5168\u306b\u5b9f\u88c5\u3059\u308b\u3053\u3068\u306f\u56f0\u96e3\u3067\u3057\u305f\u3002"),(0,i.kt)("p",null,"\u8a00\u3046\u306a\u308c\u3070\u3001\u79c1\u305f\u3061\u306f\u300c\uff12\u3064\u300d\u306e TypeScript \u3092\u66f8\u304b\u3056\u308b\u3092\u5f97\u306a\u304b\u3063\u305f\u306e\u3067\u3059\u3002\n\u305d\u3057\u3066\u30d6\u30e9\u30a6\u30b6\u3068\u30b5\u30fc\u30d0\u30fc\u3092\u7528\u3044\u305f\u30c6\u30b9\u30c8\u306b\u591a\u304f\u306e\u6642\u9593\u3092\u8cbb\u3084\u3057\u3066\u304d\u307e\u3057\u305f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\uff12\u3064\u306e TypeScript",src:t(9733).Z,width:"1920",height:"840"})),(0,i.kt)("p",null,"\u3057\u304b\u3057 frourio \u3092\u7528\u3044\u308b\u3053\u3068\u3067\u3001\u578b\u3092\u901a\u3058\u3066\u305d\u308c\u3089\u3092\u300c\u63a5\u7d9a\u300d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\nFrourio \u306f\u300c\u63a5\u7d9a\u300d\u3055\u308c\u305f TypeScript \u3067\u958b\u767a\u4f53\u9a13\u3092\u5927\u5e45\u306b\u6539\u5584\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\uff11\u3064\u306e TypeScript",src:t(1298).Z,width:"1920",height:"1080"})))}d.isMDXComponent=!0},1298:function(e,r,t){r.Z=t.p+"assets/images/OneTS-8889c363a6548735e534947cd23e46f1.svg"},9733:function(e,r,t){r.Z=t.p+"assets/images/TwoTS-9400110b765657f9cef014636347cc2b.svg"}}]);