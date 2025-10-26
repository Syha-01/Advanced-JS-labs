// TODO: Select the input 'typeField', the span 'count', and the buttons 'start' and 'stop'.
const typeField = document.querySelector('#typeField');
const countSpan = document.querySelector('#count');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

// TODO: Initialize a numeric counter variable.
let keydownCount = 0;

// TODO: Write a named function (skeleton only) intended to increment the counter and update the span.
const countKeydowns = () => {
  keydownCount++;
  if (countSpan) {
    countSpan.textContent = keydownCount;
  }
};

if (typeField && countSpan && startBtn && stopBtn) {
  // TODO: On 'start' click, add the 'keydown' listener to the input.
  startBtn.addEventListener('click', () => {
    typeField.addEventListener('keydown', countKeydowns);
    console.log('Keydown listener started.');
  });

  // TODO: On 'stop' click, remove the 'keydown' listener from the input.
  stopBtn.addEventListener('click', () => {
    typeField.removeEventListener('keydown', countKeydowns);
    console.log('Keydown listener stopped.');
  });
} else {
  if (!typeField) console.log("Input with id 'typeField' not found.");
  if (!countSpan) console.log("Span with id 'count' not found.");
  if (!startBtn) console.log("Button with id 'start' not found.");
  if (!stopBtn) console.log("Button with id 'stop' not found.");
}
