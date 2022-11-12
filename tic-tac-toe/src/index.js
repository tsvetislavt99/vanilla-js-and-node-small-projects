import { winningCombinations } from './utils/winningCombination.js';
import { clearScore } from './utils/clearScore.js';
import { initScore } from './utils/initializeScore.js';

initScore();
let ticTacToeBoard = [[], [], []];
const cells = document.querySelectorAll('.cell');
const reset_button = document.querySelector('.reset_button');

let currentPlayer = 'O';
const player1 = 'X';
const player2 = 'O';

function cellClicked(e) {
  const cell = e.target;
  const [x, y] = cell.id.split(' ');
  const currentClass = getCurrentPlayer();
  placeMark(cell, currentClass, x, y);
  checkWin(currentClass);
}

function placeMark(cell, currentClass, x, y) {
  ticTacToeBoard[x][y] = currentClass;
  cell.classList.add(currentClass);
}

function checkWin(currentClass) {
  if (checkWinningCombination(currentClass)) {
    setTimeout(() => {
      const shouldClear = confirm(currentClass + ' won!');
      if (shouldClear) {
        resetBoard();
        // Set wins in local storage
        localStorage.setItem(
          `${currentClass} Wins`,
          Number(localStorage.getItem(`${currentClass} Wins`)) + 1,
        );
        // Set wins in DOM
        document.getElementById(`${currentClass} Wins`).textContent = Number(
          localStorage.getItem(`${currentClass} Wins`),
        );
      }
    }, 0);
  }
}

function checkWinningCombination(currentClass) {
  const currentPlayerBoard = ticTacToeBoard.map((row) => {
    return row.map((cell) => {
      return cell === currentClass;
    });
  });

  return winningCombinations.some((combination) => {
    return combination.every((row, x) => {
      return row.every((cell, y) => {
        return cell === currentPlayerBoard[x][y];
      });
    });
  });
}

function getCurrentPlayer() {
  if (currentPlayer === player2) {
    currentPlayer = player1;
    return 'X';
  }
  if (currentPlayer === player1) {
    currentPlayer = player2;
    return 'O';
  }
}

function resetBoard() {
  cells.forEach((cell) => {
    cell.classList.remove('X');
    cell.classList.remove('O');
  });
}

cells.forEach((cell) => {
  cell.addEventListener('click', cellClicked, { once: true });
});

reset_button.addEventListener('click', () => {
  resetBoard();
  clearScore();
});
