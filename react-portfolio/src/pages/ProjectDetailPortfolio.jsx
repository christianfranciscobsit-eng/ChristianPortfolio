import ProjectDetailLayout from '../components/ProjectDetailLayout'

const meta = {
  role: 'Designer & Developer',
  timeline: '2024',
  technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
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
        <div className="md:col-span-2 relative h-96 bg-surface-container rounded-xl overflow-hidden group">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-cover bg-center" style={{ backgroundImage: "url('/images/projects/tropaa.png')" }} />
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/60 to-transparent">
            <h3 className="font-headline-md text-headline-md text-white">Graduation</h3>
            <p className="font-body-md text-body-md text-white/80">Consistent and scalable visual language.</p>
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
