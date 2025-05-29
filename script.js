// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality - Keyboard inaccessible
    const dots = document.querySelectorAll('.carousel .dot');
    const items = document.querySelectorAll('.carousel-item');
    
    // Add click event listeners to carousel dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove active class from all dots and items
            dots.forEach(d => d.classList.remove('active'));
            items.forEach(item => item.classList.remove('active'));
            
            // Add active class to current dot and item
            dot.classList.add('active');
            items[index].classList.add('active');
        });
        
        // Intentionally not adding keyboard navigation for the carousel
    });
    
    // Non-semantic button click handling
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            alert('Form submitted!');
        });
        
        // No keyboard event handling for the custom button
    }
    
    // Dynamic content that isn't announced to screen readers
    const notificationBtn = document.getElementById('add-notification');
    const notificationArea = document.getElementById('notification-area');
    let notificationCount = 0;
    
    if (notificationBtn && notificationArea) {
        notificationBtn.addEventListener('click', () => {
            notificationCount++;
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = `New notification #${notificationCount}: This content was added dynamically.`;
            
            // No ARIA live region or role="alert" to announce this to screen readers
            notificationArea.appendChild(notification);
        });
    }
    
    // Simulating a popup that would be inaccessible to screen readers
    setTimeout(() => {
        const popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.bottom = '20px';
        popup.style.right = '20px';
        popup.style.backgroundColor = '#333';
        popup.style.color = '#fff';
        popup.style.padding = '15px';
        popup.style.borderRadius = '5px';
        popup.style.zIndex = '1000';
        popup.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        popup.innerHTML = 'Cookie Notice: This site uses cookies. <span style="cursor:pointer;text-decoration:underline;">Accept</span>';
        
        // No ARIA roles, no focus management, not keyboard accessible
        document.body.appendChild(popup);
        
        // Close button that's only clickable
        const acceptSpan = popup.querySelector('span');
        if (acceptSpan) {
            acceptSpan.addEventListener('click', () => {
                document.body.removeChild(popup);
            });
        }
    }, 3000);
    
    // Product page functionality
    const loadProductsBtn = document.getElementById('load-products');
    const productContainer = document.getElementById('product-container');
    let productCount = 0;
    
    if (loadProductsBtn && productContainer) {
        loadProductsBtn.addEventListener('click', () => {
            productCount++;
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `<p>Product ${productCount}: New product loaded dynamically</p>`;
            // No ARIA live region to announce new content
            productContainer.appendChild(productDiv);
        });
    }
    
    // Carousel accessibility: allow keyboard navigation
    const carouselDots = document.querySelectorAll('.carousel .dot, .carousel-indicators .indicator');
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                dot.click();
            }
        });
    });

    // FAQ accessibility: toggle aria-expanded
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach((btn, idx) => {
        btn.addEventListener('click', function() {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !expanded);
        });
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                btn.click();
            }
        });
    });

    // Modal accessibility: focus management
    const modal = document.getElementById('image-modal');
    if (modal) {
        const closeModalBtn = modal.querySelector('.close-modal');
        closeModalBtn && closeModalBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }

    // Submit buttons: allow keyboard activation
    const submitBtns = document.querySelectorAll('.submit-btn');
    submitBtns.forEach(btn => {
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                btn.click();
            }
        });
    });

    // Focus trap for modal
    window.openModal = function(index) {
        const modal = document.getElementById('image-modal');
        const modalImage = document.getElementById('modal-image');
        const modalCaption = document.getElementById('modal-caption');
        
        if (modal && modalImage && modalCaption) {
            modalImage.src = galleryImages[index];
            modalCaption.textContent = galleryTitles[index];
            modal.style.display = 'flex';
            
            setTimeout(() => {
                const closeBtn = modal.querySelector('.close-modal');
                closeBtn && closeBtn.focus();
            }, 100);
        }
    };
    window.closeModal = function() {
        const modal = document.getElementById('image-modal');
        if (modal) {
            modal.style.display = 'none';
            // Restore focus to main content
            document.getElementById('main-content')?.focus();
        }
    };
});

// Contact page FAQ functionality (inaccessible)
function toggleFAQ(index) {
    const answer = document.getElementById('faq-' + index);
    if (answer) {
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    }
    // No ARIA attributes or keyboard handling
}

// Products page filter functionality (inaccessible)
function toggleFilter(type) {
    // Simulated filter toggle without proper accessibility
    console.log('Filtering by:', type);
    // No visual feedback or screen reader announcements
}

// Gallery page functionality (inaccessible)
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function nextSlide() {
    if (slides.length > 0) {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }
    // No keyboard navigation or ARIA announcements
}

function prevSlide() {
    if (slides.length > 0) {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }
}

function goToSlide(index) {
    if (slides.length > 0 && index >= 0 && index < slides.length) {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }
}

// Gallery modal functionality (inaccessible)
const galleryImages = [
    'https://placehold.co/800x600',
    'https://placehold.co/800x600',
    'https://placehold.co/800x600',
    'https://placehold.co/800x600',
    'https://placehold.co/800x600',
    'https://placehold.co/800x600'
];

const galleryTitles = [
    'Project Alpha',
    'Project Beta', 
    'Project Gamma',
    'Project Delta',
    'Project Epsilon',
    'Project Zeta'
];

function openModal(index) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    
    if (modal && modalImage && modalCaption) {
        modalImage.src = galleryImages[index];
        modalCaption.textContent = galleryTitles[index];
        modal.style.display = 'flex';
        
        // No focus management or escape key handling
        // No ARIA attributes for modal accessibility
    }
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.style.display = 'none';
        // No focus restoration
    }
}

// Gallery filter functionality (inaccessible)
function filterGallery(category) {
    // Remove active class from all filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    event.target.closest('.filter-btn').classList.add('active');
    
    // Simulate filtering (no actual filtering implemented)
    console.log('Filtering gallery by:', category);
    // No screen reader announcements about filter results
}

// About page values tab functionality (inaccessible)
function showValue(valueType) {
    // Hide all value content
    const valueContents = document.querySelectorAll('.value-content');
    valueContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));
    
    // Show selected content and activate button
    const selectedContent = document.getElementById(valueType);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // No ARIA attributes or keyboard navigation
    // No screen reader announcements about tab changes
}