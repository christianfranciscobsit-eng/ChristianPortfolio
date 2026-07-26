/* =============================================
   Contact Page JS — Christian Francisco
   ============================================= */

// Reveal on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
});

// Form Micro-interactions
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalContent = btn.innerHTML;

    btn.innerHTML = `<span class="material-symbols-outlined animate-spin">progress_activity</span> Sending...`;
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = `<span class="material-symbols-outlined">check_circle</span> Message Sent`;
        btn.classList.replace('bg-primary', 'bg-secondary');
        form.reset();

        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.classList.replace('bg-secondary', 'bg-primary');
            btn.disabled = false;
        }, 3000);
    }, 1500);
});

// Input label focus effect
document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.querySelector('label').classList.replace('text-outline', 'text-secondary');
    });
    input.addEventListener('blur', () => {
        input.parentElement.querySelector('label').classList.replace('text-secondary', 'text-outline');
    });
});
