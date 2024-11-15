import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

// creating the Redux store
const appStore = configureStore({
    // this is the app reducer and contains small reducers
    // each slices will have their own reducer
    reducer:{
        cart:cartReducer
    }
})

export default appStore;