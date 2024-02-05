'use client'
import React, {useContext } from 'react'
import Father from '@/components/Father';
import { MyContext } from '@/store/MyContext';

export default function GrandFather() {
    
    const [state, dispatch] = useContext(MyContext)
    return (
        <div className='p-8'>
            <div>Grand Father Component</div>
            
            <div className='text-3xl'>{state}</div>
            <hr className='py-1' />
            <Father />
        </div>
    )
}
