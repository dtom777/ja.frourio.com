"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[4476],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return t?n.createElement(m,l(l({ref:r},c),{},{components:t})):n.createElement(m,l({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8215:function(e,r,t){var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},9877:function(e,r,t){t.d(r,{Z:function(){return c}});var n=t(3117),a=t(7294),o=t(2389),l=t(4726),i=t(6010),s="tabItem_LplD";function u(e){var r,t,o,u=e.lazy,c=e.block,p=e.defaultValue,f=e.values,d=e.groupId,m=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:v.map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes}})),b=(0,l.lx)(y,(function(e,r){return e.value===r.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(r=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(o=v[0])?void 0:o.props.value;if(null!==h&&!y.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),k=g.tabGroupChoices,x=g.setTabGroupChoices,E=(0,a.useState)(h),T=E[0],w=E[1],O=[],N=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var P=k[d];null!=P&&P!==T&&y.some((function(e){return e.value===P}))&&w(P)}var j=function(e){var r=e.currentTarget,t=O.indexOf(r),n=y[t].value;n!==T&&(N(r),w(n),null!=d&&x(d,n))},A=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;t=O[n]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},m)},y.map((function(e){var r=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===r?0:-1,"aria-selected":T===r,key:r,ref:function(e){return O.push(e)},onKeyDown:A,onFocus:j,onClick:j},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":T===r})}),null!=t?t:r)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==T})}))))}function c(e){var r=(0,o.Z)();return a.createElement(u,(0,n.Z)({key:String(r)},e))}},1133:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return f},default:function(){return m}});var n=t(3117),a=t(102),o=(t(7294),t(3905)),l=t(9877),i=t(8215),s=["components"],u={id:"error-handling",title:"500 Error Handling"},c=void 0,p={unversionedId:"guide/error-handling",id:"guide/error-handling",title:"500 Error Handling",description:"For handling 500 errors, use the native features of Fastify / Express.",source:"@site/docs/guide/error-handling.mdx",sourceDirName:"guide",slug:"/guide/error-handling",permalink:"/docs/guide/error-handling",editUrl:"https://github.com/frouriojs/frourio.com/edit/master/docs/guide/error-handling.mdx",tags:[],version:"current",frontMatter:{id:"error-handling",title:"500 Error Handling"},sidebar:"docs",previous:{title:"CORS / Helmet",permalink:"/docs/guide/cors-helmet"},next:{title:"Dependency Injection",permalink:"/docs/guide/dependency-injection"}},f=[{value:"Example",id:"example",children:[],level:2}],d={toc:f};function m(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For handling 500 errors, use the native features of Fastify / Express."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/api/tasks/controller.ts"',title:'"$/api/tasks/controller.ts"'},"import { defineController } from './$relay'\nimport { createTask } from '$/service/tasks'\n\nexport default defineController(() => ({\n  post: async ({ body }) => {\n    try {\n      const task = await createTask(body.label)\n      return { status: 201, body: task }\n    } catch (e) {\n      return { status: 500, body: 'Something broke!' }\n    }\n  },\n}))\n")),(0,o.kt)(l.Z,{groupId:"base-framework",defaultValue:"fastify",values:[{label:"Fastify",value:"fastify"},{label:"Express",value:"express"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"fastify",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/Hooks/#onerror"},"onError Hooks - Fastify"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/service/app.ts"',title:'"$/service/app.ts"'},"import Fastify, { FastifyServerFactory } from 'fastify'\nimport { API_BASE_PATH } from '$/service/envValues'\nimport server from '$/$server'\n\nexport const init = (serverFactory?: FastifyServerFactory) => {\n  const app = Fastify({ serverFactory })\n  app.addHook('onError', (req, reply, err) => {\n    console.error(err.stack)\n  })\n  server(app, { basePath: API_BASE_PATH })\n  return app\n}\n"))),(0,o.kt)(i.Z,{value:"express",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://expressjs.com/en/guide/error-handling.html#the-default-error-handler"},"The default error handler - Express"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/service/app.ts"',title:'"$/service/app.ts"'},"import express from 'express'\nimport server from '$/$server'\nimport { API_BASE_PATH } from '$/service/envValues'\n\nexport const init = () => {\n  const app = express()\n  app.use((err, req, res, next) => {\n    console.error(err.stack)\n    res.status(500).send('Something broke!')\n  })\n  server(app, { basePath: API_BASE_PATH })\n  return app\n}\n")))))}m.isMDXComponent=!0}}]);