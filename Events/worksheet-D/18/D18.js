// TODO: Select the buttons 'plus' and 'minus', and the span 'value'.
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const valueSpan = document.querySelector('#value');

// TODO: Initialize a number variable to track the counter.
let count = 0;

if (plusBtn && minusBtn && valueSpan) {
  // TODO: Attach a 'click' listener to 'plus' that (when implemented) would increment and update the span.
  plusBtn.addEventListener('click', () => {
    count++;
    valueSpan.textContent = count;
  });

  // TODO: Attach a 'click' listener to 'minus' that (when implemented) would decrement and update the span.
  minusBtn.addEventListener('click', () => {
    count--;
    valueSpan.textContent = count;
  });
} else {
  if (!plusBtn) console.log("Button with id 'plus' not found.");
  if (!minusBtn) console.log("Button with id 'minus' not found.");
  if (!valueSpan) console.log("Span with id 'value' not found.");
}
