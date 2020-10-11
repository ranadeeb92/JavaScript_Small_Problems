// PEDAC
// Input:
// -  string
// Output:
// -  string of integers(integers represent the position of each letters in the alphabet)
// Rules:
// - Explicit requirements:
// -   a = 1, b = 2, ...
// - ignore all non-letters characters
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
//  create alphabet array
//  remover all non-alphabet charaters from the input string
//  loop over the new string
//    - for each character replace it with its position in the alphabet
//  return new string
// PSEUDOCODE:
//
function alphabetPosition(text) {
  let alphabet = Array(26)
    .fill()
    .map((_, index) => String.fromCharCode(index + 97));
  text = text.replace(/[^a-z]/gi, "");
  text = text.replace(/[a-z]/gi, replacer);
  function replacer(match) {
    return alphabet.indexOf(match.toLowerCase()) + 1 + " ";
  }
  return text.trim();
}

console.log(
  alphabetPosition("The sunset sets at twelve o' clock."),
  "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
);
console.log(
  alphabetPosition("The narwhal bacons at midnight."),
  "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
);
