// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  string
// Output:
// -  capitalize string
// Rules:
// - Explicit requirements:
// -   word is any sequance of non-whitespace characters
// - Implicit requirements:
// -   empty string => return empty string
// -  string that has only white space => return the same string
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  convert string to array of words
//  loop over the words array
//    -  convert first charater in the word to uppercase
//  return the array words
// PSEUDOCODE:
//

function wordCap(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.log(wordCap("four score and seven")); // "Four Score And Seven"
console.log(wordCap("the javaScript language")); // "The Javascript Language"
console.log(wordCap('this is a "quoted" wOrd')); // 'This Is A "quoted" Word'
