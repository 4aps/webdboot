const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

function promisifiedReadFile(path, encoding = 'utf-8'){
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err, data) => {
            if(err) reject(err);
            else resolve(data);
        });
    });
}

promisifiedReadFile("test.txt")
.then(data => console.log("File contents: ", data))
.then(err => console.error("Read Failed!!", err));