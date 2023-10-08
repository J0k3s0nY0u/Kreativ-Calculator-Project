function assignOperator(op) {
    operand1 = display.value;
    if (start_over) {
        if (operator !== op) {
            operator = op;
        }
        return;
    }
    if (operator_check) {
        display.value = calculateResult();
    }
    operator = op;
    operator_check = true;
    start_over = true;
    result_check = false;
    console.log(operand1, operator)
}