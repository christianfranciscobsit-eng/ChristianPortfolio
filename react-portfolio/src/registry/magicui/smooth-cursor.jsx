import { useEffect, useRef } from 'react'

export function SmoothCursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const current = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) return

    const ring = ringRef.current
    const dot = dotRef.current
    const previousCursor = document.body.style.cursor

    document.body.style.cursor = 'none'
    if (ring) ring.style.opacity = '1'
    if (dot) dot.style.opacity = '1'

    const handlePointerMove = (event) => {
      mouse.current.x = event.clientX
      mouse.current.y = event.clientY
    }

    const handlePointerLeave = () => {
      if (ring) ring.style.opacity = '0'
      if (dot) dot.style.opacity = '0'
    }

    const handlePointerEnter = () => {
      if (ring) ring.style.opacity = '1'
      if (dot) dot.style.opacity = '1'
    }

    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.18
      current.current.y += (mouse.current.y - current.current.y) * 0.18

      if (ring) {
        ring.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`
      }

      if (dot) {
        dot.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('pointerenter', handlePointerEnter)

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('pointerenter', handlePointerEnter)
      document.body.style.cursor = previousCursor
      if (ring) ring.style.opacity = '0'
      if (dot) dot.style.opacity = '0'
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="smooth-cursor smooth-cursor__ring" aria-hidden="true" />
      <div ref={dotRef} className="smooth-cursor smooth-cursor__dot" aria-hidden="true" />
      <style>{`
        .smooth-cursor {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          opacity: 1;
          transition: opacity 0.2s ease;
          mix-blend-mode: difference;
        }

        .smooth-cursor__ring {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 0 26px rgba(224, 42, 47, 0.22);
        }

        .smooth-cursor__dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #e02a2f;
          box-shadow: 0 0 18px rgba(224, 42, 47, 0.8);
        }

        @media (pointer: coarse) {
          .smooth-cursor {
            display: none !important;
          }
        }

        a,
        button,
        img,
        .group,
        .home-gallery-card,
        .nav-link,
        .project-card {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}

export function SmoothCursorDemo() {
  return (
    <>
      <span className="hidden md:block">Move your mouse around</span>
      <span className="block md:hidden">SmoothCursor is disabled on touch devices</span>
      <SmoothCursor />
    </>
  )
}
