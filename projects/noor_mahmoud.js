// object literals

// var noor = {
// 	age: 19,
// 	height: 160,
// 	color: "blue",

// 	walk: function (){
// 		console.log("Noor walks");
// 	}
// };

// var mahmoud = {
// 	age: 20,
// 	height: 173,
// 	color: "black",
// 	walk: function (){
// 		console.log("Mahmoud walks");
// 	}
// };

// functional classes

function Person(name, age, height, color) {
	var person = {};
	person.name = name;
	person.age = age;
	person.height = height;
	person.color = color;

	person.walk = function() {
		console.log(`${person.name} walks`);
	}

	return person;	
}
var noor = Person("Noor", 19, 160, "blue");
//console.log(noor);
noor.walk();

// classes (human or person) vs. instances (noor or mahmoud)

function Person2(name, age, height, color) {
	this.name = name;
	this.age = age;
	this.height = height;
	this.color = color;

	this.walk = function () {
		console.log(`${this.name} walks`);
	}
}

var mahmoud = new Person2("Mahmoud", 20, 173, "black");
console.log(mahmoud);
mahmoud.walk();
// the new keyword: (1) creates a new object for us, (2) assigns this keyword to the object created, (3) returns the object for us from the function

class Person3 {
	constructor (name, age, height, color) {
		this.name = name;
		this.age = age;
		this.height = height;
		this.color = color;
	}

	walk() {
		console.log(`${this.name} walks`);
	}
}

var noor2 = new Person3("Noor2", 19, 160, "blue");
console.log(noor2);
