// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  number abd array (inventory item, transaction)
// Output:
// -  array (array of objects{id, movement, quantity})
// Rules:
// - Explicit requirements:
// -   extract just the transaction with specified  id
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
//   declare a variable result and initialize it with empty array
//  loop over transactions
//    - for each obj in the arry
//        - object.id === inventoryItem
//        - append this object to result
//  return result
//
// PSEUDOCODE:
//

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

// function transactionsFor(inventoryItem, transactions) {
//   let result = [];
//   transactions.forEach((obj) => {
//     if (obj.id === inventoryItem) {
//       result.push(obj);
//     }
//   });
//   return result;
// }
function transactionsFor(inventoryItem, transactions) {
  return transactions.filter((inventory) => inventory.id === inventoryItem);
}

console.log(transactionsFor(101, transactions));
