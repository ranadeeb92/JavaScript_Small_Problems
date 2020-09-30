// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// - number
// Output:
// - number
// Rules:
// - Explicit requirements:
// -   compute the difference between:
//      - (sum of the first count positive integer)**2
//      - sum(squares of the first count positive integers)
// - Implicit requirements:
// -   the first count start from 1 until input number
// -
// -

// EXAMPLES/TEST CASES:
// i: 3 => (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2) => 36 - 14 => 22
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  squareSum = compute the square of the sum of the first count positive integers
//   - start a loop from count equal 1 until input number
//       - compute the sum of all counts
//       - copmute the square of the sum
//  sumSquare = compute the sum of the squares of the first count positive integers
//   - start a loop from count equal 1 until input number
//       - compute the square of all counts
//       - compute the sum of those squares
// reult = compute the difference betwwen squereSum and sumSqure
//  return result
// PSEUDOCODE:
//

// function sumSquareDifference(number) {
//   let squareSum = getSquareSum(number);
//   //console.log(squareSum);
//   let sumSquare = getSumSquare(number);
//   //console.log(sumSquare);
//   return Math.abs(squareSum - sumSquare);
// }

// function getSquareSum(num) {
//   let sum = 0;
//   let i = 1;
//   while (i <= num) {
//     sum += i;
//     i++;
//   }
//   return sum ** 2;
// }

// function getSumSquare(num) {
//   let sumSquares = 0;
//   let i = 1;
//   while (i <= num) {
//     sumSquares += i ** 2;
//     i++;
//   }
//   return sumSquares;
// }

function sumSquareDifference(number) {
  let squareSum = 0;
  let sumSquare = 0;
  let count = 1;
  while (count <= number) {
    squareSum += count;
    sumSquare += count ** 2;
    count++;
  }
  return Math.abs(squareSum ** 2 - sumSquare);
}

console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150
