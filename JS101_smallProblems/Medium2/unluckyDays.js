// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  number (year)
// Output:
// -  number (number of friday 13ths in this year)
// Rules:
// - Explicit requirements:
// -   year should be greater than 1752
// - find how many firdays fall on the 13th of each month in input year
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  2017
// =>
// o:  2
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// declare a variable count and initialized with 0
// start a loop from 0 until 12 to loop over year months
//  - create a new date object with current month, year and the day 13
//  - if day 13 of this month is friday
//       - increment count by one
// return count
// PSEUDOCODE:
//

function fridayThe13ths(year) {
  let count = 0;
  for (let month = 0; month < 12; month++) {
    date = new Date(year, month, 13);
    if (date.getDay()) {
      count += 1;
    }
  }
  return count;
}
console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2
