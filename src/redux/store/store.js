import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../slices/CartSlice'

 const store = configureStore(
    {
        reducer :
        {
            cart : cartReducer
        }
    }

 );
 console.log("oncreated store :", store.getState());

 store.subscribe(()=>
{
    console.log("change store :", store.getState())
})


export default store;
