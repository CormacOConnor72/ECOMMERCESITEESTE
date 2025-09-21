import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ProductsPage from './components/ProductsPage'
import CartPage from './components/CartPage'
import './styles/index.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/collections" element={<div className="container p-4"><h2>Collections Coming Soon</h2></div>} />
            <Route path="/artist" element={<div className="container p-4"><h2>Artist Page Coming Soon</h2></div>} />
            <Route path="/about" element={<div className="container p-4"><h2>About Coming Soon</h2></div>} />
            <Route path="/wishlist" element={<div className="container p-4"><h2>Wishlist Coming Soon</h2></div>} />
            <Route path="/account" element={<div className="container p-4"><h2>Account Coming Soon</h2></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App