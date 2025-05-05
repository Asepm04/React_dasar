import {configureStore,createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice(
    {
        name:'cart',
        initialState:[],
        reducers: {
            AddToCart(state,action)
            {
                state.push(action.payload)
            }
        }
    }
);

const store = configureStore(
    {
        reducer:{
            cart : cartSlice.reducer,
        }
    }
);
console.log(" store ",store.getState());

store.subscribe(()=>
{
    console.log("change store :" ,store.getState())
});

const action1 = store.dispatch(cartSlice.actions.AddToCart({id:1,qty:2}))
const action2 = store.dispatch(cartSlice.actions.AddToCart({id:9,qty:2}))
