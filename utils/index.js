import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const ReactSwal = withReactContent(Swal)

export const cartTotal = (cart) => {
  let totalCart = 0
  cart.forEach(product => {
    const subTotal = Number(product.quantity*product.price)
    totalCart += subTotal
  });
  return totalCart
}

export const updateCartItem = (product, cart, isAdd = false) => {
  const oldIndex = cart.findIndex(item => item.id === product.id)
  if (Number(product.quantity) === 0) {
    cart = cart.length > 1 ? cart.filter(item => item.id !== product.id) : []
    return cart
  }
  cart[oldIndex].quantity = isAdd ? Number(cart[oldIndex].quantity) + 1 : product.quantity
  return cart
}
