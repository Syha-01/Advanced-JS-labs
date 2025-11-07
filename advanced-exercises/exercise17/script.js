// Exercise 17: Undo/Redo System
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    history: [{ count: 0 }],
    currentIndex: 0
};

// TODO 2: Create updateState function
function updateState(changes, recordHistory = true) {
    if (recordHistory) {
        const newHistory = state.history.slice(0, state.currentIndex + 1);
        newHistory.push(changes);
        state.history = newHistory;
        state.currentIndex = newHistory.length - 1;
    }
    Object.assign(state.history[state.currentIndex], changes);
    render();
}

// TODO 3: Create render function
function render() {
    const countDisplay = document.getElementById('count-display');
    const undoBtn = document.getElementById('undo-btn');
    const redoBtn = document.getElementById('redo-btn');

    countDisplay.textContent = `Count: ${state.history[state.currentIndex].count}`;
    undoBtn.disabled = state.currentIndex === 0;
    redoBtn.disabled = state.currentIndex === state.history.length - 1;
}

// TODO 4: Add your event listeners and logic
document.getElementById('increment-btn').addEventListener('click', () => {
    const newCount = state.history[state.currentIndex].count + 1;
    updateState({ count: newCount });
});

document.getElementById('decrement-btn').addEventListener('click', () => {
    const newCount = state.history[state.currentIndex].count - 1;
    updateState({ count: newCount });
});

document.getElementById('undo-btn').addEventListener('click', () => {
    if (state.currentIndex > 0) {
        state.currentIndex--;
        render();
    }
});

document.getElementById('redo-btn').addEventListener('click', () => {
    if (state.currentIndex < state.history.length - 1) {
        state.currentIndex++;
        render();
    }
});

// TODO 5: Initial render
render();
