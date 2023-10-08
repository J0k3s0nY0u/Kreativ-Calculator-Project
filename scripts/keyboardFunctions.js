const keyboardFunctions = () => {
  window.addEventListener(
    "keyup",
    function (e) {
      const checkActive = () => {
        let divide = document.getElementById("/").classList.value;
        let multiply = document.getElementById("*").classList.value;
        let deduction = document.getElementById("-").classList.value;
        let plus = document.getElementById("+").classList.value;
        if (
          divide === "operator active" ||
          multiply === "operator active" ||
          deduction === "operator active" ||
          plus === "operator active"
        ) {
          return true;
        } else return false;
      };
      const removeActive = () => {
        document.getElementById("/").classList.remove("active");
        document.getElementById("*").classList.remove("active");
        document.getElementById("-").classList.remove("active");
        document.getElementById("+").classList.remove("active");
      };
      const keyboardStroke = () => {
        if (checkActive() === true) {
          removeActive();
          display.value = "";
          appendToDisplay(e.key);
        } else {
          appendToDisplay(e.key);
        }
      };
      switch (e.key) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case ".":
          keyboardStroke();
          break;

        case "/":
        case "*":
        case "-":
        case "+":
          assignOperator(e.key);
          removeActive();
          document.getElementById(e.key).classList.add("active");
          break;

        case "Backspace":
          backspace();
          break;

        case "Delete":
          clearDisplay();
          break;

        case "Enter":
          calculateResult();
          break;

        default:
          break;
      }
    },
    { once: true }
  );
};