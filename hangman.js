// =============================================================
// Create an array of words
// =============================================================
const words = ["the dark knight",
             "the machinist",
             "american psycho",
             "equilibrium",
             "terminator salvation",
             "the prestige",
             "american hustle"];

// =============================================================
// Choose word randomly
// =============================================================
let randNum = Math.floor(Math.random() * words.length);
let chosenWord = words[randNum];
console.log(chosenWord);
let rightWord = [];
let wrongWord = [];

// Dom Manipulation
let docUnderscore = document.getElementsByClassName("underscore");
let docRightGuess = document.getElementsByClassName("rightGuess");
let docWrongGuess = document.getElementsByClassName("wrongGuess");

// =============================================================
// Testing
// =============================================================
// =============================================================
// Create underscore based on length of word
// =============================================================
let underscore = [];
let generateUnderscores = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        if(chosenWord[i] != ' ') {
            underscore.push('_');
            //docUnderscore[0].innerHTML = underscore.join(' ');
        }
        else {
            underscore.push(' ');
        }
    }
    console.log(underscore);
    return underscore;
}

// =============================================================
// Get user's guess
// =============================================================
document.addEventListener('keypress', (event) => {
    let keyCode = event.keyCode;
    let keyWord = String.fromCharCode(keyCode);
    // =========================================================
    // Check if user's guess is right
    // =========================================================
    if(chosenWord.indexOf(keyWord) > -1) {
        // Add to the right word array
        rightWord.push(keyWord);

        // Replace underscore with right letter
        underscore[chosenWord.indexOf(keyWord)] = keyWord;
        docUnderscore[0].innerHTML = underscore.join('');
        docRightGuess[0].innerHTML = rightWord.join('');

        // Check to see if user's word matches guesses
        if(underscore.join('') == chosenWord) {
            alert('You Win!');
        }
    }
    else {
        // Add to the wrong word array
        wrongWord.push(keyWord);
        docWrongGuess[0].innerHTML = wrongWord.join('');
    }
});

docUnderscore[0].innerHTML = generateUnderscores().join(' ');