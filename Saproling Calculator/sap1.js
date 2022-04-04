//This is to set the nest number at the top of the forms

const nestInput = document.getElementById("nest-input");
const nestNumber = document.getElementById("nest-number");
const nestDisplay = document.getElementById('nestDisplay');
const updaters = document.querySelectorAll('.updater')

// For updating text
var newNestDisplay = document.createTextNode("234");
nestDisplay.appendChild(newNestDisplay);

//Updater for all of the "enter" buttons
function update() {
    updaters.addEventListener('click', () => {
        
    })
}

// nestNumber.innerText = "12";