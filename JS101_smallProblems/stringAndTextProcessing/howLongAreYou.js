// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  string(string of words)
// Output:
// -  array(words from string followed by single space and the word's length)
// Rules:
// - Explicit requirements:
// -   if the input is empty string => output empty array
// -   if no arguments => return empty array
// - Implicit requirements:
// -   if the string has one word => array of one word with its length
// -
// -

// EXAMPLES/TEST CASES:
// i:  'cow sheep'
// =>
// o:   ['cow 3', 'sheep 5']
// =>
// DATA STRUCTURES: array
// ALGORYTHM:
//  if function's argument is an empty string or it is undefined
//     - return empty array
//  else
//     - convert string to array of words
//     - loop over the words array
//         - append each word with its length as an element to a new array
//     - return the new array
// PSEUDOCODE:
//

// function wordLengths(str) {
//   if (str === "" || str === undefined) return [];
//   return str.split(" ").map((word) => {
//     return `${word} ${word.length}`;
//   });
// }

// arrow functions do not have access to `argument` object
let wordLengths = (...args) => {
  if (args.length === 0 || args[0].length === 0) return [];
  return args[0].split(" ").map((word) => {
    return `${word} ${word.length}`;
  });
};

console.log(wordLengths("cow sheep chicken"));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths("baseball hot dogs and apple pie"));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths("Supercalifragilisticexpialidocious"));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths("")); // []
console.log(wordLengths()); // []
