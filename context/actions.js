import {
  GET_PRODUCTS,
  UPDATE_CART,
  GET_TOTAL_CART,
  ON_LOADING,
} from '../context/types'
import { 
  API_URL,
  LOCAL_STORAGE_CART_KEY,
  LOCAL_STORAGE_TOTAL_CART_KEY,
} from '../constants'
import { fetchData } from '../services'
import { cartTotal, updateCartItem } from '../utils'

export const getProducts = async (dispatch) => {
  
  dispatch({
    type: ON_LOADING,
    loading: true,
  })
  
  let products

  const response = await fetchData(API_URL)

  if (response) {
    products = response
  } else {
    products = []
  }
  
  dispatch({
    type: GET_PRODUCTS,
    products,
  })

  dispatch({
    type: ON_LOADING,
    loading: false,
  })
}

export const initializeCartState = (dispatch) => {
  let cart
  const cartKeeped = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY))
  
  if (cartKeeped) {
    cart = cartKeeped
  } else {
    cart = []
  }

  dispatch({
    type: UPDATE_CART,
    cart,
  })
}

export const getTotalCart = (cart, dispatch) => {
  let totalCart

  totalCart = cartTotal(cart)

  localStorage.setItem(LOCAL_STORAGE_TOTAL_CART_KEY, JSON.stringify(totalCart))

  dispatch({
    type: GET_TOTAL_CART,
    totalCart,
  })
}

export const updateCart = (product, dispatch, isAdd = false) => {
    
  let cart
  const cartKeeped = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY))
  
  if (cartKeeped) {
    if (cartKeeped.find(item => item.id === product.id)) {
      cart = updateCartItem(product, cartKeeped, isAdd)
    } else {
      cart = [...cartKeeped, product]
    }
  } else {
    cart = [product]
  }
  console.log(cartKeeped, cart)  
  localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cart))
    
  dispatch({
    type: UPDATE_CART,
    cart,
  })

  getTotalCart(cart, dispatch)

}

export const resetStore = (dispatch) => {
  localStorage.clear();
  const cart = []
  const totalCart = 0
  dispatch({
    type: UPDATE_CART,
    cart,
  })
  dispatch({
    type: GET_TOTAL_CART,
    totalCart,
  })
}