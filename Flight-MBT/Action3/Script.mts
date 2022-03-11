' Search for an existing order by one of three values which are passed in (only one should be non-empty)
'This action must start on the post-login screen that shows BOOK FLIGHT and SEARCH ORDER.

a=Parameter("OrderNumber")
b=Parameter("OrderDate")
c=Parameter("PassengerName")

'Get to BOOK FLIGHT and SEARCH ORDER screen if you aren't already there
If WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Exist (4) Then @@ hightlight id_;_2137773064_;_script infofile_;_ZIP::ssf9.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click
End If

'Select to search for an order
WpfWindow("Micro Focus MyFlight Sample").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER"

Reporter.ReportEvent micPass, "Search Order", "Num/Date/Name = " & a & "/" & b & "/" & c

' Only pass in one of these three values - only one should be non-empty
If a <> "" Then ' Process by Order Number
	WpfWindow("Micro Focus MyFlight Sample").WpfRadioButton("byNameOrDateRadio").Set
	WpfWindow("Micro Focus MyFlight Sample").WpfEdit("byNameWatermark").Set " " ' Clear out field
	WpfWindow("Micro Focus MyFlight Sample").WpfRadioButton("byNumberRadio").Set @@ hightlight id_;_2062105976_;_script infofile_;_ZIP::ssf3.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfEdit("byNumberWatermark").Set a
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click
ElseIf b <>  "" Then ' Process by Order Date
	WpfWindow("Micro Focus MyFlight Sample").WpfRadioButton("byNameOrDateRadio").Set
	WpfWindow("Micro Focus MyFlight Sample").WpfEdit("byNameWatermark").Set "" ' Clear out field
	WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("byDatePicker").SetDate b @@ hightlight id_;_1955569168_;_script infofile_;_ZIP::ssf15.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click
	If WpfWindow("Micro Focus MyFlight Sample").WpfTable("ordersDataGrid").RowCount > 0 Then
		WpfWindow("Micro Focus MyFlight Sample").WpfTable("ordersDataGrid").SelectRow 0 ' Select the first row
		WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT ORDER").Click
	Else
		Reporter.ReportEvent micFail, "Search Order", "Order(s) with Order Date " & b & " does not exist."
		WpfWindow("Micro Focus MyFlight Sample").WpfButton("BACK").Click
	End If
ElseIf c <> "" Then ' Process by Passenger Name
	WpfWindow("Micro Focus MyFlight Sample").WpfRadioButton("byNameOrDateRadio").Set @@ hightlight id_;_1918806040_;_script infofile_;_ZIP::ssf30.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("byDatePicker").Type micBack
	WpfWindow("Micro Focus MyFlight Sample").WpfEdit("byNameWatermark").Set c
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click
	If WpfWindow("Micro Focus MyFlight Sample").WpfTable("ordersDataGrid").RowCount > 0 Then
		WpfWindow("Micro Focus MyFlight Sample").WpfTable("ordersDataGrid").SelectRow 0 ' Select the first row
		WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT ORDER").Click
	Else
		Reporter.ReportEvent micFail, "Search Order", "Order with Passenger Name containing " & c & " does not exist."
		WpfWindow("Micro Focus MyFlight Sample").WpfButton("BACK").Click
	End If	
End If

If WpfWindow("Micro Focus MyFlight Sample").Dialog("Error").Exist (2) Then ' This popup occurs only with non-existant order nums @@ hightlight id_;_2137773064_;_script infofile_;_ZIP::ssf9.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").Dialog("Error").WinButton("OK").Click
	Reporter.ReportEvent micFail, "Search Order", "Order with Order Num " & a & " does not exist."
End If
 @@ hightlight id_;_853570_;_script infofile_;_ZIP::ssf24.xml_;_
' Flight GUI app ends on ORDER DETAILS screen with NEW SEARCH  button and the Trashcan icon available
' This action can then transition to either Change Order or Delete Order (or Logout).



