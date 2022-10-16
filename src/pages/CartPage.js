import './CartPage.css'

import { useCart, useCartAction } from '../context/CartProvider'

import Layout from '../Layout/Layout'

const CartPage = () => {
  const cartState = useCart()
  const dispatch = useCartAction()

  const incrementHandler = (cartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: cartItem })
  }
  const decrementHandler = (cartItem) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: cartItem })
  }

  if (!cartState.cart.length)
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
          {cartState.cart.map((item) => {
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
                    Total price is: {item.price * item.quantity} $
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
        <section className='text-center cart-summary-container mt-1 w-25'>
          <h2>cart summary</h2>
        </section>
      </main>
    </Layout>
  )
}
export default CartPage
