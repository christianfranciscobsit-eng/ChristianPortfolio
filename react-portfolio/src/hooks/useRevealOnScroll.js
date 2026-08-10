import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to all elements with the given selector
 * and adds `active` class when they enter the viewport.
 */
export default function useRevealOnScroll(selector = '.reveal-on-scroll', dep = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    const els = document.querySelectorAll(selector)
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dep)
}
