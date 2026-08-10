import { Link } from 'react-router-dom'
import ProjectDetailLayout from '../components/ProjectDetailLayout'

const meta = {
  role: 'Web Designer & Frontend Developer',
  timeline: 'January 2026 – May 2026',
  technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
  liveUrl: 'https://abbe.com.ph/',
  category: 'Web Development • UX/UI',
  title: 'ABBE Website: Modern Corporate/B2B IT solutions and services.',
  heroImg: '/images/projects/ojeytiI.jpg',
}

const moreProjects = [
  { to: '/project/abr', img: '/images/projects/ABRDiagnostic.jpeg', title: 'ABR Capstone Project', sub: 'Research & Development' },
  { to: '/project/portfolio', img: '/images/projects/Portfolioo.png', title: 'Portfolio', sub: 'Personal Portfolio Website' },
]

export default function ProjectDetailAbbe() {
  return (
    <ProjectDetailLayout meta={meta} moreProjects={moreProjects}>

      {/* Vision */}
      <div className="flex flex-col gap-stack-md">
        <h2 className="font-headline-lg text-headline-lg text-primary">The Vision</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Vision is to be the leading solutions integrator in the Philippines, recognized for driving
          digital transformation and advancing IT capabilities across industries.
        </p>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          We aim to create a future where businesses are equipped with secure, efficient, and competitive
          data systems that empower them to adapt to challenges, embrace innovation, and achieve success
          in the global digital economy.
        </p>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md mt-4">
        <div className="md:col-span-2 relative h-96 bg-surface-container rounded-xl overflow-hidden group">
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/projects/Partners.png')" }}
          />
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/60 to-transparent">
            <h3 className="font-headline-md text-headline-md text-white">Partnership</h3>
            <p className="font-body-md text-body-md text-white/80">Partnering with world-class technology brands to deliver reliable IT solutions.</p>
          </div>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 flex flex-col gap-4">
          <span className="material-symbols-outlined text-secondary text-4xl">devices</span>
          <h4 className="font-headline-md text-headline-md text-primary">Responsive Design</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">Fully optimized for all screen sizes ensuring a seamless experience for every visitor.</p>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 flex flex-col gap-4">
          <span className="material-symbols-outlined text-secondary text-4xl">security</span>
          <h4 className="font-headline-md text-headline-md text-primary">Professional &amp; Trustworthy</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">Designed to communicate credibility and professionalism, building trust with corporate clients.</p>
        </div>
      </div>

      {/* Process */}
      <div className="flex flex-col gap-stack-md mt-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-primary">The Process</h2>
        <div className="space-y-12">
          {[
            { n: '01', title: 'Discovery & Planning', body: "Studied ABBE's brand identity, services, and target audience. Defined the site structure, content hierarchy, and key pages needed to effectively communicate their B2B IT solutions." },
            { n: '02', title: 'Design & Prototyping', body: 'Created a clean, corporate visual design that reflects trust and professionalism. Focused on clear navigation, readable typography, and a consistent color system aligned with ABBE\'s brand.' },
            { n: '03', title: 'Development & Launch', body: 'Built the website with clean, semantic HTML and responsive CSS. Optimized for performance and cross-browser compatibility before final delivery and launch.', last: true },
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

      {/* Full width image */}
      <div className="w-full h-[400px] bg-surface-container bg-cover bg-center rounded-xl mt-8" style={{ backgroundImage: "url('/images/projects/abbe stock2.png')" }} />
    </ProjectDetailLayout>
  )
}
