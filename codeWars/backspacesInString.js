// PEDAC
// Input:
// -string
// Output:
// -string
// Rules:
// - Explicit requirements:
// - assume that "#" is like backSpace
// - when you encounter # remove last element from the string
// - Implicit requirements:
// - input string is empty => return empty string
// -
// -

// EXAMPLES/TEST CASES:
// i: a#bc#d =>  bd
// => abc#d##c => ac
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  declare  a variable called result and initialized with empty string
//  loop over input string
//    - if current character is #
//      - REMOVER LAST CHARTER FROM RESULT
//    - result += current character
// RETURN RESULT
// PSEUDOCODE:
//
function cleanString(s) {
  let result = "";
  for (let index = 0; index < s.length; index++) {
    if (s[index] === "#") {
      result = result.slice(0, result.length - 1);
    } else {
      result += s[index];
    }
  }
  return result;
}

function cleanString(s) {
  let result = [];
  for (let index = 0; index < s.length; index++) {
    if (s[index] === "#") {
      result.pop();
    } else {
      result.push(s[index]);
    }
  }
  return result.join("");
}

console.log(cleanString("abc#d##c") === "ac");
console.log(cleanString("a#bc#d") === "bd");
console.log(cleanString("abc####d##c#") === "");
