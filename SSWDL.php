<?php
/***************************
 * Server Side Webpage Database Language (SSWDL)
 * MPL v2.0
 **************************/
$item = 0;
function WDL_ISCONSTANT($name){
	if($name == eval($name)){
		return false;
	}else{
		return true;
	};
}
const $WDL_UNDEFINED = null;
const $WDL_PI = 3.1415926535897932384626433832795;
const $WDL_E = 2.718281828459045235386;
const $WDL_PHI = (1 + Math.sqrt(5))/2;
const $WDL_TRUE = true;
const $WDL_FALSE = false;
const $WDL_DATE = new date('d/m/Y');
function WDL_ROOT(a, b){
	return Math.pow(a, b);
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
			return 'v1.2.0';
		},
		toString:function(){
			return 'v1.2.0';
		},
		major:1,
		minor:2,
		patch:0,
		fullName:'WDL v1.2.0',
	},
	functions:WDLF,
};
WDLF = undefined;
 ?>
