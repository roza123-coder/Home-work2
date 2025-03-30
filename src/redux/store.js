

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; 
import productsReducer from './productSlice'
import cartReducer from './cartSlice'

      
const store = configureStore({
  reducer: {
    todos: todoReducer,
    products: productsReducer, 
    cart: cartReducer,

  },
});

export default store;
