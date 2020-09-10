// in : number
// out : boolean value
// rule :
// palindromic number reads the same forwards and backwards
// number with on e digit => returns true

// algo:
// convert number to string
// check the length of the string === 1
// return true
// if not check if the string of numbers is palindromic
// return true otherwise false
// assume the input is a number

function isPalindromicNumber(number) {
  let num_str = String(number);
  if (num_str.length === 1) {
    return true;
  } else {
    return isPalindrome(num_str);
  }
}

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindromicNumber(00034543)); // true
console.log(isPalindromicNumber(o123210)); // false
console.log(isPalindromicNumber(0022)); // true
console.log(isPalindromicNumber(005)); // true

// console.log(isPalindromicNumber(034543)); // true
// console.log(isPalindromicNumber(0123210)); // false
// console.log(isPalindromicNumber(22)); // true
// console.log(isPalindromicNumber(5)); // true
