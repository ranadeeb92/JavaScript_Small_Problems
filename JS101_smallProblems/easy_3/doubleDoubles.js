
// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - number
// Output:
// - number
// Rules:
// - double number is even-length number
// - the left-side digits of the double number exactly the same as the right side digits
// -
// - 
// Questions: 
// -
// EXAMPLES/TEST CASES:
// i: 
// =>
// o: 
// =>
// MENTAL MODEL: 
// *
// DATA STRUCTURES: 
// ALGORYTHM: 
//check if the input number is a double number
//  - if the number-length is even
//  -if the rigth-side digits exactly the same as left-side digits 
//if it is return the number as is
//if not return the number * 2
// PSEUDOCODE:
// 

function twice(number) {
  let number_str = String(number)
  if(!(number_str.length % 2)) {
    let right_side = number_str.slice(0, (number_str.length / 2));
    let left_side = number_str.slice((number_str.length / 2));
    return left_side === right_side ? number: number * 2;
  } else {
    return number * 2;
  }
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(444));
console.log(twice(344433));
console.log(twice(103103));
