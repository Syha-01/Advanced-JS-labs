// Exercise 5: Add Items Dynamically
// Goal: Add new items AND delete them using event delegation

const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');
const addBtn = document.getElementById('add-btn');

// TODO Part 1: Add event listener to the "Add Item" button
// HINT: Get the input value, create a new <li> element with class "item"
// HINT: The new item should have the same structure as existing items:
//       <li class="item">
//         <span>Item Name</span>
//         <button class="delete-btn">×</button>
//       </li>
// HINT: Append the new item to itemList
// HINT: Clear the input after adding

// Your code here for Part 1:
addBtn.addEventListener('click', () => {
    const text = itemInput.value.trim();
    if (text !== '') {
        const newItem = document.createElement('li');
        newItem.className = 'item';
        newItem.innerHTML = `
            <span>${text}</span>
            <button class="delete-btn">×</button>
        `;
        itemList.appendChild(newItem);
        itemInput.value = '';
    }
});

// TODO Part 2: Add ONE event listener to itemList for deleting items
// HINT: This should work for both existing items AND newly added items
// HINT: Check if clicked element has class 'delete-btn'
// HINT: Remove the parent item element

// Your code here for Part 2:
itemList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const item = event.target.closest('.item');
        if (item) {
            item.remove();
        }
    }
});
