// PEDAC
// Input:
// - two strings
// Output:
// - boolean (true or false)
// Rules:
// - Explicit requirements:
// -  if portion of str1 can reranged to match str2 => return true
//- strings only lowercase letters
// - if str1 and str2 null => terminated
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: rkqodlow => r, k, q, o, d, l, o, w => remove k, q => r, o, d, l ,o, w => arrays charaters length >= word2 => no => return false
// => yes => if they are equal check if all charteres in both count the same => yes => true => else return false
// => katas => k, a, t, a, s =>  remove nothing =>  count w1 charteres , count w2 charters => compare them
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  convert str1 to array of charaters
//  remove the unShared charaters with str2
//  if the array result length less than str2 length => return false
//  else
//  check if all str2 character are in array result => return true. otherwise return false
// PSEUDOCODE:
//
function scramble(str1, str2) {
  let str1Char = str1.split("").filter((char) => str2.includes(char));
  if (str1Char.length >= str2.length) {
    return str2.split("").every((char) => str1Char.includes(char));
  } else {
    return false;
  }
}

console.log(scramble("rkqodlw", "world"), true);
console.log(scramble("cedewaraaossoqqyt", "codewars"), true);
console.log(scramble("katas", "steak"), false);
console.log(scramble("scriptjava", "javascript"), true);
console.log(scramble("scriptingjava", "javascript"), true);
console.log(scramble("scriptsjava", "javascripts"), true);
console.log(scramble("jscripts", "javascript"), false);
console.log(scramble("aabbcamaomsccdd", "commas"), true);
