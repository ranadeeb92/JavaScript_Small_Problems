// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  array
// Output:
// -  array(rotated array)
// Rules:
// - Explicit requirements:
// - if the input is not an array => undefined
// - if the input is an empty array => empty array
// - should not mutate the original array
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  [1, 2, 3]
// =>
// o:  [2, 3, 1]
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  if the input is not an array => return undefined
//  if the input is an empty array => return empty array
//  if non of the previous cases
//   - make a copy of the input array
//   - rotate the array copy
//      - remove first element from the array and add it to the end of this array
// return the rotates array
// PSEUDOCODE:
//

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];
  let copyArray = arr.slice(1);
  copyArray.push(arr[0]);
  return copyArray;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(["a", "b", "c"])); // ["b", "c", "a"]
console.log(rotateArray(["a"])); // ["a"]
console.log(rotateArray([1, "a", 3, "c"])); // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([])); // []

// return `undefined` if the argument is not an array
console.log(rotateArray()); // undefined
console.log(rotateArray(1)); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array)); // [2, 3, 4, 1]
console.log(array);
