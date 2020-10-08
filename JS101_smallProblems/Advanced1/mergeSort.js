// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// - array (all array's elements are the same data type)
// Output:
// - new array
// Rules:
// - Explicit requirements:
// -  merge sort is a recursive sorting algorithm
// - it works by breaking down an array's elements into nested subarrays
// - combining those nested subarrays back together in sorted order
// -
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: [9, 5, 7, 1] => [[9, 5], [7, 1]] => [[[9], [5]], [[7], [1]]]
// =>  [[5, 9],[1, 7]] =>
// o:  [1, 5, 7, 9]
// =>
// DATA STRUCTURES: arrays
// ALGORYTHM:
//
//
//
//
// PSEUDOCODE:
//

// [5, 3] => [[5, 3]]=> [[[5], [3]]] => [[3, 5]] => [3, 5]
// [6, 2, 7, 1, 4] => [[6, 2], [7, 1], [4]]
// => [[[6], [2]],[[7], [1]], [4]]
// => [[2, 6], [1, 7], [4]]
// => [1, 2, 4, 6, 7]

function mergeSort(array) {
  if (array.length === 1) return array;

  let subArray1 = array.slice(0, array.length / 2); 
  console.log(subArray1);
  let subArray2 = array.slice(array.length / 2); 
  console.log(subArray2);
  subArray1 = mergeSort(subArray1); 
  console.log(subArray1);
  subArray2 = mergeSort(subArray2);
  console.log(subArray2);

  return merge(subArray1, subArray2);
}

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

console.log(mergeSort([9, 5, 7, 1])); // [1, 5, 7, 9]
// console.log(mergeSort([5, 3])); // [3, 5]
// console.log(mergeSort([6, 2, 7, 1, 4])); // [1, 2, 4, 6, 7]

// console.log(
//   mergeSort(["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"])
// );
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// console.log(
//   mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46])
// );
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
