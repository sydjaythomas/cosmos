"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[9014],{3227:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>h,toc:()=>o});var n=i(4848),a=i(8453);const s={title:"Telemetry Grapher"},r=void 0,h={id:"tools/tlm-grapher",title:"Telemetry Grapher",description:"Introductions",source:"@site/docs/tools/tlm-grapher.md",sourceDirName:"tools",slug:"/tools/tlm-grapher",permalink:"/docs/tools/tlm-grapher",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/tools/tlm-grapher.md",tags:[],version:"current",frontMatter:{title:"Telemetry Grapher"},sidebar:"defaultSidebar",previous:{title:"Table Manager",permalink:"/docs/tools/table-manager"},next:{title:"Telemetry Viewer",permalink:"/docs/tools/tlm-viewer"}},l={},o=[{value:"Introductions",id:"introductions",level:2},{value:"Telemetry Grapher Menus",id:"telemetry-grapher-menus",level:2},{value:"File Menu Items",id:"file-menu-items",level:3},{value:"Open Configuration",id:"open-configuration",level:4},{value:"Save Configuration",id:"save-configuration",level:4},{value:"Graph Menu Items",id:"graph-menu-items",level:3},{value:"Selecting Items",id:"selecting-items",level:2},{value:"Graph Window Management",id:"graph-window-management",level:2}];function d(e){const t={h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introductions",children:"Introductions"}),"\n",(0,n.jsx)(t.p,{children:"Telemetry Grapher is a graphing application that allows for one or more telemetry points per graph. It supports multiple graphs per screen which can be resized and reordered. Multiple configurations can be saved and restored for different situations."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Telemetry Grapher",src:i(5192).A+"",width:"1270",height:"927"})}),"\n",(0,n.jsx)(t.h2,{id:"telemetry-grapher-menus",children:"Telemetry Grapher Menus"}),"\n",(0,n.jsx)(t.h3,{id:"file-menu-items",children:"File Menu Items"}),"\n",(0,n.jsx)("img",{src:i(7574).A,alt:"File Menu",style:{float:"left","margin-right":"50px",height:"90px"}}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Open a saved configuration (graphs and items)"}),"\n",(0,n.jsx)(t.li,{children:"Save the current configuration"}),"\n",(0,n.jsx)(t.li,{children:"Reset the configuration (default settings)"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"open-configuration",children:"Open Configuration"}),"\n",(0,n.jsx)(t.p,{children:"The Open Configuration dialog displays a list of all saved configurations. You select a configuration and then click Ok to load it. You can delete existing configurations by clicking the Trash icon next to a configuration name."}),"\n",(0,n.jsx)(t.h4,{id:"save-configuration",children:"Save Configuration"}),"\n",(0,n.jsx)(t.p,{children:"The Save Configuration dialog also displays a list of all saved configurations. You click the Configuration Name text field, enter the name of your new configuration, and click Ok to save. You can delete existing configurations by clicking the Trash icon next to a configuration name."}),"\n",(0,n.jsx)(t.h3,{id:"graph-menu-items",children:"Graph Menu Items"}),"\n",(0,n.jsx)("img",{src:i(6346).A,alt:"File Menu",style:{float:"left","margin-right":"50px",height:"150px"}}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Add a new graph"}),"\n",(0,n.jsx)(t.li,{children:"Start / Resume graphing"}),"\n",(0,n.jsx)(t.li,{children:"Pause graph"}),"\n",(0,n.jsx)(t.li,{children:"Stop graph"}),"\n",(0,n.jsx)(t.li,{children:"Edit grapher settings"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Editing the grapher settings brings up a dialog to change settings affecting every graph in the Telemetry Grapher tool. Changing the Seconds Graphed changes the visible windows displaying graph points. The smaller of Seconds Graphed and Points Graphed will be used when calculating the number of points to display. Changing the Points Saved will affect performance of the browser window if set too high. The default of 1,000,000 points can store over 11.5 days of 1Hz data points."}),"\n",(0,n.jsx)(t.p,{children:"Editing an individual graph by clicking the pencil icon in title bar of the graph brings up the edit graph dialog."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Edit Graph",src:i(4252).A+"",width:"592",height:"766"})}),"\n",(0,n.jsx)(t.p,{children:"Editing the Start Date and Start Time will re-query the data to begin at the specified time. This operation can take several seconds depending on how far back data is requested. Similarly, specifying the End Date and End Time will limit the data request to the specified time. Leaving the End Date / End Time fields blank will cause Telemetry Grapher to continue to graph items in real-time as they arrive."}),"\n",(0,n.jsx)(t.p,{children:"Changing the Min Y and Max Y values simply sets the graph scale. Deleting the Min Y and Max Y values allows the graph to scale automatically as values arrive. Compare the following graph with the minimum set to 0 and the maximum set to 100 with the first graph image (auto-scale)."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Min Max",src:i(4755).A+"",width:"1247",height:"718"})}),"\n",(0,n.jsx)(t.h2,{id:"selecting-items",children:"Selecting Items"}),"\n",(0,n.jsx)(t.p,{children:"Selecting a target from the Select Target drop down automatically updates the available packets in the Select Packet drop down which updates the available items in the Select Item drop down. Clicking Add Item adds the item to the graph which immediately begins graphing."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Temp 1",src:i(2087).A+"",width:"1247",height:"829"})}),"\n",(0,n.jsx)(t.p,{children:"As time passes, the main graph fills up and starts scrolling while the overview graph at the bottom shows the entire history."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Temp 1 History",src:i(9619).A+"",width:"1247",height:"829"})}),"\n",(0,n.jsx)(t.p,{children:"Selecting a new item and adding it to the graph automatically fills the graph with history until the beginning of the first item. This allows you to add items to the graph incrementally and maintain full history."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Temp1 Temp2",src:i(2450).A+"",width:"1247",height:"829"})}),"\n",(0,n.jsx)(t.h2,{id:"graph-window-management",children:"Graph Window Management"}),"\n",(0,n.jsx)(t.p,{children:"All graphs can be moved around the browser window by clicking their title bar and moving them. Other graphs will move around intelligently to fill the space. This allows you order the graphs no matter which order they were created in."}),"\n",(0,n.jsx)(t.p,{children:"Each graph has a set of window buttons in the upper right corner. The first shrinks or grows the graph both horizontally and vertically to allow for 4 graphs in the same browser tab. Note that half height graphs no longer show the overview graph."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Four Graphs",src:i(9337).A+"",width:"1247",height:"710"})}),"\n",(0,n.jsx)(t.p,{children:"The second button shrinks or grows the graph horizontally so it will either be half or full width of the browser window. This allows for two full width graphs on top of each other."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Two Full Width",src:i(2190).A+"",width:"1247",height:"833"})}),"\n",(0,n.jsx)(t.p,{children:"The second button shrinks or grows the graph vertically so it will either be half or full height of the browser window. This allows for two full height graphs side by side."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Two Full Height",src:i(4925).A+"",width:"1247",height:"833"})}),"\n",(0,n.jsx)(t.p,{children:"The line button minimizes the graph to effectively hide it. This allows you to focus on a single graph without losing existing graphs."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Minimized",src:i(1625).A+"",width:"1247",height:"833"})}),"\n",(0,n.jsx)(t.p,{children:"The final X button closes the graph."})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7574:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/file_menu-1c05cfc08f9d07b3f7122d2fe1ad98ed428dc563d2c5d2edddbed71f46779eb8.png"},6346:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/graph_menu-289cbbb168622f661c1c98a7bd2c1b43f888e9c3560ba4e1d435ab62d0aad6de.png"},4252:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/edit_graph-9618076f837e0d358ea0bfbf503d43b377805d818370405536f5a1c049209e99.png"},9337:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/four_graphs-1aa5a7cb9ce51cec815fc9d8740b40e113bd171c4977711d47ef1e6daf02719e.png"},4755:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/graph_min_max-75be4a19a7e13a1b9b7a18a9b898b170c8ded7768b01ce6c6effd566ac8e071a.png"},2087:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/graph_temp1-028d8660c779136ff017b0b8a9fadb294e9ff478a65d7bd73032c3c2ed4f03d0.png"},2450:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/graph_temp1_temp2-ad650da0ddf1fb5c6e9764b737bfab3027f5abcb935ad86d9716dfdf13032dca.png"},9619:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/graph_temp1_time-53c18518755d1d1c816db7f0a67e26c5408aba32b644fda519b5ecf7a7ee9b27.png"},1625:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/minimized-47ddb9b9b68b47aae3d0a12cb39ab767adf446acbe213c0b5565c1bfaf8a463f.png"},5192:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/telemetry_grapher-3a37c074a25b7912a76d96fd46a1431d27202d71374f78c829f273e5cb342233.png"},4925:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/two_full_height-ccba2940b80345f3569ea47b7ddd3390c08195de91559f5586f85e36e411afd6.png"},2190:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/two_full_width-0116adbf994500a24d4717e002d32098f8d6197bcece510b84b90400f23feade.png"},8453:(e,t,i)=>{i.d(t,{R:()=>r});var n=i(6540);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);