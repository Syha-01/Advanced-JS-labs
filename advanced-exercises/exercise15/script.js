// Exercise 15: Image Gallery
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    images: [
        { src: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Image+1', title: 'Image 1' },
        { src: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Image+2', title: 'Image 2' },
        { src: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Image+3', title: 'Image 3' },
        { src: 'https://via.placeholder.com/150/FFFF00/000000?text=Image+4', title: 'Image 4' }
    ],
    lightboxOpen: false,
    currentImageIndex: null
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const gallery = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');

    // Render gallery images
    gallery.innerHTML = state.images.map((image, index) => `
        <img src="${image.src}" alt="${image.title}" data-index="${index}" class="thumbnail">
    `).join('');

    // Render lightbox
    if (state.lightboxOpen) {
        const currentImage = state.images[state.currentImageIndex];
        lightbox.classList.add('visible');
        lightboxImage.src = currentImage.src.replace('150', '600'); // Larger image for lightbox
        lightboxCaption.textContent = currentImage.title;
    } else {
        lightbox.classList.remove('visible');
    }
}

// TODO 4: Add your event listeners and logic
document.getElementById('gallery').addEventListener('click', (event) => {
    if (event.target.classList.contains('thumbnail')) {
        const index = parseInt(event.target.dataset.index);
        updateState({ lightboxOpen: true, currentImageIndex: index });
    }
});

document.getElementById('lightbox').addEventListener('click', (event) => {
    if (event.target.id !== 'lightbox-image') {
        updateState({ lightboxOpen: false, currentImageIndex: null });
    }
});

// TODO 5: Initial render
render();
