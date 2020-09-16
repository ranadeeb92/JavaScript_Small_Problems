// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1. what if the input is not a number?
// 2. what if the input is a negative number?
// 3. what if the input is a float-point number?
// Input:
// -  number (positive integer)
// Output:
// -  number (sum of input digits )
// Rules:
// - Explicit requirements:
// - we can't use for , while or do .. while loops
// - use a method chain to perform the sum
// - Implicit requirements:
// -  if the input number consist of one digit => return the digit
// -
// -

// EXAMPLES/TEST CASES:
// i:  sum(23)
// o:  5
// DATA STRUCTURES:  number
// ALGORYTHM:
//  convert the input number to a string
//  convert the string to an array of digits
//  declare a sum variable and initialize it with 0
//  loop over the array using one of the array built-in method
//    - convert current digit to number and add it to sum
//  return sum
// PSEUDOCODE:
//

function sum(number) {
  return String(number)
    .split("")
    .reduce((sum, digit) => (sum += Number(digit)), 0);
}

console.log(sum(23)); // 5
console.log(sum(496)); // 19
console.log(sum(123456789)); // 45
