import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: {},
};

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {
      setReview: (state, action) => {
        const { productId, reviews } = action.payload;
        state.reviews[productId] = reviews;
      },
      addReview: (state, action) => {
        const { productId, review } = action.payload;
        if (!state.reviews[productId]) {
          state.reviews[productId] = [];
        }
        state.reviews[productId].push(review);
      },
      clearReview: (state) => {
        state.reviews = {};
      },
    },
  });
  

export const { setReview, addReview, clearReview } = reviewSlice.actions;
export default reviewSlice.reducer;
