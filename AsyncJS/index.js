// Synchronously I/O tasks

const fs = require("fs");

//I/O Heavy task
const content = fs.readFileSync("hlw.txt", "utf-8");
console.log(content)

// CPU task
for(let i=0; i<10; i++){
  if(i==9)
    console.log("Can't leave thread until this task is done!!");
}

// I/O task in sync 
const content2 = fs.readFileSync('hii.txt', 'utf-8');
console.log(content2)
