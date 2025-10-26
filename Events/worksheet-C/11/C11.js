// TODO: Select the buttons with ids 'toggleBtn' and 'fireBtn'.
const toggleBtn = document.querySelector('#toggleBtn');
const fireBtn = document.querySelector('#fireBtn');

// TODO: Create a function intended to log 'Fired!'.
const fireHandler = () => {
  console.log('Fired!');
};

// TODO: Track whether the 'Fire' button has a listener attached. (Hint: a boolean flag variable)
let isListenerAttached = false;

// TODO: On 'toggleBtn' click, add or remove the 'click' listener on 'fireBtn' based on the flag.
if (toggleBtn && fireBtn) {
  toggleBtn.addEventListener('click', () => {
    if (isListenerAttached) {
      fireBtn.removeEventListener('click', fireHandler);
      console.log('Listener removed.');
    } else {
      fireBtn.addEventListener('click', fireHandler);
      console.log('Listener added.');
    }
    isListenerAttached = !isListenerAttached;
  });
} else {
  if (!toggleBtn) {
    console.log("Button with id 'toggleBtn' not found.");
  }
  if (!fireBtn) {
    console.log("Button with id 'fireBtn' not found.");
  }
}
