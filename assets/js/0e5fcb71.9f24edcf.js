"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[4822],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(3117),o=r(7294),a=r(2389),i=r(4726),l=r(6010),u="tabItem_LplD";function s(e){var t,r,a,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),g=b.tabGroupChoices,w=b.setTabGroupChoices,O=(0,o.useState)(y),N=O[0],x=O[1],T=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=g[d];null!=j&&j!==N&&h.some((function(e){return e.value===j}))&&x(j)}var C=function(e){var t=e.currentTarget,r=T.indexOf(t),n=h[r].value;n!==N&&(E(t),x(n),null!=d&&w(d,n))},D=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;r=T[n]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;r=T[o]||T[T.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var t=e.value,r=e.label,a=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:C,onClick:C},a,{className:(0,l.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":N===t})}),null!=r?r:t)}))),s?(0,o.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,a.Z)();return o.createElement(s,(0,n.Z)({key:String(t)},e))}},44:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=r(9877),l=r(8215),u=["components"],s={id:"minimum-hooks",title:"Minimum Hooks"},c=void 0,p={unversionedId:"hooks/minimum-hooks",id:"hooks/minimum-hooks",title:"Minimum Hooks",description:"Prep (start frourio in dev mode)",source:"@site/docs/hooks/minimum-hooks.mdx",sourceDirName:"hooks",slug:"/hooks/minimum-hooks",permalink:"/docs/hooks/minimum-hooks",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/hooks/minimum-hooks.mdx",tags:[],version:"current",frontMatter:{id:"minimum-hooks",title:"Minimum Hooks"},sidebar:"someSidebar",previous:{title:"Hooks types and lifecycle",permalink:"/docs/hooks/lifecycle"},next:{title:"Directory-level hooks",permalink:"/docs/hooks/directory-level-hooks"}},m=[{value:"Prep (start frourio in dev mode)",id:"prep-start-frourio-in-dev-mode",children:[],level:2},{value:"Creation and automatic generation",id:"creation-and-automatic-generation",children:[],level:2}],d={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prep-start-frourio-in-dev-mode"},"Prep (start frourio in dev mode)"),(0,a.kt)("p",null,"Before we create the ",(0,a.kt)("inlineCode",{parentName:"p"},"hooks.ts")," and start writing the hooks, start frourio in dev mode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn dev:frourio\n# or\nyarn dev # all\n")),(0,a.kt)("p",null,"It detects the creation of files, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"hooks.ts"),", and puts a template in the case of an empty file."),(0,a.kt)("h2",{id:"creation-and-automatic-generation"},"Creation and automatic generation"),(0,a.kt)("p",null,"For starters, let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"hooks.ts")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"/api"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"touch server/api/hooks.ts\n")),(0,a.kt)("p",null,"Then we get a ",(0,a.kt)("inlineCode",{parentName:"p"},"directory level hooks")," (","*",(0,a.kt)("a",{parentName:"p",href:"directory-level-hooks"},"later"),"), which is just a ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log")," as follows."),(0,a.kt)(i.Z,{defaultValue:"fastify",values:[{label:"fastify",value:"fastify"},{label:"express",value:"express"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"fastify",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/hooks.ts"',title:'"server/api/hooks.ts"'},"import { defineHooks } from './$relay'\n\nexport default defineHooks(() => ({\n  onRequest: (req, reply, done) => {\n    console.log('Directory level onRequest hook:', req.url)\n    done()\n  }\n}))\n"))),(0,a.kt)(l.Z,{value:"express",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/hooks.ts"',title:'"server/api/hooks.ts"'},"import { defineHooks } from './$relay'\n\nexport default defineHooks(() => ({\n  onRequest: (req, res, next) => {\n    console.log('Directory level onRequest hook:', req.path)\n    next()\n  }\n}))\n")))))}f.isMDXComponent=!0}}]);