// TODO: Select the text input 'titleInput' and the heading 'titlePreview'.
const titleInput = document.querySelector('#titleInput');
const titlePreview = document.querySelector('#titlePreview');

// TODO: Attach an 'input' listener to the text field.
if (titleInput && titlePreview) {
  titleInput.addEventListener('input', (event) => {
    // TODO: Inside the handler, set the preview's text to the input's value (fallback message if empty).
    if (event.target && event.target.value.length > 0) {
      titlePreview.textContent = event.target.value;
    } else {
      titlePreview.textContent = 'Preview will appear here';
    }
  });
} else {
  if (!titleInput) {
    console.log("Input with id 'titleInput' not found.");
  }
  if (!titlePreview) {
    console.log("Heading with id 'titlePreview' not found.");
  }
}
