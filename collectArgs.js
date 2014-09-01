module.exports = function ( args,callback,amountOfArgs ){
    var filteredArgs = new Array();

    if ( args.length == 2  ){
        return callback("The arguments you entered are not right. You need provide other arguments!!");
    }else{
        for ( var index = 2 ; index < args.length;index++ ){
            filteredArgs.push( args[index] );
        }
        if ( amountOfArgs!=='undefinded' &&
                                amountOfArgs!==null &&
                                filteredArgs.length < amountOfArgs ){
          return callback("The arguments you entered are not right. You need provide other arguments!!");
  }else
        callback(null,filteredArgs);
    }
}
