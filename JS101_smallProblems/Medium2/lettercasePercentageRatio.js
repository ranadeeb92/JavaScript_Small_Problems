// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  string
// Output:
// -  object with three properties
// Rules:
// - Explicit requirements:
// -   object properties are:
//       - lowercaseLettersRatio
//       - uppercaseLettersRatio
//       - neitherRatio
// input string has at least one character
// - each property value is a string represents the percentage of those charaters
// - Implicit requirements:
// -   niether means (non-alphabitical charaters)
// -
// -

// EXAMPLES/TEST CASES:
// i:  1223
// =>
// o:  {lowercase : '0.00', uppercase: '0.00', niether: '100.00'}
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  declare a variable result and initialized with an object
//     - result = {lowercase : '0.00', uppercase: '0.00', niether: '0.00'}
//  declare a varible called lowercaseLetterCount and initialized with 0
//  declare a varible called uppercaseLetterCount and initialized with 0
//  declare a varible called nietherCount and initialized with 0
// loop over input string
//   - check if current character is lower case
//        - increment lowercaseLetterCount by one
//   - else if current character is upper case
//        - increment uppercaseLetterCount by one
//   - else increment nietherCount by one
// calculate lowercaseletterRatio, uppercaseLetterRatio and neitherRatio
// update the result properties
// return result
// PSEUDOCODE:
//

function letterPercentages(str) {
  let result = { lowercase: "0.00", uppercase: "0.00", niether: "0.00" };
  let lowercaseLetterCount = 0;
  let uppercaseLetterCount = 0;
  let nietherCount = 0;

  for (let index = 0; index < str.length; index++) {
    if (str[index] >= "a" && str[index] <= "z") {
      lowercaseLetterCount += 1;
    } else if (str[index] >= "A" && str[index] <= "Z") {
      uppercaseLetterCount += 1;
    } else {
      nietherCount += 1;
    }
  }
  result.lowercase = calculatePercentage(lowercaseLetterCount, str.length);
  result.uppercase = calculatePercentage(uppercaseLetterCount, str.length);
  result.niether = calculatePercentage(nietherCount, str.length);

  return result;
}

function calculatePercentage(count, len) {
  let ratio = (count / len) * 100;
  return ratio.toFixed(2);
}

console.log(letterPercentages("abCdef 123"));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages("AbCd +Ef"));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages("123"));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
