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
  

    const autoplayInterval = setInterval(nextSlide, 3000);
  

    document.getElementById('nextBtn').addEventListener('click', nextSlide);
  
    
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
  
  
    showSlide(currentSlide);
  });
  