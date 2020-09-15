// input :  number (integer)
// output : array (containing all integers from 1 - input integer(inclusive))
// rules :
// returned array in assending order

// algorithm:
// declare a varaible arr to hold the result and assign an empty array to it
// build the array of integers
//  - loop over integers starting from 1 to input number
//  - each iteration add the current integer to the array
// return the array

// function sequence(number) {
//   let integersArr = [];
//   for (let index = 1; index <= number; index++) {
//     integersArr.push(index);
//   }
//   return integersArr;
// }

// using map
function sequence(number) {
  return Array(number)
    .fill()
    .map((_, index) => index + 1);
}

console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]
