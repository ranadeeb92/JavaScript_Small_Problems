// in : string
// out : string
// rules :
// - string cosist of words separated by spaces
// -in the returned string we swap the first letter andd the last letter of each word
// each word has at list one letter
// string at least has one word
// each string contains nothing but words and spaces

// algo:
// declare a new string
// build the new string from the input string
//  -convert the input string to an array of words
//  -for each word we swap the first letter with the last letter
// return the new string

// function swap(str) {
//   let new_str = "";
//   let words = str.split(" ");
//   for (let index = 0; index < words.length; index++) {
//     let word = words[index];
//     if (word.length === 1) {
//       swapped_word = word;
//     } else {
//       swapped_word = `${word[word.length - 1]}${word.slice(
//         1,
//         word.length - 1
//       )}${word[0]}`;
//     }
//     new_str += swapped_word + " ";
//   }
//   return new_str;
// }

// using map
function swap(str) {
  let words = str.split(" ");
  return words
    .map((currentword) => {
      return swapFirstLetterWithLastLetter(currentword);
    })
    .join(" ");
}

function swapFirstLetterWithLastLetter(word) {
  if (word.length === 1) return word;
  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

console.log(swap("Oh what a wonderful day it is")); // "hO thaw a londerfuw yad ti si"
console.log(swap("Abcde")); // "ebcdA"
console.log(swap("a")); // "a"
