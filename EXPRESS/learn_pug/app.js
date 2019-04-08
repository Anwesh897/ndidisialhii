var express = require("express");
var app = express();
app.set("view engine","pug")
app.get("/",function(request,response){
    response.render("index")
})
app.listen(5555,function(){
    console.log("open up localhost:2323")
})