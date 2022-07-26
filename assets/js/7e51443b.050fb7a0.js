"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3430],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},h),{},{components:n})):r.createElement(f,i({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4062:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:7},l="Octus Bridge Tokenomics. Pros and cons of the platform.",c={unversionedId:"develop/integrate/build-cross-chain/getting-started/tokenomics",id:"develop/integrate/build-cross-chain/getting-started/tokenomics",title:"Octus Bridge Tokenomics. Pros and cons of the platform.",description:"Octus Bridge has its own BRIDGE token. This is both a token for the DAO and used as payment for becoming a relayer. To become a relayer, you need to stake 100k BRIDGE tokens. However, the amount will probably decrease in the near future.",source:"@site/../../src/develop/integrate/build-cross-chain/getting-started/tokenomics.md",sourceDirName:"develop/integrate/build-cross-chain/getting-started",slug:"/develop/integrate/build-cross-chain/getting-started/tokenomics",permalink:"/develop/integrate/build-cross-chain/getting-started/tokenomics",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/integrate/build-cross-chain/getting-started/tokenomics.md",tags:[],version:"current",lastUpdatedAt:1658793961,formattedLastUpdatedAt:"Jul 26, 2022",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Samples",permalink:"/develop/integrate/build-cross-chain/getting-started/samples"},next:{title:"Ecosystem products APIs",permalink:"/integrate/products-api"}},h={},u=[{value:"Where does the income come from?",id:"where-does-the-income-come-from",level:2},{value:"Vault/MultiVault",id:"vaultmultivault",level:2},{value:"Pros and cons of the Octus Bridge",id:"pros-and-cons-of-the-octus-bridge",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"octus-bridge-tokenomics-pros-and-cons-of-the-platform"},"Octus Bridge Tokenomics. Pros and cons of the platform."),(0,a.kt)("p",null,"Octus Bridge has its own BRIDGE token. This is both a token for the DAO and used as payment for becoming a relayer. To become a relayer, you need to stake 100k BRIDGE tokens. However, the amount will probably decrease in the near future. "),(0,a.kt)("p",null,"For relayers, the unlocking starts after a month. Conversely, an ordinary user can withdraw tokens from staking at any time, although, if he/she voted for some proposal in DAO, then the unlocking of tokens will be available after the voting for the proposal ends. Currently, voting takes place in the timeframe of three days."),(0,a.kt)("p",null,"For stakes, the user is credited with shares. The bridge's revenue is distributed in rounds. At this time, there are no clear distribution intervals. A round is closed by the decision of the DAO. The income is divided in two: half is distributed among the relayers, and the other half among ordinary users who have been staking their digital assets. Users get the rewards in accordance with their shares."),(0,a.kt)("h2",{id:"where-does-the-income-come-from"},"Where does the income come from?"),(0,a.kt)("p",null,"Octus Bridge has an interesting monetization model. Currently, there are no commissions for transferring funds across the bridge. Although for some tokens, commissions will probably be introduced in the near future."),(0,a.kt)("p",null,"The bridge plans to earn from the Everscale network. With the growing popularity of the network and the emergence of an increasing number of projects, liquidity from other networks will inevitably come to the network, and the bridge will use this locked liquidity to generate income."),(0,a.kt)("p",null,"For instance, when you transfer USDT from Ethereum to Everscale, these USDT are locked in the Vault contract in Ethereum, and the bridge issues the USDT guaranteed by Octus Bridge itself, on the Everscale network. The bridge takes part of the tokens that are locked in the Vault and invests them in liquid protocols such as Curve or Compound. The investments of part of locked tokens are called Startegies, and are voted by the DAO."),(0,a.kt)("p",null,"When the next round closes, the funds earned in the Strategies are redeemed by the bridge from the market and distributed between the relayers and the stake holders."),(0,a.kt)("p",null,"Also, it is important to mention that not only digital assets can be transferred via the bridge, but also DAO solutions. It is applicable when participants of the Everscale DAO vote for a proposal that has actions in other networks. In case the proposal is accepted, it is signed by relayers and executed on behalf of the DAO in the needed network. Therefore, DAO voting can be conducted on a very cheap network, and the decisions executed on an expensive network (for example, Ethereum)."),(0,a.kt)("h2",{id:"vaultmultivault"},"Vault/MultiVault"),(0,a.kt)("p",null,"Everscale is home network for the Octus bridge. In non-home networks (currently only EVM), there are two types of storage for tokens - Vault and MultiVault."),(0,a.kt)("p",null,"Vault is a repository for liquid tokens. These are the tokens that have analogues in other networks (For example, USDT, for Ethereum it is the original USDT, for BSC it is BSC-USD, etc.)."),(0,a.kt)("p",null,"Such Vaults are configured manually, and now they are the following: DAI, USDT, USDC, WETH, WBTC. Also, there is WEVER, but its Vault implementation is different, since its home network is Everscale. It will not be examined here."),(0,a.kt)("p",null,"For the mentioned tokens, the following cross-chain transfer can be made (EVM\u2192 EVM). These tokens could potentially participate in Strategies for generating income."),(0,a.kt)("p",null,"Vaults have limits on the number of tokens they can accept and these limits are set by DAO. This is a way to manage risks. Different networks have different levels of security."),(0,a.kt)("p",null,"The Fantom network has a low limit on the maximum USDT that the Vault can accept (100k). The limit is higher for BSC, and the highest for Ethereum. The cross-chain transfers are possible for such tokens. (Semi-automatic EVM \u2192 ES \u2192 EVM)."),(0,a.kt)("p",null,"MultiVault is a multi-repository that allows to transfer any tokens to the Everscale network, and withdrawal of the tokens from the network."),(0,a.kt)("p",null,"The Tokens are divided into Native and Alien:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Native")," - is a token whose home network is Everscale. In this case, tokens are issued in the EVM network and guaranteed by the bridge"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Alien")," - is a token whose home network is not Everscale. In this case, TIP 3 tokens are issued in Everscale and as well guaranteed by the bridge.")),(0,a.kt)("p",null,"When you transfer native tokens to the EVM network, while withdrawing, if necessary, an ERC 20 wallet for this token will be automatically created. The same thing applies to transferring an alien token, in which case a TIP 3 wallet will be created."),(0,a.kt)("p",null,"Also, if you get the same token from different networks, different alien tokens will be created for it in Everscale and cross-chain transfers for such tokens are not possible by default, but there is a unification mechanism."),(0,a.kt)("h2",{id:"pros-and-cons-of-the-octus-bridge"},"Pros and cons of the Octus Bridge"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A big competitive advantage of the bridge is the tremendous opportunities for future integrations.")),(0,a.kt)("p",null,"The EVM part of the bridge is quite simply designed, which is a big advantage due to the fact that there is less room for errors."),(0,a.kt)("p",null,"The Everscale part of the bridge is much more complicated. All decision-making takes place on-chain. Besides DAO, there are Staking and assignment of relayers. Communication of relayers with users (signatures of transactions) is on-chain. Due to the unique feature of the Everscale blockchain, relayers do not pay for signing transactions, instead, the user pays for them. (You create a transfer contract and deposit EVERs there. The contract loads the list of currently available relayers and they say their Yes or No with the help of External messages)."),(0,a.kt)("p",null,"At the moment, the bridge does not charge commissions for the transfer of tokens, although commissions could be introduced in the near future. Probably commissions will first be introduced for NON-liquid tokens (MultiVault). The absence of commissions is both a plus and a minus. The plus is in cheap transactions, the minus is that there is no automatic market mechanism for balancing liquidity between networks."),(0,a.kt)("p",null,"If you want to withdraw liquid tokens (Vault) to the EVM network where there is no liquidity, then, you either need to wait for some time until the liquidity is accumulated (but no more than the TTL of the relay round - now it's 2 weeks), or complete the transaction by adding it to the withdrawal queue. Then, the transaction can be completed later with another transaction. Also, a bounty reward can be set for the one who will bring liquidity and complete the transaction. If the transaction hangs in the queue for a long time and liquidity is not accumulated, the transaction can be cancelled."),(0,a.kt)("p",null,"Despite the fact that technically everything seems to be ready for the bridge to be run by the DAO, now the bridge configuration is controlled by the Broxus multisig. Probably, when all the functionalities of the bridge are finally settled, it will be entirely managed by the DAO. You can think of relayers as hot wallets that sign transactions in real time, and about Broxus multisig as hard-core wallets that are used to update the bridge."),(0,a.kt)("p",null,"Vaults currently have limits on withdrawals from the Everscale. There is a limit on both the maximum amount and the number of withdrawals per day per token. If the limit is exceeded, transfers are placed in a waiting queue and are waiting for confirmation from the DAO or Guardian. This is also a risk management measure. The limits will probably increase over time."),(0,a.kt)("p",null,"At the moment, the bridge has limited possibilities for transmitting useful data along with transactions. It is possible to transmit some data for automatic execution only for EVM \u2192 Everscale transactions using the credit processor. The bridge will not transfer it to the sender's address. You will simply receive a callback in the form \u201cYou have received N tokens and Data with them.\u201d That is, in this data, for example, you can write down who the owner of these digital assets is, and what should be done next. This option is not available for Everscale -> EVM transactions."),(0,a.kt)("p",null,"The main functionality of the bridge is to transfer events that occur on connected to Everscale networks, and sign events that occurred in Everscale to transfer them to other networks. Vault and MultiVault are only special cases of such integrations. Token lock events are transferred from EVM networks, and token burning events are transferred back (or vice versa). After studying the transaction pipeline, you will understand that any events can be transferred according to the same principle."))}m.isMDXComponent=!0}}]);