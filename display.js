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
    } else return false;
  };

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
    if (checkActive() === true) {
      removeActive();
      document.getElementById("display").value = props;
    } else document.getElementById("display").value += props;
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
