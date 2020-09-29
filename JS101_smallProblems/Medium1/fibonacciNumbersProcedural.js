// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// - number (nth)
// Output:
// - number(nth fibonacci number)
// Rules:
// - Explicit requirements:
// -  fibonacci(1) => 1
// -  fibonacci(2) => 1
// -  fibonacci(nth) => fibonacci(nth - 1) + fibonacci(nth - 2)
// -  without using recursive
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  3
// =>
// o:  2
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// declare variable fibo1 and initialize it with 1 (firstFibonacciNumber)
// declare variable fibo2 and initialize it with 1 (secondFibonacciNumber)
// decalre variable fiboN and initialized with 0;
// start loop from 2 until n
//   - fiboN = fibo1 + fibo2
//   - fibo1 = fibo2
//   - fibo2 = fiboN
// return fiboN
// PSEUDOCODE:
//

function fibonacci(number) {
  let fibo1 = 1;
  let fibo2 = 1;
  let fiboN = 0;
  let i = 2;
  while (i < number) {
    fiboN = fibo1 + fibo2;
    fibo1 = fibo2;
    fibo2 = fiboN;
    i++;
  }
  return fiboN;
}

console.log(fibonacci(10000)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
