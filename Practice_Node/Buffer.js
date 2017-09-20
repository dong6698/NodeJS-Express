// var buf = new Buffer(256);

// for(var i=0; i<26;i++){
// 	buf[i] = i + 97;
// }

// console.log(buf.toString());
// console.log(buf.toString('utf-8',0,5));

// buf.toJSON();
// console.log(typeof(buf));
// console.log(buf);

// var buffer1 = new Buffer('菜鸟教程 ');
// var buffer2 = new Buffer('www.runoob.com');
// var buffer3 = Buffer.concat([buffer1,buffer2]);
// console.log("buffer3 内容: " + buffer3.toString());

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}


var buffer3 = new Buffer(3);
buffer1.copy(buffer3);
console.log("buffer3 is ", buffer3.toString());
console.log("buffer3 length is ", buffer3.length;

