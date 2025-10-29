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
function checkFormValidity() {
    const inputs = form.querySelectorAll('.form-input');
    let allValid = true;
    inputs.forEach(input => {
        if (!input.classList.contains('valid')) {
            allValid = false;
        }
    });
    submitBtn.disabled = !allValid;
}

form.addEventListener('input', (event) => {
    const input = event.target;
    if (input.classList.contains('form-input')) {
        const errorMessage = input.nextElementSibling;
        let isValid = false;

        switch (input.name) {
            case 'username':
                isValid = input.value.length >= 5;
                errorMessage.textContent = isValid ? '' : 'Username must be at least 5 characters.';
                break;
            case 'email':
                isValid = input.value.includes('@');
                errorMessage.textContent = isValid ? '' : 'Please enter a valid email.';
                break;
            case 'password':
                isValid = input.value.length >= 8;
                errorMessage.textContent = isValid ? '' : 'Password must be at least 8 characters.';
                break;
        }

        if (isValid) {
            input.classList.add('valid');
            input.classList.remove('invalid');
        } else {
            input.classList.add('invalid');
            input.classList.remove('valid');
        }

        checkFormValidity();
    }
});

// TODO: Add submit event listener to prevent default form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
});
