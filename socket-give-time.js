Number.prototype.pad = function(size) {
      var s = String(this);
      while (s.length < (size || 2)) {s = "0" + s;}
      return s;
    }
    
var net = require('net');

var server = net.createServer(function(socket){
    //Format the date to send to the client
    var date = new Date();
    //Write the date
    console.log(date.getUTCDate());
    socket.write(date.getFullYear()+'-'+(date.getMonth() + 1).pad()+'-'+date.getUTCDate().pad()+' '+date.getHours()+':'+date.getMinutes() + '\n');
    socket.end("");
    
});

server.listen(process.argv[2]);