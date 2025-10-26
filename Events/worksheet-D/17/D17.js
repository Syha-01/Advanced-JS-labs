// TODO: Select the color input 'color' and the 'colorBox' div.
const colorInput = document.querySelector('#color');
const colorBox = document.querySelector('#colorBox');

// TODO: Attach an 'input' listener to the color input.
if (colorInput && colorBox) {
  colorInput.addEventListener('input', (event) => {
    // TODO: Inside the handler, set colorBox's background to the selected value. (Leave body unimplemented.)
    if (event.target && event.target.value) {
      colorBox.style.backgroundColor = event.target.value;
    }
  });
} else {
  if (!colorInput) {
    console.log("Color input with id 'color' not found.");
  }
  if (!colorBox) {
    console.log("Div with id 'colorBox' not found.");
  }
}
