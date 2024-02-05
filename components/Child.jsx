import { MyContext } from "@/store/MyContext";
import { useContext } from "react";

export default function Child() {
    
    const [state, dispatch] = useContext(MyContext)
    
    function clickHandler() {
        
        dispatch({type: 'SET_RANDOM'});
    }
    return (
    <div>
        <div className='flex'>
            <div>Child Component</div>
                <button 
                onClick={clickHandler}
                className='bg-blue-500 text-white py-1 px-2 mx-2'
                >
                    Random
                </button>
            </div>
        <div className='text-3xl'>{state}</div>
    </div>
    )
}
