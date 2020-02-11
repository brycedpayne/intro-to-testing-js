// // helloWorld function
// function helloWorld() {
//     return "Hello, World!";
// }

// function expression syntax (assigning an anonymous function to a variable)
const helloWorld = function() {
    return "Hello, World!";
};


function sayHello(input) {

    if (typeof input === "string" && input !== '' && isNaN(input)) {
        return 'Hello, ' + input + '!';
    } else {
        return 'Hello, World!';
    }
}

function isFive(input) {
    return parseFloat(input) === 5;
}

function isEven(input) {
    return (parseFloat(input) % 2) === 0;
}

// function isVowel(input) {
//     if (input === undefined || typeof input === 'boolean') {
//         return false;
//     } else if (typeof input === 'string') {
//         return (input.toLowerCase() === 'a');
//     } else {
//         return false;
//     }
// }

function isVowel(input) {
    var vowels = ['a','e','i','o','u'];
    return (input !== undefined) ? vowels.includes(input.toString().toLowerCase()) : false;
}

function add(x,y) {
    return (isNaN(x) || isNaN(y)) ? NaN : parseInt(x) + parseInt(y);
}