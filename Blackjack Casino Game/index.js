let cards = [];
let player = {
  name: "amr",
  chips: 432,
};
let sum = 0;
let cardEL = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let massageEL = document.getElementById("message-el");
let playerEL = document.getElementById("player-el");
let isAlive = false;
let hasBlackJack = false;
playerEL.textContent = player.name + ": $" + player.chips;
function randomIneshils() {
  let card = Math.floor(Math.random() * 13) + 1;
  if (card > 10) {
    return 10;
  } else if (card === 1) {
    return 11;
  } else {
    return card;
  }
}
function startGame() {
  cards = [];
  let cardOne = randomIneshils();
  let cardTwo = randomIneshils();
  cards.push(cardOne);
  cards.push(cardTwo);
  sum = cards[0] + cards[1];
  isAlive = true;
  rendarGame();
}
function rendarGame() {
  let message = "";
  sumEl.textContent = "Sum: " + sum;
  cardEL.textContent = "cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEL.textContent += cards[i] + " ";
  }
  if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  massageEL.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newCard = randomIneshils();
    cards.push(newCard);
    sum += newCard;
    rendarGame();
  }
}
