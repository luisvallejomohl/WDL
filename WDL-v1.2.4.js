var item = 0;
function WDL_ISCONSTANT(name){
	if(window[name] == eval(name)){
		return false;
	}else{
		return true;
	};
};
const SOURCEDDATABASES = document.querySelectorAll('link[rel="database"]');
while(item < SOURCEDDATABASES.length){
	var WDLSource = SOURCEDDATABASES[item].href;
	XMLHttpRequest 
		? XMLRequest = new XMLHttpRequest() 
		: XMLRequest = new ActiveXObject('Microsoft.XMLHTTP');
	XMLRequest.open('GET', WDLSource, false);
	XMLRequest.send();
	document.querySelector(SOURCEDDATABASES[item].attributes.location.value).innerHTML += '<DATABASE>\n' + XMLRequest.responseText + '</DATABASE>'
	item++;
};
var a = 'var protectedDatabases = [];';
var M = [];
var databases = document.querySelectorAll('database');
for(var jtem = 0; jtem < databases.length; jtem++){
	var database = databases[jtem].textContent;
	var k = database.split(' ');
	for(var item = 0; item < k.length; item+=2){
		var afterKeyword = k[item + 1];
		if(k[item] === '\nJS_EXECUTE'){
			a += afterKeyword;
		}else if(k[item] == '\nWDL_DEFFUNC'){
			a += 'function ' + afterKeyword + '{';
		}else if(k[item] == '\nWDL_RETURN'){
			a += 'return ' + afterKeyword;
		}else if(k[item] == '#'){
			a += ' /*' + afterKeyword + '*/';
		}else if(k[item] == '\nWDL_CREATETABLE'){
			if(typeof window[afterKeyword] !== 'undefined'){
				console.error(afterKeyword + ' is defined. Use WDL_ALTER instead.');
			}else{
				a += 'var ' + afterKeyword + ' = [];';
			};
		}else if(k[item] == '\nWDL_DESTROY'){
			if(typeof window[afterKeyword] === 'undefined'){
				console.error(afterKeyword + ' is already undefined.');
			}else{
				a += afterKeyword + ' = undefined;';
			};
		}else if(k[item] == '\nWDL_CREATECONSTANT'){
			'const ' + afterKeyword.split('~')[0] + ' = ' + afterKeyword.split('~')[1] + ';';
		}else if(k[item] == '\nWDL_CREATEVARIABLE'){
			if(typeof window[afterKeyword] === 'undefined'){
				a += 'window.' + afterKeyword.split('~')[0] + ' = ' + afterKeyword.split('~')[1] + ';';
			}else{
				console.error(afterKeyword.split('~')[0] + ' is defined. Use WDL_ALTER instead.');
			};
		}else if(k[item] == '\nWDL_SELECTFROM'){
			a += 'var selectFromReturnValue = []; for(var item = 0; item < ' + afterKeyword.split('~')[0] + '.length; item++){if(' + afterKeyword.split('~')[2] + '){selectFromReturnValue.push(' + afterKeyword.split('~')[0] + '.' + afterKeyword.split('~')[1] + ')}}'
		}else if(k[item] == '\nWDL_ALTER'){
			a += 'if(WDL_ISCONSTANT(\'' + afterKeyword.split('~')[0] + '\')){console.warn(\'WDL: ' + afterKeyword.split('~')[0] + ' is a constant. Declaration dropped.\')}else{';
			 a += afterKeyword.split('~')[0] + ' = ' + afterKeyword.split('~')[1] + '}';
		}else if(k[item] == '\nWDL_SAVE'){
			a += 'localStorage.setItem(\'' + afterKeyword + '\', JSON.stringify(' + afterKeyword + '));';
		}else if(k[item] == '\nWDL_ADDROW'){
			var tableName = afterKeyword.split('~')[0];
			var newRow = afterKeyword.split('~')[1];
			a += tableName + '.push(' + newRow + ');';
		}else if(k[item] == '\nWDL_GET'){
			a += 'var ' + afterKeyword + ' = localStorage.getItem(\'' + afterKeyword + '\');' + afterKeyword + ' = JSON.parse(' + afterKeyword + ');';
		}else if(k[item] == '\nWDL_PRINT'){
			a += 'console.table(\'' + afterKeyword + '\');';
		}else if(k[item] == '\nWDL_DELETE'){
			a += 'if(protectedDatabases.indexOf(\'' + afterKeyword + '\') == -1){\
				localStorage.removeItem(\'' + afterKeyword + '\');\
			}else{\
				console.warn(\'' + afterKeyword + ' is protected);\
			};';
		}else if(k[item] == '\nWDL_PROTECT'){
			if(k[item + 1] == '*' || k[item + 1] == 'TABLES'){
				localStorage.__proto__.removeItem = function(){};
			}else{
				a += 'protectedDatabases.push(\'' + k[item + 1] + '\');';
			};
		}else if(k[item] == '\nWDL_IF'){
			a += 'if(' + afterKeyword + '){';
		}else if(k[item] == '\nWDL_ENDIF' || k[item] == '\nWDL_ENDLOOP' || k[item] == '\nWDL_ENDFDEF'){
			a += '};';
		}else if(k[item] == '\nWDL_LOOP'){
			a += 'for(var item = 0; item < ' + afterKeyword + '; item++){';
		}else if(k[item] == '\nWDL_CALLWITH'){
			a += afterKeyword.split('~')[0] + '(' + afterKeyword.split('~')[1] + ');'
		}else{
			console.warn('WDL: Mysterious keyword ' + k[item] + '. Command ignored.');
		};
	};
	M.push(a);
	a = 'var protectedDatabases = [];';	
	databases[jtem].style.display = 'none';
};
const WDL_UNDEFINED = undefined;
const WDL_PI = 3.1415926535897932384626433832795;
const WDL_E = 2.718281828459045235386;
const WDL_PHI = (1 + Math.sqrt(5))/2;
const WDL_TRUE = true;
const WDL_FALSE = false;
const WDL_DATE = new Date();
function WDL_ROOT(a, b){
	return Math.sqrt(a, b);
};
function WDL_COS(a){
	return Math.cos(a);
};
function WDL_SIN(a){
	return Math.sin(a);
};
function WDL_TAN(a){
	return Math.tan(a);
};
function WDL_ARCCOS(a){
	return Math.acos(a);
};
function WDL_ARCSIN(a){
	return Math.arcsin(a);
};
function WDL_ARCTAN(a){
	return Math.arctan(a);
};
function WDL_STRINGIFY(a){
	if(typeof a === undefined){
		return 'WDL_UNDEFINED';
	}else{
		if(typeof a == 'string'){
			return a;
		}else if(typeof a == 'function'){
			return a.toString();//.toString() is the best converter to strings for functions
		}else if(a === true){
			return 'WDL_TRUE'
		}else if(a === false){
			return 'WDL_FALSE';
		}else{
			return JSON.stringify(a); //Let JSON stringify a so that the return value is not '[object Object]'
		};
	};
};
function WDL_EVAL(data){
	switch(data){
		case 'WDL_UNDEFINED': return undefined; break; //Return undefined in the input is WDL_UNDEFINED
		case 'WDL_TRUE': return true; break; //Return true if the input is WDL_TRUE
		case 'WDL_FALSE': return false; break; //Return false if the input is WDL_FALSE
		default: try{ return JSON.parse(data) } catch (e) { /*data must be javaScript*/ return eval(data)}; break;
	};
};
function WDL_SELECTFROM(table, query, condition){
	var myTable = [];
	for(var item = 0; item < table.length; item++){
		if(condition){
			myTable.push(table[item][query]);
		};
	};
	return myTable;
};
function WDL_JOIN(){
    for(var item = 1; item < arguments.length; item++)
        for(var key in arguments[item])
            if(arguments[item].hasOwnProperty(key))
                arguments[0][key] = arguments[item][key];
    return arguments[0];
};
function WDL_SUM(table, property, condition){
	for(var item = 0; item < table.length; item++){
		if(condition){
			item == 0 ? window.table = table[item][property] : window.table += table[item][property]
		};
	};
	return window.table
};
var WDLF = [];
for(var item = 0; item < M.length; item++){
	var _$_$ = new Function(M[item]);
	WDLF.push(_$_$);
	M[item] += 'console.warn(\'Array M is deprecated and shouldn\\\'t be used. Use WDL.functions instead.\');';
};
_$_$ = undefined;
var WDL = {
	version:{
		get name(){
			console.warn('WDL.version.name is deprecated. Use WDL.version.toString() instead.');
			return 'v1.2.4';
		},
		toString:function(){
			return 'v1.2.4';
		},
		major:1,
		minor:2,
		patch:3,
		fullName:'WDL v1.2.4',
	},
	functions:WDLF,
};
WDLF = undefined;
