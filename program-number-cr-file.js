var fs = require('fs');
fs.readFile(process.argv[2], function callBack(err,data){
    var buffer = data;
    if(buffer < 0){
    return;
}

var numberOfCarriageReturn = 0;
for(var i = 0; i < buffer.toString().length ; i ++){
    if (buffer.toString()[i] == '\n'){
        numberOfCarriageReturn++;
    }
}

console.log(numberOfCarriageReturn);
});
