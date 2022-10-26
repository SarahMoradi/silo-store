import { createContext, useContext, useReducer } from 'react'

import CartReducer from './CartReducer'

const cartContext = createContext()
const cartContextDispatcher = createContext()


const initialState = {
    //array of products in cart
  cart: [],
   //total price of products in cart
  total: 0,
}

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, initialState)

  return (
    <cartContext.Provider value={cart}>
      <cartContextDispatcher.Provider value={dispatch}>
        {children}
      </cartContextDispatcher.Provider>
    </cartContext.Provider>
  )
}

export default CartProvider

//custom hook for accessing context

export const useCart = () => useContext(cartContext)
export const useCartAction = () => useContext(cartContextDispatcher)
