// Advanced javascript collections
// Practice problem 13
/**
 * Given the following data structure
 * sort the array so that the sub-arrays are ordered
 * based on the sum of the odd numbers that they contain.
 */

let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];

console.log(
  arr.sort((a, b) => {
    let totalOddArrA = a
      .filter((ele) => ele % 2 === 1)
      .reduce((acc, num) => acc + num);
    let totalOddArrB = b
      .filter((ele) => ele % 2 === 1)
      .reduce((acc, num) => acc + num);
    return totalOddArrA - totalOddArrB;
  })
);
