
function add (a, b){
    return a + b;
}

function subtract (a, b){
    return a - b;
}

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}

let sum = document.getElementsByClassName('add');

function operate (operator, a, b){
    if (operator === sum){
        console.log(add(a, b));
    }
}

operate(sum, 7, 15);

