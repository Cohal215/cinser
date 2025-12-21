const images = document.querySelectorAll('.posters img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const dotsContainer = document.getElementById('dots');

let currentIndex = 0;
let startX = 0;
let endX = 0;

function openModal(index) {
    modal.style.display = 'flex';
    currentIndex = index;
    updateImage();
    createDots();
    updateDots();
}
modalImg.addEventListener('click', () => {
    modal.style.display = 'none';
});

function updateImage() {
    modalImg.src = images[currentIndex].src;
    modalImg.style.animation = 'none';
    modalImg.offsetHeight;
    modalImg.style.animation = 'zoom 0.5s ease';
}
function updateImageR() {
    modalImg.src = images[currentIndex].src;
    modalImg.style.animation = 'none';
    modalImg.offsetHeight;
    modalImg.style.animation = 'fundidoR 0.5s ease';
}
function updateImageL() {
    modalImg.src = images[currentIndex].src;
    modalImg.style.animation = 'none';
    modalImg.offsetHeight;
    modalImg.style.animation = 'fundidoL 0.5s ease';
}

function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImageR();
    updateDots();
}

function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImageL();
    updateDots();
}

/* Swipe */
modalImg.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

modalImg.addEventListener('touchend', e => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (diff > 50) showNext();
    if (diff < -50) showPrev();
});

/* Abrir */
images.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
});

/* Cerrar con clic fuera */
modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
});

/* Teclado */
document.addEventListener('keydown', e => {
    if (modal.style.display === 'flex') {
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'Escape') modal.style.display = 'none';
    }
});

/* Nav */
const scrollContainer = document.querySelector('.btn-anos-scroll');
document.querySelector('.scroll-btn.left').addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
});
document.querySelector('.scroll-btn.right').addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
});