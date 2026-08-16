import './Footer.css'

const FOOTER_COLUMNS = [
  {
    heading: 'Company Info',
    links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
  },
  {
    heading: 'Legal',
    links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
  },
  {
    heading: 'Features',
    links: ['Business Marketing', 'User Analytic', 'Live Chat', 'Unlimited Support'],
  },
  {
    heading: 'Resources',
    links: ['IOS & Android', 'Watch a Demo', 'Customers', 'API'],
  },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <a href="#" className="footer__logo">
          Bandage
        </a>
        <div className="footer__social">
          <a href="#" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>
        </div>
      </div>

      <hr className="footer__divider" />

      <div className="footer__columns">
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.heading} className="footer__column">
            <h5 className="footer__column-heading">{column.heading}</h5>
            <div className="footer__links">
              {column.links.map((link) => (
                <a key={link} href="#" className="footer__link">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className="footer__column footer__column--subscribe">
          <h5 className="footer__column-heading">Get In Touch</h5>
          <form className="footer__subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your Email"
              className="footer__input"
              aria-label="Your Email"
            />
            <button type="submit" className="footer__subscribe-btn">
              Subscribe
            </button>
          </form>
          <p className="footer__form-hint">Lore imp sum dolor Amit</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">Made With Love By Finland All Right Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
