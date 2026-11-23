import { LINKS } from '../data/links'
import { IconGithub, IconWindows } from './Icons'
import ProductPreview from './ProductPreview'
import './Hero.css'

export default function Hero({ glowActive, glowPlay, onDownloadClick }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div
        className={`hero-glow${glowActive ? ' is-active' : ''}`}
        aria-hidden="true"
      >
        <img
          key={glowPlay}
          src={`/Glow%20Slow%20Motion.gif?play=${glowPlay}`}
          alt=""
        />
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-brand-lockup">
            <span className="hero-logo-mark">
              <img
                src="/logo.png"
                alt="DevFlow logo"
                width={72}
                height={72}
                className="hero-logo"
              />
              <svg
                className="hero-logo-flame"
                viewBox="0 0 112 60"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <linearGradient id="fox-flame-outer" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#60a5fa" />
                    <stop offset="0.52" stopColor="#22d3ee" />
                    <stop offset="1" stopColor="#bfdbfe" />
                  </linearGradient>
                  <linearGradient id="fox-flame-core" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#2563eb" />
                    <stop offset="0.65" stopColor="#38bdf8" />
                    <stop offset="1" stopColor="#eff6ff" />
                  </linearGradient>
                </defs>
                <path
                  className="fox-flame-outer"
                  d="M1 29c14-4 20-14 32-20-3 8-5 12-10 17C39 16 50 6 64 5c-6 8-10 13-17 19C67 14 82 15 108 29 84 42 67 43 47 34c6 6 10 11 12 19-18-4-27-11-36-20C16 37 9 34 1 29Z"
                  fill="url(#fox-flame-outer)"
                />
                <path
                  className="fox-flame-core"
                  d="M2 29c19-2 29-10 46-11-8 5-14 9-20 12 16-5 31-5 49-1-16 7-29 7-43 3 5 4 8 7 10 12-13-4-20-8-27-14-5 2-10 1-15-1Z"
                  fill="url(#fox-flame-core)"
                />
              </svg>
            </span>
            <p className="hero-product">DevFlow</p>
          </div>

          <h1 id="hero-title">Your Browser. Your Developer Workspace.</h1>
          <p className="hero-lead">
            DevFlow is a developer-focused desktop browser for Windows. Browse the
            web with Chromium tabs while API testing, network monitoring, console
            debugging, and element inspection stay in the same workspace.
          </p>

          <div className="hero-cta">
            <a
              className="btn btn-primary"
              href={LINKS.installer}
              download
              onClick={onDownloadClick}
            >
              <IconWindows />
              Download for Windows
            </a>
            <a
              className="btn btn-secondary"
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub />
              Explore on GitHub
            </a>
          </div>

          <p className="hero-meta">
            Version 1.0.0 · Windows 10/11 · x64 NSIS installer
          </p>
        </div>

        <div className="hero-visual">
          <ProductPreview />
          <p className="hero-visual-note">
            A look inside the DevFlow browser workspace.
          </p>
        </div>
      </div>
    </section>
  )
}
