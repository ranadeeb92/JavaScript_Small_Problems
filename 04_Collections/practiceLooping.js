// Loop and Log
/**
 * for (let i = 0; i <= 10; i += 2) {
  console.log(`current value of i : ${i}`);
}
 */

// Countdown
/**
 * for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log('Launch!');
 */

// Triple Greeting
//let greeting = 'Aloha!';
// First solution
// let i = 1;
/**
 * while (i <= 3) {
  console.log(greeting);
  i++;
}
 */

// Second solution
/**
 * for (let i = 1; i <= 3; i++) {
  console.log(greeting);
}
 */

// Take Two
/**
 * for (let i = 1; i <= 100; i++) {
  console.log(i * 2);
}
 */

// Looping over Array Elements
/**
 let array = [1, 2, 3, 4];
//let array = [];
let index = 0;
while (index < array.length) {
  console.log(array[index]);
  index++;
}
 */

// continue
/**
 * 
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
for (let index = 0; index < cities.length; index++) {
  if (!cities[index]) continue;
  console.log(cities[index].length);
}
 */

// And on and on and on
/**
 *  
for (let i = 0; i < 1; i++) {
  console.log("and on");
}

// or
for (let i = 0; ; i++) {
  console.log("and on");
  break;
}
*/

// That's Odd
/*
let number = 1;
while ( number <= 40) {
  if (number % 2 === 1) {
  console.log(number);
  }
  number ++;
}
*/

// Finding Nemo:
 let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
 for (let i = 0; i < fish.length; i++) {
   if (fish[i] === 'Nemo') {
     console.log(fish[i]);
     break;
   }
   console.log(fish[i]);
 }


