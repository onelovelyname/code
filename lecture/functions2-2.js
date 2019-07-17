// Control operators

// if statements
// Example: Print number to console if greater than 55
function printIfGreaterThan55 (num) {
  if (typeof num !== "number") {
    return "Error: please submit number";
  }
  if (num > 55) {
    console.log(num);
    return "THIS IS AN EXAMPLE";
  }

  return;
}

//console.log("10", printIfGreaterThan55(10));
//console.log("55", printIfGreaterThan55(55));
// console.log("hi kinda",printIfGreaterThan55(60));
//console.log("60 string", printIfGreaterThan55("60"));


// for loops
// specifically for ARRAYS
// Example: iterate through list of numbers 1-10, printing each number to console

var words = ["Hello", "Goodbye", "Welcome"];
var numbers = [1,2,3,4,5];

// console.log("Hello");
// console.log("Goodbye");
// console.log("Welcome");
// console.log(words);
// console.log(words[0]);
// console.log(words[1]);
// console.log(words[2]);

// DRY = Don't Repeat Yourself!
// first: start position
// second: end position
// iterator
// for (var i = 0; i < words.length; i++) {
//   console.log(i, words[i]);
// }

// i++ 
// i=i+1

// for (var i = 1; i <= 10; i=i+2) {
//   console.log(i);
// }

// for...in loops 
// specifically for OBJECTS
// Example: create object, iterate through key-value pairs, printing each to console
const gharam = {
  favoriteColor: "black",
  oldSchool: "Bethlehem School",
  favoriteAnimal: "birds",
  eyeColor: "honey",
  age: 19,
  here: true
};

var arr2 = ['a', 'b', 'c'];
var obj2 = {0: 'a', 1: 'b', 2: 'c'};

// console.log(gharam);

// for (var key in gharam) {
//   if (typeof gharam[key] == "string") {
//     console.log(gharam[key]);
//   }
// }


// while loops
// Example: print numbers 11-20 to console
var i = 21;
while (i >= 11 && i <= 20) {
  console.log(i);
  i = i + 1;
}

// Switch statements, with break clause
// Example: three fruits as the different cases, plus default

// What's your favorite color? 

var color = "white";
function favoriteColor(color) {
  switch (color) {
    case 'black': 
      var response = 'Awesome choice!';
      break;
    case 'white':
      var response =  'Bad choice!';
      break;
    case 'green':
      var response =  'Fine choice.';
      break;
    default: 
      var response = "Sorry, we didn't prepare for you";
      break;
  }

  //console.log(response);
  return "Hello Seif!"
}

//console.log(favoriteColor('white'));


// inputs: Two strings 
// outputs: Winner, Player 1, Player 2, or tie

// "rock", "paper" => Player 2
// "rock", "rock" => Tie
// "rock", "scissors" => Player 1
// "paper", "rock" => Player 1
// "paper", "paper" => Tie
// "paper", "scissors" => Player 2
// "scissors", "paper" => Player 1
// "scissors", "rock" => Player 2
// "scissors", "scissors" => tie

function rockPaperScissors (move1, move2) {
  // check inputs to confirm string type
  var dictionary = ["rock", "paper", "scissors"];
  if (!dictionary.includes(move1) || !dictionary.includes(move2)) {
    return "Error: your inputs don't match rock, paper, and scissors";
  }


  // go through each case
  switch (move1 + ", " + move2) {
    case "rock, paper":
      var winner = "Player 2"; 
      break;
    case "rock, rock": 
      var winner = "Tie";
      break;
    case "rock, scissors": 
      var winner = "Player 1";
      break;
    case "paper, rock": 
      var winner = "Player 1";
      break;
    case "paper, paper":
      var winner = "Tie";
      break;
    case "paper, scissors":
      var winner = "Player 2";
      break;
    case "scissors, paper":
      var winner = "Player 1";
      break;
    case "scissors, rock":
      var winner = "Player 2";
      break;
    case "scissors, scissors":
      var winner = "Tie";
      break;
    default:
      var winner = "There was an error";
      break;
  }
  return winner;
}

console.log(rockPaperScissors("scissors", "scissors"));
console.log(rockPaperScissors("rock", "scissors"));
console.log(rockPaperScissors("paper", "scissors"));

// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log('Sorry, we are out of ' + expr + '.');
// }

// collaboratively code rock-paper-scissors

// Review: What command is needed at each stage?
// 1. Unstaged, file is not tracked by github
// 2. Staged and tracked, but changes are not added for saving
// 3. Changes are added for saving, but file is not yet committed
// 4. File is committed locally but not pushed online
// 5. File is pushed online for sharing