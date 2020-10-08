// PEDAC
// Input:
// -  string
// Output:
// -  boolean value
// Rules:
// - Explicit requirements:
// -   programm is a sentence that contains every single letter of the alphabet at least once.
// -  letter case insensitive
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
//  check if the input string is a programm
//    => return true
//  else => return false
//
// PSEUDOCODE:
//

function isPangram(string) {
  let letters = {};
  string = string.replace(/[^a-z]/gi);
  for (let index = 0; index < string.length; index++) {
    let char = string[index].toLowerCase();
    letters[char] = letters[char] || 0;
  }
  return Object.keys(letters).length === 26;
}

var string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string) === true);
var string = "This is not a pangram.";
console.log(isPangram(string) === false);
