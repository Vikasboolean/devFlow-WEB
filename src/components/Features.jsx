import { FEATURES } from '../data/features'
import { FeatureIcon } from './Icons'
import './Features.css'

export default function Features() {
  return (
    <section id="features" className="section features" aria-labelledby="features-title">
      <div className="container">
        <header className="section-header reveal">
          <p className="section-eyebrow">Features</p>
          <h2 id="features-title" className="section-title">
            Developer tools built into the browser
          </h2>
          <p className="section-lead">
            Everything you reach for while building and debugging — without leaving
            DevFlow.
          </p>
        </header>

        <ul className="feature-grid">
          {FEATURES.map((feature) => (
            <li key={feature.id} className="feature-card reveal">
              <span className="feature-icon" aria-hidden="true">
                <FeatureIcon name={feature.icon} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
