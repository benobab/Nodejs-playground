var filteringModule = require('./filter-module.js');
filteringModule(process.argv[2],process.argv[3],function(err,data){
    if(err){
        console.log(err);
        return;
    }
    data.forEach(function(element){
       console.log(element); 
    });
});