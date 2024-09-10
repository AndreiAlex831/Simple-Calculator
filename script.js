let firstNumber;
let secondNumber;
let operator;
function add (){
    firstNumber = 7;
    secondNumber = 3;
    operator = '+';
}

function subtract (){
    
}

function multiply (){
    
}

function divide (){
    
}

function operate (sum){
    if (operator === '+'){
       sum =  firstNumber + secondNumber;
       console.log(sum);
    }
}
add(firstNumber, secondNumber, operator);
operate(add);
