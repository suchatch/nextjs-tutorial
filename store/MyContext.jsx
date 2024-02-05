import React, {createContext, useReducer} from 'react'

export const MyContext = createContext([])

export default function MyProvider({children}) {
    const [state, dispatch] = useReducer(reducer, 0)
    function reducer(state, action) {
        switch (action.type) {
            case 'SET_RANDOM':
                const randomNumber = Math.round(Math.random() * 9) + 1;
                return randomNumber
            default:
                return state
        }
    }
    return (
        <MyContext.Provider value={[state, dispatch]}>
            {children}
        </MyContext.Provider>
    )
}
