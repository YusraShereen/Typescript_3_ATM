"use strict";
exports.__esModule = true;
var crypto_1 = require("crypto");
var readlineSync = require('readline-sync');
var randnum = (0, crypto_1.randomInt)(20);
console.log('\n\n*************************************\tWELCOME TO NUMBER GUESSING GAME\t***************************************************\n\n');
var play = true;
var guessnum;
while (play) {
    guessnum = Number(readlineSync.question('\n\nGuess a number: '));
    if (guessnum > randnum) {
        console.log('\n\nYour guess is too big');
    }
    else if (guessnum < randnum) {
        console.log('\n\nYour guess is too small');
    }
    else {
        console.log('\n\nCongratulation!! Your guess is right');
        var playAgain = readlineSync.question('\n\nDo you want to play again?\t(Y/N)');
        if (playAgain.toLowerCase() == "y") {
            randnum = (0, crypto_1.randomInt)(20);
            continue;
        }
        else {
            play = false;
            continue;
        }
    }
    var exit = readlineSync.question('\n\nDo you want to quit?\t(Y/N)');
    if (exit.toLowerCase() == "y")
        play = false;
}
