// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Review Slider
const reviews = document.querySelectorAll('.review-card');
const dots = document.querySelectorAll('.dot');
let currentReview = 0;

function showReview(index) {
    reviews.forEach(review => review.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    reviews[index].classList.add('active');
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentReview = index;
        showReview(currentReview);
    });
});

// Auto slide reviews
setInterval(() => {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
}, 5000);

// Add to Cart Button
document.querySelectorAll('.btn-cart').forEach(btn => {
    btn.addEventListener('click', function() {
        this.textContent = 'Added ✓';
        this.style.background = 'var(--primary)';
        setTimeout(() => {
            this.textContent = 'Add to Bag';
            this.style.background = 'var(--text)';
        }, 2000);
    });
});

// Email Form
document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Code sent to ${email}! Use JAWLINE15 for 15% OFF. Valid till Fajr 😂`);
    this.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 30px rgba(168, 198, 159, 0.3)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(168, 198, 159, 0.2)';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});