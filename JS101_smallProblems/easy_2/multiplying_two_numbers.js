// input :  two numbers
// output : number(the result of multiplying the input numbers)
// rules :
//explicit rules:
   // multuply two numbers and return the result
// implicit rules:
   // if the arguments are not numbers, convert them to numbers first then multiply them

// algo
// function multiply(parm1, param2)
// convert the parameters to numbers 
// multiply them.
// return the result.

function multiply(a , b) {
  return Number(a) * Number(b);
}

console.log(multiply(10, 4) === 40);
console.log(multiply('4', '10') === 40);
console.log(multiply('e', 'r'));
console.log(multiply('w', 'o') === 6);