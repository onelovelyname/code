//================================================================//
//====================== OBJECT LITERALS =========================//

// everything in life is an object, people, cars, trees and anything else you can think of. Objects have properties (features), and functionalities (things they do)

//the variable "person" is an object.
//objects have key:value pairs.
//keys are also called properties
//"name" is a key and 'Mark' is the value
//"drive" is a key and the value is a function
//functions that live on objects are called 'methods'
//On this 'person' object, we have a method called 'drive'

var person = {
  name: 'Ahmad',
  age: 21,
  occupation: 'Bus Driver',
  drive: function() {
    console.log('Ahmad drives');
  }
};

//to access, add or change an existing property on an object:

//we either use dot-notation
person.name = 'Shireen'; //we changed person's name from Ahmad to Shireen

console.log(person.name); //logs 'Shireen' to the console.

//or we use bracket notation
person['city'] = 'Hebron'; //we added a new key 'city' with a value of 'Hebron'

console.log(person['city']); //logs 'Hebron' to the console.

//bracket notation is also useful when we want to use variables to access, add, or change properties on an object

var randomProperty = 'name';

console.log(person[randomProperty]); //logs 'Shireen' to the console.

var anotherRandomProperty = 'height';

person[anotherRandomProperty] = 165; //we added a new property 'height' using a variable 'anotherRandomProperty' with bracket notation

console.log(person[anotherRandomProperty]); //logs 165 to the console.

//Methods are just properties with a function as value
//you can assign methods on an object just like you would a name or an age
// you either use bracket notation or dot-notation

var singProp = 'sing';

person[singProp] = function() {
  console.log('This person sings');
}; //added a new method "sing" using the variable 'singProp' and bracket-notation

person.sing(); //calling the method "sing"
//The method "sing" logs 'This person sings' to the console.

//================================================================//
//===========================CLASSES==============================//

//classes are a blueprint, a factory or a recipe to define the features and functionalities of an object.

//classes are ES6 syntax

//To define a class, we use the 'class' keyword, and use a first-letter capital case name.

//To define properties, we use the constructor method

class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  //to define a method, we write the name of the method only.
  personEats() {
    console.log(`${this.name} is eating`);
  }
}

//there are 4 things to understand in the above code
//1. the constructor is a method that define properties on an object
//2. the constructor method takes the properties as arguements
//3. the "this" keyword refers to the object getting created each time we make an instance of the class.
//4. the method 'personEats' doesn't need a 'function' keyword.

//What is an instance?

//an instance is each object that gets created using the class blueprint.

//to create an instance
var chef = new Person('John Smith', 23, 'cook');

console.log(chef); //logs {name: "John Smith", age: 23, occupation: "cook"} to the console.

//to make another instance
var teacher = new Person('Samantha Page', 28, 'Teacher');

//the 'new' keyword does three things:
//1. it creates an empty object {}.
//2. it sets the value of 'this' keyword to the empty object. this === {}
//3. it calls the 'constructor' method to set the properties on the object we're creating.

console.log(teacher);
//logs {name: "Samantha Page", age: 28, occupation: "Teacher"} to the console.

//
//all instances of the 'Person' class have access to all the 'methods' on the Person class.

chef.personEats(); //logs John Smith is eating to the console.
teacher.personEats(); //logs Samantha Page is eating to the console.

//=======================================================================//
//=======================FUNCTIONAL CLASSES==============================//

//JS is originally a functional programming language, meaning that it depends on functions to do everything.

//making a class with a function is ES5 syntax. And it's what's happening behind the scenes each time we create a class with ES6 syntax.

//We can create a 'class' with functions using two ways:

//The first: a function, with a capital case name, that takes properties as arguements.

function Employee(name, salary, position) {
  this.name = name;
  this.salary = salary;
  this.position = position;
}

//to make an instance, we use the 'new' keyword. We explained what it does previously.

var developer = new Employee('Shaun Erik', 60000, 'developer');

console.log(developer);
//logs {name: "Shaun Erik", salary: 60000, position: "developer"} to the console.

//The second way is by using normal functions, and returning an object:

function Car(name, model, speed) {
  var carObj = {};
  carObj.name = name;
  carObj.model = model;
  carObj.speed = speed;
  carObj.race = function() {
    console.log(`${this.name} is racing!`);
  };
  return carObj;
}

var mercedes = Car('Mercedes Benz', 2018, '198 mph');

console.log(mercedes);
//logs {name: "Mercedes Benz", model: 2018, speed: "198 mph", race: ƒ} to the console.

mercedes.race(); //logs 'mercedes is racing!' to the console.
