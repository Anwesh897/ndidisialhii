var express = require("express");
var app = express();
app.get("/",function(request,response){
response.send("Hello World");
})
app.listen(2000,function(){
console.log("The server has started on port 1212.Head to localHost:2000 in the browser and see what's there..?");
});
