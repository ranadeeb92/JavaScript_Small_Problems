// input : array of integers
// output :  number
// rules :
// returned value is the average of all the integer in the array
// returned vakue rounded down
// input array will never be empty
// returned value always be positive integer

// algo:
// -1 declare average varaible to hold the result
// -2 compute the average of all elements in the array
//  - loop over the input array
//  - sum = compute the total of all elements array
//  - average = sum / array length
//  - round down average
// -3 return average

// function average(arr) {
//   let avg = 0;
//   avg = arr.reduce((acc, num) => acc + num, 0) / arr.length;
//   return Math.floor(avg);
// }

// using forEach
function average(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return Math.floor(sum / arr.length);
}

console.log(average([1, 5, 87, 45, 8, 8])); // 25
console.log(average([9, 47, 23, 95, 16, 52])); // 40
