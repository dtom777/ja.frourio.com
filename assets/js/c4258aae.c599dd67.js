"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[8564],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(3117),a=n(7294),s=n(2389),i=n(4726),o=n(6010),l="tabItem_LplD";function u(e){var t,n,s,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(s=k[0])?void 0:s.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),h=g.tabGroupChoices,T=g.setTabGroupChoices,x=(0,a.useState)(y),N=x[0],w=x[1],O=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=h[m];null!=I&&I!==N&&v.some((function(e){return e.value===I}))&&w(I)}var P=function(e){var t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==N&&(E(t),w(r),null!=m&&T(m,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var t=e.value,n=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:P,onClick:P},s,{className:(0,o.Z)("tabs__item",l,null==s?void 0:s.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(k.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,s.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},1316:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var r=n(3117),a=n(102),s=(n(7294),n(3905)),i=n(9877),o=n(8215),l=["components"],u={id:"get-task-by-id",title:"GET - /tasks/{taskId}"},p=void 0,c={unversionedId:"controller/get-task-by-id",id:"controller/get-task-by-id",title:"GET - /tasks/{taskId}",description:"<Tabs",source:"@site/docs/controller/get-task-by-id.mdx",sourceDirName:"controller",slug:"/controller/get-task-by-id",permalink:"/docs/controller/get-task-by-id",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/controller/get-task-by-id.mdx",tags:[],version:"current",frontMatter:{id:"get-task-by-id",title:"GET - /tasks/{taskId}"},sidebar:"someSidebar",previous:{title:"GET - /tasks?limit={number}",permalink:"/docs/controller/get-tasks"},next:{title:"POST - /tasks",permalink:"/docs/controller/post-tasks"}},d=[],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("br",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/types/index.ts"',title:'"server/types/index.ts"'},"export type Task = {\n  id: number\n  label: string\n  done: boolean\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/tasks/_taskId@number/index.ts"',title:'"server/api/tasks/_taskId@number/index.ts"'},"import { Task } from '$/types' // path alias $ -> server\n\nexport type Methods = {\n  get: {\n    resBody: Task\n  }\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/tasks/_taskId@number/controller.ts"',title:'"server/api/tasks/_taskId@number/controller.ts"'},"import { defineController } from './$relay' // '$relay.ts' is automatically generated by frourio\nimport { findTask } from '$/service/tasks'\n\nexport default defineController(() => ({\n  get: async ({ params }) => {\n    const task = await findTask(params.taskId)\n\n    return task ? { status: 200, body: task } : { status: 404 }\n  }\n}))\n")),(0,s.kt)(i.Z,{defaultValue:"prisma",values:[{label:"Prisma",value:"prisma"},{label:"TypeORM",value:"typeorm"},{label:"None",value:"none"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"prisma",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema"},"Prisma schema")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="server/prisma/schema.prisma"',title:'"server/prisma/schema.prisma"'},"model Task {\n  id    Int     @id @default(autoincrement())\n  label String\n  done  Boolean @default(false)\n}\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud#findone"},"Prisma#findOne")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/service/tasks.ts"',title:'"server/service/tasks.ts"'},"import { PrismaClient } from '@prisma/client'\nimport { Task } from '$prisma/client' // path alias $prisma -> ./node_modules/.prisma/*\n\nconst prisma = new PrismaClient()\n\nexport const findTask = (id: Task['id']) => prisma.task.findOne({ where: { id }})\n"))),(0,s.kt)(o.Z,{value:"typeorm",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://typeorm.io/#/entities"},"TypeORM entities")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/entity/Task.ts"',title:'"server/entity/Task.ts"'},"import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'\n\n@Entity()\nexport class Task {\n  @PrimaryGeneratedColumn()\n  id: number\n\n  @Column({ length: 100 })\n  label: string\n\n  @Column({ default: false })\n  done: boolean\n}\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://typeorm.io/#/find-options"},"TypeORM#findOne")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/service/tasks.ts"',title:'"server/service/tasks.ts"'},"import { getRepository } from 'typeorm'\nimport { Task } from '$/entity/Task'\n\nconst taskRepository = () => getRepository(Task)\n\nexport const findTask = (id: Task['id']) => taskRepository().findOne(id)\n"))),(0,s.kt)(o.Z,{value:"none",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/service/tasks.ts"',title:'"server/service/tasks.ts"'},"import fs from 'fs'\nimport { Task } from '$/types'\n\ntype DB = {\n  nextId: number\n  tasks: Task[]\n}\n\nconst dbPath = 'database.json'\n\nconst readDB = async (): Promise<DB> =>\n  JSON.parse(await fs.promises.readFile(dbPath, 'utf8'))\n\nif (!fs.existsSync(dbPath)) {\n  fs.writeFileSync(dbPath, JSON.stringify({ nextId: 0, tasks: [] }), 'utf8')\n}\n\nexport const findTask = async (id: Task['id']) => (await readDB()).tasks.find(task => task.id === id)\n")))),(0,s.kt)(i.Z,{defaultValue:"next",values:[{label:"Next.js",value:"next"},{label:"Nuxt.js",value:"nuxt"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"next",mdxType:"TabItem"},(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/aspida/aspida"},"aspida")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/aspida/aspida/tree/master/packages/aspida-swr"},"@aspida/swr")," for the frontend HTTP client.",(0,s.kt)("br",{parentName:"p"}),"\n","(Frourio and aspida are maintained by the same developer)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="pages/index.tsx"',title:'"pages/index.tsx"'},"import useAspidaSWR from '@aspida/swr'\nimport { apiClient } from '~/utils/apiClient'\n\nconst taskId = 1\nconst { data, error, mutate } = useAspidaSWR(apiClient.tasks._taskId(taskId))\n"))),(0,s.kt)(o.Z,{value:"nuxt",mdxType:"TabItem"},(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/aspida/aspida"},"aspida")," for the frontend HTTP client.",(0,s.kt)("br",{parentName:"p"}),"\n","(Frourio and aspida are maintained by the same developer)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="pages/index.vue"',title:'"pages/index.vue"'},"import Vue from 'vue'\n\nexport default Vue.extend({\n  async fetch() {\n    const taskId = 1\n    this.task = await this.$api.tasks._taskId(taskId).$get()\n  },\n})\n")))))}f.isMDXComponent=!0}}]);