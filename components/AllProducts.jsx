'use client'
import React, {useState} from 'react'
import Cart from '@/components/Cart';
import Product from '@/components/Product'

export default function AllProducts() {
    const data = [
        {id: '1',productName:'Product A', price: 199},
        {id: '2',productName:'Product B', price: 299},
        {id: '3',productName:'Product C', price: 399},
        {id: '4',productName:'Product D', price: 499},
    ]
    const [productsInCart, setProductsInCart] = useState([]);
    const addToCart = (product) => {
        const updatedCart = [...productsInCart];
        const index = productsInCart.findIndex(item => product.id === item.id);
        if (index !== -1) {
            updatedCart[index] = { 
                id: product.id,
                productName: product.productName,
                price: product.price, 
                count: updatedCart[index].count + 1
            }
        } else {
            updatedCart.push({
                id: product.id,
                productName: product.productName,
                price: product.price, 
                count: 1
            })
        }
        setProductsInCart(updatedCart);
    }
    const removeFromCart = (product) => {
        const updatedCart = [...productsInCart];
        const index = productsInCart.findIndex(item => product.id === item.id);
        if (index !== -1) {
            updatedCart.splice(index, 1);
            setProductsInCart(updatedCart);
        } 
    }

    return (
    <div className='flex flex-col items-start justify-start sm:flex-row sm:justify-around min-h-screen w-full'>
        <div className='flex flex-col w-full sm:w-6/12 border-2 border-gray-400 p-3 sm:m-3 shadow-md'>
        <h3>Products</h3>
          {
            data.map((item, index) => {
                return <Product 
                    key={item.id} 
                    data={item} 
                    addToCart={addToCart} 
                />
            })
          }
        </div>
        <div className='flex flex-col w-full mt-3 sm:w-6/12 border-2 border-gray-400 p-3 sm:m-3 shadow-md'>
            <h3>Cart</h3>
            {productsInCart.length?
            <Cart 
                data={productsInCart} 
                removeFromCart={removeFromCart} 
            />:
            <div className='flex justify-center items-center text-red-500 pb-5'>
                No Product In Cart
            </div>
            }
        </div>
    </div>
    )
}
