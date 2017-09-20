function Hello(){
	var name;
	this.setName = function(newname){
		name = newname;
	}
	this.sayHello = function(){
		console.log('hello ', name);
	}
}

module.exports = Hello;