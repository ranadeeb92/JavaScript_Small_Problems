// in :  array of numbers
// out: array
// rules:
// - returns an array with the same number of elements
// - each element's value being the running total from the original array

// algo:
// build a new array from the input array
// loop over the input array
// and for each element return an acumelting value from adding the previous elements
// return a new array

// function runningTotal(array) {
//   let new_array = [];
//   if (array.length === 0) {
//     return new_array;
//   }
//   new_array.push(array[0]);
//   for (let index = 1; index < array.length; index++) {
//     new_array.push(array[index] + new_array[index - 1]);
//   }
//   return new_array;
// }

// -----------Another solution------------
function runningTotal(array) {
  let new_array = [];
  new_array = array.map((num, index) => {
    return array.slice(0, index + 1).reduce((acc, ele) => {
      return acc + ele;
    }, 0);
  });
  return new_array;
}

//-------------------Launch school solution-----------
// function runningTotal(array) {
//   let new_array = [];
//   let sum = 0;
//   for (let index = 0; index < array.length; index++) {
//     new_array.push((sum += array[index]));
//   }
//   return new_array;
// }

console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []
console.log(runningTotal([12, 3]));
