let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = Function("return " + display.value)();
  } catch {
    display.value = "Error";
  }
}

/* Advanced functions (FIXED) */

function square() {
  let val = parseFloat(display.value);
  if (!isNaN(val)) {
    display.value = val * val;
  }
}

function sqrt() {
  let val = parseFloat(display.value);
  if (!isNaN(val)) {
    display.value = Math.sqrt(val);
  }
}

function sin() {
  let val = parseFloat(display.value);
  if (!isNaN(val)) {
    display.value = Math.sin(val * Math.PI / 180).toFixed(4);
  }
}

function cos() {
  let val = parseFloat(display.value);
  if (!isNaN(val)) {
    display.value = Math.cos(val * Math.PI / 180).toFixed(4);
  }
}

function tan() {
  let val = parseFloat(display.value);
  if (!isNaN(val)) {
    display.value = Math.tan(val * Math.PI / 180).toFixed(4);
  }
}
