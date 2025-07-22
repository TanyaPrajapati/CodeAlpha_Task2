const display = document.getElementById('display');


function appendValue(value) {
  display.value += value;
}


function clearDisplay() {
  display.value = '';
}

// for result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}


document.addEventListener('keydown', (e) => {
  const key = e.key;

  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '(', ')'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    e.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
