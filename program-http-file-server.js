var http = require("http");
var fs = require("fs");


var port = process.argv[2];
var path = process.argv[3];

//Create the server
var server = http.createServer(function(request,response){
   //Handle request and response 
   var streamObject = fs.createReadStream(path);
   streamObject.pipe(response);
});

server.listen(port);