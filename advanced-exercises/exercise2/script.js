// Exercise 2: Todo Toggle
// Follow the TODOs below to complete this exercise

// TODO 1: Create a state object with 'text' and 'completed' properties
// HINT: text should be a string, completed should be a boolean (false initially)
const state = {
    text: 'Learn Centralized Object Pattern',
    completed: false
};

// TODO 2: Create an updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create a render function
// HINT: You need to:
// - Display the todo text with a class that adds strike-through if completed
// - Show status: "✅ Complete" if completed, "⏳ Pending" if not
// - Use conditional classes: completed vs pending
function render() {
    const todoText = document.getElementById('todo-text');
    const todoStatus = document.getElementById('todo-status');

    todoText.textContent = state.text;
    todoText.className = state.completed ? 'completed' : '';

    todoStatus.textContent = state.completed ? 'Status: ✅ Complete' : 'Status: ⏳ Pending';
}

// TODO 4: Add event listener to toggle button
// HINT: When clicked, flip the completed status using !state.completed
document.getElementById('btn-toggle').addEventListener('click', () => {
    updateState({ completed: !state.completed });
});

// TODO 5: Call render() initially
render();
