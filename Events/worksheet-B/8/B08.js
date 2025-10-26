// TODO: Select the input with id 'name' and the span with id 'len'.
const nameInput = document.querySelector('#name');
const lenSpan = document.querySelector('#len');

// TODO: Attach an 'input' listener to the input.
if (nameInput && lenSpan) {
  nameInput.addEventListener('input', (event) => {
    // TODO: Inside the handler, set the span text to the current input length. (Hint: event.target.value.length)
    if (event.target && event.target.value) {
      lenSpan.textContent = event.target.value.length;
    } else {
      lenSpan.textContent = 0;
    }
  });
} else {
  if (!nameInput) {
    console.log("Input with id 'name' not found.");
  }
  if (!lenSpan) {
    console.log("Span with id 'len' not found.");
  }
}
