// Classes project - in groups of 2, create a class for a type you imagine: Animal, Person, Country...anything!
// Must have 3 methods and 5 properties
// Start with using the functional way of creating an object. If you have time, write it again using the class keyword


//======================Object literals==========================//

//write a literal object that contains at least 3 different properties and one method.
var car ={
	name: "hyundai",
	color:"red",
	wheels:4,
	honk: function(){
		console.log("this car is honking")
	}
};

console.log(car)
//the object can be anything you want: car, animal, country, person

//add a new property to your object using bracket-notation.
car['numberOfDoors']= 4;
//change one of your object's properties using dot-notation.
car.numberOfDoors = 5;
//add a new property to your object using bracket-notation and a variable.
// SAME 
var five = "numberOfSeats";
car[five] = 5;

// SAME
car["numberOfSeats"] = 5;

for (var key in car) {
	console.log(car[key]);
}

//The method can do anything you want. Call it.

//BONUS: write another method that -when called- logs one of the properties to the console using the 'this' keyword.

// write your code below this line

//===============================CLASSES====================================//

//write your previous object using a class. Make 3 different instances of your class.
class Rectangle{
	constructor(height,width,color){
		this.height =height;
		this.width = width;
		this.color = color;
	}
	getArea(){
		return this.width *this.height;
	}
}
var sqaure = new Rectangle(10,10,"red");
console.log(sqaure);
//Also, add and change properties on your object using:

//1. dot notation.
sqaure.color = "yellow";
console.log(sqaure);
//2. bracket notation.
sqaure['area'] = 100;
//3 variable with bracket notation.

//BONUS: write another method that -when called- logs one of the properties to the console using the 'this' keyword.
console.log(sqaure.getArea());
//write your code here

//===============================functional classes=========================//

//write a function that returns an object (animal, car, person) each time it's called with 3 properties and two methods.

//call your function, and log the returned object to the console.

//write your code here.

function Car (name, model, speed){
	var carObj={};
	carObj.name= name;
	carObj.model=model;
	carObj.speed=speed;
	carObj.racing=function(){
		console.log(`${carObj.name} is racing`);
	};
	return carObj;
}

var car1= Car ("opal", 2016, 180);
console.log(car1);
car1.racing();
//====

//write a class-based function that has three different properties and two methods which returns an object (animal, car, person) each time an instance is made.

//log each one of your instances to the console.

//BONUS: define another method on your class that -when called- logs one of the properties to the console using the 'this' keyword.

//write your code here.

function Country(name , language, continent){

this.name= name; 
this.language= language;
this.continent = continent;

this.hello= function (){

	console.log("Hello")
}


}
 
 var Palestine = new Country("Palestine", "Arabic", "Asia")
console.log(Palestine);



