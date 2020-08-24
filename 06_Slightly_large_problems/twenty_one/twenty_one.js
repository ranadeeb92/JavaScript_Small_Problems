
const readline = require('readline-sync');
const CARD_VALUES = [
  'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10','jack', 'queen', 'king'
];
const SUITS = ['hearts', 'dimonds', 'clubs', 'spades'];

const NUMBER_OF_PLAYERS = 2;
const GAME_CHOICES = ['hit', 'stay'];

// prompt msgs
function prompt(msg) {
  console.log(msg);
}

// check player(user) input
function isValidInput(input) {
  return GAME_CHOICES.includes(input);
}

// initialize Deck with 52-card(4 suits, 13 values for each suit)
function initializeDeck() {
  let deck = {};
  let values;
  for (let index = 0; index < SUITS.length; index++) {
    values = [];
    for ( let index = 0; index < CARD_VALUES.length; index++) {
      values[index] = CARD_VALUES[index];
    }
    deck[SUITS[index]] = values;
  }
  return deck;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// get random suit with it's values from Deck object
function getRandomSuit(deck) {
  // get random index from SUITS array
  let randomSuitIndex = getRandomIndex(SUITS);
  let randomSuit = SUITS[randomSuitIndex];
  // check if this suit array is not empty
  while (deck[randomSuit].length === 0) {
    randomSuitIndex = getRandomIndex(SUITS);
    randomSuit = SUITS[randomSuitIndex];
  }
  return [randomSuit, deck[randomSuit]];
}


//deal card to player or dealer
function dealCard(deck, playerCrads) {
  // get random suit with it's array of cards values
  let [suit ,suitArray] = getRandomSuit(deck);
  // get random index from suit array
  let randomCardIndex = getRandomIndex(suitArray);
  let card = suitArray[randomCardIndex];
  // add the card to the player cards array
  playerCrads.push([suit, card]);
  // remove this card from suit array in deck obj
  deck[suit].splice(randomCardIndex,1);
}

function setupPlayersCardsArrays(deck) {
  let playerNumber = 0;
  let cardsArrays = [];
  while (playerNumber <= NUMBER_OF_PLAYERS) {
    let playerCardsArray = [];
    while ( playerCardsArray.length !== 2) {
      dealCard(deck, playerCardsArray);
    }
    cardsArrays.push(playerCardsArray);
    playerNumber += 1;
  }
  return cardsArrays;
}

// get player decision (hit or stay)
function hitOrStay(isValid) {
  prompt('Please select hit or stay?');
  let answer =  readline.question();
  while (!isValid(answer)) {
    prompt('Invalid Input, please select hit or stay');
    answer = readline.question();
  }
  return answer.toLowerCase();
}

// get known dealer card
function getKnownDealerCard(dealerCardsArray) {
  return dealerCardsArray[0];
}

function bust(total) {
  return total > 21;
}

// get apprpraite values for (queen, jack, king, ace) cards
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

// player Turn returns next when player choose stay
// return bust if player lose
//  or still hit
function playerTurn(deck, isValid, playerCardsArray) {
  let playerCardValuesTotal = getTotal(playerCardsArray);
  prompt(`CardValuesTotal is ${playerCardValuesTotal}`);
  while (!bust(playerCardValuesTotal)) {
    let playerChoice = hitOrStay(isValid);
    if (playerChoice === 'hit') {
      dealCard(deck, playerCardsArray);
      prompt(`${playerCardsArray}`);
    } else {
      // if choose stay
      return 'stay';
    }
    playerCardValuesTotal = getTotal(playerCardsArray);
    prompt(`CardValuesTotal is ${playerCardValuesTotal}`);
  }
  return 'bust';
}

// dealer turn
function dealerTurn(deck, dealerCardsArray) {
  let dealerCardValuesTotal = getTotal(dealerCardsArray);
  while (dealerCardValuesTotal < 17) {
    dealCard(deck, dealerCardsArray);
    dealerCardValuesTotal = getTotal(dealerCardsArray);
  }
  return bust(dealerCardValuesTotal) ? 'bust' : 'stay';
}

// compare totals if both players stay
function compareTotals(playerCardsArray, dealerCardsArray) {
  let playerTotal = getTotal(playerCardsArray);
  let dealerTotal = getTotal(dealerCardsArray);
  prompt(`Player Cards Total is ${playerTotal} and Dealer Cards Tolal is ${dealerTotal}`);
  if (playerTotal === dealerTotal) return 'tie';
  return playerTotal > dealerTotal ? 'Player' : 'Dealer';
}

function playGame() {
  let winner;
  let deckObject = initializeDeck();
  let [playerArr, dealerArr] = setupPlayersCardsArrays(deckObject);
  prompt(`player Cards Array ${playerArr}`);
  prompt(`known dealer card ${getKnownDealerCard(dealerArr)}`);

  let playerBustOrStay = playerTurn(deckObject, isValidInput, playerArr);
  if (playerBustOrStay === 'bust') {
    winner = 'Dealer';
  } else {
    let dealerBustOrStay = dealerTurn(deckObject, dealerArr);
    if (dealerBustOrStay === 'bust') {
      winner = 'Player';
    } else {
      winner = compareTotals(playerArr, dealerArr);
    }
  }
  return winner;
}

// display result
function displayResult(result) {
  switch (result) {
    case 'Player' :
      prompt('Player won!');
      break;
    case 'Dealer' :
      prompt('Dealer Won!');
      break;
    default :
      prompt('It is a tie!');
  }
}

let gameResult = playGame();
displayResult(gameResult);
// console.log('--1--');
// dealCard(deckObject, playerArr);
// console.log(playerArr);
// console.log('----');
// console.log(deckObject);
// console.log('---2--');
// dealCard(deckObject, playerArr);
// console.log(playerArr);
// console.log('----');
// console.log(deckObject);
