import React from 'react'
import Student from './Student'

export default function AllStudents({students}) {
    return (
    <div className='flex flex-col w-9/12 mx-auto min-h-screen my-3'>
        {
        students.map((student, index) => {
            return <Student key={index} student={student} rowNumber={index} />
        })
        }
    </div>
    )
}
