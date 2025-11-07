// Exercise 12: Star Rating
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    rating: 0,
    hoverRating: 0,
    maxRating: 5
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const starsContainer = document.getElementById('stars-container');
    const ratingDisplay = document.getElementById('rating-display');

    starsContainer.innerHTML = ''; // Clear existing stars

    for (let i = 1; i <= state.maxRating; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        star.dataset.value = i;

        const displayRating = state.hoverRating || state.rating;
        star.innerHTML = i <= displayRating ? '★' : '☆';

        starsContainer.appendChild(star);
    }

    ratingDisplay.textContent = `Your rating: ${state.rating} out of ${state.maxRating}`;
}

// TODO 4: Add your event listeners and logic
const starsContainer = document.getElementById('stars-container');

starsContainer.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('star')) {
        const hoverValue = parseInt(event.target.dataset.value);
        updateState({ hoverRating: hoverValue });
    }
});

starsContainer.addEventListener('mouseout', () => {
    updateState({ hoverRating: 0 });
});

starsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('star')) {
        const clickedValue = parseInt(event.target.dataset.value);
        updateState({ rating: clickedValue, hoverRating: 0 });
    }
});

// TODO 5: Initial render
render();
