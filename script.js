const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

document.querySelector('.buttons').innerHTML = `
  <button onclick="appendNumber('7')">7</button>
  <button onclick="appendNumber('8')">8</button>
  <button onclick="appendNumber('9')">9</button>
  <button class="operator" onclick="chooseOperator('/')">÷</button>
  
  <button onclick="appendNumber('4')">4</button>
  <button onclick="appendNumber('5')">5</button>
  <button onclick="appendNumber('6')">6</button>
  <button class="operator" onclick="chooseOperator('*')">×</button>
  
  <button onclick="appendNumber('1')">1</button>
  <button onclick="appendNumber('2')">2</button>
  <button onclick="appendNumber('3')">3</button>
  <button class="operator" onclick="chooseOperator('-')">−</button>
  
  <button onclick="appendNumber('0')">0</button>
  <button onclick="appendNumber('.')">.</button>
  <button onclick="calculate()">=</button>
  <button class="operator" onclick="chooseOperator('+')">+</button>
  
  <button onclick="clearDisplay()" style="grid-column: span 2;">C</button>
`;

function appendNumber(num) {
  currentInput += num;
  display.value = currentInput;
}

function chooseOperator(op) {
  previousInput = currentInput;
  operator = op;
  currentInput = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  
  switch(operator) {
    case '+': result = prev + current; break;
    case '-': result = prev - current; break;
    case '*': result = prev * current; break;
    case '/': result = prev / current; break;
  }
  display.value = result;
  currentInput = result.toString();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  display.value = '';
}
