var httpServer = require("http");
var portNumber = Number ( process.argv[2] );
var fs = require("fs");

var server = httpServer.createServer( function ( req,resp){
    console.log("Server Created!!");
    resp.writeHead(200, { 'content-type': 'text/plain' })
    var readStream = fs.createReadStream(process.argv[3]);
    readStream.pipe(resp );
});

server.listen(portNumber);