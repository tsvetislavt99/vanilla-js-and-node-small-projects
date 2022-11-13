#!/usr/bin/env node

import initScreen from './modules/initScreen.js';
import askName from './modules/getPlayerNickname.js';
import endScreen from './modules/endScreen.js';
import askQuestion from './modules/askQuestion.js';
import { QUESTIONS } from './data/questions.js';

let playerNickname;
let points = [0, 0];

await initScreen();
playerNickname = await askName();
for (const question of QUESTIONS) {
  points = await askQuestion(
    question.name,
    question.type,
    question.questionText,
    question.choices,
    question.answer,
    points,
  );
  console.log(`\n`);
}
await endScreen(playerNickname, points);
