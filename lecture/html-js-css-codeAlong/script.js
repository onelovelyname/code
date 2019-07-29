//get button element using id
var button = document.getElementById('add-button');

//add event listener to button element
button.addEventListener('click', function() {
  //get input element by id
  var skillElement = document.getElementById('skills-input');

  //get value from skillElement
  var skill = skillElement.value;

  //get <ul> element by id
  var ul = document.getElementById('skills-list');

  //create an <li> element
  var li = document.createElement('li');

  //add text-content to <li> element created in the line before.
  li.textContent = skill;

  //add <li> element inside <ul> element.
  ul.appendChild(li);
});
