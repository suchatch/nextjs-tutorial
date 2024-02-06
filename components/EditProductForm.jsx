'use client'

import { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { mutate } from 'swr';
import Title from '@/components/Title';

export default function EditProductForm({sku}) {
    const router = useRouter()
    
    const [product, setProduct] = useState(null)
    
    const [isLoading, setIsLoading] = useState(false);
    
    const [message, setMessage] = useState({
        text:null,
        error: false
    });
    async function updateProduct() {
        const res = await fetch(`/api/products/${sku}`, {
            method: 'POST',
            body: JSON.stringify({
                productName: product.productName,
                price: product.price
            })
        });
        if (!res.ok) {
            setMessage("Error cannot set data: product to API");
        }
        return res.json();
    }
    async function getProductData() {
        setIsLoading(true)
        const res = await fetch(`/api/products/${sku}`)
        if (!res.ok) {
            setMessage("Error cannot set data: product to API");
        }
        const currentProduct = await res.json();
        setProduct(currentProduct)
        if(!currentProduct.productSKU) {
            router.push('/products')
        }
        setIsLoading(false)
    }
    useEffect(() => {
        getProductData()
    },[])
  async function handleSubmit(event) {
    event.preventDefault();
    
    setIsLoading(true)
    try {
        setMessage({...message, text:'', error: false})
        
        
        updateProduct()
        
        setMessage({...message, text:'Edit Product Successfully!', error: false})
        
        mutate('/api/products')
    } catch (error) {
        
        setMessage({...message, text:error.message, error: true})
    } finally {
        setIsLoading(false)
    }
  };
  
  if(!product) {
    return null
  }
  
  if(isLoading) {
    return   <Loading /> 
  }
  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pb-24">
    <Title text="แบบฟอร์มแก้ไขสินค้า" />
    { 
    
    message.text && 
    <div 
    
    className={`text-center w-full max-w-xl  ${message.error?'bg-red-200':'bg-green-200'} rounded-sm shadow-md p-4 my-2`}
    >
        {message.text}
    </div>
    }
    
    <form
    onSubmit={handleSubmit}
    className="w-full max-w-xl bg-white rounded-sm shadow-md p-6"
    >
    <div className="mt-4">
        <div className="mt-4">
        <label className="block">
            <span className="text-sm text-gray-600">รหัส SKU</span>
            
            <input
            type="text"
            required
            defaultValue={product.productSKU}
            disabled
            className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
        </label>
        <label className="block mt-4">
            <span className="text-sm text-gray-600">ชื่อสินค้า</span>
            
            <input
            type="text"
            required
            defaultValue={product.productName}
            onChange={(e) => setProduct({...product, productName: e.target.value})}
            className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
        </label>
        <label className="block mt-4">
            <span className="text-sm text-gray-600">ราคา</span>
            
            <input
            type="number"
            defaultValue={product.price}
            required
            onChange={(e) => setProduct({...product, price: e.target.value})}
            className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
        </label>
        </div>
        <div className="flex justify-end mt-6">
        <Link
            href={'/products'}
            className="text-center w-24 mr-3 px-2 py-1 text-white bg-green-500 rounded-sm hover:bg-green-400 focus:outline-none active:bg-green-600"
        >
            หน้าสินค้า
        </Link>
        <button
            type="submit"
            className="w-24 px-2 py-1 text-white bg-blue-500 rounded-sm hover:bg-blue-400 focus:outline-none active:bg-blue-600"
        >
            แก้ไข
        </button>
        </div>
    </div>
    </form>
</div>
  );
}
