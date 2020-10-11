// PEDAC
// Input:
// -array of integers
// Output:
// -number (the minimum number to be inserted in input array)
// Rules:
// - Explicit requirements:
// - after insert the minimum number the sum of all elements of list should equal the closest prime number .
// - input array has at least 2 numbers
// - all numbers in input array are positives > 0
// - Repetition of numbers in the array could occur.
// - prime number : num > 1 ony divided by itselfe and 1 without reminder
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: [3, 1, 2] => sum = 6 is not a prime number => 6+1 = 7 is prime number(it is only divded by itself and 1 without remider)
// => [2, 12, 8, 4, 6] => sum = 32 =>32 is not a prime => 32+ 1 = 33 is not prime =>... 32 + 5 = 37 is prime
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  comput the sum of the input array numbers
//  if sum is prime => return 0
//  else start a loop from 1
//    => add current index number to sum
//    => check if sum is a prime number => strop the loop => return index number
//    => else repeat the loop
//
// PSEUDOCODE:
//
function minimumNumber(numbers) {
  let sum = numbers.reduce((sum, num) => (sum += num));
  if (isPrime(sum)) {
    return 0;
  }
  let i = 1;
  while (true) {
    sum += i;
    if (isPrime(sum)) return i;
    sum -= i;
    i++;
  }
}

function minimumNumber(numbers) {
  let sum = numbers.reduce((sum, num) => (sum += num));
  if (isPrime(sum)) {
    return 0;
  }
  let i = 1;
  while (true) {
    sum += i;
    if (isPrime(sum)) return i;
    sum -= i;
    i++;
  }
}

function isPrime(number) {
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

console.log(minimumNumber([3, 1, 2]) === 1);
console.log(minimumNumber([5, 2]) === 0);
console.log(minimumNumber([1, 1, 1]) === 0);
console.log(minimumNumber([2, 12, 8, 4, 6]) === 5);
console.log(minimumNumber([50, 39, 49, 6, 17, 28]) === 2);
