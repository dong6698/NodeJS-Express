function say(name){
	console.log('hello ', name)
}

function execute(someFunction, value){
	someFunction(value);
}

execute(say, 'world');
