import { useState } from 'react'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [products, setProducts] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 't-shirts',
    sizes: ['S', 'M', 'L'],
    colors: ['Black'],
    stockCount: '',
    featured: false,
    tags: '',
    image: ''
  })

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === '123456') {
      setIsAuthenticated(true)
      setPassword('')
    } else {
      alert('Invalid password')
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSizesChange = (e) => {
    const sizes = e.target.value.split(',').map(size => size.trim())
    setFormData(prev => ({ ...prev, sizes }))
  }

  const handleColorsChange = (e) => {
    const colors = e.target.value.split(',').map(color => color.trim())
    setFormData(prev => ({ ...prev, colors }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newProduct = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      category: formData.category,
      sizes: formData.sizes,
      colors: formData.colors,
      stockCount: parseInt(formData.stockCount),
      inStock: parseInt(formData.stockCount) > 0,
      featured: formData.featured,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      image: formData.image || `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format&q=60`
    }

    setProducts(prev => [...prev, newProduct])

    // Reset form
    setFormData({
      name: '',
      description: '',
      price: '',
      category: 't-shirts',
      sizes: ['S', 'M', 'L'],
      colors: ['Black'],
      stockCount: '',
      featured: false,
      tags: '',
      image: ''
    })

    alert('Product created successfully!')
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-page">
        <div className="container">
          <div className="admin-login">
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page">
      <div className="container">
        <div className="admin-header">
          <h1>Admin Panel</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="btn-secondary"
          >
            Logout
          </button>
        </div>

        <div className="admin-content">
          <div className="admin-section">
            <h2>Create New Product</h2>
            <form onSubmit={handleSubmit} className="product-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Product Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Category:</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="t-shirts">T-Shirts</option>
                    <option value="hoodies">Hoodies</option>
                    <option value="tank-tops">Tank Tops</option>
                    <option value="polo-shirts">Polo Shirts</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="price">Price (EUR):</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="stockCount">Stock Count:</label>
                  <input
                    type="number"
                    id="stockCount"
                    name="stockCount"
                    value={formData.stockCount}
                    onChange={handleInputChange}
                    min="0"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="sizes">Sizes (comma-separated):</label>
                  <input
                    type="text"
                    id="sizes"
                    value={formData.sizes.join(', ')}
                    onChange={handleSizesChange}
                    placeholder="XS, S, M, L, XL, XXL"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="colors">Colors (comma-separated):</label>
                  <input
                    type="text"
                    id="colors"
                    value={formData.colors.join(', ')}
                    onChange={handleColorsChange}
                    placeholder="Black, White, Navy, Red"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="tags">Tags (comma-separated):</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="artistic, limited, trending"
                />
              </div>

              <div className="form-group">
                <label htmlFor="image">Image URL (optional):</label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                  />
                  Featured Product
                </label>
              </div>

              <button type="submit" className="btn-primary">Create Product</button>
            </form>
          </div>

          <div className="admin-section">
            <h2>Created Products ({products.length})</h2>
            <div className="products-list">
              {products.length === 0 ? (
                <p>No products created yet.</p>
              ) : (
                products.map(product => (
                  <div key={product.id} className="product-item">
                    <h4>{product.name}</h4>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Price:</strong> €{product.price.toFixed(2)}</p>
                    <p><strong>Stock:</strong> {product.stockCount}</p>
                    <p><strong>Featured:</strong> {product.featured ? 'Yes' : 'No'}</p>
                    <p><strong>Sizes:</strong> {product.sizes.join(', ')}</p>
                    <p><strong>Colors:</strong> {product.colors.join(', ')}</p>
                    {product.tags.length > 0 && (
                      <p><strong>Tags:</strong> {product.tags.join(', ')}</p>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}