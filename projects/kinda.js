// 0. create a javascript file. Save the file as ______.js

// Data types
// 1. Numbers
var age = 14; // integer
var height = 14.5; // floating point number
var negative = -5; // negative number
var fun = 1/0; // Infinity

// console.log(fun);

// 2. strings
var happy = "five"; // double quotations
var sad = 'six'; // single quotations
var sentence = `I am ${sad} years old`; // backticks
// var hello = 'I' m Melanie'; // error using apostrophe in single quotes
var hello2 = "I'm Melanie";
// console.log(sentence);

// 3. undefined: when we declare a variable, but do not assign it a value, it is undefined
var x;
//console.log(x);

// BAD
var y = undefined;

// 4. null

var z = null;
//console.log(z);

// 5. boolean
var a = true;
//console.log(a);

var b = false;
//console.log(b);

// 6. Objects
var classList = ['kinda', 'seif', 'alaa', 'gharam'];
console.log(classList[0])
console.log(classList[1])
console.log(classList[2])
console.log(classList[3])

//console.log(classList.length);

// classList.push("jannat");
// console.log(classList);

// classList.push("nawras");
// console.log(classList);

// accessing elements in arrays using bracket notation
// console.log(classList[0]); // kinda
// console.log(classList[1]); // seif

// for loop
for (var i = 0; i < classList.length; i = i + 1) {
	console.log(classList[i]);
} // i = i + 1

// i = 0
// kinda

// i = 1
// seif

// i = 