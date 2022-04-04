//This is to set the nest number at the top of the forms

const nestInput = document.getElementById("nest-input");
const nestNumber = document.getElementById("nest-number");
const nestDisplay = document.getElementById('nestDisplay');

if(nestInput.addEventListener){
    nestInput.addEventListener("submit", nestUpdate(), false);
} else if (nestInput.attchEvent){
    nestInput.attachEvent('onsubmit', nestUpdate());
}

function nestUpdate(){
    nestNumber = nestInput;
}

// nestNumber.innerText = "12";