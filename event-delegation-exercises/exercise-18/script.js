// Exercise 18: Kanban Board
const board = document.querySelector('.board');

// TODO: Handle moving cards using event delegation
// HINT: Listen for clicks on board
// HINT: Check if clicked element has class 'move-btn'
// HINT: Get direction from data-direction
// HINT: Get the card element
// HINT: Get current column and its data-status
// HINT: Determine target column based on direction
// HINT: Find target column element and append card to its .cards div
// HINT: Update buttons on card based on new position

// Your code here:
function updateCardButtons(card, columnStatus) {
    // Clear existing buttons
    card.querySelectorAll('.move-btn').forEach(btn => btn.remove());

    if (columnStatus === 'todo') {
        card.innerHTML += '<button class="move-btn" data-direction="right">→</button>';
    } else if (columnStatus === 'in-progress') {
        card.innerHTML += '<button class="move-btn" data-direction="left">←</button><button class="move-btn" data-direction="right">→</button>';
    } else if (columnStatus === 'done') {
        card.innerHTML += '<button class="move-btn" data-direction="left">←</button>';
    }
}

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('move-btn')) {
        const button = event.target;
        const card = button.closest('.card');
        const direction = button.dataset.direction;
        const currentColumn = card.closest('.column');

        let targetColumn;
        if (direction === 'right') {
            targetColumn = currentColumn.nextElementSibling;
        } else {
            targetColumn = currentColumn.previousElementSibling;
        }

        if (targetColumn) {
            targetColumn.querySelector('.cards').appendChild(card);
            updateCardButtons(card, targetColumn.dataset.status);
        }
    }
});
