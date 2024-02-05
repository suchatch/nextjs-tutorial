'use client'
import React, {useReducer} from 'react'
import Product from '@/components/Product'
import reducer from '@/store/reducer'
import AddProductForm from './AddProductForm'

export default function AllProducts({data}) {
    const [products, dispatch] = useReducer(reducer, data)
    return (
    <div className='flex flex-col justify-start items-center min-w-full min-h-screen'>  
        <div className='text-2xl text-gray-600 my-2'>
            Products List
        </div>
        {/* แสดงแบบฟอร์มการเพิ่มสินค้า */}
        <AddProductForm dispatch={dispatch} />
        <div className='flex justify-start items-center content-start flex-wrap w-full'>
            {
                // จำนวนสินค้าไม่เท่ากับศูนย์ ให้แสดงรายการสินค้าออกมา
                products.length !==0 && products.map((item, index) => {
                    return (
                        <Product key={index} data={item} dispatch={dispatch} />
                    )
                })
            }
            {
                // ไม่พบสินค้าแสดงข้อความ Product Not Found
                products.length === 0 && 
                <div className="flex justify-center items-center pb-80 text-blue-500 text-xl mx-auto min-h-screen">
                    <div><h3>Product Not Found</h3></div>
                </div>
            }
        </div>
    </div>
    )
}
