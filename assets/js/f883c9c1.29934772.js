"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[6459],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(3117),a=n(7294),s=n(2389),i=n(4726),l=n(6010),o="tabItem_LplD";function u(e){var t,n,s,u=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(s=v[0])?void 0:s.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),h=g.tabGroupChoices,T=g.setTabGroupChoices,x=(0,a.useState)(b),N=x[0],w=x[1],O=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var P=h[d];null!=P&&P!==N&&k.some((function(e){return e.value===P}))&&w(P)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),r=k[n].value;r!==N&&(E(t),w(r),null!=d&&T(d,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},k.map((function(e){var t=e.value,n=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:C,onClick:C},s,{className:(0,l.Z)("tabs__item",o,null==s?void 0:s.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,s.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},983:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var r=n(3117),a=n(102),s=(n(7294),n(3905)),i=n(9877),l=n(8215),o=["components"],u={id:"get-tasks",title:"GET - /tasks?limit={number}"},p=void 0,c={unversionedId:"controller/get-tasks",id:"controller/get-tasks",title:"GET - /tasks?limit={number}",description:"<Tabs",source:"@site/docs/controller/get-tasks.mdx",sourceDirName:"controller",slug:"/controller/get-tasks",permalink:"/docs/controller/get-tasks",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/controller/get-tasks.mdx",tags:[],version:"current",frontMatter:{id:"get-tasks",title:"GET - /tasks?limit={number}"},sidebar:"someSidebar",previous:{title:"Create controllers",permalink:"/docs/controller/create-controller"},next:{title:"GET - /tasks/{taskId}",permalink:"/docs/controller/get-task-by-id"}},m=[],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("br",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/types/index.ts"',title:'"server/types/index.ts"'},"export type Task = {\n  id: number\n  label: string\n  done: boolean\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/tasks/index.ts"',title:'"server/api/tasks/index.ts"'},"import { Task } from '$/types' // path alias $ -> server\n\nexport type Methods = {\n  get: {\n    query?: {\n      limit: number\n    }\n\n    resBody: Task[]\n  }\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/tasks/controller.ts"',title:'"server/api/tasks/controller.ts"'},"import { defineController } from './$relay' // '$relay.ts' is automatically generated by frourio\nimport { getTasks } from '$/service/tasks'\n\nexport default defineController(() => ({\n  get: async ({ query }) => ({\n    status: 200,\n    body: (await getTasks()).slice(0, query?.limit)\n  })\n}))\n")),(0,s.kt)(i.Z,{defaultValue:"prisma",values:[{label:"Prisma",value:"prisma"},{label:"TypeORM",value:"typeorm"},{label:"None",value:"none"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"prisma",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema"},"Prisma schema")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="server/prisma/schema.prisma"',title:'"server/prisma/schema.prisma"'},"model Task {\n  id    Int     @id @default(autoincrement())\n  label String\n  done  Boolean @default(false)\n}\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud#findmany"},"Prisma#findMany")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/service/tasks.ts"',title:'"server/service/tasks.ts"'},"import { PrismaClient } from '@prisma/client'\nimport { Task } from '$prisma/client' // path alias $prisma -> ./node_modules/.prisma/*\n\nconst prisma = new PrismaClient()\n\nexport const getTasks = async (limit?: number) =>\n  (await prisma.task.findMany()).slice(0, limit)\n"))),(0,s.kt)(l.Z,{value:"typeorm",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://typeorm.io/#/entities"},"TypeORM entities")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/entity/Task.ts"',title:'"server/entity/Task.ts"'},"import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'\n\n@Entity()\nexport class Task {\n  @PrimaryGeneratedColumn()\n  id: number\n\n  @Column({ length: 100 })\n  label: string\n\n  @Column({ default: false })\n  done: boolean\n}\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://typeorm.io/#/find-options"},"TypeORM#find")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/service/tasks.ts"',title:'"server/service/tasks.ts"'},"import { getRepository } from 'typeorm'\nimport { Task } from '$/entity/Task'\n\nconst taskRepository = () => getRepository(Task)\n\nexport const getTasks = async (limit?: number) =>\n  (await taskRepository().find()).slice(0, limit)\n"))),(0,s.kt)(l.Z,{value:"none",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/service/tasks.ts"',title:'"server/service/tasks.ts"'},"import fs from 'fs'\nimport { Task } from '$/types'\n\ntype DB = {\n  nextId: number\n  tasks: Task[]\n}\n\nconst dbPath = 'database.json'\n\nconst readDB = async (): Promise<DB> =>\n  JSON.parse(await fs.promises.readFile(dbPath, 'utf8'))\n\nif (!fs.existsSync(dbPath)) {\n  fs.writeFileSync(dbPath, JSON.stringify({ nextId: 0, tasks: [] }), 'utf8')\n}\n\nexport const getTasks = async (limit?: number) => (await readDB()).tasks.slice(0, limit)\n")))),(0,s.kt)(i.Z,{defaultValue:"next",values:[{label:"Next.js",value:"next"},{label:"Nuxt.js",value:"nuxt"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"next",mdxType:"TabItem"},(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/aspida/aspida"},"aspida")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/aspida/aspida/tree/master/packages/aspida-swr"},"@aspida/swr")," for the frontend HTTP client.",(0,s.kt)("br",{parentName:"p"}),"\n","(Frourio and aspida are maintained by the same developer)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="pages/index.tsx"',title:'"pages/index.tsx"'},"import useAspidaSWR from '@aspida/swr'\nimport { apiClient } from '~/utils/apiClient'\n\nconst { data, error, mutate } = useAspidaSWR(apiClient.tasks, { query: { limit: 10 } })\n"))),(0,s.kt)(l.Z,{value:"nuxt",mdxType:"TabItem"},(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/aspida/aspida"},"aspida")," for the frontend HTTP client.",(0,s.kt)("br",{parentName:"p"}),"\n","(Frourio and aspida are maintained by the same developer)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="pages/index.vue"',title:'"pages/index.vue"'},"import Vue from 'vue'\n\nexport default Vue.extend({\n  async fetch() {\n    this.tasks = await this.$api.tasks.$get({ query: { limit: 10 } })\n  },\n})\n")))))}f.isMDXComponent=!0}}]);