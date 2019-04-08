// same pattern as above, require express, invoke the express function
var express = require("express");
var app = express();

// same as above, listen for a GET request
app.get('/', function(request, response){
    response.send('Hello World!')
})

// when a request comes in to /instructors/ANYTHING
app.get('/instructor/:first_name', function(request,response){
    // let's capture the "dynamic" part of the URL, which we are called "first_name". The name that we give to this dynamic part of the URL will become a key in the params object which exists on the request object.

    // let's send back some text with whatever data came in the URL!
    response.send(`The name of this instructor is ${request.params.first_name}`)
});

app.listen(3000, function(){
    console.log("The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!")
})