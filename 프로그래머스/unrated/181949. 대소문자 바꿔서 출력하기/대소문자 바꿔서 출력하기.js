const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let output = '';

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) output += str[i].toLowerCase();
        else output += str[i].toUpperCase();
    }
    console.log(output);
});