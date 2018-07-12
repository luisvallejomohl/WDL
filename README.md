# WDL
WDL is a programming language, designed to make it easy to put a database in a webpage, without using Server-side scripting like SQL.
Usage (in ***HTML5***):
```html 
<SCRIPT SRC=""></SCRIPT>
<DATABASE>
# WDL_code_goes_here </DATABASE>
```
All commands in WDL *must* end with a space followed by an Enter.
```
 WDL_CREATETABLE example WDL_ADDROW groceries~{name:example,type:table} # WDL_ADDROW is not a keyword
 ```
 
 ```
 WDL_CREATETABLE example 
 WDL_ADDROW groceries~{name:example,type:table} # Valid WDL
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
`WDL_SAVE` | Save a database permanently
`WDL_GET` | Get a database from storage
