import reviewer from '../assets/testimonials/reviewer.png'
import gallery1 from '../assets/testimonials/gallery-1.png'
import gallery2 from '../assets/testimonials/gallery-2.png'
import gallery3 from '../assets/testimonials/gallery-3.png'
import gallery4 from '../assets/testimonials/gallery-4.png'
import gallery5 from '../assets/testimonials/gallery-5.png'
import gallery6 from '../assets/testimonials/gallery-6.png'
import gallery7 from '../assets/testimonials/gallery-7.png'
import gallery8 from '../assets/testimonials/gallery-8.png'
import gallery9 from '../assets/testimonials/gallery-9.png'
import './Testimonials.css'

const GALLERY_IMAGES = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
]

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__row">
        <div className="testimonials__content">
          <h2 className="testimonials__heading">What they say about us</h2>
          <img src={reviewer} alt="Regina Miles" className="testimonials__avatar" />
          <div className="testimonials__stars">
            {[1, 2, 3, 4].map((star) => (
              <svg key={star} width="18" height="18" viewBox="0 0 24 24" fill="#FFC633">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
              </svg>
            ))}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFC633" strokeWidth="1.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
            </svg>
          </div>
          <p className="testimonials__description">
            Slate helps you see how many more days you need to work to reach your financial goal.
          </p>
          <a href="#" className="testimonials__name">
            Regina Miles
          </a>
          <p className="testimonials__job">Designer</p>
        </div>
        <div className="testimonials__gallery">
          {GALLERY_IMAGES.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery item ${index + 1}`}
              className="testimonials__gallery-item"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
