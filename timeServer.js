 var net = require('net')
 var strftime = require("strftime");

 var portNumber = Number ( process.argv[2] );

    var server = net.createServer(function (socket) {
        console.log('Server conected!!!');
        var data = strftime('%F %R', new Date());
        socket.write( data );
        socket.end();


    })

    server.listen(portNumber);
