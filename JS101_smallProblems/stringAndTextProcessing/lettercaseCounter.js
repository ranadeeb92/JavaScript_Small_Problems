// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// - string
// Output:
// -  object (conatain three properties)
// Rules:
// - Explicit requirements:
// -   one property = number of lowercase letters in the string
// -   another property = number of uppercase letters in the string
// -  last property = number of charaters that are non-alphabetics
// - Implicit requirements:
// -   empty string => return object with three properties has 0 value
// -  non-alphabetics conatons spaces, numbers , ...etc
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  declare a variable charCaseCount and assign to it an object has three properties {lowercase: 0, uppercase: 0, neither: 0 }
//  loop over input string
//   - if currnet character is uppercase => increment object's uppercase property by 1
//   - else if it is lowercase => increment object's lowercase property by 1
//   - else incremet object's neither property by one
//  return charCaseCount object
// PSEUDOCODE:
//

function letterCaseCount(str) {
  let charCaseCount = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };
  for (let index = 0; index < str.length; index++) {
    if (isUpperCase(str[index])) {
      charCaseCount.uppercase += 1;
    } else if (isLowerCase(str[index])) {
      charCaseCount.lowercase += 1;
    } else {
      charCaseCount.neither += 1;
    }
  }

  return charCaseCount;
}

function isUpperCase(char) {
  return /[A-Z]/.test(char);
}

function isLowerCase(char) {
  return /[a-z]/.test(char);
}

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }
