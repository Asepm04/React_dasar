import {configureStore,createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice(
    {
        name:'product',
        initialState:[],
        reducers:{
            AddToProduct(state,action)
            {
                state.push(action.payload)
            }
        }
    }
);

const store = configureStore(
    {
        reducer :
        {
            product : productSlice.reducer
        }
    }
);

console.log("store : ",store.getState())

store.subscribe(()=>
{
    console.log("change store : ",store.getState())
})

store.dispatch(productSlice.actions.AddToProduct({id:3,qty:20}))
store.dispatch(productSlice.actions.AddToProduct({id:4,qty:20}))
store.dispatch(productSlice.actions.AddToProduct({id:4,qty:20}))
