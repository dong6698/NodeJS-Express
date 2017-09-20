var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on("link_1", function(){
	console.log("link 1 success")
	eventEmitter.emit('link_2');
})

eventEmitter.on("link_2", function(){
	console.log("link 2 success")
	eventEmitter.emit('link_3');
})

eventEmitter.on("link_3", function(){
	console.log("link 3 success")
	console.log("all program success. ")
})

setTimeout(function(){
	eventEmitter.emit('link_1');
}, 1000);

console.log("Progress over!");

