var util = require('util');

function Base(){
	this.name = 'John';
	this.base = 1991;
	this.sayHello = function() { 
		console.log('Hello ' + this.name); 
	};
}

Base.prototype.showName = function() { 
	console.log(this.name);
}; 

function Sub() { 
	this.name = 'sub'; 
}

// Sub only inherits the function that defined in prototype called showName;
util.inherits(Sub, Base); 

var objBase = new Base(); 

objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 

var objSub = new Sub(); 
objSub.showName(); 
//objSub.sayHello(); 
console.log(objSub); 

console.log(util.inspect(objBase)); 
console.log(util.inspect(objBase, true));  //  second arg will show more detail information.

// util also have multiple function like 
// util.isArray(Object), util.isRegExp(object), util.isDate(object), util.isError(object)