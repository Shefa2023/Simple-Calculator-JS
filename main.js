function btnClick(event) {
  console.log(event.target);
}

let inputField = document.getElementById ("inputField");

function numberInput(event) {
  const inputNumber = event.target.innerText;
  if(inputField.value === '0') {
    inputField.value = inputNumber;
  } else { 
     inputField.value += inputNumber;
    }
}

function allclear() {
  inputField.value = "0";
}

function deleteNumber() {
    let previousValue = inputField.value;
    length = previousValue.length;
    if (previousValue !== "0") {
      inputField.value = previousValue.slice(0, -1);
    }
}

function calculate() {
  let result = eval(inputField.value);
  inputField.value = result;
}