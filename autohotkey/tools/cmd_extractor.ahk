SetWinDelay 500
WinWaitActive Command Extractor
Sleep 500
Send ^r ; Mode->Include Raw Data CE-3
Sleep 500
Click 575 135 ; Browse
WinWaitActive Select
Send cmd.bin{Enter}
WinWaitActive Command Extractor
Click 150 570 ; Process Data
WinWaitActive Warning
Sleep 500
Send {Enter}
WinWaitActive Log File
Send {Tab 2}{Enter} ; Cancel
WinWaitActive Command Extractor
sleep 500
Click 150 570 ; Process Data
WinWaitActive Warning
Sleep 500
Send {Enter} ; Overwrite
Sleep 500
Send {Enter} ; Warning Ok
Sleep 5000 ; Allow the file to be processed CE-1
Send {Enter}
WinWaitActive Command Extractor
Click 390 570 ; Open in Text Editor CE-2
Sleep 5000
Send !f{x}      ; Exit text editor
WinActivate Command Extractor
WinWaitActive Command Extractor
Send !f{a} ; Analyze logs
WinWaitActive Warning
Sleep 500
Send {Enter}
WinWaitActive Log File
Send {Tab 2}{Enter} ; Cancel
WinWaitActive Command Extractor
Send !f{a} ; Analyze logs
WinWaitActive Warning
Sleep 500
Send {Enter}
WinWaitActive Log File
Sleep 2000
Send {Enter} ; Done
WinWaitActive Packet Counts
Sleep 500
Send {Esc} ; Close packet counts window
WinWaitActive Command Extractor
Send ^q
