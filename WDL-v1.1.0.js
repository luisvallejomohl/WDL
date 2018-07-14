var a = '';
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
		a += 'localStorage.removeItem(\'' + afterKeyword + '\');';
	}else if(k[item] == '\nWDL_PROTECT'){
		a += 'localStorage.removeItem = function(e){};';
	}else{
		console.error(k[item] + ' is not a valid keyword');
	};
};
M.push(a);
a = '';
};
for(var item = 0; item < databases.length; item++){
	databases[item].style.display = 'none';
};
for(var item = 0; item < M.length; item++){
	var A = new Function(M[item]);
	A();
	M[item] += 'console.warn(\'Array M is deprecated and shouldn\\\'t be used.\');';
};
