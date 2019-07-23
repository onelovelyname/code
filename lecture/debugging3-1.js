var inputs = [5,1];

function updateLabel() {
  var add1 = getNumber1();
  //console.log(add1);
  var add2 = getNumber2();
  //console.log(add2);
  var sum = add1 + add2;
  console.log(sum);
  return add1 + ' + ' + add2 + ' = ' + sum;
}

function getNumber1() {
  	return inputs[0];
}

function getNumber2() {
  return inputs[1];
}

console.log(updateLabel());
