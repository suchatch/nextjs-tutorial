import React, {createContext} from 'react'

export const StudentContext = createContext([])

export default function StudentProvider({children}) {
    
    const data = [
        {id: '1001', name: 'Neymar', studentClass: '5/1'},
        {id: '1002', name: 'Messi', studentClass: '5/1'},
        {id: '1003', name: 'Ronaldo', studentClass: '5/1'},
        {id: '1004', name: 'Kaka', studentClass: '6/1'},
        {id: '1005', name: 'Ronaldinyo', studentClass: '6/1'},
    ]
    return (
        
        <StudentContext.Provider value={data}>
            {children}
        </StudentContext.Provider>
    )
}
