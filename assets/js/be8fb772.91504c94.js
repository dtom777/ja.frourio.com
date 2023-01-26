"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[1603],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),l=n(6010),i=n(2389),o=n(7392),s=n(7094),u=n(2466),p="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,n,i=e.lazy,c=e.block,d=e.defaultValue,k=e.values,v=e.groupId,N=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,s.U)(),_=h.tabGroupChoices,P=h.setTabGroupChoices,A=(0,a.useState)(y),E=A[0],S=A[1],I=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var T=_[v];null!=T&&T!==E&&b.some((function(e){return e.value===T}))&&S(T)}var w=function(e){var t=e.currentTarget,n=I.indexOf(t),r=b[n].value;r!==E&&(O(t),S(r),null!=v&&P(v,String(r)))},D=function(e){var t,n=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":var r,a=I.indexOf(e.currentTarget)+1;n=null!=(r=I[a])?r:I[0];break;case"ArrowLeft":var l,i=I.indexOf(e.currentTarget)-1;n=null!=(l=I[i])?l:I[I.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},N)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return I.push(e)},onKeyDown:D,onClick:w},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,i.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},7569:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=n(5488),o=n(5162),s=["components"],u={id:"server",title:"API \u30b5\u30fc\u30d0\u30fc\u30db\u30b9\u30c6\u30a3\u30f3\u30b0"},p=void 0,m={unversionedId:"guide/deployments/server",id:"guide/deployments/server",title:"API \u30b5\u30fc\u30d0\u30fc\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",description:"Frourio \u3067\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u30fc\u3092\u5225\u3005\u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/guide/deployments/server.mdx",sourceDirName:"guide/deployments",slug:"/guide/deployments/server",permalink:"/docs/guide/deployments/server",draft:!1,editUrl:"https://github.com/frouriojs/ja.frourio.com/edit/master/docs/guide/deployments/server.mdx",tags:[],version:"current",frontMatter:{id:"server",title:"API \u30b5\u30fc\u30d0\u30fc\u30db\u30b9\u30c6\u30a3\u30f3\u30b0"},sidebar:"docs",previous:{title:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u9759\u7684\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",permalink:"/docs/guide/deployments/client"}},c={},d=[{value:"Dockerfile",id:"dockerfile",level:2},{value:"\u5c02\u7528\u30b5\u30fc\u30d0\u30fc (with PM2)",id:"dedicated-server",level:2},{value:"Step 1. GitHub Actions Workflow \u3092\u8ffd\u52a0",id:"dedicated-server-1",level:3},{value:"Step 2. \u30ea\u30dd\u30b8\u30c8\u30ea\u306b Secrets \u3092\u8ffd\u52a0",id:"dedicated-server-2",level:3},{value:"AWS Lambda\uff08\u9759\u7684\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\uff09",id:"aws-lambda",level:2}],k={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Frourio \u3067\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u30fc\u3092\u5225\u3005\u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)(i.Z,{defaultValue:"npm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("p",null,"API \u30b5\u30fc\u30d0\u30fc\u306f\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u8d77\u52d5\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install --prefix server\nnpm run build:server\nnpm run start:server\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("p",null,"API \u30b5\u30fc\u30d0\u30fc\u306f\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u8d77\u52d5\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn install --cwd server\nyarn run build:server\nyarn run start:server\n")))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306f\u3044\u304f\u3064\u304b\u306e\u4f8b\u3067\u3059\u3002\n\u3082\u3061\u308d\u3093\u3001\u3053\u3053\u306b\u66f8\u304b\u308c\u3066\u3044\u306a\u3044\u65b9\u6cd5\u3067\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u306e\u3067\u3001\u8a66\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\uff01"),(0,l.kt)("h2",{id:"dockerfile"},"Dockerfile"),(0,l.kt)(i.Z,{defaultValue:"npm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-docker",metastring:'title="Dockerfile"',title:'"Dockerfile"'},"FROM node:15\n\nRUN mkdir /src\nRUN mkdir /src/server\n\nWORKDIR /src\n\nCOPY /server/package.json /server/package-lock.json ./server/\nRUN npm install --prefix server\n\nCOPY . .\n\nEXPOSE 8080\nCMD npm run build:server && npm run start:server\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-docker",metastring:'title="Dockerfile"',title:'"Dockerfile"'},"FROM node:15\n\nRUN mkdir /src\nRUN mkdir /src/server\n\nWORKDIR /src\n\nCOPY /server/package.json /server/yarn.lock ./server/\nRUN yarn install --cwd server\n\nCOPY . .\n\nEXPOSE 8080\nCMD yarn run build:server && yarn run start:server\n")))),(0,l.kt)("h2",{id:"dedicated-server"},"\u5c02\u7528\u30b5\u30fc\u30d0\u30fc (with PM2)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"question in create-frourio-app"),(0,l.kt)("th",{parentName:"tr",align:"center"},"choice"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"Daemon process manager")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"PM2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"Serverless service")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"Dedicated server"))))),(0,l.kt)("h3",{id:"dedicated-server-1"},"Step 1. GitHub Actions Workflow \u3092\u8ffd\u52a0"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u6642\u306b ",(0,l.kt)("strong",{parentName:"p"},"Serverless service")," \u3068\u3057\u3066 ",(0,l.kt)("strong",{parentName:"p"},"Dedicated server")," \u3092\u9078\u629e\u3057\u3066\u3044\u305f\u5834\u5408\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"#step-2-add-secrets-to-repository"},"Step 2 \u306b\u9032\u3093\u3067"),"\u304f\u3060\u3055\u3044\uff01")),(0,l.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u6642\u306b ",(0,l.kt)("strong",{parentName:"p"},"Dedicated server")," \u3092\u9078\u629e\u3057\u3066\u3044\u306a\u304b\u3063\u305f\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e workflow \u3092\u53c2\u8003\u306b\u3001\u30c7\u30d7\u30ed\u30a4\u7528 workflow \u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("strong",null,".github/workflows/deploy-server.yml")),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title=".github/workflows/deploy-server.yml"',title:'".github/workflows/deploy-server.yml"'},"name: Deploy server\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  deploy:\n    name: Deploy\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v1\n        with:\n          node-version: 14\n      - uses: shimataro/ssh-key-action@v2\n        with:\n          key: ${{ secrets.API_DEPLOY_SSH_KEY }}\n          name: id_rsa\n          # If known_hosts needs to be set, use this.\n          # known_hosts: ${{ secrets.API_DEPLOY_KNOWN_HOSTS }}\n      - run: |\n          npm install -g pm2@^4.5.1\n          npx pm2 deploy production setup || true\n          npx pm2 deploy production update\n        env:\n          API_DEPLOY_USER: ${{ secrets.API_DEPLOY_USER }}\n          API_DEPLOY_HOST: ${{ secrets.API_DEPLOY_HOST }}\n          API_DEPLOY_REPO: https://github.com/${{ github.repository }}.git\n          API_DATABASE_URL: ${{ secrets.API_DATABASE_URL }}\n          API_JWT_SECRET: ${{ secrets.API_JWT_SECRET }}\n          API_USER_ID: ${{ secrets.API_USER_ID }}\n          API_USER_PASS: ${{ secrets.API_USER_PASS }}\n          API_ORIGIN: ${{ secrets.API_ORIGIN }}\n          API_BASE_PATH: ${{ secrets.API_BASE_PATH }}\n          API_SERVER_PORT: ${{ secrets.API_SERVER_PORT }}\n          API_UPLOAD_DIR: ${{ secrets.API_UPLOAD_DIR }}\n"))),(0,l.kt)("h3",{id:"dedicated-server-2"},"Step 2. \u30ea\u30dd\u30b8\u30c8\u30ea\u306b Secrets \u3092\u8ffd\u52a0"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306e secrets \u3092 GitHub \u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"API_BASE_PATH")),": API \u306e basepath\u3002",(0,l.kt)("br",{parentName:"li"}),"\u4f8b: ",(0,l.kt)("inlineCode",{parentName:"li"},"/api")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"API_DATABASE_URL")),": MySQL \u306e\u672c\u756a URL\u3002",(0,l.kt)("br",{parentName:"li"}),"\u4f8b: ",(0,l.kt)("inlineCode",{parentName:"li"},"mysql://mysql-instance1.123456789012.us-east-1.rds.amazonaws.com:3306")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"API_DEPLOY_HOST")),": \u5c02\u7528\u30b5\u30fc\u30d0\u30fc\u306e\u30db\u30b9\u30c8\u3002",(0,l.kt)("br",{parentName:"li"}),"\u4f8b: ",(0,l.kt)("inlineCode",{parentName:"li"},"ec2-public-ipv4-address.compute-1.amazonaws.com")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"API_DEPLOY_USER")),": SSH \u30e6\u30fc\u30b6\u30fc\u540d\u3002",(0,l.kt)("br",{parentName:"li"}),"\u4f8b: ",(0,l.kt)("inlineCode",{parentName:"li"},"ci")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"API_DEPLOY_SSH_KEY")),": \u30db\u30b9\u30c8\u306b\u63a5\u7d9a\u53ef\u80fd\u306a SSH \u79d8\u5bc6\u9375\u3002",(0,l.kt)("br",{parentName:"li"}),"\u4f8b:",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"ssh-keygen -t rsa -b 4096 -m PEM -f frourio-ci.key")," \u3092\u30ed\u30fc\u30ab\u30eb\u30de\u30b7\u30f3\u3067\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"frourio-ci.key")," \u306e\u4e2d\u8eab\u3092\u30b3\u30d4\u30fc\u3057\u3066 secret \u306e\u5024\u3068\u3057\u3066\u8cbc\u308a\u4ed8\u3051\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"frourio-ci.key.pub")," \u3092\u30db\u30b9\u30c8\u30de\u30b7\u30f3\u306b\u9001\u4fe1\u3057\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"~/.ssh/known_hosts")," \u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"API_UPLOAD_DIR")),": \u30e6\u30fc\u30b6\u30fc\u30b3\u30f3\u30c6\u30f3\u30c4\uff08\u30a2\u30a4\u30b3\u30f3\u306a\u3069\uff09\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u305f\u3081\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3002",(0,l.kt)("br",{parentName:"li"}),"\u4f8b: ",(0,l.kt)("inlineCode",{parentName:"li"},"/mnt/efs-1/upload"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"/srv/upload"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30b5\u30f3\u30d7\u30eb\u3067\u306f\u3001\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30a2\u30a4\u30b3\u30f3\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002")))),(0,l.kt)("h2",{id:"aws-lambda"},"AWS Lambda\uff08\u9759\u7684\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\uff09"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"question in create-frourio-app"),(0,l.kt)("th",{parentName:"tr",align:"center"},"choice"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"API server hosting")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"Serverless"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"Serverless service")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"AWS Lambda"))))),(0,l.kt)("p",null,"\u3053\u308c\u306f ",(0,l.kt)("strong",{parentName:"p"},"\u8a2d\u5b9a\u304c\u8907\u96d1")," \u306a\u306e\u3067\u3001create-frourio-app \u3067\u4e0a\u8a18\u306e\u9078\u629e\u80a2\u3092\u9078\u3093\u3067\u3001\u81ea\u52d5\u3067\u8a2d\u5b9a\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("p",null,"create-frourio-app \u3067 AWS Lambda \u3092\u9078\u629e\u3057\u305f\u969b\u306b\u8868\u793a\u3055\u308c\u308b\u8aac\u660e\u6587\u306e\u65e5\u672c\u8a9e\u8a33\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u521d\u5fc3\u8005\u306e\u65b9\u306b\u306f\u3084\u3084\u96e3\u3057\u3044\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002\u3088\u308a\u5177\u4f53\u7684\u306a\u4f8b\u306f",(0,l.kt)("a",{parentName:"p",href:"https://github.com/LumaKernel/frourio-sample-1/tree/master/infra"},"\u3053\u3061\u3089"),"\u306b\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u3059\u308b\u969b\u306f\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u3084\u30d0\u30f3\u30c9\u30eb\u3055\u308c\u308b\u30d5\u30a1\u30a4\u30eb\u304c\u3069\u306e\u7a0b\u5ea6\u5de8\u5927\u304b\u3092\u8003\u616e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\nAWS Lambda \u306b\u306f ",(0,l.kt)("strong",{parentName:"p"},"250MB")," \u306e ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html"},"\u30b5\u30a4\u30ba\u5236\u9650"),"\u304c\u3042\u308b\u306e\u3067\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002")),(0,l.kt)("p",null,"AWS Lambda \u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u6700\u4f4e\u9650\u4ee5\u4e0b\u306e\u3082\u306e\u3092\u7528\u610f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5fdc\u7b54\u3059\u308b\u305f\u3081\u306e Lambda \u95a2\u6570\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u3053\u306e Lambda \u306e\u540d\u524d\u3092 GitHub Actions Secrets ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"LAMBDA_FUNCTION_NAME_SERVER"))," \u306b\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u30de\u30a4\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e Lambda \u95a2\u6570\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u3053\u306e Lambda \u306e\u540d\u524d\u3092 GitHub Actions Secrets ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"LAMBDA_FUNCTION_NAME_MIGRATION"))," \u306b\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"NOTE: \u9577\u3081\u306e\u6642\u9593\u5236\u9650\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u6e08\u307f\u30d0\u30f3\u30c9\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3084 node_modules \u306a\u3069\u306e\u30c7\u30d7\u30ed\u30a4\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u305f\u3081\u306e Amazon S3\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u3053\u306e S3 \u30d0\u30b1\u30c3\u30c8\u306e\u540d\u524d\u3092 GitHub Actions Secrets ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"S3_BUCKET"))," \u306b\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u30aa\u30d7\u30b7\u30e7\u30f3: S3 \u30ad\u30fc\u306e\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u6307\u5b9a\u3059\u308b\u5834\u5408\u306f\u3001secrets \u306b ",(0,l.kt)("strong",{parentName:"li"},"S3_PREFIX`")," \u3082\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8a73\u3057\u304f\u8aac\u660e\u3059\u308b\u3068\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"${S3_BUCKET}/${S3_PREFIX}deployment_server.zip")," \u30ad\u30fc\u304c\u30c7\u30fc\u30bf\u3092\u4fdd\u7ba1\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002")))))}v.isMDXComponent=!0}}]);