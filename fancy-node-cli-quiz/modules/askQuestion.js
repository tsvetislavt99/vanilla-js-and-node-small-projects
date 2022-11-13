import inquirer from 'inquirer';
import handleAnswer from './handleAnswer.js';

/**
 * This function asks the user a question and returs the updated user points.
 *
 * @param {string} name
 * @param {"list" | "checkbox" | "input"} type
 * @param {string} questionText
 * @param {Array} choices
 * @param {string} answer
 * @param {Array} currPoints
 * @returns {number} points
 */
export default async function askQuestion(
  name,
  type,
  questionText,
  choices,
  answer,
  currPoints,
) {
  // Get time from invoking this function to the moment the user answers the question
  const startTime = Date.now();

  // Start a timer that will call the timeoutQuestion function after 10 seconds
  // TODO: Think how to implement this with setTimeout
  const timerId = setTimeout(() => {
    return handleAnswer(false, currPoints, 10001);
  }, 10000);
  const answers = await inquirer.prompt({
    name: name,
    type: type,
    message: questionText,
    choices: type === 'input' ? null : choices,
  });

  // Get time from invoking this function to the moment the user answers the question
  const endTime = Date.now();

  // Sanitize the answer
  if (type === 'input') {
    answers[name] = answers[name].toLowerCase().replaceAll(/[^a-z]/g, '');
  }

  if (type === 'checkbox') {
    answers[name] = answers[name].sort().join(', ');
    answer = answer.sort().join(', ');
  }

  // Calculate the time it took the user to answer the question
  const time = endTime - startTime;

  // Clear the timeout
  clearTimeout(timerId);
  return handleAnswer(answers[name] === answer, currPoints, time);
}
