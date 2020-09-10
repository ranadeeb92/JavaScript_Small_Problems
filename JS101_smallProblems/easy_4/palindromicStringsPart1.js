// in : string
// out :  boolean value
// rule :
// palindromic string reads the same forwords and backwords
// case matters
// all characters matters
// questions :
// - what a bout a string with one character?
// - what a bout empty string?

// algo :
// loop over the string
// each iteration compaire current character with the char with the corresopding position of the end of the string
// return true if all the compairson returned ture
// otherwise retuen false

function isPalindrome(str) {
  // for (let index = 0; index < str.length; index++) {
  //   if (str[index] !== str[str.length - index - 1]) {
  //     return false;
  //   }
  // }
  // return true;
  // ----or loop through half the string-----
  for (let index = 0; index < Math.floor(str.length / 2); index++) {
    if (str[index] !== str[str.length - index - 1]) {
      return false;
    }
  }
  return true;
}

// // launch school solution
// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }
console.log(isPalindrome("madam"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome("356653"));
console.log(isPalindrome(""));
