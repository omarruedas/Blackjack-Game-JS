let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
function startGame() {
    renderGame()
}
function renderGame() {
    if (sum <= 20) {
        message = "Do you want a new card?"
    }
    else if (sum === 21) {
        message = "You've got a Blackjack!"
        hasBlackJack = true
    }
    else if(sum > 21) {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1]
}

function newCard() {
    let card = 5
    sum += card
    cards.push(card)
    renderGame()
}

let messages = [
    "Hey, hows it going",
    "Im good thank you, and you?",
    "All good. Been working on my portfolio lately",
    "Same here"
]

for (let i = 0; i < 5; i += 1) {
    console.log(messages[i])
}