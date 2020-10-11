// PEDAC
// Input:
// - two arrays(arrays of integers, the have the same length)
// Output:
// - number (ang of squared absolute value ) (int , float)
// Rules:
// - Explicit requirements:
// -
// - Implicit requirements:

// EXAMPLES/TEST CASES:
// i: [1, 2, 3], [4, 5, 6] => 1-4 = -3 => |-3| = 3 => 3 ** 2 => 9
// =>  9, 9, 9 =>  avg = 9+9+9 / 3 =>  9
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// -   declare sum = 0;
// -   loop over the input arrays
// -     - compute the absoult value of difference between corresponding numbers
//       - square the result
//       - add this squred value to sum
// -   return sum/ arr1 length
// PSEUDOCODE:
//

// var solution = function(firstArray, secondArray) {
//   let sum = 0;
//   for(let index = 0; index < firstArray.length; index++){
//     sum += Math.abs(firstArray[index] - secondArray[index]) ** 2;
//   }
//   return sum / firstArray.length;
// }

var solution = function (firstArray, secondArray) {
  return (
    firstArray.reduce(
      (sum, num, index) =>
        (sum += Math.pow(Math.abs(num - secondArray[index]), 2)),
      0
    ) / firstArray.length
  );
};

console.log(solution([1, 2, 3], [4, 5, 6]), 9);
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]), 16.5);
console.log(solution([0, -1], [-1, 0]), 1);
