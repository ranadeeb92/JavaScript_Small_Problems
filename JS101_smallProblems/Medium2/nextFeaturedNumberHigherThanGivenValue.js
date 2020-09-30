// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// - number (integer)
// Output:
// - number(next featured number > than input number)
// Rules:
// - Explicit requirements:
// -  featured number :
// -  is an odd number and  multiple of 7
// -  and all its digit occuring exactly once each
// -  throw error if there is no next feature number.
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  12
// =>
// o:  21
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// declare a variable nextFeatureNumber ;
//  start a loop from input number + 1 until 9876543201
//    - if current number isFeature
//        - assign it to the variable nextFeatureNumber
//        - stop the loop
// if nextFeatureNumber exist
//   return nextFeatureNumber
// esle throw an error
// PSEUDOCODE:
//

function featured(number) {
  let nextFeatureNumber = 0;
  for (let num = number + 1; num <= 9876543201; num++) {
    if (isFeatured(num)) {
      nextFeatureNumber = num;
      //console.log(nextFeatureNumber);
      break;
    }
  }
  return nextFeatureNumber
    ? nextFeatureNumber
    : "there is no next featured number exist";
}

function isFeatured(num) {
  return num % 2 === 1 && num % 7 === 0 && allDigitsOccureOnce(num);
}

function allDigitsOccureOnce(number) {
  let digits = [];
  let numString = String(number);
  for (let index = 0; index < numString.length; index++) {
    if (digits.includes(numString[index])) {
      return false;
    }
    digits.push(numString[index]);
  }
  return true;
}

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."
