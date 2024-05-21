import { createSlice } from "@reduxjs/toolkit";
const initialState={
    productList:[],
    selectedProduct:{}
    
}

export const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        setProductList:(state, action)=>{
            state.productList=action.payload
        },
        setSelectedProdduct:(state,action)=>{
            state.selectedProduct=action.payload
        }
    }
})
const {actions,reducer}=productSlice
export const {setProductList, setSelectedProdduct}=actions
export default reducer