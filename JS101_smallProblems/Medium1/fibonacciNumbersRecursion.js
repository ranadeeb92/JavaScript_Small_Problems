// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// - number
// Output:
// - number(input fibonacci number)
// Rules:
// - Explicit requirements:
// - f(1) = 1
// - f(2) = 1
// - f(n) = f(n-1) + f(n-2) where n > 2
// - use recursive function
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: 3
// =>
// o: 2
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//
//
//
//
// PSEUDOCODE:
//

function fibonacci(number) {
  if (number <= 2) return 1;
  else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

console.log(fibonacci(1));
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765
