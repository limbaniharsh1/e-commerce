import React from 'react'
import "./ProductCart.css"

const ProductCart = ({product}) => {
  return (
    <div className='productcard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.image_url} alt="img"/>
      </div>
      <div className='textpart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className='font-semibold flex items-center space-x-2'>
          <p>₹{product.price}</p>
          <p className='text-green-600'>30% off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
