import { randomInt } from "crypto";

const readlineSync = require('readline-sync');

let randnum:number = randomInt(20);

console.log('\n\n*************************************\tWELCOME TO NUMBER GUESSING GAME\t***************************************************\n\n')
let play = true;
let guessnum:number;

while(play){

    guessnum = Number(readlineSync.question('\n\nGuess a number: '));

    if(guessnum > randnum){
        console.log('\n\nYour guess is too big');
    }
    else if(guessnum < randnum){
        console.log('\n\nYour guess is too small');
    }
    else{
        console.log('\n\nCongratulation!! Your guess is right');

        let playAgain:string  = readlineSync.question('\n\nDo you want to play again?\t(Y/N)');

        if(playAgain.toLowerCase() == "y"){
            randnum = randomInt(20);
            continue;
        }
        else{
            play = false;
            continue;
        }

        
    }
    let exit:string = readlineSync.question('\n\nDo you want to quit?\t(Y/N)');
    if(exit.toLowerCase() == "y")
        play = false;


}

