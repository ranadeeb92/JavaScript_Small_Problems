// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  string
// Output:
// -  string
// Rules:
// - Explicit requirements:
// -   do not count the non-alph char to determin the desiered letter case
// - non-alph char should be include in returned string
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  I love
// =>
// o:  I lOvE
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// declare a variable toUpper and initialize with true
// declare a variable result and initialize it with empty string
// loop over the string
//   - if current char is alpabitecal
//   //  - if toUpper is true
//   //      - convert char to uppercase and append it to result
//   //      - reassign toUpper with false
//   //  - else =>
//   //      - convert char to lowercase and append it to result
//   //      - reassgn toUpper with true
//   - else  append char to result
// PSEUDOCODE:
//

// function staggeredCase(str) {
//   let result = str[0].toUpperCase();
//   for (let index = 1; index < str.length; index++) {
//     if (isAlphabitcal(str[index])) {
//       if (isUpperCase(findtheLastLetter(result))) {
//         result += str[index].toLowerCase();
//       } else {
//         result += str[index].toUpperCase();
//       }
//     } else {
//       result += str[index];
//     }
//   }
//   return result;
// }

function staggeredCase(str, ignoreNonAlphChar = false) {
  return ignoreNonAlphChar
    ? staggeredCaseLetterOnly(str)
    : staggeredCaseAllChar(str);
}

function staggeredCaseAllChar(str) {
  let result = "";
  for (let index = 0; index < str.length; index++) {
    if (index % 2 === 0) {
      result += str[index].toUpperCase();
    } else {
      result += str[index].toLowerCase();
    }
  }
  return result;
}

function staggeredCaseLetterOnly(str) {
  let toUpper = true;
  let result = "";
  for (let index = 0; index < str.length; index++) {
    if (isAlphabitcal(str[index])) {
      if (toUpper) {
        result += str[index].toUpperCase();
        toUpper = false;
      } else {
        result += str[index].toLowerCase();
        toUpper = true;
      }
    } else {
      result += str[index];
    }
  }
  return result;
}

function findtheLastLetter(str) {
  for (let index = str.length - 1; index >= 0; index--) {
    if (isAlphabitcal(str[index])) {
      return str[index];
    }
  }
}

function isAlphabitcal(char) {
  return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}

function isUpperCase(char) {
  return char.toUpperCase() === char;
}

console.log(staggeredCase("I Love Launch School!"));
console.log(staggeredCase("ALL CAPS"));
console.log(staggeredCase("ignore 77 the 444 numbers"));

console.log(
  staggeredCase("I Love Launch School!", true) === "I lOvE lAuNcH sChOoL!"
);
console.log(staggeredCase("ALL CAPS", true) === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers", true) ===
    "IgNoRe 77 ThE 444 nUmBeRs"
);
