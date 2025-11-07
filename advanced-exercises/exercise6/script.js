// Exercise 6: Todo List Manager
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    todos: [],
    newTodoText: ''
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const todoList = document.getElementById('todo-list');
    const newTodoInput = document.getElementById('new-todo');

    newTodoInput.value = state.newTodoText;

    if (state.todos.length === 0) {
        todoList.innerHTML = '<p>No todos yet. Add one!</p>';
    } else {
        todoList.innerHTML = state.todos.map((todo, index) => `
            <li class="${todo.completed ? 'completed' : ''}">
                <span data-index="${index}">${todo.text}</span>
                <button class="remove-btn" data-index="${index}">Remove</button>
            </li>
        `).join('');
    }
}

// TODO 4: Add your event listeners and logic
document.getElementById('add-todo-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (state.newTodoText.trim()) {
        const newTodo = { text: state.newTodoText, completed: false };
        updateState({
            todos: [...state.todos, newTodo],
            newTodoText: ''
        });
    }
});

document.getElementById('new-todo').addEventListener('input', (event) => {
    updateState({ newTodoText: event.target.value });
});

document.getElementById('todo-list').addEventListener('click', (event) => {
    if (event.target.tagName === 'SPAN') {
        const index = parseInt(event.target.dataset.index);
        const updatedTodos = [...state.todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        updateState({ todos: updatedTodos });
    }

    if (event.target.classList.contains('remove-btn')) {
        const index = parseInt(event.target.dataset.index);
        const updatedTodos = state.todos.filter((_, i) => i !== index);
        updateState({ todos: updatedTodos });
    }
});

// TODO 5: Initial render
render();
