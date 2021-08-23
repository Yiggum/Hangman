const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const possibleWords = ["handkerchief", "volkswagen", "scoobydee", "runescape"]

let livesLeft = 10

let guessWord = possibleWords [Math.floor(Math.random() * possibleWords.length)]

let guessedLetters = []

let emptySpaces = []

for (i = 0; i < guessWord.length; i++) {
    emptySpaces.push("_")
}


module.exports = function letterChecker (letter) {
    const possibleWords = ["handkerchief", "volkswagen", "scoobydee", "runescape"]
    let guessWord = possibleWords [Math.floor(Math.random() * possibleWords.length)]
    if (guessWord.includes(letter)) {
        for (i = 0; i < guessWord.length; i++) {
            if (guessWord[i] == letter) {
                emptySpaces[i] = letter
            }
        }
        return "Yee haw! you got the right letter!";
        

    } else {
        livesLeft --; 
        return "Oh no! wrong letter! " + livesLeft + " lives remaining"
               
            }
    }


function gameCycle () {
    console.log(emptySpaces.join(''));
    rl.question("guess a letter! ", function (answer) {
        guessedLetters.push(answer);
        if (answer = answer.toLowerCase()) {
           letterChecker(answer); 
        console.log("\nYou have already used these characters: " + guessedLetters);
    }

        if (guessWord == emptySpaces.join('')) {
            console.log("\nYOU DID IT! you guessed the word: " + guessWord);
            rl.close }

            if (livesLeft < 1){
                console.log("It's dead jim.")
                console.log("")
            rl.close
        }   
            if (livesLeft > 0) {
            gameCycle();
        }
            else {
                rl.close
            }
                       
      });
}

gameCycle();













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
