// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  string
// Output:
// -  array (list of all palindromic substring)
// Rules:
// - Explicit requirements:
// -   The substrings in the returned list should be sorted by their order of appearance in the input string
// - duplicate substrings allowed
// - palindrome is case sensitive AbcbaA is palindrome, but Abcba is not
// - singel charavter are not palindrome
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:  array
// ALGORYTHM:
//  declare an array substringsArray = substrings(input)
//  extract all palondrome substring from sunbstrings array
//   loop over substrings array
//    - if the current substring isPalindrome keep it in the array
//    - else remove it
//  return the palindrom substrings array
// algorithm :
// substrings:
// convert input str to array
//  loop over the array
//    - for each char get all substring in an array that has all substring start with this character from input string
//  concatenat all the reutrned arrays for each character
//  return the result array
// PSEUDOCODE:
//

function palindromes(str) {
  let substringsArray = substrings(str);
  let substringPalindrome = substringsArray.filter(isPalindrome);
  return substringPalindrome;
}

function substrings(str) {
  let result = [];
  result = str.split("").map((_, index) => {
    return result.concat(subStringsStatWithChar(str.slice(index)));
  });
  result = result.reduce((acc, ele) => {
    return acc.concat(ele);
  }, []);
  return result;
}

function subStringsStatWithChar(string) {
  return string.split("").map((_, index) => string.slice(0, index + 1));
}

function isPalindrome(substring) {
  if (substring.length === 1) return false;
  return substring.split("").reverse().join("") === substring;
}

console.log(palindromes("abcd")); // []
console.log(palindromes("madam")); // [ "madam", "ada" ]

console.log(palindromes("hello-madam-did-madam-goodbye"));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes("knitting cassettes"));
