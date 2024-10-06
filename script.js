let memoryValue = 0;

function appendCharacter(character) {
    const display = document.getElementById('display');
    if (display.value === '0') {
        display.value = character;
    } else {
        display.value += character;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function percentage() {
    const display = document.getElementById('display');
    display.value = parseFloat(display.value) / 100;
}

function squareRoot() {
    const display = document.getElementById('display');
    display.value = Math.sqrt(parseFloat(display.value));
}

function reciprocal() {
    const display = document.getElementById('display');
    display.value = 1 / parseFloat(display.value);
}

function memoryClear() {
    memoryValue = 0;
}

function memoryRecall() {
    document.getElementById('display').value = memoryValue;
}

function memoryAdd() {
    memoryValue += parseFloat(document.getElementById('display').value);
}

function memorySubtract() {
    memoryValue -= parseFloat(document.getElementById('display').value);
}

