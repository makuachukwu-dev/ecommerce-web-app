import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
