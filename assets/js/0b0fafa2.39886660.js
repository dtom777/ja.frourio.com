(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[1890],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,v=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},1395:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(7294),o=r(944),a=r(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,l=39;var p=function(e){var t=e.lazy,r=e.block,p=e.defaultValue,u=e.values,f=e.groupId,m=e.className,v=(0,o.Z)(),y=v.tabGroupChoices,d=v.setTabGroupChoices,b=(0,n.useState)(p),g=b[0],h=b[1],P=n.Children.toArray(e.children),_=[];if(null!=f){var O=y[f];null!=O&&O!==g&&u.some((function(e){return e.value===O}))&&h(O)}var x=function(e){var t=e.currentTarget,r=_.indexOf(t),n=u[r].value;h(n),null!=f&&(d(f,n),setTimeout((function(){var e,r,n,o,a,i,c,l;(e=t.getBoundingClientRect(),r=e.top,n=e.left,o=e.bottom,a=e.right,i=window,c=i.innerHeight,l=i.innerWidth,r>=0&&a<=l&&o<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},E=function(e){var t,r;switch(e.keyCode){case l:var n=_.indexOf(e.target)+1;r=_[n]||_[0];break;case c:var o=_.indexOf(e.target)-1;r=_[o]||_[_.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},m)},u.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:E,onFocus:x,onClick:x},r)}))),t?(0,n.cloneElement)(P.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},P.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},944:function(e,t,r){"use strict";var n=r(7294),o=r(9443);t.Z=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4509:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(4034),o=r(9973),a=(r(7294),r(3905)),i=r(1395),s=r(8215),c={id:"entrypoint",title:"Entrypoint of server"},l={unversionedId:"entrypoint",id:"entrypoint",isDocsHomePage:!1,title:"Entrypoint of server",description:"<Tabs",source:"@site/docs/entrypoint.mdx",sourceDirName:".",slug:"/entrypoint",permalink:"/docs/entrypoint",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/entrypoint.mdx",version:"current",frontMatter:{id:"entrypoint",title:"Entrypoint of server"},sidebar:"someSidebar",previous:{title:"Setup with CUI",permalink:"/docs/installation/cui"},next:{title:"Create controllers",permalink:"/docs/controller/create-controller"}},p=[],u={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("br",null),(0,a.kt)(i.Z,{defaultValue:"fastify",values:[{label:"fastify",value:"fastify"},{label:"express",value:"express"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"fastify",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/service/app.ts"',title:'"server/service/app.ts"'},"import path from 'path'\nimport Fastify, { FastifyServerFactory } from 'fastify'\nimport helmet from 'fastify-helmet'\nimport cors from 'fastify-cors'\nimport fastifyStatic from 'fastify-static'\nimport fastifyJwt from 'fastify-jwt'\nimport {\n  API_JWT_SECRET,\n  API_BASE_PATH,\n  API_UPLOAD_DIR\n} from '$/service/envValues'\nimport server from '$/$server'\n\nexport const init = (serverFactory?: FastifyServerFactory) => {\n  const app = Fastify({ serverFactory })\n  app.register(helmet)\n  app.register(cors)\n  app.register(fastifyStatic, {\n    root: path.join(__dirname, 'static'),\n    prefix: '/static/'\n  })\n  if (API_UPLOAD_DIR) {\n    app.after(() => {\n      app.register(fastifyStatic, {\n        root: path.resolve(__dirname, API_UPLOAD_DIR),\n        prefix: '/upload/',\n        decorateReply: false\n      })\n    })\n  }\n  app.register(fastifyJwt, { secret: API_JWT_SECRET })\n  server(app, { basePath: API_BASE_PATH })\n  return app\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/entrypoints/index.ts"',title:'"server/entrypoints/index.ts"'},"import { init } from '$/service/app'\nimport { API_SERVER_PORT } from '$/service/envValues'\n\ninit().listen(API_SERVER_PORT, '0.0.0.0')\n"))),(0,a.kt)(s.Z,{value:"express",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/entrypoints/index.ts"',title:'"server/entrypoints/index.ts"'},"import express from 'express'\nimport helmet from 'helmet'\nimport cors from 'cors'\nimport server from '$/$server'\nimport {\n  API_SERVER_PORT,\n  API_BASE_PATH,\n  API_UPLOAD_DIR\n} from '$/service/envValues'\n\nconst app = express()\napp.use(helmet())\napp.use(cors())\nserver(app, { basePath: API_BASE_PATH })\napp.use('/static', express.static('static'))\nif (API_UPLOAD_DIR) app.use('/upload', express.static(API_UPLOAD_DIR))\napp.listen(API_SERVER_PORT)\n\n")))))}f.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})}}]);