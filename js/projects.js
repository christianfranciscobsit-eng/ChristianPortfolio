/* =============================================
   Projects Page JS — Christian Francisco
   ============================================= */

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
});

// Interactive mouse effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        const img = card.querySelector('.project-image');
        if (img) {
            img.style.transformOrigin = `${x * 100}% ${y * 100}%`;
        }
    });
});
