// PEDAC
// Input:
// - number (integer)
// Output:
// - number(maximal number you can obtain by deleting exactly one digit)
// Rules:
// - Explicit requirements:
// -   n >= 10 , n <= 1000000
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: 152 => remove 1 => 52 , remove 5 => 12 , remove 2 => 15
// => 1001 => 1 => 1, 0 => 101, 0 => 101, 1 =>100
// o: 52 , 101
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// convert number to str
//  loop over input numberStr
//    - remove a digit each time
//    - store the rest number in an array
//  loop over array numbers
//    -get the maximal number
// return it
// PSEUDOCODE:
//
function deleteDigit(n) {
  let numbers = [];
  let strN = String(n);
  for (let index = 0; index < strN.length; index++) {
    let newNumber = strN.slice(0, index) + strN.slice(index + 1);
    numbers.push(Number(newNumber));
  }
  return numbers.sort((a, b) => b - a)[0];
}

function deleteDigit(n) {
  let strN = String(n);
  let maximal = 0;
  for (let index = 0; index < strN.length; index++) {
    let newNumber = Number(strN.slice(0, index) + strN.slice(index + 1));
    maximal = newNumber > maximal ? newNumber : maximal;
  }
  return maximal;
}

console.log(deleteDigit(152), 52);

console.log(deleteDigit(1001), 101);

console.log(deleteDigit(10), 1);
