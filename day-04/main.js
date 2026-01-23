// function findAge(yearBorn, currentYear, name) {
//     let age = currentYear - yearBorn;
//     let message =(`${name} is ${age} years old.`);
//     alert(message);

//     return message;

// }
// console.log(findAge(1996, 2026, 'Samantha'));

// Computer Science
//   ->compilers course, interpreters
//   ->c311, C211
//  "Lexical Closure" or " Lexical Scoping"

// Try to avoid this
// if you name your vaibles Well, limit global scoped data, it avoids all kinds of problems


// ############Global Data
// const CURRENT_YEAR = 2024;
// let agesFound = 3;
// let name = "Julian" 
// shawdowed out this variable

// function findAge(yearBorn, name) {

/// Local variables to the function

//     agesFound++;
//     let age = CURRENT_YEAR - yearBorn;
//     alert(`${name} is ${age} years old.`);
// }

// findAge(2003, 'Ben Chang');
// alert(agesFound);




///############ FUNCTIONS AS EXPRESSIONS

// function error(){
//     return 'ERROR!';
// }

// let altError = function(){
//     return ' Error!'
// }


/// ###########dont forget parenthesis when calling a fuction
// alert(altError())




// Passing Functions as parameters

// function echo (x){
//     return x;
// }

// /*
// *@param {function} callable
// *@param {*} parameter
// *@returns {*}
// */


// Arrow Function

// let error = () => {
//     return 'Error';

// }

// let echo = (x) => {
//     return x;
// }



// PRACTICE PROBLEMS

/** Answers if there is a discount
 * @param { number } age
 * @return { string }
 */


function Age_Discount( age = 18){

 
console.log(`age = ${age}`)


// Short hand works

let discount = (age <= 22) ? 'Yes' : 'No';
return discount

}

console.log(Age_Discount())
console.log(Age_Discount(22))
console.log(Age_Discount(33))



/** "Prints" out your name a bunch of times
 * Write a function that asks for a name and a number, then prints a string with the name appearing that number of times.
 * @param { string } name
 * @param { number } number
 * @return { string }
 */

function askNameandPrint (name, number){
    let result = '';

    for( let i = 0 ; i < number; i ++) {
        result = result + name; 

    }

    return result;
}

console.log(askNameandPrint('allie', 8))


