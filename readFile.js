var fs = require('fs');
var file = process.argv[2];

var buffer = fs.readFileSync(file);
var content = buffer.toString();

console.log( content.split("\n").length -1 );