// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  number
// Output:
// -  number (maximum rotation)
// Rules:
// - Explicit requirements:
// -
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  105
// i: 3456
// =>
// o:
// =>   => 051 => the final result is 15
// => 4563 => 4635 => the final result is 4653
// DATA STRUCTURES:
// ALGORYTHM:
//  convert number to a string
//  declare a variable called strNumber and initialized with strNumber
// loop over the string
//    - currentNumber assgin to it a copy of the strNumber starting from the current index
//    - rotate right most digits of the current number
//    - if maxRotationNumber.length equals to rotatednumber.length
//    -   maxRotationNumber = rotatedNumber
//    - else
//      - len = maxRotationNumber.length - to rotatednumber.length
//      - maxRotationNumber = copy of maxRotationNumber starting from 0 until len concatenated with rotated currentNumber
// return maxRotationNumber
// PSEUDOCODE:
//

// function maxRotation(number) {
//   let numberStr = String(number);
//   let maxRotationNumber = numberStr;
//   for (let index = 0; index < numberStr.length - 1; index++) {
//     let currentNumber = maxRotationNumber.slice(index); // => 105
//     let rotatedNumber = rotateRightmostDigits(
//       currentNumber,
//       numberStr.length - index
//     );

//     if (maxRotationNumber.length === rotatedNumber.length) {
//       maxRotationNumber = rotatedNumber;
//     } else {
//       let len = maxRotationNumber.length - rotatedNumber.length;
//       maxRotationNumber = maxRotationNumber.slice(0, len) + rotatedNumber;
//     }
//   }

//   return Number(maxRotationNumber);
// }

function maxRotation(number) {
  let numberStr = String(number);
  let maxRotationNumber = number;
  for (let index = 0; index < numberStr.length - 1; index++) {
    maxRotationNumber = rotateRightmostDigits(
      maxRotationNumber,
      numberStr.length - index
    );
  }

  return maxRotationNumber;
}

function rotateRightmostDigits(number, count) {
  let strNumber = String(number);
  let rightMostDigit = strNumber[strNumber.length - count];
  let newStr = strNumber
    .slice(0, strNumber.length - count)
    .concat(strNumber.slice(strNumber.length - count + 1));
  return Number(newStr.concat(rightMostDigit));
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845
