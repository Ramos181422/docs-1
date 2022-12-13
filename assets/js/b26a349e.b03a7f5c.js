"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=o(n),u=l,N=s["".concat(p,".").concat(u)]||s[u]||k[u]||r;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[s]="string"==typeof e?e:l,i[1]=d;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const r={title:"v2.1",slug:"/arch/abi/2.1"},i="Smart Contracts ABI 2.1 Specification",d={unversionedId:"arch/abi/2.1",id:"arch/abi/2.1",title:"v2.1",description:"ABI v2.1 introduces the new fixed message body layout while sections and types stay the same as in ABI v2.0. Read below.",source:"@site/../../src/arch/abi/2.1.md",sourceDirName:"arch/abi",slug:"/arch/abi/2.1",permalink:"/arch/abi/2.1",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/abi/2.1.md",tags:[],version:"current",lastUpdatedAt:1670934809,formattedLastUpdatedAt:"Dec 13, 2022",frontMatter:{title:"v2.1",slug:"/arch/abi/2.1"},sidebar:"tutorialSidebar",previous:{title:"v2.0",permalink:"/arch/abi/2.0"},next:{title:"v2.2",permalink:"/arch/abi/2.2"}},p={},o=[{value:"ABI JSON",id:"abi-json",level:2},{value:"Functions",id:"functions",level:2},{value:"Events",id:"events",level:2},{value:"Data",id:"data",level:2},{value:"Fields",id:"fields",level:2},{value:"Types",id:"types",level:2},{value:"<code>bool</code>",id:"bool",level:3},{value:"<code>tuple</code>",id:"tuple",level:3},{value:"<code>int&lt;N&gt;</code>",id:"intn",level:3},{value:"<code>uint&lt;N&gt;</code>",id:"uintn",level:3},{value:"<code>varint&lt;N&gt;</code>",id:"varintn",level:3},{value:"<code>varuint&lt;N&gt;</code>",id:"varuintn",level:3},{value:"<code>map(&lt;keyType&gt;,&lt;valueType&gt;)</code>",id:"mapkeytypevaluetype",level:3},{value:"<code>cell</code>",id:"cell",level:3},{value:"<code>address</code>",id:"address",level:3},{value:"<code>bytes</code>",id:"bytes",level:3},{value:"<code>fixedbytes&lt;N&gt;</code>",id:"fixedbytesn",level:3},{value:"<code>string</code>",id:"string",level:3},{value:"<code>optional(innerType)</code>",id:"optionalinnertype",level:3},{value:"<code>itemType[]</code>",id:"itemtype",level:3},{value:"Reference",id:"reference",level:2}],m={toc:o};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"smart-contracts-abi-21-specification"},"Smart Contracts ABI 2.1 Specification"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ABI v2.1")," introduces the new fixed message body layout while sections and types stay the same as in ",(0,l.kt)("a",{parentName:"p",href:"/arch/abi/2.0"},"ABI v2.0"),". Read below."),(0,l.kt)("h2",{id:"abi-json"},"ABI JSON"),(0,l.kt)("p",null,"This section describes schema of the smart contracts ABI represented in JSON format."),(0,l.kt)("p",null,"Full ABI schema in TypeScript notation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type Abi = {\n    version: string,\n    setTime?: boolean,\n    header?: Param[],\n    functions: Function[],\n    events?: Event[],\n    data?: Data[],\n    fields?: Param[],\n}\n\ntype Function = {\n    name: string,\n    inputs?: Param[],\n    outputs?: Param[],\n    id?: number,\n}\n\ntype Event = {\n    name: string,\n    inputs?: Param[],\n    id?: number,\n}\n\ntype Data = Param & {\n    key: number,\n}\n\ntype Param = {\n    name: string,\n    type: string,\n    components?: Param[],\n}\n")),(0,l.kt)("p",null,"Where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"version"),' contains string and uses semver semantics. Current version is "2.1".'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"functions")," describes all functions the smart contract can handle."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"events")," describes all external outbound messages (events) produces by smart contract."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data")," describes Hashmap with public data of the smart contract."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fields")," describes internal structure of the smart contracts data.")),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("p",null,"This section stays the same as in ABI 2.0"),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,"This section stays the same as in ABI 2.0"),(0,l.kt)("h2",{id:"data"},"Data"),(0,l.kt)("p",null,"This section stays the same as in ABI 2.0"),(0,l.kt)("h2",{id:"fields"},"Fields"),(0,l.kt)("p",null,"This is a new section introduced in ABI 2.1. It describes internal structure of the smart contracts data.\nThis section helps to decode contract data with TON-SDK function ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_abi.md#decode_account_data"},"decode_account_data")),(0,l.kt)("p",null,"Structure of the smart contract data is described as a list of variables names with corresponding data types.\nIt includes contract state variables and some internal contract specific hidden variables.\nThey are listed in the order in which they are stored in the data field of the contract.\nExample for a Solidity contract ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/5_BankClient.sol"},"BankClient"),":"),(0,l.kt)("p",null,"Contract state variables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"contract BankClient {\n    uint public creditLimit = 0;    // allowed credit limit;\n    uint public totalDebt = 0;      // contract total debt;\n    uint public balance = 0;        // contract balance;\n    uint public value = 0;          // inbound message value.\n}\n")),(0,l.kt)("p",null,"Fields section of the abi file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fields": [\n    {"name":"_pubkey","type":"uint256"},\n    {"name":"_timestamp","type":"uint64"},\n    {"name":"_constructorFlag","type":"bool"},\n    {"name":"creditLimit","type":"uint256"},\n    {"name":"totalDebt","type":"uint256"},\n    {"name":"balance","type":"uint256"},\n    {"name":"value","type":"uint256"}\n  ]\n}\n')),(0,l.kt)("h2",{id:"types"},"Types"),(0,l.kt)("h3",{id:"bool"},(0,l.kt)("inlineCode",{parentName:"h3"},"bool")),(0,l.kt)("p",null,"Boolean type."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cell"),(0,l.kt)("td",{parentName:"tr",align:null},"1 bit, ",(0,l.kt)("inlineCode",{parentName:"td"},"0")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON (accepts)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"0"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"true"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"false"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"false"'))))),(0,l.kt)("h3",{id:"tuple"},(0,l.kt)("inlineCode",{parentName:"h3"},"tuple")),(0,l.kt)("p",null,"Struct type, consists of fields of different types. All fields should be specified as an array in the ",(0,l.kt)("inlineCode",{parentName:"p"},"components")," section of the type."),(0,l.kt)("p",null,"For example, for structure ",(0,l.kt)("inlineCode",{parentName:"p"},"S"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"struct S {\n    uint32 a;\n    uint128 b;\n    uint64 c;\n}\n")),(0,l.kt)("p",null,"parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," of type ",(0,l.kt)("inlineCode",{parentName:"p"},"S")," would be described like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "components": [\n    {"name":"a","type":"uint32"},\n    {"name":"b","type":"uint128"},\n    {"name":"c","type":"uint64"}\n  ],\n  "name":"s",\n  "type":"tuple"\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cell"),(0,l.kt)("td",{parentName:"tr",align:null},"chain of cells with tuple data types encoded consistently",(0,l.kt)("br",null),"(without splitting value between cells)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"dictionary of struct field names with their values"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"a": 1, "b": 2, "c": 3}'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON (accepts)"),(0,l.kt)("td",{parentName:"tr",align:null},"mapping of struct field names with their values"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"a": 1, "b": 2, "c": 3}'))))),(0,l.kt)("h3",{id:"intn"},(0,l.kt)("inlineCode",{parentName:"h3"},"int<N>")),(0,l.kt)("p",null,"Fixed-sized signed integer, where ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," is a decimal bit length. Examples: ",(0,l.kt)("inlineCode",{parentName:"p"},"int8"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"int32"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"int256"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cell"),(0,l.kt)("td",{parentName:"tr",align:null},"N bit, big endian"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"string with hex representation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x12"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON (accepts)"),(0,l.kt)("td",{parentName:"tr",align:null},"number or string with decimal or hexadecimal representation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"12"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"0x10"),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"100"'))))),(0,l.kt)("h3",{id:"uintn"},(0,l.kt)("inlineCode",{parentName:"h3"},"uint<N>")),(0,l.kt)("p",null,"Fixed-sized unsigned integer, where N is a decimal bit length e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"uint8"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"uint32"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"uint256"),".\nProcessed like ",(0,l.kt)("inlineCode",{parentName:"p"},"int<N>"),"."),(0,l.kt)("h3",{id:"varintn"},(0,l.kt)("inlineCode",{parentName:"h3"},"varint<N>")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"New type introduced in 2.1 version.")),(0,l.kt)("p",null,"Variable-length signed integer. Bit length is between ",(0,l.kt)("inlineCode",{parentName:"p"},"log2(N)")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"8 * (N-1)"),", where ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," is equal to 16 or 32, e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"varint16"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"varint32"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cell"),(0,l.kt)("td",{parentName:"tr",align:null},"4 (N=16) of 5 (N=32) bits that encode byte length of the number ",(0,l.kt)("inlineCode",{parentName:"td"},"len"),(0,l.kt)("br",null),"followed by ",(0,l.kt)("inlineCode",{parentName:"td"},"len * 8")," bit number in big endian"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"string with hex representation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x12"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON (accepts)"),(0,l.kt)("td",{parentName:"tr",align:null},"number or string with decimal or hexadecimal representation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"12"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"0x10"),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"100"'))))),(0,l.kt)("h3",{id:"varuintn"},(0,l.kt)("inlineCode",{parentName:"h3"},"varuint<N>")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"New type introduced in 2.1 version.")),(0,l.kt)("p",null,"Variable-length unsigned integer with bit length equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"8 * N"),", where ",(0,l.kt)("inlineCode",{parentName:"p"},"N"),"is equal to 16 or 32 e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"varint16"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"varint32"),".\nProcessed like ",(0,l.kt)("inlineCode",{parentName:"p"},"varint<N>"),"."),(0,l.kt)("h3",{id:"mapkeytypevaluetype"},(0,l.kt)("inlineCode",{parentName:"h3"},"map(<keyType>,<valueType>)")),(0,l.kt)("p",null,"Hashtable mapping keys of ",(0,l.kt)("inlineCode",{parentName:"p"},"keyType")," to values of the ",(0,l.kt)("inlineCode",{parentName:"p"},"valueType"),", e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"map(int32, address)"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cell"),(0,l.kt)("td",{parentName:"tr",align:null},"1 bit (",(0,l.kt)("inlineCode",{parentName:"td"},"0")," - for empty mapping, otherwise ",(0,l.kt)("inlineCode",{parentName:"td"},"1"),") and ref to the cell with dictionary"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"dictionary of keys and values"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"0x1":"0x2"}'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON (accepts)"),(0,l.kt)("td",{parentName:"tr",align:null},"dictionary of keys and values"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"0x1":"0x2"}'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'{"2":"3","3":"55"}'))))),(0,l.kt)("h3",{id:"cell"},(0,l.kt)("inlineCode",{parentName:"h3"},"cell")),(0,l.kt)("p",null,"TVM Cell type."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cell"),(0,l.kt)("td",{parentName:"tr",align:null},"stored in a ref"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"binary hex data in base64"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"te6ccgEBAQEAEgAAH/////////////////////g="'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON (accepts)"),(0,l.kt)("td",{parentName:"tr",align:null},"binary hex data in base64"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"te6ccgEBAQEAAgAAAA=="'))))),(0,l.kt)("h3",{id:"address"},(0,l.kt)("inlineCode",{parentName:"h3"},"address")),(0,l.kt)("p",null,"Contract address type ",(0,l.kt)("inlineCode",{parentName:"p"},"address"),", consists of two parts: workchain id (wid) and address value."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cell"),(0,l.kt)("td",{parentName:"tr",align:null},"2 bits of address type, 1 bit of anycast, wid - 8 bit signed integer and address value - 256 bit unsigned integer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"decimal signed integer and unsigned hexadecimal integer with leading zeros separated by ",(0,l.kt)("inlineCode",{parentName:"td"},":")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"123:000000000000000000000000000000000000000000000000000000000001e0f3"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON (accepts)"),(0,l.kt)("td",{parentName:"tr",align:null},"decimal signed integer and unsigned hexadecimal integer with leading zeros separated by ",(0,l.kt)("inlineCode",{parentName:"td"},":")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"123:000000000000000000000000000000000000000000000000000000000001e0f3"'))))),(0,l.kt)("h3",{id:"bytes"},(0,l.kt)("inlineCode",{parentName:"h3"},"bytes")),(0,l.kt)("p",null,"Byte string of data."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cell"),(0,l.kt)("td",{parentName:"tr",align:null},"cell with data stored in a ref"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"binary hex data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"313233"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON (accepts)"),(0,l.kt)("td",{parentName:"tr",align:null},"binary hex data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"323334"'))))),(0,l.kt)("h3",{id:"fixedbytesn"},(0,l.kt)("inlineCode",{parentName:"h3"},"fixedbytes<N>")),(0,l.kt)("p",null,"Where N is a decimal byte length from 1 to 32. It is denoted in abi as ",(0,l.kt)("inlineCode",{parentName:"p"},"uint<M>"),",\nwhere ",(0,l.kt)("inlineCode",{parentName:"p"},"M")," is a bit length and ",(0,l.kt)("inlineCode",{parentName:"p"},"M = 8 * N"),".\nProcessed like ",(0,l.kt)("inlineCode",{parentName:"p"},"int<N>"),"."),(0,l.kt)("h3",{id:"string"},(0,l.kt)("inlineCode",{parentName:"h3"},"string")),(0,l.kt)("p",null,"New type introduced in 2.1 version."),(0,l.kt)("p",null,"String data."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cell"),(0,l.kt)("td",{parentName:"tr",align:null},"cell with data stored in a ref"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"string data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"hello"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON (accepts)"),(0,l.kt)("td",{parentName:"tr",align:null},"string data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"hello"'))))),(0,l.kt)("h3",{id:"optionalinnertype"},(0,l.kt)("inlineCode",{parentName:"h3"},"optional(innerType)")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"New type introduced in 2.1 version.")),(0,l.kt)("p",null,"Value of optional type ",(0,l.kt)("inlineCode",{parentName:"p"},"optional(innerType)")," can store a value of ",(0,l.kt)("inlineCode",{parentName:"p"},"innerType")," of be empty."),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"optional(string)"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cell"),(0,l.kt)("td",{parentName:"tr",align:null},"1 bit flag (",(0,l.kt)("inlineCode",{parentName:"td"},"1")," - value is stored, otherwise ",(0,l.kt)("inlineCode",{parentName:"td"},"0"),") and the value itself (according to ",(0,l.kt)("inlineCode",{parentName:"td"},"innerType"),") if it presents"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"according to ",(0,l.kt)("inlineCode",{parentName:"td"},"innerType")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," if it is empty"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"hello"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON (accepts)"),(0,l.kt)("td",{parentName:"tr",align:null},"according to ",(0,l.kt)("inlineCode",{parentName:"td"},"innerType")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," if it is empty"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"hello"'))))),(0,l.kt)("h3",{id:"itemtype"},(0,l.kt)("inlineCode",{parentName:"h3"},"itemType[]")),(0,l.kt)("p",null,"Array of the ",(0,l.kt)("inlineCode",{parentName:"p"},"itemType")," values. Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"uint256[]")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cell"),(0,l.kt)("td",{parentName:"tr",align:null},"32 unsigned bit length of the array, 1 bit flag (",(0,l.kt)("inlineCode",{parentName:"td"},"0")," if array is empty, otherwise ",(0,l.kt)("inlineCode",{parentName:"td"},"1"),") and dictionary of keys and values where key is 32 unsigned bit index and value is ",(0,l.kt)("inlineCode",{parentName:"td"},"itemType")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"list of ",(0,l.kt)("inlineCode",{parentName:"td"},"itemType")," values in ",(0,l.kt)("inlineCode",{parentName:"td"},"[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[1, 2, 3]"),", ",(0,l.kt)("inlineCode",{parentName:"td"},'["hello", "world"]'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON (accepts)"),(0,l.kt)("td",{parentName:"tr",align:null},"list of ",(0,l.kt)("inlineCode",{parentName:"td"},"itemType")," values in ",(0,l.kt)("inlineCode",{parentName:"td"},"[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[1, 2, 3]"),", ",(0,l.kt)("inlineCode",{parentName:"td"},'["hello", "world"]'))))),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-abi/blob/master/docs/ABI_2.1_spec.md"},"Everscale Smart Contracts ABI 2.1 Specification"))))}s.isMDXComponent=!0}}]);