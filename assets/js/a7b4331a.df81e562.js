"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[7587],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1007:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),i="browserWindow_my1Q",r="browserWindowHeader_jXSR",o="buttons_uHc7",l="browserWindowAddressBar_Pd8y",s="dot_giz1",p="browserWindowMenuIcon_Vhuh",d="bar_rrRL",c="browserWindowBody_Idgs";var u=function(e){var t=e.children,n=e.minHeight,u=e.maxHeight,m=e.url;return a.createElement("div",{className:i,style:{minHeight:n}},a.createElement("div",{className:r},a.createElement("div",{className:o},a.createElement("span",{className:s,style:{background:"#f25f58"}}),a.createElement("span",{className:s,style:{background:"#fbbe3c"}}),a.createElement("span",{className:s,style:{background:"#58cb42"}})),a.createElement("div",{className:l},m),a.createElement("div",{className:p},a.createElement("div",null,a.createElement("span",{className:d}),a.createElement("span",{className:d}),a.createElement("span",{className:d})))),a.createElement("div",{className:c,style:{maxHeight:u}},t))}},2990:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(1007),l=["components"],s={id:"aspida",title:"Introduce Aspida"},p=void 0,d={unversionedId:"tutorials/aspida",id:"tutorials/aspida",title:"Introduce Aspida",description:"Let's try sending HTTP requests from the client to the Fastify server we have set up on the previous page.",source:"@site/docs/tutorials/aspida.mdx",sourceDirName:"tutorials",slug:"/tutorials/aspida",permalink:"/docs/tutorials/aspida",draft:!1,editUrl:"https://github.com/frouriojs/ja.frourio.com/edit/master/docs/tutorials/aspida.mdx",tags:[],version:"current",frontMatter:{id:"aspida",title:"Introduce Aspida"},sidebar:"tutorial",previous:{title:"Prepare Client and Server",permalink:"/docs/tutorials/preparation"},next:{title:"Introduce Frourio",permalink:"/docs/tutorials/frourio"}},c={},u=[{value:"1. Specify API Type Definition",id:"specify-api-type-definition",level:2},{value:"1.1. Create API Definition Files",id:"create-api-definition-files",level:3},{value:"1.2. Prepare Aspida Config File",id:"prepare-aspida-config-file",level:3},{value:"1.3. Generate Object with Aspida",id:"generate-object-with-aspida",level:3},{value:"1.4. Read <code>$api.ts</code> File (Optional)",id:"read-api-file",level:3},{value:"2. Send API Requests",id:"send-api-requests",level:2},{value:"2.1. Create API Client",id:"create-api-client",level:3},{value:"2.2. Fetch from Server",id:"fetch-from-server",level:3},{value:"2.3. Display Greeting",id:"display-greeting",level:3}],m={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's try sending HTTP requests from the client to the Fastify server we have set up on the previous page."),(0,r.kt)("p",null,"By the way, if you use common HTTP clients such as fetch or axios, the response type will be ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", and you will not be able to achieve 'One TypeScript'."),(0,r.kt)("p",null,"Therefore, we use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aspida/aspida"},"aspida"),", a TypeScript-friendly HTTP client wrapper."),(0,r.kt)("div",{style:{textAlign:"center",padding:"16px"}},(0,r.kt)("img",{src:"https://aspida.github.io/aspida/logos/svg/black.svg",style:{width:300}})),(0,r.kt)("h2",{id:"specify-api-type-definition"},"1. Specify API Type Definition"),(0,r.kt)("h3",{id:"create-api-definition-files"},"1.1. Create API Definition Files"),(0,r.kt)("p",null,"Back to ",(0,r.kt)("inlineCode",{parentName:"p"},"frourio-tutorial")," directory, and prepare api type definitions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=Terminal",title:"Terminal"},"mkdir -p src/api/hi\nyarn add aspida\n")),(0,r.kt)("p",null,"Create and edit ",(0,r.kt)("inlineCode",{parentName:"p"},"src/api/index.ts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"src/api/hi/index.ts")," as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='src/api/index.ts, src/api/hi/index.ts'",title:"'src/api/index.ts,","src/api/hi/index.ts'":!0},"import { DefineMethods } from 'aspida';\n\nexport type Methods = DefineMethods<{\n  get: {\n    resBody: {\n      hello: string;\n    };\n  };\n}>;\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We recommend to use ",(0,r.kt)("inlineCode",{parentName:"p"},"DefineMethods")," ",(0,r.kt)("strong",{parentName:"p"},"with semicolon")," in order to get proper editor support.")),(0,r.kt)("h3",{id:"prepare-aspida-config-file"},"1.2. Prepare Aspida Config File"),(0,r.kt)("p",null,"Create and edit ",(0,r.kt)("inlineCode",{parentName:"p"},"aspida.config.js")," as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=aspida.config.js",title:"aspida.config.js"},"module.exports = {\n  input: 'src/api',\n  baseURL: 'http://localhost:8888',\n};\n")),(0,r.kt)("h3",{id:"generate-object-with-aspida"},"1.3. Generate Object with Aspida"),(0,r.kt)("p",null,"Next, generate api definition with aspida."),(0,r.kt)("p",null,"Aspida, a CLI tool, converts api definition files corresponding to each path into ",(0,r.kt)("strong",{parentName:"p"},"a single object"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=Terminal",title:"Terminal"},"yarn aspida\n")),(0,r.kt)("p",null,"Aspida generates ",(0,r.kt)("inlineCode",{parentName:"p"},"api/$api.ts"),".\nThis file contains information about endpoints and type definitions of each HTTP method for them as the object hierarchy."),(0,r.kt)("h3",{id:"read-api-file"},"1.4. Read ",(0,r.kt)("inlineCode",{parentName:"h3"},"$api.ts")," File (Optional)"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you already know about aspida, you can skip this section.")),(0,r.kt)("p",null,"Let's take a look at ",(0,r.kt)("inlineCode",{parentName:"p"},"api/$api.ts"),"."),(0,r.kt)("p",null,"In this file, there is a function named ",(0,r.kt)("inlineCode",{parentName:"p"},"api"),". This function returns an object with information about endpoints."),(0,r.kt)("p",null,"Since all this information is fully typed, we can call the endpoints type-safe."),(0,r.kt)("h2",{id:"send-api-requests"},"2. Send API Requests"),(0,r.kt)("h3",{id:"create-api-client"},"2.1. Create API Client"),(0,r.kt)("p",null,"To send api requests, use an HTTP client wrapper such as ",(0,r.kt)("inlineCode",{parentName:"p"},"@aspida/fetch")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@aspida/axios"),"."),(0,r.kt)("p",null,"In this tutorial, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"@aspida/fetch"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=Terminal",title:"Terminal"},"yarn add @aspida/fetch\n")),(0,r.kt)("p",null,"Next, create and edit ",(0,r.kt)("inlineCode",{parentName:"p"},"src/apiClient.ts")," as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/apiClient.ts",title:"src/apiClient.ts"},"import api from './api/$api';\nimport aspida from '@aspida/fetch';\n\nconst apiClient = api(\n  aspida(undefined, {\n    baseURL: 'http://localhost:8888',\n  })\n);\n\nexport default apiClient;\n")),(0,r.kt)("h3",{id:"fetch-from-server"},"2.2. Fetch from Server"),(0,r.kt)("p",null,"Then, edit ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=src/App.tsx",title:"src/App.tsx"},'-import React from \'react\';\n+import React, { useEffect, useState } from "react";\n+import api from "./apiClient";\n\n function App() {\n+  const [greeting, setGreeting] = useState("loading...");\n+\n+  useEffect(() => {\n+    api.hi.$get().then((res) => {\n+      setGreeting(res.hello);\n+    });\n+  }, []);\n')),(0,r.kt)("p",null,"Here we have api response in ",(0,r.kt)("inlineCode",{parentName:"p"},"greeting"),"."),(0,r.kt)("h3",{id:"display-greeting"},"2.3. Display Greeting"),(0,r.kt)("p",null,"All that remains is to display it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=src/App.tsx",title:"src/App.tsx"},"         <p>\n           Edit <code>src/App.tsx</code> and save to reload.\n         </p>\n+        <p>{greeting}</p>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=Terminal",title:"Terminal"},"yarn start\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"How are you?")),(0,r.kt)(o.Z,{url:"http://localhost:3000",mdxType:"BrowserWindow"},(0,r.kt)("img",{src:"/img/tutorial/cra-how-are-you.png"})),(0,r.kt)("admonition",{title:"Can't you get it?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Check the following."),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Did you start the back-end server? (",(0,r.kt)("inlineCode",{parentName:"li"},"yarn ts-node index.ts")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"frourio-tutorial/server")," directory)"),(0,r.kt)("li",{parentName:"ol"},"Did you start the front-end server? (",(0,r.kt)("inlineCode",{parentName:"li"},"yarn start")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"frourio-tutorial")," directory)"),(0,r.kt)("li",{parentName:"ol"},"Did you generate the API file? (",(0,r.kt)("inlineCode",{parentName:"li"},"yarn aspida")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"frourio-tutorial")," directory)"))))}f.isMDXComponent=!0}}]);