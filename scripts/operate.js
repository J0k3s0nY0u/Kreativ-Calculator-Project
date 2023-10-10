function calculateResult() {
    if (!operator_check) {
        return;
    }
    else {
        if (!result_check) {
            operand2 = display.value;
        }
        console.log(`${operand1} ,${operator}, ${operand2}`)
        switch (operator) {
            case '+':
                result = sum(operand1, operand2)
                display.value = result;
                break;

            case '-':
                result = difference(operand1, operand2)
                display.value = result;
                break;

            case '*':
                result = product(operand1, operand2);
                display.value = result;
                break;

            case '/':
                result = division(operand1, operand2)
                display.value = result;
                break;

            default:
                return;
        }
        operand1 = result;
        result_check = true;
        start_over = true;
    }
}
