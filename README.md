# WDL
WDL is a programming language, designed to make it easy to put a database in a webpage "Reducing the pain of putting a database in a webpage", without using Server-side scripting like SQL.
Usage (in ***HTML5***):
```html 
<SCRIPT SRC="example.org/wdl_manager.js"></SCRIPT>
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
Keyword | Definition
------- | ----------
`WDL_CREATETABLE` | Creates a table
`WDL_PROTECT TABLES` | Makes every table undeletable
`JS_EXECUTE` | Runs a string of JS code
`WDL_CREATEVARIABLE` | Creates a variable
`WDL_CREATECONSTANT` | Creates a constant
`WDL_ALTER` | Changes the value of a variable
`WDL_DELETETABLE` | Deletes a table
`WDL_ADDROW` | Adds a row to a table
`WDL_SAVE` | Saves a database permanently
`WDL_GET` | Gets a database from storage
