// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// - 3 numbers(each one represent a length of triangle side)
// Output:
// -  string (one of this four strings: 'equilateral', 'isosceles', 'scalene', or 'invalid')
// Rules:
// - Explicit requirements:
// -  determine the triangle's classification
// -  Equilateral: All three sides are of equal length.
// -  Isosceles: Two sides are of equal length, while the third is different.
// -  Scalene: All three sides are of different lengths.
// - invalid : have length equal to 0 || the sum of the lengths of the two shortest sides must be less than the length of the longest side
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  3, 3, 3
// =>
// o:   'equilateral'
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// if triangle isvalid=> return determine its type  'equilateral'||'isosceles'||'scalene'
//else return 'invalid'
// sub-process
//   - to determin triangle type:
//       - declare function called getTriangleType(inpt arguments)
//           - if all three arguments are equals => return 'equilateral'
//           - else if just two of them are equals => return 'isosceles'
//           - else return scalene
// sub-process
// to determin if a triangle is valid
//  - declare function called isvalid that takes input arguments
//     - comput triangle perimeter
//     - compute the max side length
//     - compute the min side length
//     - compute the middle side length
//     - if any of this length equals to zero => return false
//        - if  sum of the min length and middle length < max length => return false
//     - else return true
// PSEUDOCODE:
//

function triangle(len1, len2, len3) {
  if (isValid(len1, len2, len3)) {
    return getTriangleType(len1, len2, len3);
  } else {
    return "invalid";
  }
}

function getTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) return "equilateral";
  else if (side1 === side2 || side2 === side3 || side1 === side3)
    return "isosceles";
  else return "scalene";
}

function isValid(side1, side2, side3) {
  let perimeter = side1 + side2 + side3;
  let maxSideLength = Math.max(side1, side2, side3);
  let minSideLength = Math.min(side1, side2, side3);
  let middleSideLength = perimeter - (maxSideLength + minSideLength);

  if (maxSideLength === 0 || minSideLength === 0 || middleSideLength === 0)
    return false;
  else if (minSideLength + middleSideLength < maxSideLength) return false;
  else return true;
}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
