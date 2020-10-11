// PEDAC
// Input:
// - string
// Output:
// - number (count of distinct case-insensitive alphabetic characters and numeric digits)
// Rules:
// - Explicit requirements:
// -  count the characters that repeated twice or more
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
// count all characters in input string
// loop over the counts
//   for each charates if it ocuurs more than once
//   increment count by one
// return count
// PSEUDOCODE:
//
function duplicateCount(text) {
  let countChar = 0;
  let counts = count(text);
  Object.keys(counts).forEach((char) => {
    if (counts[char] > 1) {
      countChar += 1;
    }
  });

  return countChar;
}
function count(str) {
  let counts = {};
  for (let index = 0; index < str.length; index++) {
    counts[str[index].toLowerCase()] = counts[str[index].toLowerCase()] || 0;
    counts[str[index].toLowerCase()] += 1;
  }
  return counts;
}

console.log(duplicateCount("") === 0);
console.log(duplicateCount("abcde") === 0);
console.log(duplicateCount("aabbcde") === 2);
console.log(duplicateCount("aabBcde") === 2);
console.log(duplicateCount("Indivisibility") === 1);
console.log(duplicateCount("Indivisibilities") === 2);
