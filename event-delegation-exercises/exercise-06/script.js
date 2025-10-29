// Exercise 6: Multiple Button Types
// Goal: Handle different button types with ONE event listener and track counts

const cardContainer = document.getElementById('card-container');
const likeCountDisplay = document.getElementById('like-count');
const editCountDisplay = document.getElementById('edit-count');
const deleteCountDisplay = document.getElementById('delete-count');

let likeCount = 0;
let editCount = 0;
let deleteCount = 0;

// TODO: Add ONE event listener to cardContainer
// HINT: Check which button was clicked using classList.contains()
// HINT: For like: increment likeCount, update display, toggle 'liked' class on card
// HINT: For edit: increment editCount, update display, show alert with card title
// HINT: For delete: increment deleteCount, update display, remove the card
// HINT: Use e.target.closest('.card') to get the card element

// Your code here:
