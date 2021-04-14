import React, { useEffect } from 'react'
import ProductCard from '../ProductCard'
import { useStateValue } from '../../context'
import { getProducts, initializeCartState} from '../../context/actions'


const ProductList = () => {

  const [state, dispatch] = useStateValue()

  useEffect(() => {
    if (state.loading) {
      getProducts(dispatch)
      initializeCartState(dispatch)
    }
  }, [state.loading])


  return (
    <>
      {state.loading ? (
        <div className="flex w-full justify-center items-center h-screen">
          <div className="border-gray-600 border-left:border-indigo-400 w-24 h-24 animate-spin"></div>
        </div>
      ) : (
        <div className="holder mx-auto md:w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5">
          {state.products.map((item => (
            <ProductCard key={item.id} item={item} />
          )))}
        </div>
      )}
    </>
  )
}

export default ProductList
