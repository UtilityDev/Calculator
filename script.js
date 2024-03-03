let firstNumber = null;
let secondNumber = null;
let operator = null;

// Addition
function add (firstNum, secondNum) {
    return firstNum + secondNum;
}

// Subtraction
function subtract (firstNum, secondNum) {
    return firstNum - secondNum;
}

// Multiplication
function multiply (firstNum, secondNum) {
    return firstNum * secondNum;
}

// Division
function divide (firstNum, secondNum) {
    return firstNum / secondNum;
}

// Perform operation on given numbers
function operate (operator, firstNum, secondNum) {
    firstNumber = firstNum;
    secondNumber = secondNum;

    switch (operator) {
        case '+':
            add(firstNum, secondNum);
            break;
        case '-':
            subtract(firstNum, secondNum);
            break;
        case '*':
            multiply(firstNum, secondNum);
            break;
        case '/':
            divide(firstNum, secondNum);
            break;
    }
}