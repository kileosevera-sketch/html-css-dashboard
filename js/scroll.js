// Smooth scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = entry.target.dataset.animation || 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all topic cards
    document.querySelectorAll('.topic-card').forEach(card => {
        observer.observe(card);
    });
});

// Add subtle parallax effect on scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const decorations = document.querySelectorAll('.decoration');
    
    decorations.forEach(decoration => {
        decoration.style.transform = `translateY(${scrolled * 0.3}px)`;
    });
});
