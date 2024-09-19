const keypad = document.querySelectorAll('button');

keypad.forEach(function (button) {
    button.addEventListener('click', function () {
        console.log(button.dataset.value);
    });
});



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

function operate (a, operator, b){
    if (operator === '+'){
        console.log(add(a, b));
    }else if (operator === '-'){
        console.log(subtract(a, b));
    }else if (operator === '*'){
        console.log(multiply(a, b));
    }else if (operator === '/'){
        console.log(divide(a, b));
    }
}

operate(15, '/', 10);

