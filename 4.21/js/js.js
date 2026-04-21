
// getPet() adds a selected pet to a UL/LI list of pets
function getPet(event) {
    // review question
    let petname = event.target.textContent;
    let petRank = event.target.dataset.petRank;
    let petType = event.target.dataset.petType;

    let html = `<li>${petname} (${petType}, Rank: ${petRank})</li>`;

    console.log(event.target.dataset)
    // document.querySelector or event.target?
    // 
    // add an item in the UL
        // li text content
            // event.target.dataet
        
    // hoow do we update the list item
    // insertAdjacentHTML(beforeend) or appendChild?
}

document.querySelectorAll('#pet-buttons button').forEach((button) => {
    button.addEventListener('click', getPet);
});


// saves #pet-list into local storage
function savePetList() {}

// loads a saved list from local storage
function loadPetList() {}

// clears #pet-list (interface)
function clearPetList() {}

// deletes the saved list from local storage
function deletePetList() {}

document.querySelector('#save').addEventListener('click', savePetList);
document.querySelector('#load').addEventListener('click', loadPetList);
document.querySelector('#clear').addEventListener('click', clearPetList);
document.querySelector('#delete').addEventListener('click', deletePetList);
