// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// - array of numbers
// Output:
// -  number (sum of the sums of each leading subsequence for that array)
// Rules:
// - Explicit requirements:
// -   input array always conatains at least one number
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  [3, 5, 2]
// =>
// o:
// =>  21
// DATA STRUCTURES:
// ALGORYTHM:
//  decalre a variable called sum and initialize ir with 0
//  loop over the input array
//    - extarct sub array from input array strat at index 0 until index + 1
//       -start inner loop for each sub array
//          - comput the sum of sub array elements
//          - return the sum
//    - add the inner sum to the sum
// return sum
// PSEUDOCODE:
//

function sumOfSums(array) {
  let sum = 0;
  array.forEach((_, index) => {
    sum += array.slice(0, index + 1).reduce((acc, ele) => (acc += ele), 0);
  });
  return sum;
}

console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35
