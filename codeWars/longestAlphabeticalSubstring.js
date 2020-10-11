// PEDAC
// Input:
// - string
// Output:
// - string (the longest alphabetical substring)
// Rules:
// - Explicit requirements:
// -
// - Implicit requirements:
// - if the input string is one letter long => return the same string
// - duplicate exist
// -

// EXAMPLES/TEST CASES:
// i:  asd => a, as, asd, s, sd, d => a, s, d, as, sd, asd => start with longest asd if it is in alphabetcial order return it
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  extract all substring from input string
//  sort the substrings depends on order => sort the descending
//  loop over the orederd substrings
//    - starting from the longest check if it is in alpha order
//    - strop the loop
//  return this substring
// PSEUDOCODE:
//
// function longest(str) {
//   let subStrings = [];
//   for(let index = 0; index < str.length; index++){
//     for(let index2 = index; index2 < str.length; index2++){
//       subStrings.push(str.slice(index, index2 + 1));
//     }
//   }
//   subStrings.sort((a, b) => b.length - a.length);

//   let result = "";
//   for(let index = 0; index < subStrings.length; index++){
//     if(isInAlphaOrder(subStrings[index])){
//       result = subStrings[index];
//       break;
//     }
//   }
//   return result;
// }

function longest(str) {
  let subStrings = [];
  for (let index = 0; index < str.length; index++) {
    for (let index2 = index; index2 < str.length; index2++) {
      let sub = str.slice(index, index2 + 1);
      if (isInAlphaOrder(sub)) {
        subStrings.push(sub);
      }
    }
  }
  return subStrings.sort((a, b) => b.length - a.length)[0];
}

function isInAlphaOrder(str) {
  return str.split("").sort().join("") === str;
}

console.log(longest("asd") === "as");
console.log(longest("nab") === "ab");
console.log(longest("abcdeapbcdef") === "abcde");
console.log(longest("asdfaaaabbbbcttavvfffffdf") === "aaaabbbbctt");
console.log(longest("asdfbyfgiklag") === "fgikl");
console.log(longest("z") === "z");
console.log(longest("zyba") === "z");
