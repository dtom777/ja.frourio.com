"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[6013],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(6010),i="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),r=a(7294),i=a(6010),l=a(2389),s=a(7392),o=a(7094),u=a(2466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,a,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,k=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:h[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.U)(),T=N.tabGroupChoices,x=N.setTabGroupChoices,w=(0,r.useState)(g),C=w[0],P=w[1],O=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var q=T[k];null!=q&&q!==C&&y.some((function(e){return e.value===q}))&&P(q)}var I=function(e){var t=e.currentTarget,a=O.indexOf(t),n=y[a].value;n!==C&&(E(t),P(n),null!=k&&x(k,String(n)))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=O.indexOf(e.currentTarget)+1;a=null!=(n=O[r])?n:O[0];break;case"ArrowLeft":var i,l=O.indexOf(e.currentTarget)-1;a=null!=(i=O[l])?i:O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},v)},y.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:I,onClick:I},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},1484:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=a(5488),s=a(5162),o=["components"],u={id:"validation",title:"Validation"},p=void 0,c={unversionedId:"reference/validation",id:"reference/validation",title:"Validation",description:"The examples on this page are written with Fastify, but the same features are valid with Express.",source:"@site/docs/reference/validation.mdx",sourceDirName:"reference",slug:"/reference/validation",permalink:"/docs/reference/validation",draft:!1,editUrl:"https://github.com/frouriojs/frourio.com/edit/master/docs/reference/validation.mdx",tags:[],version:"current",frontMatter:{id:"validation",title:"Validation"},sidebar:"docs",previous:{title:"AdditionalRequest",permalink:"/docs/reference/additionalRequest"},next:{title:"Command Line Interface",permalink:"/docs/reference/cli"}},d={},m=[{value:"Path Parameter",id:"path-parameter",level:2},{value:"URL Query",id:"url-query",level:2},{value:"Request body",id:"request-body",level:2},{value:"class-validator",id:"class-validator",level:2},{value:"Passing Validator Options",id:"passing-validator-options",level:3}],f={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The examples on this page are written with Fastify, but the same features are valid with Express."),(0,i.kt)("p",{parentName:"admonition"},"Pull requests to add examples with Express are welcome!")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"There are two types of validation: automatic validation by Frourio and validation using the class-validator."),(0,i.kt)("h2",{id:"path-parameter"},"Path Parameter"),(0,i.kt)("p",null,"The type can be specified by appending ",(0,i.kt)("inlineCode",{parentName:"p"},"@string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@number")," to path parameters, and the default in frourio is ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,i.kt)("p",null,"When the type is specified as ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", frourio automatically converts string to number and validates that it is not NaN."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"When the type is not specified, there is a difference")," in the behavior of Frourio and Aspida."),(0,i.kt)("p",{parentName:"admonition"},"Frourio interprets the type as ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," as mentioned above, but Aspida interprets it as ",(0,i.kt)("inlineCode",{parentName:"p"},"string | number"),".\nThis is due to the information loss that occurs as path parameters are passed through an URL."),(0,i.kt)("p",{parentName:"admonition"},"Unless there are special circumstances, ",(0,i.kt)("strong",{parentName:"p"},"you should specify their types"),".")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example"),(0,i.kt)("h3",null,"API Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/tasks/_taskId@number/index.ts"',title:'"server/api/tasks/_taskId@number/index.ts"'},"import { Task } from '$/types'\n\nexport type Methods = {\n  get: {\n    resBody: Task\n  }\n}\n")),(0,i.kt)("h3",null,"Controller"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/tasks/_taskId@number/controller.ts"',title:'"server/api/tasks/_taskId@number/controller.ts"'},"import { defineController } from './$relay'\nimport { findTask } from '$/service/tasks'\n\nexport default defineController(() => ({\n  get: async ({ params }) => {\n    const task = await findTask(params.taskId)\n\n    return task ? { status: 200, body: task } : { status: 404 }\n  },\n}))\n")),(0,i.kt)("h3",null,"Results"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl http://localhost:8080/api/tasks\n[{"id":0,"label":"sample task","done":false}]\n\n$ curl http://localhost:8080/api/tasks/0\n{"id":0,"label":"sample task","done":false}\n\n$ curl http://localhost:8080/api/tasks/1 -i\nHTTP/1.1 404 Not Found\n\n$ curl http://localhost:8080/api/tasks/abc -i\nHTTP/1.1 400 Bad Request\n'))),(0,i.kt)("h2",{id:"url-query"},"URL Query"),(0,i.kt)("p",null,"When the URL query specified as ..."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"required",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Frourio automatically validates that it exists."),(0,i.kt)("li",{parentName:"ul"},"If it isn't and it is specified as array, frourio sets an empty array ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Frourio automatically converts string to number and validates that it is not NaN."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Frourio automatically converts string (",(0,i.kt)("inlineCode",{parentName:"li"},"'true'")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"'false'"),") to boolean.")))),(0,i.kt)("span",{class:"badge badge--secondary"},"Depricated"),(0,i.kt)("p",null,"And if its key ends in square brackets (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"foo[]"),"), frourio automatically removes the brackets (e.g.\n",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),")."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example"),(0,i.kt)("h3",null,"API Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/tasks/index.ts"',title:'"server/api/tasks/index.ts"'},"import { Task } from '$/types'\n\nexport type Methods = {\n  get: {\n    query?: {\n      limit: number\n    }\n    resBody: Task[]\n  }\n}\n")),(0,i.kt)("h3",null,"Controller"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/tasks/controller.ts"',title:'"server/api/tasks/controller.ts"'},"import { defineController } from './$relay'\nimport { getTasks } from '$/service/tasks'\n\nexport default defineController(() => ({\n  get: async ({ query }) => ({\n    status: 200,\n    body: (await getTasks()).slice(0, query?.limit),\n  }),\n}))\n")),(0,i.kt)("h3",null,"Results"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl http://localhost:8080/api/tasks\n[{"id":0,"label":"sample task 0","done":false},{"id":1,"label":"sample task 1","done":false},{"id":1,"label":"sample task 2","done":false}]\n\n$ curl http://localhost:8080/api/tasks?limit=1\n[{"id":0,"label":"sample task 0","done":false}]\n\n$ curl http://localhost:8080/api/tasks?limit=abc -i\nHTTP/1.1 400 Bad Request\n'))),(0,i.kt)("h2",{id:"request-body"},"Request body"),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"reqFormat")," is specified as ",(0,i.kt)("inlineCode",{parentName:"p"},"FormData"),", frourio automatically converts and validates it."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If it is array, converts it to array (and if it doesn't exists, set an empty array)."),(0,i.kt)("li",{parentName:"ol"},"Extracts file or value."),(0,i.kt)("li",{parentName:"ol"},"If some values are specified as optional and they are empty, remove them.")),(0,i.kt)("h2",{id:"class-validator"},"class-validator"),(0,i.kt)("p",null,"To validate request body, request headers and URL query, specify a class with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-validator"},"class-validator")," instead of type for reqBody, reqHeaders and query."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example"),(0,i.kt)("h3",null,"Validator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/validators/index.ts"',title:'"server/validators/index.ts"'},"import { MinLength, IsString } from 'class-validator'\n\nexport class LoginBody {\n  @MinLength(5)\n  id: string\n\n  @MinLength(8)\n  pass: string\n}\n\nexport class TokenHeader {\n  @IsString()\n  @MinLength(10)\n  token: string\n}\n")),(0,i.kt)("h3",null,"API Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/token/index.ts"',title:'"server/api/token/index.ts"'},"import { LoginBody, TokenHeader } from '$/validators'\n\nexport type Methods = {\n  post: {\n    reqBody: LoginBody\n    resBody: {\n      token: string\n    }\n  }\n\n  delete: {\n    reqHeaders: TokenHeader\n  }\n}\n")),(0,i.kt)("h3",null,"Results"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl -X POST -H "Content-Type: application/json" -d \'{"id":"correctId","pass":"correctPass"}\' http://localhost:8080/api/token\n{"token":"XXXXXXXXXX"}\n\n$ curl -X POST -H "Content-Type: application/json" -d \'{"id":"abc","pass":"12345"}\' http://localhost:8080/api/token -i\nHTTP/1.1 400 Bad Request\n\n$ curl -X POST -H "Content-Type: application/json" -d \'{"id":"incorrectId","pass":"incorrectPass"}\' http://localhost:8080/api/token -i\nHTTP/1.1 401 Unauthorized\n'))),(0,i.kt)("h3",{id:"passing-validator-options"},"Passing Validator Options"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-validator#passing-options"},"class-validator options")),(0,i.kt)(l.Z,{defaultValue:"fastify",values:[{label:"Fastify",value:"fastify"},{label:"Express",value:"express"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"fastify",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/service/app.ts"',title:'"server/service/app.ts"'},"import Fastify, { FastifyServerFactory } from 'fastify'\nimport server from '$/$server'\n\nexport const init = (serverFactory?: FastifyServerFactory) => {\n  const app = Fastify({ serverFactory })\n  server(app, { basePath: '/api', validator: { whitelist: true } })\n  return app\n}\n"))),(0,i.kt)(s.Z,{value:"express",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/service/app.ts"',title:'"server/service/app.ts"'},"import express from 'express'\nimport server from '$/$server'\n\nexport const init = () => {\n  const app = express()\n  server(app, { basePath: '/api', validator: { whitelist: true } })\n  return app\n}\n")))))}k.isMDXComponent=!0}}]);