// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -
// Output:
// -
// Rules:
// - Explicit requirements:
// - rational number => is any number that can be represnted as the result of the division between two integers
// - the number to the left is called numerator
// - the number to the right is called denominator
// - unit fraction => is a rational number where the numerator is 1
// - egyption fraction => is the sum of a series of distinct unit fractions(no two are the same)
// every positive rational number can be written as egyption fraction
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
//
//
//
//
// PSEUDOCODE:
//
const Fraction = require("fraction.js");

function fraction(num1, num2) {
  return new Fraction(num1, num2);
}

function egyptian(fractionNumber) {
  let result = [];
  let sum = new Fraction(0, 1);
  let i = 1;
  if (fractionNumber.n !== 1) {
    while (true) {
      let f = new Fraction(1, i);
      // console.log(f, sum);
      if (sum.add(f) < fractionNumber) {
        sum = sum.add(f);
        result.push(i);
      } else if (fractionNumber.sub(sum.add(f)) == 0) {
        result.push(i);
        break;
      }
      i++;
    }
  } else {
    result.push(fractionNumber.d);
  }
  return result;
}

function unegyptian(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += 1 / array[index];
  }
  let f = new Fraction(sum);
  return f.n / f.d;
}
// console.log(unegyptian(egyptian(fraction(2, 1))));

console.log(egyptian(Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3

// let f = new
