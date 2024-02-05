import React from 'react'

export default function Student({student, rowNumber}) {
    
    const rowBacground = rowNumber % 2 === 0 ?'bg-gray-200':'bg-gray-100'
    return (
    
    <div className={`flex p-3 ${rowBacground}`}>
        <div className='w-3/12'>
            {student.id}
        </div>
        <div className='w-6/12'>
            {student.name}
        </div>
        <div className='w-3/12' >
            {student.studentClass}
        </div>
    </div>
    )
}
