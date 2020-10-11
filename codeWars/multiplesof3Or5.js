// PEDAC
// Input:
// - number
// Output:
// - number(sum of all multiples of 3 or 5 below than input number)
// Rules:
// - Explicit requirements:
// -  If the number is a multiple of both 3 and 5, only count it once.
// - if input number is negative return 0
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: 10 => 3, 5, 6, 9 => sum(3, 5, 6, 9) => 23
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// check if number < 0 return 0
// start a loop from 1 until number - 1
//   - check if current number multipe 3 or 5
//      - add this number to an array
// sum all array of multiples numbers
// return sum
// PSEUDOCODE:
//
function solution(number) {
  if (number < 0) return 0;
  let multiples = [];
  for (let num = 0; num < number; num++) {
    if (num % 5 === 0 || num % 3 === 0) {
      if (!multiples.includes(num)) {
        multiples.push(num);
      }
    }
  }
  return multiples.reduce((sum, num) => (sum += num));
}

function solution(number) {
  let sum = 0;
  for (let num = 0; num < number; num++) {
    if (num % 5 === 0 || num % 3 === 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(solution(10) === 23);
