// Main JavaScript file for Techprizy website

document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loading);

    // Hide loading animation after page load
    window.addEventListener('load', function() {
        loading.classList.add('hidden');
        setTimeout(() => {
            loading.remove();
        }, 500);
    });

    // Mobile menu toggle with enhanced animation
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            menuToggle.classList.remove('active');
        });
    });
    
    // Enhanced smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Enhanced active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    function highlightNavLink() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('text-blue-600', 'font-bold');
                    link.classList.add('text-gray-800');
                    
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.remove('text-gray-800');
                        link.classList.add('text-blue-600', 'font-bold');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Enhanced form validation and submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        const formInputs = contactForm.querySelectorAll('input, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission with enhanced animation
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            // Simulate API call with timeout
            setTimeout(function() {
                // Reset form
                contactForm.reset();
                formInputs.forEach(input => {
                    input.parentElement.classList.remove('focused');
                });
                
                // Show success message
                showNotification('Thank you for your message! We will get back to you soon.', 'success');
                
                // Reset button
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            }, 1500);
        });
    }
    
    // Enhanced scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Add animate-on-scroll class to elements
    document.querySelectorAll('.bg-white.p-8.rounded-lg.shadow-lg, .portfolio-item, .testimonial-card').forEach(element => {
        element.classList.add('animate-on-scroll');
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load
    
    // Enhanced portfolio filtering
    const portfolioFilters = document.querySelectorAll('.portfolio-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (portfolioFilters.length > 0 && portfolioItems.length > 0) {
        portfolioFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                // Remove active class from all filters
                portfolioFilters.forEach(f => f.classList.remove('active'));
                
                // Add active class to current filter
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Show/hide portfolio items with animation
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Enhanced testimonial slider
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentTestimonial = 0;
    let isAnimating = false;

    function updateSlider() {
        if (isAnimating) return;
        isAnimating = true;

        testimonials.forEach((testimonial, index) => {
            const offset = (index - currentTestimonial) * 100;
            testimonial.style.transform = `translateX(${offset}%)`;
            testimonial.style.opacity = Math.abs(offset) > 100 ? '0' : '1';
            testimonial.style.transition = 'all 0.5s ease-in-out';
        });

        // Update button states
        prevBtn.style.opacity = currentTestimonial === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentTestimonial === testimonials.length - 1 ? '0.5' : '1';

        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }

    function nextTestimonial() {
        if (currentTestimonial < testimonials.length - 1) {
            currentTestimonial++;
            updateSlider();
        }
    }

    function prevTestimonial() {
        if (currentTestimonial > 0) {
            currentTestimonial--;
            updateSlider();
        }
    }

    // Event listeners for navigation
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            prevTestimonial();
        });

        nextBtn.addEventListener('click', () => {
            nextTestimonial();
        });
    }

    // Auto-rotate testimonials
    let testimonialInterval = setInterval(nextTestimonial, 5000);

    // Pause auto-rotation on hover
    testimonials.forEach(testimonial => {
        testimonial.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });

        testimonial.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(nextTestimonial, 5000);
        });
    });

    // Initialize slider
    updateSlider();
    
    // Enhanced back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.classList.add('back-to-top', 'hidden', 'fixed', 'bottom-6', 'right-6', 'bg-blue-600', 'text-white', 'rounded-full', 'p-3', 'shadow-lg', 'hover:bg-blue-700', 'transition', 'duration-300');
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('hidden');
            backToTopButton.style.opacity = '1';
            backToTopButton.style.transform = 'translateY(0)';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.transform = 'translateY(20px)';
            setTimeout(() => {
                backToTopButton.classList.add('hidden');
            }, 300);
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Notification system
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Add year to copyright text
    const copyrightYear = document.querySelector('.copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // Add class to body when page is loaded
    document.body.classList.add('loaded');
});