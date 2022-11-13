import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

import { sleep } from '../utils/sleep.js';

/**
 * This function initializes the game.
 */
export default async function initScreen() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Are you ready for the JavaScript quiz? \n',
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
        ${chalk.bgBlue('HOW TO PLAY')} 
          Answer the questions by selecting the correct number and pressing enter.
          You will have 10 seconds to answer each question.
          If you don't answer in time, the question will be marked as wrong.
          You will get ${chalk.green('1')} point for each correct answer.
          You will lose ${chalk.red('1')} point for each wrong answer.
          You will lose ${chalk.red('1')} point for each unanswered question.
          You will get ${chalk.greenBright(
            '+1',
          )} point for each question answered in less than 5 seconds.
          You will get ${chalk.cyanBright(
            '+2',
          )} points for each question answered in less than 3 seconds.
      `);
}
