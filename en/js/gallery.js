// JavaScript code
const galleryLinks = document.querySelectorAll('.gallery__link');
const popupOverlay = document.querySelector('.popup-overlay');
const popupContent = document.querySelector('.popup-content');
const popupImage = document.querySelector('.popup-image');
const closeButtons = document.querySelectorAll('.close-button');

galleryLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const imageSrc = link.querySelector('.gallery__image').src;
        const imageAlt = link.querySelector('.gallery__image').alt;

        popupImage.src = imageSrc;
        popupImage.alt = imageAlt;
        popupOverlay.style.display = 'flex';
    });
});

closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
    });
});
