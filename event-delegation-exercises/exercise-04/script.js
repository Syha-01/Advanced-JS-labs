// Exercise 4: Toggle Active State
// Goal: Toggle the 'active' class on cards when clicked

const cardContainer = document.getElementById('card-container');

// TODO: Add ONE event listener to the card container
// HINT: Use e.target.closest('.card') to get the clicked card
// HINT: Use classList.toggle('active') to add/remove the active class
// HINT: Toggle means: if class exists, remove it; if it doesn't exist, add it

// Your code here:
cardContainer.addEventListener('click', (event) => {
    // Find the closest card element
    const card = event.target.closest('.card');

    // If a card was clicked, toggle its active state
    if (card) {
        card.classList.toggle('active');
    }
});
