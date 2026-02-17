'use strict';

// Callback function

// function logAMessage(event){
//     console.log(event);
//     console.log("Did Something")
// }

// let arrowButton = document.querySelector('#function');

// arrowButton.addEventListener('click', logAMessage);



// // arrow functions?
// document.querySelector('#arrow').addEventListener(
//     'click', 
//     (event) => {
//         console.log(event.clientX);

//     }
// )


// JS example from the chapter
// Arrow function == shorter, inline version
let buttonArrow = document.querySelector('#arrow');

buttonArrow.addEventListener('click', (event) => {
    alert('Ouch!');
    console.log("EVENT", event);
    console.log("EVENT TARGET", event.target);
    console.log("THIS", this);
});

// Function declaration - standard, can reuse
function stopThat(event) {
    console.log("EVENT", event);
    console.log("EVENT TARGET", event.target);
    console.log("THIS", this);
    alert('Owwww! Stop that!');
}





//  declare a function?

function chooseRandomNum(){
    return 1 + Math.ceil(Math.random() * 100);
}


// event listener

document.querySelector('#function').addEventListener(
    'click', chooseRandomNum
)




// Greet the 
let UserName = document.querySelector('#username')


function clearInputDisplayName(event){
    let name= UserName.value;

    document.querySelector('#greetingElement').textContent = `Hello, ${name}`
    console.log(name)

}

document.querySelector('#go').addEventListener('click', clearInputDisplayNames)
// replace ____ with Name