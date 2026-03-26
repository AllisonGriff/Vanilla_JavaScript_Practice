'use strict';


import { wordleWords } from "./wordle-list.js";
import { fullList } from "./full-list.js";


const state = {
    wordleWord: [],
    currentGuess: [],
    currentTile: 1,
    currentTileRow: 1
};


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//  FUNCTIONALITY
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
/**
 * Randomly chooses a word from the official wordle choices list
 * @returns {array} wordleWord (sets global)
 */
function chooseWord() {
    let arrLength = wordleWords.length;
    let randomNumber = Math.floor(Math.random() * arrLength);
    state.wordleWord = wordleWords[randomNumber].split("");
}


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//  MAKE A GUESS: ADD A LETTER
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
/**
 * Creates an array of 5 letters = a guessed word
 * @param {string} letter
 */
function buildGuess(letter) {
    // as long as currentGuess isn't 5-letters long, add a letter to a tile

    if (state.currentGuess.length >= 5) {
        // do nothing
        console.log("too long!");
    } else {
        addTile(letter);
    }
    console.log(state.currentGuess);
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//  MAKE A GUESS: CHECK THE GUESS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
/**
 * Checks if a guessed word is valid, and if so sends it to be evaluated
 * Note: evaluateWord(array) takes an array based off the guessed word
 */
function checkGuess() {
    // What if the user hits Enter before typing in 5 letter?
    if (state.currentGuess.length < 5) {
        // Is the guess 5 letters?
        // If not, we will have a notice appear with the error "not enough letters"
        let notice = document.querySelector("#notice");
        notice.classList.add("open");
        notice.textContent = "Not enough letters";

        setTimeout(() => {
            document.querySelector("#notice").classList.remove("open")
        }, 1500);

    } else {
        if (isValid(state.currentGuess)) {
            console.log("IS Valid");

            // TODO: This is where we update the row and modify the interface flipping over the tiles.
            // evaluateGuess();

        } else {
            console.log("IS NOT valid");
            // shake the row
            document.querySelector(`#row-${state.currentTileRow}`).classList.add('shake');
            setTimeout(() => {
                document.querySelector(`#row-${state.currentTileRow}`).classList.remove('open')
            }, 820);

            // Display a message?
            let notice = document.querySelector("#notice");
            notice.classList.add("open");
            notice.textContent = "Not a valid word";

            setTimeout(() => {
                document.querySelector("#notice").classList.remove("open")
            }, 1500);
        }
    }
}

/**
 * Determines if the current guess is a word recognized as a guess by Wordle
 * @param {array} currentWord
 * @returns {boolean}
 */
function isValid(currentWord) {
    return fullList.find((word) => word == currentWord.join(''));
}

/**
 * Updates a tile to add a letter to the interface when an interface key is selected
 * @param {string} letter
 */
function addTile(letter) {
    // select the current row and tile (keep track in global state)
    // add a CAPTIAL letter as text content into the tile (interface)
    // add the .active class to the tile (interface)
    // update which tile we are on

    // "Guard" approach
    if (state.currentTile > 5) {
        return;
    }
  

    let currentTile = document.querySelector(`#row-${state.currentTileRow}-${state.currentTile}`);
    currentTile.classList.add("active");
    currentTile.classList.add('animation-bounce');

    setTimeout(() =>{
        currentTile.classList.remove('animation-bounce');
    }, 100)
    currentTile.textContent = letter.toUpperCase();

    state.currentGuess.push(letter);

    // Increment the row that we are on
    state.currentTile += 1;
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//  MAKE A GUESS: REMOVE A LETTER
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
/**
 * Handles when the backspace key is clicked
 * - removes a tile and a letter in guessed word
 */
function deleteTile() {
    // if there are any letters left in the guess (global)...
    // delete a letter from the guess
    // delete the tile for that letter

    if (state.currentTile == 1) {
        return;
    }

    state.currentTile -= 1;

    let currentTile = document.querySelector(`#row-${state.currentTileRow}-${state.currentTile}`);
    currentTile.classList.remove("active");
    currentTile.textContent = "";

    state.currentGuess.pop();

    // TODO: Handle your edge cases when this gets too low
}


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//  CREATE INTERFACE
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
/**
 * Creates six rows of tiles each for the interface
 */
function createTiles() {
    let tilesDiv = document.querySelector("#tiles");

    for (let i = 6; i >= 1; i--) {
        let row = `<div id="row-${i}">
                <div class="tile" id="row-${i}-1"></div>
                <div class="tile" id="row-${i}-2"></div>
                <div class="tile" id="row-${i}-3"></div>
                <div class="tile" id="row-${i}-4"></div>
                <div class="tile" id="row-${i}-5"></div>
        </div>`;

        tilesDiv.insertAdjacentHTML(
            'afterbegin',
            row,
        );
    }
}

/**
 * Creates three rows of keyboard keys as interface elements
 */
function createKeys() {
    const qwerty = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        [
            'ENTER',
            'Z',
            'X',
            'C',
            'V',
            'B',
            'N',
            'M',
            `<span class="material-symbols-outlined">backspace</span>`,
        ],
    ];

    let keyDiv = document.querySelector("#keys");

    for (let i in qwerty) {

        let html = `<div id="kbd-row-${i}">`;

        for (let key of qwerty[i]) {
            if (key == "ENTER") {
                html += `<div class="key enter">${key}</div>`;
            } else {
                html += `<div class="key">${key}</div>`;
            }
        }

        html += "</div>";

        keyDiv.insertAdjacentHTML("beforeend", html);
    }
}


/**
 * Handles when a user's keyboard is clicked
 */
window.addEventListener('keydown', (event) => {
    // many ways to accomplish this, here is one
    let regex = /^[a-zA-Z]+$/;
    if (event.key === 'Escape') {
        console.log('ESCAPE KEY:', event.key);
    } else if (event.key === 'Enter') {
        console.log('ENTER KEY:', event.key);
        checkGuess();
    } else if (event.key === 'Backspace') {
        console.log('BACKSPACE KEY:', event.key);
        deleteTile();
    } else if (
        regex.test(event.key) &&
        event.key != 'Shift' &&
        event.key != 'Alt' &&
        event.key != 'Meta' &&
        event.key != 'Tab' &&
        event.key != 'Control' &&
        event.key != 'CapsLock' &&
        !event.key.includes('Arrow')
    ) {
        console.log('ALPHABET KEY:', event.key);
        buildGuess(event.key.toLowerCase());
    } else {
        console.log('not a valid key');
    }
});



(() => {
    createTiles();
    createKeys();
    chooseWord();
})();