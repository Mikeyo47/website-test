
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

let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sum = 0;

function check () {
    if (isAlive === true && hasBlackJack === false) {
        messageEl.textContent = "Do you want to draw a new card?";
    } else if (isAlive === true && hasBlackJack === true) {
        messageEl.textContent = "You've got Blackjack!";
    } else if (isAlive === false) {
        messageEl.textContent = "You're out of the game!";
    }
}


function deal() {
    let firstCard = generateCard();
    let secondCard = generateCard();
    sum = firstCard + secondCard;
    document.getElementById("cards-el").textContent = `Cards: ${firstCard} ${secondCard}`;
    document.getElementById("cards-sum-el").textContent = `Sum: ${sum}`;
    document.getElementById("deal-btn").disabled = true;
    document.getElementById("hit-btn").disabled = false;
    document.getElementById("stand-btn").disabled = false;

    if (sum < 21) {
        document.getElementById("message-el").textContent = "Do you want to draw a new card?";
    } else if (sum === 21) {
        hasBlackJack = true;
        document.getElementById("message-el").textContent = "You've got Blackjack!";
    } else {
        isAlive = false;
        document.getElementById("message-el").textContent = "You're out of the game!";
    }
}

function hit() {
    let newCard = Math.floor(Math.random() * 10) + 2;
    sum += newCard;
    document.getElementById("cards-sum-el").textContent = `Sum: ${sum}`;
    if (sum < 21) {
        document.getElementById("message-el").textContent = "Do you want to draw a new card?";
    } else if (sum === 21) {
        hasBlackJack = true;
        document.getElementById("message-el").textContent = "You've got Blackjack!";
    } else {
        isAlive = false;
        document.getElementById("message-el").textContent = "You're out of the game!";
    }
}

function stand() {
    
}

function reset() {
    let hasBlackJack = false;
    let isAlive = true;
    let message = "";
    let sum = 0;
    document.getElementById("deal-btn").disabled = false;
    document.getElementById("hit-btn").disabled = true;
    document.getElementById("stand-btn").disabled = true;
    document.getElementById("message-el").textContent = "Want to play a round?";
}

function generateCard () {
    return Math.floor(Math.random() * 10) + 2;
}