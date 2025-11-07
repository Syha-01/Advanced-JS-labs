// Exercise 13: Timer/Stopwatch
// Complete the TODOs below

let timerInterval = null;

// TODO 1: Define your state object
const state = {
    time: 0,
    isRunning: false
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const timeDisplay = document.getElementById('time-display');
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const resetBtn = document.getElementById('reset-btn');

    const minutes = Math.floor(state.time / 60);
    const seconds = state.time % 60;
    timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    startBtn.disabled = state.isRunning;
    stopBtn.disabled = !state.isRunning;
    resetBtn.disabled = state.isRunning && state.time > 0;
}

// TODO 4: Add your event listeners and logic
document.getElementById('start-btn').addEventListener('click', () => {
    if (!state.isRunning) {
        updateState({ isRunning: true });
        timerInterval = setInterval(() => {
            updateState({ time: state.time + 1 });
        }, 1000);
    }
});

document.getElementById('stop-btn').addEventListener('click', () => {
    if (state.isRunning) {
        updateState({ isRunning: false });
        clearInterval(timerInterval);
    }
});

document.getElementById('reset-btn').addEventListener('click', () => {
    updateState({ time: 0, isRunning: false });
    clearInterval(timerInterval);
});

// TODO 5: Initial render
render();
