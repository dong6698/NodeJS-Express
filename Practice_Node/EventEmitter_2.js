var event = require ('events');

var eventEmitter = new event.EventEmitter();

eventEmitter.on("someEvent", function(arg1,arg2){
	console.log("First: ", arg1, arg2);
});

eventEmitter.on("someEvent", function(arg1,arg2){
	console.log("Second: ", arg1, arg2);
});

eventEmitter.on("someEvent", function(arg1,arg2){
	console.log("Third: ", arg1, arg2);
});

eventEmitter.emit("someEvent", "arg1", "arg2");
