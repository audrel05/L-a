let currentSlide = 1;
const totalSlides = document.querySelectorAll('.slider img').length;

// Créez un tableau avec les chemins de vos images
const images = [
    './image/fleurjaune.png',
    './image/fleurverte.png',
    './image/fleurarcenciel.png'
];

// Créez les éléments img et ajoutez-les à la page
images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `/image/fleurverte.png${index + 1}`;
    img.id = `./image/fleurarcenciel.png${index + 1}`;
    img.style.display = index === 0 ? 'block' : 'none'; // Montre la première image, cache les autres

    document.querySelector('.slider').appendChild(img);
});

function showSlide(n) {
    const slides = document.querySelectorAll('.slider img');
    if (n > totalSlides) {
        currentSlide = 1;
    }
    if (n < 1) {
        currentSlide = totalSlides;
    }
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlide - 1].style.display = "block";
}