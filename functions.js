
//Simple Calculator
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


//Blackjack

function deal() {
let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let sum = firstCard + secondCard;
document.getElementById("cards-el").textContent += `${firstCard}, ${secondCard}`;
document.getElementById("cards-sum-el").textContent += sum;
}
let hasBlackJack = false;
let isAlive = true;
let message = "";


if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
    hasBlackJack = true;
    message = "Wohoo! You've got Blackjack! 🥳";
} else {
    isAlive = false;
    message = "You're out of the game! 😭";
}