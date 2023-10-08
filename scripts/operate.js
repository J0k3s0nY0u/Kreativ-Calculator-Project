function calculateResult() {
    if (!operator_check) {
        return;
    }
    else {
        if (result_check) {
            operand1 = display.value;
        }
        else {
            operand2 = display.value;
        }
        console.log(`${operand1} ,${operator}, ${operand2}`)
        switch (operator) {
            case '+':
                display.value = sum(operand1, operand2);
                break;

            case '-':
                display.value = difference(operand1, operand2);
                break;

            case '*':
                display.value = product(operand1, operand2);
                break;

            case '/':
                if(operand2 === 0){
                    clearDisplay();
                }
                display.value = division(operand1, operand2);
                break;

            default:
                return;
        }
        result_check = true;
        start_over = true;

        // operator_check = false;
        // operator = '';
    }
}
