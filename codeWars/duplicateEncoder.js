// PEDAC
// Input:
// - string
// Output:
// - string (string of "(",  ")")
// Rules:
// - Explicit requirements:
// -  "(" if a char appears once in input string
// -  ")" if a char appears more than once in input string
// -  igonre letter case
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
//  count how many times each characters in input string occures
//  loop over counts object
//    for each character if occur 1 => newstr += "("
//                       - eles => newStr += ")"
// return newStr
// PSEUDOCODE:
//
function duplicateEncode(word) {
  let counts = count(word.toLowerCase());
  let newStr = "";
  for (let index = 0; index < word.length; index++) {
    newStr += counts[word[index].toLowerCase()] > 1 ? ")" : "(";
  }
  return newStr;
}

function count(w) {
  let counts = {};
  for (let index = 0; index < w.length; index++) {
    counts[w[index]] = counts[w[index]] || 0;
    counts[w[index]] += 1;
  }
  return counts;
}

console.log(duplicateEncode("din") === "(((");
console.log(duplicateEncode("recede") === "()()()");
console.log(duplicateEncode("Success") === ")())())");
console.log(duplicateEncode("(( @") === "))((");
