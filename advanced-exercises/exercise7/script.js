// Exercise 7: Modal Dialog System
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    isModalOpen: false,
    modalContent: ''
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    if (state.isModalOpen) {
        modal.classList.add('visible');
        modalContent.innerHTML = `
            ${state.modalContent}
            <button id="close-modal-btn">Close</button>
        `;
    } else {
        modal.classList.remove('visible');
        modalContent.innerHTML = '';
    }
}

// TODO 4: Add your event listeners and logic
document.getElementById('open-modal-1').addEventListener('click', () => {
    updateState({
        isModalOpen: true,
        modalContent: '<h3>Modal 1</h3><p>This is the content for the first modal.</p>'
    });
});

document.getElementById('open-modal-2').addEventListener('click', () => {
    updateState({
        isModalOpen: true,
        modalContent: '<h3>Modal 2</h3><p>This is some different content for the second modal.</p>'
    });
});

document.getElementById('modal').addEventListener('click', (event) => {
    if (event.target.id === 'modal' || event.target.id === 'close-modal-btn') {
        updateState({ isModalOpen: false });
    }
});

// TODO 5: Initial render
render();
