"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5073],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9647:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],s={},c="Bridges",l={unversionedId:"learn/everscale-overview/bridges",id:"learn/everscale-overview/bridges",title:"Bridges",description:"What is a cross-chain bridge?",source:"@site/../../src/learn/everscale-overview/04-bridges.md",sourceDirName:"learn/everscale-overview",slug:"/learn/everscale-overview/bridges",permalink:"/learn/everscale-overview/bridges",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/learn/everscale-overview/04-bridges.md",tags:[],version:"current",lastUpdatedAt:1658793961,formattedLastUpdatedAt:"Jul 26, 2022",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hodl & Trade",permalink:"/learn/everscale-overview/exchangewallets"},next:{title:"Terminology",permalink:"/learn/terminology"}},u={},d=[{value:"What is a cross-chain bridge?",id:"what-is-a-cross-chain-bridge",level:2},{value:"Everscale Bridges",id:"everscale-bridges",level:2},{value:"Octus Bridge",id:"octus-bridge",level:3},{value:"Adaever",id:"adaever",level:3}],p={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bridges"},"Bridges"),(0,i.kt)("h2",{id:"what-is-a-cross-chain-bridge"},"What is a cross-chain bridge?"),(0,i.kt)("p",null,"Cross-chain bridges were made for transferring assets between chains.",(0,i.kt)("br",{parentName:"p"}),"\n","They lock assets in the source chain and creates an equivalent number of wrapped assets in the destination blockchain.",(0,i.kt)("br",{parentName:"p"}),"\n","When you initiate an asset transfer from one blockchain to another using a bridge, assets are not actually moved or sent anywhere. Instead, the transfer functionality is used in a two-step process and handled by a smart contract.  "),(0,i.kt)("p",null,"In simple terms - Let's say you want to move tokens from chain A to chain B. What the bridge does is it temporarily locks or freezes your asset in chain A. They then create an equivalent number of new tokens that will be unlocked for you in chain B. When you want to redeem the tokens, that is, when you want to move the original assets back from chain B to the original chain (chain A), the tokens created in chain B will be burned and the original assets will be unlocked.  "),(0,i.kt)("p",null,"The concept of interchain communication and token transfer is done using a two-way binding system; where the value of a token in either blockchain is the same, as it remains tied to the value of the initial ones."),(0,i.kt)("h2",{id:"everscale-bridges"},"Everscale Bridges"),(0,i.kt)("h3",{id:"octus-bridge"},(0,i.kt)("a",{parentName:"h3",href:"https://octusbridge.io/"},"Octus Bridge")),(0,i.kt)("p",null,"Octus Bridge is a platform built by the Broxus team that enables cross-chain asset transfers between Everscale and other networks such as Ethereum, BNB Chain, Fantom, Polygon, Avalanche and Milkomeda.",(0,i.kt)("br",{parentName:"p"}),"\n","The platform also implements the Governance interface or DAO, which provides a level of decentralization unprecedented for bridges due to the ability to make decisions directly by network participants, as well as a staking interface."),(0,i.kt)("h3",{id:"adaever"},(0,i.kt)("a",{parentName:"h3",href:"https://adaever.io/"},"Adaever")),(0,i.kt)("p",null,"Cross-chain bridge between Cardano and Everscale built by the Broxus team."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"}," The documentation in Everscale repository is a community effort. Therefore, everyone can contribute with proposals for new topics, suggest new content elements, participate in editing, and provide ideas that will be of great help for network development.\nPlease be informed that our documentation can be ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/everscale-org/docs/issues"},"edited via GitHub"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Also please make sure to consult our rules and rewards policy via ",(0,i.kt)("a",{parentName:"p",href:"https://docs.everscale.network/contribute/hot-streams/documentations"},"this link"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Feel free to join ",(0,i.kt)("a",{parentName:"p",href:"https://t.me/+C2IpQXWZtCwxYzEy"},"Everscale Documentation Development Telegram chat")," and ",(0,i.kt)("a",{parentName:"p",href:"https://t.me/+Vca1Gs6uPzIyNWVi"},"Everscale Developers Onboarding Telegram chat"),"!")))}h.isMDXComponent=!0}}]);