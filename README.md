# WDL
WDL is a programming language, designed to make it easy to put a database in a webpage, without using Server-side scripting like SQL.
Usage (in ***HTML5***):
```html 
<SCRIPT SRC=""></SCRIPT>
<DATABASE>
\# WDL_code_goes_here \
</DATABASE>
```
All commands in WDL *must* end with a space followed by an Enter.
```
 WDL_CREATETABLE example WDL_ADDROW groceries~{name:example,type:table} # WDL_ADDROW is not a keyword
 ```
 
 ```
 WDL_CREATETABLE example 
 WDL_ADDROW groceries~{name:example,type:table} # Valid WDL
```
