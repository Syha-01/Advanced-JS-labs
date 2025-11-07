// Exercise 5: User Profile Form
// Follow the TODOs below to complete this exercise

// TODO 1: Create a state object with form fields and validation state
// HINT: Include username, email, age (all empty strings), errors (empty object), isValid (false)
const state = {
    username: '',
    email: '',
    age: '',
    errors: {},
    isValid: false
};

// TODO 2: Create an updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create a validate function that returns an errors object
// HINT: Check each field and add error messages to errors object if invalid
// Return the errors object
function validate() {
    const errors = {};

    // Validate username (at least 3 characters)
    if (state.username.length < 3) {
        errors.username = 'Username must be at least 3 characters';
    }

    // Validate email (must contain @)
    if (!state.email.includes('@')) {
        errors.email = 'Please enter a valid email';
    }

    // Validate age (between 13 and 120)
    const ageNum = parseInt(state.age);
    if (isNaN(ageNum) || ageNum < 13 || ageNum > 120) {
        errors.age = 'Age must be between 13 and 120';
    }

    return errors;
}

// TODO 4: Create a render function
// HINT:
// - Update each input's value from state
// - Display errors for each field
// - Add 'invalid' or 'valid' class to inputs
// - Show success message if isValid is true
// - Show profile summary if valid
function render() {
    // Update input values
    document.getElementById('username').value = state.username;
    document.getElementById('email').value = state.email;
    document.getElementById('age').value = state.age;

    // Display errors
    document.getElementById('username-error').textContent = state.errors.username || '';
    document.getElementById('email-error').textContent = state.errors.email || '';
    document.getElementById('age-error').textContent = state.errors.age || '';

    // Update input classes (invalid/valid)
    document.getElementById('username').className = state.errors.username ? 'invalid' : 'valid';
    document.getElementById('email').className = state.errors.email ? 'invalid' : 'valid';
    document.getElementById('age').className = state.errors.age ? 'invalid' : 'valid';

    // Display validation status
    const status = document.getElementById('validation-status');
    const summary = document.getElementById('profile-summary');
    if (state.isValid) {
        status.textContent = '✅ Profile is valid!';
        status.className = 'success';
        summary.innerHTML = `
            <h3>Profile Summary</h3>
            <p><strong>Username:</strong> ${state.username}</p>
            <p><strong>Email:</strong> ${state.email}</p>
            <p><strong>Age:</strong> ${state.age}</p>
        `;
    } else {
        status.textContent = '❌ Please fix the errors above';
        status.className = 'error';
        summary.innerHTML = '';
    }
}

// TODO 5: Add event listeners to all input fields
// HINT: For each input change:
// - Get the new value
// - Run validation
// - Check if valid (no errors)
// - Update state with new value, errors, and isValid

function handleInputChange(event) {
    const { name, value } = event.target;
    state[name] = value; // Temporarily update state to validate
    const errors = validate();
    const isValid = Object.keys(errors).length === 0;
    updateState({ [name]: value, errors, isValid });
}

// Username input
document.getElementById('username').addEventListener('input', handleInputChange);

// Email input
document.getElementById('email').addEventListener('input', handleInputChange);

// Age input
document.getElementById('age').addEventListener('input', handleInputChange);

// TODO 6: Call render() initially
render();
