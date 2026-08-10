import { useEffect } from 'react'

const skillChipClass = 'skill-chip px-4 py-2 rounded-lg font-label-md text-label-md'

export default function Expertise() {
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
        <span className="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-stack-sm">Expertise</span>
        <h1 className="font-display text-display-mobile md:text-display text-primary leading-tight">
          Crafting digital experiences through{' '}
          <span className="italic font-body-lg font-light text-on-surface-variant">technical rigor</span> &amp; aesthetic clarity.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-stack-md">
          Bridging the gap between conceptual design and production-ready code. I specialize in building
          high-end interfaces that prioritize performance, accessibility, and visual storytelling.
        </p>
      </header>

      <section className="mb-section-gap observe-section">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 bg-surface-container p-10 flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-stack-md">auto_awesome</span>
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-stack-sm">Technical Support</h3>
              <p className="text-on-surface-variant font-body-md max-w-md">Providing expert technical assistance and troubleshooting to ensure seamless implementation and optimal performance.</p>
            </div>
            <div className="mt-stack-lg flex flex-wrap gap-stack-sm relative z-10">
              {['PC reformatting', 'Hardware Troubleshooting', 'Software Installation', 'Network Configuration', 'Data Recovery'].map(s => <span key={s} className={skillChipClass}>{s}</span>)}
            </div>
          </div>

          <div className="md:col-span-4 bg-primary text-on-primary p-10 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-stack-md">terminal</span>
              <h3 className="font-headline-md text-headline-md mb-stack-sm">UI-UX &amp; Graphic Design</h3>
              <p className="text-on-primary-container font-body-md">Designing intuitive user interfaces and visually engaging graphics that enhance user experience.</p>
            </div>
            <div className="mt-stack-lg flex flex-wrap gap-stack-sm">
              {['Figma', 'Sketch', 'JustInMind', 'Photoshop', 'Illustrator', 'Canva'].map(s => (
                <span key={s} className="bg-white/10 px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-colors">{s}</span>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 bg-surface-container-high p-10 flex flex-col justify-between group overflow-hidden">
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-stack-md">animation</span>
              <h3 className="font-headline-md text-headline-md mb-stack-sm">Microsoft Office</h3>
              <p className="text-on-surface-variant font-body-md">Proficient in utilizing Microsoft Office suite for creating professional documents, presentations, and spreadsheets.</p>
            </div>
            <div className="mt-stack-lg flex flex-wrap gap-stack-sm">
              {['Word', 'Excel', 'PowerPoint'].map(s => <span key={s} className={skillChipClass}>{s}</span>)}
            </div>
          </div>

          <div className="md:col-span-7 border border-outline-variant p-10 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-stack-md">insights</span>
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-stack-sm">Video Editing</h3>
              <p className="text-on-surface-variant font-body-md max-w-lg">Creating and editing high-quality videos with smooth transitions, motion graphics, and engaging visual content.</p>
            </div>
            <div className="mt-stack-lg flex flex-wrap gap-stack-sm">
              {['CapCut', 'Canva', 'Adobe Premiere'].map(s => <span key={s} className={skillChipClass}>{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-section-gap h-[600px] w-full relative group overflow-hidden observe-section">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
        <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="/images/projects/TitoBoy.png" alt="Expertise" />
        <div className="absolute bottom-margin-desktop left-margin-desktop z-20 text-white">
          <p className="font-label-md text-label-md mb-stack-sm uppercase tracking-tighter opacity-80">Process Focused</p>
          <h2 className="font-headline-lg text-headline-lg max-w-xl italic">"Great design begins with thoughtful details." — Titoboy</h2>
        </div>
      </section>

      <section className="mb-section-gap observe-section">
        <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-stack-lg">Primary Toolset</h3>
        <div className="flex flex-wrap gap-gutter grayscale opacity-40 hover:grayscale-0 transition-all duration-700">
          {[['palette', 'Figma'], ['code', 'VS Code'], ['view_in_ar', 'Spline'], ['movie_filter', 'After Effects'], ['layers', 'Adobe Suite']].map(([icon, name]) => (
            <div key={name} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">{icon}</span>
              <span className="font-headline-md">{name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
