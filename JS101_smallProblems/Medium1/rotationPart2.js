// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  number , count
// Output:
// -  number (rotated number)
// Rules:
// - Explicit requirements:
// -   rotates the last count digits of a number
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  76542, 2
// =>
// o:  76524
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  convert number to a string
//  copy the digit in the (str.length -count) position from the string
//  remove the digit in postion (str.length -count)
//  append the copy digit to the end of the string
//  convert the string to number
//  return the number
// PSEUDOCODE:
//

function rotateRightmostDigits(number, count) {
  let strNumber = String(number);
  let rightMostDigit = strNumber[strNumber.length - count];
  let newStr = strNumber
    .slice(0, strNumber.length - count)
    .concat(strNumber.slice(strNumber.length - count + 1));
  return Number(newStr.concat(rightMostDigit));
}

// another solution
// function rotateRightmostDigits(number, count) {
//   let numberStr = String(number);
//   // check if count is not greater than number length
//   if (count > numberStr.length)
//     throw Error("Count is greater than the number of digits ");
//   let firstPart = numberStr.slice(0, numberStr.length - count);
//   let secondPart = numberStr.slice(numberStr.length - count);
//   let rotatedSecondPart = secondPart.slice(1).concat(secondPart[0]);

//   return Number(firstPart + rotatedSecondPart);
// }

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(795291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
