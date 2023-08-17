import React from 'react'

function HomeSectionCard({product}) {
  return (
    <div className='cursor-pointer border flex flex-col item-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
      <div className='h-[13rem] w-[10rem] mx-auto'>
        <img src={product.image_url} className='object-cover object-top w-full h-full' alt="" />
      </div>
      <div className="p-4">
        <h3 className='text-lg text-sm text-gray-900'>{product.brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
      </div>
    </div>
  )
}

export default HomeSectionCard
