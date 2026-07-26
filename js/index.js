/* =============================================
   Home Page JS — Christian Francisco
   ============================================= */

// Micro-interactions for gallery hover effects
document.querySelectorAll('.group').forEach(item => {
    item.addEventListener('mousemove', e => {
        const img = item.querySelector('img');
        if (!img) return;
        const { left, top, width, height } = item.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        img.style.transform = `scale(1.15) translate(${x * 20}px, ${y * 20}px)`;
    });
    item.addEventListener('mouseleave', () => {
        const img = item.querySelector('img');
        if (img) img.style.transform = 'scale(1) translate(0,0)';
    });
});
