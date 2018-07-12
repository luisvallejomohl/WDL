# WDL
WDL is a programming language, designed to make it easy to put a database in a webpage, without using Server-side scripting like SQL.
Usage (in ***HTML***):
`<SCRIPT SRC="" TYPE="TEXT/JAVASCCRIPT"></SCRIPT>
<DATABASE>
\# WDL_code_goes_here \
</DATABASE>`
All commands in WDL *must* end with a space followed by an Enter.
```diff
 WDL_CREATETABLE example WDL_ADDROW groceries~{name:example,type:table}
 WDL_CREATETABLE example 
 WDL_ADDROW groceries~{name:example,type:table}
```
