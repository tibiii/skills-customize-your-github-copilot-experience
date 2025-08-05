// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! (This is a demo - no email was actually sent)');
    this.reset();
});

// Dark mode toggle (students will implement this)
function toggleDarkMode() {
    // TODO: Implement dark mode functionality
    console.log('Dark mode toggle clicked - implement this feature!');
}

// Scroll to top button (students will implement this)
function createScrollToTopButton() {
    // TODO: Create and style a scroll to top button
    // Show/hide based on scroll position
    console.log('Scroll to top functionality - implement this feature!');
}

// Project filter functionality (students will implement this)
function filterProjects(category) {
    // TODO: Implement project filtering
    console.log('Project filter clicked:', category);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded! Complete the JavaScript tasks to add more interactivity.');
});
