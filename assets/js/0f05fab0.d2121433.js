"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7148],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||v[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6499:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:0},i="Overview",l={unversionedId:"develop/client-api/overview",id:"develop/client-api/overview",title:"Overview",description:"Introduction",source:"@site/../../src/develop/client-api/overview.md",sourceDirName:"develop/client-api",slug:"/develop/client-api/overview",permalink:"/develop/client-api/overview",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/client-api/overview.md",tags:[],version:"current",lastUpdatedAt:1670934809,formattedLastUpdatedAt:"Dec 13, 2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Client API",permalink:"/develop/client-api"},next:{title:"Ever SDK",permalink:"/develop/client-api/ever-sdk"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"APIs and Client Libraries for Everscale Access",id:"apis-and-client-libraries-for-everscale-access",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Before you start developing or integrating anything into Everscale, we would like to tell you about the tools and environment that you will use in your work."),(0,a.kt)("p",null,"First of all, it is worth noting that Everscale is really a decentralized blockchain, not only from a technical point of view, but also from a management side, so the key tools and approaches to development may differ from different teams, technical contributors on the network."),(0,a.kt)("p",null,"At the moment, there are two active companies of technical contributors in Everscale network:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://everx.dev/about"},"EverX")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://broxus.com/"},"Broxus")),(0,a.kt)("p",null,"And it is their solutions and tools that you will use when developing, while you will have every opportunity to write your own solutions as well, if necessary or desired."),(0,a.kt)("h2",{id:"apis-and-client-libraries-for-everscale-access"},"APIs and Client Libraries for Everscale Access"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/"},"EVER SDK")," (by EverX) - Core Client Library built on the EVER OS GraphQL API for Everscale DApp development")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"./gql-api"},"GraphQL API")," (by EverX) - Mainnet validating node with a GraphQL server that allows you to collect a large amount of data about the network.\n*Suitable for integration by exchanges and other platforms.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/develop/client-api/js-api/ever-sdk-js"},"ever-sdk-js")," (by EverX) - EverX Web3 Javascript library that works on top of GraphQL API - is a binding over ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ever-sdk"},"core Rust ever-sdk library"),".\nIt allows Everscale developers work with contracts and query data from GraphQL API. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/develop/client-api/js-api/inpage-provider"},"everscale-inpage-provider")," (by Broxus) - Web 3.0 library for Everscale. Typed wrappers over contracts etc.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/develop/client-api/rust-api"},"Rust Core Library")," (by EverX) - provides Everscale developers with services on top of scalable blockchain infrastructure, so that developers can focus on business logic instead of infrastructure maintenance.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/develop/client-api/other-lang"},"Other Languages")," (by EverX) - Community bindings over Rust Core Library."))))}u.isMDXComponent=!0}}]);