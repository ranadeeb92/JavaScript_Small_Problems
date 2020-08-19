// while
// while (true) {
//   let number = Math.floor(Math.random() * 10);
//   console.log(number);

//   if (number === 5) {
//     console.log('Existing...');
//     break;
//   }
// }

let numberOfPets = {
  dogs : 2,
  cats : 4,
  fish : 1
};

for (let key in numberOfPets) {
  let value = numberOfPets[key];
  console.log(`I have ${value} ${key}`);
}