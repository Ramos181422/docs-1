"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[2699],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7555:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:4},s="Staking",c={unversionedId:"validate/staking",id:"validate/staking",title:"Staking",description:"Glossary",source:"@site/../../src/validate/staking.md",sourceDirName:"validate",slug:"/validate/staking",permalink:"/validate/staking",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/validate/staking.md",tags:[],version:"current",lastUpdatedAt:1658793961,formattedLastUpdatedAt:"Jul 26, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/validate/monitoring"},next:{title:"Troubleshooting",permalink:"/validate/troubleshooting"}},d={},u=[{value:"Glossary",id:"glossary",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Validator script submits staking transaction",id:"1-validator-script-submits-staking-transaction",level:2},{value:"2. Custodians identify Transaction ID",id:"2-custodians-identify-transaction-id",level:2},{value:"3. Wallet custodians confirm staking transaction",id:"3-wallet-custodians-confirm-staking-transaction",level:2},{value:"4. Custodians check that the staking transaction was executed",id:"4-custodians-check-that-the-staking-transaction-was-executed",level:2},{value:"5. After the elections cycle completes, script checks the size of validator stake to be returned",id:"5-after-the-elections-cycle-completes-script-checks-the-size-of-validator-stake-to-be-returned",level:2},{value:"6. Wallet custodians confirm the recover transaction",id:"6-wallet-custodians-confirm-the-recover-transaction",level:2}],p={toc:u};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"staking"},"Staking"),(0,r.kt)("h2",{id:"glossary"},"Glossary"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Validator")," - the entity performing validation of new blocks on the blockchain through a Proof-of-Stake system. Requires a multisignature wallet for staking."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Deployer")," - person who generates the public key for multisignature wallet, collects custodian public keys and deploys the wallet."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DevOps")," - IT Engineer who sets up validator node and scripts, generates Validator Custodian key"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Custodians")," - Multisignature wallet owners who submit and confirm transactions from multisignature wallet. Deployer may be one of the custodians."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Deployer")," seed phrase - the seed phrase, generated by Deployer, used to deploy the wallet."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Validator")," Custodian Key - public key generated by DevOps during Node setup."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Synced validator node with initialized wallet - all responsible persons have completed all steps up to and including step 4.4 of ",(0,r.kt)("a",{parentName:"li",href:"/validate/run-validator/run-mainnet-node"},"Run Validator page"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/develop/tools/everdev/command-line-interface/tonos-cli"},"TONOS-CLI")," installed and configured with the correct network for all  wallet custodians, including the Deployer - refer to ",(0,r.kt)("a",{parentName:"li",href:"/develop/smart-contract/multisignature-wallet"},"Multisignature Wallet page"),"."),(0,r.kt)("li",{parentName:"ul"},"Elections have started - ",(0,r.kt)("inlineCode",{parentName:"li"},"election_id")," parameter of the elector contract != 0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/ton-keys/msig.keys.json")," - file with validator custodian keypair."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/ton-keys/$(hostname -s).addr")," - file wallet address.")),(0,r.kt)("h2",{id:"1-validator-script-submits-staking-transaction"},"1. Validator script submits staking transaction"),(0,r.kt)("p",null,"Synced validator node should be continuously running validator script (see step 5 of ",(0,r.kt)("a",{parentName:"p",href:"/validate/run-validator/run-mainnet-node"},"Run Validator page"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./validator_msig.sh <STAKE> >> ./validator.log 2>&1\n")),(0,r.kt)("p",null,"Once election begins, validator script attempts to create a staking transaction, pledging ",(0,r.kt)("inlineCode",{parentName:"p"},"<STAKE>")," amount of tokens to the elections contract."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": to continuously participate in elections validator should have at least 2x ",(0,r.kt)("inlineCode",{parentName:"p"},"<STAKE>")," on its balance.")),(0,r.kt)("p",null,"When the transaction is successfully created, script extracts ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionId")," and prints it in terminal."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," if the multisignature wallet has only one custodian the transaction is confirmed automatically and steps 2 and 3 of this guide can be skipped. Go to step 4.")),(0,r.kt)("h2",{id:"2-custodians-identify-transaction-id"},"2. Custodians identify Transaction ID"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Custodians should know the address of their multisignature wallet.")),(0,r.kt)("p",null,"A number of custodian signatures are required for a transaction to be executed."),(0,r.kt)("p",null,"Custodians can request the list of transactions awaiting confirmation with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./tonos-cli run <multisig_address> getTransactions {} --abi SafeMultisigWallet.abi.json\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"multisig_address")," \u2013 address of the validator wallet."),(0,r.kt)("p",null,"If there are some transactions requiring confirmation, they will be displayed:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4266).Z,width:"1149",height:"363"})),(0,r.kt)("p",null,"Identify the ",(0,r.kt)("strong",{parentName:"p"},"transaction ID")," of the transaction where the ",(0,r.kt)("inlineCode",{parentName:"p"},'"dest"')," parameter equals 1:333333....3333333. This is the transaction to the elector contract."),(0,r.kt)("p",null,"Alternatively DevOps may send ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionId")," to other custodians directly."),(0,r.kt)("h2",{id:"3-wallet-custodians-confirm-staking-transaction"},"3. Wallet custodians confirm staking transaction"),(0,r.kt)("p",null,"The required number of validator wallet custodians confirm the transaction through TONOS-CLI with their seed phrases."),(0,r.kt)("p",null,"To create a confirmation message use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'./tonos-cli call <multisig_address> confirmTransaction \'{"transactionId":"<id>"}\' --abi SafeMultisigWallet.abi.json --sign "<seed_phrase>"\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"multisig_address")," \u2013 address of the validator wallet."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"transactionId")," \u2013 the ID of the transaction identified on the previous step."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"seed_phrase")," \u2013 custodian seed phrase."),(0,r.kt)("h2",{id:"4-custodians-check-that-the-staking-transaction-was-executed"},"4. Custodians check that the staking transaction was executed"),(0,r.kt)("p",null,"To confirm the transaction has been executed, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getTransactions")," command again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./tonos-cli run <multisig_address> getTransactions {} --abi SafeMultisigWallet.abi.json\n")),(0,r.kt)("p",null,"The staking transaction will no longer be displayed in the list of transactions awaiting confirmation."),(0,r.kt)("p",null,"You can also visit the ",(0,r.kt)("a",{parentName:"p",href:"https://ever.live/landing"},"ever.live")," explorer and find the message from your address to the 1:333333....3333333 address in the message list."),(0,r.kt)("h2",{id:"5-after-the-elections-cycle-completes-script-checks-the-size-of-validator-stake-to-be-returned"},"5. After the elections cycle completes, script checks the size of validator stake to be returned"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"election_id")," == 0 (that means no validator elections at the moment):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"script requests size of validator stake that can be returned from elector. Returned value will not be 0 if validator won previous elections and was a validator;"),(0,r.kt)("li",{parentName:"ol"},"if this value != 0, script submits new transaction from wallet to Elector contract with 1 token and ",(0,r.kt)("inlineCode",{parentName:"li"},"recover-stake")," payload, extracts ",(0,r.kt)("inlineCode",{parentName:"li"},"transactionId")," and prints it in terminal and then exits. ")),(0,r.kt)("h2",{id:"6-wallet-custodians-confirm-the-recover-transaction"},"6. Wallet custodians confirm the recover transaction"),(0,r.kt)("p",null,"If the number of custodian confirmations required to execute a transaction is > 1, repeat step 2 and 3 for this guide for the recover transaction."),(0,r.kt)("p",null,"Otherwise the transaction will be confirmed automatically and the stake will be returned from elector."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," It is recommended to run ",(0,r.kt)("inlineCode",{parentName:"p"},"validator_msig.sh")," periodically, for example with ",(0,r.kt)("inlineCode",{parentName:"p"},"cron")," utility. ",(0,r.kt)("inlineCode",{parentName:"p"},"validator_misg.sh")," will automatically make a stake and request it (stake + reward) back when it is available. Only custodian confirmations will have to be done manually in this case.")))}m.isMDXComponent=!0},4266:function(e,t,n){t.Z=n.p+"assets/images/confirmation-6b3a90251de2f52695db0f803657cc3e.png"}}]);