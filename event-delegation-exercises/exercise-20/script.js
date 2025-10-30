// Exercise 20: Memory Card Game - FINAL CHALLENGE!
const gameBoard = document.getElementById('game-board');
const timerDisplay = document.getElementById('timer');
const movesDisplay = document.getElementById('moves');
const pairsDisplay = document.getElementById('pairs');
const newGameBtn = document.getElementById('new-game-btn');
const winMessage = document.getElementById('win-message');

let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let timer = 0;
let timerInterval = null;
let canClick = true;
let gameStarted = false;

// TODO Part 1: Handle card clicks using event delegation
// HINT: Listen for clicks on gameBoard
// HINT: Check if clicked element is a memory-card
// HINT: Start timer on first click if not already started
// HINT: Don't allow clicking if canClick is false
// HINT: Don't allow clicking already flipped or matched cards
// HINT: Add 'flipped' class to card
// HINT: Add card to flippedCards array
// HINT: If 2 cards flipped, check for match

// TODO Part 2: Check for match
// HINT: Compare data-symbol attributes of both cards
// HINT: If match: add 'matched' class, increment matchedPairs, update display
// HINT: If no match: remove 'flipped' after 1 second
// HINT: Increment moves counter
// HINT: Check if game is won (all pairs matched)

// TODO Part 3: Start/stop timer
// HINT: Use setInterval to increment timer every second
// HINT: Update timerDisplay
// HINT: Clear interval when game ends

// TODO Part 4: Handle new game
// HINT: Reset all variables
// HINT: Clear timer interval
// HINT: Shuffle cards
// HINT: Remove flipped and matched classes

// Your code here:
function startGame() {
    // Reset state
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    timer = 0;
    canClick = true;
    gameStarted = false;

    // Reset displays
    movesDisplay.textContent = moves;
    pairsDisplay.textContent = `${matchedPairs}/6`;
    timerDisplay.textContent = timer;
    winMessage.textContent = '';
    winMessage.style.display = 'none';

    // Stop timer if running
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    // Shuffle cards
    const cards = Array.from(gameBoard.children);
    cards.forEach(card => {
        card.classList.remove('flipped', 'matched');
        const randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}

function startTimer() {
    gameStarted = true;
    timerInterval = setInterval(() => {
        timer++;
        timerDisplay.textContent = timer;
    }, 1000);
}

function checkForMatch() {
    canClick = false;
    const [card1, card2] = flippedCards;

    if (card1.dataset.symbol === card2.dataset.symbol) {
        // It's a match
        matchedPairs++;
        pairsDisplay.textContent = `${matchedPairs}/6`;
        card1.classList.add('matched');
        card2.classList.add('matched');
        flippedCards = [];
        canClick = true;
        if (matchedPairs === 6) {
            clearInterval(timerInterval);
            winMessage.textContent = `You won in ${timer} seconds with ${moves} moves!`;
            winMessage.style.display = 'block';
        }
    } else {
        // Not a match
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
            canClick = true;
        }, 1000);
    }
}

gameBoard.addEventListener('click', (event) => {
    const card = event.target.closest('.memory-card');

    if (!card || !canClick || card.classList.contains('flipped')) {
        return;
    }

    if (!gameStarted) {
        startTimer();
    }

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        moves++;
        movesDisplay.textContent = moves;
        checkForMatch();
    }
});

newGameBtn.addEventListener('click', startGame);

// Initial game setup
startGame();
