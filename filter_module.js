module.exports = function ( file,ext,callback){

var fs = require("fs");
var path = require("path");

fs.readdir(file, function(err,list){
	if ( err ){
		return callback(err);
	}else{
		var files = new Array();
		for (var i = 0; i < list.length; i++) {
			if ( path.extname(list[i]) === "."+ext){
				files.push( list[i] );
			}			
		}
		
		callback(null,files);
	}
})
};