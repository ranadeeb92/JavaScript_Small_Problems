// input : array
// output : number
// rules:
// consider the words case sensitive
// log element alongside the number of occurrences

// algo :
// - declare count obj
// - compute count for each element in the array
//   - loop over the array
//   - if current element exist in the obj
//      - increment its value by one
//   - if not add this element to the object with value 1
// loop over the object
// - print element => count (key => value)

// function countOccurrences(arr) {
//   let countObj = {};
//   arr.forEach((ele) => {
//     if (countObj[ele]) {
//       countObj[ele] += 1;
//     } else {
//       countObj[ele] = 1;
//     }
//   });
//   for (let prop in countObj) {
//     console.log(`${prop} => ${countObj[prop]}`);
//   }
// }

// function countOccurrences(arr) {
//   let countObj = {};
//   arr.forEach((ele) => {
//     countObj[ele] = countObj[ele] || 0;
//     countObj[ele] += 1;
//   });
//   for (let prop in countObj) {
//     console.log(`${prop} => ${countObj[prop]}`);
//   }
// }

// case insensitive
function countOccurrences(arr) {
  let countObj = {};
  arr.forEach((ele) => {
    ele = ele.toLowerCase();
    countObj[ele] = countObj[ele] || 0;
    countObj[ele] += 1;
  });
  for (let prop in countObj) {
    console.log(`${prop} => ${countObj[prop]}`);
  }
}

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "motorcycle",
  "car",
  "truck",
  "suv",
];

countOccurrences(vehicles);
