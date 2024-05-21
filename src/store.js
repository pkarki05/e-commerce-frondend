import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from './redux/Product/productSlice'
import categoryReducer from './redux/Category/CategorySlice'
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import cartReducer from "./redux/Cart/CartSlice";
    const reducers=combineReducers({
        product:productReducer,
        category:categoryReducer,
        cart:cartReducer

    }) 
    const persistConfig={
        key:'root',
        storage,
    }
    const persistedReducer=persistReducer(persistConfig,reducers)
    export const store=configureStore({
        reducer:persistedReducer

    })
       

    
