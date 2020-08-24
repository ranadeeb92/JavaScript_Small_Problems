const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MAKER = 'O';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
const SETTING = 'player';
const OPTIONS = ['player', 'computer'];
const VALID_PLAYAGAIN_ANSWERS = ['yes', 'no', 'y', 'n'];

// prompt function
function prompt(msg) {
  console.log(`${msg}`);
}

// check user input
function isValidInput(input, validOptions) {
  return validOptions.includes(input.toLowerCase());
}

// Ask user who plays first
function whoGoesFirst(isValid) {
  prompt(`Who moves first ${joinOr(OPTIONS)}`);
  let input = readline.question();
  while (!isValid(input, OPTIONS)) {
    prompt(`Please choose one of ${joinOr(OPTIONS)}`);
    input = readline.question();
  }
  return input.toLowerCase();
}

// function that return the initail board object
function initializeBoard() {
  let initialBoard = {};
  for (let key = 1; key <= 9; key++) {
    initialBoard[key] = INITIAL_MARKER;
  }
  return initialBoard;
}

// get empty squares array
function getEmptySquares(currentBoard) {
  let keys = Object.keys(currentBoard);
  return keys.filter(key => currentBoard[key] === INITIAL_MARKER);
}

// playerChooseSquare() function
function playerChooseSquare(currentBoard) {
  let input;
  let emptySquares = getEmptySquares(currentBoard);
  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares)}`);
    input = readline.question().trim();
    if (emptySquares.includes(input)) break;
    prompt('This square has been chosen, please chooose another one');
  }
  currentBoard[input] = HUMAN_MARKER;
  return currentBoard;
}

function computerChooseSquare(currentBoard) {
  let emptySquares = getEmptySquares(currentBoard);
  //offensive-minded or defensive-minded
  let square = findThreateningSquare(currentBoard, 'Offensive-minded') ||
                findThreateningSquare(currentBoard);
  // if there is no offense or defense
  if (!square) {
    if (emptySquares.includes('5')) square = '5';
    else {
      //choose random index from emptySquare array
      let randomIndex = Math.floor(Math.random() * emptySquares.length);
      square = emptySquares[randomIndex];
    }
  }
  currentBoard[square] = COMPUTER_MAKER;
  return currentBoard;
}

// getSquare() function
function getSquare(currentBoard, marker) {
  let square;
  for (let line of WINNING_LINES) {
    if (line.filter(ele => currentBoard[ele] === marker).length === 2 &&
        line.some(ele => currentBoard[ele] === INITIAL_MARKER)) {
      square = line.find(ele => currentBoard[ele] === INITIAL_MARKER);
      break;
    }
  }
  return square;
}

function findThreateningSquare(currentBoard, minded) {
  // returns a risk square or null
  let square;
  if (minded === 'Offensive-minded') {
    square = getSquare(currentBoard, COMPUTER_MAKER);
  } else {
    square = getSquare(currentBoard, HUMAN_MARKER);
  }
  return square ? square : null;
}

// choose square depending on the current player
function chooseSquare(player, currentBoard) {
  return player === 'player' ?
    playerChooseSquare(currentBoard) : computerChooseSquare(currentBoard);
}

// alternate player
function alternatePlayer(player) {
  return  player === 'player' ? 'computer' : 'player';
}

// check if the game board is full
function boardFull(currentBoard) {
  return getEmptySquares(currentBoard).length === 0;
}

// detect each game winner
function detectWinner(currentBoard) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    if (WINNING_LINES[line].every(ele => currentBoard[ele] === HUMAN_MARKER)) {
      return 'Player';
    } else if (WINNING_LINES[line].every(
      ele => currentBoard[ele] === COMPUTER_MAKER)) {
      return 'Computer';
    }
  }
  return null;
}

// check if  someone won the game
function someoneWon(currentBoard) {
  return !!detectWinner(currentBoard);
}

// helper functions
// joinOr()
function joinOr(arr, delimiter = ',', word = 'or') {
  if (arr.length === 1) {
    return `${arr[0]}`;
  } else if (arr.length === 2) {
    return arr.join(` ${word} `);
  } else if (arr.length === 0) {
    return '';
  } else {
    let str = arr.slice(0, arr.length - 1 ).join(`${delimiter} `) +
             delimiter + ' ' + word + ' ' + arr[arr.length - 1];

    return str;
  }
}

// keepscore
// incrementWinnerScore
function incrementWinnerScore(gameWinner, scoresObj) {
  if (gameWinner === 'Player') {
    scoresObj['playerScore'] = scoresObj['playerScore'] + 1 || 1;
  } else {
    scoresObj['computerScore'] = scoresObj['computerScore'] + 1 || 1;
  }
  return scoresObj;
}

// checkScores
function checkScores(scoresObj) {
  return Object.values(scoresObj).some(score => score === 5);
}

// detectMatchWinner
function detectMatchWinner(scoresObj) {
  return scoresObj['playerScore'] === 5 ? 'Player' : 'Computer';
}

// playAgain()
function playAgain(isValid) {
  prompt('Would you like to play again?(Y/N)');
  let answer =  readline.question();
  while (!isValid(answer, VALID_PLAYAGAIN_ANSWERS)) {
    prompt('Invalid input, Please enter (Y/N)');
    answer = readline.question();
  }
  return answer[0].toLowerCase() === 'y';
}

function displayBoard(currentBoard, scores) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER} and the computer is ${COMPUTER_MAKER}`);
  console.log(`Your score is ${scores['playerScore']} and Computer score is ${scores['computerScore']}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${currentBoard['1']}  |  ${currentBoard['2']}  |  ${currentBoard['3']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${currentBoard['4']}  |  ${currentBoard['5']}  |  ${currentBoard['6']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${currentBoard['7']}  |  ${currentBoard['8']}  |  ${currentBoard['9']}  `);
  console.log('     |     |');
}

while (true) {
  let scores = { playerScore: 0, computerScore : 0};
  while (!checkScores(scores)) {
    let board =  initializeBoard();
    let currentPlayer = SETTING === 'choose' ?
      whoGoesFirst(isValidInput) : SETTING;

    while (true) {
      displayBoard(board, scores);
      chooseSquare(currentPlayer, board);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }
    displayBoard(board, scores);

    if (someoneWon(board)) {
      scores = incrementWinnerScore(detectWinner(board), scores);
      displayBoard(board, scores);
      prompt(`${detectWinner(board)} Win!`);
    } else {
      prompt('It is a tie!');
    }
    if (!checkScores(scores)) {
      readline.question('Enter any key to continue..');
    }
  }

  // display match winner
  prompt(`Match ends and ${detectMatchWinner(scores)} wins!`);

  //paly again
  if (!playAgain(isValidInput)) break;
}

prompt('Thank you for playing Tic Tac Toe game');
