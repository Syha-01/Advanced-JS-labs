// Exercise 7: Form Validation
// Goal: Validate form inputs using event delegation on the form

const form = document.getElementById('user-form');
const submitBtn = document.getElementById('submit-btn');

// TODO: Add ONE 'input' event listener to the form
// HINT: Check if e.target has class 'form-input'
// HINT: Get the input's value and name
// HINT: Validate based on the input name:
//       - username: must be at least 5 characters
//       - email: must contain '@'
//       - password: must be at least 8 characters
// HINT: If valid: add 'valid' class, remove 'invalid', clear error message
// HINT: If invalid: add 'invalid' class, remove 'valid', show error in error-message span
// HINT: Enable submit button only when all inputs are valid

// Your code here:


// TODO: Add submit event listener to prevent default form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
});
