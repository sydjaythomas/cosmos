"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[7757],{2963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(4848),r=t(8453);const i={sidebar_position:3,title:"Code Generators"},o=void 0,a={id:"getting-started/generators",title:"Code Generators",description:"The COSMOS Code Generators are built into the scripts openc3.sh and openc3.bat that are included in the COSMOS project (more about projects).",source:"@site/docs/getting-started/generators.md",sourceDirName:"getting-started",slug:"/getting-started/generators",permalink:"/docs/getting-started/generators",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/getting-started/generators.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Code Generators"},sidebar:"defaultSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started/gettingstarted"},next:{title:"Upgrading",permalink:"/docs/getting-started/upgrading"}},l={},c=[{value:"Plugin Generator",id:"plugin-generator",level:2},{value:"Target Generator",id:"target-generator",level:2},{value:"Microservice Generator",id:"microservice-generator",level:2},{value:"Conversion Generator",id:"conversion-generator",level:2},{value:"Limits Response Generator",id:"limits-response-generator",level:2},{value:"Widget Generator",id:"widget-generator",level:2},{value:"Tool Generator",id:"tool-generator",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The COSMOS Code Generators are built into the scripts ",(0,s.jsx)(n.code,{children:"openc3.sh"})," and ",(0,s.jsx)(n.code,{children:"openc3.bat"})," that are included in the COSMOS ",(0,s.jsx)(n.a,{href:"https://github.com/OpenC3/cosmos-project",children:"project"})," (more about ",(0,s.jsx)(n.a,{href:"key_concepts#projects",children:"projects"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["If you followed the ",(0,s.jsx)(n.a,{href:"/docs/getting-started/installation",children:"Installation Guide"})," you should already be inside a cloned ",(0,s.jsx)(n.a,{href:"https://github.com/OpenC3/cosmos-project",children:"openc3-project"})," which is in your PATH (necessary for openc3.bat / openc3.sh to be resolved). To see all the available code generators type the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"% openc3.sh cli generate\nUnknown generator ''. Valid generators: plugin, target, microservice, widget, conversion,\nlimits_response, tool, tool_vue, tool_angular, tool_react, tool_svelte\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Training Available",type:"note",children:(0,s.jsxs)(n.p,{children:["If any of this gets confusing, contact us at ",(0,s.jsx)("a",{href:"mailto:support@openc3.com",children:(0,s.jsx)(n.a,{href:"mailto:support@openc3.com",children:"support@openc3.com"})}),". We have training classes available!"]})}),"\n",(0,s.jsx)(n.h2,{id:"plugin-generator",children:"Plugin Generator"}),"\n",(0,s.jsxs)(n.p,{children:["The plugin generator creates the scaffolding for a new COSMOS Plugin. It requires a plugin name and will create a new directory called ",(0,s.jsx)(n.code,{children:"openc3-cosmos-<name>"}),". For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"% openc3.sh cli generate plugin\nUsage: cli generate plugin <NAME>\n\n% openc3.sh cli generate plugin GSE\nPlugin openc3-cosmos-gse successfully generated!\n"})}),"\n",(0,s.jsx)(n.p,{children:"This creates the following files:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".gitignore"}),(0,s.jsx)(n.td,{children:"Tells git to ignore any node_modules directory (for tool development)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LICENSE.txt"}),(0,s.jsx)(n.td,{children:"License for the plugin. COSMOS Plugins should be licensed in a manner compatible with the AGPLv3, unless they are designed only for use with COSMOS Enterprise Edition."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"openc3-cosmos-gse.gemspec"}),(0,s.jsxs)(n.td,{children:["Gemspec file which should be edited to add user specific information like description, authors, emails, homepage, etc. The name of this file is used in compiling the plugin contents into the final corresponding gem file: e.g. openc3-cosmos-gse-1.0.0.gem. COSMOS plugins should always begin with the openc3-cosmos prefix to make them easily identifiable in the Rubygems repository. The file is formatted as documented at: ",(0,s.jsx)(n.a,{href:"https://guides.rubygems.org/specification-reference/",children:"https://guides.rubygems.org/specification-reference/"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"plugin.txt"}),(0,s.jsxs)(n.td,{children:["COSMOS specific file for Plugin creation. Learn more ",(0,s.jsx)(n.a,{href:"../configuration/plugins",children:"here"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Rakefile"}),(0,s.jsx)(n.td,{children:'Ruby Rakefile configured to support building the plugin by running "openc3.sh cli rake build VERSION=X.X.X" where X.X.X is the plugin version number'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"README.md"}),(0,s.jsx)(n.td,{children:"Markdown file used to document the plugin"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"While this structure is required, it is not very useful by itself. The plugin generator just creates the framework for other generators to use."}),"\n",(0,s.jsx)(n.h2,{id:"target-generator",children:"Target Generator"}),"\n",(0,s.jsx)(n.p,{children:"The target generator creates the scaffolding for a new COSMOS Target. It must operate inside an existing COSMOS plugin and requires a target name. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openc3-cosmos-gse % openc3.sh cli generate target\nUsage: cli generate target <NAME> (--ruby or --python)\n\nopenc3-cosmos-gse % openc3.sh cli generate target GSE\nTarget GSE successfully generated!\n"})}),"\n",(0,s.jsx)(n.p,{children:"This creates the following files and directories:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targets/GSE"}),(0,s.jsx)(n.td,{children:"Contains the configuration for the GSE target. The target name is always defined in all caps. This is typically the default name of the target, but well-designed targets will allow themselves to be renamed at installation."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targets/GSE/cmd_tlm"}),(0,s.jsx)(n.td,{children:"Contains the command and telemetry definition files for the GSE target. These files capture the format of the commands that can be sent to the target, and the telemetry packets that are expected to be received by COSMOS from the target. Note that the files in this folder are processed in alphabetical order by default. That can matter if you reference a packet in another file (it must already have been defined)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targets/GSE/cmd_tlm/cmd.txt"}),(0,s.jsxs)(n.td,{children:["Example ",(0,s.jsx)(n.a,{href:"../configuration/command",children:"command"})," configuration. Will need to be edited for the target specific commands."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targets/GSE/cmd_tlm/tlm.txt"}),(0,s.jsxs)(n.td,{children:["Example ",(0,s.jsx)(n.a,{href:"../configuration/telemetry",children:"telemetry"})," configuration. Will need to be edited for the target specific telemetry."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targets/GSE/lib"}),(0,s.jsxs)(n.td,{children:["Contains any custom code required by the target. Good examples of custom code are library files, custom ",(0,s.jsx)(n.a,{href:"../configuration/interfaces",children:"interface"})," classes and ",(0,s.jsx)(n.a,{href:"../configuration/protocols",children:"protocols"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targets/GSE/lib/gse.rb"}),(0,s.jsx)(n.td,{children:"Example library file which can be expanded as the target is developed. COSMOS recommends building up library methods to avoid code duplication and ease reuse."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targets/GSE/procedures"}),(0,s.jsxs)(n.td,{children:["This folder contains target specific procedures and helper methods which exercise functionality of the target. These procedures should be kept simple and only use the command and telemetry definitions associated with this target. See the ",(0,s.jsx)(n.a,{href:"../guides/script-writing#script-organization",children:"Scripting Guide"})," for more information."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targets/GSE/procedures/procedure.rb"}),(0,s.jsx)(n.td,{children:"Procedure with an example of sending a command and checking telemetry"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targets/GSE/public"}),(0,s.jsxs)(n.td,{children:["Put image files here for use in Telemetry Viewer Canvas Image widgets such as ",(0,s.jsx)(n.a,{href:"/docs/configuration/telemetry-screens#canvasimage",children:"CANVASIMAGE"})," and ",(0,s.jsx)(n.a,{href:"/docs/configuration/telemetry-screens#canvasimagevalue",children:"CANVASIMAGEVALUE"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targets/GSE/screens"}),(0,s.jsxs)(n.td,{children:["Contains telemetry ",(0,s.jsx)(n.a,{href:"/docs/configuration/telemetry-screens",children:"screens"})," for the target"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targets/GSE/screens/status.txt"}),(0,s.jsxs)(n.td,{children:["Example ",(0,s.jsx)(n.a,{href:"/docs/configuration/telemetry-screens",children:"screen"})," to display telemetry values"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targets/GSE/target.txt"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"../configuration/target",children:"Target"})," configuration such as ignoring command and telemetry items and how to process the cmd/tlm files"]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"It also updates the plugin.txt file to add the new target:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"VARIABLE gse_target_name GSE\n\nTARGET GSE <%= gse_target_name %>\nINTERFACE <%= gse_target_name %>_INT tcpip_client_interface.rb host.docker.internal 8080 8081 10.0 nil BURST\n  MAP_TARGET <%= gse_target_name %>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"microservice-generator",children:"Microservice Generator"}),"\n",(0,s.jsx)(n.p,{children:"The microservice generator creates the scaffolding for a new COSMOS Microservice. It must operate inside an existing COSMOS plugin and requires a target name. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openc3-cosmos-gse % openc3.sh cli generate microservice\nUsage: cli generate microservice <NAME> (--ruby or --python)\n\nopenc3-cosmos-gse % openc3.sh cli generate microservice background\nMicroservice BACKGROUND successfully generated!\n"})}),"\n",(0,s.jsx)(n.p,{children:"This creates the following files and directories:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"microservices/BACKGROUND"}),(0,s.jsx)(n.td,{children:"Contains the code and any necessary configuration for the BACKGROUND microservice. The name is always defined in all caps. This is typically the default name of the microservice, but well-designed microservices will allow themselves to be renamed at installation."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"microservices/BACKGROUND/background.rb"}),(0,s.jsx)(n.td,{children:"Fully functional microservice which will run every minute and log a message. Edit to implement any custom logic that you want to run in the background. Potential uses are safety microservices which can check and autonomously respond to complex events and take action (NOTE: Simple actions might just require a Limits Response)."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"It also updates the plugin.txt file to add the new microservice:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"MICROSERVICE BACKGROUND background-microservice\n  CMD ruby background.rb\n"})}),"\n",(0,s.jsx)(n.h2,{id:"conversion-generator",children:"Conversion Generator"}),"\n",(0,s.jsxs)(n.p,{children:["The conversion generator creates the scaffolding for a new COSMOS ",(0,s.jsx)(n.a,{href:"../configuration/telemetry#read_conversion",children:"Conversion"}),". It must operate inside an existing COSMOS plugin and requires both a target name and conversion name. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openc3-cosmos-gse % openc3.sh cli generate conversion\nUsage: cli generate conversion <TARGET> <NAME> (--ruby or --python)\n\nopenc3-cosmos-gse % openc3.sh cli generate limits_response GSE double\nConversion targets/GSE/lib/double_conversion.rb successfully generated!\nTo use the conversion add the following to a telemetry item:\n  READ_CONVERSION double_conversion.rb\n"})}),"\n",(0,s.jsx)(n.p,{children:"This creates the following files and directories:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targets/GSE/lib/double_conversion.rb"}),(0,s.jsx)(n.td,{children:"Fully functional Conversion which has an example implementation of the call() method to convert any existing COSMOS values."})]})})]}),"\n",(0,s.jsx)(n.p,{children:"As the generator states, to use this conversion code you must add it to a telemetry item. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:'TELEMETRY GSE STATUS BIG_ENDIAN "Telemetry description"\n  # Keyword      Name  BitSize Type   ID Description\n  APPEND_ID_ITEM ID    16      INT    1  "Identifier"\n  APPEND_ITEM    VALUE 32      FLOAT     "Value"\n    READ_CONVERSION double_conversion.rb\n  APPEND_ITEM    BOOL  8       UINT      "Boolean"\n    STATE FALSE 0\n    STATE TRUE 1\n  APPEND_ITEM    LABEL 0       STRING    "The label to apply"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"limits-response-generator",children:"Limits Response Generator"}),"\n",(0,s.jsxs)(n.p,{children:["The limits_response generator creates the scaffolding for a new COSMOS ",(0,s.jsx)(n.a,{href:"../configuration/telemetry#limits_response",children:"Limits Response"}),". It must operate inside an existing COSMOS plugin and requires both a target name and limits response name. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openc3-cosmos-gse % openc3.sh cli generate limits_response\nUsage: cli generate limits_response <TARGET> <NAME> (--ruby or --python)\n\nopenc3-cosmos-gse % openc3.sh cli generate limits_response GSE safe\nLimits response targets/GSE/lib/safe_limits_response.rb successfully generated!\nTo use the limits response add the following to a telemetry item:\n  LIMITS_RESPONSE safe_limits_response.rb\n"})}),"\n",(0,s.jsx)(n.p,{children:"This creates the following files and directories:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targets/GSE/lib/safe_limits_response.rb"}),(0,s.jsx)(n.td,{children:"Fully functional Limits Response which has an example implementation of the call() method and taking action based on the current limits state of the particular item"})]})})]}),"\n",(0,s.jsx)(n.p,{children:"As the generator states, to use this limits code you must add it to a telemetry item which has limits defined. In the generated GSE target, none of the items have limits defined so you first need to add limits and then add the response."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:'TELEMETRY GSE STATUS BIG_ENDIAN "Telemetry description"\n  # Keyword      Name  BitSize Type   ID Description\n  APPEND_ID_ITEM ID    16      INT    1  "Identifier"\n  APPEND_ITEM    VALUE 32      FLOAT     "Value"\n    LIMITS DEFAULT 1 ENABLED -80.0 -70.0 60.0 80.0 -20.0 20.0\n    LIMITS_RESPONSE safe_limits_response.rb\n  APPEND_ITEM    BOOL  8       UINT      "Boolean"\n    STATE FALSE 0\n    STATE TRUE 1\n  APPEND_ITEM    LABEL 0       STRING    "The label to apply"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"widget-generator",children:"Widget Generator"}),"\n",(0,s.jsxs)(n.p,{children:["The conversion generator creates the scaffolding for a new COSMOS Widget for use in ",(0,s.jsx)(n.a,{href:"../configuration/telemetry-screens",children:"Telemetry Viewer Screens"}),". For more information see the ",(0,s.jsx)(n.a,{href:"../guides/custom-widgets",children:"Custom Widget"})," guide. It must operate inside an existing COSMOS plugin and requires a widget name. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openc3-cosmos-gse % openc3.sh cli generate widget\nUsage: cli generate widget <SuperdataWidget>\n\nopenc3-cosmos-gse % openc3.sh cli generate widget HelloworldWidget\nWidget HelloworldWidget successfully generated!\nPlease be sure HelloworldWidget does not overlap an existing widget: https://docs.openc3.com/docs/configuration/telemetry-screens\n"})}),"\n",(0,s.jsx)(n.p,{children:"This creates the following files and directories:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"src/HelloworldWidget.vue"}),(0,s.jsx)(n.td,{children:"Fully functional widget which displays a simple value. This can be expanded using existing COSMOS Vue.js code to create any data visualization imaginable."})]})})]}),"\n",(0,s.jsx)(n.p,{children:"It also updates the plugin.txt file to add the new widget:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"WIDGET Helloworld\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tool-generator",children:"Tool Generator"}),"\n",(0,s.jsxs)(n.p,{children:["The tool generator creates the scaffolding for a new COSMOS Tool. It's It must operate inside an existing COSMOS plugin and requires a tool name. Developing a custom tool requires intensive knowledge of a Javascript framework such as Vue.js, Angular, React, or Svelt. Since all the COSMOS tools are built in Vue.js, that is the recommended framework for new tool development. For additional help on frontend development, see ",(0,s.jsx)(n.a,{href:"../development/developing#running-a-frontend-application",children:"Running a Frontend Application"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openc3-cosmos-gse % openc3.sh cli generate tool\nUsage: cli generate tool 'Tool Name'\n\nopenc3-cosmos-gse % openc3.sh cli generate widget DataVis\nTool datavis successfully generated!\nPlease be sure datavis does not conflict with any other tools\n"})}),"\n",(0,s.jsx)(n.p,{children:"This creates the following files and directories:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"src/App.vue"}),(0,s.jsx)(n.td,{children:"Basic Vue template to render the application."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"src/main.js"}),(0,s.jsx)(n.td,{children:"Entry point for the new tool which loads Vue, Vuetify, and other libraries."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"src/router.js"}),(0,s.jsx)(n.td,{children:"Vue component router."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"src/tools/datavis"}),(0,s.jsx)(n.td,{children:"Contains all the files necessary to serve a web-based tool named datavis. The name is always defined in all lowercase. Due to technical limitations, the toolname must be unique and cannot be renamed at installation."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"src/tools/datavis/datavis.vue"}),(0,s.jsx)(n.td,{children:"Fully functional tool which displays a simple button. This can be expanded using existing COSMOS Vue.js code to create any tool imaginable."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"package.json"}),(0,s.jsx)(n.td,{children:"Build and dependency definition file. Used by npm or yarn to build the tool."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vue.config.js"}),(0,s.jsx)(n.td,{children:"Vue configuration file used to serve the application in development and build the application."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"<dotfiles>"}),(0,s.jsx)(n.td,{children:"Various dotfiles which help configure formatters and tools for Javascript frontend developemnt"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["It also updates the plugin.txt file to add the new tool. The icon can be changed to any of the material design icons found ",(0,s.jsx)(n.a,{href:"https://pictogrammers.com/library/mdi/",children:"here"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:'TOOL datavis "DataVis"\n  INLINE_URL js/app.js\n  ICON mdi-file-cad-box\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);