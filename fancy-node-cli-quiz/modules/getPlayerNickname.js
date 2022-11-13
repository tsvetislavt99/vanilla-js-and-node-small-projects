import inquirer from 'inquirer';

/**
 * Asks the player for his nickname
 * @returns {string} playerNickname
 */
export default async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player';
    },
  });

  return answers.player_name;
}
