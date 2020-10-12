// PEDAC
// Input:
// - array (array of integers)
// Output:
// - number (index)  0r -1
// Rules:
// - Explicit requirements:
// - find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N
// - input array length > 0 and array length < 1000
// - If you are given an array with multiple answers, return the lowest correct index.
// - Implicit requirements:
// -  both side do not have to have the same length
// -  we do not add number in split position to sum
// -

// EXAMPLES/TEST CASES:
// i: [1, 2, 3, 4, 3, 2, 1] => sum([1, 2, 3]) === sum([1, 2, 3]) => index 3
// => left side = [] , rigth side = [2, 3, 4, 3, 2, 1]  => their sum is not equal
// => left side = [1] , rigth side = [3, 4, 1, 2, 3] => their sum is not equal
// => left side = [1, 2] , rigth side = [4, 1, 2, 3] => their sum is not equal
// => left side = [1, 2, 3] , rigth side = [1, 2, 3] => their sum  equal stro => return index
// o:
// =>
// DATA STRUCTURES: arrays
// ALGORYTHM:
// loop over the input array
//   - get leftSide = an arra of all left side of current index element
//  - get rigthSide = an arra of all right side of current index element
//   - comput the sum for both side
//   - compare the sums
//      - if they are equal => return the current index
//      - else continue
// return -1
//
// PSEUDOCODE:
//
function findEvenIndex(arr) {
  for (let index = 0; index < arr.length; index++) {
    let leftSide = arr.slice(0, index);
    let rightSide = arr.slice(index + 1);
    let sumLeft = leftSide.reduce((sum, num) => (sum += num), 0);
    let sumRight = rightSide.reduce((sum, num) => (sum += num), 0);
    if (sumLeft === sumRight) return index;
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1);
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1);
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3);
