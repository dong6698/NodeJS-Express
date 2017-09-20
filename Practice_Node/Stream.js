var fs = require('fs');
var input_file = "./Stream_pipe_input.txt";
var output_file = "./Stream_pipe_output.txt";

var readStream = fs.createReadStream(input_file);
var writeStream = fs.createWriteStream(output_file);

readStream.pipe(writeStream);
console.log("程序执行完毕");