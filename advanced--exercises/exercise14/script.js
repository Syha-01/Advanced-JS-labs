// Exercise 14: Multi-Step Form
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    currentStep: 1,
    formData: {
        name: '',
        email: '',
        password: ''
    }
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const steps = document.querySelectorAll('.form-step');
    steps.forEach(step => step.classList.remove('active'));
    document.getElementById(`step-${state.currentStep}`).classList.add('active');

    document.getElementById('prev-btn').style.display = state.currentStep === 1 ? 'none' : 'inline-block';
    document.getElementById('next-btn').style.display = state.currentStep === 3 ? 'none' : 'inline-block';
    document.getElementById('submit-btn').style.display = state.currentStep === 3 ? 'inline-block' : 'none';

    if (state.currentStep === 3) {
        document.getElementById('summary-name').textContent = state.formData.name;
        document.getElementById('summary-email').textContent = state.formData.email;
    }
}

// TODO 4: Add your event listeners and logic
document.getElementById('next-btn').addEventListener('click', () => {
    if (state.currentStep < 3) {
        updateState({ currentStep: state.currentStep + 1 });
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (state.currentStep > 1) {
        updateState({ currentStep: state.currentStep - 1 });
    }
});

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', (event) => {
        const { name, value } = event.target;
        updateState({
            formData: {
                ...state.formData,
                [name]: value
            }
        });
    });
});

document.getElementById('multi-step-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form submitted successfully!');
    console.log('Form data:', state.formData);
});

// TODO 5: Initial render
render();
