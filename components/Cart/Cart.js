import React from 'react'
import Link from 'next/link'
import { useStateValue } from '../../context'
import { resetStore, updateCart } from '../../context/actions'
import { ReactSwal } from '../../utils'
import {
  DELETE_TITLE_TEXT,
  EMPTY_CART_TITLE_TEXT,
  DELETE_WARNING_TEXT,
  SWEET_ALERT_WARNING_ICON,
  SWEET_ALERT_SUCCESS_ICON,
  CONFIRM_BUTTON_TEXT,
  CONFIRM_EMPTY_BUTTON_TEXT,
  CONFIRM_DELETE_TEXT,
  CONFIRM_EMPTY_CART_TEXT,
  CONFIRM_BUTTON_COLOR,
  CANCEL_BUTTON_COLOR,
  SHOP_CONFIRM,
  THANKS_TEXT
} from '../../constants'

const Cart = () => {

  const [state, dispatch] = useStateValue()
 
  const onChange = (event, product) => {
    product['quantity'] = Number(event.target.value)
    if (Number(event.target.value) === 0) {
      ReactSwal.fire({
        title: DELETE_TITLE_TEXT,
        text: DELETE_WARNING_TEXT,
        icon: SWEET_ALERT_WARNING_ICON,
        showCancelButton: true,
        confirmButtonColor: CONFIRM_BUTTON_COLOR,
        cancelButtonColor: CANCEL_BUTTON_COLOR,
        confirmButtonText: CONFIRM_BUTTON_TEXT
      }).then((result) => {
        if (result.isConfirmed) {
          ReactSwal.fire(
            CONFIRM_DELETE_TEXT,
            '',
            SWEET_ALERT_SUCCESS_ICON
          )
          updateCart(product, dispatch)
        } else {
          event.target.value = 1
        }
      })
    } else {
      updateCart(product, dispatch)
    }

  }

  const onRemoveItem = (product) => {
    product['quantity'] = 0;
    ReactSwal.fire({
      title: DELETE_TITLE_TEXT,
      text: DELETE_WARNING_TEXT,
      icon: SWEET_ALERT_WARNING_ICON,
      showCancelButton: true,
      confirmButtonColor: CONFIRM_BUTTON_COLOR,
      cancelButtonColor: CANCEL_BUTTON_COLOR,
      confirmButtonText: CONFIRM_BUTTON_TEXT
    }).then((result) => {
      if (result.isConfirmed) {
        ReactSwal.fire(
          CONFIRM_DELETE_TEXT,
          '',
          SWEET_ALERT_SUCCESS_ICON
        )
        updateCart(product, dispatch)
      }
    })
  }

  const onEmptyCart = () => {
    ReactSwal.fire({
      title: EMPTY_CART_TITLE_TEXT,
      text: DELETE_WARNING_TEXT,
      icon: SWEET_ALERT_WARNING_ICON,
      showCancelButton: true,
      confirmButtonColor: CONFIRM_BUTTON_COLOR,
      cancelButtonColor: CANCEL_BUTTON_COLOR,
      confirmButtonText: CONFIRM_EMPTY_BUTTON_TEXT
    }).then((result) => {
      if (result.isConfirmed) {
        ReactSwal.fire(
          CONFIRM_EMPTY_CART_TEXT,
          '',
          SWEET_ALERT_SUCCESS_ICON
        )
        resetStore(dispatch)
      }
    })
  }

  const onEndShoppingProccess = () => {
    ReactSwal.fire({
      title: SHOP_CONFIRM,
      text: THANKS_TEXT,
      icon: SWEET_ALERT_SUCCESS_ICON,
      showConfirmButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        resetStore(dispatch)
      }
    })
  }

  return (
    <div className="flex justify-center my-6">
      <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
        <div className="flex-1">
          <table className="w-full text-sm lg:text-base" cellSpacing="0">
            <thead>
              <tr className="h-12 uppercase">
                <th className="hidden md:table-cell"></th>
                <th className="text-left">Product</th>
                <th className="lg:text-right text-left pl-5 lg:pl-0">
                  <span className="lg:hidden" title="Quantity">Qtd</span>
                  <span className="hidden lg:inline">Quantity</span>
                </th>
                <th className="hidden text-right md:table-cell">Unit price</th>
                <th className="text-right">Total price</th>
              </tr>
            </thead>
            <tbody>
              {state.cart.map(item => (
                <tr key={item.id}>
                  <td className="hidden pb-4 md:table-cell">
                    <a href="#">
                      <img src={item.cover} className="w-20 rounded" alt="Thumbnail" />
                    </a>
                  </td>
                  <td>
                    <p className="mb-2 md:ml-4 md:w-96 sm:w-10 sm:truncate" title={item.name}>{item.name}</p>
                    <button onClick={() => onRemoveItem(item)} type="button" className="text-gray-700 md:ml-4">
                      <small className="text-red-800 hover:text-red-600 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Quitar Producto
                      </small>
                    </button>
                  </td>
                  <td className="justify-center md:justify-end md:flex md:mt-8">
                  <div className="w-20 h-10">
                    <div className="relative flex flex-row w-full h-8">
                    <input onChange={(e) => onChange(e, item)} type="number" defaultValue={item.quantity} min="0"
                      className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                    </div>
                  </div>

                  </td>
                  <td className="hidden text-right md:table-cell">
                    <span className="text-sm lg:text-base font-medium">
                      ${item.price}
                    </span>
                  </td>
                  <td className="text-right">
                    <span className="text-sm lg:text-base font-medium">
                      ${(Number(item.quantity)*Number(item.price)).toFixed(2)}
                    </span>
                  </td>
                </tr> 
              ))}
            </tbody>
          </table>
          {state.cart.length == 0 && (
            <p className="w-full text-center my-8">No Hay <Link href={{ pathname: '/' }}><a className="font-bold underline">Productos</a></Link> en el Carrito de Compras</p>
          )}
          <hr className="pb-6 mt-6" />
          <div className="my-4 mt-6 -mx-2 lg:flex">
            <div className="lg:px-2 lg:w-1/2">
            </div>
            <div className="lg:px-2 lg:w-1/2">
              <div className="flex justify-between pt-4 border-b">
                <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                  Total
                </div>
                <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                  ${state.totalCart.toFixed(2)}
                </div>
              </div>
              {state.cart.length > 0 && (
                <div className="md:flex xs:flex-col md:space-x-4 md:justify-between pt-4 grid">
                  <button onClick={onEmptyCart} className="flex justify-center w-full px-10 py-3 mt-6 font-medium rounded text-white uppercase bg-gray-400 rounded-full shadow item-center hover:bg-gray-500 focus:shadow-outline focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <span className="ml-2 mt-5px">Vaciar Carro</span>
                  </button>
                  <button onClick={onEndShoppingProccess} className="flex justify-center w-full px-10 py-3 mt-6 rounded font-medium text-white uppercase bg-indigo-600 rounded-full shadow item-center hover:bg-indigo-400 focus:shadow-outline focus:outline-none">
                    <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>
                    <span className="ml-2 mt-5px">Finalizar Compra</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
