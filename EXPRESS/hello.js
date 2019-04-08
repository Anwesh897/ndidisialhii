var express = require("express");
var app = express();
app.get("/hello",function(req,res){
   res.send("Welcome to pchengtia");
})
app.post("/hello",function(req,res){
    res.send("Welcome again");
})
app.listen(3214);