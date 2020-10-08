// PEDAC
// Input:
// - string (string of integers)
// Output:
// -  number (number of odd substring)
// Rules:
// - Explicit requirements:
// -
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: 1341 => 1, 13 , 134, 1341, 3, 31, 341 , 4, 41, 1
// =>
// o: 7
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// declare a variable called substring and initialized with []
//  get all subsrtings from input string
//  loop over substrings
//    - convert substring to number
//    - check if number is odd
//       - increment count by 1
// return count
// PSEUDOCODE:
//

function solve(s) {
  let subStrings = [];
  for (let index = 0; index < s.length; index++) {
    for (let index2 = index; index2 < s.length; index2++) {
      let subString = s.slice(index, index2 + 1);
      subStrings.push(subString);
    }
  }
  return subStrings.reduce((count, subStr) => {
    if (Number(subStr) % 2 === 1) {
      count += 1;
    }
    return count;
  }, 0);
}

console.log(solve("1341") === 7);
console.log(solve("1357") === 10);
console.log(solve("13471") === 12);
console.log(solve("134721") === 13);
console.log(solve("1347231") === 20);
console.log(solve("13472315") === 28);
