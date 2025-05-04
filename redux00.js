//reduce

import { legacy_createStore } from "redux";

const cartReducer = (
    state =
    {
        cart :[{id:1,qty:2}]

    } ,action) =>
{
    switch(action.type)
    {
        case "ADD_TO_CART" :
            return {
                ...state,
                cart:[...state.cart,action.payload]
            }
            default :
            return state
    }
}

//store

const store = legacy_createStore(cartReducer);
console.log("store cartReducer :", store.getState())

//subscribe

store.subscribe(()=>
{
    console.log("store :",store.getState());
});

//dispatch

const action = {type:"ADD_TO_CART",payload:{id:4,qty:4}};
store.dispatch(action);
const action1 = {type:"ADD_TO_CART",payload:{id:9,qty:4}};
store.dispatch(action1);