// PEDAC
// Input:
// - string (non-empty)
// Output:
// - t is a min sustring , k is a number (how many times we repeat t to get a string equal to s)
// - array [t, k]
// Rules:
// - Explicit requirements:
// -  input string is lowerCase letters
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: ababab => min substring "ab"  => k = 3
// =>  a , ab, aba, abab, ababa, ababab
// => b, ba, bab, baba, babab
// => a, ab, aba, abab
// => b, ba, bab
// => a, ab
// => b
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  get all substrings from input string
//  loop over substrings
//    - comput k = input string  length/ t length
//    - repeat t k times
//    - check if input string equal repeated t
//       - add [t , k] to a new array
// loop over array of nested arrays
//  - return the nested array that t has minium length
// PSEUDOCODE:
//

function f(s) {
  let subArrays = [];
  for (let index = 0; index < s.length; index++) {
    for (let index2 = index; index2 < s.length; index2++) {
      let t = s.slice(index, index2 + 1);
      let k = Math.floor(s.length / t.length);
      if (t.repeat(k) === s) {
        subArrays.push([t, k]);
      }
    }
  }

  let result = subArrays[0];
  let min = subArrays[0][0].length;

  subArrays.forEach((subArr) => {
    if (subArr[0].length < min) {
      min = subArr[0].length;
      result = subArr;
    }
  });

  return result;
}

console.log(f("ababab") === ["ab", 3]);
console.log(f("abcde") === ["abcde", 1]);
