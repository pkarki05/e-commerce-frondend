import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
    cartTotalQuantity:0,
    cartTotalAmount:0,
}


const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state, action){
           const itemIndex= state.cartItems.findIndex(item=>item.slug===action.payload.slug)
           if(itemIndex>=0){
            state.cartItems[itemIndex].cartQuantity+=1;
           }else{
            const tempProduct={...action.payload,cartQuantity:1}
            
            state.cartItems.push(tempProduct) 

           }



           
        }, 
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.slug !== action.payload);
        },
        decreseCartQuantity(state,action){
            const itemIndex=state.cartItems.findIndex(item=>item.slug===action.payload.slug)
            if(state.cartItems[itemIndex].cartQuantity>1){
                state.cartItems[itemIndex].cartQuantity-=1
            }else if(state.cartItems[itemIndex].cartQuantity===1) {
                state.cartItems = state.cartItems.filter(item => item.slug !== action.payload.slug);


            }
        }
        

    }
})
export const {addToCart, removeFromCart,decreseCartQuantity}=cartSlice.actions;
export default cartSlice.reducer