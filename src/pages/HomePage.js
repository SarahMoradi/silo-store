import * as data from '../data'

import Layout from '../Layout/Layout'
import { useCartAction } from '../context/CartProvider'

const HomePage = () => {
  const dispatch = useCartAction()

  const addToCartHandler = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }
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
                    Add to cart
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
