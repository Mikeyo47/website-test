
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
let sumEl = document.getElementById("cards-sum-el");
let cardsEl = document.getElementById("cards-el");

function check () {
    if (isAlive === true && hasBlackJack === false) {
        message = "Do you want to draw a new card?";
    } else if (isAlive === true && hasBlackJack === true) {
        message = "You've got Blackjack!";
        document.getElementById("hit-btn").disabled = true;
        document.getElementById("stay-btn").disabled = true;
    } else if (isAlive === false) {
        message = "You're out of the game! Click the Deal button to start a new round.";
        document.getElementById("hit-btn").disabled = true;
        document.getElementById("stay-btn").disabled = true;
    }
    messageEl.textContent = message;
}


function deal() {
    const firstCard = generateCard();
    const secondCard = generateCard();
    sum = firstCard + secondCard;
    cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
    sumEl.textContent = `Sum: ${sum}`;
    document.getElementById("deal-btn").disabled = true;
    document.getElementById("hit-btn").disabled = false;
    document.getElementById("stay-btn").disabled = false;

    if (sum < 21) {
        check();
    } else if (sum === 21) {
        hasBlackJack = true;
        check();
    } else {
        isAlive = false;
        check();
    }
}

function hit() {
    let newCard = generateCard();
    sum += newCard;
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent += ` ${newCard} `;
    if (sum < 21) {
        check();
    } else if (sum === 21) {
        hasBlackJack = true;
        check();
    } else {
        isAlive = false;
        check();
    }
}

function stay() {
    
}

function reset() {
    hasBlackJack = false;
    isAlive = true;
    message = "";
    sum = 0;
    document.getElementById("deal-btn").disabled = false;
    document.getElementById("hit-btn").disabled = true;
    document.getElementById("stay-btn").disabled = true;
    messageEl.textContent = "Want to play a round?";
    cardsEl.textContent = "Cards:";
    sumEl.textContent = "Sum:";
}

function generateCard () {
    return Math.floor(Math.random() * 10) + 2;
}