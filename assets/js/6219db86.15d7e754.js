"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[9529],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),o=n(6010),i=n(2389),l=n(7392),u=n(7094),s=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,m=e.defaultValue,f=e.values,k=e.groupId,h=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,u.U)(),C=g.tabGroupChoices,w=g.setTabGroupChoices,x=(0,a.useState)(b),E=x[0],O=x[1],T=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var R=C[k];null!=R&&R!==E&&y.some((function(e){return e.value===R}))&&O(R)}var P=function(e){var t=e.currentTarget,n=T.indexOf(t),r=y[n].value;r!==E&&(j(t),O(r),null!=k&&w(k,String(r)))},q=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=T.indexOf(e.currentTarget)+1;n=null!=(r=T[a])?r:T[0];break;case"ArrowLeft":var o,i=T.indexOf(e.currentTarget)-1;n=null!=(o=T[i])?o:T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},h)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return T.push(e)},onKeyDown:q,onFocus:P,onClick:P},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},447:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(5488),l=n(5162),u=["components"],s={id:"hooks",title:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u3068\u30d5\u30c3\u30af"},p=void 0,c={unversionedId:"reference/hooks",id:"reference/hooks",title:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u3068\u30d5\u30c3\u30af",description:"Frourio \u306b\u304a\u3051\u308b\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb",source:"@site/docs/reference/hooks.mdx",sourceDirName:"reference",slug:"/reference/hooks",permalink:"/docs/reference/hooks",draft:!1,editUrl:"https://github.com/frouriojs/ja.frourio.com/edit/master/docs/reference/hooks.mdx",tags:[],version:"current",frontMatter:{id:"hooks",title:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u3068\u30d5\u30c3\u30af"},sidebar:"docs",previous:{title:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc",permalink:"/docs/reference/controller"},next:{title:"AdditionalRequest",permalink:"/docs/reference/additionalRequest"}},d={},m=[{value:"Frourio \u306b\u304a\u3051\u308b\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb",id:"lifecycle-in-frourio",level:2},{value:"2 \u7a2e\u985e\u306e\u30d5\u30c3\u30af",id:"two-types-of-hooks",level:2},{value:"\u30d5\u30c3\u30af\u3092\u5b9a\u7fa9\u3059\u308b",id:"define-hooks",level:2},{value:"<code>defineHooks</code> \u95a2\u6570",id:"function-definehooks",level:3},{value:"\u5f15\u6570\u306e\u578b",id:"definehooks-argument-type",level:4},{value:"\u30d5\u30c3\u30af\u30cf\u30f3\u30c9\u30e9",id:"hooks-handler",level:3},{value:"\u5f15\u6570\u306e\u578b",id:"hooks-handler-argument-type",level:4},{value:"\u5f15\u6570\u306e\u578b",id:"definehooks-argument-type",level:4},{value:"\u30d5\u30c3\u30af\u30cf\u30f3\u30c9\u30e9",id:"hooks-handler",level:3},{value:"\u5f15\u6570\u306e\u578b",id:"hooks-handler-argument-type",level:4}],f={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"lifecycle-in-frourio"},"Frourio \u306b\u304a\u3051\u308b\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb"),(0,o.kt)("p",null,"Frourio \u3068 frourio-express \u306e\u3069\u3061\u3089\u3082\u3001fastify \u306b\u4f3c\u305f\u5f62\u5f0f\u306e\u30d5\u30c3\u30af\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u5168\u4f53\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306f\u4e0b\u56f3\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u3066\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"onRequest"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"preParsing"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"preValidation"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"preHandler")," \u306a\u3069\u306e\u30d5\u30c3\u30af\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"/img/lifecycle.svg",alt:"Frourio \u306b\u304a\u3051\u308b\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb",style:{maxWidth:"300px"}}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Ref. ",(0,o.kt)("a",{parentName:"em",href:"https://www.fastify.io/docs/latest/Reference/Lifecycle/"},"Lifecycle - Fastify")))),(0,o.kt)("h2",{id:"two-types-of-hooks"},"2 \u7a2e\u985e\u306e\u30d5\u30c3\u30af"),(0,o.kt)("p",null,"Frourio \u306f\u3001",(0,o.kt)("strong",{parentName:"p"},"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u30ec\u30d9\u30eb \u30d5\u30c3\u30af")," \u3068 ",(0,o.kt)("strong",{parentName:"p"},"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30ec\u30d9\u30eb \u30d5\u30c3\u30af")," \u306e 2 \u7a2e\u985e\u306e\u30d5\u30c3\u30af\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u30ec\u30d9\u30eb \u30d5\u30c3\u30af"),": \u73fe\u5728\u306e\u968e\u5c64\u3067\u306e\u307f\u547c\u3070\u308c\u307e\u3059"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30ec\u30d9\u30eb \u30d5\u30c3\u30af"),": \u73fe\u5728\u3068 ",(0,o.kt)("em",{parentName:"li"},"\u914d\u4e0b\u306e")," \u968e\u5c64\u3067\u547c\u3070\u308c\u307e\u3059")),(0,o.kt)("p",null,"\u3082\u3057\u4e21\u65b9\u306e\u7a2e\u985e\u306e\u30d5\u30c3\u30af\u304c\u540c\u6642\u306b\u547c\u3070\u308c\u308b\u5834\u5408\u3001",(0,o.kt)("strong",{parentName:"p"},"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30ec\u30d9\u30eb \u30d5\u30c3\u30af")," \u304c\u5148\u306b\u547c\u3070\u308c\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"define-hooks"},"\u30d5\u30c3\u30af\u3092\u5b9a\u7fa9\u3059\u308b"),(0,o.kt)("p",null,"\u30d5\u30c3\u30af\u3092\u5b9a\u7fa9\u3059\u308b\u306b\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"./$relay.ts")," \u3067\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3055\u308c\u305f ",(0,o.kt)("inlineCode",{parentName:"p"},"defineHooks")," \u95a2\u6570\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u30ec\u30d9\u30eb \u30d5\u30c3\u30af"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"controller.ts")," \u3067\u5b9a\u7fa9\u3057\u307e\u3059"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30ec\u30d9\u30eb \u30d5\u30c3\u30af"),": \u76ee\u7684\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e ",(0,o.kt)("inlineCode",{parentName:"li"},"hooks.ts")," \u3067\u5b9a\u7fa9\u3057\u307e\u3059")),(0,o.kt)("h3",{id:"function-definehooks"},(0,o.kt)("inlineCode",{parentName:"h3"},"defineHooks")," \u95a2\u6570"),(0,o.kt)(i.Z,{groupId:"base-framework",defaultValue:"fastify",values:[{label:"Fastify",value:"fastify"},{label:"Express",value:"express"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"fastify",mdxType:"TabItem"},(0,o.kt)("h4",{id:"definehooks-argument-type"},"\u5f15\u6570\u306e\u578b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"function ",(0,o.kt)("inlineCode",{parentName:"li"},"(fastify: FastifyInstance) => Hooks"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Hooks")," : \u30d5\u30c3\u30af\u540d\u3092 key \u3068\u3057\u3001\u30cf\u30f3\u30c9\u30e9\u95a2\u6570\uff08\u307e\u305f\u306f\u305d\u306e\u914d\u5217\uff09\u3092 value \u3068\u3059\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")))),(0,o.kt)("h3",{id:"hooks-handler"},"\u30d5\u30c3\u30af\u30cf\u30f3\u30c9\u30e9"),(0,o.kt)("h4",{id:"hooks-handler-argument-type"},"\u5f15\u6570\u306e\u578b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"request")," : ",(0,o.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/TypeScript/#request"},(0,o.kt)("inlineCode",{parentName:"a"},"FastifyRequest"))," & ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/additionalRequest"},(0,o.kt)("inlineCode",{parentName:"a"},"AdditinalRequest"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reply")," : ",(0,o.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/TypeScript/#reply"},(0,o.kt)("inlineCode",{parentName:"a"},"FastifyReply"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"done")," : function ",(0,o.kt)("inlineCode",{parentName:"li"},"<TError extends Error = FastifyError>(err?: TError) => void"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"done")," \u306f\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u3092\u7d9a\u884c\u3059\u308b\u95a2\u6570\u3067\u3059\u3002"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"async"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"await")," \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3068\u304d\u3084 ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," \u3092\u8fd4\u3057\u3066\u3044\u308b\u3068\u304d\u306f ",(0,o.kt)("inlineCode",{parentName:"p"},"done")," \u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002\u3053\u306e\u3088\u3046\u306a\u72b6\u6cc1\u3067 done \u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u547c\u3073\u51fa\u3059\u3068\u3001\u30cf\u30f3\u30c9\u30e9\u3092\u91cd\u8907\u3057\u3066\u547c\u3073\u51fa\u3059\u306a\u3069\u3001\u4e88\u671f\u3057\u306a\u3044\u52d5\u4f5c\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"ref. ",(0,o.kt)("a",{parentName:"em",href:"https://www.fastify.io/docs/latest/Reference/Hooks/"},"Hooks - Fastify"))))),(0,o.kt)(l.Z,{value:"express",mdxType:"TabItem"},(0,o.kt)("h4",{id:"definehooks-argument-type"},"\u5f15\u6570\u306e\u578b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"function ",(0,o.kt)("inlineCode",{parentName:"li"},"(app: Express) => Hooks"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Hooks")," : \u30d5\u30c3\u30af\u540d\u3092 key \u3068\u3057\u3001\u30cf\u30f3\u30c9\u30e9\u95a2\u6570\uff08\u307e\u305f\u306f\u305d\u306e\u914d\u5217\uff09\u3092 value \u3068\u3059\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")))),(0,o.kt)("h3",{id:"hooks-handler"},"\u30d5\u30c3\u30af\u30cf\u30f3\u30c9\u30e9"),(0,o.kt)("h4",{id:"hooks-handler-argument-type"},"\u5f15\u6570\u306e\u578b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"req")," : ",(0,o.kt)("a",{parentName:"li",href:"https://expressjs.com/ja/api.html#req"},(0,o.kt)("inlineCode",{parentName:"a"},"Request"))," & ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/additionalRequest"},(0,o.kt)("inlineCode",{parentName:"a"},"AdditinalRequest"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"res")," : ",(0,o.kt)("a",{parentName:"li",href:"http://expressjs.com/ja/api.html#res"},(0,o.kt)("inlineCode",{parentName:"a"},"Response"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"next")," : function ",(0,o.kt)("inlineCode",{parentName:"li"},"(err?: any) => void"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"next")," \u306f\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u3092\u7d9a\u884c\u3059\u308b\u95a2\u6570\u3067\u3059\u3002\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"async"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"await"),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3068\u304d\u3084",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," \u3092\u8fd4\u3057\u3066\u3044\u308b\u3068\u304d\u3082\u542b\u307f\u307e\u3059\u3002\uff09"))))}k.isMDXComponent=!0}}]);