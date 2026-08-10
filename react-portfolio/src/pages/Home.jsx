import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

/* ── Typing effect ── */
function useTypingEffect(elementRef) {
  useEffect(() => {
    const el = elementRef.current
    if (!el) return
    const titles = ['GRAPHIC DESIGN', 'UI/UX DESIGN', 'TECH SUPPORT', 'VIDEO EDITOR']
    let idx = 0, charIdx = 0, deleting = false
    let timerId

    const type = () => {
      const current = titles[idx]
      if (deleting) {
        charIdx -= 1
        el.textContent = current.slice(0, charIdx)
      } else {
        charIdx += 1
        el.textContent = current.slice(0, charIdx)
      }

      if (!deleting && charIdx === current.length) {
        deleting = true
        timerId = setTimeout(type, 1200)
        return
      }
      if (deleting && charIdx === 0) {
        deleting = false
        idx = (idx + 1) % titles.length
        timerId = setTimeout(type, 80)
        return
      }
      timerId = setTimeout(type, deleting ? 40 : 80)
    }
    timerId = setTimeout(type, 400)
    return () => clearTimeout(timerId)
  }, [elementRef])
}

/* ── Canvas grid — fixed 1440×520 artboard, never resizes ── */
function useCanvasGrid(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !canvas.getContext) return
    const ctx = canvas.getContext('2d')

    // Fixed artboard dimensions — never change
    const W = 1440
    const H = 520
    canvas.width = W
    canvas.height = H

    const squareSize = 42
    const speed = 0.75
    const borderColor = '#bbb'
    const hoverFillColor = 'rgba(224,42,47,0.22)'
    const hoverTrailAmount = 4
    const gridOffset = { x: 0, y: 0 }
    let hoveredSquare = null
    const trailCells = []
    const cellOpacities = new Map()
    let rafId

    const drawGrid = () => {
      ctx.clearRect(0, 0, W, H)
      const offsetX = ((gridOffset.x % squareSize) + squareSize) % squareSize
      const offsetY = ((gridOffset.y % squareSize) + squareSize) % squareSize
      const cols = Math.ceil(W / squareSize) + 3
      const rows = Math.ceil(H / squareSize) + 3

      for (let col = -2; col < cols; col++) {
        for (let row = -2; row < rows; row++) {
          const sx = col * squareSize + offsetX
          const sy = row * squareSize + offsetY
          const alpha = cellOpacities.get(`${col},${row}`)
          if (alpha) {
            ctx.globalAlpha = alpha
            ctx.fillStyle = hoverFillColor
            ctx.fillRect(sx, sy, squareSize, squareSize)
            ctx.globalAlpha = 1
          }
          ctx.strokeStyle = borderColor
          ctx.strokeRect(sx, sy, squareSize, squareSize)
        }
      }

      const g = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.sqrt(W ** 2 + H ** 2) / 2)
      g.addColorStop(0, 'rgba(0,0,0,0)')
      g.addColorStop(1, 'rgba(0,0,0,0.04)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, W, H)
    }

    const updateOpacities = () => {
      const targets = new Map()
      if (hoveredSquare) targets.set(`${hoveredSquare.x},${hoveredSquare.y}`, 1)
      trailCells.forEach((t, i) => {
        const key = `${t.x},${t.y}`
        if (!targets.has(key)) targets.set(key, (trailCells.length - i) / (trailCells.length + 1))
      })
      targets.forEach((_, key) => { if (!cellOpacities.has(key)) cellOpacities.set(key, 0) })
      cellOpacities.forEach((opacity, key) => {
        const target = targets.get(key) || 0
        const next = opacity + (target - opacity) * 0.15
        if (next < 0.005) cellOpacities.delete(key)
        else cellOpacities.set(key, next)
      })
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      // Map screen coords back to canvas coords (canvas is CSS 1440px wide)
      const scaleX = W / rect.width
      const scaleY = H / rect.height
      const offsetX = ((gridOffset.x % squareSize) + squareSize) % squareSize
      const offsetY = ((gridOffset.y % squareSize) + squareSize) % squareSize
      const col = Math.floor(((e.clientX - rect.left) * scaleX - offsetX) / squareSize)
      const row = Math.floor(((e.clientY - rect.top) * scaleY - offsetY) / squareSize)
      if (!hoveredSquare || hoveredSquare.x !== col || hoveredSquare.y !== row) {
        if (hoveredSquare) { trailCells.unshift({ ...hoveredSquare }); if (trailCells.length > hoverTrailAmount) trailCells.length = hoverTrailAmount }
        hoveredSquare = { x: col, y: row }
      }
    }

    const handleMouseLeave = () => {
      if (hoveredSquare) { trailCells.unshift({ ...hoveredSquare }); if (trailCells.length > hoverTrailAmount) trailCells.length = hoverTrailAmount }
      hoveredSquare = null
    }

    const animate = () => {
      gridOffset.x = (gridOffset.x - speed + squareSize) % squareSize
      updateOpacities()
      drawGrid()
      rafId = requestAnimationFrame(animate)
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    rafId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafId)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [canvasRef])
}

export default function Home() {
  const rotatingTitleRef = useRef(null)
  const canvasRef = useRef(null)

  useTypingEffect(rotatingTitleRef)
  useCanvasGrid(canvasRef)
  useRevealOnScroll('.reveal-home')

  return (
    <main style={{ paddingTop: '64px' }}>

      {/* ===== HERO SECTION — fixed 1440×520 artboard, never scales ===== */}
      {/*
        Outer wrapper: full viewport width, clips anything outside the artboard.
        Height is locked to 520px — the artboard height.
      */}
      <div style={{ width: '100%', height: '520px', overflow: 'hidden', position: 'relative', backgroundColor: '#f9f9f9' }}>

        {/*
          Inner artboard: always 1440px wide, 520px tall.
          Centered horizontally. If viewport < 1440px, it overflows and gets clipped.
        */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1440px',
          height: '520px',
          overflow: 'hidden',
        }}>

          {/* Canvas grid background */}
          <canvas
            ref={canvasRef}
            id="hero-shape-grid"
            style={{
              position: 'absolute',
              inset: 0,
              width: '1440px',
              height: '520px',
              zIndex: 0,
            }}
          />

          {/* BG subtitle — "I AM PROFESSIONAL" */}
          <div style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            right: 0,
            textAlign: 'center',
            zIndex: 1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}>
            <div
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: '140px',
                lineHeight: 1,
                color: 'rgba(86,88,88,0.18)',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                letterSpacing: '0.02em',
              }}
            >
              I AM PROFESSIONAL
            </div>
          </div>

          {/* BG title — rotating typed word */}
          <div style={{
            position: 'absolute',
            top: '195px',
            left: 0,
            right: 0,
            textAlign: 'center',
            zIndex: 1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}>
            <div
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: '180px',
                lineHeight: 1,
                color: 'rgba(224,42,47,0.92)',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                textShadow: '0 10px 24px rgba(224,42,47,0.18)',
              }}
            >
              <span ref={rotatingTitleRef} className="hero-rotating-title">GRAPHIC DESIGN</span>
              <span className="hero-cursor" style={{ color: '#af101a' }}>|</span>
            </div>
          </div>

          {/* Character image — fixed position, only Y adjusted, never scaled */}
          <div style={{
            position: 'absolute',
            top: '60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '480px',
            zIndex: 3,
            pointerEvents: 'none',
          }}>
            <img
              alt="Character"
              src="/images/projects/12121.png"
              style={{
                width: '480px',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>

          {/* Ticker ribbon — diagonal red banner */}
          <div style={{
            position: 'absolute',
            bottom: '52px',
            left: '-120px',
            right: '-120px',
            transform: 'rotate(-4deg)',
            backgroundColor: 'rgba(224,42,47,0.92)',
            borderTop: '2px solid rgba(175,16,26,0.5)',
            borderBottom: '2px solid rgba(175,16,26,0.5)',
            padding: '14px 0',
            overflow: 'hidden',
            zIndex: 4,
            boxShadow: '0 20px 60px rgba(224,42,47,0.15)',
          }}>
            <div className="ticker-animation" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
              {/* First set */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '48px', paddingLeft: '24px', paddingRight: '24px', flexShrink: 0 }}>
                {['Graphic Design', 'UI/UX Design', 'Tech Support', 'Video Editing', 'Graphic Designer', 'UI/UX Designer', 'Tech Support', 'Video Editor'].map((item) => (
                  <span key={item} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '28px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {item}
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '20px', color: '#fff' }}>star</span>
                  </span>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '48px', paddingLeft: '24px', paddingRight: '24px', flexShrink: 0 }}>
                {['Graphic Design', 'UI/UX Design', 'Tech Support', 'Video Editing', 'Graphic Designer', 'UI/UX Designer', 'Tech Support', 'Video Editor'].map((item) => (
                  <span key={`dup-${item}`} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '28px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {item}
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '20px', color: '#fff' }}>star</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>{/* end artboard */}
      </div>{/* end outer clip wrapper */}
      {/* ===== END HERO SECTION ===== */}

      {/* ===== PHILOSOPHY SECTION ===== */}
      <section className="bg-surface-container-low py-stack-lg mb-section-gap">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-12 gap-gutter items-start">
          <div className="col-span-12 md:col-span-4">
            <h2 className="font-headline-lg text-headline-lg sticky top-32">The <br />Philosophy</h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-stack-lg">
            <div className="border-l-2 border-secondary pl-stack-md">
              <p className="font-body-lg text-body-lg leading-relaxed text-on-surface">
                Design is not a decorative layer; it is the fundamental architecture of trust.
                In a world saturated with digital noise, Christian Francisco focuses on{' '}
                <span className="font-bold">subtraction</span>. By removing the non-essential,
                I amplify the core value of your product.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg pt-stack-md">
              <div>
                <h3 className="font-headline-md text-headline-md mb-stack-sm text-primary">Strategic Rigor</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Every pixel serves a business objective. I leverage data-driven insights to ensure
                  aesthetic choices translate to measurable performance and user retention.
                </p>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-stack-sm text-primary">Creative Edge</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Functional doesn't have to mean boring. I inject high-end motion and sophisticated
                  typography into every project to create a lasting emotional resonance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY SECTION ===== */}
      <section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap">
        <div className="flex justify-between items-end mb-stack-lg">
          <div>
            <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">Visual Curations</span>
            <h2 className="font-headline-lg text-headline-lg">Selected Works &amp; Moments</h2>
          </div>
          <div className="hidden md:block">
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs text-right">
              A collection of architectural inspirations and recent interface explorations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[300px]">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/images/projects/Jihyoh.jpg" alt="Pen Tool Portrait" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-stack-md">
              <span className="text-white font-label-md">01. VECTOR ART</span>
              <h4 className="text-white font-headline-md">Pen Tool Portrait</h4>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/images/projects/Gez.png" alt="Gallery 2" />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/images/projects/Jhia.png" alt="Gallery 3" />
          </div>
          <div className="md:row-span-2 relative group overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/images/projects/VJ.png" alt="Gallery 4" />
          </div>
          <div className="md:col-span-2 relative group overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/images/projects/1.jpeg" alt="Gallery 5" />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/images/projects/Yarn.png" alt="Gallery 6" />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/images/projects/Lisa.png" alt="Gallery 7" />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/images/projects/AJ.png" alt="Gallery 8" />
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap">
        <div className="bg-primary text-on-primary rounded-xl p-stack-lg md:p-24 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-display-mobile md:text-display mb-stack-md leading-tight">
              Ready to elevate your digital presence?
            </h2>
            <p className="font-body-lg text-body-lg text-surface-variant mb-stack-lg">
              Currently accepting high-impact projects for Q3 and Q4 2024. Let's discuss your vision.
            </p>
            <Link
              className="inline-flex items-center gap-4 bg-secondary-container text-on-secondary-container px-10 py-5 rounded-lg font-bold text-headline-md hover:scale-105 transition-transform"
              to="/contact"
            >
              Get in touch
              <span className="material-symbols-outlined">mail</span>
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-secondary to-transparent"></div>
          </div>
        </div>
      </section>

    </main>
  )
}
