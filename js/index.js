const images = Array.from(document.querySelectorAll('.carousel__image'));
let currentIndex = 0;

setInterval(() => {
    // remove active class from current image
    images[currentIndex].classList.remove('active');

    // go to next image
    currentIndex = (currentIndex + 1) % images.length;

    // add active class to next image
    images[currentIndex].classList.add('active');
}, 2000); // changes every 2 seconds
