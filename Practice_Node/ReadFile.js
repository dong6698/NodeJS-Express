var fs = require('fs');

var testFile = "./ReadFile_test.txt";

fs.readFile(testFile, function(err, data){
	if(err){
		console.log(err.stack);
	}else{
		console.log(data.toString());
	}
})

console.log("Program over!");