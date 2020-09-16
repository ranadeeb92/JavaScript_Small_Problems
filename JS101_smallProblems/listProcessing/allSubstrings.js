// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  string
// Output:
// -  array of all input string substrings
// Rules:
// - Explicit requirements:
// -   order the array by where in the string the substring begins
// -   multiple substrings occur in the same position order it by  its length shortest to longest
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
//  declare a variable result and initializ it with empty array
//  loop over the input string
//    - substringarray = leadingSubstring(str.slice(currentIndex))
//    - concatenate substringarray with result
//  return result
// PSEUDOCODE:
//

function substrings(str) {
  let result = [];
  for (let index = 0; index < str.length; index++) {
    result = result.concat(leadingSubstrings(str.slice(index)));
  }
  return result;
}

// function substrings(str) {
//   return str.split("").reduce((substringsArr, _, index) => {
//     return substringsArr.concat(leadingSubstrings(str.slice(index)));
//   }, []);
// }
function leadingSubstrings(str) {
  return str.split("").map((_, index) => str.slice(0, index + 1));
}

console.log(substrings("abcde"));
