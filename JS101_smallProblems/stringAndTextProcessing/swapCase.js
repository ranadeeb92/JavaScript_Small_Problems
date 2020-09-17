// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// - string
// Output:
// - string (with lettercases switched)
// Rules:
// - Explicit requirements:
// - don't chanage non-letters charaters
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  convert string to array of characters
//  loop over the array
//    - if char is uppercase => switch it to lowercae
//    - else if char is lowercase => switch it to uppercase
//    - esle leave the char as it
//  convert array to dtring again
// return string
// PSEUDOCODE:
//

// function swapCase(str) {
//   return str
//     .split("")
//     .map((char) => {
//       if (char >= "A" && char <= "Z") {
//         return char.toLowerCase();
//       } else if (char >= "a" && char <= "z") {
//         return char.toUpperCase();
//       } else {
//         return char;
//       }
//     })
//     .join("");
// }

function swapCase(str) {
  return str
    .split("")
    .map((char) => {
      if (/[A-Z]/.test(char)) {
        return char.toLowerCase();
      } else if (/[a-z]/.test(char)) {
        return char.toUpperCase();
      } else {
        return char;
      }
    })
    .join("");
}

console.log(swapCase("CamelCase")); // "cAMELcASE"
console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"
