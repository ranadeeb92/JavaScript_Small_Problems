// PEDAC
// Input:
// - string
// Output:
// - string
// Rules:
// - Explicit requirements:
// - remover whitespace and punctuation
// -  reorder the input shtring charaters in case insensitively alphabetical order
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  "aBACA" => aAABC
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// declaer a varaible called newStr and initialized with empty array
//  loop over input string
//    - for each charaters check if it is not a letter
//       - append it to a newStr
//    - else igonre it
// sort newStr array  alphabeticaly with no case sensitive
// return ordered array after convert it to an string
// PSEUDOCODE:
//
function alphabetized(s) {
  let newStr = [];
  for (let index = 0; index < s.length; index++) {
    if (s[index].toLowerCase() >= "a" && s[index].toLowerCase() <= "z") {
      newStr.push(s[index]);
    }
  }
  return sortMe(newStr).join("");
}

function sortMe(array) {
  array.forEach((_, index) => {
    for (let index2 = 0; index2 < array.length - index - 1; index2++) {
      if (!(array[index2].toLowerCase() <= array[index2 + 1].toLowerCase())) {
        let change = array[index2];
        array[index2] = array[index2 + 1];
        array[index2 + 1] = change;
      }
    }
  });
  return array;
}
console.log(alphabetized("The Holy Bible") === "BbeehHilloTy");
console.log(alphabetized("aBA CA") === "aAABC");
