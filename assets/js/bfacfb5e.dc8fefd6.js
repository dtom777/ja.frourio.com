"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[2119],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),d=n(2466),u="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n,o=e.lazy,c=e.block,m=e.defaultValue,f=e.values,k=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(N,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!N.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,s.U)(),C=g.tabGroupChoices,x=g.setTabGroupChoices,w=(0,a.useState)(y),T=w[0],O=w[1],S=[],E=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var j=C[k];null!=j&&j!==T&&N.some((function(e){return e.value===j}))&&O(j)}var H=function(e){var t=e.currentTarget,n=S.indexOf(t),r=N[n].value;r!==T&&(E(t),O(r),null!=k&&x(k,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=S.indexOf(e.currentTarget)+1;n=null!=(r=S[a])?r:S[0];break;case"ArrowLeft":var l,o=S.indexOf(e.currentTarget)-1;n=null!=(l=S[o])?l:S[S.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},N.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return S.push(e)},onKeyDown:I,onFocus:H,onClick:H},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},7506:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(5488),i=n(5162),s=["components"],d={id:"routing",title:"\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0"},u=void 0,p={unversionedId:"reference/routing",id:"reference/routing",title:"\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0",description:"Frourio \u3067\u306f\u3001Next.js \u306e\u3088\u3046\u306a\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u306b\u57fa\u3065\u3044\u305f API \u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3092\u7528\u3044\u3066\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002",source:"@site/docs/reference/routing.mdx",sourceDirName:"reference",slug:"/reference/routing",permalink:"/docs/reference/routing",draft:!1,editUrl:"https://github.com/frouriojs/ja.frourio.com/edit/master/docs/reference/routing.mdx",tags:[],version:"current",frontMatter:{id:"routing",title:"\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0"},sidebar:"docs",previous:{title:"Aspida",permalink:"/docs/reference/aspida"},next:{title:"\u30cf\u30f3\u30c9\u30e9\u30fc",permalink:"/docs/reference/handler"}},c={},m=[{value:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u30ec\u30d9\u30eb",id:"controller-level",level:2},{value:"\u95a2\u6570 <code>defineController()</code>",id:"definecontroller",level:3},{value:"\u5f15\u6570\u306e\u578b",id:"definecontoller-argument-type",level:4},{value:"\u623b\u308a\u5024\u306e\u578b",id:"definecontoller-return-type",level:4},{value:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 <code>ServerMethodHandler</code>",id:"servermethodhandler",level:3},{value:"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30ec\u30d9\u30eb \u30d5\u30c3\u30af",id:"directory-level-hooks",level:2},{value:"\u95a2\u6570 <code>defineHooks()</code>",id:"definehooks",level:3},{value:"\u5f15\u6570\u306e\u578b",id:"definehooks-argument-type",level:5},{value:"\u623b\u308a\u5024\u306e\u578b",id:"\u623b\u308a\u5024\u306e\u578b",level:5},{value:"\u5f15\u6570\u306e\u578b",id:"definehooks-argument-type",level:4},{value:"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30ec\u30d9\u30eb \u30d0\u30ea\u30c7\u30fc\u30bf\u30fc",id:"directory-level-validators",level:2}],f={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Frourio \u3067\u306f\u3001Next.js \u306e\u3088\u3046\u306a\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u306b\u57fa\u3065\u3044\u305f API \u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3092\u7528\u3044\u3066\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\n\u5b9a\u7fa9\u65b9\u6cd5\u306f\u3001\u5f71\u97ff\u3059\u308b\u7bc4\u56f2\u306b\u57fa\u3065\u3044\u3066\u5927\u307e\u304b\u306b\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u30ec\u30d9\u30eb\u3068\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30ec\u30d9\u30eb\u306e 2 \u3064\u306b\u5206\u985e\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u5b9a\u7fa9\u306b\u7528\u3044\u308b\u30ec\u30d9\u30eb\u306f\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u306e\u8981\u7d20\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u304c\u3001\u4e00\u90e8\u306e\u8981\u7d20\u3067\u306f\u4e21\u65b9\u306e\u30ec\u30d9\u30eb\u306b\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u4ee5\u4e0b\u306e\u8868\u306f\u3053\u308c\u3092\u307e\u3068\u3081\u305f\u3082\u306e\u3067\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8981\u7d20"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u30ec\u30d9\u30eb"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30ec\u30d9\u30eb"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/reference/handler"},(0,l.kt)("strong",{parentName:"a"},"\u30cf\u30f3\u30c9\u30e9\u30fc"))),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("span",{class:"badge badge--success"},"\u6709\u52b9")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/reference/hooks"},(0,l.kt)("strong",{parentName:"a"},"\u30d5\u30c3\u30af"))),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("span",{class:"badge badge--success"},"\u6709\u52b9")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("span",{class:"badge badge--success"},"\u6709\u52b9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/reference/validation/zod"},(0,l.kt)("strong",{parentName:"a"},"\u30d0\u30ea\u30c7\u30fc\u30bf\u30fc"))),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("span",{class:"badge badge--warning"},"\u5236\u9650\u3064\u304d")," ","\u2013"," ",(0,l.kt)("inlineCode",{parentName:"td"},"body")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"td"},"headers"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"query")," \u306e\u307f"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("span",{class:"badge badge--warning"},"\u5236\u9650\u3064\u304d")," ","\u2013"," ",(0,l.kt)("inlineCode",{parentName:"td"},"params")," \u306e\u307f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/reference/responseSchema"},(0,l.kt)("strong",{parentName:"a"},"\u30b9\u30ad\u30fc\u30de"))),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("span",{class:"badge badge--success"},"\u6709\u52b9")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c")))),(0,l.kt)("h2",{id:"controller-level"},"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u30ec\u30d9\u30eb"),(0,l.kt)("p",null,"\u8981\u7d20\u304c\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u30ec\u30d9\u30eb\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u5834\u5408\u3001\u73fe\u5728\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u307f\u306b\u5f71\u97ff\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9a\u7fa9\u65b9\u6cd5")," : ",(0,l.kt)("inlineCode",{parentName:"p"},"controller.ts")," \u5185\u3067 ",(0,l.kt)("inlineCode",{parentName:"p"},"defineController()")," \u3092\u7528\u3044\u308b"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"defineHooks()")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"defineResponseSchema()")," \u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"frourio")," \u304a\u3088\u3073 ",(0,l.kt)("inlineCode",{parentName:"p"},"frourio-express")," \u30d0\u30fc\u30b8\u30e7\u30f3 ",(0,l.kt)("inlineCode",{parentName:"p"},"0.31.0")," \u4ee5\u964d\u3067\u975e\u63a8\u5968\u3068\u306a\u308a\u307e\u3057\u305f\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='controller.ts'",title:"'controller.ts'"},"import { defineController } from './$relay';\n\nexport default defineController(() => ({\n  get: () => ({ status: 200, body: 'Hello' }),\n  post: {\n    validators: {\n      query: z.object({ ... }),\n      body: z.object({ ... }),\n    },\n    schemas: {\n      response: { 201: { type: 'object', properties: { ... } } },\n    },\n    hooks: {\n      preValidation: [],\n      preHandler: (req, _, done) => { ...; done(); },\n    },\n    handler: ({ body }) => ({ status: 201, body: { ... } }),\n  },\n}));\n")),(0,l.kt)("h3",{id:"definecontroller"},"\u95a2\u6570 ",(0,l.kt)("inlineCode",{parentName:"h3"},"defineController()")),(0,l.kt)("h4",{id:"definecontoller-argument-type"},"\u5f15\u6570\u306e\u578b"),(0,l.kt)(o.Z,{groupId:"base-framework",defaultValue:"fastify",values:[{label:"Fastify",value:"fastify"},{label:"Express",value:"express"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"fastify",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"function ",(0,l.kt)("inlineCode",{parentName:"li"},"(fastify: FastifyInstance) => ServerMethods"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/TypeScript/#fastifyfastifyinstancerawserver-rawrequest-requestgeneric-logger"},(0,l.kt)("inlineCode",{parentName:"a"},"FastifyInstance"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ServerMethods")," : key \u304c ",(0,l.kt)("inlineCode",{parentName:"li"},"Methods")," \u3068\u7b49\u3057\u304f\u3001value \u304c ",(0,l.kt)("a",{parentName:"li",href:"#servermethodhandler"},(0,l.kt)("inlineCode",{parentName:"a"},"ServerMethodHandler"))," \u3067\u3042\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002"))))),(0,l.kt)(i.Z,{value:"express",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"function ",(0,l.kt)("inlineCode",{parentName:"li"},"(app: Express) => ServerMethods"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://expressjs.com/en/4x/api.html"},(0,l.kt)("inlineCode",{parentName:"a"},"Express"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ServerMethods")," : key \u304c ",(0,l.kt)("inlineCode",{parentName:"li"},"Methods")," \u3068\u7b49\u3057\u304f\u3001value \u304c ",(0,l.kt)("a",{parentName:"li",href:"#servermethodhandler"},(0,l.kt)("inlineCode",{parentName:"a"},"ServerMethodHandler"))," \u3067\u3042\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002")))))),(0,l.kt)("h4",{id:"definecontoller-return-type"},"\u623b\u308a\u5024\u306e\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 ",(0,l.kt)("inlineCode",{parentName:"li"},"ServerMethods"))),(0,l.kt)("h3",{id:"servermethodhandler"},"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 ",(0,l.kt)("inlineCode",{parentName:"h3"},"ServerMethodHandler")),(0,l.kt)("code",null,"{\n  validators?: ",(0,l.kt)("a",{href:"/docs/reference/validation/zod#controller-level"},"(\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u30ec\u30d9\u30eb \u30d0\u30ea\u30c7\u30fc\u30bf\u30fc)"),",\n  schemas?: { response?: { [(HTTP Status Code)]: ",(0,l.kt)("a",{href:"https://github.com/fastify/fast-json-stringify/blob/master/types/index.d.ts"},"Schema")," } },\n  hooks?: ",(0,l.kt)("a",{href:"/docs/reference/hooks#serverhooks"},"ServerHooks"),",\n  handler: ",(0,l.kt)("a",{href:"/docs/reference/handler#serverhandler"},"ServerHandler")," or ",(0,l.kt)("a",{href:"/docs/reference/handler#serverhandler"},"ServerHandler"),"Promise",",\n}"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"validators")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"schemas"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"hooks")," \u306f\u7701\u7565\u3067\u304d\u307e\u3059\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"handler")," \u306e\u307f\u3092\u5b9a\u7fa9\u3059\u308b\u5834\u5408\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4ee3\u308f\u308a\u306b ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/handler#serverhandler"},(0,l.kt)("inlineCode",{parentName:"a"},"ServerHandler"))," \u307e\u305f\u306f ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"/docs/reference/handler#serverhandler"},"ServerHandler"),"Promise")," \u3092\u76f4\u63a5\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"directory-level-hooks"},"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30ec\u30d9\u30eb \u30d5\u30c3\u30af"),(0,l.kt)("p",null,"\u8981\u7d20\u304c\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30ec\u30d9\u30eb\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u5834\u5408\u3001\u73fe\u5728\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3068",(0,l.kt)("strong",{parentName:"p"},"\u305d\u306e\u4e0b\u306b\u3042\u308b\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u5168\u3066"),"\u306b\u5f71\u97ff\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9a\u7fa9\u65b9\u6cd5")," : ",(0,l.kt)("inlineCode",{parentName:"p"},"hooks.ts")," \u3067 ",(0,l.kt)("inlineCode",{parentName:"p"},"defineHooks()")," \u3092\u7528\u3044\u308b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='hooks.ts'",title:"'hooks.ts'"},"import { defineHooks } from './$relay';\n\nexport default defineHooks(() => ({\n  onRequest: (req, _, done) => {\n    console.log(req.url);\n    done();\n  },\n}));\n")),(0,l.kt)("h3",{id:"definehooks"},"\u95a2\u6570 ",(0,l.kt)("inlineCode",{parentName:"h3"},"defineHooks()")),(0,l.kt)(o.Z,{groupId:"base-framework",defaultValue:"fastify",values:[{label:"Fastify",value:"fastify"},{label:"Express",value:"express"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"fastify",mdxType:"TabItem"},(0,l.kt)("h5",{id:"definehooks-argument-type"},"\u5f15\u6570\u306e\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"function ",(0,l.kt)("inlineCode",{parentName:"li"},"(fastify: FastifyInstance) => ServerHooks"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Hooks")," : \u30d5\u30c3\u30af\u306e\u540d\u524d\u3092 key \u3068\u3057\u3001\u30cf\u30f3\u30c9\u30e9\u95a2\u6570\uff08\u307e\u305f\u306f\u305d\u306e\u914d\u5217\uff09\u3092 value \u3068\u3059\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")))),(0,l.kt)("h5",{id:"\u623b\u308a\u5024\u306e\u578b"},"\u623b\u308a\u5024\u306e\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ServerHooks")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"))),(0,l.kt)(i.Z,{value:"express",mdxType:"TabItem"},(0,l.kt)("h4",{id:"definehooks-argument-type"},"\u5f15\u6570\u306e\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"function ",(0,l.kt)("inlineCode",{parentName:"li"},"(app: Express) => ServerHooks"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Hooks")," : \u30d5\u30c3\u30af\u306e\u540d\u524d\u3092 key \u3068\u3057\u3001\u30cf\u30f3\u30c9\u30e9\u95a2\u6570\uff08\u307e\u305f\u306f\u305d\u306e\u914d\u5217\uff09\u3092 value \u3068\u3059\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")))))),(0,l.kt)("h2",{id:"directory-level-validators"},"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30ec\u30d9\u30eb \u30d0\u30ea\u30c7\u30fc\u30bf\u30fc"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9a\u7fa9\u65b9\u6cd5")," : ",(0,l.kt)("inlineCode",{parentName:"p"},"validators.ts")," \u3067 ",(0,l.kt)("inlineCode",{parentName:"p"},"defineValidators()")," \u3092\u7528\u3044\u308b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='validators.ts'",title:"'validators.ts'"},"import { defineValidators } from './$relay';\nimport { z } from 'zod';\n\nexport default defineValidators(() => ({\n  params: z.object({ id: z.string() }),\n}));\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"defineValidators()")," \u306b\u3064\u3044\u3066\u306e\u8a73\u3057\u3044\u60c5\u5831\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/validation/zod#definevalidators"},"Zod \u30da\u30fc\u30b8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}k.isMDXComponent=!0}}]);