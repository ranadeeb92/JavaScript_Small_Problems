// PEDAC
// Input:
// -string
// Output:
// - array (array of string where uppercase letter is a person standing up)
// Rules:
// - Explicit requirements:
// -  input string is all lowercase or empty
// - ignore white space character
// - Implicit requirements:
// -  empty string => return empty array
// -
// -

// EXAMPLES/TEST CASES:
// i:  hello => Hello, hEllo, heLlo, helLo, hellO
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  check if the input string is empty => return empty array
//  loop over string
//   - if current charater is not an space
//   - for each charater add input string with current character capitalized to a new array
//  return new array
// PSEUDOCODE:
//
function wave(str) {
  let result = [];
  for (let index = 0; index < str.length; index++) {
    if (str[index] !== " ") {
      let currentStr =
        str.slice(0, index) + str[index].toUpperCase() + str.slice(index + 1);
      result.push(currentStr);
    }
  }
  return result;
}

console.log(wave("hello")); // result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];

// result = [
//   "Codewars",
//   "cOdewars",
//   "coDewars",
//   "codEwars",
//   "codeWars",
//   "codewArs",
//   "codewaRs",
//   "codewarS",
// ];
console.log(wave("codewars"));

//result = [];
console.log(wave(""));

// result = [
//   "Two words",
//   "tWo words",
//   "twO words",
//   "two Words",
//   "two wOrds",
//   "two woRds",
//   "two worDs",
//   "two wordS",
// ];
console.log(wave("two words"));

// result = [" Gap ", " gAp ", " gaP "];
console.log(wave(" gap "));
