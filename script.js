// Testimonial Slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonial-slider');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const cards = document.querySelectorAll('.testimonial-card');
    
    let currentIndex = 0;
    const cardsPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const maxIndex = cards.length - cardsPerView;

    function updateSlider() {
        const offset = -currentIndex * (100 / cardsPerView);
        slider.style.transform = `translateX(${offset}%)`;
        
        // Update button states
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex === maxIndex ? '0.5' : '1';
    }

    // Initialize slider
    slider.style.display = 'grid';
    slider.style.gridTemplateColumns = `repeat(${cards.length}, 1fr)`;
    slider.style.width = `${(cards.length / cardsPerView) * 100}%`;
    slider.style.transition = 'transform 0.5s ease-in-out';
    updateSlider();

    // Event listeners for navigation
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        const newCardsPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        if (newCardsPerView !== cardsPerView) {
            currentIndex = 0;
            updateSlider();
        }
    });
}); 