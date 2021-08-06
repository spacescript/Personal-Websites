//This is to set the nest number at the top of the forms

var nestInput = document.getElementById("nest-input");
var nestNumber = document.getElementById("nest-number");

if(nestInput.addEventListener){
    nestInput.addEventListener("submit", nestUpdate(), false);
} else if (nestInput.attchEvent){
    nestInput.attachEvent('onsubmit', nestUpdate());
}

function nestUpdate(){
    nestNumber = nestInput;
}

// nestNumber.innerText = "12";