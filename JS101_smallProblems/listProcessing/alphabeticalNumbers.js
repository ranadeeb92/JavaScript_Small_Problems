// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  array (array of integer between 0 - 19)
// Output:
// -  array (sorted array based on English words for each number in the input array)
// Rules:
// - Explicit requirements:
// -   sort the input array based on alphabitical numbers
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
//  declare an object called dictionary that contains the appropriate English word (as value) for each index (as key) between (0- 19)
//  sort the object's keys array lexicographcally
//  replace each elements in sorted array with its numeric value
// PSEUDOCODE:
//

// function alphabeticNumberSort(numbers) {
//   let dictionary = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//     ten: 10,
//     eleven: 11,
//     twelve: 12,
//     thirteen: 13,
//     fourteen: 14,
//     fifteen: 15,
//     sixteen: 16,
//     seventeen: 17,
//     eighteen: 18,
//     nineteen: 19,
//   };
//   let alphaArry = Object.keys(dictionary).sort();
//   alphaArry.forEach((ele, index) => {
//     numbers[index] = dictionary[ele];
//   });
//   return numbers;
// }

// another solution
const NUMBER_WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

function alphabeticNumberSort(array) {
  return array.sort(function wordSort(a, b) {
    if (NUMBER_WORDS[a] > NUMBER_WORDS[b]) {
      return 1;
    } else if (NUMBER_WORDS[a] < NUMBER_WORDS[b]) {
      return -1;
    } else {
      return 0;
    }
  });
}

console.log(
  alphabeticNumberSort([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
  ])
);
