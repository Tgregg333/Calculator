// Get the display element
const display = document.getElementById('display');

// Append value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Calculate the result
function calculate() {
    try {
        // Evaluate the expression and update the display
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
