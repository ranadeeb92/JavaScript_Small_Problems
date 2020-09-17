// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.  number , array
// 2.
// Input:
// -  boolean value (true or false)
// Output:
// -
// Rules:
// - Explicit requirements:
// -   true only if the sum of the quantity values of the item's transactions > zero.
// - A movement value of 'out' will decrease the item's quantity
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
//  get all inventories that has specified inventoryItem
//  loop over the inventories
//    - compute the sum of its quantities
//       - if inventory.movment === 'in' add inventory quantity to sum
//        -else subtract inventory quantity from sum
//  check if sum > 0 return true
//  else return false
//
// PSEUDOCODE:
//

function isItemAvailable(inventoryItem, transactions) {
  let result = transactionsFor(inventoryItem, transactions);
  return (
    result.reduce((acc, ele) => {
      if (ele.movement === "in") {
        return (acc += ele.quantity);
      } else {
        return (acc -= ele.quantity);
      }
    }, 0) > 0
  );
}
function transactionsFor(id, array) {
  return array.filter((obj) => obj.id === id);
}
let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(103, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true
