// You have a bank of switches before you, numbered from 1 to count. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them, that is, you flip every switch. All the lights are now on. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. Now, every other light is on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have made count passes.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after count passes.

// PEDAC
// Input:
// - number (total number of switches)
// Output:
// - array(array of lights that are on after count passes)
// Rules:
// - Explicit requirements:
// -  strat from 2 incremat by 2 each time
// -  start with 3 increment by 3 eaxh time and so on
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: 5 , 1, 2, 3, 4, 5 => 2, 4 =>[1, 3, 5]
// =>  3 => [1,5] => 4 is already off so it becomes on => [1, 4, 5] => 5 =>[1, 4]
// o:
// =>
// DATA STRUCTURES:  array
// ALGORYTHM:
//  declare a variable called lights with length equal input number + 1 and initialized with array of 0
//  start a loop from 1 over lights array
//   - start an inner loop from outer index
//      - for each iteration mutated the array lights by switch the current element between 0 or 1
//      - increment the innerIndex by its outerIndex
// declare a var called result and initialized with empty array
// loop over lights
//  - for each iteration if current element equal to 1
//     - add current index to result
//   - eles ignore the element
// return result without first element
// PSEUDOCODE:
//

// function lightsOn(switches) {
//   let lights = Array(switches).fill().map((_, index) => index + 1);
//   let onOff = lights.slice(0);
//   for(let index = 1; index < lights.length; index++){
//     let temp = lights[index];
//     onOff[index] = onOff[index] === 0 ? 1 : 0;
//     for(let index2 = index + 1; index2 < lights.length; index2++){
//      if(lights[index2] % temp === 0){
//        onOff[index2] = onOff[index2] === 0 ? 1 : 0;
//      }
//     }
//   }
//   return lights.filter((num, index) => onOff[index] === 1 );
// }

function lightsOn(switches) {
  let lights = Array(switches + 1).fill(0);
  for (let index = 1; index < lights.length; index++) {
    for (let index2 = index; index2 < lights.length; index2 += index) {
      lights[index2] = lights[index2] === 0 ? 1 : 0;
    }
  }

  return lights
    .map((light, index) => (light === 1 ? index : light))
    .filter((light) => light !== 0);
}

console.log(lightsOn(6)); // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
