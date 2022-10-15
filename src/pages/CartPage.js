import './CartPage.css'

import Layout from '../Layout/Layout'
import { useCart } from '../context/CartProvider'

const CartPage = () => {
  const cartState = useCart()
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
      <div className='text-center mt-1'>
        <h2>cart summary</h2>
      </div>
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
                  <div className='selected-product'>Total price is: {item.price * item.quantity} $</div>
                </div>
                <div className='btn-container'>
                  <button>+</button>
                  <button>{item.quantity}</button>
                  <button>-</button>
                </div>
              </div>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}
export default CartPage
