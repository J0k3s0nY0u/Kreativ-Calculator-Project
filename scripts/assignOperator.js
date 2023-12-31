function assignOperator(op) {
    if (start_over) {
        if (operator !== op) {
            operator = op;
        }
        return;
    }
    
    if(operator_check && !result_check){
        calculateResult();
    }
    operand1 = display.value;
    
    
    operator = op;
    operator_check = true;
    start_over = true;
    result_check = false;

    const removeActive = () => {
        document.getElementById("/").classList.remove("active");
        document.getElementById("*").classList.remove("active");
        document.getElementById("-").classList.remove("active");
        document.getElementById("+").classList.remove("active");
    };
    switch (op) {
        case "/":
            removeActive();
            document.getElementById(op).classList.add("active");
            break;
        case "*":
            removeActive();
            document.getElementById(op).classList.add("active");
            break;
        case "-":
            removeActive();
            document.getElementById(op).classList.add("active");
            break;
        case "+":
            removeActive();
            document.getElementById(op).classList.add("active");
            break;
        default:
            break;
    }
}