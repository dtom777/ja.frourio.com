(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{117:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),a=(r(0),r(127)),i=r(131),c=r(132),l={id:"create-controller",title:"Create controllers"},s={unversionedId:"controller/create-controller",id:"controller/create-controller",isDocsHomePage:!1,title:"Create controllers",description:"Prep (start frourio in dev mode)",source:"@site/docs/controller/create-controller.mdx",slug:"/controller/create-controller",permalink:"/docs/controller/create-controller",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/controller/create-controller.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Entrypoint of server",permalink:"/docs/entrypoint"},next:{title:"GET - /tasks?limit={number}",permalink:"/docs/controller/get-tasks"}},d=[{value:"Prep (start frourio in dev mode)",id:"prep-start-frourio-in-dev-mode",children:[]},{value:"Creation and automatic generation of directories",id:"creation-and-automatic-generation-of-directories",children:[{value:"<code>index.ts</code> - API type definitions",id:"indexts---api-type-definitions",children:[]},{value:"<code>$relay.ts</code> - Bridge to the server framework",id:"relayts---bridge-to-the-server-framework",children:[]},{value:"<code>controller.ts</code> - The definition of controllers",id:"controllerts---the-definition-of-controllers",children:[]}]}],u={rightToc:d};function b(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"prep-start-frourio-in-dev-mode"},"Prep (start frourio in dev mode)"),Object(a.b)("p",null,"Before you create the directory and start writing the controller, start frourio in dev mode."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn dev:frourio\n# or\nyarn dev # all\n")),Object(a.b)("h2",{id:"creation-and-automatic-generation-of-directories"},"Creation and automatic generation of directories"),Object(a.b)("p",null,"Now that we're ready, let's create a ",Object(a.b)("inlineCode",{parentName:"p"},"memo/")," directory in ",Object(a.b)("inlineCode",{parentName:"p"},"server/api/"),"."),Object(a.b)("p",null,"Then three files, ",Object(a.b)("inlineCode",{parentName:"p"},"index.ts")," ",Object(a.b)("inlineCode",{parentName:"p"},"$relay.ts")," and the main one, ",Object(a.b)("inlineCode",{parentName:"p"},"controller.ts"),", are automatically generated under the directory we just created."),Object(a.b)("p",null,Object(a.b)("img",{alt:"image.png",src:r(419).default})),Object(a.b)("p",null,"We just ran frourio in dev mode, and it does two things while it's running: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Auto-generate files when the directory is added to the ",Object(a.b)("inlineCode",{parentName:"li"},"server/api/")),Object(a.b)("li",{parentName:"ul"},"Auto-generate ",Object(a.b)("inlineCode",{parentName:"li"},"$server.ts")," if there are changes in ",Object(a.b)("inlineCode",{parentName:"li"},"server/api/"))),Object(a.b)("h3",{id:"indexts---api-type-definitions"},Object(a.b)("inlineCode",{parentName:"h3"},"index.ts")," - API type definitions"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"export type Methods = {\n  get: {\n    resBody: string\n  }\n}\n")),Object(a.b)("p",null,"Write the API request type definition."),Object(a.b)("h3",{id:"relayts---bridge-to-the-server-framework"},Object(a.b)("inlineCode",{parentName:"h3"},"$relay.ts")," - Bridge to the server framework"),Object(a.b)("p",null,"A bridge between Fastify and the controller. Files starting with ",Object(a.b)("inlineCode",{parentName:"p"},"$")," are auto-generated, so you don't have to edit them."),Object(a.b)("h3",{id:"controllerts---the-definition-of-controllers"},Object(a.b)("inlineCode",{parentName:"h3"},"controller.ts")," - The definition of controllers"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { defineController } from './$relay'\n\nexport default defineController(() => ({\n  get: () => ({ status: 200, body: 'Hello' })\n}))\n")),Object(a.b)("p",null,"This file defines the behavior of the controller that received the request."),Object(a.b)("p",null,"The controller is defined in ",Object(a.b)("inlineCode",{parentName:"p"},"$server.ts")," by passing a function that returns response data for each HTTP method as an argument to ",Object(a.b)("inlineCode",{parentName:"p"},"defineController()"),"."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"$server.ts")," excerpt:"),Object(a.b)(i.a,{defaultValue:"fastify",values:[{label:"fastify",value:"fastify"},{label:"express",value:"express"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"fastify",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/$server.ts"',title:'"server/$server.ts"'}),"  fastify.get(\n    `${basePath}/memo`,\n    methodToHandler(controller1.get)\n  )\n"))),Object(a.b)(c.a,{value:"express",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/$server.ts"',title:'"server/$server.ts"'}),"  app.get(\n    `${basePath}/memo`,\n    methodsToHandler(controller1.get)\n  )\n")))),Object(a.b)("p",null,"We can see that route definitions are automatically generated."))}b.isMDXComponent=!0},127:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),f=n,p=u["".concat(i,".").concat(f)]||u[f]||b[f]||a;return r?o.a.createElement(p,c(c({ref:t},s),{},{components:r})):o.a.createElement(p,c({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},128:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},129:function(e,t,r){"use strict";var n=r(0),o=r(130);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},130:function(e,t,r){"use strict";var n=r(0),o=Object(n.createContext)(void 0);t.a=o},131:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(129),i=r(128),c=r(54),l=r.n(c),s=37,d=39;t.a=function(e){var t=e.lazy,r=e.block,c=e.children,u=e.defaultValue,b=e.values,f=e.groupId,p=e.className,m=Object(a.a)(),O=m.tabGroupChoices,A=m.setTabGroupChoices,v=Object(n.useState)(u),g=v[0],y=v[1];if(null!=f){var h=O[f];null!=h&&h!==g&&b.some((function(e){return e.value===h}))&&y(h)}var w=function(e){y(e),null!=f&&A(f,e)},j=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":r},p)},b.map((function(e){var t=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case d:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(j,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(c.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},132:function(e,t,r){"use strict";var n=r(3),o=r(0),a=r.n(o);t.a=function(e){var t=e.children,r=e.hidden,o=e.className;return a.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:r,className:o}),t)}},419:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,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"}}]);