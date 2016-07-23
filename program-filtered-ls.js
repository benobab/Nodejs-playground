var fs = require('fs');
var path = require('path');
var pathDir = process.argv[2];
var extension = process.argv[3];

fs.readdir(pathDir,function(err,list){
   if(err){
       return;
   }
   //No error
   list.forEach(function(element){
      if(path.extname(element) === ('.' + extension)){
          console.log(element);
      } 
   });
});
