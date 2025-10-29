// Exercise 2: Color Selector
// Goal: Use event delegation to change the display box color when clicking color cards

const colorContainer = document.getElementById('color-container');
const displayBox = document.getElementById('display-box');

// TODO: Add ONE event listener to the color container
// HINT: When a color card is clicked, get its data-color attribute
// HINT: Use e.target.closest('.color-card') to get the card even if user clicks the preview or text
// HINT: Use getAttribute('data-color') to get the color value
// HINT: Set displayBox.style.backgroundColor to the color

// Your code here:
colorContainer.addEventListener('click', (event) => {
    // Find the closest color-card parent
    const colorCard = event.target.closest('.color-card');

    // If a color card was clicked
    if (colorCard) {
        // Get the color from the data-color attribute
        const color = colorCard.getAttribute('data-color');
        // Change the display box background color
        displayBox.style.backgroundColor = color;
    }
});
