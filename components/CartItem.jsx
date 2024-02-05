import React from 'react'

export default function CartItem( {data, removeFromCart}) {
  return (
    <div className='flex border-2 border-gray-300 bg-white justify-between mt-3 p-5'>
        <div className='w-7/12'>{data.productName}</div>
        <div className='w-2/12'>{data.count}</div>
        <button className="w-3/12 hover:ring-red-500 hover:ring-2 hover:rounded-sm active:bg-red-400" onClick={removeFromCart.bind(this, data)}>Remove</button>
    </div>
  )
}
