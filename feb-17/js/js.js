'use strict';

// Callback function

function logAMessage(event){
    console.log(event);
    console.log("Did Something")
}

let arrowButton = document.querySelector('#function');

arrowButton.addEventListener('click', logAMessage);



// arrow functions?
document.querySelector('#arrow').addEventListener(
    'click', 
    (event) => {
        console.log(event.clientX);

    }
)