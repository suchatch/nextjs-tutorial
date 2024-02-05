export default function reducer(state, action) {
    switch (action.type) {
        
        case 'DELETE':
            const productId = action.payload;
            const index = state.findIndex(item => item.id === productId);
            if (index !== -1) {
                let newState = [...state];
                newState.splice(index, 1);
                return newState;
            }
            return state;
        
        case 'ADD':
            return [
                ...state, 
                {
                    id: action.payload.id,
                    productName: action.payload.productName, 
                    price: action.payload.price,
                }
            ];
        
        case 'EDIT':
            const editId = action.payload.id;
            const editIndex = state.findIndex(item => item.id === editId);
            if (editIndex !== -1) {
                let newState = [...state];
                newState[editIndex] = {
                    id: action.payload.id,
                    productName: action.payload.productName, 
                    price: action.payload.price, 
                }
                return newState;
            }
            return state;
        default:
            return state
    }
}
