var http = require("http");
var fs = require("fs");


var port = process.argv[2];

var toMakeUpperCased = '';

//Create the server
var server = http.createServer(function(request,response){
   //Handle POST requests only and return the text in Uppercase

   if(request.method == "POST"){
      //Get the data and then make it uppercase and write it into the response
      request.on("data",function(data){
         console.log(data);
         toMakeUpperCased += data;
      });
      
      request.on("end",function(){
      response.write(toMakeUpperCased.toUpperCase());   
      });
      
   }
});

server.listen(port);

//OR 

/*
 var http = require('http')  
     var map = require('through2-map')  
       
     var server = http.createServer(function (req, res) {  
       if (req.method != 'POST')  
         return res.end('send me a POST\n')  
       
       req.pipe(map(function (chunk) {  
         return chunk.toString().toUpperCase()  
       })).pipe(res)  
     })  
       
     server.listen(Number(process.argv[2]))  

*/