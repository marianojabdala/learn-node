/**
function(previousValue, currentValue, index, array
var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

    console.log(countWords(inputWords))

    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }

*/

function countWords (inputWords) {
    return inputWords.reduce(function (prev, curr) {
        if (typeof prev[curr] !== 'undefined') {  // <-- use 'typeof' to check for undefined
            var count = Number(prev[curr]);
            count +=1;
            prev[curr] = count;  // <-- assign the value first
            return prev;         // <-- then return prev
        } else {
            prev[curr] = 1;      // <-- same here, assign first (don't forget brackets)
            return prev;         // <-- then return prev
        }
    },
    {}
    )
}

    module.exports = countWords
