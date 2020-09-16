// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.  what if the input is an empty string ? => empty list
// 2.
// Input:
// -  string
// Output:
// -  array (list of substrings)
// Rules:
// - Explicit requirements:
// -   substrings starts from the beginning of the string
// -   substring orderd from shortest to longest
// - Implicit requirements:
// -   start always with substring with length 1 (one character)
// -   add one character to each previous substring at a time
// -

// EXAMPLES/TEST CASES:
// i:  'abc'
// =>
// o:  ['a', 'ab', 'abc']
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  declare a variable substrings and initialize it with empty array as a value
//  declare a variable called preSubstring and initialize it with empty string
//  loop over the input string
//    - currentSubstring = preSubstring + current char
//    - append currentSubstring to substrings array
//    - update preSubstring = currentSubstring
//  return substrings array
// PSEUDOCODE:
//

// function leadingSubstrings(str) {
//   let substrings = [];
//   let preSubsstring = "";
//   for (let index = 0; index < str.length; index++) {
//     let currentSubstring = preSubsstring + str[index];
//     substrings.push(currentSubstring);
//     preSubsstring = currentSubstring;
//   }
//   return substrings;
// }

function leadingSubstrings(str) {
  return str.split("").map((_, index) => str.slice(0, index + 1));
}

console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
console.log(leadingSubstrings("a")); // ["a"]
console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
