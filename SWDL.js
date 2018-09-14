/********************
 * javaScript Webpage Database Library (SWDL)
 * MPL v2.0
********************/
var protectedDatabases = [];
function WDL_CREATETABLE(db_name){
  window[db_name] = [];
}
function WDL_ADDROW(db_name, row){
  eval(db_name + ' = ' + row);
}
function WDL_REMOVEROW(db_name, row){
  eval(db_name + '[' + String(row) + ']' + ' = undefined');
}
function WDL_SAVE(db_name){
  localStorage[db_name] = JSON.stringify(window[db_name]);
}
function WDL_GET(db_name){
  window[db_name] = JSON.parse(localStorage.getItem(db_name));
}
function WDL_PROTECT(db_name){
  if(db_name === '*'){
    localStorage.__proto__.removeItem = function(tableName){
      throw tableName + 'is protected.'
    }
  }else{
    protectedDatabases.push(db_name);
  }
}
function WDL_DELETE(table_name){
  eval(table_name + ' = undefined');
}
function WDL_SELECTFROM(table, query, condition){
	var myTable = [];
	for(var item = 0; item < table.length; item++){
		if(condition){
			myTable.push(table[item][query]);
		};
	};
	return myTable;
}
function WDL_JOIN(){
    for(var item = 1; item < arguments.length; item++)
        for(var key in arguments[item])
            if(arguments[item].hasOwnProperty(key))
                arguments[0][key] = arguments[item][key];
    return arguments[0];
}
function WDL_CREATECONSTANT(constName, constValue){
  window[constName] = constValue;
}

const WDL_PRINT = console.table;
const SWDL = {
  version:{
		toString:function(){
			return 'v1.2.0';
		},
		major:1,
		minor:2,
		patch:0,
		fullName:'SWDL v1.2.0',
	},
}
