var item = 0;
const SOURCEDDATABASES = document.querySelectorAll('link[rel="database"]');
while(item < SOURCEDDATABASES.length){
	var WDLSource = SOURCEDDATABASES[item].href;
	XMLHttpRequest 
		? XMLRequest = new XMLHttpRequest() 
		: XMLRequest = new ActiveXObject();
	var newDatabaseLocation = SOURCEDDATABASES[item].attributes.location.value;
	XMLRequest.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			document.querySelector(newDatabaseLocation).innerHTML += '<DATABASE>\n' + XMLRequest.responseText + '</DATABASE>'
		};
	};
	XMLRequest.open('GET', WDLSource);
	XMLRequest.send();
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
				a += 'var ' + afterKeyword.split('~')[0] + ' = ' + afterKeyword.split('~')[1] + ';';
			}else{
				console.error(afterKeyword.split('~')[0] + ' is defined. Use WDL_ALTER instead.');
			};
		}else if(k[item] == '\nWDL_ALTER'){
			 a += afterKeyword.split('~')[0] + ' = ' + afterKeyword.split('~')[1] + ';';
		}else if(k[item] == '\nWDL_SAVE'){
			a += 'localStorage.setItem(\'' + afterKeyword + '\', JSON.stringify(' + afterKeyword + '));';
		}else if(k[item] == '\nWDL_ADDROW'){
			var tableName = afterKeyword.split('~')[0];
			var newRow = afterKeyword.split('~')[1];
			a += tableName + '.push(' + newRow + ');';
		}else if(k[item] == '\nWDL_GET'){
			a += 'var ' + afterKeyword + ' = localStorage.getItem(\'' + afterKeyword + '\');' + afterKeyword + ' = JSON.parse(' + afterKeyword + ');';
		}else if(k[item] == '\nWDL_PRINT'){
			a += 'console.log(\'' + afterKeyword + '\');';
		}else if(k[item] == '\nWDL_DELETE'){
			a += 'if(protectedDatabases.indexOf(\'' + afterKeyword + '\') == -1){\
				localStorage.removeItem(\'' + afterKeyword + '\');\
			};';
		}else if(k[item] == '\nWDL_PROTECT'){
			if(k[item + 1] == '*'){
				localStorage.__proto__.removeItem = function(){};
			}else{
				a += 'protectedDatabases.push(\'' + k[item + 1] + '\');';
			};
		}else if(k[item] == '\nWDL_IF'){
			a += 'if(' + afterKeyword + '){';
		}else if(k[item] == '\nWDL_ENDIF' || k[item] == '\nWDL_ENDLOOP'){
			a += '};';
		}else if(k[item] == '\nWDL_LOOP'){
			a += 'for(var item = 0; item < ' + afterKeyword + '; item++){';
		}else{
			console.error(k[item] + ' is not a valid keyword');
		};
	};
	M.push(a);
	a = 'var protectedDatabases = [];';	
	databases[jtem].style.display = 'none';
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
		name:'v1.1.1',
		major:1,
		minor:1,
		patch:1,
		fullName:'WDL v1.1.1'
	},
	functions:WDLF,
};
WDLF = undefined;
