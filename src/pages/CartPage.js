import './CartPage.css'

import { useCart, useCartAction } from '../context/CartProvider'

import { Button } from 'reactstrap'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'

const CartPage = () => {
  const { cart, total } = useCart()
  const dispatch = useCartAction()

  const incrementHandler = (cartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: cartItem })
  }
  const decrementHandler = (cartItem) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: cartItem })
  }

  if (!cart.length)
    return (
      <Layout>
        <main>
          <h2>The Cart is empty!</h2>
        </main>
      </Layout>
    )
  return (
    <Layout>
      <main className='container'>
        <section className='w-75'>
          {cart.map((item) => {
            return (
              <div className='cartItem'>
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    width='100'
                    height='100'
                  />
                </div>
                <div>
                  <div className='selected-product'>{item.name}</div>
                  <div className='selected-product'>
                    Total price is: {item.offPrice * item.quantity} $
                  </div>
                </div>
                <div className='btn-container'>
                  <button onClick={() => incrementHandler(item)}>+</button>
                  <button>{item.quantity}</button>
                  <button onClick={() => decrementHandler(item)}>-</button>
                </div>
              </div>
            )
          })}
        </section>
        <CartSummery total={total} cart={cart} />
      </main>
    </Layout>
  )
}
export default CartPage

const CartSummery = ({ total, cart }) => {
  // const {cart, total} = useCart()

  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0

  return (
    <section className='text-center cart-summary-container mt-1 w-25'>
      <h2>cart summary</h2>
      <div className='d-flex justify-content-between mt-4'>
        <p>original total price</p>
        <p>{originalTotalPrice} $</p>
      </div>
      <div className='d-flex justify-content-between'>
        <p>cart discount</p>
        <p>{originalTotalPrice - total} $</p>
      </div>
      <hr />
      <div className='d-flex justify-content-between'>
        <p>net price</p>
        <p>{total} $</p>
      </div>
      <Link to='/checkout'>
        <Button color='success' className='w-100'>
          Go to checkout
        </Button>
      </Link>
    </section>
  )
}
