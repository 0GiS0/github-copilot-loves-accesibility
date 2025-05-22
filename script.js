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
});