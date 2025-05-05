const images = document.querySelectorAll('.carousel-image');
let index = 0;

setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}, 5000); // 3000ms = 3 seconds
