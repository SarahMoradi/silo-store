import * as data from '../data'

import Layout from '../Layout/Layout'

const HomePage = () => {
  return (
    <Layout>
      <main>
        <section>
          <span>
            {data.products.map((product) => {
              return (
                <section>
                  <div>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                  </div>
                </section>
              )
            })}
          </span>
        </section>
      </main>
    </Layout>
  )
}
export default HomePage
