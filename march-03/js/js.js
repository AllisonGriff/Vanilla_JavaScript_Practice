'use strict';


function showPanel(event) {
    let currentTab = event.target;
    console.log(currentTab)

    // Turn off all tabs. 

document.querySelectorAll('button').forEach(
    (btn) => {
        btn.setAttribute("aria-selected", "false");
    }
);



    // Turn on clicked tab
document.querySelectorAll("button").forEach(
    (btn) => {
        if (btn.id == event.target.id) {
            btn.setAttribute("aria-selected", "true");
        }
    }
);

// deal with hidden tag. I wanna manipulate it. 

    // set all tabpanels to hidden
document.querySelectorAll('[role = "tabpanel"]').forEach(
    (tab) => {
        tab.setAttribute('hidden','true');
    }
);

//unhide current panel by removing the hidden panel

document.querySelectorAll('[role = "tabpanel"]').forEach(
    (panel) => {
        if (panel.getAttribute('aria-labelledby') == currentTab.id){
            panel.removeAttribute('hidden');
        }
    }
)




}

document.querySelectorAll("button").forEach(
    (btn) => { 
        btn.addEventListener('click', showPanel)
});


