// Simple carousel implementation for project galleries
// Uses data attributes to wire controls and updates

document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('[data-carousel]');

  carousels.forEach((carousel) => {
    const track = carousel.querySelector('[data-carousel-track]');
    const slides = Array.from(carousel.querySelectorAll('[data-carousel-slide]'));
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');
    const dots = Array.from(carousel.querySelectorAll('[data-carousel-dot]'));
    let currentIndex = 0;

    if (!track || slides.length === 0) {
      return;
    }

    const totalSlides = slides.length;

    if (totalSlides <= 1) {
      if (prevButton) prevButton.hidden = true;
      if (nextButton) nextButton.hidden = true;
      dots.forEach((dot) => dot.hidden = true);
      return;
    }

    carousel.setAttribute('tabindex', '0');
    carousel.setAttribute('role', 'region');
    carousel.setAttribute('aria-roledescription', 'carousel');

    function updateCarousel() {
      const offset = currentIndex * -100;
      track.style.transform = `translateX(${offset}%)`;

      slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === currentIndex);
        slide.setAttribute('aria-hidden', index === currentIndex ? 'false' : 'true');
      });

      dots.forEach((dot, index) => {
        const isActive = index === currentIndex;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-current', isActive ? 'true' : 'false');
      });

      if (prevButton) prevButton.disabled = currentIndex === 0;
      if (nextButton) nextButton.disabled = currentIndex === totalSlides - 1;
    }

    function goToSlide(index) {
      currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
      updateCarousel();
    }

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
      });
    }

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const targetIndex = Number.parseInt(dot.dataset.carouselDot, 10);
        if (!Number.isNaN(targetIndex)) {
          goToSlide(targetIndex);
        }
      });
    });

    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToSlide(currentIndex - 1);
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        goToSlide(currentIndex + 1);
      }
    });

    updateCarousel();
  });
});
