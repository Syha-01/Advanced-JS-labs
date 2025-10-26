// TODO: Select the 'addItem' button and the 'items' <ul>.
const addItemBtn = document.querySelector('#addItem');
const itemsList = document.querySelector('#items');

// TODO: Maintain a running item number (N).
let itemCounter = 1;

// TODO: On 'addItem' click, create an <li> labeled 'Item N' and append it to the list.
if (addItemBtn && itemsList) {
  addItemBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemCounter}`;

    // TODO: Attach a 'click' listener to the new <li> that (when implemented) would log its label.
    newItem.addEventListener('click', (event) => {
      if (event.target && event.target.textContent) {
        console.log(`${event.target.textContent} clicked`);
      }
    });

    itemsList.appendChild(newItem);
    itemCounter++;
  });
} else {
  if (!addItemBtn) {
    console.log("Button with id 'addItem' not found.");
  }
  if (!itemsList) {
    console.log("Element with id 'items' not found.");
  }
}
