// Exercise 9: Shopping Cart
// Goal: Add items to cart, update quantities, calculate total

const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const totalPriceDisplay = document.getElementById('total-price');

let cart = []; // Array to store cart items: {name, price, quantity}

// TODO Part 1: Handle "Add to Cart" clicks using event delegation on productList
// HINT: Get product data using data-name and data-price attributes
// HINT: Check if item already exists in cart array
// HINT: If exists, increase quantity; if not, add new item with quantity 1
// HINT: Call updateCartDisplay() after modifying cart

// Your code here for Part 1:
productList.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        const product = event.target.closest('.product');
        const name = product.dataset.name;
        const price = parseFloat(product.dataset.price);

        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCartDisplay();
    }
});

// TODO Part 2: Handle cart actions (increase, decrease, remove) using event delegation on cartItems
// HINT: Use data-name attribute to identify which item was clicked
// HINT: For increase (+): find item in cart and increment quantity
// HINT: For decrease (-): find item and decrement quantity (remove if quantity becomes 0)
// HINT: For remove: filter out the item from cart array
// HINT: Call updateCartDisplay() after each action

// Your code here for Part 2:
cartItems.addEventListener('click', (event) => {
    const target = event.target;
    const cartItem = target.closest('.cart-item');
    if (!cartItem) return;

    const name = cartItem.dataset.name;
    const itemInCart = cart.find(item => item.name === name);

    if (target.classList.contains('increase-qty')) {
        itemInCart.quantity++;
    } else if (target.classList.contains('decrease-qty')) {
        itemInCart.quantity--;
        if (itemInCart.quantity <= 0) {
            cart = cart.filter(item => item.name !== name);
        }
    } else if (target.classList.contains('remove-item')) {
        cart = cart.filter(item => item.name !== name);
    }
    updateCartDisplay();
});

// TODO Part 3: Create updateCartDisplay() function
// HINT: Clear cartItems innerHTML
// HINT: Loop through cart array and create HTML for each item
// HINT: Each cart item should have: name, quantity controls (+/-), remove button
// HINT: Calculate total by summing (price * quantity) for all items
// HINT: Update totalPriceDisplay

function updateCartDisplay() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.dataset.name = item.name;
        itemEl.innerHTML = `
            <span>${item.name} ($${item.price})</span>
            <div class="quantity-controls">
                <button class="decrease-qty">-</button>
                <span>${item.quantity}</span>
                <button class="increase-qty">+</button>
            </div>
            <button class="remove-item">Remove</button>
        `;
        cartItems.appendChild(itemEl);
    });
    totalPriceDisplay.textContent = total.toFixed(2);
}
