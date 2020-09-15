// input :  number
// output: number
// rules :
// returns the input number with its digits reversed

// Algorithm:
// convert input number to string str
// reversed the str
// convert str to an array, each element of the array is a digit
// reversed the array
// convert array to string
//convert string to number

function reverseNumber(number) {
  return Number(String(number).split("").reverse().join(""));
}

console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(12213)); // 31221
console.log(reverseNumber(456)); // 654
console.log(reverseNumber(12700)); // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1)); // 1
