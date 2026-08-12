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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-6 flex flex-col justify-start gap-8">
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

            <div className="grid gap-6">
              <a
                href="mailto:christianfrancisco.bsit@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 18px',
                  borderRadius: '22px',
                  background: 'linear-gradient(135deg, #141d23 0%, #2a3540 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 18px 42px rgba(0,0,0,0.12)',
                  textDecoration: 'none',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 18px 48px rgba(0,0,0,0.18)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 18px 42px rgba(0,0,0,0.12)'
                }}
              >
                <div style={{
                  position: 'absolute', top: '-10px', left: '-10px',
                  width: '68px', height: '68px',
                  background: 'radial-gradient(circle, rgba(0,109,53,0.28) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />

                <div style={{
                  width: '42px', height: '42px', borderRadius: '14px',
                  backgroundColor: 'rgba(0,109,53,0.18)',
                  border: '1px solid rgba(0,109,53,0.28)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, position: 'relative', zIndex: 1,
                }}>
                  <span className="material-symbols-outlined" style={{
                    fontSize: '20px', color: '#00e476',
                    fontVariationSettings: "'FILL' 1",
                  }}>mail</span>
                </div>

                <div style={{ position: 'relative', zIndex: 1, minWidth: 0 }}>
                  <p style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '10px', fontWeight: 700,
                    color: 'rgba(255,255,255,0.55)',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    margin: '0 0 2px',
                  }}>Email me</p>
                  <p style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '13px', fontWeight: 600,
                    color: '#ffffff', margin: 0, wordBreak: 'break-all',
                  }}>christianfrancisco.bsit@gmail.com</p>
                </div>

                <div style={{ marginLeft: 'auto', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span className="material-symbols-outlined" style={{
                    fontSize: '18px', color: 'rgba(255,255,255,0.35)',
                  }}>arrow_outward</span>
                </div>
              </a>

              <div style={{
                background: 'linear-gradient(135deg, rgba(0,109,53,0.06) 0%, rgba(0,109,53,0.02) 100%)',
                border: '1px solid rgba(0,109,53,0.18)',
                borderRadius: '22px',
                padding: '18px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: '-16px', right: '-16px',
                  width: '100px', height: '100px',
                  background: 'radial-gradient(circle, rgba(0,109,53,0.14) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  backgroundColor: 'rgba(0,109,53,0.1)',
                  border: '1px solid rgba(0,109,53,0.24)',
                  borderRadius: '999px',
                  padding: '5px 12px',
                  marginBottom: '14px',
                }}>
                  <span style={{
                    position: 'relative', display: 'inline-flex',
                    width: '8px', height: '8px',
                  }}>
                    <span className="animate-ping" style={{
                      position: 'absolute', inset: 0,
                      borderRadius: '50%',
                      backgroundColor: '#006d35',
                      opacity: 0.6,
                    }} />
                    <span style={{
                      position: 'relative', display: 'inline-block',
                      width: '8px', height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#006d35',
                    }} />
                  </span>
                  <span style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '10px', fontWeight: 700,
                    color: '#006d35', letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}>
                    Open to work
                  </span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {[
                    { label: 'IT Support', icon: 'support_agent' },
                    { label: 'Admin Staff', icon: 'admin_panel_settings' },
                    { label: 'Back Office', icon: 'work' },
                    { label: 'UI/UX Design', icon: 'design_services' },
                    { label: 'Graphic Design', icon: 'palette' },
                  ].map(({ label, icon }) => (
                    <div key={label} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      backgroundColor: '#fff',
                      border: '1px solid rgba(0,109,53,0.13)',
                      borderRadius: '10px',
                      padding: '6px 10px',
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '11px', fontWeight: 600,
                      color: '#141d23',
                    }}>
                      <span className="material-symbols-outlined" style={{
                        fontSize: '14px', color: '#006d35', fontVariationSettings: "'FILL' 1",
                      }}>{icon}</span>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                <p style={{
                  fontFamily: 'Source Serif 4, serif',
                  fontSize: '13px', color: '#5d6a6b',
                  marginTop: '14px', marginBottom: 0,
                }}>
                  Available for freelance & full-time roles
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-label-md text-label-md uppercase tracking-widest text-outline">Socials</h3>
                <div className="grid grid-cols-3 gap-3">
                  <a href="https://www.instagram.com/muddyyyy2/" target="_blank" rel="noopener noreferrer">
                    <div className="icons instaIcon">
                      <p className="iconName">Instagram</p>
                      <div className="icon insta">
                        <svg viewBox="0 0 24 24" fill="none" width="24" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path clipRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" fillRule="evenodd" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/christian-francisco-38720b393" target="_blank" rel="noopener noreferrer">
                    <div className="icons linkedin">
                      <p className="iconName">LinkedIn</p>
                      <div className="icon link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(0,0,0,1)' }}>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(0,0,0,1)' }}>
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.88v-6.99h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 flex items-start justify-end">
            <div
              style={{
                position: 'relative',
                width: 'min(620px, 100%)',
                maxWidth: '620px',
                marginRight: '-24px',
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: '0 34px 90px rgba(0,0,0,0.24), 0 0 0 1px rgba(212,175,55,0.18)',
                background: '#0a0a0a',
              }}
              className="group"
            >
              <div style={{
                position: 'absolute', inset: '-2px', borderRadius: '30px',
                background: 'conic-gradient(from 0deg, rgba(212,175,55,0.9), rgba(255,255,200,0.2), transparent 35%, rgba(212,175,55,0.7), transparent 65%, rgba(255,255,200,0.15), rgba(212,175,55,0.9))',
                animation: 'rotateBorder 5s linear infinite',
                zIndex: 0,
              }} />
              <div style={{ position: 'absolute', inset: '2px', borderRadius: '26px', background: '#0a0a0a', zIndex: 1 }} />
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
                background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.12) 0%, transparent 70%)',
                zIndex: 2, pointerEvents: 'none',
              }} />
              {[
                { top: '16px', left: '16px', borderTop: '2px solid rgba(212,175,55,0.9)', borderLeft: '2px solid rgba(212,175,55,0.9)', borderRadius: '6px 0 0 0' },
                { top: '16px', right: '16px', borderTop: '2px solid rgba(212,175,55,0.9)', borderRight: '2px solid rgba(212,175,55,0.9)', borderRadius: '0 6px 0 0' },
                { bottom: '16px', left: '16px', borderBottom: '2px solid rgba(212,175,55,0.9)', borderLeft: '2px solid rgba(212,175,55,0.9)', borderRadius: '0 0 0 6px' },
                { bottom: '16px', right: '16px', borderBottom: '2px solid rgba(212,175,55,0.9)', borderRight: '2px solid rgba(212,175,55,0.9)', borderRadius: '0 0 6px 0' },
              ].map((s, i) => (
                <div key={i} style={{ position: 'absolute', width: '26px', height: '26px', zIndex: 5, pointerEvents: 'none', ...s }} />
              ))}
              <img
                src="/images/projects/Christ.png"
                alt="Christian Francisco — Graduation Portrait"
                style={{
                  position: 'relative', zIndex: 3,
                  display: 'block', width: '100%', height: 'auto',
                  aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top',
                  borderRadius: '26px',
                  transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                }}
                className="group-hover:scale-105"
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 6,
                padding: '48px 24px 24px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%)',
                borderRadius: '0 0 26px 26px',
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  backgroundColor: 'rgba(212,175,55,0.18)', border: '1px solid rgba(212,175,55,0.55)',
                  borderRadius: '999px', padding: '4px 12px', marginBottom: '10px',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '13px', color: '#d4af37', fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                  <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: '#d4af37', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Class of 2026</span>
                </div>
                <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '20px', fontWeight: 800, color: '#fff', margin: '0 0 4px', letterSpacing: '-0.01em' }}>
                  Francisco, Christian M.
                </h3>
                <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '13px', color: 'rgba(255,255,255,0.55)', margin: '0 0 12px' }}>
                  BS Information Technology · GRC
                </p>
                <div style={{ display: 'flex', gap: '16px' }}>
                  {[{ icon: 'workspace_premium', label: 'Candidate for Best in Capstone' }, { icon: 'palette', label: 'Graphic,UI/UX Designer' }].map(({ icon, label }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '13px', color: '#d4af37', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                      <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </main>
  )
}
