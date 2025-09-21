import { useState } from 'react'
import { sampleProducts, categories } from '../data/products'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = sampleProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      default:
        return 0
    }
  })

  return (
    <div className="products-page">
      <div className="container">
        {/* Header */}
        <div className="products-header">
          <h1>Our Collection</h1>
          <div className="products-controls">
            <div className="search-section">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-products"
              />
            </div>
            <div className="sort-section">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="featured">Featured</option>
                <option value="name">Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="products-content">
          {/* Sidebar */}
          <aside className="products-sidebar">
            <div className="sidebar-section">
              <h3>Categories</h3>
              <div className="category-filters">
                {categories.map((category) => (
                  <label key={category.id} className="category-option">
                    <input
                      type="radio"
                      name="category"
                      value={category.id}
                      checked={selectedCategory === category.id}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    <span>{category.name} ({category.count})</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="products-main">
            <div className="products-info">
              Showing {sortedProducts.length} of {sampleProducts.length} products
            </div>

            {sortedProducts.length === 0 ? (
              <div className="no-products">
                <h3>No products found</h3>
                <p>Try adjusting your search or filters</p>
                <button onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}>
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        {product.featured && (
          <span className="product-badge featured">Featured</span>
        )}
        {product.stockCount < 10 && (
          <span className="product-badge low-stock">Low Stock</span>
        )}
        {product.tags?.includes('limited-edition') && (
          <span className="product-badge limited">Limited</span>
        )}
      </div>

      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-options">
          {product.sizes && (
            <div className="product-sizes">
              <span className="options-label">Sizes:</span>
              <div className="size-list">
                {product.sizes.slice(0, 3).map((size) => (
                  <span key={size} className="size-tag">{size}</span>
                ))}
                {product.sizes.length > 3 && (
                  <span className="more-options">+{product.sizes.length - 3}</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="product-footer">
          <span className="product-price">€{product.price.toFixed(2)}</span>
          <button
            className="add-to-cart-btn"
            disabled={!product.inStock}
          >
            {product.inStock ? '🛒 Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  )
}