// no input
// log Teddy's age to the console.
// rule:
//  - age between 20 and 120(inclusive)

// algorithm:
// define a function called getTeddyAge()
// compute teddy's age
//  - age = generated random number between 20 and 120(inclusive)
// print teddy's age
// ------- section 1-------------
// function getTeddyAge(min, max) {
//   // min inclusive, max inclusive
//   // Math.random generates a floating point number between 0 - 1(exclusive)
//   // Math.random() * ((max-min) + 1) => generate a random number based on the distance between max and min
//   // => it will generates a number between 0 - max
//   // To make sure the random number is between min(inclusive) and max(inclusive)
//   // => (Math.random() * (max - min + 1)) +  min
//   // To make sure we return an intger number
//   // => Math.floor(number)
//   let teddyAge = Math.floor(Math.random() * (max - min + 1)) + min;
//   console.log(`Teddy is ${teddyAge} years old!`);
// }
// ----------section 2-----
// // what if we use Math.round() insted of Math.floor()
// // There is a different
// // Math.round(number) => returns the value of a number rounded to the nearest integer
// // ex: Math.round(5.93) => 6  while Math.round(5.03) => 5
// // Math.floor(number) => returns the largest integer less than or equal to a given number
// // ex: Math.floor(5.93) => 5  while Math.floor(5.03) => 5
// function getTeddyAge(min, max) {
//  let teddyAge = Math.round(Math.random() * (max - min + 1)) + min;
//  console.log(`Teddy is ${teddyAge} years old!`);
//}

// ----------------section 3 ---------
// Make the function robust
// What if the user inadvertently gave the inputs in reverse order
function getTeddyAge(min, max) {
  // let min_range = min;
  // let max_range = max;
  if (min > max) {
    // min_range = max;
    // max_range = min;
    [max, min] = [min, max];
  }
  let teddyAge =
    //Math.round(Math.random() * (max_range - min_range + 1)) + min_range;
    Math.round(Math.random() * (max - min + 1)) + min;
  console.log(`Teddy is ${teddyAge} years old!`);
}
getTeddyAge(120, 20);
