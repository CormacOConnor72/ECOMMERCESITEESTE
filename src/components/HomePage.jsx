import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>Wearable Art</h1>
            <p className="hero-subtitle">
              Unique clothing designs crafted by talented artists. Express yourself through art you can wear.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn-hero">
                🛍️ Shop Collection
              </Link>
              <Link to="/artist" className="btn-hero secondary">
                🎨 Meet the Artist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="grid grid-3">
            <div className="feature-card text-center">
              <div className="feature-icon">🎨</div>
              <h3>Original Designs</h3>
              <p>Each piece features unique artwork created exclusively by our featured artist.</p>
            </div>
            <div className="feature-card text-center">
              <div className="feature-icon">❤️</div>
              <h3>Premium Quality</h3>
              <p>High-quality fabrics and printing ensure your wearable art lasts.</p>
            </div>
            <div className="feature-card text-center">
              <div className="feature-icon">🛍️</div>
              <h3>Limited Editions</h3>
              <p>Exclusive designs in limited quantities. Own something truly special.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="featured-products">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Featured Collection</h2>
            <p>Discover our most popular wearable art pieces</p>
          </div>

          <div className="grid grid-3 mb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card product-preview">
                <div className="product-image-placeholder">
                  <div className="placeholder-text">Featured Design {i}</div>
                </div>
                <div className="product-info">
                  <h3>Featured Design {i}</h3>
                  <p>Unique artistic expression on premium fabric</p>
                  <div className="flex-between">
                    <span className="price">€{(49.99 + i * 10).toFixed(2)}</span>
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products" className="btn-large">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}