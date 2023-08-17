import React from 'react'
import "./ProductCart.css"

const ProductCart = () => {
  return (
    <div className='productcard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="img"/>
      </div>
      <div className='textpart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>universalOutfit</p>
          <p>casual puff sleeves top</p>
        </div>
        <div className='font-semibold flex items-center space-x-2'>
          <p>₹199</p>
          <p className='text-green-600'>30% off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
