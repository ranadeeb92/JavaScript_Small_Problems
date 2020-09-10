// input : two arrays
// output : array
// rules :
// - returned array containes all elements from input arrays
// - each element taken in alternation
// - both input arrays are non-empty
// - both has the same number of elements

// algrithm:
// - declare a variable result and assign empty array to it.
// - combine input arrays in result
// - loop through first input array
// - add to result an element from first input array
// - add to result an element from  second input array
// - return result

// function interLeave(arr1, arr2) {
//   let result = [];
//   for (let index = 0; index < arr1.length; index++) {
//     result.push(arr1[index], arr2[index]);
//   }
//   return result;
// }

// using forEach method
// function interLeave(arr1, arr2) {
//   let result = [];
//   arr1.forEach((ele, index) => {
//     result.push(ele, arr2[index]);
//   });
//   return result;
// }

// using map
// function interLeave(arr1, arr2) {
//   let finalArray = [];
//   let result1 = arr1.map((ele, index) => {
//     return [ele].concat(arr2[index]);
//   });
//   // my flat
//   result1.forEach((innerArray) => {
//     finalArray = finalArray.concat(innerArray);
//   });
//   return finalArray;
// }

// using reduce
// function interLeave(arr1, arr2) {
//   return arr1.reduce((acc, ele, index) => acc.concat([ele, arr2[index]]), []);
// }
function interLeave(arr1, arr2) {
  return arr1.reduce((acc, ele, index) => {
    acc.push(ele, arr2[index]);
    return acc;
    // return [...acc, ele, arr2[index]];
  }, []);
}
console.log(interLeave([1, 2, 3], ["a", "b", "c"]));
