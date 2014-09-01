/**
For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

    {
      "hour": 14,
      "minute": 23,
      "second": 15
    }

Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time under the property 'unixtime'. For example:

    { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to your program.

*/
var httpServer = require("http");
var portNumber = Number ( process.argv[2] );
var map = require('through2-map');
var url = require('url');
var parseUrlPoint = "/api/parsetime";
var unixtimePoint = "/api/unixtime";

var server = httpServer.createServer( function ( req,resp){
    console.log("Server Created!!");
    req.setEncoding('utf8');
    resp.writeHead(200, { 'Content-Type': 'application/json' })
    var urlParsed = url.parse(req.url,true);
    var query = urlParsed.query;
    var time = new Date(query.iso);

    if ( urlParsed.pathname === parseUrlPoint ){
/*
{
      "hour": 14,
      "minute": 23,
      "second": 15
    }

*/
        var longFormat = new Object();
        longFormat.hour = time.getHours();
        longFormat.minute = time.getMinutes();
        longFormat.second = time.getSeconds();

        resp.write(JSON.stringify(longFormat));
        resp.end();
    }else if ( urlParsed.pathname === unixtimePoint){

        var unTime = new Object();
        unTime.unixtime = time.getTime();

    /*
    { "unixtime": 1376136615474 }
    */
        resp.write(JSON.stringify(unTime));
        resp.end();
    }else{
        console.log(" The end point is not the required!!!");
    }
});

server.listen(portNumber);