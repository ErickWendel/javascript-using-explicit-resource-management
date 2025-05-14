# Node.js 24: Explicit Resource Management Demo

This repository accompanies my YouTube video on the new [Explicit Resource Management](https://github.com/tc39/proposal-explicit-resource-management) feature in Node.js 24, which introduces the `using` and `await using` keywords for automatic resource cleanup.

📺 **Watch the video:** [Node.js 24: Explicit Resource Management Explained](https://www.youtube.com/watch?v=YOUR_VIDEO_LINK)

---

## 🚀 What is Explicit Resource Management?

Node.js 24 (and newer) supports the new `using` and `await using` keywords, allowing you to automatically clean up resources (like files, servers, and streams) when they go out of scope. This is similar to features in languages like C# and Rust, and helps prevent resource leaks and boilerplate cleanup code.

---

## 🛠️ Getting Started

1. **Install Node.js 24**
   - This feature requires Node.js v24 or newer.
   - If you use [nvm](https://github.com/nvm-sh/nvm):
     ```sh
     nvm install 24
     nvm use 24
     ```

2. **Run the examples**
   - Each file is a standalone example. Run them with:
     ```sh
     node <filename>
     ```

---

## 📁 Repository Files Explained

- **[01-feat.js](./01-feat.js)**
  - Demonstrates the basics of both synchronous and asynchronous resource disposal using `Symbol.dispose` and `Symbol.asyncDispose`. Shows the syntax for both `using` and `await using` keywords.

- **[02-custom-stream-logger.js](./02-custom-stream-logger.js)**
  - Creates a custom `Logger` class that writes to a file stream and implements `Symbol.asyncDispose`. When the logger goes out of scope, it automatically closes the stream and renames the log file with the current timestamp.

- **[03-interval.js](./03-interval.js)**
  - Shows how to use `using` with `setInterval`. When the block ends, the interval is automatically cleared, preventing memory leaks and ongoing timer execution.

- **[04-readline.js](./04-readline.js)**
  - Demonstrates using `await using` with Node.js's readline interface. The readline interface is automatically closed after use, without needing an explicit `rl.close()` call.

- **[05-child-process.js](./05-child-process.js)**
  - Shows how to use `await using` with a child process spawned by Node.js. The child process is managed as a disposable resource, and its stdout is read using the new `toArray()` method from asyncIterators helpers.

---

## 📝 About This Repo

This code is for educational purposes and accompanies my YouTube video. Feel free to fork, experiment, and share!

If you have questions or suggestions, leave a comment on the video or open an issue.

---

Happy coding! 🎉 


## License 

- Check it here [MIT](LICENSE)