var inputs = [5,1];

function updateLabel() {
  var add1 = getNumber1();
  var add2 = getNumber2();
  var sum = add1 +""+ add2;
  return add1 + ' + ' + add2 + ' = ' + sum;
}

function getNumber1() {
  	return inputs[0];


function getNumber2() {
  return inputs[1];
}

console.log(updateLabel());