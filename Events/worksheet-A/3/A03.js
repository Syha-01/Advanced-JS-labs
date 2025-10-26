// TODO: Select the button with id 'btn3'.
const btn3 = document.querySelector('#btn3');

// TODO: Attach a 'dblclick' event listener to the button.
if (btn3) {
  btn3.addEventListener('dblclick', (event) => {
    // TODO: Inside the handler, change the button's text.
    if (event.target) {
      event.target.textContent = 'Nice double click!';
    }
  });
} else {
  console.log('Button with id "btn3" not found.');
}
