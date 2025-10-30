// Exercise 10: Image Gallery
// Goal: Click thumbnails to change the main image using event delegation

const thumbnailContainer = document.getElementById('thumbnail-container');
const featuredImage = document.getElementById('featured-image');
const imageCaption = document.getElementById('image-caption');

// TODO: Add ONE event listener to thumbnail-container
// HINT: Check if clicked element has class 'thumbnail'
// HINT: Get data-image and data-caption attributes from clicked thumbnail
// HINT: Update featuredImage.src with the data-image value
// HINT: Update imageCaption.textContent with the data-caption value
// HINT: Remove 'active' class from all thumbnails
// HINT: Add 'active' class to clicked thumbnail

// Your code here:
thumbnailContainer.addEventListener('click', (event) => {
    const clickedThumbnail = event.target;

    // Check if a thumbnail was clicked
    if (clickedThumbnail.classList.contains('thumbnail')) {
        // Get data from the clicked thumbnail
        const newImageSrc = clickedThumbnail.dataset.image;
        const newCaption = clickedThumbnail.dataset.caption;

        // Update the featured image and caption
        featuredImage.src = newImageSrc;
        imageCaption.textContent = newCaption;

        // Update the active state
        document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
        clickedThumbnail.classList.add('active');
    }
});
