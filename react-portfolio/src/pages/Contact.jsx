import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="pt-[120px] pb-section-gap">

      {/* Hero */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg reveal-on-scroll active">
        <div className="max-w-3xl">
          <h1 className="font-display text-display-mobile md:text-display mb-stack-md">
            Let&apos;s build <br />
            <span className="text-secondary italic">meaningful</span> things.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Currently accepting select freelance projects and full-time opportunities
            with teams that value high-end design and structural rigor.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-4 flex flex-col gap-stack-lg reveal-on-scroll">

          {/* Email */}
          <div>
            <h3 className="font-label-md text-label-md uppercase tracking-widest text-outline mb-stack-sm">Connect</h3>
            <a className="group flex items-center gap-4 text-headline-md font-headline-md hover:text-secondary transition-colors break-all" href="mailto:christianfrancisco.bsit@gmail.com">
              christianfrancisco.bsit@gmail.com
            </a>
          </div>

          {/* Availability */}
          <div className="pt-stack-md border-t border-outline-variant/20">
            <h3 className="font-label-md text-label-md uppercase tracking-widest text-outline mb-stack-sm">Availability</h3>
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              <p className="font-body-md font-bold">IT Support, Admin Staff, Back Office, UI/UX Design, Graphic Design</p>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h3 className="font-label-md text-label-md uppercase tracking-widest text-outline mb-stack-sm">Socials</h3>
            <div id="SocialIcons">

              <a href="https://www.instagram.com/muddyyyy2/" target="_blank" rel="noopener noreferrer">
                <div className="icons instaIcon">
                  <p className="iconName">Instagram</p>
                  <div className="icon insta">
                    <svg viewBox="0 0 24 24" fill="none" width="35" height="35" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" fillRule="evenodd" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/christian-francisco-38720b393" target="_blank" rel="noopener noreferrer">
                <div className="icons linkedin">
                  <p className="iconName">LinkedIn</p>
                  <div className="icon link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" style={{ fill: 'rgba(0,0,0,1)' }}>
                      <circle cx="4.983" cy="5.009" r="2.188" fill="currentColor" />
                      <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </a>

              <a href="https://www.facebook.com/Christian.Francisco.Manalang/" target="_blank" rel="noopener noreferrer">
                <div className="icons youtube">
                  <p className="iconName">Facebook</p>
                  <div className="icon tube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" style={{ fill: 'rgba(0,0,0,1)' }}>
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.88v-6.99h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
