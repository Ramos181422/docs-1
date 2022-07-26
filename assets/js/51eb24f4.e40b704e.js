"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[6886],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,v=u["".concat(i,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(v,s(s({ref:t},p),{},{components:n})):r.createElement(v,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1170:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),s=["components"],l={sidebar_position:2},i="Evernode SE",d={unversionedId:"develop/tools/everdev/command-line-interface/evernode-platform-startup-edition-se",id:"develop/tools/everdev/command-line-interface/evernode-platform-startup-edition-se",title:"Evernode SE",description:"Start",source:"@site/../../src/develop/tools/everdev/command-line-interface/evernode-platform-startup-edition-se.md",sourceDirName:"develop/tools/everdev/command-line-interface",slug:"/develop/tools/everdev/command-line-interface/evernode-platform-startup-edition-se",permalink:"/develop/tools/everdev/command-line-interface/evernode-platform-startup-edition-se",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tools/everdev/command-line-interface/evernode-platform-startup-edition-se.md",tags:[],version:"current",lastUpdatedAt:1658793961,formattedLastUpdatedAt:"Jul 26, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Solidity compiler",permalink:"/develop/tools/everdev/command-line-interface/solidity"},next:{title:"SDK",permalink:"/develop/tools/everdev/command-line-interface/sdk"}},p={},c=[{value:"Start",id:"start",level:2},{value:"Version",id:"version",level:2},{value:"Set",id:"set",level:2},{value:"Reset",id:"reset",level:2},{value:"Update",id:"update",level:2},{value:"Stop",id:"stop",level:2},{value:"Info",id:"info",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"evernode-se"},"Evernode SE"),(0,a.kt)("h2",{id:"start"},"Start"),(0,a.kt)("p",null,"This command starts the Evernode SE container (Docker must be launched). When executed for the first time downloads the latest SE image from dockerhub."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev se start\n")),(0,a.kt)("p",null,"To make sure ArangoDB starts, ",(0,a.kt)("a",{parentName:"p",href:"/develop/tools/everdev/command-line-interface/evernode-platform-startup-edition-se#set"},"set the ArangoDB port"),"."),(0,a.kt)("h2",{id:"version"},"Version"),(0,a.kt)("p",null,"This command shows the default Evernode SE version and list of other available versions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev se version\n\ndefault: 0.24.12\nAvailable Versions: 0, 0.24, 0.24.5, 0.24.6, 0.24.8, 0.24.9, 0.24.10, 0.24.11, 0.24.12, latest\n")),(0,a.kt)("h2",{id:"set"},"Set"),(0,a.kt)("p",null,"This command switches Evernode SE to the specified version and port and downloads it, if it is missing. ",(0,a.kt)("strong",{parentName:"p"},"Attention! This command does not start TON OS SE, you need to run ",(0,a.kt)("inlineCode",{parentName:"strong"},"start")," command separately.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev se set --version 0.24.11 --port 2020\n")),(0,a.kt)("p",null,"To make sure ArangoDB starts, use ",(0,a.kt)("inlineCode",{parentName:"p"},"--db-port")," option to set the ArangoDB port:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev se set --db-port 8081\n")),(0,a.kt)("h2",{id:"reset"},"Reset"),(0,a.kt)("p",null,"This command resets the Evernode SE container (Docker must be launched) - restarts it from scratch with a clean database."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev se reset\n")),(0,a.kt)("h2",{id:"update"},"Update"),(0,a.kt)("p",null,"This command downloads the latest Evernode SE image (Docker must be launched) and starts it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev se update\n")),(0,a.kt)("h2",{id:"stop"},"Stop"),(0,a.kt)("p",null,"This command stops Evernode SE container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev se stop\n")),(0,a.kt)("h2",{id:"info"},"Info"),(0,a.kt)("p",null,"This command shows info about the downloaded versions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"everdev se info\n\nInstance  State    Version  GraphQL Port  ArangoDB Port  Docker Container            Docker Image\n--------  -------  -------  ------------  -------------  --------------------------  --------------------------\ndefault   running  0.24.12  2020                         tonlabs-tonos-se-ekaterina  tonlabs/local-node:0.24.12\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," The documentation in Everscale repository is a community effort. Therefore, everyone can contribute with proposals for new topics, suggest new content elements, participate in editing, and provide ideas that will be of great help for network development.\nPlease be informed that our documentation can be ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/everscale-org/docs/issues"},"edited via GitHub"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Also please make sure to consult our rules and rewards policy via ",(0,a.kt)("a",{parentName:"p",href:"https://docs.everscale.network/contribute/hot-streams/documentations"},"this link"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Feel free to join ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/+C2IpQXWZtCwxYzEy"},"Everscale Documentation Development Telegram chat")," and ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/+Vca1Gs6uPzIyNWVi"},"Everscale Developers Onboarding Telegram chat"),"!")))}m.isMDXComponent=!0}}]);