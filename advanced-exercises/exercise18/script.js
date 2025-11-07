// Exercise 18: Kanban Board
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    tasks: {
        'todo': [{ id: 1, text: 'Task 1' }, { id: 2, text: 'Task 2' }],
        'in-progress': [{ id: 3, text: 'Task 3' }],
        'done': []
    },
    draggedTaskId: null,
    sourceColumn: null
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        const columnId = column.id;
        const taskList = column.querySelector('.task-list');
        taskList.innerHTML = '';
        state.tasks[columnId].forEach(task => {
            const taskEl = document.createElement('div');
            taskEl.className = 'task';
            taskEl.textContent = task.text;
            taskEl.draggable = true;
            taskEl.dataset.id = task.id;
            taskList.appendChild(taskEl);
        });
    });
}

// TODO 4: Add your event listeners and logic
const board = document.getElementById('kanban-board');

board.addEventListener('dragstart', (event) => {
    if (event.target.classList.contains('task')) {
        state.draggedTaskId = parseInt(event.target.dataset.id);
        state.sourceColumn = event.target.closest('.column').id;
        event.target.classList.add('dragging');
    }
});

board.addEventListener('dragover', (event) => {
    event.preventDefault();
});

board.addEventListener('drop', (event) => {
    event.preventDefault();
    const column = event.target.closest('.column');
    if (column) {
        const targetColumn = column.id;
        if (state.sourceColumn !== targetColumn) {
            const taskIndex = state.tasks[state.sourceColumn].findIndex(t => t.id === state.draggedTaskId);
            const [task] = state.tasks[state.sourceColumn].splice(taskIndex, 1);
            state.tasks[targetColumn].push(task);
            updateState({ tasks: state.tasks });
        }
    }
});

board.addEventListener('dragend', (event) => {
    if (event.target.classList.contains('task')) {
        event.target.classList.remove('dragging');
        state.draggedTaskId = null;
        state.sourceColumn = null;
    }
});

// TODO 5: Initial render
render();
