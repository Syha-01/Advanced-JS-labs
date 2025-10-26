// TODO: Select the element with id 'hoverBox'.
const hoverBox = document.querySelector('#hoverBox');

if (hoverBox) {
  // TODO: Attach a 'mouseenter' listener to set a highlight background color.
  hoverBox.addEventListener('mouseenter', (event) => {
    if (event.target) {
      event.target.style.backgroundColor = 'lightyellow';
    }
  });

  // TODO: Attach a 'mouseleave' listener to remove the highlight background color.
  hoverBox.addEventListener('mouseleave', (event) => {
    if (event.target) {
      event.target.style.backgroundColor = '';
    }
  });
} else {
  console.log("Element with id 'hoverBox' not found.");
}
