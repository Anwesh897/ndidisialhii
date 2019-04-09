var http = require("http");
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Context-type':'text/html'});
    res.write("Welcome to programming");
    res.end();
})

server.listen(3003);