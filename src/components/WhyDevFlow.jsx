import { WHY_POINTS } from '../data/features'
import './WhyDevFlow.css'

export default function WhyDevFlow() {
  return (
    <section id="why" className="section why" aria-labelledby="why-title">
      <div className="container why-layout">
        <header className="section-header why-intro reveal">
          <p className="section-eyebrow">Why DevFlow?</p>
          <h2 id="why-title" className="section-title">
            Developer tools belong inside the browser
          </h2>
          <p className="section-lead">
            Switching between a normal browser and a pile of separate tools breaks
            focus. DevFlow keeps browsing and debugging in one desktop workspace so
            you can move from page to request to inspection without losing context.
          </p>
        </header>

        <ol className="why-list">
          {WHY_POINTS.map((point, index) => (
            <li key={point.title} className="why-item reveal">
              <span className="why-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
