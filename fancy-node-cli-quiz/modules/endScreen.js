import chalk from 'chalk';
import gradient from 'gradient-string';
import figlet from 'figlet';

export default function endScreen(playerName, points) {
  console.clear();
  figlet(`${points.join(' ')}`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `Programming isn't about what you know; it's about making the command line look cool`,
      ),
    );
    process.exit(0);
  });
}
