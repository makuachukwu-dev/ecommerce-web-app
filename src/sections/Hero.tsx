import plateCoconut from '../assets/hero/plate-coconut.png'
import flowerVase from '../assets/hero/flower-vase.png'
import hangingLight from '../assets/hero/hanging-light.png'
import ceramicBowls from '../assets/hero/ceramic-bowls.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid">
        <div
          className="hero__tile hero__tile--large"
          style={{ backgroundImage: `url(${plateCoconut})` }}
        >
          <div className="hero__tile-content">
            <span className="hero__tile-badge">5 Items</span>
            <h2 className="hero__tile-heading hero__tile-heading--large">FURNITURE</h2>
            <a href="#" className="hero__tile-link">
              Read More
            </a>
          </div>
        </div>
        <div className="hero__right">
          <div className="hero__tile hero__tile--wide hero__tile-pink">
            <div className="hero__tile-content">
              <span className="hero__tile-badge">5 Items</span>
              <h3 className="hero__tile-heading">FURNITURE</h3>
              <a href="#" className="hero__tile-link">
                Read More
              </a>
            </div>
            <img src={flowerVase} alt="Flower vase" className="hero__tile-image" />
          </div>
          <div className="hero__right-bottom">
            <div className="hero__tile hero__tile-gray">
              <div className="hero__tile-content">
                <span className="hero__tile-badge">5 Items</span>
                <h3 className="hero__tile-heading">FURNITURE</h3>
                <a href="#" className="hero__tile-link">
                  Read More
                </a>
              </div>
              <img src={hangingLight} alt="Hanging light" className="hero__tile-image hero__tile-image--hang" />
            </div>
            <div
              className="hero__tile hero__tile--cover"
              style={{ backgroundImage: `url(${ceramicBowls})` }}
            >
              <div className="hero__tile-content">
                <span className="hero__tile-badge">5 Items</span>
                <h3 className="hero__tile-heading">FURNITURE</h3>
                <a href="#" className="hero__tile-link">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
