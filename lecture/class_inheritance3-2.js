///////////// Review of class concepts from 3-1 //////////////

// 1. Let's start by writing a functional constructor for a Country. 
// Properties include: name, language, and continent function

function Country2(name, language, continent) {
	var translation = {
		"English": "Hello",
		"Arabic": "Marhaba",
		"Spanish": "Hola",
		"French": "Bonjour"
	};

	this.name = name;
	this.language = language;
	this.continent = continent;

	this.sayHello = function() {
		console.log(`${translation[this.language]}`);
	}
}

class Animal {
	constructor(color, legs) {
		this.color = color;
		this.legs = legs;
	}
}

class Cat extends Animal {

}

var babyCat = new Animal("black", 4);
console.log("babyCat", babyCat);

var secondCat = new Cat("blue", 5);
console.log("secondCat", secondCat);
// var palestine = new Country("Palestine", "Arabic", "Asia");
//palestine.sayHello();

class Country {
	constructor(name, language, continent) {
		// data properties = 4
		this.name = name;
		this.language = language;
		this.continent = continent;
		this.translation = {
			"English": "Hello",
			"Arabic": "Marhaba",
			"Spanish": "Hola",
			"French": "Bonjour"
		};
	}

	// accessor properties = 4
	getLanguage() {
		return this.language;
	}

	get hello() {
		return this.translation[this.language];
	}

	get location() {
		return "Welcome to " + this.continent;
	}

	setLanguage(newLanguage) {
		this.language = newLanguage;
	}
}

var palestine = new Country("Palestine", "Arabic", "Asia");

var america = new Country("USA", "English", "North America");
//america.sayHello();
america.setLanguage("French");
// console.log(america.getLanguage());
//america.langauge = "Cantonese";
// console.log(america.hello);
// console.log(palestine.location);

// getters and setters!

class Palestine extends Country {

	constructor(name, language, continent, famousPlaces) {
		super(name, language, continent);
		this.famousPlaces = famousPlaces;
	}
}


class Bethlehem extends Palestine {
	constructor(name, language, continent, famousPlaces, villages) {
		super(name, language, continent, famousPlaces);
		this.villages = villages;
	}

	get location() {
		return "Welcome to " + this.name;
	}
}
//console.log(pal);


var bethlehem = new Bethlehem("Bethlehem", "Arabic", "Asia", ["Nativity Church", "Marsaba", "Solomon Pools"], ["Battir", "Husan", "Nahalen"]);
console.log(bethlehem.translation[bethlehem.language]);



// function Shape(height, length) {
// 	this.height = height;
// 	this.length = length;

// 	this.area = function () {
// 		return height * length;
// 	}
// }
// var square = new Shape(5,5);
// //console.log(square);

// // 2. Now let's do the same Country constructor using the class keyword.
// // getter and setter properties are used for: 
// // (1) securing access to data properties
// // (2) adding extra logic to properties before getting or setting their values
// class Shape1 {
// 	// data properties
// 	constructor(height, length) {
// 		this.height = height;
// 		this.length = length;
// 		this.availableColors = ['blue', 'black', 'red', 'green'];
// 	}

// 	// accessor properties - must have different names than data properties
// 	// using getter method 
// 	getHeight() {
// 		return this.height;
// 	}

// 	// using the get keyword
// 	get area() {
// 		return this.height * this.length;
// 	}

// 	// using setter method
// 	setHeight(height) {
// 		this.height = height;
// 	}

// 	// using set keyword
// 	set color(color) {
// 		if (this.availableColors.includes(color)) {
// 			this.color = color;
// 		} else {
// 			console.log("Error, your color doesn't exist");
// 		}
// 	}
	
// }
// var square = new Shape1(5,5);
// //console.log(square);

// // 3. Finally, let's create a Rectangle class that extends the Shape constructor.
// // keyword super
