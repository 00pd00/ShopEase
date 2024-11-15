import { createSlice } from "@reduxjs/toolkit";

// creating the slice for the redux store
const cartSlice = createSlice({
    // tow mandatory config
    name:"Cart",
    initialState:{
        items:[]
    },
    //logic fxn for the reducers and action to append the store
    reducers:{
        // addItem is actions and the callback fxn is the reducer fxn
        // get access to the initial state and action, will modify the state depending on the action 
        addItem:(state, action) => {
            // updating the initial state , adding an item to the cart
            state.items.push(action.payload);
        },
        // remove the last item from the cart
        removeItem:(state, action) => {
            state.items.pop(action.payload);
        },
        //clearing the state(cart)
        clearCart:(state, action) => {
            state.items.length = 0;
        }
    }
})
// two things will be exported from the slice.js - action and reducers

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;