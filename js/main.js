// Main JavaScript file for the hotel website

// Mobile menu control
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on any link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling effect for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll reveal animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.room-card, .facility-item, .gallery-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Gallery lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    const body = document.body;

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').getAttribute('src');
            const imgAlt = this.querySelector('img').getAttribute('alt');
            
            // Create lightbox element
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${imgSrc}" alt="${imgAlt}">
                    <span class="lightbox-close">&times;</span>
                </div>
            `;
            
            // Add styles to lightbox
            lightbox.style.position = 'fixed';
            lightbox.style.top = '0';
            lightbox.style.left = '0';
            lightbox.style.width = '100%';
            lightbox.style.height = '100%';
            lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            lightbox.style.display = 'flex';
            lightbox.style.justifyContent = 'center';
            lightbox.style.alignItems = 'center';
            lightbox.style.zIndex = '1000';
            
            const lightboxContent = lightbox.querySelector('.lightbox-content');
            lightboxContent.style.position = 'relative';
            lightboxContent.style.maxWidth = '90%';
            lightboxContent.style.maxHeight = '90%';
            
            const lightboxImg = lightbox.querySelector('img');
            lightboxImg.style.maxWidth = '100%';
            lightboxImg.style.maxHeight = '90vh';
            lightboxImg.style.display = 'block';
            
            const closeBtn = lightbox.querySelector('.lightbox-close');
            closeBtn.style.position = 'absolute';
            closeBtn.style.top = '-40px';
            closeBtn.style.right = '0';
            closeBtn.style.fontSize = '30px';
            closeBtn.style.color = 'white';
            closeBtn.style.cursor = 'pointer';
            
            // Add lightbox to page
            body.appendChild(lightbox);
            body.style.overflow = 'hidden';
            
            // Close lightbox
            closeBtn.addEventListener('click', function() {
                body.removeChild(lightbox);
                body.style.overflow = 'auto';
            });
            
            // Close lightbox when clicking outside the image
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    body.removeChild(lightbox);
                    body.style.overflow = 'auto';
                }
            });
        });
    });

    // Contact form validation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate fields
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Simulate form submission
            alert('Your message has been sent successfully! We will contact you soon.');
            contactForm.reset();
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (!email) {
                alert('Please enter your email');
                return;
            }
            
            // Simulate subscription
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }

    // Sticky header effect
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    
    if (header && heroSection) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(12, 75, 101, 0.95)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.backgroundColor = 'var(--primary-color)';
                header.style.boxShadow = 'none';
            }
        });
    }
});

// Add fade-in effect for elements
document.addEventListener('DOMContentLoaded', function() {
    // Define CSS for the effect
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
