// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(input) {
//     if (input === "Alex") {
//         return "Hello, Alex!"
//     } else if (input === "Pat") {
//         return "Hello, Pat!"
//     } else {
//         return "Hello, Jane!"
//     }
// }

// refactored sayHello

function sayHello(input){
    if (input === undefined) {
        return "Hello, World!";
    } else if (input === true) {
        return "Hello, World!"
    } else if (input === false) {
        return "Hello, World!"
    } else {

        return "Hello, " + input + "!";
    }
}

function isFive(input){
   return parseFloat(input) === 5;
 }

