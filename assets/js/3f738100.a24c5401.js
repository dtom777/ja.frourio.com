"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[686],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1007:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7294),a="browserWindow_my1Q",i="browserWindowHeader_jXSR",o="buttons_uHc7",l="browserWindowAddressBar_Pd8y",s="dot_giz1",p="browserWindowMenuIcon_Vhuh",c="bar_rrRL",u="browserWindowBody_Idgs";var d=function(e){var t=e.children,r=e.minHeight,d=e.maxHeight,m=e.url;return n.createElement("div",{className:a,style:{minHeight:r}},n.createElement("div",{className:i},n.createElement("div",{className:o},n.createElement("span",{className:s,style:{background:"#f25f58"}}),n.createElement("span",{className:s,style:{background:"#fbbe3c"}}),n.createElement("span",{className:s,style:{background:"#58cb42"}})),n.createElement("div",{className:l},m),n.createElement("div",{className:p},n.createElement("div",null,n.createElement("span",{className:c}),n.createElement("span",{className:c}),n.createElement("span",{className:c})))),n.createElement("div",{className:u,style:{maxHeight:d}},t))}},2490:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=r(1007),l=["components"],s={id:"frourio",title:"Introduce Frourio"},p=void 0,c={unversionedId:"tutorials/frourio",id:"tutorials/frourio",title:"Introduce Frourio",description:"We made the client type-safe on the previous page.",source:"@site/docs/tutorials/frourio.mdx",sourceDirName:"tutorials",slug:"/tutorials/frourio",permalink:"/docs/tutorials/frourio",editUrl:"https://github.com/frouriojs/frourio.com/edit/master/docs/tutorials/frourio.mdx",tags:[],version:"current",frontMatter:{id:"frourio",title:"Introduce Frourio"},sidebar:"tutorial",previous:{title:"Introduce Aspida",permalink:"/docs/tutorials/aspida"},next:{title:"All done!",permalink:"/docs/tutorials/all-done"}},u=[{value:"1. Set Up Frourio Server",id:"set-up-frourio-server",children:[{value:"1.1. Move API Specification",id:"move-api-specification",children:[],level:3},{value:"1.2. Implement Controllers",id:"implement-controllers",children:[],level:3},{value:"1.3. Start Frourio Server",id:"start-frourio-server",children:[],level:3},{value:"1.4. Modify Client",id:"modify-client",children:[],level:3},{value:"1.5. Final Result",id:"final-result",children:[],level:3}],level:2},{value:"2. Other Frourio Features",id:"other-frourio-features",children:[],level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We made ",(0,i.kt)("strong",{parentName:"p"},"the client type-safe")," on the previous page."),(0,i.kt)("p",null,"However, there are still parts of this project that are ",(0,i.kt)("strong",{parentName:"p"},"not type-safe"),". What is it?"),(0,i.kt)("p",null,"It is ",(0,i.kt)("strong",{parentName:"p"},"the server"),"."),(0,i.kt)("p",null,"So, let's install frourio into the server and build a type-safe ",(0,i.kt)("strong",{parentName:"p"},"'One TypeScript'"),"."),(0,i.kt)("h2",{id:"set-up-frourio-server"},"1. Set Up Frourio Server"),(0,i.kt)("h3",{id:"move-api-specification"},"1.1. Move API Specification"),(0,i.kt)("p",null,"In frourio, the server is implemented as an extension of the previous api definition."),(0,i.kt)("p",null,"Therefore, first, migrate the api specification to the server directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=Terminal",title:"Terminal"},"cd server\nyarn add -D frourio aspida\nmkdir api\nyarn frourio --watch\n")),(0,i.kt)("p",null,"In another terminal session,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=Terminal",title:"Terminal"},"mkdir api/hi\n")),(0,i.kt)("p",null,"Next, copy the API type definitions in src/api to server/api."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=Terminal",title:"Terminal"},"cp ../src/api/index.ts api\ncp ../src/api/hi/index.ts api/hi\n")),(0,i.kt)("h3",{id:"implement-controllers"},"1.2. Implement Controllers"),(0,i.kt)("p",null,"By default, body is typed as string, and you can see the type error in ",(0,i.kt)("inlineCode",{parentName:"p"},"api/controller.ts"),"."),(0,i.kt)("p",null,"Then, specify ",(0,i.kt)("inlineCode",{parentName:"p"},"{ hello: 'world' }")," to the body, and the type error will be resolved."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=server/api/controller.ts",title:"server/api/controller.ts"}," import {defineController} from './$relay';\n\n export default defineController(() => ({\n-  get: () => ({ status: 200, body: 'Hello' }),\n+  get: () => ({ status: 200, body: { hello: 'world' } }),\n }));\n")),(0,i.kt)("p",null,"Also, the body of ",(0,i.kt)("inlineCode",{parentName:"p"},"api/hi")," should be replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"{ hello: 'how are you?' }"),"."),(0,i.kt)("h3",{id:"start-frourio-server"},"1.3. Start Frourio Server"),(0,i.kt)("p",null,"You can see $server.ts has been generated in the server directory."),(0,i.kt)("p",null,"Modify index.ts to start the server using this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=server/index.ts",title:"server/index.ts"}," import Fastify from 'fastify';\n import FastifyCors from '@fastify/cors';\n+import server from './$server';\n\n const fastify = Fastify();\n\n fastify.register(FastifyCors, {});\n\n-fastify.get('/', (req, reply) => {\n-  reply.send({ hello: 'world' });\n-});\n-\n-fastify.get('/hi', (req, reply) => {\n-  reply.send({ hello: 'how are you?' });\n-});\n+server(fastify);\n\n fastify.listen({ port: 8888, host: '0.0.0.0' });\n")),(0,i.kt)("p",null,"It's time to start the frourio server!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=Terminal",title:"Terminal"},"yarn ts-node index.ts\n")),(0,i.kt)("p",null,"Just to be sure, confirm that the server works as well as before."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=Terminal",title:"Terminal"},"curl http://localhost:8888\ncurl http://localhost:8888/hi\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='Browser Console'",title:"'Browser","Console'":!0},"const response = await fetch('http://localhost:8888');\nawait response.json();\n")),(0,i.kt)("h3",{id:"modify-client"},"1.4. Modify Client"),(0,i.kt)("p",null,"Since the api directory has been moved, the paths referenced by the client should also be changed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=aspida.config.js",title:"aspida.config.js"},' module.exports = {\n-  input: "src/api",\n+  input: "server/api",\n   baseURL: "http://localhost:8888",\n };\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=src/apiClient.ts",title:"src/apiClient.ts"},'-import $api from "./api/$api";\n+import $api from "../server/api/$api";\n')),(0,i.kt)("p",null,"In addition, regenerate the API definition file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title='Terminal'",title:"'Terminal'"},"yarn aspida\n")),(0,i.kt)("h3",{id:"final-result"},"1.5. Final Result"),(0,i.kt)("p",null,"It looks the same as the previous page."),(0,i.kt)("p",null,"However, there is a big difference that ",(0,i.kt)("strong",{parentName:"p"},"'One TypeScript' is realized")," inside."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"How are you?")),(0,i.kt)(o.Z,{url:"http://localhost:3000",mdxType:"BrowserWindow"},(0,i.kt)("img",{src:"/img/tutorial/cra-how-are-you.png"})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Can't you get it?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Check the following."),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Did you start the back-end server? (",(0,i.kt)("inlineCode",{parentName:"li"},"yarn ts-node index.ts")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"frourio-tutorial/server")," directory)"),(0,i.kt)("li",{parentName:"ol"},"Did you start the front-end server? (",(0,i.kt)("inlineCode",{parentName:"li"},"yarn start")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"frourio-tutorial")," directory)"),(0,i.kt)("li",{parentName:"ol"},"Did you generate the server file? (",(0,i.kt)("inlineCode",{parentName:"li"},"yarn frourio")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"frourio-tutorial/server")," directory)"),(0,i.kt)("li",{parentName:"ol"},"Did you generate the API file? (",(0,i.kt)("inlineCode",{parentName:"li"},"yarn aspida")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"frourio-tutorial")," directory)")))),(0,i.kt)("h2",{id:"other-frourio-features"},"2. Other Frourio Features"),(0,i.kt)("p",null,"This tutorial does not cover all the features of frourio such as Hooks or Validation.\nFor more information about them, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs"},"Docs"),"."))}m.isMDXComponent=!0}}]);