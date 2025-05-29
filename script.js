// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Accessible carousel functionality with keyboard support
    const dots = document.querySelectorAll('.carousel .dot');
    const items = document.querySelectorAll('.carousel-item');
    
    // Add click and keyboard event listeners to carousel dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        
        // Add keyboard navigation for carousel
        dot.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    const prevIndex = (index - 1 + dots.length) % dots.length;
                    dots[prevIndex].focus();
                    goToSlide(prevIndex);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    const nextIndex = (index + 1) % dots.length;
                    dots[nextIndex].focus();
                    goToSlide(nextIndex);
                    break;
                case 'Home':
                    e.preventDefault();
                    dots[0].focus();
                    goToSlide(0);
                    break;
                case 'End':
                    e.preventDefault();
                    dots[dots.length - 1].focus();
                    goToSlide(dots.length - 1);
                    break;
            }
        });
    });
    
    function goToSlide(targetIndex) {
        // Remove active class from all dots and items
        dots.forEach((d, i) => {
            d.classList.remove('active');
            d.setAttribute('aria-selected', 'false');
            d.setAttribute('tabindex', '-1');
        });
        items.forEach(item => item.classList.remove('active'));
        
        // Add active class to current dot and item
        dots[targetIndex].classList.add('active');
        dots[targetIndex].setAttribute('aria-selected', 'true');
        dots[targetIndex].setAttribute('tabindex', '0');
        items[targetIndex].classList.add('active');
    }
    
    // Semantic button click handling
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Form submitted!');
        });
    }
    
    // Dynamic content that is properly announced to screen readers
    const notificationBtn = document.getElementById('add-notification');
    const notificationArea = document.getElementById('notification-area');
    let notificationCount = 0;
    
    if (notificationBtn && notificationArea) {
        notificationBtn.addEventListener('click', () => {
            notificationCount++;
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.setAttribute('role', 'alert');
            notification.textContent = `New notification #${notificationCount}: This content was added dynamically.`;
            
            // ARIA live region will announce this to screen readers
            notificationArea.appendChild(notification);
        });
    }
    
    // Accessible popup with proper focus management
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
        popup.setAttribute('role', 'dialog');
        popup.setAttribute('aria-labelledby', 'cookie-title');
        popup.innerHTML = `
            <div id="cookie-title">Cookie Notice</div>
            <div>This site uses cookies.</div>
            <button id="cookie-accept" style="background: #4a90e2; color: white; border: none; padding: 5px 10px; margin-top: 10px; border-radius: 3px; cursor: pointer;">Accept</button>
        `;
        
        // Focus management and keyboard accessibility
        document.body.appendChild(popup);
        
        const acceptBtn = popup.querySelector('#cookie-accept');
        if (acceptBtn) {
            acceptBtn.focus(); // Focus the accept button
            
            acceptBtn.addEventListener('click', () => {
                document.body.removeChild(popup);
            });
            
            // Allow escape key to close
            acceptBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    document.body.removeChild(popup);
                }
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
});

// Contact page accessible FAQ functionality
function initializeFAQ() {
    const faqButtons = document.querySelectorAll('.faq-question');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const expanded = button.getAttribute('aria-expanded') === 'true';
            const target = document.getElementById(button.getAttribute('aria-controls'));
            
            button.setAttribute('aria-expanded', !expanded);
            target.hidden = expanded;
            
            // Announce the state change to screen readers
            if (!expanded) {
                target.focus();
            }
        });
        
        // Add keyboard support
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
}

// Initialize FAQ when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFAQ);
} else {
    initializeFAQ();
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

// About page accessible values tab functionality
function initializeTabs() {
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            switchTab(tab, index);
        });
        
        tab.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    const prevIndex = (index - 1 + tabs.length) % tabs.length;
                    switchTab(tabs[prevIndex], prevIndex);
                    tabs[prevIndex].focus();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    const nextIndex = (index + 1) % tabs.length;
                    switchTab(tabs[nextIndex], nextIndex);
                    tabs[nextIndex].focus();
                    break;
                case 'Home':
                    e.preventDefault();
                    switchTab(tabs[0], 0);
                    tabs[0].focus();
                    break;
                case 'End':
                    e.preventDefault();
                    switchTab(tabs[tabs.length - 1], tabs.length - 1);
                    tabs[tabs.length - 1].focus();
                    break;
            }
        });
    });
    
    function switchTab(selectedTab, selectedIndex) {
        // Reset all tabs
        tabs.forEach((tab, i) => {
            tab.setAttribute('aria-selected', 'false');
            tab.classList.remove('active');
            tab.setAttribute('tabindex', '-1');
            
            if (tabPanels[i]) {
                tabPanels[i].hidden = true;
            }
        });
        
        // Activate selected tab
        selectedTab.setAttribute('aria-selected', 'true');
        selectedTab.classList.add('active');
        selectedTab.setAttribute('tabindex', '0');
        
        if (tabPanels[selectedIndex]) {
            tabPanels[selectedIndex].hidden = false;
        }
    }
}

// Initialize tabs when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTabs);
} else {
    initializeTabs();
}