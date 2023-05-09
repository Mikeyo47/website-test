function add() {
    const numA = Number(document.getElementById("num1-el").value);
    const numB = Number(document.getElementById("num2-el").value);
    document.getElementById("sum-el").textContent = `Sum: ${numA + numB}`;
}

function subtract() {
    const numA = Number(document.getElementById("num1-el").value);
    const numB = Number(document.getElementById("num2-el").value);
    document.getElementById("sum-el").textContent = `Difference: ${numA - numB}`;
}

function divide() {
    const numA = Number(document.getElementById("num1-el").value);
    const numB = Number(document.getElementById("num2-el").value);
    document.getElementById("sum-el").textContent = `Quotient: ${numA / numB}`;
}

function multiply() {
    const numA = Number(document.getElementById("num1-el").value);
    const numB = Number(document.getElementById("num2-el").value);
    document.getElementById("sum-el").textContent = `Product: ${numA * numB}`;
}


