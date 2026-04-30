
// getPet() adds a selected pet to a UL/LI list of pets
function getPet(event) {
    // review question
    let petname = event.target.textContent;
    let petRank = event.target.dataset.petRank;
    let petType = event.target.dataset.petType;

    let html = `<li>${petname} (${petType}, Rank: ${petRank})</li>`;

    console.log(event.target.dataset)

    document.querySelector('#pet-list').insertAdjacentHTML('beforeend', html);
   
}



document.querySelectorAll('#pet-buttons button').forEach((button) => {
    button.addEventListener('click', getPet);
});


// saves #pet-list into local storage
function savePetList() {
        let petList = document.querySelector('#pet-list').innerHTML;
        localStorage.setItem('petList', petList);

        // localStorage.setItem('petList', document.querySelector("ul").innerHTML);
        // alert('Pet list saved!');
}

// loads a saved list from local storage
function loadPetList() {
    let savedList = localStorage.getItem('petList');
    if (savedList) {
        document.querySelector('#pet-list').innerHTML = savedList;
    }
}

// clears #pet-list (interface)
function clearPetList() {
    document.querySelector('#pet-list').innerHTML = '';
}

// deletes the saved list from local storage
function deletePetList() {
    localStorage.removeItem('petList');
}

document.querySelector('#save').addEventListener('click', savePetList);
document.querySelector('#load').addEventListener('click', loadPetList);
document.querySelector('#clear').addEventListener('click', clearPetList);
document.querySelector('#delete').addEventListener('click', deletePetList);


// edge cases if there is no data to load
// JSON as an interchange format for more complex data (objects, arrays, etc.) instead of just strings