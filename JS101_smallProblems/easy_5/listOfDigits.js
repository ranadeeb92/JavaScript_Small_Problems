// input : number (positive integer)
// output : array of number digits
// rules :
// the input should be a number

// algorithm :
// - convert input numbet to string
// - convert string to an array each charater is an element in the array
// - convert each element to number in the array
// - return the array of digits

// function digitList(number) {
//   return String(number)
//     .split("")
//     .map((ele) => Number(ele));
// }

// more complicated code
function digitList(number) {
  let array_number = [];
  let len = String(number).length;
  for (let ind = len; ind > 0; ind--) {
    array_number.push(Math.floor(number / Math.pow(10, ind - 1)));
    number = Math.floor(number % Math.pow(10, ind - 1));
  }
  return array_number;
}
console.log(digitList(12345)); // [1, 2, 3, 4, 5]
console.log(digitList(7)); // [7]
console.log(digitList(375290)); // [3, 7, 5, 2, 9, 0]
console.log(digitList(444)); // [4, 4, 4]
