module.exports =
    function (dir,extension,callback){
    var fs = require('fs');
    var path = require('path');
    var pathDir = dir;
    var extension = extension;
    var filteredFiles = [];
    fs.readdir(pathDir,function(err,list){
       if(err){
           callback(err);
           return;
       }
       //No error
       list.forEach(function(element){
          if(path.extname(element) === ('.' + extension)){
              filteredFiles.push(element);
          } 
       });
       callback(null,filteredFiles);
    });
    
    }