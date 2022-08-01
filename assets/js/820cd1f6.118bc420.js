"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[10],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=o(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,p(p({ref:t},u),{},{components:n})):a.createElement(g,p({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var o=2;o<i;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9686:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),p=n(2719),l=["components"],s={id:"with-nextjs",title:"Pathpida with Next.js"},o=void 0,u={unversionedId:"guide/pathpida/with-nextjs",id:"guide/pathpida/with-nextjs",title:"Pathpida with Next.js",description:"TypeScript friendly internal link client for Next.js.",source:"@site/docs/guide/pathpida/with-nextjs.mdx",sourceDirName:"guide/pathpida",slug:"/guide/pathpida/with-nextjs",permalink:"/docs/guide/pathpida/with-nextjs",draft:!1,editUrl:"https://github.com/frouriojs/frourio.com/edit/master/docs/guide/pathpida/with-nextjs.mdx",tags:[],version:"current",frontMatter:{id:"with-nextjs",title:"Pathpida with Next.js"},sidebar:"docs",previous:{title:"Dependency Injection",permalink:"/docs/guide/dependency-injection"},next:{title:"Pathpida with Nuxt.js",permalink:"/docs/guide/pathpida/with-nuxtjs"}},c={},d=[{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Define query",id:"define-query",level:2},{value:"Generate static files path",id:"static-path",level:2}],m={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("img",{src:"https://aspida.github.io/pathpida/logos/png/logo.png",alt:"pathpida",title:"pathpida"}),(0,i.kt)("p",{align:"center"},"TypeScript friendly internal link client for Next.js."),(0,i.kt)("div",{align:"center"},(0,i.kt)(p.Z,{href:"https://github.com/aspida/pathpida","data-icon":"octicon-star","data-size":"large","data-show-count":!0,"aria-label":"Star aspida/pathpida on GitHub",mdxType:"GitHubButton"},"Star")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type safety"),". Automatically generate type definition files for manipulating internal links in Next.js."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Zero configration"),". No configuration required, can be used immediately after installation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Zero runtime"),". Lightweight because runtime code is not included in the bundle.")),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install pathpida --save-dev\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ yarn add pathpida --dev\n")))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"package.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev:pathpida": "pathpida --watch",\n    "build:client": "pathpida && aspida && next build",\n    "build:types": "pathpida && aspida && npm run build:frourio --prefix server"\n  }\n}\n')),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pages/index.tsx\npages/post/create.tsx\npages/post/[pid].tsx\npages/post/[...slug].tsx\n\nutils/$path.ts // Generated automatically by pathpida\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pages/index.tsx")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import Link from 'next/link'\nimport { pagesPath } from '~/utils/$path'\n\nconsole.log(pagesPath.post.create.$url()) // { pathname: '/post/create' }\nconsole.log(pagesPath.post._pid(1).$url()) // { pathname: '/post/[pid]', query: { pid: 1 }}\nconsole.log(pagesPath.post._slug(['a', 'b', 'c']).$url()) // { pathname: '/post//[...slug]', query: { slug: ['a', 'b', 'c'] }}\n\nexport default () => {\n  const onclick = useCallback(() => {\n    router.push(pagesPath.post._pid(1).$url())\n  }, [])\n\n  return (\n    <>\n      <Link href={pagesPath.post._slug(['a', 'b', 'c']).$url()} />\n      <div onclick={onclick} />\n    </>\n  )\n}\n")),(0,i.kt)("h2",{id:"define-query"},"Define query"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pages/post/create.tsx")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"export type Query = {\n  userId: number\n  name?: string\n}\n\nexport default () => <div />\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pages/post/[pid].tsx")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"export type OptionalQuery = {\n  limit: number\n  label?: string\n}\n\nexport default () => <div />\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pages/index.tsx")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import Link from 'next/link'\nimport { pagesPath } from '~/utils/$path'\n\nconsole.log(pagesPath.post.create.$url({ query: { userId: 1 } })) // { pathname: '/post/create', query: { userId: 1 }}\nconsole.log(pagesPath.post.create.$url()) // type error\nconsole.log(pagesPath.post._pid(1).$url()) // { pathname: '/post/[pid]', query: { pid: 1 }}\nconsole.log(pagesPath.post._pid(1).$url({ query: { limit: 10 }, hash: 'sample' })) // { pathname: '/post/[pid]', query: { pid: 1, limit: 10 }, hash: 'sample' }\n\nexport default () => {\n  const onclick = useCallback(() => {\n    router.push(pagesPath.post._pid(1).$url())\n  }, [])\n\n  return (\n    <>\n      <Link href={pagesPath.post._slug(['a', 'b', 'c']).$url()} />\n      <div onclick={onclick} />\n    </>\n  )\n}\n")),(0,i.kt)("h2",{id:"static-path"},"Generate static files path"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"package.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev:pathpida": "pathpida --enableStatic --watch",\n    "build:client": "pathpida --enableStatic && aspida && next build",\n    "build:types": "pathpida --enableStatic && aspida && npm run build:frourio --prefix server"\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pages/index.tsx\npages/post/create.tsx\npages/post/[pid].tsx\npages/post/[...slug].tsx\n\npublic/aa.json\npublic/bb/cc.png\n\nutils/$path.ts // Generated automatically by pathpida\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pages/index.tsx")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import Link from 'next/link'\nimport { pagesPath, staticPath } from '~/utils/$path'\n\nconsole.log(staticPath.aa_json) // /aa.json\n\nexport default () => {\n  return (\n    <>\n      <Link href={pagesPath.post._slug(['a', 'b', 'c']).$url()} />\n      <img src={staticPath.bb.cc_png} />\n    </>\n  )\n}\n")))}g.isMDXComponent=!0}}]);