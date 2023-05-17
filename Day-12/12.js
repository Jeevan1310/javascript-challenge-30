const slider = document.querySelector('.slider');
let currentSlide = 0;
const slides = slider.querySelectorAll('img');
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0 || index >= totalSlides) return;
  
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
  
  currentSlide = index;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}


const autoplayInterval = setInterval(nextSlide, 3000);



document.getElementById('nextBtn').addEventListener('click', nextSlide);


document.getElementById('prevBtn').addEventListener('click', prevSlide);
