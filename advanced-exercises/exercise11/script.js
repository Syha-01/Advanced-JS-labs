// Exercise 11: Search & Filter
// Complete the TODOs below

// Dummy data
const allItems = [
    'Apple', 'Banana', 'Orange', 'Grape', 'Strawberry', 'Blueberry', 'Raspberry',
    'Pineapple', 'Mango', 'Peach', 'Plum', 'Cherry', 'Watermelon'
];

// TODO 1: Define your state object
const state = {
    items: allItems,
    searchTerm: ''
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const list = document.getElementById('list');
    const searchInput = document.getElementById('search-input');

    searchInput.value = state.searchTerm;

    const filteredItems = state.items.filter(item =>
        item.toLowerCase().includes(state.searchTerm.toLowerCase())
    );

    if (filteredItems.length === 0) {
        list.innerHTML = '<p>No items match your search.</p>';
    } else {
        list.innerHTML = filteredItems.map(item => `<li>${item}</li>`).join('');
    }
}

// TODO 4: Add your event listeners and logic
document.getElementById('search-input').addEventListener('input', (event) => {
    updateState({ searchTerm: event.target.value });
});

// TODO 5: Initial render
render();
