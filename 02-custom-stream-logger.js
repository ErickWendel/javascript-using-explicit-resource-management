import { rename } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { format } from 'node:util';

class Logger {
  constructor(filename) {
    this.filename = filename;
    this.stream = createWriteStream(filename, { flags: 'a' });
  }

  log(...args) {
    console.log(...args);
    const message = format(...args) + '\n';
    this.stream.write(message);
  }

  async [Symbol.asyncDispose]() {
    await new Promise(resolve => this.stream.end(resolve));
    const date = new Date().toISOString(); // YYYY-MM-DD
    const newFilename = `${this.filename.replace('.log', '')}-${date}.log`;
    await rename(this.filename, newFilename);
    console.log('logger disposed!');
  }
}

// Example usage:
await using logger = new Logger('app.log');
logger.log('Hello, logger!');
logger.log('Another log entry at', new Date());
