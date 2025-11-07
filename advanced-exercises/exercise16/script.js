// Exercise 16: Drag & Drop List
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
    draggedIndex: null
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const list = document.getElementById('drag-list');
    list.innerHTML = state.items.map((item, index) => `
        <li draggable="true" data-index="${index}">
            ${item}
        </li>
    `).join('');
}

// TODO 4: Add your event listeners and logic
const list = document.getElementById('drag-list');

list.addEventListener('dragstart', (event) => {
    if (event.target.tagName === 'LI') {
        state.draggedIndex = parseInt(event.target.dataset.index);
        event.target.classList.add('dragging');
    }
});

list.addEventListener('dragover', (event) => {
    event.preventDefault();
    const target = event.target.closest('li');
    if (target) {
        const overIndex = parseInt(target.dataset.index);
        if (overIndex !== state.draggedIndex) {
            const items = [...state.items];
            const [draggedItem] = items.splice(state.draggedIndex, 1);
            items.splice(overIndex, 0, draggedItem);
            state.draggedIndex = overIndex; // Update index as it moves
            updateState({ items });
        }
    }
});

list.addEventListener('dragend', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.remove('dragging');
        state.draggedIndex = null;
    }
});

// TODO 5: Initial render
render();
