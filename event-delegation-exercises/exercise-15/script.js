// Exercise 15: Modal System
const body = document.body;

// TODO Part 1: Open modals using event delegation
// HINT: Listen on body for clicks
// HINT: Check if clicked has class 'open-modal-btn'
// HINT: Get data-modal attribute and find that modal by ID
// HINT: Add 'active' class to modal

// TODO Part 2: Close modals
// HINT: Check if clicked has class 'close-modal-btn'
// HINT: Find closest .modal and remove 'active' class

// TODO Part 3: Close on backdrop
// HINT: Check if e.target has class 'modal' (clicked backdrop, not content)
// HINT: Remove 'active' class

// Your code here:
body.addEventListener('click', (event) => {
    const target = event.target;

    // Part 1: Open modals
    if (target.classList.contains('open-modal-btn')) {
        const modalId = target.dataset.modal;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
        }
    }

    // Part 2: Close modals with close button
    if (target.classList.contains('close-modal-btn')) {
        const modal = target.closest('.modal');
        if (modal) {
            modal.classList.remove('active');
        }
    }

    // Part 3: Close on backdrop click
    if (target.classList.contains('modal')) {
        target.classList.remove('active');
    }
});
