// Exercise 8: Tabs Component
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    tabs: [
        { name: 'Home', content: 'Welcome to the Home tab!' },
        { name: 'About', content: 'This is the About tab.' },
        { name: 'Contact', content: 'Contact us here.' }
    ],
    activeTabIndex: 0
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const tabButtons = document.getElementById('tab-buttons');
    const tabContent = document.getElementById('tab-content');

    // Render tab buttons
    tabButtons.innerHTML = state.tabs.map((tab, index) => `
        <button class="${index === state.activeTabIndex ? 'active' : ''}" data-index="${index}">
            ${tab.name}
        </button>
    `).join('');

    // Render active tab content
    if (state.tabs[state.activeTabIndex]) {
        tabContent.innerHTML = `<p>${state.tabs[state.activeTabIndex].content}</p>`;
    }
}

// TODO 4: Add your event listeners and logic
document.getElementById('tab-buttons').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const index = parseInt(event.target.dataset.index);
        updateState({ activeTabIndex: index });
    }
});

// TODO 5: Initial render
render();
