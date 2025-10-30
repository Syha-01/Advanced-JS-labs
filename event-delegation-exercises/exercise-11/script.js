// Exercise 11: Todo with Categories
// Goal: Add todos to categories, mark complete, delete - all with event delegation

const todoContainer = document.getElementById('todo-container');
const todoInput = document.getElementById('todo-input');
const categorySelect = document.getElementById('category-select');
const addBtn = document.getElementById('add-btn');

// TODO Part 1: Add new todos
// HINT: Get input value and selected category
// HINT: Find the category element with matching data-category attribute
// HINT: Create new todo item with complete and delete buttons
// HINT: Append to that category's .todo-list

addBtn.addEventListener('click', () => {
    const text = todoInput.value.trim();
    const category = categorySelect.value;

    if (text === '') return;

    const targetList = document.querySelector(`.category[data-category="${category}"] .todo-list`);

    if (targetList) {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <span>${text}</span>
            <div class="todo-actions">
                <button class="complete-btn">✓</button>
                <button class="delete-btn">✗</button>
            </div>
        `;
        targetList.appendChild(todoItem);
        todoInput.value = '';
    }
});

// TODO Part 2: Handle todo actions using event delegation on todoContainer
// HINT: Listen for clicks on todoContainer
// HINT: If complete-btn clicked: toggle 'completed' class on parent .todo-item
// HINT: If delete-btn clicked: remove the parent .todo-item

// Your code here:
todoContainer.addEventListener('click', (event) => {
    const target = event.target;
    const todoItem = target.closest('.todo-item');

    if (!todoItem) return;

    if (target.classList.contains('complete-btn')) {
        todoItem.classList.toggle('completed');
    } else if (target.classList.contains('delete-btn')) {
        todoItem.remove();
    }
});
