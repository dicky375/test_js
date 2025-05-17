//CALCULATOR PROGRAM

document.addEventListener('DOMContentLoaded', () => {
const display = document.getElementById("display");

window.appendToDisplay = function(input) {
    if (display){
        display.value += input;
    } else {
        console.error('Display element not found!');
    }



}

window.clearDisplay = function() {
        if (display) {
            display.value = "";
        } else {
            console.error('Display element not found!');
        }

}
 window.calculate = function() {
    if (display){
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }
 }



});