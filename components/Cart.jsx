import React from 'react'
import CartItem from '@/components/CartItem'

export default function Cart({ data, removeFromCart }) {
  return (
    <>
      {
        data.map((item, index) => {
            return <CartItem 
                key={item.id} 
                data={item} 
                removeFromCart={removeFromCart} 
            />
        })
      }
    </>
  )
}
