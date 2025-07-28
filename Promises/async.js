const fs = require("fs");

function readFileAsync() {
    return new Promise(function(resolve, reject) {
        fs.readFile("a.txt", "utf-8", function(err, data) {
            if (err) {
                reject("File not found!");
            } else {
                resolve(data);
            }
        });
    });
}

async function read() {
    try {
        const data = await readFileAsync();
        console.log("File content:", data);
    } catch (err) {
        console.error("Error:", err);
    }
}

read();

//OR

readFileAsync()
.then(function(x){
    console.log("File has been read: " + x);
})
.catch(function(e){
    console.log(e);
})
