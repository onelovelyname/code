// Control operators

// if statements
// Example: Print number to console if greater than 55


// for loops
// specifically for ARRAYS
// Example: iterate through list of numbers 1-10, printing each number to console


// for...in loops 
// specifically for OBJECTS
// Example: create object, iterate through key-value pairs, printing each to console


// while loops
// Example: print numbers 11-20 to console

// Switch statements, with break clause
// Example: three fruits as the different cases, plus default

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

// collaboratively code rock-paper-scissors

// Review: What command is needed at each stage?
// 1. Unstaged, file is not tracked by github
// 2. Staged and tracked, but changes are not added for saving
// 3. Changes are added for saving, but file is not yet committed
// 4. File is committed locally but not pushed online
// 5. File is pushed online for sharing