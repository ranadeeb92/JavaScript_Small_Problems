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

function getAppropiateCardValue(card) {
  switch (card) {
    case 'jack' :
    case 'queen' :
    case 'king' :
      return 10;
    case 'Ace' :
      return 11;
    default :
      return Number(card);
  }
}

// get total cards values for player
function getTotal(cardsArray) {
  let cards = cardsArray.map(ele => ele[1]);
  let total = cards.reduce((acc, val) => {
    acc += getAppropiateCardValue(val, cards);
    return acc;
  }, 0);
  if (cards.includes('Ace') && total > 21) {
    total -= 10;
    return total;
  }
  return total;
}

let arr = [['2', 'hearts'], ['queen', 'hearts'], ['Ace', 'hearts']];
console.log(getTotal(arr));