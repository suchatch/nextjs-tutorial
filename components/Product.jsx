import React from 'react'

export default function Product({data, addToCart}) {
  return (
    <div className='flex border-2 border-gray-300 bg-white justify-between mt-3 p-5'>
        <div className='w-7/12'>{data.productName}</div>
        <div className='w-2/12'>{data.price}</div>
        <button className="w-3/12 hover:ring-blue-500 hover:ring-2 hover:rounded-sm active:bg-blue-400" onClick={addToCart.bind(this, data)}>
            Add To Cart
        </button>
    </div>
  )
}
