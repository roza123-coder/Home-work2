
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3001/products';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch(API_URL);
  return await response.json();
});

export const addToCart = createAsyncThunk('products/addToCart', async (product) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return await response.json();
});

export const removeFromCart = createAsyncThunk('products/removeFromCart', async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  return id;
});

export const clearCart = createAsyncThunk('products/clearCart', async () => {
  await fetch(API_URL, { method: 'DELETE' });
  return [];
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    cart: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cart.push(action.payload);
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.cart = state.cart.filter((product) => product.id !== action.payload);
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.cart = [];
      });
  },
});

export default productsSlice.reducer;
