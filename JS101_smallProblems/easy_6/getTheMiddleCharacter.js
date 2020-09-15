// input : string (non-empty)
// output : string (middle character(s) of the string)
// rules :
// explicit req:
// if input string length is odd => retrun exactly one character.
// if input string length is even => return eaxctly two characters
// implicit req:
// whitespace character is not ignored

// Algorithm:
// declare a variable middle to hold the result
// check the length of the input string if its odd or even
// compute the middle index depening on the length(odd/even)
//    - if odd middle index = round down (string length / 2)
//        - middle = str[index]
//    - else middle index = (string length / 2)
//        - middle = str[index -1] + str[index]
// return middle

// function centerOf(str) {
//   let middle = "";
//   let middleIndex = 0;
//   if (!(str.length % 2)) {
//     middleIndex = str.length / 2;
//     middle = str[middleIndex - 1] + str[middleIndex];
//   } else {
//     middleIndex = Math.floor(str.length / 2);
//     middle = str[middleIndex];
//   }

//   return middle;
// }

// enhance the code
function centerOf(str) {
  if (!(str.length % 2)) {
    let leftIndex = str.length / 2 - 1;
    return str.slice(leftIndex, leftIndex + 2);
  } else {
    let middleIndex = Math.floor(str.length / 2);
    return str[middleIndex];
  }
}

// function centerOf(str) {
//   return !(str.length % 2)
//     ? str.substring(str.length / 2 - 1, str.length / 2 + 1)
//     : str[(str.length - 1) / 2];
// }

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"
