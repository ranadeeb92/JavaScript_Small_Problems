// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// - two arrays(sorted array)
// Output:
// - array( new array that contains all the elements from both input arrays in sorted order)
// Rules:
// - Explicit requirements:
// -  do not mutate the input array
// - must build the result array one element at a time in proper order
// - Implicit requirements:
// -  if one of the input element is empty array return a the other array as it
// -
// -

// EXAMPLES/TEST CASES:
// i: [1, 10] , [1. 3]
// =>
// o:  [1, 2, 3, 10]
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// get the length of the first input array and assign it to a varaible len1
// get the length of the second input array and assign it to a varaible len2
// if one of these lengths is 0 return the other input array
// declare a variable mergeResult and initialized with empty arrray
// declare a variable i and initalized with 0
// declare a variable j and initalized with 0
// start a loop from index = 0 until len1 + len2
//   - if arr1[i] and arr2[j] are not undefined
//      => if arr1[i] > arr2[j]
//         - add arr2[j] to mergeResult and increment j by one
//         - continue to next iteration
//      => else if arr1[i] < arr2[j]
//         - add arr2[j] to mergeResult and increment i by one
//         - continue to next iteration
//      => else
//         - addd arr1[i] , arr2[j] to mergeResult and increment both by 1
//         - contionue to next iterartion
//   - else
//      => if arr1[i] is undefined and arr2[j] is not
//           => add arr2[j] to mergeResult and increment j by one
//           => continue the loop
//     => else arr1[i] is not and arr2[j] is undefined
//           => add arr1[i] to mergeResult and increment i by one
//           => continue the loop
//

// PSEUDOCODE:
//

function merge(arr1, arr2) {
  let result = [];
  let len1 = arr1.length;
  let len2 = arr2.length;
  let i = 0;
  let j = 0;
  if (len1 === 0) return arr2;
  if (len2 === 0) return arr1;
  while (true) {
    if (i === len1 && j === len2) break;
    if (arr1[i] && arr2[j]) {
      if (arr1[i] <= arr2[j]) {
        result.push(arr1[i]);
        i += 1;
      } else {
        result.push(arr2[j]);
        j += 1;
      }
    } else {
      if (!arr1[i]) {
        result.push(arr2[j]);
        j += 1;
      } else {
        result.push(arr1[i]);
        i += 1;
      }
    }
  }
  return result;
}

console.log(merge([1, 2, 2], [1, 4]));
console.log(merge([1, 5, 9], [2, 6, 8])); // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2])); // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5])); // [1, 4, 5]
console.log(merge([1, 4, 5], [])); // [1, 4, 5]
