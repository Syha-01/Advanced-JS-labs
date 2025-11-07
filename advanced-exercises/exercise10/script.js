// Exercise 10: Pagination System
// Complete the TODOs below

// Dummy data
const allItems = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

// TODO 1: Define your state object
const state = {
    items: allItems,
    currentPage: 1,
    itemsPerPage: 10
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const dataContainer = document.getElementById('data-container');
    const pageInfo = document.getElementById('page-info');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const { items, currentPage, itemsPerPage } = state;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Calculate items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = items.slice(startIndex, endIndex);

    // Render items
    dataContainer.innerHTML = paginatedItems.map(item => `<div class="item">${item}</div>`).join('');

    // Update page info
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

    // Update button states
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

// TODO 4: Add your event listeners and logic
document.getElementById('prev-btn').addEventListener('click', () => {
    if (state.currentPage > 1) {
        updateState({ currentPage: state.currentPage - 1 });
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    const totalPages = Math.ceil(state.items.length / state.itemsPerPage);
    if (state.currentPage < totalPages) {
        updateState({ currentPage: state.currentPage + 1 });
    }
});

// TODO 5: Initial render
render();
