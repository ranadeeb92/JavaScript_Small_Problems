// in : string
// out : true or false
// rules:
// - case insensetives
// - ignore all none alphnumerice characters like (' , space)

// algo :
// convert string to lowercase to avoid case-sensitives
// build the reversed string:
// create an array from the string
// filter the array with ignoring the non-alphanumeric charaters
// build a string from it
// check if the string isPalindrome
// return the result

function isRealPalindrome(str) {
  let new_str = str
    .toLowerCase()
    .split("")
    .filter((char) => /[a-z0-9]/.test(char))
    .join("");
  return isPalindrome(new_str);
}

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isRealPalindrome("madam")); // true
console.log(isRealPalindrome("Madam"));
console.log(isRealPalindrome("Madam, I'm Adam"));
console.log(isRealPalindrome("356653")); // true
console.log(isRealPalindrome("356a653")); // true
console.log(isRealPalindrome("123ab321"));

// console.log(isRealPalindrome("madam"));
// console.log(isRealPalindrome("Madam"));
// console.log(isRealPalindrome("madam i'm adam"));
// console.log(isRealPalindrome("356653"));
// console.log(isRealPalindrome(""));
// console.log(isRealPalindrome("123ab321"));
