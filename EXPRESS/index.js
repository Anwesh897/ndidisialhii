var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Do not go gentle into that good night");
});

app.listen(3000);