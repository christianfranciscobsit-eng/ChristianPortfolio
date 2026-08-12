import { useState } from 'react'
import ProjectDetailLayout from '../components/ProjectDetailLayout'

const meta = {
  role: 'UI/UX Designer & Frontend Developer',
  timeline: '2025',
  technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  category: 'Branding & Restaurant Website',
  title: 'David Tea House: Cozy cafe experience with a modern web presence.',
  heroImg: '/images/projects/ProfileforDavidteahouse.jpg',
}

const moreProjects = [
  { to: '/project/abbe', img: '/images/projects/AbbeWeb.jpeg', title: 'ABBE Website', sub: 'Corporate / B2B IT Solutions' },
  { to: '/project/abr', img: '/images/projects/ABRDiagnostic.jpeg', title: 'ABR Capstone Project', sub: 'Research & Development' },
]

const screenshots = [
  { file: 'D1.png', title: 'Landing page', caption: 'Welcome screen with brand messaging and featured offerings.' },
  { file: 'D2.png', title: 'Menu overview', caption: 'Clear product categories and highlighted tea selections.' },
  { file: 'D3.png', title: 'Product detail', caption: 'Individual drink page showing product details and variations.' },
  { file: 'D4.png', title: 'Reservation flow', caption: 'Easy reservation steps with date, time, and guest selection.' },
  { file: 'D5.png', title: 'Checkout summary', caption: 'Order review and payment options presented in a clean layout.' },
  { file: 'D6.png', title: 'Customer account', caption: 'User account screen for order history and profile updates.' },
  { file: 'D7.png', title: 'Order confirmation', caption: 'Confirmation screen with order summary and next steps.' },
  { file: 'D8.png', title: 'Order tracking', caption: 'Real-time status updates and estimated preparation time.' },
  { file: 'D9.png', title: 'Admin dashboard', caption: 'Backend interface for managing menu items and reservations.' },
  { file: 'D10.png', title: 'Analytics view', caption: 'Performance metrics showing sales and customer activity.' },
  { file: 'D11.png', title: 'Support & feedback', caption: 'Help center and customer feedback flow for improved service.' },
]

export default function ProjectDetailDavidTea() {
  const [selectedScreenshot, setSelectedScreenshot] = useState(null)

  const activeScreenshot = screenshots.find((item) => item.file === selectedScreenshot)

  return (
    <ProjectDetailLayout meta={meta} moreProjects={moreProjects}>

      <div className="flex flex-col gap-stack-md">
        <h2 className="font-headline-lg text-headline-lg text-primary">The Vision</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          David Tea House aims to bring a cozy, inviting cafe experience online with a brand voice that feels warm,
          elegant, and easy to explore.
        </p>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          The website was designed to highlight signature drinks, easy online reservations, and a calm atmosphere
          that reflects the physical cafe's personality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md mt-4">
        <div className="md:col-span-2 relative h-96 bg-surface-container rounded-xl overflow-hidden group">
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/projects/DavidteahouseShop.png')" }}
          />
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/60 to-transparent">
            <h3 className="font-headline-md text-headline-md text-white">Brand Warmth</h3>
            <p className="font-body-md text-body-md text-white/80">A welcoming visual direction for a modern tea house brand.</p>
          </div>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 flex flex-col gap-4">
          <span className="material-symbols-outlined text-secondary text-4xl">coffee</span>
          <h4 className="font-headline-md text-headline-md text-primary">Warm Visual Story</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">A soft, premium palette and cozy photography style create an inviting atmosphere for visitors.</p>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 flex flex-col gap-4">
          <span className="material-symbols-outlined text-secondary text-4xl">smartphone</span>
          <h4 className="font-headline-md text-headline-md text-primary">Responsive Booking</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">Mobile-first layout for easy browse, menu access, and reservations on any device.</p>
        </div>
      </div>

      <div className="flex flex-col gap-stack-md mt-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-primary">The Process</h2>
        <div className="space-y-12">
          {[
            { n: '01', title: 'Brand & Experience', body: 'Defined the tea house brand identity and visual system to create a cozy, refined online presence.' },
            { n: '02', title: 'Design & Layout', body: 'Designed intuitive navigation and menu pages with clear calls to action for reservations and store information.' },
            { n: '03', title: 'Build & Polish', body: 'Implemented the site using modern web standards for performance, accessibility, and responsive interaction.', last: true },
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

      <div className="flex flex-col gap-stack-md mt-stack-lg">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-lg text-headline-lg text-primary">System Screenshots</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">D1–D11</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {screenshots.map(({ file, title, caption }) => (
            <button
              key={file}
              type="button"
              onClick={() => setSelectedScreenshot(file)}
              className="group rounded-3xl overflow-hidden border border-outline-variant/20 bg-surface-container-low shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <div className="relative overflow-hidden bg-black">
                <div className="w-full aspect-[16/9]">
                  <img
                    src={`/images/projects/${file}`}
                    alt={`David Tea House screenshot ${title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-4">
                <p className="font-headline-sm text-headline-sm text-primary">{title}</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">{caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedScreenshot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-w-[1200px] w-full rounded-3xl overflow-hidden bg-surface-container-low shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedScreenshot(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/70 p-3 text-white shadow-lg hover:bg-black"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <img
              src={`/images/projects/${selectedScreenshot}`}
              alt={`David Tea House screenshot ${selectedScreenshot}`}
              className="w-full object-contain max-h-[85vh] bg-black"
            />
            <div className="p-6 border-t border-outline-variant/20">
              <h3 className="font-headline-md text-headline-md text-primary">{activeScreenshot?.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">{activeScreenshot?.caption}</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-3">Click outside or press the close button to exit.</p>
            </div>
          </div>
        </div>
      )}
    </ProjectDetailLayout>
  )
}
