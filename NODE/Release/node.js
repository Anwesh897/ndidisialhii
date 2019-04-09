var http = require("http");
var server = http.createServer(function(req,res){
    res.write("Welcome to programming");
    res.end();
})
server.listen(3000);