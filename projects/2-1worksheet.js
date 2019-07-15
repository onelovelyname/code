// You are invited to work on this challenge in pairs.

////////////////////////////////// PART 1: FUNCTIONS 1-5 ////////////////////////////////////////

//////////////////////////////////
// input: 4 
// output: true

// input: 7
// output: false

// Returns true if number is even and false if number is odd.


function isEven(num) {
	// check if number is type Number
	if (typeof num !== "number") {
		return "Error: please input a number";
	}

	// check if number is even
	if (num % 2 == 0) {
		// if even, return true
		return true;
	}
	// if not, return false
	return false;
}
// console.log("7", isEven(7));
// console.log("8", isEven(8));
// console.log("-9", isEven(-9));
// console.log("-4", isEven(-4));
// console.log("string 7", isEven("7"));

//////////////////////////////////
// input: 8
// output: false

// input 15
// output: true

// Returns true if number is divisible by 3 and false if not.
function isDivisibleBy3(num) {
	// check if number is of type Number
	if (typeof num !== "number") {
		// if not send Error
		return "Error: please input a number";
	}		

	// check if divisible by 3
	if (num % 3 == 0) {
		// if yes, return true
		return true;
	} 
	// if no, return false
	return false;
}

// console.log("15", isDivisibleBy3(15));
// console.log("8", isDivisibleBy3(8));
// console.log("-15", isDivisibleBy3(-15));
// console.log("-8", isDivisibleBy3(-8));
// console.log("string 15", isDivisibleBy3("15"));


//////////////////////////////////
// input: undefined
// output: true

// input: i, where i = 4
// output: false

// declared but no value
var y;
// declared and assigned value of 10
var x = 10;

// returns true if value is undefined and false if not.
function isUndefined(value) {

	if (value === undefined) {
		return true;
	}

	return false;

}

// console.log("x", isUndefined(x)) // false
// console.log("y", isUndefined(y)) // true

//////////////////////////////////
// input: 16
// output: true

// input: 23
// output: false

// returns true if input number is square and false if not.
function isSquareNumber(num) {
	// check if the number is of type Number, and positive!
	if (typeof num !== "number" || num < 0) {
		// if not send Error
		return "Error: please input a positive number";
	}	

	// check if number mod square of number == 0
	if (num % Math.sqrt(num) == 0) {
		// return true
		return true;
	}

	// else return false
	return false;
}

function isSquareNumber2(num) {
		// check if the number is of type Number, and positive!
	if (typeof num !== "number" || num < 0) {
		// if not send Error
		return "Error: please input a positive number";
	}	

	if (Number.isInteger(Math.sqrt(num))) {
		return true;
	}
	return false;
}


// console.log("16", isSquareNumber(16)); // true
// console.log("5", isSquareNumber(5)); // false
// console.log("-9", isSquareNumber(-9)); // error
// console.log("string -13", isSquareNumber("-13")); // error
// console.log("16", isSquareNumber(16)); // true
// console.log("5", isSquareNumber(5)); // false
// console.log("-9", isSquareNumber(-9)); // error
// console.log("string -13", isSquareNumber("-13")); // errorconsole.log("16", isSquareNumber(16)); // true
// console.log("5", isSquareNumber(5)); // false
// console.log("-9", isSquareNumber(-9)); // error
// console.log("string -13", isSquareNumber("-13")); // error

console.log("16", isSquareNumber2(16)); // true
console.log("5", isSquareNumber2(5)); // false
console.log("-9", isSquareNumber2(-9)); // error
console.log("string -13", isSquareNumber2("-13")); // error
console.log("16", isSquareNumber2(16)); // true
console.log("5", isSquareNumber2(5)); // false
console.log("-9", isSquareNumber2(-9)); // error
console.log("string -13", isSquareNumber2("-13")); // errorconsole.log("16", isSquareNumber(16)); // true
console.log("5", isSquareNumber2(5)); // false
console.log("-9", isSquareNumber2(-9)); // error
console.log("string -13", isSquareNumber2("-13")); // error

//////////////////////////////////
// input: [5, 4, 3, 2, 1], 2
// output: [2, 1]

// input: [5, 4, 3, 2, 1], 1
// output: 1

// input: ['a', 'b', 'c'], 2
// output: ['b', 'c']

//Returns the last element of an array. Passing "count" will return the last "count" elements of the array.
function last(list, count) {
	// check if list is NOT an array and count is greater than list.length
	if (!Array.isArray(list) || count > list.length) {
		return "Error: please pass a list and count less than list length";
	}

	// use slice method to return "count" elements in array
	return list.slice(list.length - count, list.length);
}

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(last(animals, 20));



////////////////////////////////// PART 2: FUNCTIONS 6-10 ////////////////////////////////////////

//////////////////////////////////
// input: ['hello', 'goodbye', 'excellent']
// output: ['he', 'go', 'ex']

// gets the first two letters of each word in the list.
function getFirstTwoLettersOfEachWord(list) {

}

//////////////////////////////////
// input: "Hello Gharam"
// output: "marahG olleH"

// reverses a string input
function reverseString(str) {

}

//////////////////////////////////
// input: [1, 2, 3], 3
// output: true

// input: [1, 2, 3], 8
// output: false

//Returns true if the value is present in the list. 
function contains(list, value) {

}

//////////////////////////////////
// input: [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}], 'name'
// output: ["moe", "larry", "curly"]

// A tool for extracting a list of property values.
function pluck(list, propertyName) {

}
//////////////////////////////////
// input: [1, 2, 3], 3
// output: 2

// input: ['a', 'b', 'c'], 'a'
// output: 0

// input: ['a', 'b', 'c'], 'e'
// output: -1

//Returns the index at which value can be found in the array, or -1 if value is not present in the array.
function indexOf(list, value) {

}

