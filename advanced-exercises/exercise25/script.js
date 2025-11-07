// Exercise 25: Dashboard
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    user: {
        name: 'John Doe',
        lastLogin: new Date()
    },
    stats: {
        clicks: 0,
        pageViews: 0
    },
    todos: [
        { text: 'Finish dashboard exercise', completed: true },
        { text: 'Learn centralized state', completed: false }
    ]
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    // Render Welcome Message
    document.getElementById('welcome-message').textContent = `Welcome back, ${state.user.name}!`;
    document.getElementById('last-login').textContent = `Last login: ${state.user.lastLogin.toLocaleString()}`;

    // Render Stats
    document.getElementById('clicks-stat').textContent = state.stats.clicks;
    document.getElementById('views-stat').textContent = state.stats.pageViews;

    // Render Todos
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = state.todos.map((todo, index) => `
        <li class="${todo.completed ? 'completed' : ''}" data-index="${index}">
            ${todo.text}
        </li>
    `).join('');
}

// TODO 4: Add your event listeners and logic
// Simulate stat updates
setInterval(() => {
    const newStats = {
        clicks: state.stats.clicks + Math.floor(Math.random() * 5),
        pageViews: state.stats.pageViews + Math.floor(Math.random() * 10)
    };
    updateState({ stats: newStats });
}, 2000);

// Todo list interaction
document.getElementById('todo-list').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        const index = parseInt(event.target.dataset.index);
        const newTodos = [...state.todos];
        newTodos[index].completed = !newTodos[index].completed;
        updateState({ todos: newTodos });
    }
});

// TODO 5: Initial render
render();
