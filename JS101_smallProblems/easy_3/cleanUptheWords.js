// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - strin
// Output:
// - string
// Rules:
// - result strind does not have consecutive spaces
// - each no-alph characters rplace with space
// - if one or more non-alph char occur replace with just one space
// - 
// -
// - 
// Questions: 
// -

// EXAMPLES/TEST CASES:
// i: '---what's my +*& line?'
// =>
// o: ' what's my line'
// =>
// MENTAL MODEL: 
// *
// DATA STRUCTURES: 
// ALGORYTHM: 
// loop over the given string
// each iteration check the char value if it is non-alph
// if it is check the prevous char === space
// don;t add any space
// if not concat space to the string
// return the string
// PSEUDOCODE:
// 

// function cleanUp(string) {
//   let str =  string.replace(/[^a-zA-Z0-9']/g, (match) => {
//     return " ";
//   });
//   return str.replace(/\s+/g," ");
// }

function cleanUp(str) {
  return str.replace(/[^a-z']/gi, " ").replace(/\s+/g, " ");
}

console.log(cleanUp("---what's my +*& line?"));