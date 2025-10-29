// Exercise 8: Tab Navigation
// Goal: Switch between tabs using event delegation

const tabButtons = document.getElementById('tab-buttons');

// TODO: Add ONE event listener to tab-buttons container
// HINT: Check if clicked element has class 'tab-btn'
// HINT: Get the data-tab attribute from the clicked button
// HINT: Remove 'active' class from all tab buttons and tab panes
// HINT: Add 'active' class to the clicked button
// HINT: Add 'active' class to the matching tab pane with the same data-tab value

// Your code here:
tabButtons.addEventListener('click', (event) => {
    const clickedButton = event.target;

    // Check if a tab button was clicked
    if (clickedButton.classList.contains('tab-btn')) {
        const tabId = clickedButton.getAttribute('data-tab');

        // Deactivate all tabs and panes
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

        // Activate the clicked tab and corresponding pane
        clickedButton.classList.add('active');
        document.querySelector(`.tab-pane[data-tab="${tabId}"]`).classList.add('active');
    }
});
