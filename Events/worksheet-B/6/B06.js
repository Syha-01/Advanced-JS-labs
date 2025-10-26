// TODO: Select the button with id 'btnA'.
const btnA = document.querySelector('#btnA');

if (btnA) {
  // TODO: Attach the first 'click' listener that logs a distinct message (e.g., 'first').
  btnA.addEventListener('click', () => {
    console.log('Hi :)');
  });

  // TODO: Attach the second 'click' listener that logs a different message (e.g., 'second').
  btnA.addEventListener('click', () => {
    console.log('Hi :) x2');
  });
} else {
  console.log("Button with id 'btnA' not found.");
}
