// objects

// var khader = {
// 	age: 21,
// 	hobbies: ["basketball", "design"],
// 	height: 180
// };

// var khalil = {
// 	age: 58,
// 	hobbies: ["computers", "tennis"],
// 	height: 165
// };

// functional classes
function Person1(age, hobbies, height) {
	var person = {};

	person['age'] = age;
	person['hobbies'] = hobbies;
	person['height'] = height;

	return person;
}

// var khader = Person(21, ['basketball', 'design'], 180);
// console.log(khader);

function Person2(age, hobbies, height) {
	this.age = age;
	this.hobbies = hobbies;
	this.height = height;

	this.talk = function() {
		console.log("Person2 says hi");
	}
}

// class (human / person) vs. instance (khader or khalil)
// new keyword does three things:
// (1) creates a new object (2) attaches this to the instance (3) returns the object from the function
var khalil = new Person2(58, ['tennis', 'computers'], 165);
console.log(khalil);
khalil.talk();

class Person3 {
	constructor(age, hobbies, height) {
		this.age = age;
		this.hobbies = hobbies;
		this.height = height;
	}
	talk() {
		console.log("Person says hello world!");
	} 
}

var khader = new Person3(21, ['design', 'basketball'], 180);
console.log(khader);

khader.talk();
