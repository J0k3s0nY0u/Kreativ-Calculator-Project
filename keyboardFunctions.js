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
          document.getElementById("display").value = "";
          document.getElementById("display").value += e.key;
        } else {
          document.getElementById("display").value += e.key;
        }
      };
      switch (e.key) {
        case "1":
          keyboardStroke();
          break;
        case "2":
          keyboardStroke();
          break;
        case "3":
          keyboardStroke();
          break;
        case "4":
          keyboardStroke();
          break;
        case "5":
          keyboardStroke();
          break;
        case "6":
          keyboardStroke();
          break;
        case "7":
          keyboardStroke();
          break;
        case "8":
          keyboardStroke();
          break;
        case "9":
          keyboardStroke();
          break;
        case "0":
          keyboardStroke();
          break;
        case "/":
          removeActive();
          document.getElementById("/").classList.add("active");
          break;
        case "*":
          removeActive();
          document.getElementById("*").classList.add("active");
          break;
        case "-":
          removeActive();
          document.getElementById("-").classList.add("active");
          break;
        case "+":
          removeActive();
          document.getElementById("+").classList.add("active");
          break;
        case "Backspace":
          backspace();
          break;
        default:
          break;
      }
    },
    { once: true }
  );
};
