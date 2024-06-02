// src/redux/checkoutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shippingAddress: [],
  contactInfo: [],
  
  currentStep: 'shipping', // can be 'shipping', 'payment', or 'confirmation'
  isFormValide:false,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    updateContactInfo: (state, action) => {
      state.contactInfo = action.payload;
    },
    updatePaymentInfo: (state, action) => {
      state.paymentInfo = action.payload;
    },
    setStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setIsFormValid: (state, action)=>{
        state.isFormValide=action.payload;
    }
  },
});

export const {
  updateShippingAddress,
  updateContactInfo,
  updatePaymentInfo,
  setStep,
  setIsFormValid
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
