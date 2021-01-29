let inputString = '';
let ans;

function inputEvent(input) {
    let display = document.getElementById("calculator-display");
    let text = document.createTextNode(input);
    display.appendChild(text);
    console.log(input);
    inputString += String(input); 
    console.log(inputString);
}

function answer() {
    //ans = math.eval(inputString);
    document.getElementById("calculator-display").innerHTML += "Ans";
    inputString += String(ans);
}

function equals() {
    console.log(inputString);
    ans = math.eval(inputString);
    document.getElementById("calculator-display").innerHTML = ans;
    inputString = String(ans);
}

function clearDisplay() {
    console.log(inputString);
    inputString = '';
    document.getElementById("calculator-display").innerHTML = '';
}

function backspace() {
    console.log(inputString);
    inputString = inputString.slice(0, inputString.length-1);
    document.getElementById("calculator-display").innerHTML = inputString;
}

window.addEventListener("keydown", event => {
    if (/[\d.+\-*\/%]/.test(String(event.key))) {
        inputEvent(event.key);
    } else if (event.key === "Enter") {
        equals();
    } else if (event.key === "Backspace") {
        backspace();
    } else if (event.key === "Clear") {
        clearDisplay();
    } else if (event.key === "Escape") {
        clearDisplay();
    }
})