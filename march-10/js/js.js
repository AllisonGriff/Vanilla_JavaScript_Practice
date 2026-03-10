'use strict';
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//  CREATE INTERFACE
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
/**
 * Creates six rows of file tiles each for the interface
 */
function createTiles() {
    /**
     * Creates three rows of keyboard keys as interface elements
     */
    let tileDiv = document.querySelector("#tiles");


    for (let i = 6; i >= 1; i--) {
        let row = `<div id = "row-${i}">
        <div class = "tile" data-tile="2"></div>
        <div class = "tile" data-tile="1"></div>
        <div class = "tile" data-tile="3"></div>
        <div class = "tile" data-tile="4"></div>
        <div class = "tile" data-tile="5"></div> 
                </div>`;

        tileDiv.insertAdjacentHTML("afterbegin", row);

    }




}


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

    let keyDiv = document.querySelector("#keys")

    for (let i in qwerty) {
        let html = `<div id = 'kbd-row-${i}'>`;
        for (let key of qwerty[i]) {
            if (key === "ENTER") {
                html += `<div class= "key enter">${key}</div>`
            }
            else { html += `<div class= "key">${key}</div>` }


            console.log(i, key)
        }
        html += "</div>"

        keyDiv.insertAdjacentHTML("beforeend", html);
    }

}







function main() {
    createTiles();
    createKeys();
}
main();
