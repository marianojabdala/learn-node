var httpServer = require("http");
var portNumber = Number ( process.argv[2] );
var map = require('through2-map');


var server = httpServer.createServer( function ( req,resp){
    console.log("Server Created!!");
    req.setEncoding('utf8');
    try{
        console.log("Method", req.method );
        if ( req.method === "POST"){
        req.pipe(map(function (chunk) {
          return chunk.toString().toUpperCase()
        })).pipe(resp);
         }else{
               return res.end("This is not a post");
             }

    }catch( err){
        console.error(err);
    }



});

server.listen(portNumber);