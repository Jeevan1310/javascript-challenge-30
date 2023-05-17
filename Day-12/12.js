document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = slider.getElementsByTagName('img');
    let currentSlide = 0;
    const totalSlides = slides.length;
  
    function showSlide(index) {
      if (index < 0 || index >= totalSlides) return;
  
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      
      slides[index].style.display = 'block';
      currentSlide = index;
    }
  
    function nextSlide() {
      const nextIndex = (currentSlide + 1) % totalSlides;
      showSlide(nextIndex);
    }
  
    function prevSlide() {
      const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(prevIndex);
    }
  
    // Optional: Auto-play the slider
    const autoplayInterval = setInterval(nextSlide, 3000);
  
    // Usage example:
    // Show the next slide when clicking a "Next" button
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
  
    // Show the previous slide when clicking a "Previous" button
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
  
    // Show the initial slide
    showSlide(currentSlide);
  });
  