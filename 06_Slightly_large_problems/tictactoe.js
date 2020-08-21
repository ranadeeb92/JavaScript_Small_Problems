const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MAKER = 'O';
// const MATCH_GAMES = 2;

//prompt function
function prompt(msg) {
  console.log(`${msg}`);
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
  return Object.keys(currentBoard).filter(key => currentBoard[key] === INITIAL_MARKER);
}

//playerChooseSquare() function
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

//computerChooseSquare() function
function computerChooseSquare(currentBoard) {
  let emptySquares = getEmptySquares(currentBoard);
  //choose random index from emptySquare array
  let randomIndex = Math.floor(Math.random() * emptySquares.length);
  // get the element(square number) corresponds with that index
  let square = emptySquares[randomIndex];
  currentBoard[square] = COMPUTER_MAKER;
  return currentBoard;
}

function boardFull(currentBoard) {
  return getEmptySquares(currentBoard).length === 0;
}

function detectWinner(currentBoard) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]  
  ]
  for (let line = 0;line < winningLines.length; line++) {
    if (winningLines[line].every(ele => currentBoard[ele] === HUMAN_MARKER)) {
      return 'Player';
    } else if(winningLines[line].every(ele => currentBoard[ele] === COMPUTER_MAKER)){
      return 'Computer';
    }
  }
  return null;
}

function someoneWon(currentBoard) {
  return !!detectWinner(currentBoard);
}

// helper functions
// joinOr()
function joinOr(arr, delimiter = ',', word = 'or') {
  if(arr.length === 1) {
    return `${arr[0]}`;
  } else if(arr.length === 2) {
    return arr.join(` ${word} `);
  }else if (arr.length === 0) {
    return '';
  }else {
    let str = arr.slice(0, arr.length -1 ).join(`${delimiter} `) +
             delimiter+' '+ word +' '+ arr[arr.length-1];

    return str;
  }
}
//keepscore()



function displayBoard(currentBoard) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER} and the computer is ${COMPUTER_MAKER}`);

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

    let board =  initializeBoard();

    while (true) {
      displayBoard(board);
      playerChooseSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
      computerChooseSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }
    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} Win!`);
    } else {
      prompt('It is a tie!');
    }
    //keepScore

    //paly again
    prompt('Would you like to play again?(Y/N)');
    let answer =  readline.question().toLowerCase();

    if(answer !== 'y') break;
  }


prompt('Thank you for playing Tic Tac Toe game');
