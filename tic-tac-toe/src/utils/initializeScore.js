//Create an IIFE
export const initScore = () => {
  const xWins = document.getElementById('X Wins');
  const oWins = document.getElementById('O Wins');

  const xWinsFromStorage = localStorage.getItem('X Wins');
  const oWinsFromStorage = localStorage.getItem('O Wins');

  if (xWinsFromStorage) {
    xWins.textContent = xWinsFromStorage;
  }

  if (oWinsFromStorage) {
    oWins.textContent = oWinsFromStorage;
  }
};
