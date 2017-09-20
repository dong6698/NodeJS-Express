console.log(__filename);

console.log(__dirname);

var t = setTimeout(function(){
			console.log('time out function after 2 sec');
		},2000);

clearTimeout(t);
console.log('cleared timeout t');

var i = setInterval(function(){
	console.log('interval function each 1 sec');
},1000);

clearInterval(i);
console.log('cleared interval t');

console.log('Hello world'); 
console.log('my age is %'); 
console.log('my age is %', 26);
