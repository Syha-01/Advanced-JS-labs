// TODO: Select the button with id 'btn2'.
const btn2 = document.querySelector('#btn2');

if (btn2) {
  // TODO: Attach a 'click' event listener to the button.
  btn2.addEventListener('click', (event) => {
    // TODO: Inside the handler, log the clicked element's text. (Hint: event.target.textContent)
    if (event.target && event.target.textContent.length > 0) {
      console.log(event.target.textContent);
    }
  });
} else {
  console.log('Button with id "btn2" not found.');
}
