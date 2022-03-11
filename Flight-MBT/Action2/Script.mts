' Book a flight according to the passed in 7 parameters 
'This action must start on the post-login screen that shows BOOK FLIGHT and SEARCH ORDER.

a=Parameter("FlyFrom")
b=Parameter("FlyTo")
c=Parameter("OrderDate") ' must use format 15-Mar-2022
d=Parameter("ClassOfService")
e=Parameter("Tickets")
f=Parameter("PassengerName")
g=Parameter("SelectedRow")

WpfWindow("Micro Focus MyFlight Sample").Move 390,160 ' For better side-by-side viewing
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select a @@ hightlight id_;_2135054328_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select b @@ hightlight id_;_1948026184_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate c @@ hightlight id_;_2135059656_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select d
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select e
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectRow g
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set f
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click
wait 3

WpfWindow("Micro Focus MyFlight Sample").WpfObject("OrderNumberLabel").Check CheckPoint("OrderNumberCheckpoint") @@ hightlight id_;_2135382144_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfObject("OrderNumberLabel").Output CheckPoint("OrderCompletedNumber") @@ hightlight id_;_1929008192_;_script infofile_;_ZIP::ssf20.xml_;_

'h=Parameter("OrderNumberOut")
'msgbox "Created order number = " & h
Parameter("PassengerNameOut") = f
Parameter("OrderDateOut") = c

' Flight app ends on ORDER DETAILS screen with order number showing and NEW SEARCH button available
