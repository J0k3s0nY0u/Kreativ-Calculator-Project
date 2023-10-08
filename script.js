let displayValue = '';

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function calculateResult() {
    const operators = ['+', '-', '*', '/'];
    let result;

    for (let operator of operators) {
        if (displayValue.includes(operator)) {
            const operands = displayValue.split(operator);
            const a = parseFloat(operands[0]);
            const b = parseFloat(operands[1]);

            switch (operator) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    if (b !== 0) {
                        result = a / b;
                    } else {
                        alert("Division by zero is not allowed.");
                        clearDisplay();
                        return;
                    }
                    break;
            }

            displayValue = result.toString();
            updateDisplay();
            return;
        }
    }

    alert("Invalid expression");
    clearDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}