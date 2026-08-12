import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import Home from './pages/Home'
import Expertise from './pages/Expertise'
import Recognition from './pages/Recognition'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ProjectDetailAbbe from './pages/ProjectDetailAbbe'
import ProjectDetailAbr from './pages/ProjectDetailAbr'
import ProjectDetailDavidTea from './pages/ProjectDetailDavidTea'
import ProjectDetailPortfolio from './pages/ProjectDetailPortfolio'

function AppInner() {
  const location = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  return (
    <>
      <PageLoader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/recognition" element={<Recognition />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/abbe" element={<ProjectDetailAbbe />} />
        <Route path="/project/abr" element={<ProjectDetailAbr />} />
        <Route path="/project/david-tea-house" element={<ProjectDetailDavidTea />} />
        <Route path="/project/portfolio" element={<ProjectDetailPortfolio />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}
