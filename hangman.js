const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });


const possibleWords = ["moisten", "elephant", "orangutan", "helicopter"]

let livesLeft = 10

// let number = Math.floor(Math.random() * possibleWords.length)

// const drawnWord = possibleWords[wordCharacters]

// console.log(drawnWord);

let guessWord = possibleWords [Math.floor(Math.random() * possibleWords.length)]

let guessedLetters = []
let emptySpaces= []

for (i = 0; i < guessWord.length; i++) {
    emptySpaces.push("_")
}


function letterChecker (letter) {
    if (guessWord.includes(letter)) {
        for (i = 0; i < guessWord.length; i++) {
            if (guessWord[i] == letter) {
                emptySpaces[i] = letter
            }
        }
        console.log("yee haw");
        console.log(emptySpaces.toString());

    } else {
        livesLeft --;
        console.log(livesLeft);
    }
}



// rl.question("guess a letter! ", function (answer) {
//     console.log(`You have guessed, ${answer}`);
//     guessedLetters.push(answer);
//     console.log(guessedLetters);
//     rl.close();
//   });

// console.log(emptySpaces.toString());


// rl.question("guess a letter! ", function (answer) {
//     console.log(`You have guessed, ${answer}`);
//     guessedLetters.push(answer);
//     console.log(guessedLetters);
//     rl.close();
//   });

// console.log(emptySpaces.toString());


// rl.question("guess a letter! ", function (answer) {
//     console.log(`You have guessed, ${answer}`);
//     guessedLetters.push(answer);
//     console.log(guessedLetters);
//     rl.close();
//   });

console.log(emptySpaces.toString());

rl.question("guess a letter! ", function (answer) {
    console.log(`You have guessed, ${answer}`);
    guessedLetters.push(answer);
    console.log(guessedLetters);
    letterChecker(answer);
    rl.close();
  });

console.log(emptySpaces.toString());




//const drawnWord = possibleWords[wordCharacters]

//console.log(guessWord);




//need to count characters in drawn word to play the game
//Math.floor(Math.Random()) * 3
//subtract from lives when wrong letter guessed
//keep track of letters guessed already 

//math.random( possibelwordd length)



// rl.question("guess a letter! ", function (answer) {
//     console.log(`Oh, so your name is ${answer}`);
//     console.log("Closing the interface");
//     rl.close();
//   });

//   //well done or bad luck on win or lose