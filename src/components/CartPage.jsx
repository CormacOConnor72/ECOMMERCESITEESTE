import { useState } from 'react'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    // Sample cart items for demonstration
    {
      id: '1',
      name: 'Abstract Dreams T-Shirt',
      price: 49.99,
      quantity: 2,
      size: 'M',
      color: 'Black',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop'
    },
    {
      id: '2',
      name: 'Cosmic Journey Hoodie',
      price: 79.99,
      quantity: 1,
      size: 'L',
      color: 'Navy',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop'
    }
  ])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id))
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.21 // 21% VAT for Netherlands
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Looks like you haven&apos;t added any items to your cart yet.</p>
            <a href="/products" className="btn-large">Continue Shopping</a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="item-details">
                  <h3>{item.name}</h3>
                  <div className="item-options">
                    <span>Size: {item.size}</span>
                    <span>Color: {item.color}</span>
                  </div>
                  <div className="item-price">€{item.price.toFixed(2)} each</div>
                </div>

                <div className="item-quantity">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>

                <div className="item-total">
                  €{(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="remove-btn"
                  title="Remove item"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Subtotal:</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'Free' : `€${shipping.toFixed(2)}`}</span>
              </div>

              <div className="summary-row">
                <span>VAT (21%):</span>
                <span>€{tax.toFixed(2)}</span>
              </div>

              <div className="summary-row total">
                <span>Total:</span>
                <span>€{total.toFixed(2)}</span>
              </div>

              {shipping > 0 && (
                <div className="shipping-notice">
                  <small>Free shipping on orders over €50</small>
                </div>
              )}

              <button className="checkout-btn">
                Proceed to Checkout
              </button>

              <div className="payment-info">
                <small>
                  We accept all major credit cards and local payment methods including iDEAL.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}