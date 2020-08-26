
const readline = require('readline-sync');
const msgs = require('./messages.json');
const CARD_VALUES = [
  'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10','jack', 'queen', 'king'
];
const SUITS = ['H', 'D', 'C', 'S'];
const NUMBER_OF_PLAYERS = 2;
const GAME_CHOICES = ['hit', 'stay', 's', 'h'];
const PLAY_AGAIN_ANSWERS = ['yes','no', 'y', 'n'];
const BUST_LIMIT = 21;
const DEALER_GOAL = 17;
const MATCH_SCORE_GOAL = 5;

// prompt msgs
function prompt(msg) {
  console.log(`>> ${msg}`);
}

// convert hand array to string for display
function handToString(arr) {
  let str = '';

  str += arr[0][1] + ' of ' + arr[0][0];
  for (let index = 1; index < arr.length; index++) {
    str +=  ', ' + arr[index][1] + ' of ' + arr[index][0];
  }
  return str;
}

// check player(user) input
function isValidInput(input, validInputs) {
  return validInputs.includes(input);
}

// get Player(user) Input
function getPlayerInput(msg, isValid, validInputs) {
  prompt(msg);
  let answer =  readline.question();
  while (!isValid(answer, validInputs)) {
    prompt(`Invalid Input, ${msg}`);
    answer = readline.question();
  }
  return answer.toLowerCase();
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
  let [suit ,suitArray] = getRandomSuit(deck);
  // get random index from suit array
  let randomCardIndex = getRandomIndex(suitArray);
  let card = suitArray[randomCardIndex];
  // add the card to the player cards(player or dealer) array
  playerCrads.push([suit, card]);
  // remove this card from suit array in deck obj
  deck[suit].splice(randomCardIndex,1);
}

// function to get a nested array
// each inner array represents the playerCardsArray
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

// function return true if player or dealer busts
// else it retuens false
function bust(total) {
  return total > BUST_LIMIT;
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
    cards.filter(card => card === 'Ace').forEach(_ => {
      if (total > 21) total -= 10;
    });
  }
  return total;
}

// player Turn returns stay when player choose stay
// return bust if player lose
//  or still hit
function playerTurn(deck, playerCardsArray, cardTotals) {
  prompt(`Total is ${cardTotals.playerTotals}`);
  while (!bust(cardTotals.playerTotals)) {
    let playerChoice = getPlayerInput(
      msgs.hitOrStay, isValidInput, GAME_CHOICES);
    if (playerChoice[0] === 'h') {
      dealCard(deck, playerCardsArray);
      prompt(`Player hand: ${handToString(playerCardsArray)}`);
    } else {
      // if choose stay
      return 'stay';
    }
    cardTotals.playerTotals = getTotal(playerCardsArray);
    prompt(`Total is ${cardTotals.playerTotals}`);
  }
  return 'bust';
}

// dealer turn
function dealerTurn(deck, dealerCardsArray, cardTotals) {
  while (cardTotals.dealerTotals < DEALER_GOAL) {
    dealCard(deck, dealerCardsArray);
    cardTotals.dealerTotals = getTotal(dealerCardsArray);
  }
  return bust(cardTotals.dealerTotals) ? 'bust' : 'stay';
}


// compare totals
function compareValues(handValues1, handValues2) {
  if (handValues1 >  handValues2) {
    return 1;
  } else if (handValues1 < handValues2) {
    return -1;
  } else {
    return 0;
  }
}

// play again
function playAgain() {
  let answer = getPlayerInput(msgs.playAgain, isValidInput, PLAY_AGAIN_ANSWERS);
  return answer[0] === 'y';
}

// game logic
function playGame(deckObject, playerArr, dealerArr) {
  let gameResult;
  let totals = { playerTotals : getTotal(playerArr),
    dealerTotals : getTotal(dealerArr)};
  if (playerTurn(deckObject, playerArr, totals) === 'bust') {
    gameResult = 'PlayerBust';
  } else if (dealerTurn(deckObject, dealerArr, totals) === 'bust') {
    gameResult = 'DealerBust';
  } else {
    let result = compareValues(totals.playerTotals, totals.dealerTotals);
    if (result === 0) {
      gameResult = 'tie';
    } else {
      gameResult = result === 1 ? 'Player' : 'Dealer';
    }
  }
  return gameResult;
}

// display each game result
function displayResult(result, playerCards, dealerCards) {
  switch (result) {
    case 'Player' :
      prompt(msgs.playerWon);
      break;
    case 'PlayerBust' :
      prompt(msgs.playerBust);
      break;
    case 'DealerBust' :
      prompt(msgs.dealerBust);
      break;
    case 'Dealer' :
      prompt(msgs.dealerWon);
      break;
    default :
      prompt(msgs.tie);
  }
  prompt(`Player Cards Total is ${getTotal(playerCards)} and Dealer Cards Tolal is ${getTotal(dealerCards)}`);
}

// function to update winner score
function updateScores(result, scoresObj) {
  switch (result) {
    case 'Player' :
    case 'DealerBust' :
      scoresObj['playerScore'] += 1;
      return scoresObj;
    case 'PlayerBust' :
    case 'Dealer' :
      scoresObj['dealerScore'] += 1;
      return scoresObj;
    default :
      return scoresObj;
  }
}

// function to check if any of the players reach to score = 5
function checkScores(scoresObj) {
  return Object.values(scoresObj).some(score => score === MATCH_SCORE_GOAL);
}

// display final match result
function displayMatchWinner(scoresObj) {
  let winner = scoresObj.playerScore === 5 ? 'Player' : 'Dealer';
  prompt(`${winner} wins the Match!`);
}

// function to clear console screen
function clearScreen() {
  console.clear();
}

// game setup
while (true) {
  let scores = {playerScore : 0, dealerScore : 0};
  while (!checkScores(scores)) {
    clearScreen();
    prompt(`Player score ${scores.playerScore} and Dealer Score ${scores.dealerScore}`);
    let deckObject = initializeDeck();
    let [playerArr, dealerArr] = setupPlayersCardsArrays(deckObject);
    prompt(`player hand: ${handToString(playerArr)}`);
    prompt(`Dealer card: ${handToString([dealerArr[0]])}`);
    let gameResult = playGame(deckObject, playerArr, dealerArr);
    updateScores(gameResult, scores);
    displayResult(gameResult, playerArr, dealerArr, scores);
    readline.question(msgs.contiueTheMatch);
  }
  clearScreen();
  prompt(`Player score ${scores.playerScore} and Dealer Score ${scores.dealerScore}`);
  displayMatchWinner(scores);

  if (!playAgain()) break;
}