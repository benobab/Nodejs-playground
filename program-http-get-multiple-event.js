var http = require('http');
var url = process.argv[2];
var answerToPrint = "";
var lengthOfAnswer = 0;
http.get(url,function(response){
    response.setEncoding("utf8");
    response.on("data", function(data){
        answerToPrint += data;
        lengthOfAnswer += String(data).length;
    });
    
    response.on("end", function(data){
        console.log(lengthOfAnswer);
        console.log(answerToPrint);
    });
});