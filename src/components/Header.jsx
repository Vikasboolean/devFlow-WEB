import { useEffect, useId, useState } from 'react'
import { LINKS } from '../data/links'
import { IconClose, IconGithub, IconMenu } from './Icons'
import './Header.css'

const NAV = [
  { href: '#features', label: 'Features' },
  { href: '#screenshots', label: 'Screenshots' },
  { href: '#why', label: 'Why DevFlow' },
  { href: '#download', label: 'Download' },
]

export default function Header({ onDownloadClick }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#top" onClick={close}>
          <img src="/logo.png" alt="" width={36} height={36} className="brand-logo" />
          <span className="brand-name">DevFlow</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="btn btn-ghost header-github"
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGithub />
            <span>GitHub</span>
          </a>
          <a
            className="btn btn-primary header-download"
            href="#download"
            onClick={onDownloadClick}
          >
            Download
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div
        id={menuId}
        className={`mobile-panel${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav className="nav-mobile" aria-label="Mobile">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Explore on GitHub
          </a>
          <a
            className="btn btn-primary"
            href="#download"
            onClick={() => {
              onDownloadClick()
              close()
            }}
          >
            Download for Windows
          </a>
        </nav>
      </div>
    </header>
  )
}
