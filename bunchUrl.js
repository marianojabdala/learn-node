var http = require("./http_get_imprv");
var argsHelp = require("./collectArgs");
var dataUrl = new Array();
var index = 0;

var urls

argsHelp(process.argv,function(err,data){
    if ( err ){
        console.error(err);
    }else{
        urls = data;
    }
});

var callback = function ( err,data ){

    if ( err ){
        console.log( err );
    }else{

         dataUrl[index] = data ;

         index++;

         if ( index < urls.length ){
            http( urls[index], callback );
         }else{
             dataUrl.forEach( function(data){
                 console.log(data);
             })
         }
    }
};

try{
    http ( urls[index], callback ) ;
}catch( e){
    console.log(e);
}