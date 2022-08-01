"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[6310],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7462),a=n(7294),l=n(6010),o=n(2389),i=n(7392),u=n(7094),s=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,f=e.defaultValue,m=e.values,y=e.groupId,v=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(t=null!=f?f:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,u.U)(),g=C.tabGroupChoices,T=C.setTabGroupChoices,w=(0,a.useState)(N),x=w[0],O=w[1],E=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var P=g[y];null!=P&&P!==x&&h.some((function(e){return e.value===P}))&&O(P)}var I=function(e){var t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==x&&(j(t),O(r),null!=y&&T(y,String(r)))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var l,o=E.indexOf(e.currentTarget)-1;n=null!=(l=E[o])?l:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},v)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:R,onFocus:I,onClick:I},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function f(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},3733:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(5488),i=n(5162),u=["components"],s={id:"controller",title:"Controller"},c=void 0,p={unversionedId:"reference/controller",id:"reference/controller",title:"Controller",description:"To define controllers, use the function defineMethods exported by ./$relay.ts.",source:"@site/docs/reference/controller.mdx",sourceDirName:"reference",slug:"/reference/controller",permalink:"/docs/reference/controller",draft:!1,editUrl:"https://github.com/frouriojs/frourio.com/edit/master/docs/reference/controller.mdx",tags:[],version:"current",frontMatter:{id:"controller",title:"Controller"},sidebar:"docs",previous:{title:"Aspida",permalink:"/docs/reference/aspida"},next:{title:"Lifecycle and Hooks",permalink:"/docs/reference/hooks"}},d={},f=[{value:"Function <code>defineController</code>",id:"function-definecontroller",level:2},{value:"Argument Type",id:"definecontoller-argument-type",level:3},{value:"Return Type",id:"definecontoller-return-type",level:3},{value:"value of ControllerMethods",id:"value-of-controllermethods",level:2},{value:"Argument Type",id:"controllermethods-argument-type",level:3},{value:"Return Type",id:"controllermethods-return-type",level:3}],m={toc:f};function y(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='controller.ts'",title:"'controller.ts'"},"import { defineController } from './$relay'\n\nexport default defineController(() => ({\n  get: () => ({ status: 200, body: 'Hello' }),\n  post: async ({ query: { foo }, params: { bar }, body }) => {\n    const baz = await createBaz(foo, bar, body)\n    if (!baz) return { status: 400 }\n    return { status: 201, body: baz }\n  },\n}))\n")),(0,l.kt)("p",null,"To define controllers, use the function ",(0,l.kt)("inlineCode",{parentName:"p"},"defineMethods")," exported by ",(0,l.kt)("inlineCode",{parentName:"p"},"./$relay.ts"),"."),(0,l.kt)("p",null,"The type definition of defineController is automatically generated based on the aspida type definition. It must be imported from ",(0,l.kt)("inlineCode",{parentName:"p"},"$relay.ts")," in the same directory as the controller."),(0,l.kt)("p",null,"The return value of defineController must be default exported."),(0,l.kt)("p",null,"If you want to use the fastify instance in the controller, you can take it as an argument."),(0,l.kt)("h2",{id:"function-definecontroller"},"Function ",(0,l.kt)("inlineCode",{parentName:"h2"},"defineController")),(0,l.kt)("h3",{id:"definecontoller-argument-type"},"Argument Type"),(0,l.kt)(o.Z,{groupId:"base-framework",defaultValue:"fastify",values:[{label:"Fastify",value:"fastify"},{label:"Express",value:"express"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"fastify",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"function ",(0,l.kt)("inlineCode",{parentName:"li"},"(fastify: FastifyInstance) => ControllerMethods"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/TypeScript/#fastifyfastifyinstancerawserver-rawrequest-requestgeneric-logger"},(0,l.kt)("inlineCode",{parentName:"a"},"FastifyInstance"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ControllerMethods")," : An object having the method name as keys and the controller functions as values."))))),(0,l.kt)(i.Z,{value:"express",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"function ",(0,l.kt)("inlineCode",{parentName:"li"},"(app: Express) => ControllerMethods"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://expressjs.com/en/4x/api.html"},(0,l.kt)("inlineCode",{parentName:"a"},"Express"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ControllerMethods")," : An object having the method name as keys and the controller functions as values.")))))),(0,l.kt)("h3",{id:"definecontoller-return-type"},"Return Type"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"object ",(0,l.kt)("inlineCode",{parentName:"li"},"ControllerMethods"))),(0,l.kt)("h2",{id:"value-of-controllermethods"},"value of ControllerMethods"),(0,l.kt)("h3",{id:"controllermethods-argument-type"},"Argument Type"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"object ",(0,l.kt)("inlineCode",{parentName:"li"},"RequestParams")," & ",(0,l.kt)("a",{parentName:"li",href:"/docs/reference/additionalRequest"},(0,l.kt)("inlineCode",{parentName:"a"},"AdditinalRequest")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"query")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"query")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"headers")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"reqHeaders")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"params")," : URL Params"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"body")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"reqBody"))))),(0,l.kt)("h3",{id:"controllermethods-return-type"},"Return Type"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"object ",(0,l.kt)("inlineCode",{parentName:"li"},"ServerResponse")," | promise ",(0,l.kt)("inlineCode",{parentName:"li"},"Promise<ServerResponse>"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"status")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"status")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"body")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"resBody")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"headers")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"resHeaders"))))),(0,l.kt)("p",null,"The types of ",(0,l.kt)("inlineCode",{parentName:"p"},"RequestParams")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ServerResponse")," are determined by API type definitions."),(0,l.kt)("p",null,"Also, each request handler can be sync or async."))}y.isMDXComponent=!0}}]);