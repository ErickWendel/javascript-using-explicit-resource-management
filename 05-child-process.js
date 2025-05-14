import { spawn } from 'node:child_process';

await using ls = spawn('ls');
ls.stdout.setEncoding('utf-8');
const items = (await ls.stdout.toArray()).at(0);

console.log('files:', '\n');
console.log(items);