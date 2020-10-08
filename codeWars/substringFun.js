// PEDAC
// Input:
// - array (array of words)
// Output:
// - string
// Rules:
// - Explicit requirements:
// - n is the position of the word in the list
// - we need to take from each word in the array th letter in n position
// - Implicit requirements:
// - empty array => empty string
// - array of one word => string of one letter
// -

// EXAMPLES/TEST CASES:
// i: ["yoda", "best", "has"] => yoda[0] = y
// =>  best[1] = e , has[3] = s
// o:
// =>  "yes"
// DATA STRUCTURES:
// ALGORYTHM:
//  loop over input array
//    for each word take the letter in word index
//      - add this letter to a new array
//  convert new array to string
// return string
// PSEUDOCODE:
//

function nthChar(words) {
  return words
    .map((word, index) => {
      if (word[index]) {
        return word[index];
      } else {
        return "";
      }
    })
    .join("");
}

console.log(nthChar(["yoda", "best", "has"]) === "yes");
