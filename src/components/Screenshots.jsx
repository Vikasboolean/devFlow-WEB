import { SCREENSHOT_SLOTS } from '../data/features'
import './Screenshots.css'

export default function Screenshots() {
  return (
    <section
      id="screenshots"
      className="section screenshots"
      aria-labelledby="screenshots-title"
    >
      <div className="container">
        <header className="section-header reveal">
          <p className="section-eyebrow">Product screenshots</p>
          <h2 id="screenshots-title" className="section-title">
            See DevFlow in action
          </h2>
          <p className="section-lead">
            A closer look at the browser and built-in tools that bring your
            development workflow together.
          </p>
        </header>

        <div className="shot-grid">
          {SCREENSHOT_SLOTS.map((slot) => (
              <figure key={slot.id} className="shot-card reveal">
              <div className="shot-frame">
                <img
                  src={slot.image}
                  alt={`${slot.title} in the DevFlow browser`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption>
                <h3>{slot.title}</h3>
                <p>{slot.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
