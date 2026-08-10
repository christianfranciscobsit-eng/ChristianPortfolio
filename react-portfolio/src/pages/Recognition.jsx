import { useEffect, useRef } from 'react'

const awards = [
  { year: '2026', title: 'Candidate for Best In Capstone Awardee' },
  { year: '2025', title: 'Top Performer Awardee' },
  { year: '2024', title: '2nd Place Best in Logo' },
  { year: '2023', title: '2nd Placer 30-second CCS Promotional Video Contest' },
]

const certificates = [
  { img: '/images/projects/is.png', label: 'Candidate for Best In Capstone Awardee 2026', title: 'Cloud-Based Integrated Management System', aspect: 'aspect-[4/3]' },
  { img: '/images/projects/BestLogo.jpg', label: '2nd Place Best in Logo 2024', title: 'Binary Code', aspect: 'aspect-[4/3]' },
  { img: '/images/projects/i.jpg', label: 'Top Performer Awardee', title: 'Business Analytics', aspect: 'aspect-[4/3]' },
  { img: '/images/projects/an.jpg', label: '2nd Placer 30-second CCS Promotional Video Contest', title: 'Bakit ka nag IT sa GRC?', aspect: 'aspect-[3/4]' },
  { img: '/images/projects/r.png', label: 'Certificate for Appreciation', title: 'Breaking into Tech: AWS Fundamentals & Acing Technical Interviews', aspect: 'aspect-[4/3]' },
  { img: '/images/projects/t.png', label: 'Statement of Achievements', title: 'Python Essentials 2', aspect: 'aspect-[4/3]' },
  { img: '/images/projects/h.jpg', label: 'Statement of Achievements', title: 'SoloLearn', aspect: 'aspect-[4/3]' },
]

export default function Recognition() {
  const cardRef = useRef(null)
  const glowRef = useRef(null)

  /* 3D tilt + moving glow effect on the featured card */
  useEffect(() => {
    const card = cardRef.current
    const glow = glowRef.current
    if (!card) return

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      const rotateX = ((y - cy) / cy) * -8
      const rotateY = ((x - cx) / cx) * 8

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
      if (glow) {
        glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,215,0,0.22) 0%, transparent 65%)`
      }
    }

    const handleLeave = () => {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
      if (glow) glow.style.background = 'transparent'
    }

    card.addEventListener('mousemove', handleMove)
    card.addEventListener('mouseleave', handleLeave)
    return () => {
      card.removeEventListener('mousemove', handleMove)
      card.removeEventListener('mouseleave', handleLeave)
    }
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('opacity-100')
            e.target.classList.remove('translate-y-10', 'opacity-0')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('section.observe-section').forEach((s) => {
      s.classList.add('transition-all', 'duration-700', 'translate-y-10', 'opacity-0')
      observer.observe(s)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <main className="pt-[120px] max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop overflow-hidden">
      <header className="py-section-gap flex flex-col items-start gap-stack-md max-w-4xl">
        <span className="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-stack-sm">Recognition</span>
        <h1 className="font-display text-display-mobile md:text-display text-primary leading-tight">
          Recognized work that stands out for clarity, craft, and impact.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-stack-md">
          Honors and awards that speak to quality, innovation, and the meaningful execution of digital experiences.
        </p>
      </header>

      {/* ===== FEATURED RECOGNITION CARD ===== */}
      <section className="mb-section-gap observe-section">
        <div className="flex flex-col items-center">

          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-secondary inline-block" />
            <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.25em]">
              Cloud-Based Integrated Management System · Class of 2026
            </span>
            <span className="h-px w-12 bg-secondary inline-block" />
          </div>

          {/* 3D tilt card */}
          <div
            ref={cardRef}
            style={{
              position: 'relative',
              maxWidth: '860px',
              width: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(212,175,55,0.25)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              cursor: 'default',
            }}
          >
            {/* Moving glow overlay */}
            <div
              ref={glowRef}
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 2,
                pointerEvents: 'none',
                transition: 'background 0.1s ease',
                borderRadius: '20px',
              }}
            />

            {/* Gold shimmer border animation */}
            <div style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              borderRadius: '20px',
              padding: '2px',
              background: 'linear-gradient(135deg, rgba(212,175,55,0.8), rgba(255,255,255,0.2), rgba(212,175,55,0.8), rgba(180,140,20,0.6))',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'destination-out',
              maskComposite: 'exclude',
              animation: 'goldShimmer 3s linear infinite',
            }} />

            {/* The image itself */}
            <img
              src="/images/projects/Expertise.png"
              alt="Francisco, Christian M. — Candidate for Best in Capstone 2026"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                borderRadius: '20px',
                position: 'relative',
                zIndex: 0,
              }}
            />
          </div>

          {/* Caption */}
          <p className="font-label-md text-label-md text-on-surface-variant mt-6 text-center tracking-widest uppercase">
            Bachelor of Science in Information Technology · Global Reciprocal Colleges
          </p>

        </div>
      </section>
      {/* ===== END FEATURED RECOGNITION CARD ===== */}

      {/* Awards list */}
      <section className="space-y-0 mb-section-gap observe-section">
        {awards.map(({ year, title }) => (
          <div key={title} className="group flex flex-col md:flex-row items-start md:items-center justify-between py-stack-md border-b border-outline-variant hover:bg-surface-container-low transition-colors px-4 -mx-4 cursor-default">
            <div className="flex items-center gap-stack-md mb-stack-sm md:mb-0">
              <span className="font-label-md text-label-md text-on-surface-variant w-12">{year}</span>
              <h4 className="font-headline-md text-headline-md group-hover:translate-x-2 transition-transform duration-300">{title}</h4>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-gutter">
              <span className="font-body-md text-on-surface-variant">Awardee</span>
              <span className="material-symbols-outlined text-secondary hidden md:block">north_east</span>
            </div>
          </div>
        ))}
      </section>

      {/* Feature cards */}
      <section className="mb-section-gap observe-section">
        <div className="flex flex-wrap gap-stack-md">
          <div className="flex-1 bg-surface-container p-8 rounded-3xl border border-outline-variant">
            <h3 className="font-headline-md text-headline-md mb-stack-sm">Featured Recognition</h3>
            <p className="text-on-surface-variant font-body-md">Selected awards and nominations that reflect design excellence, strategic execution, and product quality.</p>
          </div>
          <div className="flex-1 bg-surface-container-high p-8 rounded-3xl border border-outline-variant">
            <h3 className="font-headline-md text-headline-md mb-stack-sm">Media &amp; Mentions</h3>
            <p className="text-on-surface-variant font-body-md">Mentions in design editorials and digital product showcases highlighting thoughtful user experience work.</p>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="mb-section-gap observe-section">
        <div className="flex flex-col md:flex-row justify-between items-start gap-gutter mb-stack-lg border-b border-outline-variant pb-stack-md">
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg">Certificates</h2>
          <p className="font-body-md text-on-surface-variant max-w-sm">A collection of professional certifications and specialized training completed to maintain technical excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {certificates.map(({ img, label, title, aspect }) => (
            <div key={title} className="group">
              <div className={`${aspect} overflow-hidden rounded-lg mb-stack-sm bg-surface-container`}>
                <img alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={img} />
              </div>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">{label}</p>
              <h4 className="font-headline-md text-headline-md">{title}</h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
