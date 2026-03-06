let history = [];

document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const operation = document.getElementById('operation').value;
    const errorMessage = document.getElementById('errorMessage');
    const resultsDiv = document.getElementById('results');

    let val1 = num1.value.trim().replace(',', '.');
    let val2 = num2.value.trim().replace(',', '.');

    num1.classList.remove('error');
    num2.classList.remove('error');
    errorMessage.textContent = '';

    if (val1 === '' || isNaN(val1)) {
        num1.classList.add('error');
        errorMessage.textContent = 'Первое поле должно содержать число';
        if (val2 === '' || isNaN(val2)) {
            num2.classList.add('error');
            errorMessage.textContent = 'Оба поля должны содержать числа';
        }
        return;
    }

    if (val2 === '' || isNaN(val2)) {
        num2.classList.add('error');
        errorMessage.textContent = 'Второе поле должно содержать число';
        return;
    }

    const a = parseFloat(val1);
    const b = parseFloat(val2);

    if (operation === '/' && b === 0) {
        num2.classList.add('error');
        errorMessage.textContent = 'Деление на ноль невозможно';
        return;
    }

    let result;
    switch (operation) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = a / b; break;
    }

    history.push(`${a} ${operation} ${b} = ${result}`);
    if (history.length > 3) history.shift();

    resultsDiv.innerHTML = '';
    for (let i = 0; i < history.length; i++) {
        const div = document.createElement('div');
        div.textContent = history[i];
        if (i < history.length - 1) {
            div.className = 'old';
        }
        resultsDiv.appendChild(div);
    }
}