// Exercise 19: Color Matching Prototype
const gameBoard = document.getElementById('game-board');
const matchesDisplay = document.getElementById('matches');
const attemptsDisplay = document.getElementById('attempts');
const resetBtn = document.getElementById('reset-btn');

let flippedCards = [];
let matches = 0;
let attempts = 0;
let canClick = true;

// TODO: Handle card clicks using event delegation
// HINT: Listen for clicks on gameBoard
// HINT: Check if clicked element has class 'game-card'
// HINT: Check if card is already revealed or matched
// HINT: Check if canClick is true
// HINT: Add 'revealed' class to show color
// HINT: Add card to flippedCards array
// HINT: If 2 cards flipped, check if they match
// HINT: If match: add 'matched' class, increment matches
// HINT: If no match: hide cards after 1 second
// HINT: Increment attempts after each pair check

// Your code here:
function checkMatch() {
    attempts++;
    attemptsDisplay.textContent = attempts;
    canClick = false;

    const [card1, card2] = flippedCards;
    if (card1.dataset.color === card2.dataset.color) {
        matches++;
        matchesDisplay.textContent = matches;
        card1.classList.add('matched');
        card2.classList.add('matched');
        flippedCards = [];
        canClick = true;
    } else {
        setTimeout(() => {
            card1.classList.remove('revealed');
            card2.classList.remove('revealed');
            flippedCards = [];
            canClick = true;
        }, 1000);
    }
}

gameBoard.addEventListener('click', (event) => {
    const card = event.target;
    if (!canClick || !card.classList.contains('game-card') || card.classList.contains('revealed')) {
        return;
    }

    card.classList.add('revealed');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkMatch();
    }
});

resetBtn.addEventListener('click', () => {
    document.querySelectorAll('.game-card').forEach(card => {
        card.classList.remove('revealed', 'matched');
    });
    matches = 0;
    attempts = 0;
    flippedCards = [];
    matchesDisplay.textContent = matches;
    attemptsDisplay.textContent = attempts;
});
