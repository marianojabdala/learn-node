module.exports = function(url, callback){

var http = require("http");
var bl = require("bl");

http.get( url, function(response){

    response.setEncoding("utf8");

    response.pipe( bl( function(err,data ){
        if(err){
            return callback(err);
        }else{
            callback(null,data.toString());
        }
    }));
});

};