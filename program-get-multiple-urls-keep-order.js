var endedRequests = 0;
var http = require('http');

var urls = [];
var contents = []; 
//Get the urls passed as parameters of the script
for( var i = 2; i < process.argv.length ; i++){
    urls.push(process.argv[i]);
    contents[process.argv[i]] = "";
}

urls.forEach(function(url){
   http.get(url,function(response){
    response.setEncoding("utf8");
    response.on("data", function(data){
        contents[url] += data;
    });
    response.on("end", function(data){
        endedRequests++;
        if(endedRequests === urls.length){
            //We can print everything
            for(var i = 0; i < urls.length ; i ++){
                console.log(contents[urls[i]]);
            }
        }
    });
}); 
});