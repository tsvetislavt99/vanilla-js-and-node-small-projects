import { createSpinner } from 'nanospinner';
import { sleep } from '../utils/sleep.js';

/**
 * This function handles the answer to the question. It checks if the answer is correct or not and
 * updates the points accordingly. It also takes into account the time it took the user to answer.
 *
 * @param {boolean} isCorrect
 * @param {Array} currPoints
 * @param {number} time
 * @returns {Array} points
 */
export default async function handleAnswer(isCorrect, currPoints, time) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({
      text: `Nice work! That's the correct answer.`,
    });
    currPoints[1] += 1;
    if (time < 3000) {
      currPoints[0] + 3;
    }
    if (time < 5000) {
      currPoints[0] + 2;
    }
    if (time < 10000) {
      currPoints[0] + 1;
    }
  } else {
    if (time > 10000) {
      spinner.error({
        text: `You didn't answer in time.`,
      });
      currPoints[0] -= 1;
    } else {
      spinner.error({ text: `Wrong answer! You lose 1 point.` });
      currPoints[0] -= 1;
    }
  }

  return currPoints;
}
