// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  number
// Output:
// -  number
// Rules:
// - Explicit requirements:
// -  memoization is an approach that involves saving a computed answer for future reuse, instead of computing it from the scratch every time it is needed.
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// declare a global scope varaible called fiboArr and assign to it an empty array
//  if input number less than or equal 2 => return 1;
//  else
//    - if fiboArr[number] exist
//        - return fiboArr[number];
//    - else
//       - fiboArr[number] = fibonacci(number - 1) + fibonacci(number - 2)
//       - return fiboArr[number];
//
//
// PSEUDOCODE:
//
const fiboArr = [];

function fibonacci(number) {
  //let fibo2 = 0;

  if (number <= 2) {
    return 1;
  } else if (fiboArr[number]) {
    //   fibo2 = fiboArr[number - 2];
    // } else {
    //   fibo2 = fibonacci(number - 2);
    return fiboArr[number];
  } else {
    fiboArr[number] = fibonacci(number - 1) + fibonacci(number - 2);
    return fiboArr[number];
  }
}

console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(6));
