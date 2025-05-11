import {createSlice} from '@reduxjs/toolkit'

const CartSlice = createSlice(
{
    name :"cart",
    initialState : { data: JSON.parse(localStorage.getItem("cart")) || []},
    reducers :
    {
        addToCart: (state,action)=>
        {
            const existing = state.data.find(item => item.id === action.payload.id);
            if(existing)
            {
                existing.qty++
            }
            else
            {
                state.data.push(action.payload)

            }
        }
    }
}); 

export  const {addToCart} = CartSlice.actions;
export default CartSlice.reducer;