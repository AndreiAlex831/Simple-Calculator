let currentInput = '';  
let firstOperand = null; 
let operator = null; 
let secondOperand = null; 
let resultDisplayed = false; 


function pressButton(value) {
    if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
    }

    currentInput += value;
    document.getElementById('display').innerText = currentInput;
}


function clearScreen() {
    currentInput = '';
    firstOperand = null;
    secondOperand = null;
    operator = null;
    document.getElementById('display').innerText = '0';
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b === 0 ? 'Error' : a / b;  
}


function operate(a, operator, b) {
    a = parseFloat(a);  
    b = parseFloat(b);  

    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

function setOperator(op) {
    if (firstOperand === null) {
        firstOperand = currentInput;
    }
    operator = op;
    currentInput += ` ${op} `;
    document.getElementById('display').innerText = currentInput;

    currentInput = '';
}

function calculateResult() {
    if (firstOperand !== null && operator !== null && currentInput !== '') {
        secondOperand = currentInput;
        let result = operate(firstOperand, operator, secondOperand);

        document.getElementById('display').innerText = result;
        currentInput = result.toString();
        firstOperand = result;
        operator = null;
        secondOperand = null;
        resultDisplayed = true;
    }
}

function deleteLast() {
    if (currentInput !== '') {
        currentInput = currentInput.slice(0, -1); 
        document.getElementById('display').innerText = currentInput || '0';
    }
}

function toggleNegative() {
    if (currentInput !== '') {
        if (currentInput.startsWith('-')) {
            currentInput = currentInput.slice(1);
        } else {
            currentInput = '-' + currentInput;
        }
        document.getElementById('display').innerText = currentInput;
    }
}
