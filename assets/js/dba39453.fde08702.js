"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[7761],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return h}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(i),h=a,f=u["".concat(p,".").concat(h)]||u[h]||s[h]||r;return i?n.createElement(f,o(o({ref:t},c),{},{components:i})):n.createElement(f,o({ref:t},c))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},578:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=i(3117),a=i(102),r=(i(7294),i(3905)),o=["components"],l={id:"cli",title:"Command Line Interface"},p=void 0,d={unversionedId:"reference/cli",id:"reference/cli",title:"Command Line Interface",description:"Frourio",source:"@site/docs/reference/cli.mdx",sourceDirName:"reference",slug:"/reference/cli",permalink:"/docs/reference/cli",editUrl:"https://github.com/frouriojs/frourio.com/edit/master/docs/reference/cli.mdx",tags:[],version:"current",frontMatter:{id:"cli",title:"Command Line Interface"},sidebar:"docs",previous:{title:"Validation",permalink:"/docs/reference/validation"},next:{title:"Custom Entrypoint",permalink:"/docs/guide/entrypoint"}},c=[{value:"Frourio",id:"frourio",children:[{value:"Options",id:"frourio-options",children:[{value:"<code>[--version/-v]</code>",id:"frourio-version",children:[],level:4},{value:"<code>[--watch/-w]</code>",id:"frourio-watch",children:[],level:4},{value:"<code>[--project/-p &lt;project dir&gt;]</code>",id:"frourio-project",children:[],level:4}],level:3}],level:2},{value:"Create Frourio App",id:"cfa",children:[{value:"Arguments",id:"cfa-arguments",children:[{value:"<code>[&lt;dir&gt;]</code>",id:"cfa-dir",children:[],level:4}],level:3},{value:"Options",id:"cfa-options",children:[{value:"<code>[-v]</code>",id:"cfa-version",children:[],level:4},{value:"<code>[--port/-p &lt;port&gt;]</code>",id:"cfa-port",children:[],level:4},{value:"<code>[--host &lt;hostname&gt;]</code>",id:"cfa-host",children:[],level:4},{value:"<code>[--answers &lt;answers json&gt;]</code>",id:"cfa-answers",children:[],level:4},{value:"<code>[--help/-h]</code>",id:"cfa-help",children:[],level:4}],level:3}],level:2},{value:"Aspida",id:"aspida",children:[{value:"Options",id:"aspida-options",children:[{value:"<code>[--version/-v]</code>",id:"aspida-version",children:[],level:4},{value:"<code>[--watch/-w]</code>",id:"aspida-watch",children:[],level:4},{value:"<code>[--config/-c &lt;config path&gt;]</code>",id:"aspida-config",children:[],level:4}],level:3}],level:2},{value:"Pathpida",id:"pathpida",children:[{value:"Options",id:"pathpida-options",children:[{value:"<code>[--version/-v]</code>",id:"pathpida-version",children:[],level:4},{value:"<code>[--watch/-w]</code>",id:"pathpida-watch",children:[],level:4},{value:"<code>[--enableStatic/-s]</code>",id:"pathpida-enable-static",children:[],level:4},{value:"<code>[--ignorePath/-p &lt;ignore pattern&gt;]</code>",id:"pathpida-ignore-path",children:[],level:4},{value:"<code>[--output/-o &lt;output dir&gt;]</code>",id:"pathpida-output",children:[],level:4}],level:3}],level:2}],s={toc:c};function u(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"frourio"},"Frourio"),(0,r.kt)("img",{src:"/images/logo.svg",width:"144px",height:"40px",alt:"frourio"}),(0,r.kt)("h3",{id:"frourio-options"},"Options"),(0,r.kt)("h4",{id:"frourio-version"},(0,r.kt)("inlineCode",{parentName:"h4"},"[--version/-v]")),(0,r.kt)("p",null,"Show frourio version."),(0,r.kt)("h4",{id:"frourio-watch"},(0,r.kt)("inlineCode",{parentName:"h4"},"[--watch/-w]")),(0,r.kt)("p",null,"Enable watch mode.\nRegenerate ",(0,r.kt)("inlineCode",{parentName:"p"},"$server.ts")," according to the change of API files."),(0,r.kt)("h4",{id:"frourio-project"},(0,r.kt)("inlineCode",{parentName:"h4"},"[--project/-p <project dir>]")),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},".")),(0,r.kt)("p",null,"Frourio uses this path to reference ",(0,r.kt)("strong",{parentName:"p"},"tsconfig"),"."),(0,r.kt)("h2",{id:"cfa"},"Create Frourio App"),(0,r.kt)("h3",{id:"cfa-arguments"},"Arguments"),(0,r.kt)("h4",{id:"cfa-dir"},(0,r.kt)("inlineCode",{parentName:"h4"},"[<dir>]")),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"my-frourio-app")),(0,r.kt)("h3",{id:"cfa-options"},"Options"),(0,r.kt)("h4",{id:"cfa-version"},(0,r.kt)("inlineCode",{parentName:"h4"},"[-v]")),(0,r.kt)("p",null,"Show create-frourio-app version."),(0,r.kt)("h4",{id:"cfa-port"},(0,r.kt)("inlineCode",{parentName:"h4"},"[--port/-p <port>]")),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"3000")),(0,r.kt)("h4",{id:"cfa-host"},(0,r.kt)("inlineCode",{parentName:"h4"},"[--host <hostname>]")),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")),(0,r.kt)("h4",{id:"cfa-answers"},(0,r.kt)("inlineCode",{parentName:"h4"},"[--answers <answers json>]")),(0,r.kt)("p",null,"When this option is specified, cfa starts in CUI mode instead of GUI mode."),(0,r.kt)("p",null,"JSON Generator: ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/cfa/cui"},"Setup with CUI")),(0,r.kt)("h4",{id:"cfa-help"},(0,r.kt)("inlineCode",{parentName:"h4"},"[--help/-h]")),(0,r.kt)("p",null,"Show help."),(0,r.kt)("h2",{id:"aspida"},"Aspida"),(0,r.kt)("img",{src:"https://aspida.github.io/aspida/logos/svg/black.svg",width:"152px",height:"40px",alt:"aspida"}),(0,r.kt)("p",null,"more information: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aspida/aspida/tree/main/packages/aspida#readme"},"aspida/aspida")),(0,r.kt)("h3",{id:"aspida-options"},"Options"),(0,r.kt)("h4",{id:"aspida-version"},(0,r.kt)("inlineCode",{parentName:"h4"},"[--version/-v]")),(0,r.kt)("p",null,"Show aspida version."),(0,r.kt)("h4",{id:"aspida-watch"},(0,r.kt)("inlineCode",{parentName:"h4"},"[--watch/-w]")),(0,r.kt)("p",null,"Enable watch mode.\nRegenerate ",(0,r.kt)("inlineCode",{parentName:"p"},"$api.ts")," according to the change of API files."),(0,r.kt)("h4",{id:"aspida-config"},(0,r.kt)("inlineCode",{parentName:"h4"},"[--config/-c <config path>]")),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"aspida.config.js")),(0,r.kt)("h2",{id:"pathpida"},"Pathpida"),(0,r.kt)("img",{src:"https://aspida.github.io/pathpida/logos/svg/black.svg",width:"200px",height:"40px",alt:"pathpida"}),(0,r.kt)("p",null,"more information: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aspida/pathpida#CLI-options"},"aspida/pathpida")),(0,r.kt)("h3",{id:"pathpida-options"},"Options"),(0,r.kt)("h4",{id:"pathpida-version"},(0,r.kt)("inlineCode",{parentName:"h4"},"[--version/-v]")),(0,r.kt)("p",null,"Show pathpida version."),(0,r.kt)("h4",{id:"pathpida-watch"},(0,r.kt)("inlineCode",{parentName:"h4"},"[--watch/-w]")),(0,r.kt)("p",null,"Enable watch mode.\nRegenerate ",(0,r.kt)("inlineCode",{parentName:"p"},"$path.ts")," according to the change of pages and static files."),(0,r.kt)("h4",{id:"pathpida-enable-static"},(0,r.kt)("inlineCode",{parentName:"h4"},"[--enableStatic/-s]")),(0,r.kt)("p",null,"Generate static files path in ",(0,r.kt)("inlineCode",{parentName:"p"},"$path.ts"),"."),(0,r.kt)("h4",{id:"pathpida-ignore-path"},(0,r.kt)("inlineCode",{parentName:"h4"},"[--ignorePath/-p <ignore pattern>]")),(0,r.kt)("p",null,"Specify the ignore pattern file path."),(0,r.kt)("h4",{id:"pathpida-output"},(0,r.kt)("inlineCode",{parentName:"h4"},"[--output/-o <output dir>]")),(0,r.kt)("p",null,"Default:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Next.js: ",(0,r.kt)("inlineCode",{parentName:"li"},"utils")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"lib")),(0,r.kt)("li",{parentName:"ul"},"Nuxt.js: ",(0,r.kt)("inlineCode",{parentName:"li"},"plugins")),(0,r.kt)("li",{parentName:"ul"},"Other: ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules"))),(0,r.kt)("p",null,"Specify the output directory for ",(0,r.kt)("inlineCode",{parentName:"p"},"$path.ts"),"."))}u.isMDXComponent=!0}}]);