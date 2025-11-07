// Exercise 1: Color Picker
// Follow the TODOs below to complete this exercise

// TODO 1: Create a state object with a 'color' property
// HINT: Start with a default color like 'lightblue'
const state = {
    color: 'lightblue'
};

// TODO 2: Create an updateState function
// HINT: It should take an object with changes, merge them into state, and call render()
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create a render function
// HINT:
// - Update the #display element to show the current color name
// - Change the body background color to match state.color
function render() {
    const display = document.getElementById('display');
    display.textContent = `Current Color: ${state.color}`;
    document.body.style.backgroundColor = state.color;
}

// TODO 4: Add event listeners for all color buttons
// HINT: Get each button by ID and add a click listener that calls updateState()

// Red button
document.getElementById('btn-red').addEventListener('click', () => updateState({ color: 'red' }));

// Green button
document.getElementById('btn-green').addEventListener('click', () => updateState({ color: 'green' }));

// Blue button
document.getElementById('btn-blue').addEventListener('click', () => updateState({ color: 'blue' }));

// Yellow button
document.getElementById('btn-yellow').addEventListener('click', () => updateState({ color: 'yellow' }));

// TODO 5: Call render() once to display the initial state
render();
