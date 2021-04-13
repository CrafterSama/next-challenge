import React from 'react'
import { useStateValue } from '../../context'
import { updateCart } from '../../context/actions'

const ProductCard = ({ item }) => {

  const [, dispatch] = useStateValue()

  const addProductToCart = (product) => {
    product['quantity'] = 1
    updateCart(product, dispatch, true);
  };

  return (
    <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative rounded">
      <div className="relative overflow-hidden max-h-60 rounded-t">
        <img className="w-full" src={item.cover} alt={item.name} />
        <div className="badge absolute top-2 left-2 bg-yellow-500 m-1 text-gray-100 uppercase p-1 px-2 text-xs font-bold rounded">Hot</div>
        <span className="badge absolute bottom-2 right-2 bg-indigo-500 text-blue-100 rounded px-1 text-lg font-bold cursor-pointer self-end">${ item.price }</span>
      </div>
      <div className="desc p-4 text-gray-800 flex flex-col">
        <h2 className="title text-xl font-bold block truncate max-w-xs mb-8 hover:text-indigo-400 cursor-pointer" title={item.name}>{ item.name }</h2>
        <div className="grid">
          <button onClick={() => addProductToCart(item)} className="text-sm block py-2 mb-2 bg-indigo-400 text-white uppercase rounded font-bold p-5 self-end">Agregar al Carrito</button>
        </div>
      </div>
  </div>
  )
}

export default ProductCard
