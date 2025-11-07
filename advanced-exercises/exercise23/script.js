// Exercise 23: Form Builder
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    formFields: [],
    fieldData: {}
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = '';
    state.formFields.forEach(field => {
        const fieldWrapper = document.createElement('div');
        fieldWrapper.className = 'form-field';

        const label = document.createElement('label');
        label.textContent = field.label;
        fieldWrapper.appendChild(label);

        let input;
        if (field.type === 'textarea') {
            input = document.createElement('textarea');
        } else {
            input = document.createElement('input');
            input.type = field.type;
        }
        input.name = field.name;
        input.value = state.fieldData[field.name] || '';
        fieldWrapper.appendChild(input);

        formContainer.appendChild(fieldWrapper);
    });
}

// TODO 4: Add your event listeners and logic
document.getElementById('add-field-btn').addEventListener('click', () => {
    const fieldType = document.getElementById('field-type').value;
    const fieldLabel = `New ${fieldType.charAt(0).toUpperCase() + fieldType.slice(1)} Field`;
    const fieldName = `field_${state.formFields.length + 1}`;

    const newField = {
        type: fieldType,
        label: fieldLabel,
        name: fieldName
    };

    updateState({ formFields: [...state.formFields, newField] });
});

document.getElementById('form-container').addEventListener('input', (event) => {
    const { name, value } = event.target;
    const newFieldData = { ...state.fieldData, [name]: value };
    updateState({ fieldData: newFieldData });
});

document.getElementById('submit-form-btn').addEventListener('click', () => {
    console.log('Form Data:', state.fieldData);
    alert('Form data logged to console.');
});

// TODO 5: Initial render
render();
