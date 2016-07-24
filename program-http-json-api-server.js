var http = require("http");
var url = require("url");

var port = process.argv[2];

var toMakeUpperCased = '';

//Create the server
var server = http.createServer(function(request,response){
   //Handle GET requests and return JSON data
   if(request.method === "GET"){
      //Handle the queries according to the url
      var req = url.parse(request.url,true); // Parse the url to get an object with the path, the query etc
      var iso = "";
      if(req.query.iso){
        iso = req.query.iso;  
      }
      console.log(req.pathname + ' '+ iso);
      var date = new Date(iso);
      console.log(date);
      var obj;
      if(req.pathname === "/api/parsetime"){
         obj = {
            "hour": date.getHours(),
            "minute":date.getMinutes(),
            "second":date.getSeconds()
         };
      }else if(req.pathname === "/api/unixtime"){
         obj = {
            "unixtime":Date.parse(iso)
         };
         
      }
      
      if(obj){ //We got a successfull answer to send
         //Specify that we are going to send json
         response.writeHead(200, {"Content-Type": "application/json"});
         response.end(JSON.stringify(obj));
      }else{
         //Error sent in the response
         response.writeHead(404);
         response.end(); 
      }
   }
});

server.listen(port);