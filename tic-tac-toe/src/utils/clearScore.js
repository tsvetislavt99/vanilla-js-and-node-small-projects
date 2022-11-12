import { initScore } from './initializeScore.js';

export const clearScore = () => {
  localStorage.setItem('X Wins', 0);
  localStorage.setItem('O Wins', 0);
  initScore();
};
