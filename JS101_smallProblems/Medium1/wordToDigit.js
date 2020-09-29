// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// - string
// Output:
// - string (each number word converted to its corresponding digit character)
// Rules:
// - Explicit requirements:
// -
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  five four
// =>
// o:   '5 4'
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  declare a varible called dictionary and initialized with an array of number words from zero until nine
//  loop over dictionary array
//    - creat a new regExp contains word bounderies and current number word and assign it to varaibale reg
//    - replace the reg matching result in the input string with the index of that number word from dictionary array
// return the string result
// PSEUDOCODE:
//

function wordToDigit(str) {
  let dictionary = [
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
  ];

  dictionary.forEach((word) => {
    let reg = new RegExp(`\\b ${word} \\b`, "gi");
    str = str.replace(reg, dictionary.indexOf(word));
  });
  return str;
}

// solution without loop
function wordToDigit(str) {
  let numberWords = [
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
  ];
  let reg = /\b(zero|one|two|three|four|five|six|seven|eight|nine)\b/gi;
  str = str.replace(reg, function replacer(match) {
    return numberWords.indexOf(match);
  });
  return str;
}

console.log(
  wordToDigit("Please call me at five five five one two three four. Thanks.")
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."
