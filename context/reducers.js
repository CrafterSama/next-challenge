import {
  GET_PRODUCTS,
  UPDATE_CART,
  GET_TOTAL_CART,
  ON_LOADING,
 } from './types'

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products
      };
    case UPDATE_CART:
      return {
        ...state,
        cart: action.cart
      };
    case ON_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case GET_TOTAL_CART:
      return {
        ...state,
        totalCart: action.totalCart
      }
    default: return state;
  }
}
