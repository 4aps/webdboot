const fs = require('fs');

function promisifiedReadFile(path, encoding = 'utf-8'){
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err, data) => {
            if(err) return reject(err);

            const processData = data.trim().replace(/\s+/g, ' ');
            fs.writeFile(path, processData, 'utf-8', (err) => {
                if (err) return reject(err);
                console.log('File successfully trimmed and updated.');
                resolve(processData);
            });
        });
    });
}

function onlyRead(path, encoding='utf8',){
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf8', (err, data) =>{
            if(err) reject(err);
            else resolve(data);
        });
    });
}

function promiseRunner(delay){
    return promisifiedReadFile('notes.txt')
    .then(() => new Promise(resolve => setTimeout(resolve, delay)))
    .then(() => 'notes.txt');
}

promiseRunner(1000)
    .then(onlyRead)
    .then(data => console.log("Read file contents after processing:", data))
    .catch(err => console.error("Error:", err));




