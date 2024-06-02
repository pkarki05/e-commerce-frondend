import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from './redux/Product/productSlice'
import categoryReducer from './redux/Category/CategorySlice'
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import cartReducer from "./redux/Cart/CartSlice";
import checkoutReducer from "./redux/checkout/CheckOutSlice";
    const reducers=combineReducers({
        product:productReducer,
        category:categoryReducer,
        cart:cartReducer,
        checkout:checkoutReducer,

    }) 
    const persistConfig={
        key:'root',
        storage,
    }
    const persistedReducer=persistReducer(persistConfig,reducers)
    export const store=configureStore({
        reducer:persistedReducer

    })
       

    
