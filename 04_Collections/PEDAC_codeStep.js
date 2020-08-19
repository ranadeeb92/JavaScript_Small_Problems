function sumEvenNumberRow(rowNumber) {
  const rows = [];
  let startInteger = 2;

  for (let currentRowLength = 1; currentRowLength <= rowNumber; currentRowLength++) {
    let row = createRow(startInteger, currentRowLength);
    rows.push(row);

    startInteger = row[row.length - 1] + 2;
   }

   // return rows; // ToDo : sum final row and return the sum

   let finalRow = rows.pop(); // removes the final elements and returns it
   let sum = finalRow.reduce((accume, element)=> accume + element , 0);
   return sum; // ToDo : sum final row and return the sum
}

// Helper function create row
function createRow(startInteger, rowLength) {
  const row = [];
  let currentInteger = startInteger;

  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  return row;
}


// test cases for sunEvenNumberRow()
/**
 * row number : 1 --> sum of integers in row : 2
 * row number : 2 --> sum of integers in row : 10
 * row number : 4 --> sum of integers in row : 68
 */

 // test cases for createRow() 
 /**
  * start : 2, length: 1 --> row = [2]
  * start: 4, length: 2 --> row = [4, 6]
  * start: 8, length: 3 --> row = [8, 10, 12]
  */

  console.log(sumEvenNumberRow(1)); // 2
  console.log(sumEvenNumberRow(2)); // 10
  console.log(sumEvenNumberRow(4)); // 68

  // console.log(createRow(2, 1)); // [2]
  // console.log(createRow(4, 2)); // [4, 6]
  // console.log(createRow(8, 3)); // [8, 10, 12]