import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0) // Will be replaced with context

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            Este<span className="logo-accent">Art</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <Link to="/products" className="nav-link">Shop</Link>
            <Link to="/collections" className="nav-link">Collections</Link>
            <Link to="/artist" className="nav-link">Artist</Link>
            <Link to="/about" className="nav-link">About</Link>
          </nav>

          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>

          {/* Action Icons */}
          <div className="header-actions">
            <Link to="/wishlist" className="action-btn" title="Wishlist">
              ❤️
            </Link>
            <Link to="/account" className="action-btn" title="Account">
              👤
            </Link>
            <Link to="/cart" className="action-btn cart-btn" title="Cart">
              🛒
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <Link
                to="/products"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/collections"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </Link>
              <Link
                to="/artist"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Artist
              </Link>
              <Link
                to="/about"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}