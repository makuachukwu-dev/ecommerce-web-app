import ctaBg from '../assets/cta/cta-bg.png'
import './CtaBanner.css'

function CtaBanner() {
  return (
    <section className="cta-banner" style={{ backgroundImage: `url(${ctaBg})` }}>
      <div className="cta-banner__inner">
        <div className="cta-banner__content">
          <p className="cta-banner__eyebrow">Designing Better Experience</p>
          <h2 className="cta-banner__heading">
            Problems trying to resolve the conflict between
          </h2>
          <p className="cta-banner__description">
            Problems trying to resolve the conflict between the two major realms of Classical
            physics.
          </p>
          <p className="cta-banner__price">$16.48</p>
          <button type="button" className="cta-banner__btn">
            Add Your Call To Action
          </button>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
