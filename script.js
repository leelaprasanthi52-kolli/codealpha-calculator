const display = document.getElementById('display');

let currentInput = '';
let previousInput = '';
let operator = null;

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
    case '/': result = current === 0 ? 'Error' : prev / current; break;
    default: return;
  }

  display.value = result;
  currentInput = result.toString();
  previousInput = '';
  operator = null;
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  display.value = '';
}

function applyFunction(func) {
  let value = parseFloat(currentInput);
  if (isNaN(value)) return;

  let result;

  switch(func) {
    case 'sqrt': result = Math.sqrt(value); break;
    case 'pow': result = value * value; break;
    case 'sin': result = Math.sin(value * Math.PI / 180); break;
    case 'cos': result = Math.cos(value * Math.PI / 180); break;
  }

  display.value = result;
  currentInput = result.toString();
}
