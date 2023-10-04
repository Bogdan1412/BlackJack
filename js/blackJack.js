let player = {
	name: 'Bogdan',
	chips: 200
}
let cards = []
let sum = 0
let messages = ''
const messageEl = document.querySelector('#message-el')
const sumEl = document.querySelector('#sum-el')
const cardsEl = document.querySelector('#cards-el')
const playerEl = document.querySelector('#player-el')
console.log('');
let isAlive = false
let hasBlackJack = false
//-----------------------------------------------------------
playerEl.textContent = `${player.name} $: ${player.chips}`
//-----------------------------------------------------------
function getRandomNumber() {
	let randomNumber = Math.floor(Math.random() * 13) + 1
	if (randomNumber > 10) {
		return 10
	} else if (randomNumber === 1) {
		return 11
	} else {
		return randomNumber
	}
}
//-----------------------------------------------------------
function startGame() {
	isAlive = true
	let firstCard = getRandomNumber()
	let secondCard = getRandomNumber()
	cards = [firstCard, secondCard]
	sum = firstCard + secondCard
	renderGame()
}
document.querySelector('#start-game').onclick = startGame
//-----------------------------------------------------------
function renderGame() {
	cardsEl.textContent = 'Cards: '
	cards.forEach((element) => {
		cardsEl.textContent += element + ' '
	})
	sumEl.textContent = 'Sum: ' + sum
	if (sum <= 20) {
		messages = 'Do you wont to a new card?'
	} else if (sum === 21) {
		messages = 'Wooow got BlackJack!!!'
		hasBlackJack = true
	} else {
		messages = 'You are out of the game!'
		isAlive = false
	}
	messageEl.textContent = messages
}
//-----------------------------------------------------------
const newCard = document.querySelector('#new-card')
newCard.addEventListener('click', function () {
	if (isAlive !== false && hasBlackJack !== true) {
		let card = getRandomNumber()
		cards.push(card)
		sum += card
		renderGame()
	}
})