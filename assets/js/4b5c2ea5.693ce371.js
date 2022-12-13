"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[6710],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>k});var n=l(7294);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,o=function(e,t){if(null==e)return{};var l,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(l),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return l?n.createElement(k,r(r({ref:t},c),{},{components:l})):n.createElement(k,r({ref:t},c))}));function k(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=l.length,r=new Array(a);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<a;p++)r[p]=l[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},2469:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=l(7462),o=(l(7294),l(3905));const a={sidebar_position:0},r="Getting started",i={unversionedId:"develop/solidity-developing/getting-started",id:"develop/solidity-developing/getting-started",title:"Getting started",description:"Referenced repository//docs.ton.dev/86757ecb2/p/950f8a-write-smart-contract-in-solidity",source:"@site/../../src/develop/solidity-developing/getting-started.md",sourceDirName:"develop/solidity-developing",slug:"/develop/solidity-developing/getting-started",permalink:"/develop/solidity-developing/getting-started",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/solidity-developing/getting-started.md",tags:[],version:"current",lastUpdatedAt:1670934809,formattedLastUpdatedAt:"Dec 13, 2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Developing with Solidity",permalink:"/develop/solidity-developing"},next:{title:"TON Solidity Compiler",permalink:"/develop/solidity-developing/compiler"}},s={},p=[{value:"You will need:",id:"you-will-need",level:2},{value:"Recommended setup",id:"recommended-setup",level:2},{value:"Install the Compiler",id:"install-the-compiler",level:2},{value:"Compile",id:"compile",level:2},{value:"Compile",id:"compile-1",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Further Steps",id:"further-steps",level:2}],c={toc:p};function d(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Referenced repository: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ton.dev/86757ecb2/p/950f8a-write-smart-contract-in-solidity"},"https://docs.ton.dev/86757ecb2/p/950f8a-write-smart-contract-in-solidity"))),(0,o.kt)("h2",{id:"you-will-need"},"You will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A PC or laptop with a basic set of developer tools"),(0,o.kt)("li",{parentName:"ul"},"(Recommended: Ubuntu 18.04) Linux"),(0,o.kt)("li",{parentName:"ul"},"Windows"),(0,o.kt)("li",{parentName:"ul"},"MacOS"),(0,o.kt)("li",{parentName:"ul"},"A Solidity to TVM assembly compiler"),(0,o.kt)("li",{parentName:"ul"},"(Recommended) build from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler"},"sources")),(0,o.kt)("li",{parentName:"ul"},"download as a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler/releases/download/0.25/solc0.25.tar.gz"},"binary")),(0,o.kt)("li",{parentName:"ul"},"run in a docker ",(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/tonlabs/compilers"},"container")),(0,o.kt)("li",{parentName:"ul"},"Contract code in Solidity"),(0,o.kt)("li",{parentName:"ul"},"Use Wallet.sol below"),(0,o.kt)("li",{parentName:"ul"},"Use your own code"),(0,o.kt)("li",{parentName:"ul"},"Take one of the samples from the samples ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/samples/tree/master/solidity"},"repository")),(0,o.kt)("li",{parentName:"ul"},"Utilities to link and deploy contract to the blockchain"),(0,o.kt)("li",{parentName:"ul"},"build from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TVM-linker"},"sources")),(0,o.kt)("li",{parentName:"ul"},"download as a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler/releases"},"binary")),(0,o.kt)("li",{parentName:"ul"},"run in a docker ",(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/tonlabs/compilers"},"container"))),(0,o.kt)("h2",{id:"recommended-setup"},"Recommended setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OS: Ubuntu 18.04 is the easiest to run."),(0,o.kt)("li",{parentName:"ul"},"tip: running Ubuntu in VM works fine. Check out this ",(0,o.kt)("a",{parentName:"li",href:"https://docs.ton.dev/86757ecb2/v/0/p/69f25e-get-ubuntu-vm/b/744d13"},"install guide.")),(0,o.kt)("li",{parentName:"ul"},"Build Solidity compiler from the source (4-6 minutes)"),(0,o.kt)("li",{parentName:"ul"},"checkout from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler/"},"github")," (a few seconds);"),(0,o.kt)("li",{parentName:"ul"},"install dependencies as per ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/README.md"},"README")," (1-2 minutes)"),(0,o.kt)("li",{parentName:"ul"},"build the compiler from source per ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/README.md"},"README")," (~3-5 minutes)"),(0,o.kt)("li",{parentName:"ul"},"Contract source code:"),(0,o.kt)("li",{parentName:"ul"},"Use Wallet.sol below"),(0,o.kt)("li",{parentName:"ul"},"Command line tools, either of:"),(0,o.kt)("li",{parentName:"ul"},"download as a part of a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler/releases/download/0.25/tools0.25.tar.gz"},"binary")," package"),(0,o.kt)("li",{parentName:"ul"},"build ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TVM-linker/tree/master/tvm_linker"},"tvm_linker")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/tonos-cli"},"tonos-cli")," from sources")),(0,o.kt)("h2",{id:"install-the-compiler"},"Install the Compiler"),(0,o.kt)("p",null,"Install EverX Solidity Compiler from the open source ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler"},"repository"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"git clone git@github.com:tonlabs/TON-Solidity-Compiler.git\n cd compiler \n sh ./scripts/install_deps.sh\n mkdir build\n cd build\n cmake .. -DUSE_CVC4=OFF -DUSE_Z3=OFF -DTESTS=OFF -DCMAKE_BUILD_TYPE=Debug\n make -j8\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Get the contract source code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"pragma solidity >= 0.6.0;\n\n/// @title Simple wallet\n/// @author EverX\ncontract Wallet {\n    // Modifier that allows function to accept external call only if it was signed\n    // with contract owner's public key.\n    modifier checkOwnerAndAccept {\n        // Check that inbound message was signed with owner's public key.\n        // Runtime function that obtains sender's public key.\n        require(msg.pubkey() == tvm.pubkey(), 100);\n\n        // Runtime function that allows contract to process inbound messages spending\n        // its own resources (it's necessary if contract should process all inbound messages,\n        // not only those that carry value with them).\n        tvm.accept();\n        _;\n    }\n\n    /*\n     * Public functions\n     */\n\n    /// @dev Contract constructor.\n    constructor() public checkOwnerAndAccept { }\n\n    /// @dev Allows to transfer grams to the destination account.\n    /// @param dest Transfer target address.\n    /// @param value Nanograms value to transfer.\n    /// @param bounce Flag that enables bounce message in case of target contract error.\n    function sendTransaction(address payable dest, uint128 value, bool bounce) public view checkOwnerAndAccept {\n         // Runtime function that allows to make a transfer with arbitrary settings.\n        dest.transfer(value, bounce, 3);\n    }\n    \n    // Function to receive plain transfers.\n    receive() external payable {\n    }\n}\n")),(0,o.kt)("h2",{id:"compile"},"Compile"),(0,o.kt)("p",null,"Compile the contract code to TVM assembler with the Solidity Compiler."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<PATH_TO>/TON-Solidity-Compiler/compiler/build/solc/solc Wallet.sol\n")),(0,o.kt)("p",null,"The compiler produces Wallet.code and Wallet.abi.json to be used in the following steps."),(0,o.kt)("p",null,"Assemble and link with a standard library into TVM bytecode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<PATH_TO>/tvm_linker compile Wallet.code --lib <path-to>/TON-Solidity-Compiler/lib/stdlib_sol.tvm\n")),(0,o.kt)("p",null,"Binary code of your contract is recorded into",(0,o.kt)("inlineCode",{parentName:"p"},"<WalletAddress>.tvc"),"file, where",(0,o.kt)("inlineCode",{parentName:"p"},"<WalletAddress>"),"is a temporary address of the contract."),(0,o.kt)("h2",{id:"compile-1"},"Compile"),(0,o.kt)("p",null,"Compile the contract code to TVM assembler with the Solidity Compiler."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<PATH_TO>/TON-Solidity-Compiler/compiler/build/solc/solc Wallet.sol\n")),(0,o.kt)("p",null,"The compiler produces Wallet.code and Wallet.abi.json to be used in the following steps."),(0,o.kt)("p",null,"Assemble and link with a standard library into TVM bytecode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<PATH_TO>/tvm_linker compile Wallet.code --lib <path-to>/TON-Solidity-Compiler/lib/stdlib_sol.tvm\n")),(0,o.kt)("p",null,"Binary code of your contract is recorded into ",(0,o.kt)("inlineCode",{parentName:"p"},"WalletAddress.tvc")," file, where ",(0,o.kt)("inlineCode",{parentName:"p"},"WalletAddress")," is a temporary address of the contract. "),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"Let's deploy the contract to EverX development blockchain at",(0,o.kt)("inlineCode",{parentName:"p"},"net.ton.dev"),"."),(0,o.kt)("p",null,"1) Make sure tonos-cli is in $PATH:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export PATH=$PATH:<PATH_TO>/tonos-cli\n\ntonos-cli config --url net.ton.dev\n")),(0,o.kt)("p",null,"2) Generate address, keys and seed phrase for your contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"tonos-cli genaddr <WalletAddress>.tvc Wallet.abi.json --genkey Wallet.keys.json\n")),(0,o.kt)("p",null,"Address of your contract in the blockchain is located after ",(0,o.kt)("inlineCode",{parentName:"p"},"Raw address:")),(0,o.kt)("p",null,'IMPORTANT: Save this value - you will need it to deploy your contract and to work with it. We will refer to it as "',(0,o.kt)("inlineCode",{parentName:"p"},"YourAddress"),'" below. Seed phrase is also printed to stdout. Key pair will be generated and saved to the file Wallet.keys.json.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that you will need to send some coins to the address before the actual deployment. TON deploy is fee-based, so your new contract will be charged for this.")),(0,o.kt)("p",null,"3) Get some ","[test]"," coins to your account. Options are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ask a friend to sponsor your contract deployment;"),(0,o.kt)("li",{parentName:"ul"},"transfer some currency from your wallet account;"),(0,o.kt)("li",{parentName:"ul"},"ask in developer chats.")),(0,o.kt)("p",null,"4) Check the state of the pre-deployed contract. It should be ",(0,o.kt)("inlineCode",{parentName:"p"},"Uninit"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"tonos-cli account <YourAddress>\n")),(0,o.kt)("p",null,"5) Deploy your contract to the selected network (TON Labs devnet in the example) with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"tonos-cli deploy --abi Wallet.abi.json --sign Wallet.keys.json <contract>.tvc {<constructor_arguments>}\n")),(0,o.kt)("p",null,"If either of ",(0,o.kt)("inlineCode",{parentName:"p"},"--abi"),"\xa0or\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"--sign"),"\xa0options is omitted in parameters, it must be specified in the config file. See below."),(0,o.kt)("p",null,"6) Check the contract state again. This time, it is should be active."),(0,o.kt)("p",null,"7) Call the function of your contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'tonos-cli call \'<YourAddress>\' sendTransaction \'{"dest":"DestAddress", "value":1000000000, "bounce":true}\' --abi Wallet.abi.json --sign Wallet.keys.json\n')),(0,o.kt)("h2",{id:"further-steps"},"Further Steps"),(0,o.kt)("p",null,"Now your contract is up and running! You can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check out ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md"},"Solidity API for Everscale")),(0,o.kt)("li",{parentName:"ul"},"Check out more ",(0,o.kt)("a",{parentName:"li",href:"/develop/solidity-developing/samples"},"contract samples")),(0,o.kt)("li",{parentName:"ul"},"Explore in depth some aspects of smart-contract development for Everscale"),(0,o.kt)("li",{parentName:"ul"},"Build CLI utilities from source in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/tonos-cli"},"GitHub")," to make sure you have the latest version")))}d.isMDXComponent=!0}}]);