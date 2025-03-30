

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.items.push(product); 
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price, 0); 
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId); 
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price, 0); 
    },
    clearCart: (state) => {
      state.items = []; 
      state.totalPrice = 0; 
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
