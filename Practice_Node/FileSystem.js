var fs = require("fs");

// 异步读取
fs.readFile('./ReadFile_test.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('ReadFile_test.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");

console.log('测试: fs.stat() and its function');
fs.stat('./ReadFile_test.txt', function (err, stats) {
    if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("读取文件信息成功！");
   
   // 检测文件类型
   console.log("是否为文件(isFile) ? " + stats.isFile());
   console.log("是否为目录(isDirectory) ? " + stats.isDirectory());  
})