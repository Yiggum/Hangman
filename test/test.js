var assert = require("assert") 
var letterChecker = require("./../hangman.js")
// import letterChecker from "./../hangman.js"
describe("letterChecker tests", function() {
    it("when i pass a letter to letterChecker and the letter exists within the word, it returns yeehaw",
     function() {
        let answer = letterChecker("e")
            console.log(answer);
            assert.strictEqual(answer, "Yee haw! you got the right letter!")

    })


    it("when i pass a letter to letterChecker and the letter does not exist, it will return, oh no!",
     function() {
        let answer = letterChecker("x")
            console.log(answer);
            assert.strictEqual(answer, "Oh no! wrong letter! 9 lives remaining")

})

})