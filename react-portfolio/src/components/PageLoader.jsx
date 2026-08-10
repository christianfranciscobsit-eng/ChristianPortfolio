import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('page-loading')
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setHidden(true)
      document.documentElement.classList.remove('page-loading')
      document.body.style.overflow = ''
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`page-loader${hidden ? ' hidden' : ''}`}>
      <div className="loader">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
