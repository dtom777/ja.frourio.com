"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[8023],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(3117),o=r(7294),a=r(2389),l=r(4726),i=r(6010),s="tabItem_LplD";function u(e){var t,r,a,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),g=b.tabGroupChoices,w=b.setTabGroupChoices,x=(0,o.useState)(y),N=x[0],O=x[1],D=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=g[f];null!=E&&E!==N&&h.some((function(e){return e.value===E}))&&O(E)}var j=function(e){var t=e.currentTarget,r=D.indexOf(t),n=h[r].value;n!==N&&(T(t),O(n),null!=f&&w(f,n))},q=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=D.indexOf(e.currentTarget)+1;r=D[n]||D[0];break;case"ArrowLeft":var o=D.indexOf(e.currentTarget)-1;r=D[o]||D[D.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},m)},h.map((function(e){var t=e.value,r=e.label,a=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return D.push(e)},onKeyDown:q,onFocus:j,onClick:j},a,{className:(0,i.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":N===t})}),null!=r?r:t)}))),u?(0,o.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,a.Z)();return o.createElement(u,(0,n.Z)({key:String(t)},e))}},5237:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),l=r(9877),i=r(8215),s=["components"],u={id:"directory-level-hooks",title:"Directory-level hooks"},c=void 0,p={unversionedId:"hooks/directory-level-hooks",id:"hooks/directory-level-hooks",title:"Directory-level hooks",description:"Directory-level hooks are called at the current and subordinate endpoints.",source:"@site/docs/hooks/directory-level-hooks.mdx",sourceDirName:"hooks",slug:"/hooks/directory-level-hooks",permalink:"/docs/hooks/directory-level-hooks",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/hooks/directory-level-hooks.mdx",tags:[],version:"current",frontMatter:{id:"directory-level-hooks",title:"Directory-level hooks"},sidebar:"someSidebar",previous:{title:"Minimum Hooks",permalink:"/docs/hooks/minimum-hooks"},next:{title:"Controller-level hooks",permalink:"/docs/hooks/controller-level-hooks"}},d=[],f={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Directory-level hooks are called at the current and subordinate endpoints."),(0,a.kt)(l.Z,{defaultValue:"fastify",values:[{label:"fastify",value:"fastify"},{label:"express",value:"express"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"fastify",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Hooks/"},"Fastify hooks")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/tasks/hooks.ts"',title:'"server/api/tasks/hooks.ts"'},"import { defineHooks } from './$relay' // '$relay.ts' is automatically generated by frourio\n\nexport default defineHooks(() => ({\n  onRequest: [\n    (req, reply, done) => {\n      console.log('Directory-level onRequest first hook:', req.url)\n      done()\n    },\n    (req, reply, done) => {\n      console.log('Directory-level onRequest second hook:', req.url)\n      done()\n    }\n  ],\n  preParsing: (req, reply, payload, done) => {\n    console.log('Directory-level preParsing single hook:', req.url)\n    done()\n  }\n}))\n"))),(0,a.kt)(i.Z,{value:"express",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/en/guide/using-middleware.html"},"Express middleware")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/tasks/hooks.ts"',title:'"server/api/tasks/hooks.ts"'},"import { defineHooks } from './$relay' // '$relay.ts' is automatically generated by frourio\n\nexport default defineHooks(() => ({\n  onRequest: [\n    (req, res, next) => {\n      console.log('Directory-level onRequest first hook:', req.path)\n      next()\n    },\n    (req, res, next) => {\n      console.log('Directory-level onRequest second hook:', req.path)\n      next()\n    }\n  ],\n  preParsing: (req, res, next) => {\n    console.log('Directory-level preParsing single hook:', req.path)\n    next()\n  }\n}))\n")))),(0,a.kt)("br",null),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Directory-level hooks are cascading, so ",(0,a.kt)("inlineCode",{parentName:"p"},"server/api/hooks.ts")," is effectively Global Hooks."))))}m.isMDXComponent=!0}}]);