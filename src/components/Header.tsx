import './Header.css'

const NAV_LINKS = ['Home', 'Shop', 'About', 'Blog', 'Contact', 'Pages']

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#" className="header__logo">
          Bandage
        </a>
        <nav className="header__nav">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link}
              href="#"
              className={`header__nav-link${index === 0 ? ' header__nav-link--active' : ''}`}
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <a href="#" className="header__login">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Login / Register
          </a>
          <button type="button" className="header__icon-btn" aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button type="button" className="header__icon-btn" aria-label="Cart">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="header__icon-count">1</span>
          </button>
          <button type="button" className="header__icon-btn" aria-label="Wishlist">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
            </svg>
            <span className="header__icon-count">1</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
