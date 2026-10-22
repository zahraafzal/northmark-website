/**
 * MONARCH - Main JavaScript
 * Version: 1.0
 */

// ===========================================
// TABLE OF CONTENTS
// 1. Mobile Menu
// 2. Cart Functionality
// 3. Newsletter Form
// 4. Smooth Scroll
// 5. Product Interactions
// ===========================================


// ===========================================
// 1. MOBILE MENU
// ===========================================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

// Open mobile menu
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });
}

// Close mobile menu
if (closeMenu) {
    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    }
});


// ===========================================
// 2. CART FUNCTIONALITY
// ===========================================

// Simple cart count (in real app, would use localStorage/backend)
let cartCount = 0;

// Add to cart buttons
const addToCartButtons = document.querySelectorAll('.btn-add-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        const productPrice = this.getAttribute('data-price');
        
        // Add to cart (simplified)
        cartCount++;
        updateCartBadge();
        
        // Show notification
        showNotification(`${productName} added to bag!`);
        
        // In real app, would save to localStorage or send to backend
        // saveToCart(productName, productPrice);
    });
});

// Update cart badge
function updateCartBadge() {
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
        cartBadge.textContent = cartCount;
    }
}

// Simple notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #0B0B0B;
        color: white;
        padding: 16px 24px;
        border-radius: 4px;
        font-size: 14px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


// ===========================================
// 3. NEWSLETTER FORM
// ===========================================

const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // In real app, would send to backend
        // submitNewsletter(email);
        
        // Show success message
        showNotification('Thank you for subscribing! Check your email for 10% off.');
        
        // Reset form
        emailInput.value = '';
    });
}


// ===========================================
// 4. SMOOTH SCROLL
// ===========================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only prevent default if it's not just "#"
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        }
    });
});


// ===========================================
// 5. PRODUCT INTERACTIONS
// ===========================================

// Image hover effect for product cards (if needed)
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    const productImage = card.querySelector('.product-image img');
    
    if (productImage) {
        card.addEventListener('mouseenter', function() {
            // Can add additional hover effects here
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset hover effects
        });
    }
});


// ===========================================
// UTILITY FUNCTIONS
// ===========================================

// Load cart count from localStorage on page load
function loadCartCount() {
    const saved = localStorage.getItem('cartCount');
    if (saved) {
        cartCount = parseInt(saved);
        updateCartBadge();
    }
}

// Save cart count to localStorage
function saveCartCount() {
    localStorage.setItem('cartCount', cartCount);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCartCount();
});


// ===========================================
// EXPORT FOR OTHER FILES (if using modules)
// ===========================================

// If using ES6 modules, can export functions:
// export { showNotification, updateCartBadge };
