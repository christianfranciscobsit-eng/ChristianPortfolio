import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/expertise', label: 'Expertise' },
  { to: '/recognition', label: 'Recognition' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

/* ── Styles injected once as a <style> tag ── */
const NAV_STYLES = `
  .nav-desktop-links { display: flex; }
  .nav-hamburger-btn { display: none; }
  .nav-mobile-overlay { display: none; }

  @media (max-width: 767px) {
    .nav-desktop-links { display: none !important; }
    .nav-hamburger-btn { display: flex !important; }
    .nav-mobile-overlay { display: flex !important; }
  }
`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  /* Close menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* Close menu on route change */
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (to) => location.pathname === to

  return (
    <>
      {/* Inject media-query controlled styles */}
      <style>{NAV_STYLES}</style>

      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 64px',
        backgroundColor: 'rgba(246,250,255,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(197,198,202,0.3)',
      }}>

        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '24px',
            fontWeight: 700,
            color: '#000',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Christian Francisco
        </Link>

        {/* ── DESKTOP NAV LINKS (hidden below 768px via CSS) ── */}
        <div
          className="nav-desktop-links"
          style={{ alignItems: 'center', gap: '32px' }}
        >
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                fontFamily: 'Source Serif 4, serif',
                fontSize: '16px',
                fontWeight: isActive(to) ? 700 : 400,
                color: isActive(to) ? '#000' : '#45474a',
                textDecoration: 'none',
                borderBottom: isActive(to) ? '2px solid #006d35' : 'none',
                paddingBottom: isActive(to) ? '2px' : '0',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </Link>
          ))}

          {/* Resume button */}
          <a
            href="/images/projects/ChristFranciscoResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '9999px',
              border: '1px solid rgba(224,42,47,0.12)',
              backgroundColor: '#feecec',
              padding: '8px 16px',
              fontSize: '16px',
              fontFamily: 'Source Serif 4, serif',
              fontWeight: 600,
              color: '#7a1718',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              boxShadow: '0 1px 3px rgba(20,29,35,0.08)',
              transition: 'background-color 0.2s',
            }}
          >
            Resume
          </a>
        </div>

        {/* ── HAMBURGER BUTTON (only visible below 768px via CSS) ── */}
        <button
          className="nav-hamburger-btn"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '9999px',
            border: '1px solid rgba(20,29,35,0.12)',
            backgroundColor: 'rgba(255,255,255,0.95)',
            boxShadow: '0 4px 12px rgba(20,29,35,0.08)',
            cursor: 'pointer',
            color: '#141d23',
            zIndex: 70,
            flexShrink: 0,
          }}
        >
          {/* 3-line hamburger or X */}
          {menuOpen ? (
            <span className="material-symbols-outlined" style={{ fontSize: '22px', lineHeight: 1 }}>close</span>
          ) : (
            <span className="material-symbols-outlined" style={{ fontSize: '22px', lineHeight: 1 }}>menu</span>
          )}
        </button>

      </nav>

      {/* ── MOBILE OVERLAY MENU ── */}
      {menuOpen && (
        <div
          className="nav-mobile-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            backgroundColor: '#f6faff',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: '96px',
            paddingBottom: '32px',
            paddingLeft: '16px',
            paddingRight: '16px',
            gap: '12px',
            overflowY: 'auto',
          }}
        >
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                width: '100%',
                maxWidth: '360px',
                textAlign: 'center',
                padding: '14px 24px',
                borderRadius: '9999px',
                backgroundColor: isActive(to) ? 'rgba(224,42,47,0.22)' : 'rgba(224,42,47,0.12)',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                color: '#141d23',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
              }}
            >
              {label}
            </Link>
          ))}

          <a
            href="/images/projects/ChristFranciscoResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              width: '100%',
              maxWidth: '360px',
              textAlign: 'center',
              padding: '14px 24px',
              borderRadius: '9999px',
              backgroundColor: '#e02a2f',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              color: '#fff',
              textDecoration: 'none',
              marginTop: '8px',
            }}
          >
            Resume
          </a>
        </div>
      )}
    </>
  )
}
