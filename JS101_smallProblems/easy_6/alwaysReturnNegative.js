// input : number
// output: number (negative number)
// rules :
// the input number is positive return the negative number of it
// the input number is negative return the number as it

// Algorithm:
// check if the input number is pos or neg
// if pos convert it to neg and return result
//  - convert the input number to string
//  - append neg sign in the begining of the string
//  - convert string to number
// else return the number as it

// function negative(number) {
//   if (number < 0) return number;
//   return Number(`-${number}`);
// }

// // Another Solution
// function negative(number) {
//   return Math.abs(number) * -1;
// }

// using ternary expression
function negative(number) {
  return number < 0 ? number : number * -1;
}

console.log(negative(5)); // -5
console.log(negative(-3)); // -3
console.log(negative(0)); // -0
