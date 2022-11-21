"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[7890],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,v=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(7294),a=r(6010),o="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(7462),a=r(7294),o=r(6010),i=r(2389),l=r(7392),s=r(7094),c=r(2466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,i=e.lazy,d=e.block,f=e.defaultValue,v=e.values,m=e.groupId,y=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===f?f:null!=(t=null!=f?f:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:b[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),x=T.tabGroupChoices,N=T.setTabGroupChoices,O=(0,a.useState)(k),w=O[0],E=O[1],P=[],j=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=x[m];null!=C&&C!==w&&h.some((function(e){return e.value===C}))&&E(C)}var Z=function(e){var t=e.currentTarget,r=P.indexOf(t),n=h[r].value;n!==w&&(j(t),E(n),null!=m&&N(m,String(n)))},I=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=P.indexOf(e.currentTarget)+1;r=null!=(n=P[a])?n:P[0];break;case"ArrowLeft":var o,i=P.indexOf(e.currentTarget)-1;r=null!=(o=P[i])?o:P[P.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},y)},h.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return P.push(e)},onKeyDown:I,onFocus:Z,onClick:Z},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=r?r:t)}))),i?(0,a.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function f(e){var t=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},8173:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(5488),l=r(5162),s=["components"],c={id:"class-validator",title:"class-validator"},u=void 0,p={unversionedId:"reference/validation/class-validator",id:"reference/validation/class-validator",title:"class-validator",description:"\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3\u3084\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u3001URL \u30af\u30a8\u30ea\u3092\u30d0\u30ea\u30c7\u30fc\u30c8\u3059\u308b\u306b\u306f\u3001class-validator \u3092\u7528\u3044\u3066 reqBody \u3084 reqHeaders\u3001query \u306e\u578b\u306e\u4ee3\u308f\u308a\u306b class \u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002",source:"@site/docs/reference/validation/class-validator.mdx",sourceDirName:"reference/validation",slug:"/reference/validation/class-validator",permalink:"/docs/reference/validation/class-validator",draft:!1,editUrl:"https://github.com/frouriojs/ja.frourio.com/edit/master/docs/reference/validation/class-validator.mdx",tags:[],version:"current",frontMatter:{id:"class-validator",title:"class-validator"},sidebar:"docs",previous:{title:"Zod",permalink:"/docs/reference/validation/zod"},next:{title:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",permalink:"/docs/reference/cli"}},d={},f=[{value:"\u30d0\u30ea\u30c7\u30fc\u30bf\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u6307\u5b9a",id:"passing-validator-options",level:3}],v={toc:f};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3\u3084\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u3001URL \u30af\u30a8\u30ea\u3092\u30d0\u30ea\u30c7\u30fc\u30c8\u3059\u308b\u306b\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-validator"},"class-validator")," \u3092\u7528\u3044\u3066 reqBody \u3084 reqHeaders\u3001query \u306e\u578b\u306e\u4ee3\u308f\u308a\u306b class \u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),(0,o.kt)("admonition",{title:"Deprecated after 0.30.0",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"frourio")," \u304a\u3088\u3073 ",(0,o.kt)("inlineCode",{parentName:"p"},"frourio-express")," \u30d0\u30fc\u30b8\u30e7\u30f3 ",(0,o.kt)("inlineCode",{parentName:"p"},"0.30.0")," \u4ee5\u964d\u3067\u306f\u3001\u30d0\u30ea\u30c7\u30fc\u30bf\u306b class-validator \u3092\u4f7f\u3046\u3053\u3068\u306f\u975e\u63a8\u5968\u3068\u306a\u308a\u307e\u3057\u305f\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30d3\u30eb\u30c9\u6642\u306b\u8b66\u544a\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/validation/zod"},"Zod")," \u3078\u306e\u79fb\u884c\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u4f8b"),(0,o.kt)("h3",null,"\u30d0\u30ea\u30c7\u30fc\u30bf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/validators/index.ts"',title:'"server/validators/index.ts"'},"import { MinLength, IsString } from 'class-validator';\n\nexport class LoginBody {\n  @MinLength(5)\n  id: string;\n\n  @MinLength(8)\n  pass: string;\n}\n\nexport class TokenHeader {\n  @IsString()\n  @MinLength(10)\n  token: string;\n}\n")),(0,o.kt)("h3",null,"API \u578b\u5b9a\u7fa9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/token/index.ts"',title:'"server/api/token/index.ts"'},"import { LoginBody, TokenHeader } from '$/validators';\n\nexport type Methods = {\n  post: {\n    reqBody: LoginBody;\n    resBody: {\n      token: string;\n    };\n  };\n\n  delete: {\n    reqHeaders: TokenHeader;\n  };\n};\n")),(0,o.kt)("h3",null,"\u7d50\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl -X POST -H "Content-Type: application/json" -d \'{"id":"correctId","pass":"correctPass"}\' http://localhost:8080/api/token\n{"token":"XXXXXXXXXX"}\n\n$ curl -X POST -H "Content-Type: application/json" -d \'{"id":"abc","pass":"12345"}\' http://localhost:8080/api/token -i\nHTTP/1.1 400 Bad Request\n\n$ curl -X POST -H "Content-Type: application/json" -d \'{"id":"incorrectId","pass":"incorrectPass"}\' http://localhost:8080/api/token -i\nHTTP/1.1 401 Unauthorized\n'))),(0,o.kt)("h3",{id:"passing-validator-options"},"\u30d0\u30ea\u30c7\u30fc\u30bf\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u6307\u5b9a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-validator#passing-options"},"class-validator options")),(0,o.kt)(i.Z,{defaultValue:"fastify",values:[{label:"Fastify",value:"fastify"},{label:"Express",value:"express"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"fastify",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/service/app.ts"',title:'"server/service/app.ts"'},"import Fastify, { FastifyServerFactory } from 'fastify';\nimport server from '$/$server';\n\nexport const init = (serverFactory?: FastifyServerFactory) => {\n  const app = Fastify({ serverFactory });\n  server(app, { basePath: '/api', validator: { whitelist: true } });\n  return app;\n};\n"))),(0,o.kt)(l.Z,{value:"express",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/service/app.ts"',title:'"server/service/app.ts"'},"import express from 'express';\nimport server from '$/$server';\n\nexport const init = () => {\n  const app = express();\n  server(app, { basePath: '/api', validator: { whitelist: true } });\n  return app;\n};\n")))))}m.isMDXComponent=!0}}]);