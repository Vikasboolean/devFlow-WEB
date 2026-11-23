import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import WhyDevFlow from './components/WhyDevFlow'
import Download from './components/Download'
import Footer from './components/Footer'

export default function App() {
  const [heroGlowActive, setHeroGlowActive] = useState(false)
  const [heroGlowPlay, setHeroGlowPlay] = useState(0)
  const heroGlowTimer = useRef(null)

  const playHeroGlow = () => {
    window.clearTimeout(heroGlowTimer.current)
    setHeroGlowPlay((play) => play + 1)
    setHeroGlowActive(true)
    heroGlowTimer.current = window.setTimeout(() => {
      setHeroGlowActive(false)
    }, 3940)
  }

  useEffect(() => () => window.clearTimeout(heroGlowTimer.current), [])

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return
    }

    document.documentElement.classList.add('motion-ready')
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
    )
    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top">
        <Header onDownloadClick={playHeroGlow} />
        <main id="main">
          <Hero
            glowActive={heroGlowActive}
            glowPlay={heroGlowPlay}
            onDownloadClick={playHeroGlow}
          />
          <Features />
          <Screenshots />
          <WhyDevFlow />
          <Download />
        </main>
        <Footer />
      </div>
    </>
  )
}
