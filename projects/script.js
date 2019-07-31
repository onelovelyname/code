//connect this script file to index.html
//using JS:

// 1. get the button element
var button = document.getElementById("add-button");

// 2. setup event handler on button click
button.addEventListener("click", function() {
// 3. get content from input box
	var hobbyInput = document.getElementById("hobby-input");
	var hobby = hobbyInput.value;

	// 4. add it to the list
	var list = document.getElementById("hobbies-list");
	var newHobby = document.createElement("li");
	newHobby.textContent = hobby;
	list.appendChild(newHobby);
});


// get the color button
var colorButton = document.getElementById("color-button");

// setup an event handler on click for the button
colorButton.addEventListener("click", function() {
// get the input from the user
	var colorInput = document.getElementById("color-input")
	var color = colorInput.value;
	console.log(color);

	// update the CSS for body background to match the color that user input
	document.body.style.backgroundColor = color;
	colorInput.value = "";
});





//1. color ALL TEXT in index.html with any color you like.
//hint: children inherit styles from parent elements.

//2. Allow the user to add new items to the 'hobbies' section using an input and a button.
//hint: use an event-listener on the button.
//hint: get values from input elements
//hint: insert elements with textContent into the dom

//BONUS:
//3. Allow the user to enter a color 
// and change the body's background color to be the entered color.

// get the button element
// when user clicks on button, something happens
	// we need to get the content of the input box
	// update the list