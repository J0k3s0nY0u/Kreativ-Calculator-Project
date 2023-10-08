

const appendToDisplay = (props) => {
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
    } else {
      return false;
    }
  }

  const removeActive = () => {
    document.getElementById("/").classList.remove("active");
    document.getElementById("*").classList.remove("active");
    document.getElementById("-").classList.remove("active");
    document.getElementById("+").classList.remove("active");
  };

  if (
    props === "1" ||
    props === "2" ||
    props === "3" ||
    props === "4" ||
    props === "5" ||
    props === "6" ||
    props === "7" ||
    props === "8" ||
    props === "9" ||
    props === "0"
  ) {
    if (checkActive() === true || display.value === "0" || start_over || result_check) {
      removeActive();
      display.value = props;
      start_over = false;
      result_check = false;
    } else {
      display.value += props;
    }
  }

  if (props === "."){
    if(display.value.match(/[.]/)){
      return;
    }
    else{
      if(display.value === ""){
        display.value = "0."
      }
      else{
        display.value += "."
      }
    }
  } 
  

  switch (props) {
    case "/":
      removeActive();
      document.getElementById(props).classList.add("active");
      break;
    case "*":
      removeActive();
      document.getElementById(props).classList.add("active");
      break;
    case "-":
      removeActive();
      document.getElementById(props).classList.add("active");
      break;
    case "+":
      removeActive();
      document.getElementById(props).classList.add("active");
      break;
    default:
      break;
  }
};

