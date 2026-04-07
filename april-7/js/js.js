function onSubmit(event) {


    // What does this mean? What is the "default" validation approach?
    //  if not here does the page reload?
    event.preventDefault();

    console.log("clicked submit");
    // your JS code goes here
}




// Main
(() => {
    document.querySelector("button[type=submit]").addEventListener('click', onSubmit);
})();