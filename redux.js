//reducer
import { legacy_createStore } from "redux";


const cartReducer = (
    state =
    {
        cart :[]
    }

    ,action)=>
{
    switch(action.type)
    {
        case "ADD_TO_CART" :
            return {
                ...state,
                cart:[...state.cart,action.payload]
            }
    }
}

//store

const store = legacy_createStore(cartReducer);

//subcribe
store.subscribe(()=>
{
    console.log("store:",store.getState())
});

//dispatch

const action1 = {type:"ADD_TO_CART",payload:{id:1,qty:4}}
store.dispatch(action1)

const action2 = {type:"ADD_TO_CART",payload:{id:4,qty:4}}
store.dispatch(action2)