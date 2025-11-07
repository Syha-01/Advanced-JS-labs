// Exercise 9: Accordion Menu
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    items: [
        { title: 'Section 1', content: 'This is the content for section 1.' },
        { title: 'Section 2', content: 'This is the content for section 2.' },
        { title: 'Section 3', content: 'This is the content for section 3.' }
    ],
    openIndex: null
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const accordion = document.getElementById('accordion');
    accordion.innerHTML = state.items.map((item, index) => `
        <div class="accordion-item">
            <div class="accordion-title" data-index="${index}">
                ${item.title}
                <span>${state.openIndex === index ? '−' : '+'}</span>
            </div>
            <div class="accordion-content ${state.openIndex === index ? 'open' : ''}">
                <p>${item.content}</p>
            </div>
        </div>
    `).join('');
}

// TODO 4: Add your event listeners and logic
document.getElementById('accordion').addEventListener('click', (event) => {
    if (event.target.classList.contains('accordion-title')) {
        const index = parseInt(event.target.dataset.index);
        const newOpenIndex = state.openIndex === index ? null : index;
        updateState({ openIndex: newOpenIndex });
    }
});

// TODO 5: Initial render
render();
