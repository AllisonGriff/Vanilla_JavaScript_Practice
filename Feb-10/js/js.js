// Objects in JS feel like Dict in python

// let examplePerson = {
//     name : "John",
//     age : 30, 
//     email : "John25@gmail.com",
// }

// examplePerson.age  <--- dot notation
                        //the same thing... key value look up
// examplePerson['age'] <-- look up or bracket notation

// some gothcas 
/*
when we iterate throug these objects.

let someExample = [ 2, 3, 4];

for( let e of someExample){
console.log (e)}


-- Everything is unknown until it is not unknown
*/



// START DAY 7

let pandaData = {
      commonName: "red panda",
  scientificName: "Ailurus fulgens",
  scientificClass: "mammal",
  averageSize: ["20–26 inches (head and body), 12–20 inches (tail), 12–20 lbs"],
  diet: ["bamboo", "insects", "acorns", "eggs", "fruit"],
  habitat: ["Nepal", "Central China", "Myanmar"],
  endangeredSpecies: true,
  funFacts: [
    "Red pandas have six toes on their front paws",
    "Their paws are covered with fur",
    "They are good at climbing trees"
  ]
};



// Main Logic----- Goal is to have this form a table on the page

let h2 = document
.querySelector("h2")
.insertAdjacentHTML(
    "afterend",
    `<table class = "table table-striped" > <tbody> </tbody> </table>`);

    // what does afterend mean?

function createRow(key, value){
    return `
    <tr>
        <td>${key} </td>
        <td>${value} </td>
    </tr>`
}


let tableData ="";
for (const key in pandaData){
    tableData += createRow(key, pandaData[key]);
}

// insert rows and colums into table
document.querySelector("tbody").insertAdjacentHTML("afterbegin",tableData)