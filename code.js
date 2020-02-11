// // helloWorld function
// function helloWorld() {
//     return "Hello, World!";
// }

// function expression syntax (assigning an anonymous function to a variable)
const helloWorld = function() {
    return "Hello, World!";
}


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