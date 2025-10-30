// Exercise 12: Star Rating
// Goal: Create interactive star rating with hover preview

const container = document.querySelector('.container');

// TODO Part 1: Handle star hover (mouseover) using event delegation
// HINT: Listen on container for 'mouseover' events
// HINT: Check if e.target has class 'star'
// HINT: Get the star's data-value
// HINT: Find the parent .stars element
// HINT: Loop through all stars in that group and add 'hover' class to stars <= data-value

// Your code here for hover:
container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('star')) {
        const starValue = event.target.dataset.value;
        const stars = event.target.parentElement.children;
        for (let i = 0; i < stars.length; i++) {
            if (stars[i].dataset.value <= starValue) {
                stars[i].classList.add('hover');
            }
        }
    }
});

// TODO Part 2: Handle mouse leaving stars (mouseout)
// HINT: Listen for 'mouseout' on container
// HINT: Remove 'hover' class from all stars in the group

// Your code here for mouseout:
container.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('star')) {
        const stars = event.target.parentElement.children;
        for (let i = 0; i < stars.length; i++) {
            stars[i].classList.remove('hover');
        }
    }
});

// TODO Part 3: Handle star click to set rating
// HINT: Listen for 'click' on container
// HINT: Check if clicked element is a star
// HINT: Get data-value of clicked star
// HINT: Remove 'active' from all stars in that group
// HINT: Add 'active' to stars <= clicked value
// HINT: Update the rating-value display

// Your code here for click:
container.addEventListener('click', (event) => {
    if (event.target.classList.contains('star')) {
        const starValue = event.target.dataset.value;
        const starsContainer = event.target.parentElement;
        const stars = starsContainer.children;
        const ratingValueDisplay = starsContainer.nextElementSibling.querySelector('.rating-value');

        ratingValueDisplay.textContent = starValue;

        for (let i = 0; i < stars.length; i++) {
            stars[i].classList.remove('active');
            if (stars[i].dataset.value <= starValue) {
                stars[i].classList.add('active');
            }
        }
    }
});
