import { createSlice } from "@reduxjs/toolkit";

const initialState={
    orderList:[],
}
const orderSlice=createSlice({
    name:'order',
    initialState,
    reducers:{
        setOrderList:(state,action)=>{
            state.categoryList=action.payload;
        },
        addOrder:(state, action)=>{
            state.orderList.push(action.payload)
        }
      
    }
})
const {actions,reducer}=orderSlice;
export const {setOrderList,addOrder}=actions;
export default reducer;