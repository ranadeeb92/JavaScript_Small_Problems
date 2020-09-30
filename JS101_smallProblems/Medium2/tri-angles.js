// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  numbers(three integer values)
// Output:
// -  string
// Rules:
// - Explicit requirements:
// -  right : one angle is exactly 90 degrees
// -  acute : all three angles less than 90 degrees
// -  obtuse : one angle greater than 90 degrees
// - validTriangle : sum of its angles = 180 and each angle > 0
// - if triangle is valid => it classified as one of this (right, acute, obtuse)
// - else it is invalid
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
//  if the triangle is valid
//     - if sum of its angles === 180 and non of them is less than or equal zero
//        - determin its calssification
//          - if one of its angles === 90 => return 'right'
//          - else if all its angles less than 90 => return 'acute'
//          - else return => 'obtuse'
//
//  else return 'invalid'
//
//
// PSEUDOCODE:
//

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];
  if (isValid(angles)) {
    return determinTriangleClassification(angles);
  }
  return "invalid";
}

function determinTriangleClassification(triangleAngles) {
  if (triangleAngles.some((angle) => angle === 90)) {
    return "right";
  } else if (triangleAngles.every((angle) => angle < 90)) {
    return "acute";
  } else {
    return "obtuse";
  }
}

function isValid(triangleAngles) {
  let sum = triangleAngles.reduce((sum, angle) => (sum += angle));
  let allNoneZero = triangleAngles.every((angle) => angle > 0);
  return allNoneZero && sum === 180;
}

console.log(triangle(60, 70, 50)); // "acute"
console.log(triangle(30, 90, 60)); // "right"
console.log(triangle(120, 50, 10)); // "obtuse"
console.log(triangle(0, 90, 90)); // "invalid"
console.log(triangle(50, 50, 50)); // "invalid"
