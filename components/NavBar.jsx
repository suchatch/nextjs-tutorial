'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { FaHome } from 'react-icons/fa'

export default function NavBar() {
  const pathName = usePathname();
  const styles = {
      actived: "text-blue-500 underline px-4 py-2",
      nonSelected: "text-grey-500 px-4 py-2 hover:text-pink-500 hover:italic",
  }
  return (
    <div className='fixed top-0 w-full z-50 flex flex-row justify-start sm:justify-center bg-blue-100 p-2 shadow-gray-200 shadow-sm'>
        <Link 
          href={'/'}
          className={`flex items-center justify-center sm:hidden  ${pathName==='/'?styles.actived:styles.nonSelected}`}
        >
          <FaHome />
        </Link>
        <Link
          href="/"
          className={`hidden sm:block ${pathName==='/'?styles.actived:styles.nonSelected}`}
        >Home</Link>
        <Link 
          href={'/products'}
          className={pathName==='/products'?styles.actived:styles.nonSelected} 
        >All Products</Link>
        <Link 
          href={'/products/add'}
          className={pathName==='/products/add'?styles.actived:styles.nonSelected}
        >Add Product</Link>
    </div>
  )
}
