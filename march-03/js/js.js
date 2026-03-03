'use strict';


function showPanel(event) {
    let currentTab = event.target;
    console.log(currentTab)

    // Turn off all tabs. 

document.querySelectorAll('button').forEach(
    (btn) => {
        btn.setAttribute("aria-selected", "false");
    }
)

    // Turn on clicked tab
document.querySelectorAll("button").forEach(
    (btn) => {
        if (btn.id == event.target.id) {
            btn.setAttribute("aria-selected", "true");
        }
    }
)


}

document.querySelectorAll("button").forEach(
    (btn) => { 
        btn.addEventListener('click', showPanel)
});


