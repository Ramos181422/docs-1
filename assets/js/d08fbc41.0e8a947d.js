"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7276],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7615:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:2},s="Samples",c={unversionedId:"develop/smart-contract/solidity-developing/samples",id:"develop/smart-contract/solidity-developing/samples",title:"Samples",description:"Let's deploy the contract to TON Labs development blockchain atnet.ton.dev.",source:"@site/../../src/develop/smart-contract/solidity-developing/samples.md",sourceDirName:"develop/smart-contract/solidity-developing",slug:"/develop/smart-contract/solidity-developing/samples",permalink:"/develop/smart-contract/solidity-developing/samples",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contract/solidity-developing/samples.md",tags:[],version:"current",lastUpdatedAt:1658793961,formattedLastUpdatedAt:"Jul 26, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Solidity Compiler",permalink:"/develop/smart-contract/solidity-developing/compiler"},next:{title:"Comparison with Solidity contracts",permalink:"/develop/smart-contract/solidity-developing/comparison"}},p={},d=[],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"samples"},"Samples"),(0,a.kt)("p",null,"Let's deploy the contract to TON Labs development blockchain atnet.ton.dev."),(0,a.kt)("p",null,"1) Make sure tonos-cli is in $PATH:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    export PATH=$PATH:<PATH_TO>/tonos-cli\n\n    tonos-cli config --url net.ton.dev\n")),(0,a.kt)("p",null,"2) Generate address, keys and seed phrase for your contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    tonos-cli genaddr <WalletAddress>.tvc Wallet.abi.json --genkey Wallet.keys.json\n")),(0,a.kt)("p",null,"Address of your contract in the blockchain is located after Raw address:"),(0,a.kt)("p",null,'IMPORTANT: Save this value - you will need it to deploy your contract and to work with it. We will refer to it as "YourAddress" below. Seed phrase is also printed to stdout. Key pair will be generated and saved to the file Wallet.keys.json.'),(0,a.kt)("p",null,"Note that you will need to send some coins to the address before the actual deployment. TON deploy is fee-based, so your new contract will be charged for this."),(0,a.kt)("p",null,"3) Get some ","[test]"," coins to your account. Options are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ask a friend to sponsor your contract deployment;"),(0,a.kt)("li",{parentName:"ul"},"transfer some currency from your wallet account;"),(0,a.kt)("li",{parentName:"ul"},"ask in developer chats.")),(0,a.kt)("p",null,"4) Check the state of the pre-deployed contract. It should be Uninit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    tonos-cli account <YourAddress>\n")),(0,a.kt)("p",null,"5) Deploy your contract to the selected network (TON Labs devnet in the example) with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    tonos-cli deploy --abi Wallet.abi.json --sign Wallet.keys.json <contract>.tvc {<constructor_arguments>}\n")),(0,a.kt)("p",null,"If either of --abi or --sign options is omitted in parameters, it must be specified in the config file. See below."),(0,a.kt)("p",null,"6) Check the contract state again. This time, it is should be active."),(0,a.kt)("p",null,"7) Call the function of your contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    tonos-cli call \'<YourAddress>\' sendTransaction \'{"dest":"DestAddress", "value":1000000000, "bounce":true}\' --abi Wallet.abi.json --sign Wallet.keys.json\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," The documentation in Everscale repository is a community effort. Therefore, everyone can contribute with proposals for new topics, suggest new content elements, participate in editing, and provide ideas that will be of great help for network development.\nPlease be informed that our documentation can be ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/everscale-org/docs/issues"},"edited via GitHub"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Also please make sure to consult our rules and rewards policy via ",(0,a.kt)("a",{parentName:"p",href:"https://docs.everscale.network/contribute/hot-streams/documentations"},"this link"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Feel free to join ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/+C2IpQXWZtCwxYzEy"},"Everscale Documentation Development Telegram chat")," and ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/+Vca1Gs6uPzIyNWVi"},"Everscale Developers Onboarding Telegram chat"),"!")))}m.isMDXComponent=!0}}]);