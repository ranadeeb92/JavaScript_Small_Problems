// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  array of strings
// Output:
// -  array of strings but with the vowels removed
// Rules:
// - Explicit requirements:
// -   vowels are [a, e, i, o, u]
// - Implicit requirements:
// -   if any string in the array ia all vowels => return empty string
// -
// -

// EXAMPLES/TEST CASES:
// i:  ['abc]
// =>
// o:
// =>  [bc]
// DATA STRUCTURES:
// ALGORYTHM:
//  loop over the array and trnasform its elements to a new array
//    - if element has vowels
//       - return the element without the vowels
//    - else return the same element
//  return the new array
// PSEUDOCODE:
//

function removeVowels(arr) {
  return arr.map((str) => {
    return str
      .split("")
      .map((char) => {
        if (!["a", "e", "o", "u", "i"].includes(char.toLowerCase()))
          return char;
      })
      .join("");
  });
}

// ---- using RegExp ---
// function removeVowels(arr) {
//   return arr.map((str) => str.replace(/[aeiou]/gi, ""));
// }

console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(["ABC", "AEIOU", "XYZ"])); // ["BC", "", "XYZ"]
