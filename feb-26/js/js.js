'use strict' ;


//Event Listeners
// How to write "HTML" with JS


// Behavior preserving code transformtion
// step 1:

function main1(){
    console.log("step 1 works");
}
main1()

// steps 2
 let main2 = () => {
    console.log("step 2 works");
 }
 main2();


//  Final Idea, a function that  immeadiatly
 (() => {

    // Set up logic?
    console.log("step 3 works");
 })();


//   all of these run funtions!!!!!
//  public static void main


// Idea 2: Global Object for storing game information

const gameState = {
  randNum: 0,
  gameOver: false,
  choices: []
};


function resetGameState(){
    gameState.randNum = 0;
    gameState.gameOver = false;
    gameState.choices = [];
}

(() =>{

    // Start the game
    resetGameState();


    document.querySelector('#resetButton').addEventListener(
        'click', (event) => {
            resetGameState();
        }
    )
}
)


