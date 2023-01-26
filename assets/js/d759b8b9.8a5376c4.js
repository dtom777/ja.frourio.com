"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[4476],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return t?n.createElement(m,l(l({ref:r},c),{},{components:t})):n.createElement(m,l({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:function(e,r,t){t.d(r,{Z:function(){return l}});var n=t(7294),a=t(6010),o="tabItem_Ymn6";function l(e){var r=e.children,t=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},r)}},5488:function(e,r,t){t.d(r,{Z:function(){return d}});var n=t(7462),a=t(7294),o=t(6010),l=t(2389),i=t(7392),s=t(7094),u=t(2466),c="tabList__CuJ",p="tabItem_LNqP";function f(e){var r,t,l=e.lazy,f=e.block,d=e.defaultValue,m=e.values,v=e.groupId,b=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:y.map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes}})),g=(0,i.l)(h,(function(e,r){return e.value===r.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(r=null!=d?d:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?r:y[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,s.U)(),E=x.tabGroupChoices,T=x.setTabGroupChoices,w=(0,a.useState)(k),O=w[0],N=w[1],P=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var _=E[v];null!=_&&_!==O&&h.some((function(e){return e.value===_}))&&N(_)}var S=function(e){var r=e.currentTarget,t=P.indexOf(r),n=h[t].value;n!==O&&(j(r),N(n),null!=v&&T(v,String(n)))},A=function(e){var r,t=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":var n,a=P.indexOf(e.currentTarget)+1;t=null!=(n=P[a])?n:P[0];break;case"ArrowLeft":var o,l=P.indexOf(e.currentTarget)-1;t=null!=(o=P[l])?o:P[P.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":f},b)},h.map((function(e){var r=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===r?0:-1,"aria-selected":O===r,key:r,ref:function(e){return P.push(e)},onKeyDown:A,onClick:S},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===r})}),null!=t?t:r)}))),l?(0,a.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==O})}))))}function d(e){var r=(0,l.Z)();return a.createElement(f,(0,n.Z)({key:String(r)},e))}},1133:function(e,r,t){t.r(r),t.d(r,{assets:function(){return f},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),l=t(5488),i=t(5162),s=["components"],u={id:"error-handling",title:"500 \u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},c=void 0,p={unversionedId:"guide/error-handling",id:"guide/error-handling",title:"500 \u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",description:"500 \u30a8\u30e9\u30fc\u3092\u30cf\u30f3\u30c9\u30eb\u3059\u308b\u306b\u306f\u3001fastify / express \u56fa\u6709\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",source:"@site/docs/guide/error-handling.mdx",sourceDirName:"guide",slug:"/guide/error-handling",permalink:"/docs/guide/error-handling",draft:!1,editUrl:"https://github.com/frouriojs/ja.frourio.com/edit/master/docs/guide/error-handling.mdx",tags:[],version:"current",frontMatter:{id:"error-handling",title:"500 \u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},sidebar:"docs",previous:{title:"CORS / Helmet",permalink:"/docs/guide/cors-helmet"},next:{title:"\u4f9d\u5b58\u6027\u306e\u6ce8\u5165",permalink:"/docs/guide/dependency-injection"}},f={},d=[{value:"\u4f8b",id:"example",level:2}],m={toc:d};function v(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"500 \u30a8\u30e9\u30fc\u3092\u30cf\u30f3\u30c9\u30eb\u3059\u308b\u306b\u306f\u3001fastify / express \u56fa\u6709\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"example"},"\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/api/tasks/controller.ts"',title:'"$/api/tasks/controller.ts"'},"import { defineController } from './$relay';\nimport { createTask } from '$/service/tasks';\n\nexport default defineController(() => ({\n  post: async ({ body }) => {\n    try {\n      const task = await createTask(body.label);\n      return { status: 201, body: task };\n    } catch (e) {\n      return { status: 500, body: 'Something broke!' };\n    }\n  },\n}));\n")),(0,o.kt)(l.Z,{groupId:"base-framework",defaultValue:"fastify",values:[{label:"Fastify",value:"fastify"},{label:"Express",value:"express"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"fastify",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/Hooks/#onerror"},"onError Hooks - Fastify"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/service/app.ts"',title:'"$/service/app.ts"'},"import Fastify, { FastifyServerFactory } from 'fastify';\nimport { API_BASE_PATH } from '$/service/envValues';\nimport server from '$/$server';\n\nexport const init = (serverFactory?: FastifyServerFactory) => {\n  const app = Fastify({ serverFactory });\n  app.addHook('onError', (req, reply, err) => {\n    console.error(err.stack);\n  });\n  server(app, { basePath: API_BASE_PATH });\n  return app;\n};\n"))),(0,o.kt)(i.Z,{value:"express",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://expressjs.com/en/guide/error-handling.html#the-default-error-handler"},"The default error handler - Express"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/service/app.ts"',title:'"$/service/app.ts"'},"import express from 'express';\nimport server from '$/$server';\nimport { API_BASE_PATH } from '$/service/envValues';\n\nexport const init = () => {\n  const app = express();\n  app.use((err, req, res, next) => {\n    console.error(err.stack);\n    res.status(500).send('Something broke!');\n  });\n  server(app, { basePath: API_BASE_PATH });\n  return app;\n};\n")))))}v.isMDXComponent=!0}}]);