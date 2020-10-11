// PEDAC
// Input:
// - string
// Output:
// - array (array of pairs of two characters)
// Rules:
// - Explicit requirements:
// -  if the string length is odd => replace the missing second charater of the final pair with _
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: "abc" => ab , c_ => [ab, c_]
// => "abcd"  => [ab, cd]
// o:
// =>
// DATA STRUCTURES: array
// ALGORYTHM:
//  loop over the input string tow character each times
//    - check if second charater exist
//      - add each time a string of tow charcters to a new array
//    -else
//      -add a string of first charcter and "_"
//  return the new array
// PSEUDOCODE:
//

function solution(str) {
  let splitString = [];
  for (let index = 0; index < str.length; index += 2) {
    if (str[index + 1]) {
      splitString.push(str[index] + str[index + 1]);
    } else {
      splitString.push(str[index] + "_");
    }
  }
  return splitString;
}

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);
