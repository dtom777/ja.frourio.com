"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[3237],{428:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var r=a(7294),n=a(6010),o=a(3287),s=a(9960),i=a(2263),l=a(4996),c=a(2719),m={heroBanner:"heroBanner_UJJx",movingBoxes:"movingBoxes_yb4T",container:"container_czXe",heroTitle:"heroTitle_ohkl",heroTitleBold:"heroTitleBold_GVCX",setupWrapper:"setupWrapper_AfwY",setupHeadline:"setupHeadline_VDew",allStepContainer:"allStepContainer_O1vG",stepContainer:"stepContainer_sDZC",stepText:"stepText_NJzB",stepNumber:"stepNumber_BNBm",downArrow:"downArrow_H6Uv",stepIconsWrapper:"stepIconsWrapper_sjUW",stepIcon:"stepIcon_U65g",typeDevWrapper:"typeDevWrapper_Xd76",codeBlockWrapper:"codeBlockWrapper_Knyr",codeBlock:"codeBlock_VLQY",codeBlockTitle:"codeBlockTitle_GxwO",typeDevDescription:"typeDevDescription_srke",typeDevDescriptionIcon:"typeDevDescriptionIcon_atWD",rightTriangle:"rightTriangle_cMUU",highlightTextGreen:"highlightTextGreen_uODc",highlightTextBlk:"highlightTextBlk_zULI",buttons:"buttons_pzbO",features:"features_keug",feature:"feature_nI3B",featureImage:"featureImage_yA8i"},p="root_bMOp",u="wrapper_Q1vI",d="background_d8nP",g="shadow_J2vX",f="box_QSJU",h=["Aspida","Express","Fastify","MySQL","Next","Nuxt","Open","Prisma","React","Vue"],E=function(){for(var e=[],t=0;e.length<h.length;++t){var a=Math.floor(Math.random()*h.length);e.includes(a)||e.push(a)}return e},v=function(){return r.createElement("div",{className:p},r.createElement("div",{className:u},r.createElement("img",{src:(0,l.Z)("/img/key_visual_bg.jpg"),alt:"key visual",className:d}),E().map((function(e,t){return r.createElement("img",{src:(0,l.Z)("/img/box"+h[e]+".png"),alt:"box",className:(0,n.Z)(f),key:"box"+t,style:{animationDelay:-6*t+"s"}})})),r.createElement("div",{className:g})))},y=[{text:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u9078\u629e",icons:["next","nuxt","sapperIcon"]},{text:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u9078\u629e",icons:["fastify","express"]},{text:"ORM \u3092\u9078\u629e",icons:["prisma","typeorm"]},{text:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u9078\u629e",icons:["mysql","postgres"]},{text:"CI \u3092\u9078\u629e",icons:["jest","githubactions"]},{text:"\u30c7\u30d7\u30ed\u30a4\u5148\u3092\u9078\u629e",icons:["vercel","netlify"]}];var N=function(){return r.createElement("div",{className:m.allStepContainer},r.createElement("div",{className:m.downArrow}),y.map((function(e,t){return r.createElement("div",{className:m.stepContainer,key:t},r.createElement("div",{className:m.stepNumber},"Step ",t+1),r.createElement("div",null,r.createElement("p",{className:m.stepText},e.text),r.createElement("div",{className:m.stepIconsWrapper},e.icons.map((function(e,t){return r.createElement("img",{key:t,className:m.stepIcon,src:"img/"+e+".png"})})))))})))},x=a(7462),b=a(3746),_=[{language:"typescript",title:"API \u578b\u5b9a\u7fa9 server/api/users/index.ts",code:"\nexport type Methods = {\n  get: {\n    resBody: {\n      id: number\n      name: string\n    }\n  }\n}"},{language:"typescript",title:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3067\u30a8\u30e9\u30fc\u3092\u4fee\u6b63 server/api/users/controller.ts",code:"\nimport { defineController } from './$relay'\n\nexport default defineController(() => ({\n  get: () => ({\n    status: 200,\n    body: { id: 0, name: 'mario' }\n  })\n}))"},{language:"tsx",title:"\u30da\u30fc\u30b8\u304b\u3089 API \u30ea\u30af\u30a8\u30b9\u30c8 pages/index.tsx",code:"\nimport useAspidaSWR from '@aspida/swr'\nimport { apiClient } from '~/utils/apiClient'\n\nconst Home = () => {\n  const { data: user } = useAspidaSWR(apiClient.users)\n  return <div>{user.name}</div>\n}\n\nexport default Home"}],k=function(){return r.createElement("div",{className:m.codeBlockWrapper},_.map((function(e){return r.createElement("div",{key:e.title,className:m.codeBlock},r.createElement("p",{className:m.codeBlockTitle},e.title),r.createElement(b.ZP,(0,x.Z)({},b.lG,{code:e.code.trim(),language:e.language}),(function(e){var t=e.className,a=e.style,n=e.tokens,o=e.getLineProps,s=e.getTokenProps;return r.createElement("pre",{className:t,style:a},n.map((function(e,t){return r.createElement("div",(0,x.Z)({key:t},o({line:e,key:t})),e.map((function(e,t){return r.createElement("span",(0,x.Z)({key:t},s({token:e,key:t})))})))})))})))})))},T="window"in a.g?a(7229).Z:null,Z=function(e){return"window"in a.g&&window.innerWidth>=600?e:e.slice(0,3)},B=[{category:"frourio",data:57152.8,color:"#08c6d6"},{category:"fastify",data:56084.8,color:"#999"},{category:"nest-fastify",data:53035.2,color:"#999"},{category:"frourio-express",data:13741,color:"#999"},{category:"express",data:13602,color:"#999"},{category:"nest",data:12212.2,color:"#999"}].sort((function(e,t){return t.data-e.data})),w=[{name:"2022-10-01",data:Z(B.map((function(e){return e.data})))}],D=Z(B.map((function(e){return e.color}))),I={chart:{type:"bar",toolbar:{show:!1},fontFamily:"inherit"},plotOptions:{bar:{horizontal:!0,distributed:!0,dataLabels:{position:"top"}}},colors:D,legend:{show:!1},xaxis:{title:{text:"Request/sec",style:{fontWeight:"bold"}},categories:Z(B.map((function(e){return e.category})))},grid:{xaxis:{lines:{show:!0}}},dataLabels:{enabled:!0,offsetX:-8,style:{fontSize:"12px",colors:["#fff"]}},yaxis:{labels:{style:{colors:D,fontSize:"14px",fontWeight:"bold"}}}};var S=function(){var e=(0,i.Z)().siteConfig;return r.createElement(o.Z,{title:e.tagline,description:"Description will go into a meta tag in <head />"},r.createElement("header",{className:m.heroBanner},r.createElement("div",{className:m.movingBoxes},r.createElement(v,null)),r.createElement("div",{className:(0,n.Z)(m.container,"container")},r.createElement("p",{className:m.heroTitle},"\u30d5\u30eb\u30b9\u30bf\u30c3\u30af\u958b\u767a\u74b0\u5883\u3092"),r.createElement("p",{className:m.heroTitle},"\u30b3\u30de\u30f3\u30c9\u4e00\u767a\u3067"),r.createElement("p",{className:(0,n.Z)(m.heroTitle,m.heroTitleBold)},"\u5fc5\u8981\u306a\u306e\u306f TypeScript \u3060\u3051"),r.createElement("div",{className:m.buttons},r.createElement(s.Z,{className:(0,n.Z)("button button--primary button--lg",m.getStarted),to:(0,l.Z)("docs/")},"\u306f\u3058\u3081\u308b"),r.createElement(s.Z,{className:(0,n.Z)("button button--outline button--primary button--lg",m.getStarted),to:(0,l.Z)("/docs/tutorial")},"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb")),r.createElement("div",{className:"margin-top--md"},r.createElement(c.Z,{href:"https://github.com/frouriojs/frourio","data-icon":"octicon-star","data-size":"large","data-show-count":!0,"aria-label":"Star frouriojs/frourio on GitHub"},"Star")))),r.createElement("main",null,r.createElement("section",{className:m.features},r.createElement("div",{className:"container"},r.createElement("div",{className:(0,n.Z)("text--center",m.feature)},r.createElement("h2",null,"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u624b\u9806"),r.createElement("div",{className:m.setupWrapper},r.createElement("p",{className:m.setupHeadline},"GUI \u3067\u74b0\u5883\u69cb\u7bc9\u3092\u7c21\u5358\u306b"),r.createElement(N,null)))),r.createElement("div",{className:m.typeDevWrapper},r.createElement("div",{className:"container"},r.createElement("div",{className:(0,n.Z)("text--center")},r.createElement("h2",null,"\u578b\u99c6\u52d5\u958b\u767a"),r.createElement(k,null),r.createElement("div",{className:m.rightTriangle}),r.createElement("p",{className:m.highlightTextGreen},"TypeScript \u3092\u7528\u3044\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5168\u4f53\u3092\u9759\u7684\u578b\u691c\u67fb\u3067\u304d\u307e\u3059")))),r.createElement("div",{className:(0,n.Z)("text--center",m.feature)},r.createElement("div",{className:"container"},r.createElement("div",{className:m.typeDevDescription},r.createElement("img",{className:m.typeDevDescriptionIcon,src:"img/communication.jpg"}),r.createElement("p",{className:m.highlightTextBlk},"API \u578b\u5b9a\u7fa9\u306b\u3088\u3063\u3066\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u3068 HTTP \u30ea\u30af\u30a8\u30b9\u30c8\u306e\u578b\u304c\u5f37\u5236\u3055\u308c\u308b\u306e\u3067\u3001HTTP \u901a\u4fe1\u306e\u30c6\u30b9\u30c8\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002")),r.createElement("div",{className:m.typeDevDescription},r.createElement("img",{className:m.typeDevDescriptionIcon,src:"img/speed.png"}),r.createElement("p",{className:m.highlightTextBlk},"\u578b\u5b89\u5168\u306a\u30d5\u30eb\u30b9\u30bf\u30c3\u30af\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9\u304c\u7c21\u5358\u306a\u306e\u3067\u3001\u77ed\u671f\u9593\u3067\u5b89\u5168\u306b\u88fd\u54c1\u3092\u5b8c\u6210\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")))),r.createElement("div",{className:(0,n.Z)("text--center",m.feature)},r.createElement("div",{className:"container"},r.createElement("h2",null,"TypeScript \u88fd\u3067\u6700\u901f\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af"),T&&r.createElement(T,{options:I,series:w,type:"bar",height:280}),r.createElement("div",{className:(0,n.Z)("text--center",m.feature)},r.createElement(s.Z,{className:(0,n.Z)("button button--primary button--lg",m.getStarted),to:(0,l.Z)("docs/")},"\u306f\u3058\u3081\u308b")),r.createElement("div",{className:"margin-top--md text--center"},r.createElement(c.Z,{href:"https://github.com/frouriojs/frourio","data-icon":"octicon-star","data-size":"large","data-show-count":!0,"aria-label":"Star frouriojs/frourio on GitHub"},"Star")))))))}}}]);