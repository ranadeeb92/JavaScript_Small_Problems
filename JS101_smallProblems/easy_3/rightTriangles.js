// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - positive integer
// Output:
// - logs a right triangles 
// Rules:
// - the diagonal side should have one end at the loxer-left of the triangle
// - And have other end at the upper-right
// - each side of the trianle have n stars
// - 
// -
// - 
// Questions: 
// -

// EXAMPLES/TEST CASES:
// i: 
// =>
// o: 
// =>
// MENTAL MODEL: 
// *
// DATA STRUCTURES: 
// ALGORYTHM: 
// upper-side lengthe = n  and it is empty except the end is a star
// bottom-side length = n and it is all stars
// betwwen these two lines print an n-2 lines with an added star in the end
// 
// 
// PSEUDOCODE:
// 

function rightTriangles(num) {
  let bottomSide = `${'*'.repeat(num)}`;
  let upperSide = `${'*'.padStart(num, ' ')}`;
  console.log(upperSide);
  let line = 2;
  while(line < num) {
    console.log(`${'*'.repeat(line).padStart(num, ' ')}`);
    line ++;
  }
  console.log(bottomSide);
}

console.log(rightTriangles(9))