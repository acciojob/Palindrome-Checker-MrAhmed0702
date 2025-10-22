const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function palindrome(str) {
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Ask the user for input using the readline interface
rl.question('Enter a sentence: ', (sentence) => {
    if (palindrome(sentence)) {
        console.log(true);
    } else {
        console.log(false);
    }

    rl.close();
});
