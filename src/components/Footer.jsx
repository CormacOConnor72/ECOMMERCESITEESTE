import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <h3 className="footer-brand">
              Este<span className="logo-accent">Art</span>
            </h3>
            <p className="footer-description">
              Wearable art for creative souls. Each piece tells a story.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" title="Instagram">📷</a>
              <a href="#" className="social-link" title="Email">📧</a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="footer-section">
            <h4 className="footer-title">Shop</h4>
            <ul className="footer-links">
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/collections/t-shirts">T-Shirts</Link></li>
              <li><Link to="/collections/hoodies">Hoodies</Link></li>
              <li><Link to="/collections/limited">Limited Edition</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><Link to="/size-guide">Size Guide</Link></li>
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4 className="footer-title">Stay Updated</h4>
            <p className="newsletter-text">
              Get notified about new designs and exclusive offers
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Your email"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Join</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © 2024 EsteArt. All rights reserved.
            </div>
            <div className="location">
              📍 Netherlands
            </div>
          </div>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/vat-info">VAT Information</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}