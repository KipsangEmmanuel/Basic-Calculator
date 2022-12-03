//asking for the user input
let nameOfOperator = prompt("Name of operation i.e (addition, subtraction etc)").toUpperCase();
let firstOperator = prompt("Enter first number");
let operand = prompt("Enter the operand");
let secondOperator = prompt("Enter second number");

//linking to html
let heading = document.getElementById("a").textContent = `${nameOfOperation}`
let num1 = document.getElementById("first-operand").textContent = `${firstOperator}`
let sign = document.getElementById("operator").textContent = `${operand}`
let num2 = document.getElementById("second-operand").textContent = `${secondOperator}`
let result = document.getElementById("result")
calculate(firstOperator, secondOperator);

//the function doing its magic
function calculate (firstOperator, secondOperator) {
    if(operand === '+') {
        result.textContent = parseInt(firstOperator) + parseInt(secondOperator)
    }else if (operand === '*') {
        result.textContent = parseInt(firstOperator) * parseInt(secondOperator)
    }else if (operand === '/') {
        result.textContent = parseInt(firstOperator) / parseInt(secondOperator)
    }else if (operand === '-') {
        result.textContent = parseInt(firstOperator) - parseInt(secondOperator)
    }else if(operand === '%') {
        result.textContent = parseInt(firstOperator) % parseInt(secondOperator)
    }
    else{
        alert("Check the sign you entered and try again")
    }
}