// TODO: Select the input with id 'keyInput' and the span with id 'lastKey'.
const keyInput = document.querySelector('#keyInput');
const lastKey = document.querySelector('#lastKey');

// TODO: Attach a 'keydown' event listener to the input.
if (keyInput && lastKey) {
  keyInput.addEventListener('keydown', (event) => {
    // TODO: Inside the handler, set the span's text to the key pressed.
    if (event.key) {
      lastKey.textContent = event.key;
    }
  });
} else {
  if (!keyInput) {
    console.log('Element with id "keyInput" not found.');
  }
  if (!lastKey) {
    console.log('Element with id "lastKey" not found.');
  }
}
