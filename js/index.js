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

const cardSwapContainer = document.querySelector('.card-swap-container');
const cardSwapItems = Array.from(document.querySelectorAll('.card-swap-item'));

if (cardSwapContainer && cardSwapItems.length) {
    const spacingX = 10;
    const spacingY = 10;
    const spacingZ = 18;
    const gaps = cardSwapItems.map((item, index) => ({
        x: index * spacingX,
        y: -index * spacingY,
        z: -index * spacingZ,
        zIndex: cardSwapItems.length - index
    }));
    let order = [...cardSwapItems];
    let intervalId;
    let swapTimeout;

    const applyPositions = () => {
        order.forEach((item, index) => {
            const slot = gaps[index];
            item.style.zIndex = slot.zIndex;
            item.style.transform = `translate(-50%, -50%) translate3d(${slot.x}px, ${slot.y}px, ${slot.z}px)`;
            item.style.opacity = index === 0 ? '1' : '1';
        });
    };

    const cycleCards = () => {
        if (order.length < 2) return;
        const first = order.shift();
        first.classList.add('card-exit');
        first.style.zIndex = '0';

        swapTimeout = window.setTimeout(() => {
            first.classList.remove('card-exit');
            order.push(first);
            applyPositions();
        }, 400);

        order.forEach((item, index) => {
            const slot = gaps[index];
            item.style.zIndex = slot.zIndex;
            item.style.transform = `translate(-50%, -50%) translate3d(${slot.x}px, ${slot.y}px, ${slot.z}px)`;
        });
    };

    applyPositions();
    intervalId = window.setInterval(cycleCards, 3200);
}
