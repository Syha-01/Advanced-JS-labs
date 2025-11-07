// Exercise 19: Data Table
// Complete the TODOs below

// Dummy Data
const users = [
    { id: 1, name: 'Alice', age: 28, city: 'New York' },
    { id: 2, name: 'Bob', age: 35, city: 'Los Angeles' },
    { id: 3, name: 'Charlie', age: 22, city: 'Chicago' },
    { id: 4, name: 'David', age: 41, city: 'Houston' }
];

// TODO 1: Define your state object
const state = {
    data: users,
    sortKey: null,
    sortDirection: 'asc' // 'asc' or 'desc'
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const tableBody = document.getElementById('data-table').querySelector('tbody');
    const headers = document.getElementById('data-table').querySelectorAll('th');

    // Sort data
    const sortedData = [...state.data].sort((a, b) => {
        if (!state.sortKey) return 0;
        const valA = a[state.sortKey];
        const valB = b[state.sortKey];

        if (valA < valB) return state.sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return state.sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    // Render rows
    tableBody.innerHTML = sortedData.map(row => `
        <tr>
            <td>${row.id}</td>
            <td>${row.name}</td>
            <td>${row.age}</td>
            <td>${row.city}</td>
        </tr>
    `).join('');

    // Update header classes
    headers.forEach(header => {
        const key = header.dataset.key;
        header.classList.remove('sort-asc', 'sort-desc');
        if (key === state.sortKey) {
            header.classList.add(state.sortDirection === 'asc' ? 'sort-asc' : 'sort-desc');
        }
    });
}

// TODO 4: Add your event listeners and logic
document.getElementById('data-table').querySelector('thead').addEventListener('click', (event) => {
    const header = event.target.closest('th');
    if (header && header.dataset.key) {
        const key = header.dataset.key;
        let direction = 'asc';
        if (state.sortKey === key && state.sortDirection === 'asc') {
            direction = 'desc';
        }
        updateState({ sortKey: key, sortDirection: direction });
    }
});

// TODO 5: Initial render
render();
