const display = document.getElementById('display');

let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(num) {
  currentInput += num;
  display.value = currentInput;
}

function chooseOperator(op) {
  if (currentInput === '') return;
  previousInput = currentInput;
  operator = op;
  currentInput = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch(operator) {
    case '+': result = prev + current; break;
    case '-': result = prev - current; break;
    case '*': result = prev * current; break;
    case '/': result = prev / current; break;
  }

  display.value = result;
  currentInput = result.toString();
  operator = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  display.value = '';
}

// Scientific Functions
function applyFunction(func) {
  let value = parseFloat(currentInput);

  if (isNaN(value)) return;

  let result;

  switch(func) {
    case 'sqrt':
      result = Math.sqrt(value);
      break;
    case 'pow':
      result = Math.pow(value, 2);
      break;
    case 'sin':
      result = Math.sin(value * Math.PI / 180); // degrees
      break;
    case 'cos':
      result = Math.cos(value * Math.PI / 180); // degrees
      break;
  }

  display.value = result;
  currentInput = result.toString();
}
