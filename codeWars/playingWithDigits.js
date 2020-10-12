// PEDAC
// Input:
// - two numbers (integers > 0)
// Output:
// - number (sum n digit to p power === k * n)
// Rules:
// - Explicit requirements:
// -  a, b, c is n digits
// -  a^p + b^(p+1)+... === n * k
// - if k exit return it , if not return -1
// - n and p are always integers >  0
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: n = 89, p = 1 => 8 ^ 1 + 9 ^ 2 = 89
// => 89 * k = 89 => k = 89/ 89 = 1 => k = 1
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  compute the sum of input integer digits to the power p
//    - convert input number to string
//    - loop over the string
//      - sum += current digit to the power p + index
//  copmute k by divitding sum / n
//    - if k is exist(it is intger) => return it
//    - else return -1
// PSEUDOCODE:
//
function digPow(n, p) {
  let sum = 0;
  let nStr = String(n);
  for (let index = 0; index < nStr.length; index++) {
    sum += Math.pow(Number(nStr[index]), p + index);
  }
  let k = sum / n;
  return Number.isInteger(k) ? k : -1;
}

console.log(digPow(89, 1) === 1);
console.log(digPow(92, 1) === -1);
console.log(digPow(46288, 3) === 51);
