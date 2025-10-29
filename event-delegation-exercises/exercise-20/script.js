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
