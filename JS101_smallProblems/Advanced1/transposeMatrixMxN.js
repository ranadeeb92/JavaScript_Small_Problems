// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// - matrix (MxN)
// Output:
// - matrix (NxM)
// Rules:
// - Explicit requirements:
// -  M is the number of rows in matrix
// -  N is the number of columns in matrix
// -  we can compute N value by counting the number of elements in each  a row
// - Implicit requirements:
// -  each row in the matrix has the same elements number
// -
// -

// EXAMPLES/TEST CASES:
// i:  [[1, 2, 3]] M = 1, N = 3
// =>
// o:  [[1],[2].[3]] M = 3, N = 1
// =>
// DATA STRUCTURES: arrays
// ALGORYTHM:
//  declare variable M that hold the number of rows in the input matrix
//  declare variable N that hold the number of columns in the input matrix
//  start a loop from index = 0 until N
//    - dclare a variable called newRow and intialized with empty array
//   - start an inner loop from innerIndex = 0  until M
//       - append current matrix element [innerIndex][outerIndex] to newRow
//   - switch current matrix element with newRow array
//  return matrix
// PSEUDOCODE:
//

function transpose(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let result = [];
  for (let index = 0; index < n; index++) {
    let newRow = [];
    for (let index2 = 0; index2 < m; index2++) {
      newRow.push(matrix[index2][index]);
    }
    result[index] = newRow;
  }
  return result;
}

const matrix = [
  [1, 5, 8, 5, 1],
  [4, 7, 2, 0, 1],
  [3, 9, 6, 1, 1],
];
// const matrix = [
//   [1, 5, 8, 5],
//   [4, 7, 2, 0],
//   [3, 9, 6, 1],
// ];
let newMatrix = transpose(matrix);

console.log(newMatrix.join("\n")); // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix); // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]])); // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]); // [[1, 2, 3, 4]]
transpose([[1]]); // [[1]]

transpose([
  [1, 2, 3, 4, 5],
  [4, 3, 2, 1, 0],
  [3, 7, 8, 6, 2],
]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
