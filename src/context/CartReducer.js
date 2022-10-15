const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCart = [...state.cart]
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      )
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 })
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] }
        updatedItem.quantity++
        updatedCart[updatedItemIndex] = updatedItem
      }

      return { ...state, cart: updatedCart }
    default:
      return state
  }
}

export default CartReducer
