import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

await using rl = readline.createInterface({ input, output });

const answer = await rl.question('What do you think of Node.js? ');

console.log(`Thank you for your valuable feedback: ${answer}`);

// rl.close();