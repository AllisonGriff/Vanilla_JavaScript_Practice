function onSubmit(event) {


    // What does this mean? What is the "default" validation approach?
    //  if not here does the page reload?
    // the prevent default is keeping the page from reloading. 
    event.preventDefault();


     if (!document.forms.petstore.name.value) {

         document.querySelector("#name").classList.add("error");
            // name is not present provvide feedback to user
            document.querySelector(".feedback").textContent = "Please enter your name.";
           

        //name is not present
     }else {
            // name is present
            console.log(document.forms.petstore.pets.value);
     }

    // your JS code goes here
}




// Main
(() => {
    document.querySelector("button[type=submit]").addEventListener('click', onSubmit);
})();