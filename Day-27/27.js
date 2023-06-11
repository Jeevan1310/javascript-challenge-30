const API_URL = 'http://localhost:3000/api/images'; // Replace with your API endpoint

async function fetchImages() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

function createSlide(imageUrl) {
  const slideContainer = document.querySelector('.slideshow-container');
  const slide = document.createElement('div');
  slide.className = 'slide';
  const slideImage = document.createElement('img');
  slideImage.src = imageUrl;
  slideImage.alt = 'Slideshow Image';
  slide.appendChild(slideImage);
  slideContainer.appendChild(slide);
}

async function initializeSlideshow() {
  const images = await fetchImages();
  if (images.length > 0) {
    images.forEach(imageUrl => createSlide(imageUrl));
    showSlide(0); // Display the first slide
  }
}

function showSlide(slideIndex) {
  const slides = document.getElementsByClassName('slide');
  if (slideIndex >= 0 && slideIndex < slides.length) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
  }
}

initializeSlideshow();
