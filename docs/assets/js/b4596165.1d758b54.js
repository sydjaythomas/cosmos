"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[8499],{5896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var i=n(4848),o=n(8453);const a={title:"Table Manager"},l=void 0,r={id:"tools/table-manager",title:"Table Manager",description:"Introduction",source:"@site/docs/tools/table-manager.md",sourceDirName:"tools",slug:"/tools/table-manager",permalink:"/docs/tools/table-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/tools/table-manager.md",tags:[],version:"current",frontMatter:{title:"Table Manager"},sidebar:"defaultSidebar",previous:{title:"Script Runner",permalink:"/docs/tools/script-runner"},next:{title:"Telemetry Grapher",permalink:"/docs/tools/tlm-grapher"}},d={},s=[{value:"Introduction",id:"introduction",level:2},{value:"File Menu Items",id:"file-menu-items",level:3},{value:"File Download",id:"file-download",level:2},{value:"Upload / Download",id:"upload--download",level:2},{value:"upload.rb",id:"uploadrb",level:3},{value:"download.rb",id:"downloadrb",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["Table Manager is a binary file editor. It takes binary file ",(0,i.jsx)(t.a,{href:"/docs/configuration/table",children:"definitions"})," similar to the COSMOS command packet definitions and builds a GUI to edit the fields in the binary file."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Table Manager",src:n(5328).A+"",width:"1272",height:"849"})}),"\n",(0,i.jsx)(t.h3,{id:"file-menu-items",children:"File Menu Items"}),"\n",(0,i.jsx)("img",{src:n(5167).A,alt:"File Menu",style:{float:"left","margin-right":"50px",height:"150px"}}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a new binary based on ",(0,i.jsx)(t.a,{href:"/docs/configuration/table",children:"definition"})]}),"\n",(0,i.jsx)(t.li,{children:"Open an existing binary"}),"\n",(0,i.jsx)(t.li,{children:"Save the current binary"}),"\n",(0,i.jsx)(t.li,{children:"Rename the current binary"}),"\n",(0,i.jsx)(t.li,{children:"Delete the current binary"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"file-download",children:"File Download"}),"\n",(0,i.jsxs)(t.p,{children:["The three buttons next to File Download download the binary file, the ",(0,i.jsx)(t.a,{href:"/docs/configuration/table",children:"definition"})," file, and the report file. The binary is the raw bits defined by the table. The ",(0,i.jsx)(t.a,{href:"/docs/configuration/table",children:"definition"})," is the structure definition of those raw bits. The report file is a Table Manager generated CSV that shows all the table values in the binary."]}),"\n",(0,i.jsx)(t.h2,{id:"upload--download",children:"Upload / Download"}),"\n",(0,i.jsxs)(t.p,{children:["Table Manager has the ability to directly call a COSMOS script to upload a binary file to a target or download a file into Table Manager. If a file called ",(0,i.jsx)(t.code,{children:"upload.rb"})," is found in the Target's procedures directory then the Upload button becomes active. If a file called ",(0,i.jsx)(t.code,{children:"download.rb"})," is found in the Target's procedures directory then the Download button becomes active. The B/G button indicates whether to run the upload / download scripts in the background. If you uncheck this box a new Script Runner window will show the line by line execution of the script."]}),"\n",(0,i.jsx)(t.h3,{id:"uploadrb",children:"upload.rb"}),"\n",(0,i.jsxs)(t.p,{children:["The COSMOS demo creates the following ",(0,i.jsx)(t.code,{children:"upload.rb"})," script. Note that the ",(0,i.jsx)(t.code,{children:"ENV['TBL_FILENAME']"})," is set to the name of the table file and the script uses ",(0,i.jsx)(t.code,{children:"get_target_file"})," to get access to the file. At this point the logic to upload the file to the target is specific to the commanding defined by the target but an example script is given."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:'# TBL_FILENAME is set to the name of the table file\nputs "file:#{ENV[\'TBL_FILENAME\']}"\n# Open the file\nfile = get_target_file(ENV[\'TBL_FILENAME\'])\nbuffer = file.read\n# puts buffer.formatted\n# Implement custom commanding logic to upload the table\n# Note that buffer is a Ruby string of bytes\n# You probably want to do something like:\n# buf_size = 512 # Size of a buffer in the upload command\n# i = 0\n# while i < buffer.length\n#   # Send a part of the buffer\n#   # NOTE: triple dots means start index, up to but not including, end index\n#   #   while double dots means start index, up to AND including, end index\n#   cmd("TGT", "UPLOAD", "DATA" => buffer[i...(i + buf_size)])\n#   i += buf_size\n# end\nfile.delete\n'})}),"\n",(0,i.jsx)(t.h3,{id:"downloadrb",children:"download.rb"}),"\n",(0,i.jsxs)(t.p,{children:["The COSMOS demo creates the following ",(0,i.jsx)(t.code,{children:"download.rb"})," script. Note that the ",(0,i.jsx)(t.code,{children:"ENV['TBL_FILENAME']"})," is set to the name of the table file to OVERWRITE and the script uses ",(0,i.jsx)(t.code,{children:"put_target_file"})," to get access to the file. At this point the logic to download the file from the target is specific to the commanding defined by the target but an example script is given."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"# TBL_FILENAME is set to the name of the table file to overwrite\nputs \"file:#{ENV['TBL_FILENAME']}\"\n# Download the file\n# Implement custom commanding logic to download the table\n# You probably want to do something like:\nbuffer = ''\n# i = 1\n# num_segments = 5 # calculate based on TBL_FILENAME\n# table_id = 1  # calculate based on TBL_FILENAME\n# while i < num_segments\n#   # Request a part of the table buffer\n#   cmd(\"TGT DUMP with TABLE_ID #{table_id}, SEGMENT #{i}\")\n#   buffer += tlm(\"TGT DUMP_PKT DATA\")\n#   i += 1\n# end\nput_target_file(ENV['TBL_FILENAME'], buffer)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5167:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/file_menu-d672c1f8064e5f847a2464397c1e75ee423452f1ba4a7d0861319bc7c7891196.png"},5328:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/table_manager-816d7a683e6883cb8049e5ec8ffef3076b37a489edcc0e5331bc5d81ab506da2.png"},8453:(e,t,n)=>{n.d(t,{R:()=>l});var i=n(6540);const o={},a=i.createContext(o);function l(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);