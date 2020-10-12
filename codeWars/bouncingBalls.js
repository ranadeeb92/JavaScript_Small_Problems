// PEDAC
// Input:
// - numbers
// Output:
// - number
// Rules:
// - Explicit requirements:
// -  floor h (height) , n (floor number)
// - h > 0
// - b > 0 and < 1
// - w < h
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  h = 3 ,   b = 0.66, w = 1.5
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// check these condition
// - h > 0
// - b > 0 and < 1
// - w < h
// if one of them not true return -1
//  comput the hieght the reach by the ball after bouncing
//    -  bouncingh = h * b
// declare a variable times and initialize with 1
//  start a loop
//    - for each iteration
//       - if the bouncingh is greater than w
//         - increment times by 2 and continue
//       - bouncingh = bouncingh * b
//       - else stop the loop
// return times
// PSEUDOCODE:
//
function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let bounceHieght = h * bounce;
    let times = 1;
    while (true) {
      if (bounceHieght > window) {
        times += 2;
      } else {
        break;
      }
      bounceHieght *= bounce;
    }
    return times;
  }
  return -1;
}

console.log(bouncingBall(3.0, 0.66, 1.5) === 3);

console.log(bouncingBall(30.0, 0.66, 1.5) === 15);
