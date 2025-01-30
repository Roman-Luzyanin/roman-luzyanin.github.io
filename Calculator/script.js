let firstNumber;
let secondNumber;
let currentNumber = 0;
let operator;
let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number')
let actions = document.querySelectorAll('.action');
let reset = document.querySelector('.reset');
let reverse = document.querySelector('.reverse');
let remove = document.querySelector('.remove');
let dot = document.querySelector('.dot');

display.textContent = 0;

reset.addEventListener('click', () => {
    display.textContent = 0;
    currentNumber = 0;
    firstNumber = 0;
    secondNumber = 0;
    operator = undefined;
});

reverse.addEventListener('click', () => {
    display.textContent[0] === '-' ? display.textContent = Number(display.textContent) * (-1) : display.textContent = Number(display.textContent) * (-1);
    currentNumber = display.textContent;
});

remove.addEventListener('click', () => {
    display.textContent.length === 1 ? display.textContent = 0 : display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    currentNumber = display.textContent;
});

dot.addEventListener('click', () => {
    display.textContent.includes('.') ? dot.value = '' : dot.value = '.' ;
    display.textContent += dot.value;
});

numbers.forEach(number => number.addEventListener('click', () => {
    if (firstNumber !== 0 && currentNumber === 0) display.textContent = 0;
    display.textContent === '0' ? display.textContent = number.value :
    display.textContent.replace('.', '').length === 9 || display.textContent.replace('-', '').length === 10 ? '' : display.textContent += number.value;
    currentNumber = display.textContent;
}));

actions.forEach(action => action.addEventListener('click', () => {
    if (operator && firstNumber && currentNumber) {
        secondNumber = currentNumber;
        operate(firstNumber, secondNumber, operator);
        firstNumber = currentNumber;
        currentNumber = 0;
        action.value === '=' ? operator = undefined : operator = action.value;
    } else {
        if (action.value === '-' && display.textContent === '0') display.textContent = '-';
        firstNumber ? firstNumber : firstNumber = currentNumber;
        currentNumber = 0;
        operator = action.value;  
}}))

function add(a,b) {
    return +a + +b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(firstNumber, secondNumber, operator) {

    switch (operator) {
        case '+' : currentNumber = add(firstNumber, secondNumber);
        break;
        case '-' : currentNumber = subtract(firstNumber, secondNumber);
        break;
        case '*' : currentNumber = multiply(firstNumber, secondNumber);
        break;
        case '/' : currentNumber = divide(firstNumber, secondNumber);
        break;
    }

    return  String(currentNumber).replace('.', '').length < 10 ?
            display.textContent = currentNumber :
            String(currentNumber)[0] === '0' ?
            display.textContent = currentNumber.toPrecision(8) :
            display.textContent = currentNumber.toPrecision(9);
}



