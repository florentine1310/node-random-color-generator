import { argv } from 'node:process';
import chalk from 'chalk';
import randomcolor from 'randomcolor';

if (argv.length < 3) {
  // Create the colored hash block if no user input
  const hashBlock = chalk.hex(randomcolor())('#'.repeat(31)); // Assign a random color to the hash block

  for (let i = 0; i < 9; i++) {
    console.log(hashBlock); // Log and loop the pre-colored hash line
  }
} else {
  //Fetching User Input for Hue and Luminosity
  const luminosity = argv[3];
  const hue = argv[2];
  // Create the colored hash block with user input
  const hashBlock = chalk.hex(
    randomcolor({
      luminosity: luminosity,
      hue: hue,
    }),
  )('#'.repeat(31)); // Assign a random color to the hash block

  for (let i = 0; i < 9; i++) {
    console.log(hashBlock); // Log and loop the pre-colored hash line
  }
}
