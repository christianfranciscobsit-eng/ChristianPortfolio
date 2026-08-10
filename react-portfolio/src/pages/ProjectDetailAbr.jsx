import ProjectDetailLayout from '../components/ProjectDetailLayout'

const meta = {
  role: 'Frontend & Researcher',
  timeline: '2025 (Capstone)',
  technologies: ['HTML, CSS, JavaScript', 'Laravel', 'PHP'],
  liveUrl: 'https://www.abr-diagnostic.com/',
  category: 'Capstone Project • Research & Development',
  title: 'ABR Capstone Project',
  heroImg: '/images/projects/project.png',
}

const moreProjects = [
  { to: '/project/abbe', img: '/images/projects/AbbeWeb.jpeg', title: 'ABBE Website', sub: 'Corporate / B2B IT Solutions' },
  { to: '/project/portfolio', img: '/images/projects/Portfolioo.png', title: 'Portfolio', sub: 'Personal Portfolio Website' },
]

export default function ProjectDetailAbr() {
  return (
    <ProjectDetailLayout meta={meta} moreProjects={moreProjects}>

      <div className="flex flex-col gap-stack-md">
        <h2 className="font-headline-lg text-headline-lg text-primary">The Vision</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          The ABR Capstone Project is a culminating academic work that demonstrates research, design,
          and development skills acquired throughout the program. It focuses on solving a real-world
          problem through technology.
        </p>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          This project showcases the full development lifecycle — from initial research and requirements
          gathering, through design and prototyping, to final implementation and testing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md mt-4">
        <div className="md:col-span-2 relative h-96 bg-surface-container rounded-xl overflow-hidden group">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-cover bg-center" style={{ backgroundImage: "url('/images/projects/1112.png')" }} />
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/60 to-transparent">
            <h3 className="font-headline-md text-headline-md text-white">Project Overview</h3>
            <p className="font-body-md text-body-md text-white/80">Full system design and implementation.</p>
          </div>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 flex flex-col gap-4">
          <span className="material-symbols-outlined text-secondary text-4xl">school</span>
          <h4 className="font-headline-md text-headline-md text-primary">Academic Excellence</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">Developed as a capstone requirement, demonstrating mastery of core computer science and IT concepts.</p>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 flex flex-col gap-4">
          <span className="material-symbols-outlined text-secondary text-4xl">build</span>
          <h4 className="font-headline-md text-headline-md text-primary">Full Stack Solution</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">End-to-end implementation covering frontend, backend, and database design.</p>
        </div>
      </div>

      <div className="flex flex-col gap-stack-md mt-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-primary">The Process</h2>
        <div className="space-y-12">
          {[
            { n: '01', title: 'Research & Planning', body: 'Identified the problem domain, conducted a literature review, and defined the project scope and objectives with the academic panel.' },
            { n: '02', title: 'Design & Prototyping', body: 'Created system architecture diagrams, wireframes, and prototypes. Validated the design with stakeholders before proceeding to development.' },
            { n: '03', title: 'Development & Defense', body: 'Built and tested the full system, then successfully defended the project before the academic panel.', last: true },
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
