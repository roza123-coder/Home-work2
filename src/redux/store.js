

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import todoReducer from './todoSlice'; 
      
const store = configureStore({
  reducer: {
    cart: cartReducer,
    todos: todoReducer, 
  },
});

export default store;
