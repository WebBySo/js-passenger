let number = 0;
let saveEl = document.getElementById("stored");


function increase() {
    number = number +1;
    document.getElementById("counter").innerText = number;
}

function decrease() {
    number -= 1;
    document.getElementById("counter").innerText = number;
}


function save() {
    saveEl.innerText += " " + "(" + number + ")" +" - ";
    document.getElementById("counter").innerText =0
    number=0;
}

function resset(){
    saveEl.innerText = "previous items: ";
    document.getElementById("counter").innerText =0
    number=0;
}







