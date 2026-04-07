function onSubmit(event) {


    // What does this mean? What is the "default" validation approach?
    //  if not here does the page reload?
    // the prevent default is keeping the page from reloading. 
    event.preventDefault();

    console.log(document.forms.petstore.pets.value);
    // your JS code goes here
}




// Main
(() => {
    document.querySelector("button[type=submit]").addEventListener('click', onSubmit);
})();