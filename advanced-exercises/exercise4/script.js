// Exercise 4: Shopping Cart
// Follow the TODOs below to complete this exercise

// TODO 1: Create a state object with 'items' array
// HINT: Start with an empty array
const state = {
    items: []
};

// TODO 2: Create an updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create a render function
// HINT: You need to:
// - Check if cart is empty and show a message
// - Map through items and create HTML for each
// - Calculate total using reduce()
// - Display total with 2 decimal places
function render() {
    const display = document.getElementById('display');
    const totalDisplay = document.getElementById('total');

    // Calculate total
    const total = state.items.reduce((sum, item) => sum + item.price, 0);

    // Create HTML for items
    if (state.items.length === 0) {
        display.innerHTML = '<p>Cart is empty</p>';
    } else {
        display.innerHTML = state.items.map(item => `
            <div class="cart-item">
                <span>${item.name} - $${item.price.toFixed(2)}</span>
                <button class="remove-btn" data-id="${item.id}">Remove</button>
            </div>
        `).join('');
    }

    // Update display
    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

// TODO 4: Add event listeners to product buttons
// HINT: Loop through all .product-btn elements
// For each button, get data-name and data-price attributes
// Create item object with: { id: Date.now(), name, price: parseFloat(price) }
// Add to cart: updateState({ items: [...state.items, newItem] })
document.querySelectorAll('.product-btn').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        const newItem = { id: Date.now(), name, price };
        updateState({ items: [...state.items, newItem] });
    });
});

// TODO 5: Add event listener for remove buttons (event delegation)
// HINT: Add listener to #display, check if clicked element has 'remove-btn' class
// Get the item id from data-id attribute
// Remove item: updateState({ items: state.items.filter(item => item.id !== id) })
document.getElementById('display').addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-btn')) {
        const id = parseInt(event.target.dataset.id);
        updateState({ items: state.items.filter(item => item.id !== id) });
    }
});

// TODO 6: Call render() initially
render();
