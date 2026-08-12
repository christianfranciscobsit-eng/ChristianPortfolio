import ProjectDetailLayout from '../components/ProjectDetailLayout'

const meta = {
  role: 'Designer & Developer',
  timeline: '-',
  technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Vercel'],
  liveUrl: '/',
  category: 'Web Design • Personal Branding',
  title: 'Portfolio Website',
  heroImg: '/images/projects/ds.png',
}

const moreProjects = [
  { to: '/project/abbe', img: '/images/projects/AbbeWeb.jpeg', title: 'ABBE Website', sub: 'Corporate / B2B IT Solutions' },
  { to: '/project/abr', img: '/images/projects/ABRDiagnostic.jpeg', title: 'ABR Capstone Project', sub: 'Research & Development' },
]

export default function ProjectDetailPortfolio() {
  return (
    <ProjectDetailLayout meta={meta} moreProjects={moreProjects}>

      <div className="flex flex-col gap-stack-md">
        <h2 className="font-headline-lg text-headline-lg text-primary">The Vision</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          This personal portfolio was built to showcase my skills, projects, and professional identity
          as a designer and developer. The goal was to create a clean, minimal, and memorable digital presence.
        </p>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Every design decision was intentional — from the typography and color palette to the layout and
          micro-interactions — to communicate professionalism and creative confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md mt-4">

        {/* Portrait card — Christ.png with premium effects */}
        <div className="md:col-span-2 flex justify-center">
          <div
            style={{
              position: 'relative',
              width: '340px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(212,175,55,0.2)',
              background: '#0a0a0a',
              flexShrink: 0,
            }}
            className="group"
          >
            {/* Rotating gold border ring */}
            <div style={{
              position: 'absolute', inset: '-2px',
              borderRadius: '26px',
              background: 'conic-gradient(from 0deg, rgba(212,175,55,0.8), rgba(255,255,255,0.15), transparent 40%, rgba(212,175,55,0.6))',
              animation: 'rotateBorder 5s linear infinite',
              zIndex: 0,
            }} />

            {/* Inner frame */}
            <div style={{
              position: 'absolute', inset: '2px',
              borderRadius: '22px',
              background: '#0a0a0a',
              zIndex: 1,
            }} />

            {/* Corner brackets */}
            {[
              { top: '14px', left: '14px', borderTop: '2px solid rgba(212,175,55,0.8)', borderLeft: '2px solid rgba(212,175,55,0.8)', borderRadius: '4px 0 0 0' },
              { top: '14px', right: '14px', borderTop: '2px solid rgba(212,175,55,0.8)', borderRight: '2px solid rgba(212,175,55,0.8)', borderRadius: '0 4px 0 0' },
              { bottom: '14px', left: '14px', borderBottom: '2px solid rgba(212,175,55,0.8)', borderLeft: '2px solid rgba(212,175,55,0.8)', borderRadius: '0 0 0 4px' },
              { bottom: '14px', right: '14px', borderBottom: '2px solid rgba(212,175,55,0.8)', borderRight: '2px solid rgba(212,175,55,0.8)', borderRadius: '0 0 4px 0' },
            ].map((s, i) => (
              <div key={i} style={{ position: 'absolute', width: '22px', height: '22px', zIndex: 4, pointerEvents: 'none', ...s }} />
            ))}

            {/* Portrait image */}
            <img
              src="/images/projects/tians.png"
              alt="Christian Francisco — Graduation Portrait"
              style={{
                position: 'relative', zIndex: 2,
                display: 'block',
                width: '100%',
                height: 'auto',
                aspectRatio: '3/4',
                objectFit: 'cover',
                objectPosition: 'center top',
                borderRadius: '22px',
                transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
              }}
              className="group-hover:scale-105"
            />

            {/* Bottom overlay caption */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              zIndex: 3,
              padding: '32px 20px 20px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
              borderRadius: '0 0 22px 22px',
            }}>
              {/* Gold badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                backgroundColor: 'rgba(212,175,55,0.2)',
                border: '1px solid rgba(212,175,55,0.5)',
                borderRadius: '999px',
                padding: '3px 10px',
                marginBottom: '6px',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '12px', color: '#d4af37', fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: '#d4af37', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Class of 2026
                </span>
              </div>
              <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '16px', fontWeight: 700, color: '#fff', margin: '0 0 2px' }}>
                Francisco, Christian M.
              </h3>
              <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '12px', color: 'rgba(255,255,255,0.65)', margin: 0 }}>
                BS Information Technology
              </p>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 flex flex-col gap-4">
          <span className="material-symbols-outlined text-secondary text-4xl">palette</span>
          <h4 className="font-headline-md text-headline-md text-primary">Elevated Minimalism</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">Clean aesthetic with purposeful use of whitespace, typography, and subtle animations.</p>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 flex flex-col gap-4">
          <span className="material-symbols-outlined text-secondary text-4xl">devices</span>
          <h4 className="font-headline-md text-headline-md text-primary">Fully Responsive</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">Designed mobile-first and optimized for all screen sizes from phone to desktop.</p>
        </div>
      </div>

      <div className="flex flex-col gap-stack-md mt-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-primary">The Process</h2>
        <div className="space-y-12">
          {[
            { n: '01', title: 'Concept & Branding', body: "Defined the personal brand identity — tone, color system, typography, and overall aesthetic direction before writing a single line of code." },
            { n: '02', title: 'Design & Layout', body: 'Designed each page layout with a focus on hierarchy, readability, and visual flow that guides the visitor naturally through the content.' },
            { n: '03', title: 'Build & Polish', body: 'Coded with HTML, Tailwind CSS, and vanilla JavaScript. Added micro-interactions and scroll animations for a polished, professional feel.', last: true },
          ].map(({ n, title, body, last }) => (
            <div key={n} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center font-bold text-secondary">{n}</div>
                {!last && <div className="w-0.5 flex-1 bg-outline-variant/30 my-2"></div>}
              </div>
              <div className={last ? '' : 'pb-8'}>
                <h4 className="font-headline-md text-headline-md text-primary mb-2">{title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProjectDetailLayout>
  )
}
