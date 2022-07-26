"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[8037],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return p}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=c(r),p=n,v=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return r?a.createElement(v,s(s({ref:t},h),{},{components:r})):a.createElement(v,s({ref:t},h))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4549:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=r(3117),n=r(102),o=(r(7294),r(3905)),s=["components"],i={description:"Blockchain, everything is a contract, types of messages and gas"},l="Overview",c={unversionedId:"learn/everscale-overview/overview",id:"learn/everscale-overview/overview",title:"Overview",description:"Blockchain, everything is a contract, types of messages and gas",source:"@site/../../src/learn/everscale-overview/01-overview.md",sourceDirName:"learn/everscale-overview",slug:"/learn/everscale-overview/overview",permalink:"/learn/everscale-overview/overview",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/learn/everscale-overview/01-overview.md",tags:[],version:"current",lastUpdatedAt:1658793961,formattedLastUpdatedAt:"Jul 26, 2022",sidebarPosition:1,frontMatter:{description:"Blockchain, everything is a contract, types of messages and gas"},sidebar:"tutorialSidebar",previous:{title:"Everscale overview",permalink:"/learn/everscale-overview"},next:{title:"Ecosystem",permalink:"/learn/everscale-overview/ecosystem"}},h={},d=[],u={toc:d};function p(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Everscale is one of the most advanced blockchain networks that lets users transfer digital assets to anyone for a small fee. It also powers numerous leading applications that everyone can take advantage of. "),(0,o.kt)("p",null,"The blockchain was created on the basis of the initial code of the Telegram Open Network (TON) blockchain designed by Nikolai Durov. Fundamentally, Everscale blockchain is constructed in accordance with this TON Whitepaper."),(0,o.kt)("p",null,"Despite the fact that Everscale builds on TON's innovation, there are, however, some big advancements deployed by network developers in order to address the fundamental issues faced by most blockchains, Everscale constantly works on implementing the most secure solutions to achieve maximum scalability. "),(0,o.kt)("p",null,"The main solution that permits Everscale to offer one of the highest Transaction Per Second rates available among currently operating blockchains is sharding. "),(0,o.kt)("p",null,"Generally speaking, sharding is a method for distributing data across multiple machines. This makes it a scaling technique, and can be used by blockchain networks to partition states and transaction processing, so that each node of the network would only need to process a fraction of all the transactions. Moreover, sharding allows for the parallel processing of transactions. As long as there is a sufficient number of nodes verifying each transaction, ensuring high reliability and security, then splitting a blockchain into shards will allow it to process far more transactions."),(0,o.kt)("p",null,"However, Everscale went even further than classical sharding. Below we briefly describe technological solutions, besides sharding, that permit Everscale to be amongst the leading blockchain ecosystems. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Infinite Sharding")," "),(0,o.kt)("p",null,"On Everscale, shards are dynamically added as the load increases and then merged back. This is possible because all contracts on the chain communicate with each other asynchronously, and therefore, we can split one shard into two shards without any problems occurring (shards are just divided in half according to the ranges of contract addresses)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Distributed programming")),(0,o.kt)("p",null,"There is a reasonable question. Let's consider that we have a contract with a token, for example, USDT. Then, a user with a larger account balance is more motivated to pay for storage, than, respectively, the user with a lesser balance. This way, wouldn't there arise situations when some users will be obliged to pay for storage on behalf of others, so that their contract is not deleted?    "),(0,o.kt)("p",null,"In order to solve this problem, another truly genius idea was invented, called distributing programming. "),(0,o.kt)("p",null,"In Everscale, for each entity, balance or even trading pair, its own small smart contract is deployed. The owner of the respective smart contract decides on his own for how long to store the data and pays only for that. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Validation")," "),(0,o.kt)("p",null,"The Everscale blockchain was not built to allow just anyone to become a validator. Validation is a critical process, and requires professional equipment and access to an appropriate server. The total number of validators will at most be in the thousands, not in the tens of thousands. And validator machines have high server and channel requirements (the current requirements are 48 CPUs, 128 RAM and 1TB SSD) and a 1GB channel (the network is used extensively). This allows for the blockchain to support a very quick block release speed and often rotate validators in the shards."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Paid storage")),(0,o.kt)("p",null,"There is also the issue of blockchain state growth faced by most networks. For instance, If someone recorded something on the blockchain, at least once, for example, bought a memcoin for 0.001. Then, even if the price of the memcoin goes to zero, the validators will still be required to store the information about your purchase forever. That is, you pay for the record once, but it will be stored forever. And here comes the interesting economics - blockchains are forced to limit the rate of recording transactions artificially so that the size of the blockchain state does not grow faster than data storage becomes cheaper. As a result, users are forced to compete with each other for the right to record data on the blockchain via an auction, and subsequently, transaction fees are increasing all the time."),(0,o.kt)("p",null,"Everscale, as a leading blockchain developer, never looks for easy and uncostly ways to solve blockchain issues. Therefore, the highlighted problem was resolved with the maximum efficiency and accuracy possible. In the Everscale blockchain, each contract is required to pay rent for storing its data in the state. This rent corresponds to the size of the data. When the money runs out, the contract is deleted with the possibility of recovery, and then deleted completely. "),(0,o.kt)("p",null,"Essentially, Everscale aims to be a decentralized replacement for AWS. Just as you can host your application on AWS, you can host it on Everscale. Hosting it on Everscale will not be much more expensive (if it is rarely used, it will be cheaper), but it will have maximum fault tolerance."),(0,o.kt)("p",null,"Please follow ",(0,o.kt)("a",{parentName:"p",href:"/arch/basics"},(0,o.kt)("strong",{parentName:"a"},"this page"))," in order to get started with the components of the Everscale blockchain and start learning it's architecture."))}p.isMDXComponent=!0}}]);