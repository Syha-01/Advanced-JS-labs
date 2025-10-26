// TODO: Select the element with id 'mouseBox' and the span with id 'coords'.
const mouseBox = document.querySelector('#mouseBox');
const coords = document.querySelector('#coords');

// TODO: Attach a 'mousemove' event listener to the box.
if (mouseBox && coords) {
  mouseBox.addEventListener('mousemove', (event) => {
    // TODO: Inside the handler, update the coords text.
    coords.textContent = `x=${event.x}, y=${event.y}`;
  });
} else {
  if (!mouseBox) {
    console.log('Element with id "mouseBox" not found.');
  }
  if (!coords) {
    console.log('Element with id "coords" not found.');
  }
}
