// TODO: Select 'makeBtn' and the container 'btnArea'.
const makeBtn = document.querySelector('#makeBtn');
const btnArea = document.querySelector('#btnArea');

// TODO: Maintain a counter to number each new button (e.g., X = 1, 2, 3...).
let buttonCounter = 1;

// TODO: On 'makeBtn' click, create a <button>, set its text to 'New X', and append it to #btnArea.
if (makeBtn && btnArea) {
  makeBtn.addEventListener('click', () => {
    const newButton = document.createElement('button');
    newButton.textContent = `New ${buttonCounter}`;

    // TODO: Attach a 'click' listener to the new button that (when implemented) would log its own text.
    newButton.addEventListener('click', (event) => {
      if (event.target && event.target.textContent) {
        console.log(event.target.textContent);
      }
    });

    btnArea.appendChild(newButton);
    buttonCounter++;
  });
} else {
  if (!makeBtn) {
    console.log("Button with id 'makeBtn' not found.");
  }
  if (!btnArea) {
    console.log("Element with id 'btnArea' not found.");
  }
}
