import { useEffect, useRef, useState } from 'react'

/* ─────────────────────────────────────────────
   Floating digital particle — tiny glowing dot
───────────────────────────────────────────── */
function Particle({ style }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        backgroundColor: '#006d35',
        boxShadow: '0 0 8px 2px rgba(0,109,53,0.7)',
        opacity: 0.7,
        animation: 'floatParticle 4s ease-in-out infinite',
        ...style,
      }}
    />
  )
}

/* ─────────────────────────────────────────────
   Binary digit that fades in/out
───────────────────────────────────────────── */
function BinaryChar({ char, style }) {
  return (
    <span
      style={{
        position: 'absolute',
        fontFamily: 'monospace',
        fontSize: '11px',
        color: 'rgba(0,109,53,0.35)',
        animation: 'binaryFade 3s ease-in-out infinite',
        userSelect: 'none',
        pointerEvents: 'none',
        ...style,
      }}
    >
      {char}
    </span>
  )
}

/* ─────────────────────────────────────────────
   Main component
   Props: videoSrc — easy to replace
───────────────────────────────────────────── */
export default function CreativeShowcase({ videoSrc }) {
  const sectionRef = useRef(null)
  const videoWrapRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  /* Intersection observer — triggers entrance animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  /* Fixed particle positions — deterministic so no hydration mismatch */
  const particles = [
    { top: '12%', left: '6%',  animationDelay: '0s'   },
    { top: '30%', left: '3%',  animationDelay: '0.8s' },
    { top: '60%', left: '8%',  animationDelay: '1.6s' },
    { top: '80%', left: '4%',  animationDelay: '0.4s' },
    { top: '10%', right: '7%', animationDelay: '1.2s' },
    { top: '40%', right: '4%', animationDelay: '0s'   },
    { top: '70%', right: '9%', animationDelay: '2s'   },
    { top: '88%', right: '5%', animationDelay: '1s'   },
  ]

  const binaryChars = [
    { char: '1', top: '8%',  left: '12%', animationDelay: '0s'   },
    { char: '0', top: '20%', left: '9%',  animationDelay: '1s'   },
    { char: '1', top: '45%', left: '5%',  animationDelay: '2s'   },
    { char: '0', top: '65%', left: '11%', animationDelay: '0.5s' },
    { char: '1', top: '85%', left: '7%',  animationDelay: '1.5s' },
    { char: '0', top: '15%', right: '10%', animationDelay: '0.3s' },
    { char: '1', top: '35%', right: '6%',  animationDelay: '1.3s' },
    { char: '0', top: '58%', right: '12%', animationDelay: '0.9s' },
    { char: '1', top: '78%', right: '8%',  animationDelay: '1.8s' },
  ]

  return (
    <>
      {/* ── Keyframe styles injected once ── */}
      <style>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) scale(1);   opacity: 0.7; }
          50%       { transform: translateY(-14px) scale(1.3); opacity: 1;   }
        }
        @keyframes binaryFade {
          0%, 100% { opacity: 0.15; }
          50%       { opacity: 0.55; }
        }
        @keyframes scanLine {
          0%   { transform: translateY(-100%); opacity: 0.6; }
          100% { transform: translateY(1200%); opacity: 0;   }
        }
        @keyframes rotateBorder {
          0%   { transform: rotate(0deg);   }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 0.9; }
        }
        .showcase-section-enter {
          opacity: 0;
          transform: translateY(24px);
        }
        .showcase-section-visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .showcase-heading-enter {
          opacity: 0;
          transform: translateY(16px);
        }
        .showcase-heading-visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s;
        }
        .showcase-video-enter {
          opacity: 0;
          transform: translateY(32px);
        }
        .showcase-video-visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s;
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`showcase-section-enter ${visible ? 'showcase-section-visible' : ''}`}
        style={{
          position: 'relative',
          padding: '100px 64px',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #f6faff 0%, #eef6f0 40%, #f6faff 100%)',
        }}
      >
        {/* ── Ambient background glow blobs ── */}
        <div style={{
          position: 'absolute', top: '10%', left: '50%',
          transform: 'translateX(-50%)',
          width: '600px', height: '300px',
          background: 'radial-gradient(ellipse, rgba(0,109,53,0.07) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', left: '20%',
          width: '400px', height: '200px',
          background: 'radial-gradient(ellipse, rgba(0,109,53,0.05) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* ── Subtle dot grid background ── */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(0,109,53,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.5,
        }} />

        {/* ── Floating particles ── */}
        {particles.map((p, i) => (
          <Particle key={i} style={p} />
        ))}

        {/* ── Binary characters ── */}
        {binaryChars.map((b, i) => (
          <BinaryChar key={i} char={b.char} style={{
            top: b.top, left: b.left, right: b.right,
            animationDelay: b.animationDelay,
          }} />
        ))}

        {/* ── Thin horizontal scan line ── */}
        <div style={{
          position: 'absolute', left: 0, right: 0, top: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,109,53,0.4), transparent)',
          animation: 'scanLine 6s linear infinite',
          zIndex: 0, pointerEvents: 'none',
        }} />

        {/* ── Content ── */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>

          {/* Heading block */}
          <div
            className={`showcase-heading-enter ${visible ? 'showcase-heading-visible' : ''}`}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            {/* Animated badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'rgba(0,109,53,0.08)',
              border: '1px solid rgba(0,109,53,0.2)',
              borderRadius: '999px',
              padding: '6px 16px',
              marginBottom: '20px',
            }}>
              {/* Pulsing dot */}
              <span style={{
                display: 'inline-block', width: '8px', height: '8px',
                borderRadius: '50%', backgroundColor: '#006d35',
                animation: 'pulseGlow 1.8s ease-in-out infinite',
              }} />
              <span style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '11px', fontWeight: 700,
                color: '#006d35', letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}>
                Featured Motion
              </span>
            </div>

            <h2 style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '44px', fontWeight: 800,
              color: '#000', letterSpacing: '-0.03em',
              lineHeight: 1.1, margin: '0 0 12px',
            }}>
              Creative Showcase
            </h2>
            <p style={{
              fontFamily: 'Source Serif 4, serif',
              fontSize: '18px', color: '#45474a',
              margin: 0,
            }}>
              A glimpse of my creative work and digital identity.
            </p>

            {/* Decorative line */}
            <div style={{
              margin: '24px auto 0',
              width: '60px', height: '2px',
              background: 'linear-gradient(90deg, transparent, #006d35, transparent)',
            }} />
          </div>

          {/* Video container */}
          <div
            ref={videoWrapRef}
            className={`showcase-video-enter ${visible ? 'showcase-video-visible' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease',
              transform: hovered ? 'scale(1.015)' : 'scale(1)',
              boxShadow: hovered
                ? '0 0 0 1px rgba(0,109,53,0.35), 0 32px 80px rgba(0,109,53,0.2), 0 8px 32px rgba(0,0,0,0.12)'
                : '0 0 0 1px rgba(0,109,53,0.15), 0 20px 60px rgba(0,0,0,0.1)',
              background: '#000',
            }}
          >
            {/* Rotating gradient border ring (behind video) */}
            <div style={{
              position: 'absolute', inset: '-2px',
              borderRadius: '22px',
              background: 'conic-gradient(from 0deg, rgba(0,109,53,0.6), rgba(0,250,130,0.3), transparent, rgba(0,109,53,0.6))',
              animation: 'rotateBorder 4s linear infinite',
              zIndex: 0, pointerEvents: 'none',
              opacity: hovered ? 0.9 : 0.5,
              transition: 'opacity 0.4s ease',
            }} />

            {/* Glass frame over the border ring */}
            <div style={{
              position: 'absolute', inset: '2px',
              borderRadius: '18px',
              background: 'rgba(0,0,0,0.85)',
              zIndex: 1, pointerEvents: 'none',
            }} />

            {/* Corner accent lines */}
            {[
              { top: '12px', left: '12px', borderTop: '2px solid rgba(0,109,53,0.7)', borderLeft: '2px solid rgba(0,109,53,0.7)', borderRadius: '4px 0 0 0' },
              { top: '12px', right: '12px', borderTop: '2px solid rgba(0,109,53,0.7)', borderRight: '2px solid rgba(0,109,53,0.7)', borderRadius: '0 4px 0 0' },
              { bottom: '12px', left: '12px', borderBottom: '2px solid rgba(0,109,53,0.7)', borderLeft: '2px solid rgba(0,109,53,0.7)', borderRadius: '0 0 0 4px' },
              { bottom: '12px', right: '12px', borderBottom: '2px solid rgba(0,109,53,0.7)', borderRight: '2px solid rgba(0,109,53,0.7)', borderRadius: '0 0 4px 0' },
            ].map((s, i) => (
              <div key={i} style={{ position: 'absolute', width: '20px', height: '20px', zIndex: 3, pointerEvents: 'none', ...s }} />
            ))}

            {/* The video */}
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              controls
              aria-label="Creative Showcase — Brand Animation by Christian Francisco"
              style={{
                position: 'relative', zIndex: 2,
                display: 'block', width: '100%', height: 'auto',
                borderRadius: '18px',
              }}
            >
              Your browser does not support the video tag. Please upgrade to a modern browser to view this content.
            </video>
          </div>

          {/* Label below video */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <span style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '11px', fontWeight: 700,
              color: '#006d35', letterSpacing: '0.22em',
              textTransform: 'uppercase',
              opacity: 0.8,
            }}>
              Brand Animation · Creative Motion
            </span>
          </div>

        </div>
      </section>
    </>
  )
}
