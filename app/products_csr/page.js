'use client'
import { useState, useEffect } from "react"

async function getProducts() {
    const response = await fetch('http://localhost:3000/api/products')
    if (!response.ok) {
      throw new Error('cannot fetch products')
    }
    return response.json()
}
export default function page() {
  const [productState, setProductState] = useState([])

  const initProduct = async () => {
    try {
      const result = await getProducts();
      setProductState(result)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    initProduct()
  },[])

  return (
    <div>
      Products page
      {
        productState.map((item, index) => (
          <div key={index}>
            {item.id} {item.productName}
          </div>
        ))
      }
    </div>
  )
}
