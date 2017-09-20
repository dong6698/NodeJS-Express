function print(){
	console.log(__filename);
	console.log(__dirname);
}

//setTimeout(print,2000);
var x = setInterval(print, 2000);

setTimeout(function(){
	clearInterval(x);
},10000)