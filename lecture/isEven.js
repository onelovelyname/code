// input: number - integer or floating point
// output: boolean

// examples:
// 12 true
// 2.5 false
// -50 true 
// 3 false 
// -9 false 
// -3.4 false 
// "3" ERROR 

// "number"
var type15 = typeof 15;
// console.log("type15", type15);

// console.log("typeof type15", typeof type15)



function isEven (num) {
	// check if input is a number
	if (typeof num !== "number") {
		// send error
		return "Error: Please send us a number";
	}
	// check if number is even

	if (num % 2 == 0) {
		// if yes send true
		return true;
	} 
	// if no send false 
	return false;

}
// 12 true
// 2.5 false
// -50 true 
// 3 false 
// -9 false 
// -3.4 false 
// "3" ERROR 
console.log("12", isEven(12));
console.log("2.5", isEven(2.5));
console.log("-50", isEven(-50));
console.log("3", isEven(3));
console.log("-9", isEven(-9));
console.log("-3.4", isEven(-3.4));
console.log("3", isEven("3"));


