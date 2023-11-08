"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[6038],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=m(a),c=r,g=p["".concat(s,".").concat(c)]||p[c]||u[c]||i;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3,title:"Targets"},l=void 0,o={unversionedId:"configuration/target",id:"configuration/target",title:"Targets",description:"Targets are the external embedded systems that COSMOS connects to. Targets are defined by the top level TARGET keyword in the plugin.txt file. Each target is self contained in a target directory named after the target. In the root of the target directory there is a configuration file named target.txt which configures the individual target.",source:"@site/docs/configuration/target.md",sourceDirName:"configuration",slug:"/configuration/target",permalink:"/docs/configuration/target",draft:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/configuration/target.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Targets"},sidebar:"defaultSidebar",previous:{title:"Plugins",permalink:"/docs/configuration/plugins"},next:{title:"Commands",permalink:"/docs/configuration/command"}},s={},m=[{value:"LANGUAGE",id:"language",level:2},{value:"REQUIRE",id:"require",level:2},{value:"IGNORE_PARAMETER",id:"ignore_parameter",level:2},{value:"IGNORE_ITEM",id:"ignore_item",level:2},{value:"COMMANDS",id:"commands",level:2},{value:"TELEMETRY",id:"telemetry",level:2},{value:"CMD_UNIQUE_ID_MODE",id:"cmd_unique_id_mode",level:2},{value:"TLM_UNIQUE_ID_MODE",id:"tlm_unique_id_mode",level:2}],d={toc:m},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Targets are the external embedded systems that COSMOS connects to. Targets are defined by the top level ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration/plugins#target-1"},"TARGET")," keyword in the plugin.txt file. Each target is self contained in a target directory named after the target. In the root of the target directory there is a configuration file named target.txt which configures the individual target."),(0,r.kt)("h1",{id:"targettxt-keywords"},"target.txt Keywords"),(0,r.kt)("h2",{id:"language"},"LANGUAGE"),(0,r.kt)("div",{class:"right"},"(Since 5.11.1)"),"**Programming language of the target interfaces and microservices**",(0,r.kt)("p",null,"The target language must be either Ruby or Python. The language determines how the target's interfaces and microservices are run. Note that both Ruby and Python still use ERB to perform templating."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Ruby or Python",(0,r.kt)("br",null),(0,r.kt)("br",null),"Valid Values: ",(0,r.kt)("span",{class:"values"},"ruby, python")),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("p",null,"Example Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"LANGUAGE python\n")),(0,r.kt)("h2",{id:"require"},"REQUIRE"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requires a Ruby file")),(0,r.kt)("p",null,"Ruby files must be required to be available to call in other code. Files are first required from the target's lib folder. If no file is found the Ruby system path is checked which includes the base openc3/lib folder."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Filename"),(0,r.kt)("td",{parentName:"tr",align:null},'Filename to require. For files in the target\'s lib directory simply supply the filename, e.g. "REQUIRE my_file". Files in the base OpenC3 lib directory also should just list the filename. If a file is in a folder under the lib directory then you must specify the folder name, e.g. "REQUIRE folder/my_file". The filename can also be an absolute path but this is not common. Note the ".rb" extension is optional when specifying the filename.'),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("p",null,"Example Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"REQUIRE limits_response.rb\n")),(0,r.kt)("h2",{id:"ignore_parameter"},"IGNORE_PARAMETER"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ignore the given command parameter")),(0,r.kt)("p",null,"Hint to other OpenC3 tools to hide or ignore this command parameter when processing the command. For example, Command Sender and Command Sequence will not display the parameter (by default) when showing the command and Script Runner code completion will not display the parameter."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of a command parameter. Note that this parameter will be ignored in ALL the commands it appears in."),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("p",null,"Example Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"IGNORE_PARAMETER CCSDS_VERSION\n")),(0,r.kt)("h2",{id:"ignore_item"},"IGNORE_ITEM"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ignore the given telemetry item")),(0,r.kt)("p",null,"Hint to other OpenC3 tools to hide or ignore this telemetry item when processing the telemetry. For example, Packet Viewer will not display the item (by default) when showing the packet."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Item name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of a telemetry item. Note that this item will be ignored in ALL the telemetry it appears in."),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("p",null,"Example Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"IGNORE_ITEM CCSDS_VERSION\n")),(0,r.kt)("h2",{id:"commands"},"COMMANDS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Process the given command definition file")),(0,r.kt)("p",null,"This keyword is used to explicitly add the command definition file to the list of command and telemetry files to process."),(0,r.kt)("div",{class:"note warning"},(0,r.kt)("p",null,"Usage of this keyword overrides automatic command and telemetry file discovery. If this keyword is used, you must also use the TELEMETRY keyword to specify the telemetry files to process.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Filename"),(0,r.kt)("td",{parentName:"tr",align:null},'Name of a command definition file in the target\'s cmd_tlm directory, e.g. "cmd.txt".'),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("p",null,"Example Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"COMMANDS inst_cmds_v2.txt\nTELEMETRY inst_tlm_v2.txt\n")),(0,r.kt)("h2",{id:"telemetry"},"TELEMETRY"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Process the given telemetry definition file")),(0,r.kt)("p",null,"This keyword is used to explicitly add the telemetry definition file to the list of command and telemetry files to process."),(0,r.kt)("div",{class:"note warning"},(0,r.kt)("p",null,"Usage of this keyword overrides automatic command and telemetry file discovery. If this keyword is used, you must also use the COMMAND keyword to specify the command files to process.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Filename"),(0,r.kt)("td",{parentName:"tr",align:null},'Name of a telemetry definition file in the target\'s cmd_tlm directory, e.g. "tlm.txt".'),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("p",null,"Example Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"COMMANDS inst_cmds_v2.txt\nTELEMETRY inst_tlm_v2.txt\n")),(0,r.kt)("h2",{id:"cmd_unique_id_mode"},"CMD_UNIQUE_ID_MODE"),(0,r.kt)("div",{class:"right"},"(Since 4.4.0)"),"**Command packet identifiers don't all share the same bit offset, size, and type**",(0,r.kt)("p",null,"Ideally all commands for a target are identified using the exact same bit offset, size, and type field in each command. If ANY command identifiers differ then this flag must be set to force a brute force identification method."),(0,r.kt)("div",{class:"note warning"},(0,r.kt)("p",null,"Using this mode significantly slows packet identification")),(0,r.kt)("h2",{id:"tlm_unique_id_mode"},"TLM_UNIQUE_ID_MODE"),(0,r.kt)("div",{class:"right"},"(Since 4.4.0)"),"**Telemetry packets identifiers don't all share the same bit offset, size, and type**",(0,r.kt)("p",null,"Ideally all telemetry for a target are identified using the exact same bit offset, size, and type field in each packet. If ANY telemetry identifiers differ then this flag must be set to force a brute force identification method."),(0,r.kt)("div",{class:"note warning"},(0,r.kt)("p",null,"Using this mode significantly slows packet identification")))}u.isMDXComponent=!0}}]);