var http = require("./http_get_imprv");
http ( process.argv[2], function (err,data ){
    if ( err ){
        console.log("There was an error" + err);
    }else{
        console.log(data.length);
        console.log(data);
    }

})