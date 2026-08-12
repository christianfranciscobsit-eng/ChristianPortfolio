import { Link } from 'react-router-dom'

export default function ProjectDetailLayout({ meta, moreProjects, children }) {
  const { role, timeline, technologies, liveUrl, category, title, heroImg } = meta

  return (
    <main className="pt-[100px] md:pt-[120px]">

      {/* Hero */}
      <header className="relative w-full min-h-[420px] h-[420px] md:h-[700px] overflow-hidden bg-surface-container-high project-detail-hero">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${heroImg}')` }} />
        <div className="absolute bottom-0 left-0 w-full px-margin-mobile md:px-margin-desktop pb-stack-lg z-20 hero-title-wrap">
          <div className="max-w-container-max mx-auto flex flex-col gap-stack-sm">
            <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">{category}</span>
            <h1 className="font-display-mobile md:font-display text-display-mobile md:text-display text-primary max-w-4xl">{title}</h1>
          </div>
        </div>
      </header>

      {/* Overview */}
      <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">

          {/* Sidebar */}
          <div className="md:col-span-4 flex flex-col gap-stack-md order-2 md:order-1">
            <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/20 flex flex-col gap-6">
              <div>
                <h4 className="font-label-md text-label-md text-on-surface-variant mb-2">Role</h4>
                <p className="font-body-md text-body-md text-primary">{role}</p>
              </div>
              <div className="h-px bg-outline-variant/30" />
              <div>
                <h4 className="font-label-md text-label-md text-on-surface-variant mb-2">Timeline</h4>
                <p className="font-body-md text-body-md text-primary">{timeline}</p>
              </div>
              <div className="h-px bg-outline-variant/30" />
              <div>
                <h4 className="font-label-md text-label-md text-on-surface-variant mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2 mt-3">
                  {technologies.map((t) => (
                    <span key={t} className="px-3 py-1 bg-surface-container-highest text-primary font-label-md text-label-md rounded">{t}</span>
                  ))}
                </div>
              </div>
              {liveUrl && (
                <div className="mt-4">
                  <a
                    className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-secondary transition-all active:scale-95"
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Preview <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Main content */}
          <div className="md:col-span-8 order-1 md:order-2 flex flex-col gap-stack-lg">
            {children}
          </div>

        </div>
      </section>

      {/* More Projects */}
      <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto border-t border-outline-variant/20">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end mb-stack-lg">
          <div className="flex flex-col gap-2">
            <span className="font-label-md text-label-md text-on-surface-variant">Next Step</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Explore More Projects</h2>
          </div>
          <Link className="hidden md:flex items-center gap-2 font-label-md text-label-md text-secondary group" to="/projects">
            View All <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
          <Link className="flex md:hidden items-center justify-center gap-2 font-label-md text-label-md text-secondary group" to="/projects">
            View All <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          {moreProjects.map(({ to, img, title: t, sub }) => (
            <Link key={to} className="group block" to={to}>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-surface-container-high mb-6">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-cover bg-center" style={{ backgroundImage: `url('${img}')` }} />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">{t}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{sub}</p>
                </div>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto text-center flex flex-col items-center gap-stack-md">
          <h2 className="font-display-mobile md:font-display text-display-mobile md:text-display max-w-3xl">
            Interested in working together?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">
            I&apos;m currently available for freelance projects and full-time creative opportunities.
            Let&apos;s build something exceptional.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-4 project-detail-cta-group">
            <Link to="/contact" className="inline-block w-full sm:w-auto px-10 py-5 bg-secondary text-white font-label-md text-label-md rounded active:scale-95 transition-transform hover:brightness-110">
              Get In Touch
            </Link>
            <a
              href="/images/projects/ChristFranciscoResume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-10 py-5 border border-on-primary text-on-primary font-label-md text-label-md rounded active:scale-95 transition-transform hover:bg-on-primary hover:text-primary"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
