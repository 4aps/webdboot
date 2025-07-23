const fs = require('fs');

fs.readFile('hlw.txt', 'utf-8', (err, data) => {
    if(err){
        console.error("Error reading file: ", err);
        return;
    }
    console.log('File Contents: ', data)
});

function print(err, data){
    if(err){
        console.log("File not found!");
        return;
    } 
    else{
        console.log(data);
    }
}

fs.readFile('hii.txt', 'utf-8', print);

