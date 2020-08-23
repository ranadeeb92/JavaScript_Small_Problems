// function joinOr(arr, delimiter = ',', word = 'or') {
//   if(arr.length === 1) {
//     return `${arr[0]}`;
//   } else if(arr.length === 2) {
//     return arr.join(` ${word} `);
//   }else if (arr.length === 0) {
//     return '';
//   }else {
//     let str = arr.slice(0, arr.length -1 ).join(`${delimiter} `) +
//              delimiter+' '+ word +' '+ arr[arr.length-1];

//     return str;
//   }
// }


const winningLines = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]  
];

function CheckImmediateThreat(humanSquares) {
  return !(findThreateningLines(humanSquares).length === 0);
}

function findThreateningLines(humanPlayerSquares) {
  return winningLines.filter(line => {
    return humanPlayerSquares.includes(line[1]) &&
      (humanPlayerSquares.includes(line[0]) || 
      humanPlayerSquares.includes(line[2]));
  });
}

console.log(findThreateningLines([1, 2, 9]).filter(arr => arr.some(ele => ele === 3)));
console.log(CheckImmediateThreat([1, 2, 9]));
