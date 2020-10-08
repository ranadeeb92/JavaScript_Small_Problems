// PEDAC
// Input:
// - array (has random directions (at least one))
// Output:
// - boolean (true or false)
// Rules:
// - Explicit requirements:
// - only walk a single block for each letter
// - it takes one minutes to walk a block
// - return true if the walk takes exzctlu 10 min (back to starting point)
// - Implicit requirements:
// - each step(one direction) is one min
// -  => array length < 10 => return false
// -  => array length > 10 => return false
// - direction s -> down
// -           n -> up
// -           w -> left
// -           e -> rigth
// - point p(x, y) => x is w, e => y is n, s

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:  arrays
// ALGORYTHM:
//  if input array length < 10 or > 10 => return false
//  else
//  - declare var startinPoint and initialized with 0
//  - loop over the input array
//  -  bulid point from current direction and next direction
//  -   if they are both on xpoint dont change startingPint
//  -   else add one to startingPoint
//
// if startingPoint > 0 => return false
//else return true
// PSEUDOCODE:
//

// function isValidWalk(arr) {
//   let directionTable = {
//     n: 1,
//     s: -1,
//     w: 1,
//     e: -1,
//   };
//   let min = 0;
//   let startingPointX = 0;
//   let startingPointY = 0;
//   arr.forEach((direction) => {
//     if (direction === "n" || direction === "s") {
//       startingPointY += directionTable[direction];
//     } else {
//       startingPointX += directionTable[direction];
//     }
//     // console.log(`${startingPointX}, ${startingPointY}`);
//     min += 1;
//   });
//   //console.log(min);
//   if (min === 10) {
//     if (startingPointX === 0 && startingPointY === 0) return true;
//     else {
//       return false;
//     }
//   }
//   return false;
// }

// function isValidWalk(walk) {
//   if(walk.length > 10 || walk.length < 10) return false;
//   let startingPoint = 0;
//   for(let index = 0; index < walk.length; index += 2){
//     if(!(['n', 's'].includes(walk[index]) && ['n', 's'].includes(walk[index + 1])) &&
//        !(['w', 'e'].includes(walk[index]) && ['w', 'e'].includes(walk[index + 1]))){
//       startingPoint += 1;
//     }
//   }
//   return startingPoint === 0;
// }

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let xPoint = 0;
  let yPoint = 0;
  let directions = {
    n: 1,
    s: -1,
    w: 1,
    e: -1,
  };
  walk.forEach((step) => {
    if (["n", "s"].includes(step)) {
      yPoint += directions[step];
    } else {
      xPoint += directions[step];
    }
  });
  return xPoint == 0 && yPoint == 0;
}

console.log(
  isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return true"
);
console.log(
  !isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
  "should return false"
);
console.log(!isValidWalk(["w"]), "should return false");
console.log(
  !isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return false"
);
