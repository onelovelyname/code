// Topic 1: What is the console?
console.log("Hello everyone!");
// Topic 2: Declaring variables
// ES5
// declare a variable using the keyword var 
var name1;
var address1;

// ES6
// declare a variable using let and const
const NAME = "Gharam";
let age2;
let height2;
let address2;

// console.log(age1);
// console.log(NAME);




// Topic 3: Data types (6 primitives + object)
// 1. number
var age1 = 19;
var height1 = 140.5;

var num1 = 5;
var num2 = 8;

var square1 = num1 * num1;
var square2 = Math.sqrt(6);

console.log(square1);
console.log(square2);

var test = -1 * Infinity;
console.log(test);
// What is Infinity? (1 / 0)

// The number type represents both integer and floating point numbers.

// There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.
var age3 = 14;
// console.log(age3);

var x = 2.5;
// console.log(x);

// Besides regular numbers, there are so-called “special numeric values” 
// which also belong to this data type: Infinity, -Infinity and NaN.
// Infinity represents the mathematical Infinity ∞. 
// It is a special value that’s greater than any number. We can get it as a result of division by zero:

// 2. boolean

// The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

let x1 = true;
//console.log(x1);

var p = false;

// console.log(x1 == p);

// console.log(age3 > 20);

// console.log(1 == x1);
// console.log("true" === true);
// console.log(1 == "sam");
// console.log(1 === "sam");

// Booleans can also be the output of a comparison.
// console.log(12 > 10);
// console.log(12 < 8);

// 3. string 

// In JavaScript, there are 3 types of quotes.

// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.
// Double and single quotes are “simple” quotes. There’s no difference between them in JavaScript.

var roomColor1 = "white";
var roomColor2 = 'blue';

var sentence = `The room color is ${roomColor1}`;
var sentence2 = 'The room color is ${roomColor1}';

console.log(sentence);

console.log(sentence2);

// GOOD
var age4;
age4 = 4;

console.log(age4);

// BAD 
var age5;
var age5 = 5;

console.log(age5);


// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
// You cannot mix quote types for a single string.

// 4. undefined
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined

// GOOD:
var sage4;

console.log(sage4);
//BAD:
var age5 = undefined;

// 5. null
// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

var empty = null;
console.log(empty == 0);
console.log(empty === 0);

var empty2 = "";
console.log(empty2 == false);
console.log(empty2 === false);

console.log(null == false);
console.log(null === false);
// 6. symbol

// 7. object
// The object type is special.

var jannat = {
	age: 19,
	height: 170.5,
	favoriteFood: "mansaf",
	likesSun: true,
	hiddenSecrets: null,
	test: {
		test1: "Does it work?"
	}
};



// dot notation
console.log(jannat.favoriteFood);
console.log(jannat.hiddenSecrets);
console.log(jannat.test.test1);

// bracket notation
var property1 = "height";
console.log(jannat[property1]);

jannat.age = jannat.age + 1;
console.log(jannat.age);

// All other types are called “primitive” because their values can contain only a single thing 
// (be it a string or a number, etc). 
// In contrast, objects are used to store collections of data and more complex entities. 

// dot notation for accessing values

// bracket notation for accessing values


// Source: https://javascript.info/types

// Array assignment
// Accessing elements within array using bracket notation

var classList = ["Khalil", "Khader", "Baraa", "Gharam", 5];
var classList2 = {
	0: "Khalil", 
	1: "Khader", 
	2: "Baraa", 
	3: "Gharam", 
	4: 5
};

// bracket notation
console.log(classList2[0]);


// Function declaration

function identity (name1) {
	return `Hello ${name1}`;
}


function subDec (num1, num2) {
	return num1 - num2;
}

// Function expression
var subEx = function (num1, num2) {
	return num1 - num2;
}

// Topic 4: Practice

// Write addition function using declaration

// Write multiplication function using expression

// For more info: https://gomakethings.com/function-expressions-vs-function-declarations/


// Topic 5: Collaboration as class

// Collaborative function writing for yesterday's game