(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[4781],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||l;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},1395:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),o=r(944),l=r(6010),a="tabItem_1uMI",s="tabItemActive_2DSg";var i=37,c=39;var u=function(e){var t=e.lazy,r=e.block,u=e.defaultValue,f=e.values,p=e.groupId,d=e.className,m=(0,o.Z)(),v=m.tabGroupChoices,y=m.setTabGroupChoices,k=(0,n.useState)(u),h=k[0],b=k[1],g=n.Children.toArray(e.children),x=[];if(null!=p){var w=v[p];null!=w&&w!==h&&f.some((function(e){return e.value===w}))&&b(w)}var C=function(e){var t=e.currentTarget,r=x.indexOf(t),n=f[r].value;b(n),null!=p&&(y(p,n),setTimeout((function(){var e,r,n,o,l,a,i,c;(e=t.getBoundingClientRect(),r=e.top,n=e.left,o=e.bottom,l=e.right,a=window,i=a.innerHeight,c=a.innerWidth,r>=0&&l<=c&&o<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case c:var n=x.indexOf(e.target)+1;r=x[n]||x[0];break;case i:var o=x.indexOf(e.target)-1;r=x[o]||x[x.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},d)},f.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,l.Z)("tabs__item",a,{"tabs__item--active":h===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:C,onClick:C},r)}))),t?(0,n.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},944:function(e,t,r){"use strict";var n=r(7294),o=r(9443);t.Z=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8343:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(4034),o=r(9973),l=(r(7294),r(3905)),a=r(1395),s=r(8215),i={id:"controller-level-hooks",title:"Controller-level hooks"},c={unversionedId:"hooks/controller-level-hooks",id:"hooks/controller-level-hooks",isDocsHomePage:!1,title:"Controller-level hooks",description:"Controller-level hooks are called at the current endpoint after directory-level hooks.",source:"@site/docs/hooks/controller-level-hooks.mdx",sourceDirName:"hooks",slug:"/hooks/controller-level-hooks",permalink:"/docs/hooks/controller-level-hooks",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/hooks/controller-level-hooks.mdx",version:"current",frontMatter:{id:"controller-level-hooks",title:"Controller-level hooks"},sidebar:"someSidebar",previous:{title:"Directory-level hooks",permalink:"/docs/hooks/directory-level-hooks"},next:{title:"Authentication",permalink:"/docs/authentication"}},u=[],f={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Controller-level hooks are called at the current endpoint after directory-level hooks.",(0,l.kt)("br",{parentName:"p"}),"\n","Hooks written in contoller.ts do not cascade and are only available to that controller."),(0,l.kt)(a.Z,{defaultValue:"fastify",values:[{label:"fastify",value:"fastify"},{label:"express",value:"express"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"fastify",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Hooks/"},"Fastify hooks")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/tasks/controller.ts"',title:'"server/api/tasks/controller.ts"'},"import { defineHooks, defineController } from './$relay' // '$relay.ts' is automatically generated by frourio\nimport { getTasks, createTask } from '$/service/tasks'\n\nexport const hooks = defineHooks(() => ({\n  onRequest: (req, reply, done) => {\n    console.log('Controller-level onRequest single hook:', req.url)\n    done()\n  },\n  preParsing: [\n    (req, reply, payload, done) => {\n      console.log('Controller-level preParsing first hook:', req.url)\n      done()\n    },\n    (req, reply, payload, done) => {\n      console.log('Controller-level preParsing second hook:', req.url)\n      done()\n    }\n  ]\n}))\n\nexport default defineController(() => ({\n  get: async ({ query }) => ({\n    status: 200,\n    body: (await getTasks()).slice(0, query.limit)\n  }),\n  post: async ({ body }) => {\n    const task = await createTask(body.label)\n\n    return { status: 201, body: task }\n  }\n}))\n"))),(0,l.kt)(s.Z,{value:"express",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://expressjs.com/en/guide/using-middleware.html"},"Express middleware")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/tasks/controller.ts"',title:'"server/api/tasks/controller.ts"'},"import { defineHooks, defineController } from './$relay' // '$relay.ts' is automatically generated by frourio\nimport { getTasks, createTask } from '$/service/tasks'\n\nexport const hooks = defineHooks(() => ({\n  onRequest: (req, res, next) => {\n    console.log('Controller-level onRequest single hook:', req.path)\n    next()\n  },\n  preParsing: [\n    (req, res, next) => {\n      console.log('Controller-level preParsing first hook:', req.path)\n      next()\n    },\n    (req, res, next) => {\n      console.log('Controller-level preParsing second hook:', req.path)\n      next()\n    }\n  ]\n}))\n\nexport default defineController(() => ({\n  get: async ({ query }) => ({\n    status: 200,\n    body: (await getTasks()).slice(0, query.limit)\n  }),\n  post: async ({ body }) => {\n    const task = await createTask(body.label)\n\n    return { status: 201, body: task }\n  }\n}))\n")))))}p.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})}}]);