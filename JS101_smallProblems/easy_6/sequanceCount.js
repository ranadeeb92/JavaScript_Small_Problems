// input : two numbers (count, start)
// output : array
// rules :
// array length is equal to count
// each element in the array = multiple of statring  number
// in count = 0 return empty array

// algo:
// declare a varaible arr to hold the array result
// build the array
//  - loop through integers starating from 0 to count
//      - value = start || prevoisElement + start
//     - add number to array (value)
// return the array

// function sequence(count, start) {
//   let arr = [];
//   for (let index = 0; index < count; index++) {
//     let value = arr[index - 1] + start || start;
//     arr.push(value);
//   }
//   return arr;
// }

function sequence(count, start) {
  let arr = [];
  for (let index = 1; index <= count; index++) {
    let value = index * start;
    arr.push(value);
  }
  return arr;
}

console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence(4, -7)); // [-7, -14, -21, -28]
console.log(sequence(5, 5)); // [5, 10, 15, 20, 25]
console.log(sequence(3, 0)); // [0, 0, 0]
console.log(sequence(0, 1000000)); // []
