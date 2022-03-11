' Click the Trashcan icon to delete whatever order has been selected
'This action must start after a Search Order has been completed.

WpfWindow("Micro Focus MyFlight Sample").WpfButton("WpfButton").Click @@ hightlight id_;_2058186184_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Dialog("Notification").WinButton("Yes").Click @@ hightlight id_;_2753606_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order deleted").Output CheckPoint("OrderDeletedNum") @@ hightlight id_;_2137223792_;_script infofile_;_ZIP::ssf3.xml_;_

'a=Parameter("OrderDeletedNum")
'msgbox "Deleted order number = " & a
' Flight app ends on BOOK FLIGHT screen with FIND FLIGHTS button available
