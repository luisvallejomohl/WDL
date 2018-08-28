# WDL
WDL is a programming language, designed to make it easy to put a database in a webpage "Reducing the pain of putting a database in a webpage", without using Server-side scripting like SQL.
Usage (in ***HTML5***):
```HTML 
<SCRIPT SRC="https://example.org/WDL_manager.js"></SCRIPT>
<DATABASE>
# WDL_code_goes_here
</DATABASE>
```
All commands in WDL MUST end with a space followed by a line break
```
 WDL_CREATETABLE example WDL_ADDROW example~{name:example,type:table} # WDL_ADDROW_is_not_a_keyword
 ```
 
 ```
 WDL_CREATETABLE example 
 WDL_ADDROW example~{name:example,type:table} # Valid_WDL
```
Commands MUST NOT only more than 1 space:
```
WDL_CREATETABLE example 
WDL_ADDROW example~{name:example, type:table} # type:table}_is_not_a_keyword
```
```
WDL_CREATETABLE example 
WDL_ADDROW example~{name:example,type:table} # Valid_WDL
```
Comments MUST NOT contain spaces:
```
WDL_CREATETABLE example # Creates the table called example
WDL_ADDROW example~{name:example,type:table} # the_is_not_a_valid_keyword
```
```
WDL_CREATETABLE example # Creates_the_table_called_example
WDL_ADDROW example~{name:example,type:table} # Valid WDL
```
## WDL Quick reference
<TABLE>
<THEAD>
 <TH>Keyword</TH><TH>Definition</TH><TH>Status</TH>
 </THEAD>
 <TBODY>
  <TR><TD>WDL_CREATETABLE </TD><TD> Creates a table</TD></TR>
  <TR><TD>WDL_PROTECT * </TD><TD> Makes every table undeletable</TD></TR>
  <TR><TD>JS_EXECUTE</TD><TD> Runs a string of JS code</TD></TR>
  <TR><TD>WDL_CREATEVARIABLE </TD><TD> Creates a variable</TD></TR>
  <TR><TD>WDL_CREATECONSTANT </TD><TD> Creates a constant</TD></TR>
  <TR><TD>WDL_ALTER </TD><TD> Changes the value of a variable</TD></TR>
  <TR><TD>WDL_DELETETABLE</TD><TD>Deletes a table</TD></TR>
  <TR><TD>WDL_ADDROW</TD><TD> Adds a row to a table</TD></TR>
  <TR><TD>WDL_SAVE </TD><TD> Saves a database permanently</TD></TR>
  <TR><TD>WDL_GET </TD><TD> Gets a database from storage</TD></TR>
  <TR><TD>WDL_IF </TD><TD> Starts an IF condition</TD></TR>
  <TR><TD>WDL_ENDIF </TD><TD> Ends an IF condition</TD></TR>
  <TR><TD>WDL_UNDEFINED </TD><TD> A special value; the WDL equivalent of JS undefined</TD></TR>
 </TBODY>
 </TABLE>
