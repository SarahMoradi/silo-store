import './App.css'
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import CartPage from './pages/CartPage'
import CartProvider from './context/CartProvider'
import CheckoutPage from './pages/CheckoutPage'
import HomePage from './pages/HomePage'
import Layout from './Layout/Layout'
import Login from './pages/LoginPage'
import SignUp from './pages/SignupPage'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <CartProvider>
        <div className='App'>
          <Routes>
            <Route path='/cart' element={<CartPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/' element={<HomePage />} exact={true} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
