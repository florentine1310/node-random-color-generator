import { argv } from 'node:process';
import chalk from 'chalk';
import randomcolor from 'randomcolor';

if (argv.length < 3) {
  const colorHex = randomcolor(); // Create a random hex code
  const hashBlock = chalk.hex(colorHex)('#'.repeat(31)); // Create colored hash block

  for (let i = 0; i < 9; i++) {
    if (i < 3 || i > 5) {
      console.log(hashBlock);
    } // Full lines of hashes
    else if (i === 4) {
      console.log(chalk.hex(colorHex)(`#####       ${colorHex}       #####`));
    } // Middle row with hex code
    else {
      console.log(chalk.hex(colorHex)('#####                     #####'));
    }
  }
} else {
  // Fetching User Input for Hue and Luminosity

  const luminosity = argv[2];
  const hue = argv[3];
  // Create the colored hash block with user input
  const colorHex = randomcolor({
    luminosity: luminosity,
    hue: hue,
  });
  const hashBlock = chalk.hex(colorHex)('#'.repeat(31)); // Assign a random color to the hash block

  for (let i = 0; i < 9; i++) {
    if (i < 3 || i > 5) {
      console.log(hashBlock);
    } // Full lines of hashes
    else if (i === 4) {
      console.log(chalk.hex(colorHex)(`#####       ${colorHex}       #####`));
    } // Middle row with hex code
    else {
      console.log(chalk.hex(colorHex)('#####                     #####'));
    }
  }
}
