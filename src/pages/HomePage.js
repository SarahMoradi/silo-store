import * as data from '../data'

import { useCart, useCartAction } from '../context/CartProvider'

import Layout from '../Layout/Layout'
import { checkInCart } from '../utils/checkInCart'
import { toast } from 'react-toastify'

const HomePage = () => {
  const dispatch = useCartAction()

  const addToCartHandler = (product) => {
    toast.success(`${product.name} added to cart !`)
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }
  const { cart } = useCart()

  return (
    <Layout>
      <main className='container'>
        <section className='productList'>
          {data.products.map((product) => {
            return (
              <section className='product'>
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    width={230}
                    height={150}
                  />
                </div>
                <div className='productDesc'>
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                  <button onClick={() => addToCartHandler(product)}>
                    {checkInCart(cart, product) ? 'In cart' : 'Add to cart'}
                  </button>
                </div>
              </section>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}
export default HomePage
