"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9955],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(f,c(c({ref:n},d),{},{components:t})):a.createElement(f,c({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9451:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),c=["components"],i={sidebar_position:8},s="Contract Management",l={unversionedId:"develop/tools/everdev/command-line-interface/contract-management",id:"develop/tools/everdev/command-line-interface/contract-management",title:"Contract Management",description:"Contract management in everdev gives you the ability to easily deploy and run",source:"@site/../../src/develop/tools/everdev/command-line-interface/contract-management.md",sourceDirName:"develop/tools/everdev/command-line-interface",slug:"/develop/tools/everdev/command-line-interface/contract-management",permalink:"/develop/tools/everdev/command-line-interface/contract-management",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tools/everdev/command-line-interface/contract-management.md",tags:[],version:"current",lastUpdatedAt:1663045150,formattedLastUpdatedAt:"Sep 13, 2022",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Network Tool",permalink:"/develop/tools/everdev/command-line-interface/network-tool"},next:{title:"DeBrowser",permalink:"/develop/tools/everdev/command-line-interface/debrowser"}},d={},u=[{value:"View contract info",id:"view-contract-info",level:2},{value:"Deploy contract",id:"deploy-contract",level:2},{value:"Run contract deployed on the network",id:"run-contract-deployed-on-the-network",level:2},{value:"Run contract locally on TVM",id:"run-contract-locally-on-tvm",level:4},{value:"Emulate transaction executor locally on TVM",id:"emulate-transaction-executor-locally-on-tvm",level:2},{value:"Top up contract balance from giver",id:"top-up-contract-balance-from-giver",level:2}],p={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contract-management"},"Contract Management"),(0,o.kt)("p",null,"Contract management in everdev gives you the ability to easily deploy and run\nyour smart contracts on blockchain network(s)."),(0,o.kt)("h2",{id:"view-contract-info"},"View contract info"),(0,o.kt)("p",null,"This command displays a detailed summary for a contract. Contract ABI and TVC files are required to run it. Account address on the network is calculated from TVC and signer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"everdev contract info abi_filename\n")),(0,o.kt)("p",null,"Result example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ everdev contract info SetcodeMultisigWallet.abi.json\n\nConfiguration\n\n  Network: dev (eri01.net.everos.dev, rbx01.net.everos.dev, gra01.net.everos.dev)\n  Signer:  test (public ad4bf7bd8da244932c52127a943bfa9217b6e215c1b3307272283c4d64f34486)\n\nAddress:   0:04dee1edc3f3d6b23529dcf5a6133627d06a39826bb14cc6334ffea272b15d50 (calculated from TVC and signer public)\nCode Hash: e2b60b6b602c10ced7ea8ede4bdf96342c97570a3798066f3fb50a4b2b27a208 (from TVC file)\nAccount:   Active\nBalance:   1919381000 (\u2248 2 tokens)\nDetails:   {\n    "json_version": 5,\n    "id": "0:04dee1edc3f3d6b23529dcf5a6133627d06a39826bb14cc6334ffea272b15d50",\n    "workchain_id": 0,\n    "boc": "te6ccgECZwEAGvQAAm/AAE3uHtw/PW ... 4MEDIoIQ/////byxkOAB8AH4R26Q3o (6912 bytes)",\n    "last_paid": 1619084675,\n    "bits": "0xcbc7",\n    "cells": "0x67",\n    "public_cells": "0x0",\n    "last_trans_lt": "0x3baac81fb43",\n    "balance": "0x72676e08",\n    "code": "te6ccgECXwEAGcoAAib/APSkICLAAZ ... wQMighD////9vLGQ4AHwAfhHbpDeg= (6614 bytes)",\n    "code_hash": "e2b60b6b602c10ced7ea8ede4bdf96342c97570a3798066f3fb50a4b2b27a208",\n    "data": "te6ccgEBBwEA7gAC361L972NokSTLF ... S/Xy90TNN3lUFM1WGpdlIcBQDAAAFA (249 bytes)",\n    "data_hash": "ec28abd34e75f40a66561bdc06b436cbe24d10d5da7519a7d5db41026c67155d",\n    "acc_type": 1,\n    "acc_type_name": "Active"\n}\n\n')),(0,o.kt)("p",null,"Network, signer, data and account address parameters can be overridden with the following options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ everdev contract info -h\nEverDev Version: 0.5.0\nUse: everdev contract info file [options]\nArgs:\n    file  ABI file\nOptions:\n    --help, -h     Show command usage\n    --network, -n  Network name\n    --signer, -s   Signer key name\n    --data, -d     Deploying initial data as name:value,...\n                   This data is required to calculate the account address and to\n                   deploy contract.\n                   Array values must be specified as [item,...]. Spaces are not\n                   allowed. If value contains spaces or special symbols "[],:"\n                   it must be enclosed in "" or \'\'\n    --address, -a  Account address\n')),(0,o.kt)("h2",{id:"deploy-contract"},"Deploy contract"),(0,o.kt)("p",null,"This command deploys a contract to the blockchain. Contract ABI and TVC files are required to run it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"everdev contract deploy abi_filename\n")),(0,o.kt)("p",null,"Command displays deployment summary and requests constructor function parameters. Result example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ everdev contract deploy Contract.abi.json\n\nConfiguration\n\n  Network: dev\n  Signer:  sign1\n\nAddress: 0:0435cb4e70585759ac514bb9fd1770caeb8c3941d882b5a16d589b368cb49261\n\nEnter constructor parameters\n\n  param1 (uint256[]): value\n\nEnter constructor parameters\n\n  param2 (uint8): value\n\nDeploying...\n")),(0,o.kt)("p",null,"Deploy parameters can be specified in the deploy command with the following options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ everdev contract deploy -h\nEverDev Version: 0.5.0\nUse: everdev contract deploy file function [options]\nArgs:\n    file      ABI file\n    function  Function name\nOptions:\n    --help, -h        Show command usage\n    --network, -n     Network name\n    --signer, -s      Signer key name\n    --input, -i       Function parameters as name:value,...\n                      Array values must be specified as [item,...]. Spaces are not\n                      allowed. If value contains spaces or special symbols "[],:"\n                      it must be enclosed in "" or \'\'\n    --data, -d        Deploying initial data as name:value,...\n                      This data is required to calculate the account address and to\n                      deploy contract.\n                      Array values must be specified as [item,...]. Spaces are not\n                      allowed. If value contains spaces or special symbols "[],:"\n                      it must be enclosed in "" or \'\'\n    --value, -v       Deploying balance value in nano tokens\n    --prevent-ui, -p  Prevent user interaction\n                      Useful in shell scripting e.g. on server or in some\n                      automating to disable waiting for the user input.\n                      Instead everdev will abort with error.\n                      For example when some parameters are missing in command line\n                      then ton dev will prompt user to input values for missing\n                      parameters (or fails if prevent-ui option is specified).\n\n')),(0,o.kt)("p",null,"Example of a 2/3 multisig wallet deployment command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"everdev contract deploy SetcodeMultisigWallet.abi.json constructor -n dev -s sign1 -i owners:[0xad4bf7bd8da244932c52127a943bfa9217b6e215c1b3307272283c4d64f34486,0x5c2e348c5caeb420a863dc5e972f897ebe5ee899a6ef2a8299aac352eca4380a,0x8534c46f7a135058773fa1298cb3a299a5ddd40dafe41cb06c64f274da360bfb],reqConfirms:2\n")),(0,o.kt)("h2",{id:"run-contract-deployed-on-the-network"},"Run contract deployed on the network"),(0,o.kt)("p",null,"This command runs any function of a contract deployed on the blockchain. Contract ABI and TVC files are required to run it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"everdev contract run abi_filename\n")),(0,o.kt)("p",null,"Command displays available functions and asks to select one. Result example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ everdev contract run Contract.abi.json\n\nConfiguration\n\n  Network: dev\n  Signer:  sign1\n\nAddress: 0:a4629d617df931d8ad86ed24f4cac3d321788ba082574144f5820f2894493fbc\n\nAvailable functions:\n\n  1) func1\n  2) func2\n\n  Select function (number): 2\n\nRunning...\n")),(0,o.kt)("p",null,"Network, signer and account address parameters can be overridden and function parameters specified in the command with the following options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ everdev contract run -h\nEverDev Version: 0.5.0\nUse: everdev contract run file function [options]\nArgs:\n    file      ABI file\n    function  Function name\nOptions:\n    --help, -h        Show command usage\n    --network, -n     Network name\n    --signer, -s      Signer key name\n    --data, -d        Deploying initial data as name:value,...\n                      This data is required to calculate the account address and to\n                      deploy contract.\n                      Array values must be specified as [item,...]. Spaces are not\n                      allowed. If value contains spaces or special symbols "[],:"\n                      it must be enclosed in "" or \'\'\n    --address, -a     Account address\n    --input, -i       Function parameters as name:value,...\n                      Array values must be specified as [item,...]. Spaces are not\n                      allowed. If value contains spaces or special symbols "[],:"\n                      it must be enclosed in "" or \'\'\n    --prevent-ui, -p  Prevent user interaction\n                      Useful in shell scripting e.g. on server or in some\n                      automating to disable waiting for the user input.\n                      Instead everdev will abort with error.\n                      For example when some parameters are missing in command line\n                      then ton dev will prompt user to input values for missing\n                      parameters (or fails if prevent-ui option is specified).\n')),(0,o.kt)("p",null,"Example of creating a transaction and confirming it in a multisig wallet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'everdev contract run SetcodeMultisigWallet.abi.json submitTransaction -n dev -s sign1 -i dest:255a3ad9dfa8aa4f3481856aafc7d79f47d50205190bd56147138740e9b177f3,value:500000000,bounce:true,allBalance:false,payload:""\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"everdev contract run SetcodeMultisigWallet.abi.json confirmTransaction -n dev -a 0:04dee1edc3f3d6b23529dcf5a6133627d06a39826bb14cc6334ffea272b15d50 -s sign2 -i transactionId:6954030467099431873\n")),(0,o.kt)("p",null,"To ",(0,o.kt)("strong",{parentName:"p"},"execute a contract without signing"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"signer none")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"everdev contract run --signer none --address <address>\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"everdev contract run -s none -a <address>\n")),(0,o.kt)("p",null,"In this case you have to explicitly specify address in run function because otherwise everdev may calculate a wrong address from empty pubkey."),(0,o.kt)("p",null,"To ",(0,o.kt)("strong",{parentName:"p"},"execute a smart contract function with bytes argument"),", the argument needs to be in hex format."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat bytes | xxd -p | tr -d '\\n' > bytes.hex\neverdev contract run contract.abi.json function_name -i value:$(cat bytes.hex)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Execute a smart contract function with structure arguments"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'everdev contract run shapes.tvc \\\n    savePoint \\\n    --address 0:540c1837656674d548c934258ddec9b5fd11b543da977b0016c14b5650bc7eb5 \\\n    --input \'{ "point": { "color": "red", "center": { "x": 1, "y": 2 } } }\'\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"or with an array of structures:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'everdev contract run shapes.tvc \\\n    savePoints \\\n    --address 0:540c1837656674d548c934258ddec9b5fd11b543da977b0016c14b5650bc7eb5 \\\n    --input \\\n        \'{ "points": [\n                { "color": "pink", "center": { "x": 4, "y": 5 }},\n                { "color": "gray", "center": { "x": 6, "y": 7 }}\n        ]}\'\n')),(0,o.kt)("h4",{id:"run-contract-locally-on-tvm"},"Run contract locally on TVM"),(0,o.kt)("p",null,"This command downloads a contract and runs it locally on TVM. Contract ABI and TVC files are required to run it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"everdev contract run-local abi_filename\n")),(0,o.kt)("p",null,"Command displays available functions and asks to select one. Result example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ everdev contract run-local Contract.abi.json\nConfiguration\n\n  Network: dev\n  Signer:  sign1\n\nAddress: 0:a4629d617df931d8ad86ed24f4cac3d321788ba082574144f5820f2894493fbc\n\nAvailable functions:\n\n  1) func1\n  2) func1\n\n  Select function (number):\n")),(0,o.kt)("p",null,"Network, signer and account address parameters can be overridden and function parameters specified in the command with the following options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ everdev contract run-local -h\nEverDev Version: 0.5.0\nUse: everdev contract run-local file function [options]\nArgs:\n    file      ABI file\n    function  Function name\nOptions:\n    --help, -h        Show command usage\n    --network, -n     Network name\n    --signer, -s      Signer key name\n    --data, -d        Deploying initial data as name:value,...\n                      This data is required to calculate the account address and to\n                      deploy contract.\n                      Array values must be specified as [item,...]. Spaces are not\n                      allowed. If value contains spaces or special symbols "[],:"\n                      it must be enclosed in "" or \'\'\n    --address, -a     Account address\n    --input, -i       Function parameters as name:value,...\n                      Array values must be specified as [item,...]. Spaces are not\n                      allowed. If value contains spaces or special symbols "[],:"\n                      it must be enclosed in "" or \'\'\n    --prevent-ui, -p  Prevent user interaction\n                      Useful in shell scripting e.g. on server or in some\n                      automating to disable waiting for the user input.\n                      Instead everdev will abort with error.\n                      For example when some parameters are missing in command line\n                      then ton dev will prompt user to input values for missing\n                      parameters (or fails if prevent-ui option is specified).\n')),(0,o.kt)("h2",{id:"emulate-transaction-executor-locally-on-tvm"},"Emulate transaction executor locally on TVM"),(0,o.kt)("p",null,"This command downloads a contract and emulates transaction execution locally on TVM. Contract ABI and TVC files are required to run it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"everdev contract run-executor abi_filename\n")),(0,o.kt)("p",null,"Command displays available functions and asks to select one. Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ everdev contract run-executor Contract.abi.json\n\nConfiguration\n\n  Network: dev\n  Signer:  sign1\n\nAddress: 0:a4629d617df931d8ad86ed24f4cac3d321788ba082574144f5820f2894493fbc\n\nAvailable functions:\n\n  1) func1\n  2) func2\n\n  Select function (number):\n")),(0,o.kt)("p",null,"Network, signer and account address parameters can be overridden and function parameters specified in the command with the following options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ everdev contract run-executor -h\nEverDev Version: 0.5.0\nUse: everdev contract run-executor file function [options]\nArgs:\n    file      ABI file\n    function  Function name\nOptions:\n    --help, -h        Show command usage\n    --network, -n     Network name\n    --signer, -s      Signer key name\n    --data, -d        Deploying initial data as name:value,...\n                      This data is required to calculate the account address and to\n                      deploy contract.\n                      Array values must be specified as [item,...]. Spaces are not\n                      allowed. If value contains spaces or special symbols "[],:"\n                      it must be enclosed in "" or \'\'\n    --address, -a     Account address\n    --input, -i       Function parameters as name:value,...\n                      Array values must be specified as [item,...]. Spaces are not\n                      allowed. If value contains spaces or special symbols "[],:"\n                      it must be enclosed in "" or \'\'\n    --prevent-ui, -p  Prevent user interaction\n                      Useful in shell scripting e.g. on server or in some\n                      automating to disable waiting for the user input.\n                      Instead everdev will abort with error.\n                      For example when some parameters are missing in command line\n                      then ton dev will prompt user to input values for missing\n                      parameters (or fails if prevent-ui option is specified).\n')),(0,o.kt)("h2",{id:"top-up-contract-balance-from-giver"},"Top up contract balance from giver"),(0,o.kt)("p",null,"If you have set a giver for a network, you can top up contract balances on it with the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"everdev contract topup abi_filename\n")),(0,o.kt)("p",null,"Defalt signer and giver parameters will be used, unless otherwise specified through the following options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ everdev contract topup -h\nEverDev Version: 0.5.0\nUse: everdev contract topup file [options]\nArgs:\n    file  ABI file\nOptions:\n    --help, -h     Show command usage\n    --address, -a  Account address\n    --network, -n  Network name\n    --signer, -s   Signer key name\n    --data, -d     Deploying initial data as name:value,...\n                   This data is required to calculate the account address and to\n                   deploy contract.\n                   Array values must be specified as [item,...]. Spaces are not\n                   allowed. If value contains spaces or special symbols "[],:"\n                   it must be enclosed in "" or \'\'\n    --value, -v    Deploying balance value in nano tokens\n')),(0,o.kt)("p",null,"To ",(0,o.kt)("strong",{parentName:"p"},"top up any known address")," without providing keys or contract files, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"everdev contract topup --address <address>\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"everdev ct -a <addrress>\n")))}m.isMDXComponent=!0}}]);