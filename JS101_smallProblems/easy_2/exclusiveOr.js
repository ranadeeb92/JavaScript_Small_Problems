// input : two arguments
// output : boolean value
// rules:
//returns true if exactly one of its  argument is truethy value
//returns false if both of its operands are false or true.

//algo:
//check from the first argument if its a truthy value
//check from the other argument if it is truthy value
// compare both results 
// if both of truthy or falsy returns false
// otherwise return true.


function xor(a, b) {
  return (a && b) || (!a && !b) ? false : true;
}

//thier code
function xor(a, b) {
  return !!((!a && b) || (!b && a));
}
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
