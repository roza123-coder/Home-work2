import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Футболка", price: 1000 },
  { id: 2, name: "Джинсы", price: 2000 },
  { id: 3, name: "Кроссовки", price: 5000 },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
