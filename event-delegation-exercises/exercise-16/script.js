// Exercise 16: Click Tracker
const boxContainer = document.getElementById('box-container');
const totalDisplay = document.getElementById('total');
let totalClicks = 0;

// TODO: Track clicks on boxes
// HINT: Use event delegation on boxContainer
// HINT: Check if clicked element has class 'box'
// HINT: Increment totalClicks and update display
// HINT: Update the count span inside the clicked box

// Your code here:
boxContainer.addEventListener('click', (event) => {
    const box = event.target.closest('.box');
    if (box) {
        // Increment total clicks
        totalClicks++;
        totalDisplay.textContent = totalClicks;

        // Increment box-specific count
        const countSpan = box.querySelector('.count');
        let currentCount = parseInt(countSpan.textContent, 10);
        currentCount++;
        countSpan.textContent = currentCount;
    }
});
