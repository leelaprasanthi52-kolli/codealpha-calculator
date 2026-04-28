const display = document.getElementById('display');

let currentInput = '';
let previousInput = '';
let operator = null;

// Update display
function updateDisplay() {
  display.value = currentInput;
}

// Add number
function appendNumber(number) {
  if (number === '.' && currentInput.includes('.')) return;
  currentInput += number;
  updateDisplay();
}

// Choose operator
function chooseOperator(op) {
  if (currentInput === '') return;

  if (previousInput !== '') {
    calculate();
  }

  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

// Calculate result
function calculate() {
  let computation;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = current === 0 ? 'Error' : prev / current;
      break;
    default:
      return;
  }

  currentInput = computation.toString();
  operator = null;
  previousInput = '';
  updateDisplay();
}

// Clear
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay();
}

// Scientific functions
function applyFunction(func) {
  let value = parseFloat(currentInput);
  if (isNaN(value)) return;

  let result;

  switch (func) {
    case 'sqrt':
      result = Math.sqrt(value);
      break;
    case 'pow':
      result = Math.pow(value, 2);
      break;
    case 'sin':
      result = Math.sin(value * Math.PI / 180);
      break;
    case 'cos':
      result = Math.cos(value * Math.PI / 180);
      break;
    default:
      return;
  }

  currentInput = result.toString();
  updateDisplay();
}

// Keyboard support (fixed)
document.addEventListener('keydown', (e) => {
  if (!isNaN(e.key)) appendNumber(e.key);
  if (e.key === '.') appendNumber('.');
  if (['+', '-', '*', '/'].includes(e.key)) chooseOperator(e.key);
  if (e.key === 'Enter') calculate();
  if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  }
  if (e.key === 'Escape') clearDisplay();
});
