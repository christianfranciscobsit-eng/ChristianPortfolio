import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CreativeShowcase from '../components/CreativeShowcase'

/* ── Video source — change this path to update the video ── */
const VIDEO_SRC = '/videos/showcase.mp4'

export default function Projects() {
  useEffect(() => {
    // Reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el))

    // Mouse parallax on project images
    const cards = document.querySelectorAll('.project-card')
    const handlers = []
    cards.forEach((card) => {
      const fn = (e) => {
        const { left, top, width, height } = card.getBoundingClientRect()
        const x = (e.clientX - left) / width
        const y = (e.clientY - top) / height
        const img = card.querySelector('.project-image')
        if (img) img.style.transformOrigin = `${x * 100}% ${y * 100}%`
      }
      card.addEventListener('mousemove', fn)
      handlers.push({ card, fn })
    })

    return () => {
      observer.disconnect()
      handlers.forEach(({ card, fn }) => card.removeEventListener('mousemove', fn))
    }
  }, [])

  return (
    <main className="pt-[120px] pb-section-gap">

      {/* Page Header */}
      <header className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg reveal-on-scroll active">
        <div className="max-w-3xl">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.2em] mb-stack-sm block">
            Selected Work
          </span>
          <h1 className="font-display-mobile md:font-display text-display-mobile md:text-display text-primary mb-stack-md">
            Curated Digital Experiences.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            A showcase of strategic design and technical precision. Exploring the intersection
            of high-end aesthetics and functional performance.
          </p>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-stack-lg">

        {/* Project 1 */}
        <article className="reveal-on-scroll group project-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-8 overflow-hidden rounded-xl bg-surface-container">
              <div
                className="project-image w-full aspect-[16/9] transition-transform duration-700 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/projects/AbbeWeb.jpeg')" }}
              />
            </div>
            <div className="md:col-span-4 flex flex-col justify-center">
              <div className="flex gap-stack-sm mb-4">
                <span className="bg-surface-variant px-3 py-1 rounded text-[10px] font-label-md text-on-surface-variant uppercase tracking-wider">Corporate</span>
                <span className="bg-surface-variant px-3 py-1 rounded text-[10px] font-label-md text-on-surface-variant uppercase tracking-wider">B2B IT solutions</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-sm">Abbe Website</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                ABBE Technology Solutions Inc. is a trusted solutions integrator in the
                Philippines, empowering organizations through innovative IT solutions.
              </p>
              <Link className="inline-flex items-center gap-2 font-label-md text-label-md text-primary group-hover:text-secondary transition-colors" to="/project/abbe">
                VIEW CASE STUDY <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </Link>
            </div>
          </div>
        </article>

        {/* Project 2 */}
        <article className="reveal-on-scroll group project-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-4 order-2 md:order-1 flex flex-col justify-center">
              <div className="flex gap-stack-sm mb-4">
                <span className="bg-surface-variant px-3 py-1 rounded text-[10px] font-label-md text-on-surface-variant uppercase tracking-wider">Integrated Management System</span>
                <span className="bg-surface-variant px-3 py-1 rounded text-[10px] font-label-md text-on-surface-variant uppercase tracking-wider">Cloud-based</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-sm">ABR Capstone Project</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                A culminating academic project demonstrating full-stack development,
                research methodology, and system design skills.
              </p>
              <Link className="inline-flex items-center gap-2 font-label-md text-label-md text-primary group-hover:text-secondary transition-colors" to="/project/abr">
                VIEW CASE STUDY <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </Link>
            </div>
            <div className="md:col-span-8 order-1 md:order-2 overflow-hidden rounded-xl bg-surface-container">
              <div
                className="project-image w-full aspect-[16/9] transition-transform duration-700 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/projects/ABRDiagnostic.jpeg')" }}
              />
            </div>
          </div>
        </article>

        {/* Project 3: Full Width */}
        <article className="reveal-on-scroll group project-card relative overflow-hidden rounded-xl h-[600px] flex items-end p-margin-mobile md:p-margin-desktop">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center project-image transition-transform duration-1000"
            style={{ backgroundImage: "url('/images/projects/Portfolioo.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
          <div className="relative z-20 max-w-2xl">
            <div className="flex gap-stack-sm mb-4">
              <span className="bg-secondary/90 text-on-primary px-3 py-1 rounded text-[10px] font-label-md uppercase tracking-wider">Web Design</span>
              <span className="bg-secondary/90 text-on-primary px-3 py-1 rounded text-[10px] font-label-md uppercase tracking-wider">Personal</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-primary mb-stack-sm">Portfolio</h2>
            <p className="font-body-lg text-body-lg text-surface-container-high mb-8">
              A personal portfolio website designed and built from scratch. Clean, minimal,
              and fully responsive — a direct reflection of my design philosophy.
            </p>
            <Link to="/project/portfolio" className="inline-block bg-on-primary text-primary px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-secondary hover:text-on-primary transition-all duration-300">
              EXPLORE PROJECT
            </Link>
          </div>
        </article>

      </section>

      {/* ===== CREATIVE SHOWCASE ===== */}
      <CreativeShowcase videoSrc={VIDEO_SRC} />

    </main>
  )
}
