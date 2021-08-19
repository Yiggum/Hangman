const { resolveCaa } = require("dns");
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
        console.log("Yee haw! you got the right letter!");
        console.log(emptySpaces.toString());

    } else {
        console.log("Oh no! wrong letter! " + livesLeft + " lives remaining")
        livesLeft --;
        

    }
}

function gameCycle () {
    console.log(emptySpaces.toString());
    rl.question("guess a letter! ", function (answer) {
        guessedLetters.push(answer);
        letterChecker(answer); 
        console.log("Letters guessed already: " + guessedLetters);

        if (guessWord == emptySpaces.toString()) {
            console.log("YEEEE BOOOIII YOU DID IT");

            rl.close }

            if (livesLeft < 1){
                console.log("its dead jim")
            rl.close
        }   if (livesLeft > 0) {
            gameCycle();
        }
       
            else {
                rl.close
            }
                       
      });
}

gameCycle();

// gameCycle();

// function gameCycle () {
//     console.log(emptySpaces.toString());
//     rl.question("guess a letter! ", function (answer) {
//         guessedLetters.push(answer);
//         letterChecker(answer); 
//         console.log("Letters guessed already: " + guessedLetters);
        
//         if (livesLeft > 0){
//             gameCycle()
//         }

//         else if (emptySpaces == guessWord) {
//             console.log("YEEEE BOOOIII YOU DID IT");

//             rl.close }
//             else {
//                 rl.close
//             }
                       
//       });
// }


// gameCycle();
