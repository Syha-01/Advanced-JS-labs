// TODO: Select all buttons with the class 'multi'.
const multiButtons = document.querySelectorAll('.multi');

// TODO: Define a handler function that logs the clicked button's text.
const multiButtonHandler = (event) => {
  if (event.target && event.target.textContent.length > 0) {
    console.log(event.target.textContent);
  }
};

// TODO: Attach the same 'click' handler to each of the selected buttons.
if (multiButtons && multiButtons.length > 0) {
  multiButtons.forEach(button => {
    button.addEventListener('click', multiButtonHandler);
  });
} else {
  console.log("Buttons with class 'multi' not found.");
}
