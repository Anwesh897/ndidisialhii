var fs =require("fs");
fs.readFile('fileSystem.txt',function(err,data){
    console.log(data.toString());
})