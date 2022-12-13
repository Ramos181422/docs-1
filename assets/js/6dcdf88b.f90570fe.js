"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[8510],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>v});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(o),m=r,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(v,l(l({ref:t},p),{},{components:o})):n.createElement(v,l({ref:t},p))}));function v(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3373:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={title:"Solidity compiler",sidebar_position:1},l="Solidity",i={unversionedId:"develop/tools/everdev/command-line-interface/solidity",id:"develop/tools/everdev/command-line-interface/solidity",title:"Solidity compiler",description:"Create your first contract",source:"@site/../../src/develop/tools/everdev/command-line-interface/solidity.md",sourceDirName:"develop/tools/everdev/command-line-interface",slug:"/develop/tools/everdev/command-line-interface/solidity",permalink:"/develop/tools/everdev/command-line-interface/solidity",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tools/everdev/command-line-interface/solidity.md",tags:[],version:"current",lastUpdatedAt:1670934809,formattedLastUpdatedAt:"Dec 13, 2022",sidebarPosition:1,frontMatter:{title:"Solidity compiler",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"C++ Compiler",permalink:"/develop/tools/everdev/command-line-interface/cpp"},next:{title:"Evernode SE",permalink:"/develop/tools/everdev/command-line-interface/evernode-platform-startup-edition-se"}},s={},c=[{value:"Create your first contract",id:"create-your-first-contract",level:2},{value:"Compile",id:"compile",level:2},{value:"Ast",id:"ast",level:2},{value:"Version",id:"version",level:2},{value:"Update",id:"update",level:2},{value:"Set",id:"set",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"solidity"},"Solidity"),(0,r.kt)("h2",{id:"create-your-first-contract"},"Create your first contract"),(0,r.kt)("p",null,"This command creates a hello-world Solidity contract with comments that you can observe and compile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"everdev sol create Contract\n")),(0,r.kt)("h2",{id:"compile"},"Compile"),(0,r.kt)("p",null,"This command compiles and links a selected Solidity contract. After successful compilation you get .abi.json and .tvc files that you can later ",(0,r.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/add_contract_to_your_app"},"use in your DApps to deploy and run contract methods"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"everdev sol compile Contract.sol\n")),(0,r.kt)("p",null,"To save generated assembler code use ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," option (default is false)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"everdev sol compile Contract.sol -c path/to/output/file\n")),(0,r.kt)("p",null,"Assembler code will be saved in path/to/output/file with the extension ",(0,r.kt)("inlineCode",{parentName:"p"},"code")),(0,r.kt)("p",null,"You can specify the output files location with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-o")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"everdev sol compile Contract.sol -o path/to/output/file\n")),(0,r.kt)("h2",{id:"ast"},"Ast"),(0,r.kt)("p",null,"This command parses a ton-solidity file and creates an abstract syntax tree (AST) to the output directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"everdev sol ast Contract.sol\n")),(0,r.kt)("p",null,"To specify the ast format type, use ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--format")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"everdev sol ast-json Contract.sol -f <json | compact-json>\n")),(0,r.kt)("p",null,"To point the location of the output folder, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-o")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--output-dir")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"everdev sol ast-json Contract.sol -f <json | compact-json> -o path/to/output/file\n")),(0,r.kt)("h2",{id:"version"},"Version"),(0,r.kt)("p",null,"This command shows the currently installed Solidity compiler version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"everdev sol version\n")),(0,r.kt)("h2",{id:"update"},"Update"),(0,r.kt)("p",null,"This command updates the compiler and linker to the latest version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"everdev sol update\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attention!")," Use --force option to force update of components that do not update their version."),(0,r.kt)("h2",{id:"set"},"Set"),(0,r.kt)("p",null,"This command sets the compiler and linker versions and downloads them if needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"everdev sol set --compiler 0.38.0 --linker 0.23.54\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attention!")," Use --force option to force update of components that do not update their version."))}d.isMDXComponent=!0}}]);