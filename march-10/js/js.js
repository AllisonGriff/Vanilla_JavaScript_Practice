'use strict';
import { wordleWords } from "./wordle-list.js";
import { fullList } from "./full-list.js";

// globals - state of the game
const state = {
    wordleWord: [],
    currentGuess: [],
    currentTile: 1,
    currentTileRow: 1
   
};

 console.log (wordleWords);
 
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
                <div class="tile" data-tile="1"></div>
                <div class="tile" data-tile="2"></div>
                <div class="tile" data-tile="3"></div>
                <div class="tile" data-tile="4"></div>
                <div class="tile" data-tile="5"></div>
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
    } else if (event.key === 'Backspace') {
        console.log('BACKSPACE KEY:', event.key);
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
    } else {
        console.log('not a valid key');
    }
});



(() => {
    createTiles();
    createKeys();
})();