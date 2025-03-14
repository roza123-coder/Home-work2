// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: [],
//   reducers: {
//     addToCart: (state, action) => {
//       state.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       return state.filter((item) => item.id !== action.payload);
//     },
//     clearCart: () => [],
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Футболка', price: 1000 },
    { id: 2, name: 'Джинсы', price: 2500 },
    { id: 3, name: 'Кроссовки', price: 5000 },
  ],
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        state.cart.push(product);
        state.totalPrice += product.price;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.cart.findIndex((p) => p.id === action.payload);
      if (index !== -1) {
        state.totalPrice -= state.cart[index].price;
        state.cart.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
