//https://www.hackerrank.com/challenges/js10-regexp-2/problem
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    var re = /^(Mr|Mrs|Ms|Dr|Er)[.][A-Za-z]*$/;
    
    /*
     * Do not remove the return statement
     */
    return re;
}
function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(!!s.match(re));
}