// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.  what about a string that all its chararters are non-alphabetics => true
// 2.
// Input:
// - string
// Output:
// -  boolean value
// Rules:
// - Explicit requirements:
// -   return true only if all characters in input string are uppercases
// - ignore non-alphabetiv charaters
// - return false if one letter in input string is not uppercase
// - Implicit requirements:
// -   empty string => return true
// -
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  convert string to an array of charaters
//  loop over the array
//   - check if all elements are uppercase or non-alphabetics
//      -  return true
//   - else return false
//
//
// PSEUDOCODE:
//

function isUppercase(str) {
  return str.split("").every((char) => /[^a-z]/.test(char));
}

// function isUppercase(str) {
//   return str.toUpperCase() === str;
// }

console.log(isUppercase("t")); // false
console.log(isUppercase("T")); // true
console.log(isUppercase("Four Score")); // false
console.log(isUppercase("FOUR SCORE")); // true
console.log(isUppercase("4SCORE!")); // true
console.log(isUppercase("")); // true
