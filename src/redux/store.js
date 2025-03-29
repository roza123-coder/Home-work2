

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import todoReducer from './todoSlice'; 
import productsReducer from './productSlice'
      
const store = configureStore({
  reducer: {
    cart: cartReducer,
    todos: todoReducer,
    products: productsReducer, 

  },
});

export default store;
