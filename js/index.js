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

const rotatingTitle = document.getElementById('hero-rotating-title');
if (rotatingTitle) {
    const titles = ['GRAPHIC DESIGN', 'UI/UX DESIGN', 'TECH SUPPORT', 'VIDEO EDITOR'];
    let currentIndex = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingDelay = 80;
    let pauseDelay = 1200;

    const typeText = () => {
        const currentText = titles[currentIndex];

        if (isDeleting) {
            currentChar -= 1;
            rotatingTitle.textContent = currentText.slice(0, currentChar);
        } else {
            currentChar += 1;
            rotatingTitle.textContent = currentText.slice(0, currentChar);
        }

        if (!isDeleting && currentChar === currentText.length) {
            isDeleting = true;
            setTimeout(typeText, pauseDelay);
            return;
        }

        if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % titles.length;
            setTimeout(typeText, typingDelay);
            return;
        }

        setTimeout(typeText, isDeleting ? typingDelay / 2 : typingDelay);
    };

    typeText();
}

const heroGridCanvas = document.getElementById('hero-shape-grid');
if (heroGridCanvas && heroGridCanvas.getContext) {
    const canvas = heroGridCanvas;
    const ctx = canvas.getContext('2d');
    const direction = 'right';
    const squareSize = 42;
    const speed = 0.75;
    const borderColor = '#999';
    const hoverFillColor = 'rgba(224,42,47,0.22)';
    const hoverTrailAmount = 4;
    const shape = 'square';
    const isHex = shape === 'hexagon';
    const isTri = shape === 'triangle';
    const hexHoriz = squareSize * 1.5;
    const hexVert = squareSize * Math.sqrt(3);

    const gridOffset = { x: 0, y: 0 };
    let hoveredSquare = null;
    const trailCells = [];
    const cellOpacities = new Map();
    let requestRef = null;

    const resizeCanvas = () => {
        const rect = canvas.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        canvas.width = rect.width;
        canvas.height = rect.height;
    };

    const drawHex = (cx, cy, size) => {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const vx = cx + size * Math.cos(angle);
            const vy = cy + size * Math.sin(angle);
            if (i === 0) ctx.moveTo(vx, vy);
            else ctx.lineTo(vx, vy);
        }
        ctx.closePath();
    };

    const drawCircle = (cx, cy, size) => {
        ctx.beginPath();
        ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
        ctx.closePath();
    };

    const drawTriangle = (cx, cy, size, flip) => {
        ctx.beginPath();
        if (flip) {
            ctx.moveTo(cx, cy + size / 2);
            ctx.lineTo(cx + size / 2, cy - size / 2);
            ctx.lineTo(cx - size / 2, cy - size / 2);
        } else {
            ctx.moveTo(cx, cy - size / 2);
            ctx.lineTo(cx + size / 2, cy + size / 2);
            ctx.lineTo(cx - size / 2, cy + size / 2);
        }
        ctx.closePath();
    };

    const drawGrid = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (isHex) {
            const colShift = Math.floor(gridOffset.x / hexHoriz);
            const offsetX = ((gridOffset.x % hexHoriz) + hexHoriz) % hexHoriz;
            const offsetY = ((gridOffset.y % hexVert) + hexVert) % hexVert;
            const cols = Math.ceil(canvas.width / hexHoriz) + 3;
            const rows = Math.ceil(canvas.height / hexVert) + 3;

            for (let col = -2; col < cols; col++) {
                for (let row = -2; row < rows; row++) {
                    const cx = col * hexHoriz + offsetX;
                    const cy = row * hexVert + ((col + colShift) % 2 !== 0 ? hexVert / 2 : 0) + offsetY;
                    const cellKey = `${col},${row}`;
                    const alpha = cellOpacities.get(cellKey);
                    if (alpha) {
                        ctx.globalAlpha = alpha;
                        drawHex(cx, cy, squareSize);
                        ctx.fillStyle = hoverFillColor;
                        ctx.fill();
                        ctx.globalAlpha = 1;
                    }
                    drawHex(cx, cy, squareSize);
                    ctx.strokeStyle = borderColor;
                    ctx.stroke();
                }
            }
        } else if (isTri) {
            const halfW = squareSize / 2;
            const colShift = Math.floor(gridOffset.x / halfW);
            const rowShift = Math.floor(gridOffset.y / squareSize);
            const offsetX = ((gridOffset.x % halfW) + halfW) % halfW;
            const offsetY = ((gridOffset.y % squareSize) + squareSize) % squareSize;
            const cols = Math.ceil(canvas.width / halfW) + 4;
            const rows = Math.ceil(canvas.height / squareSize) + 4;

            for (let col = -2; col < cols; col++) {
                for (let row = -2; row < rows; row++) {
                    const cx = col * halfW + offsetX;
                    const cy = row * squareSize + squareSize / 2 + offsetY;
                    const flip = ((col + colShift + row + rowShift) % 2 + 2) % 2 !== 0;
                    const cellKey = `${col},${row}`;
                    const alpha = cellOpacities.get(cellKey);
                    if (alpha) {
                        ctx.globalAlpha = alpha;
                        drawTriangle(cx, cy, squareSize, flip);
                        ctx.fillStyle = hoverFillColor;
                        ctx.fill();
                        ctx.globalAlpha = 1;
                    }
                    drawTriangle(cx, cy, squareSize, flip);
                    ctx.strokeStyle = borderColor;
                    ctx.stroke();
                }
            }
        } else if (shape === 'circle') {
            const offsetX = ((gridOffset.x % squareSize) + squareSize) % squareSize;
            const offsetY = ((gridOffset.y % squareSize) + squareSize) % squareSize;
            const cols = Math.ceil(canvas.width / squareSize) + 3;
            const rows = Math.ceil(canvas.height / squareSize) + 3;

            for (let col = -2; col < cols; col++) {
                for (let row = -2; row < rows; row++) {
                    const cx = col * squareSize + squareSize / 2 + offsetX;
                    const cy = row * squareSize + squareSize / 2 + offsetY;
                    const cellKey = `${col},${row}`;
                    const alpha = cellOpacities.get(cellKey);
                    if (alpha) {
                        ctx.globalAlpha = alpha;
                        drawCircle(cx, cy, squareSize);
                        ctx.fillStyle = hoverFillColor;
                        ctx.fill();
                        ctx.globalAlpha = 1;
                    }
                    drawCircle(cx, cy, squareSize);
                    ctx.strokeStyle = borderColor;
                    ctx.stroke();
                }
            }
        } else {
            const offsetX = ((gridOffset.x % squareSize) + squareSize) % squareSize;
            const offsetY = ((gridOffset.y % squareSize) + squareSize) % squareSize;
            const cols = Math.ceil(canvas.width / squareSize) + 3;
            const rows = Math.ceil(canvas.height / squareSize) + 3;

            for (let col = -2; col < cols; col++) {
                for (let row = -2; row < rows; row++) {
                    const sx = col * squareSize + offsetX;
                    const sy = row * squareSize + offsetY;
                    const cellKey = `${col},${row}`;
                    const alpha = cellOpacities.get(cellKey);
                    if (alpha) {
                        ctx.globalAlpha = alpha;
                        ctx.fillStyle = hoverFillColor;
                        ctx.fillRect(sx, sy, squareSize, squareSize);
                        ctx.globalAlpha = 1;
                    }
                    ctx.strokeStyle = borderColor;
                    ctx.strokeRect(sx, sy, squareSize, squareSize);
                }
            }
        }

        const gradient = ctx.createRadialGradient(
            canvas.width / 2,
            canvas.height / 2,
            0,
            canvas.width / 2,
            canvas.height / 2,
            Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
        );
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.05)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateCellOpacities = () => {
        const targets = new Map();
        if (hoveredSquare) {
            targets.set(`${hoveredSquare.x},${hoveredSquare.y}`, 1);
        }
        if (hoverTrailAmount > 0) {
            for (let i = 0; i < trailCells.length; i++) {
                const t = trailCells[i];
                const key = `${t.x},${t.y}`;
                if (!targets.has(key)) {
                    targets.set(key, (trailCells.length - i) / (trailCells.length + 1));
                }
            }
        }
        for (const [key] of targets) {
            if (!cellOpacities.has(key)) {
                cellOpacities.set(key, 0);
            }
        }
        for (const [key, opacity] of cellOpacities) {
            const target = targets.get(key) || 0;
            const next = opacity + (target - opacity) * 0.15;
            if (next < 0.005) {
                cellOpacities.delete(key);
            } else {
                cellOpacities.set(key, next);
            }
        }
    };

    const handleMouseMove = event => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        if (isHex) {
            const colShift = Math.floor(gridOffset.x / hexHoriz);
            const offsetX = ((gridOffset.x % hexHoriz) + hexHoriz) % hexHoriz;
            const offsetY = ((gridOffset.y % hexVert) + hexVert) % hexVert;
            const adjustedX = mouseX - offsetX;
            const adjustedY = mouseY - offsetY;
            const col = Math.round(adjustedX / hexHoriz);
            const rowOffset = (col + colShift) % 2 !== 0 ? hexVert / 2 : 0;
            const row = Math.round((adjustedY - rowOffset) / hexVert);
            if (!hoveredSquare || hoveredSquare.x !== col || hoveredSquare.y !== row) {
                if (hoveredSquare && hoverTrailAmount > 0) {
                    trailCells.unshift({ ...hoveredSquare });
                    if (trailCells.length > hoverTrailAmount) trailCells.length = hoverTrailAmount;
                }
                hoveredSquare = { x: col, y: row };
            }
        } else if (isTri) {
            const halfW = squareSize / 2;
            const offsetX = ((gridOffset.x % halfW) + halfW) % halfW;
            const offsetY = ((gridOffset.y % squareSize) + squareSize) % squareSize;
            const adjustedX = mouseX - offsetX;
            const adjustedY = mouseY - offsetY;
            const col = Math.round(adjustedX / halfW);
            const row = Math.floor(adjustedY / squareSize);
            if (!hoveredSquare || hoveredSquare.x !== col || hoveredSquare.y !== row) {
                if (hoveredSquare && hoverTrailAmount > 0) {
                    trailCells.unshift({ ...hoveredSquare });
                    if (trailCells.length > hoverTrailAmount) trailCells.length = hoverTrailAmount;
                }
                hoveredSquare = { x: col, y: row };
            }
        } else {
            const offsetX = ((gridOffset.x % squareSize) + squareSize) % squareSize;
            const offsetY = ((gridOffset.y % squareSize) + squareSize) % squareSize;
            const adjustedX = mouseX - offsetX;
            const adjustedY = mouseY - offsetY;
            const col = Math.floor(adjustedX / squareSize);
            const row = Math.floor(adjustedY / squareSize);
            if (!hoveredSquare || hoveredSquare.x !== col || hoveredSquare.y !== row) {
                if (hoveredSquare && hoverTrailAmount > 0) {
                    trailCells.unshift({ ...hoveredSquare });
                    if (trailCells.length > hoverTrailAmount) trailCells.length = hoverTrailAmount;
                }
                hoveredSquare = { x: col, y: row };
            }
        }
    };

    const handleMouseLeave = () => {
        if (hoveredSquare && hoverTrailAmount > 0) {
            trailCells.unshift({ ...hoveredSquare });
            if (trailCells.length > hoverTrailAmount) trailCells.length = hoverTrailAmount;
        }
        hoveredSquare = null;
    };

    const updateAnimation = () => {
        const effectiveSpeed = Math.max(speed, 0.1);
        const wrapX = isHex ? hexHoriz * 2 : squareSize;
        const wrapY = isHex ? hexVert : isTri ? squareSize * 2 : squareSize;

        switch (direction) {
            case 'right':
                gridOffset.x = (gridOffset.x - effectiveSpeed + wrapX) % wrapX;
                break;
            case 'left':
                gridOffset.x = (gridOffset.x + effectiveSpeed + wrapX) % wrapX;
                break;
            case 'up':
                gridOffset.y = (gridOffset.y + effectiveSpeed + wrapY) % wrapY;
                break;
            case 'down':
                gridOffset.y = (gridOffset.y - effectiveSpeed + wrapY) % wrapY;
                break;
            case 'diagonal':
                gridOffset.x = (gridOffset.x - effectiveSpeed + wrapX) % wrapX;
                gridOffset.y = (gridOffset.y - effectiveSpeed + wrapY) % wrapY;
                break;
            default:
                break;
        }

        updateCellOpacities();
        drawGrid();
        requestRef = requestAnimationFrame(updateAnimation);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    requestRef = requestAnimationFrame(updateAnimation);
}
