import { LINKS, RELEASE } from '../data/links'
import { IconDownload, IconExternal, IconWindows } from './Icons'
import './Download.css'

const META = [
  { label: 'Version', value: RELEASE.version },
  { label: 'Platform', value: RELEASE.platform },
  { label: 'Architecture', value: RELEASE.architecture },
  { label: 'Installer', value: RELEASE.installerType },
]

export default function Download() {
  return (
    <section id="download" className="section download" aria-labelledby="download-title">
      <div className="container">
        <header className="section-header reveal">
          <p className="section-eyebrow">Download</p>
          <h2 id="download-title" className="section-title">
            Get DevFlow for Windows
          </h2>
          <p className="section-lead">
            Download the official NSIS installer directly from GitHub Releases.
            No intermediate download page — the button links to the real installer
            file.
          </p>
        </header>

        <div className="download-panel reveal">
          <div className="download-main">
            <div className="download-icon" aria-hidden="true">
              <IconWindows />
            </div>
            <div>
              <h3>DevFlow Setup {RELEASE.version}</h3>
              <p className="download-file">{RELEASE.fileName}</p>
            </div>
            <a className="btn btn-primary download-cta" href={LINKS.installer} download>
              <IconDownload />
              Download installer
            </a>
          </div>

          <dl className="download-meta">
            {META.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="download-links">
            <a href={LINKS.releaseTag} target="_blank" rel="noopener noreferrer">
              Release page
              <IconExternal />
            </a>
            <a href={LINKS.releaseNotes} target="_blank" rel="noopener noreferrer">
              Release notes
              <IconExternal />
            </a>
            <a href={LINKS.checksums} target="_blank" rel="noopener noreferrer">
              SHA256 checksums
              <IconExternal />
            </a>
          </div>

          <aside className="download-warning" role="note">
            <strong>Unsigned installer notice.</strong> The current Windows
            installer is not code-signed. Windows SmartScreen may show an
            unknown-publisher warning. That is expected until a signing
            certificate is configured. Prefer downloading only from the official
            GitHub release assets linked above.
          </aside>
        </div>
      </div>
    </section>
  )
}
