///////////// Review of class concepts from 3-1 //////////////

// 1. Let's start by writing a functional constructor for a Shape. 
// Properties include: height, length, and area function

function Shape(height, length) {
	this.height = height;
	this.length = length;

	this.area = function () {
		return height * length;
	}
}
var square = new Shape(5,5);
console.log(square);

// 2. Now let's do the same Shape constructor using the class keyword.
// getter and setter properties are used for: 
// (1) securing access to data properties
// (2) adding extra logic to properties before getting or setting their values
class Shape1 {
	// data properties
	constructor(height, length) {
		this.height = height;
		this.length = length;
		this.availableColors = ['blue', 'black', 'red', 'green'];
	}

	// accessor properties - must have different names than data properties
	// using getter method 
	getHeight() {
		return this.height;
	}

	// using the get keyword
	get area() {
		return this.height * this.length;
	}

	// using setter method
	setHeight(height) {
		this.height = height;
	}

	// using set keyword
	set color(color) {
		if (this.availableColors.includes(color)) {
			this.color = color;
		} else {
			console.log("Error, your color doesn't exist");
		}
	}
	
}
var square = new Shape1(5,5);
console.log(square);

// 3. Finally, let's create a Rectangle class that extends the Shape constructor.
// keyword super
