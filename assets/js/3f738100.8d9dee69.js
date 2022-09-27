"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[686],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1007:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7294),i="browserWindow_my1Q",a="browserWindowHeader_jXSR",o="buttons_uHc7",l="browserWindowAddressBar_Pd8y",s="dot_giz1",p="browserWindowMenuIcon_Vhuh",u="bar_rrRL",c="browserWindowBody_Idgs";var d=function(e){var t=e.children,r=e.minHeight,d=e.maxHeight,m=e.url;return n.createElement("div",{className:i,style:{minHeight:r}},n.createElement("div",{className:a},n.createElement("div",{className:o},n.createElement("span",{className:s,style:{background:"#f25f58"}}),n.createElement("span",{className:s,style:{background:"#fbbe3c"}}),n.createElement("span",{className:s,style:{background:"#58cb42"}})),n.createElement("div",{className:l},m),n.createElement("div",{className:p},n.createElement("div",null,n.createElement("span",{className:u}),n.createElement("span",{className:u}),n.createElement("span",{className:u})))),n.createElement("div",{className:c,style:{maxHeight:d}},t))}},2490:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=r(1007),l=["components"],s={id:"frourio",title:"Introduce Frourio"},p=void 0,u={unversionedId:"tutorials/frourio",id:"tutorials/frourio",title:"Introduce Frourio",description:"We made the client type-safe on the previous page.",source:"@site/docs/tutorials/frourio.mdx",sourceDirName:"tutorials",slug:"/tutorials/frourio",permalink:"/docs/tutorials/frourio",draft:!1,editUrl:"https://github.com/frouriojs/ja.frourio.com/edit/master/docs/tutorials/frourio.mdx",tags:[],version:"current",frontMatter:{id:"frourio",title:"Introduce Frourio"},sidebar:"tutorial",previous:{title:"Introduce Aspida",permalink:"/docs/tutorials/aspida"},next:{title:"All done!",permalink:"/docs/tutorials/all-done"}},c={},d=[{value:"1. Set Up Frourio Server",id:"set-up-frourio-server",level:2},{value:"1.1. Move API Specification",id:"move-api-specification",level:3},{value:"1.2. Implement Controllers",id:"implement-controllers",level:3},{value:"1.3. Start Frourio Server",id:"start-frourio-server",level:3},{value:"1.4. Modify Client",id:"modify-client",level:3},{value:"1.5. Final Result",id:"final-result",level:3},{value:"2. Other Frourio Features",id:"other-frourio-features",level:2}],m={toc:d};function f(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We made ",(0,a.kt)("strong",{parentName:"p"},"the client type-safe")," on the previous page."),(0,a.kt)("p",null,"However, there are still parts of this project that are ",(0,a.kt)("strong",{parentName:"p"},"not type-safe"),". What is it?"),(0,a.kt)("p",null,"It is ",(0,a.kt)("strong",{parentName:"p"},"the server"),"."),(0,a.kt)("p",null,"So, let's install frourio into the server and build a type-safe ",(0,a.kt)("strong",{parentName:"p"},"'One TypeScript'"),"."),(0,a.kt)("h2",{id:"set-up-frourio-server"},"1. Set Up Frourio Server"),(0,a.kt)("h3",{id:"move-api-specification"},"1.1. Move API Specification"),(0,a.kt)("p",null,"In frourio, the server is implemented as an extension of the previous api definition."),(0,a.kt)("p",null,"Therefore, first, migrate the api specification to the server directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=Terminal",title:"Terminal"},"cd server\nyarn add -D frourio aspida\nmkdir api\nyarn frourio --watch\n")),(0,a.kt)("p",null,"In another terminal session,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=Terminal",title:"Terminal"},"mkdir api/hi\n")),(0,a.kt)("p",null,"Next, copy the API type definitions in src/api to server/api."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=Terminal",title:"Terminal"},"cp ../src/api/index.ts api\ncp ../src/api/hi/index.ts api/hi\n")),(0,a.kt)("h3",{id:"implement-controllers"},"1.2. Implement Controllers"),(0,a.kt)("p",null,"By default, body is typed as string, and you can see the type error in ",(0,a.kt)("inlineCode",{parentName:"p"},"api/controller.ts"),"."),(0,a.kt)("p",null,"Then, specify ",(0,a.kt)("inlineCode",{parentName:"p"},"{ hello: 'world' }")," to the body, and the type error will be resolved."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=server/api/controller.ts",title:"server/api/controller.ts"}," import {defineController} from './$relay';\n\n export default defineController(() => ({\n-  get: () => ({ status: 200, body: 'Hello' }),\n+  get: () => ({ status: 200, body: { hello: 'world' } }),\n }));\n")),(0,a.kt)("p",null,"Also, the body of ",(0,a.kt)("inlineCode",{parentName:"p"},"api/hi")," should be replaced with ",(0,a.kt)("inlineCode",{parentName:"p"},"{ hello: 'how are you?' }"),"."),(0,a.kt)("h3",{id:"start-frourio-server"},"1.3. Start Frourio Server"),(0,a.kt)("p",null,"You can see $server.ts has been generated in the server directory."),(0,a.kt)("p",null,"Modify index.ts to start the server using this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=server/index.ts",title:"server/index.ts"}," import Fastify from 'fastify';\n import FastifyCors from '@fastify/cors';\n+import server from './$server';\n\n const fastify = Fastify();\n\n fastify.register(FastifyCors, {});\n\n-fastify.get('/', (req, reply) => {\n-  reply.send({ hello: 'world' });\n-});\n-\n-fastify.get('/hi', (req, reply) => {\n-  reply.send({ hello: 'how are you?' });\n-});\n+server(fastify);\n\n fastify.listen({ port: 8888, host: '0.0.0.0' });\n")),(0,a.kt)("p",null,"It's time to start the frourio server!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=Terminal",title:"Terminal"},"yarn ts-node index.ts\n")),(0,a.kt)("p",null,"Just to be sure, confirm that the server works as well as before."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=Terminal",title:"Terminal"},"curl http://localhost:8888\ncurl http://localhost:8888/hi\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='Browser Console'",title:"'Browser","Console'":!0},"const response = await fetch('http://localhost:8888');\nawait response.json();\n")),(0,a.kt)("h3",{id:"modify-client"},"1.4. Modify Client"),(0,a.kt)("p",null,"Since the api directory has been moved, the paths referenced by the client should also be changed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=aspida.config.js",title:"aspida.config.js"},' module.exports = {\n-  input: "src/api",\n+  input: "server/api",\n   baseURL: "http://localhost:8888",\n };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=src/apiClient.ts",title:"src/apiClient.ts"},'-import $api from "./api/$api";\n+import $api from "../server/api/$api";\n')),(0,a.kt)("p",null,"In addition, regenerate the API definition file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title='Terminal'",title:"'Terminal'"},"yarn aspida\n")),(0,a.kt)("h3",{id:"final-result"},"1.5. Final Result"),(0,a.kt)("p",null,"It looks the same as the previous page."),(0,a.kt)("p",null,"However, there is a big difference that ",(0,a.kt)("strong",{parentName:"p"},"'One TypeScript' is realized")," inside."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How are you?")),(0,a.kt)(o.Z,{url:"http://localhost:3000",mdxType:"BrowserWindow"},(0,a.kt)("img",{src:"/img/tutorial/cra-how-are-you.png"})),(0,a.kt)("admonition",{title:"Can't you get it?",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Check the following."),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Did you start the back-end server? (",(0,a.kt)("inlineCode",{parentName:"li"},"yarn ts-node index.ts")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"frourio-tutorial/server")," directory)"),(0,a.kt)("li",{parentName:"ol"},"Did you start the front-end server? (",(0,a.kt)("inlineCode",{parentName:"li"},"yarn start")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"frourio-tutorial")," directory)"),(0,a.kt)("li",{parentName:"ol"},"Did you generate the server file? (",(0,a.kt)("inlineCode",{parentName:"li"},"yarn frourio")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"frourio-tutorial/server")," directory)"),(0,a.kt)("li",{parentName:"ol"},"Did you generate the API file? (",(0,a.kt)("inlineCode",{parentName:"li"},"yarn aspida")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"frourio-tutorial")," directory)"))),(0,a.kt)("h2",{id:"other-frourio-features"},"2. Other Frourio Features"),(0,a.kt)("p",null,"This tutorial does not cover all the features of frourio such as Hooks or Validation.\nFor more information about them, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs"},"Docs"),"."))}f.isMDXComponent=!0}}]);