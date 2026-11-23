import { LINKS } from '../data/links'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid reveal">
        <div className="footer-brand">
          <a className="footer-logo" href="#top">
            <img src="/logo.png" alt="" width={40} height={40} />
            <span>DevFlow</span>
          </a>
          <p>
            Developer-focused desktop browser for Windows. Browse, test APIs,
            inspect the network, and debug pages in one workspace.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <div>
            <h2>Product</h2>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
              <li>
                <a href={LINKS.releaseNotes} target="_blank" rel="noopener noreferrer">
                  Release notes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>GitHub</h2>
            <ul>
              <li>
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                  Repository
                </a>
              </li>
              <li>
                <a href={LINKS.releases} target="_blank" rel="noopener noreferrer">
                  Releases
                </a>
              </li>
              <li>
                <a href={LINKS.releaseTag} target="_blank" rel="noopener noreferrer">
                  v1.0.0 release
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="container footer-bottom">
        <p>© {year} DevFlow. All rights reserved.</p>
        <p className="footer-note">
          Privacy and support pages are not published yet, so those links are
          omitted until destinations exist.
        </p>
      </div>
    </footer>
  )
}
