function reduce(arr, fn, initial) {

        if (arr.length == 0 )  ;
        var head = arr[0];
        var next = arr.slice(1);

         return ;

    }

    module.exports = reduce

var e = reduce([1,2,3],function(prev, curr, index, arr) {
      return prev + curr
    }, 0);

console.log(e);