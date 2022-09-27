import './App.css'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import CartPage from './pages/CartPage'
import CartProvider from './context/CartProvider'
import HomePage from './pages/HomePage'
import Layout from './Layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className='App'>
          <Routes>
            <Route path='/' element={<HomePage />} exact={true} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
