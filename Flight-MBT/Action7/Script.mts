' Change an existing flight according to the passed in 3 parameters
' Once at least one item is changed, the Check icon (update button) is enabled as shown in orange
' This action must start on the screen that shows the ORDER DETAILS.
'Typically that means you must run a SEARCH ORDER action first.
 @@ hightlight id_;_1917507096_;_script infofile_;_ZIP::ssf22.xml_;_
a=Parameter("Tickets")
b=Parameter("ClassOfService")
c=Parameter("PassengerName")

WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTicketsCombo").Select a @@ hightlight id_;_1904552888_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("flightClassCombo").Select b @@ hightlight id_;_1955290176_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set c @@ hightlight id_;_1955294928_;_script infofile_;_ZIP::ssf10.xml_;_

'Make sure we change something or we can't click on the update button since it is disabled.
If WpfWindow("Micro Focus MyFlight Sample").WpfButton("updateBtn").GetROProperty("enabled")  = True Then
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("updateBtn").Click
Else
	WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTicketsCombo").Select 4 ' we set to 2 so 4 should be a different value
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("updateBtn").Click
End  If

Wait 3

WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order update mesage").Output CheckPoint("Order updated") @@ hightlight id_;_1939452064_;_script infofile_;_ZIP::ssf19.xml_;_

' Flight GUI app ends on the Order Details confirmation screen showing the NEW SEARCH button.
