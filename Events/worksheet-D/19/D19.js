// TODO: Select the 'swap' button and the 'photo' image.
const swapBtn = document.querySelector('#swap');
const photo = document.querySelector('#photo');

// TODO: Attach a 'click' listener to the button.
if (swapBtn && photo) {
  swapBtn.addEventListener('click', () => {
    // TODO: Inside the handler, change the image src to a new URL.
    photo.src = 'https://picsum.photos/120?random=2';
  });
} else {
  if (!swapBtn) {
    console.log("Button with id 'swap' not found.");
  }
  if (!photo) {
    console.log("Image with id 'photo' not found.");
  }
}
