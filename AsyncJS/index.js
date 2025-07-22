// Synchronously I/O tasks

const fs = require("fs");

const content = fs.readFileSync("hlw.txt", "utf-8");
console.log(content)