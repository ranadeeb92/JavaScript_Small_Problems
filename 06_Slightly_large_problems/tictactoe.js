const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MAKER = 'O';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]  
];
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
  // return array of threatening lines and they contains at least one empty square
  let square;
  if (minded === 'Offensive-minded') {
  square = getSquare(currentBoard, COMPUTER_MAKER);
} else {
  square = getSquare(currentBoard, HUMAN_MARKER);
}
return square ? square : null;
}


function computerChooseSquare(currentBoard) {
  let emptySquares = getEmptySquares(currentBoard);
   //offensive-minded or defensive-minded
   let square = findThreateningSquare(currentBoard, 'Offensive-minded') ||
                findThreateningSquare(currentBoard); 
   // no offensive or definsive square             
   if(!square) {
     if(emptySquares.includes('5')) square = '5';
     else {
        //choose random index from emptySquare array
        let randomIndex = Math.floor(Math.random() * emptySquares.length);
        square = emptySquares[randomIndex];}
  }
   currentBoard[square] = COMPUTER_MAKER;
   return currentBoard;
}


function boardFull(currentBoard) {
  return getEmptySquares(currentBoard).length === 0;
}

function detectWinner(currentBoard) {
  for (let line = 0;line < WINNING_LINES.length; line++) {
    if (WINNING_LINES[line].every(ele => currentBoard[ele] === HUMAN_MARKER)) {
      return 'Player';
    } else if(WINNING_LINES[line].every(ele => currentBoard[ele] === COMPUTER_MAKER)){
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
//keepscore
// incrementWinnerScore() function
function incrementWinnerScore(gameWinner, scoresObj) {
  if (gameWinner === 'Player') {
    scoresObj['playerScore'] = scoresObj['playerScore'] + 1 || 1;
  } else {
    scoresObj['computerScore'] = scoresObj['computerScore'] + 1 || 1;
  }
  return scoresObj;
}

// checkScores() function
function checkScores(scoresObj) {
  return Object.values(scoresObj).some(score => score === 5);
}

// detectMatchWinner() function 
function detectMatchWinner(scoresObj) {
  if (scoresObj['playerScore'] === 5) {
    return 'Player';
  } else {
    return 'Computer';
  }
}



function displayBoard(currentBoard, scores) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER} and the computer is ${COMPUTER_MAKER}`);
  console.log('');
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

    while (true) {
      displayBoard(board, scores);
      playerChooseSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
      computerChooseSquare(board);
      readline.question('Enter any key to continue..');
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
    if(!checkScores(scores)){
      readline.question('Enter any key to continue..');
    }
  }

  // display match winner
  prompt(`Match ends and ${detectMatchWinner(scores)} wins!`);

  //paly again
  prompt('Would you like to play again?(Y/N)');
  let answer =  readline.question().toLowerCase();

  if(answer !== 'y') break;
}

prompt('Thank you for playing Tic Tac Toe game');
