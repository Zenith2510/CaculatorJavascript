let btn = document.getElementById("btnCaculate");
let result = document.getElementById("result");
let final;

let numOneError = document.getElementById("error1");
let numTwoError = document.getElementById("error2");
let operatorError = document.getElementById("actionError");

let numOneStatus,
  numTwoStatus,
  operatorStatus = true;

numOneError.style.display = "none";
numTwoError.style.display = "none";
operatorError.style.display = "none";

btn.addEventListener("click", function () {
  let num1 = document.getElementById("firstnum");
  let num2 = document.getElementById("secnum");
  let operator = document.getElementById("operation");

  checkValidation(num1, num2, operator);

  if (numOneStatus && numTwoStatus && operatorStatus) {
    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);

    switch (operator.value) {
      case "add":
        final = num1 + num2;
        break;

      case "minus":
        final = num1 - num2;
        break;
      case "multiply":
        final = num1 * num2;
        break;

      case "division":
        final = num1 / num2;
        break;

      case "default":
        break;
    }
    result.innerHTML = final.toFixed(4);
  }
});

function checkValidation(num1, num2, operator) {
  if (num1.value == "" || num1.value == null || num1.value == undefined) {
    numOneError.style.display = "block";
    numOneStatus = false;
  } else {
    numOneError.style.display = "none";
    numOneStatus = true;
  }

  if (num2.value == "" || num2.value == null || num2.value == undefined) {
    numTwoError.style.display = "block";
    numTwoStatus = false;
  } else {
    numTwoError.style.display = "none";
    numTwoStatus = true;
  }

  if (operator.value == "empty") {
    operatorError.style.display = "block";
    operatorStatus = false;
  } else {
    operatorError.style.display = "none";
    operatorStatus = true;
  }
}
