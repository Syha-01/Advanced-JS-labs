// TODO: Select the 'onceBtn' button.
const onceBtn = document.querySelector('#onceBtn');

if (onceBtn) {
  // TODO: Attach a 'click' listener configured to run only once. (Hint: use the option { once: true })
  onceBtn.addEventListener('click', () => {
    console.log('This will only run once.');
  }, { once: true });
} else {
  console.log("Button with id 'onceBtn' not found.");
}

// TODO: Alternatively, remove the listener inside its own handler.
// Example of the alternative approach:
/*
const onceHandler = (event) => {
  console.log('This will also only run once.');
  event.target.removeEventListener('click', onceHandler);
};

if (onceBtn) {
  onceBtn.addEventListener('click', onceHandler);
}
*/
