import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001/todos';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (text) => {
  const newTodo = { text, completed: false };
  const response = await axios.post(API_URL, newTodo);
  return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [], filter: 'all', status: 'idle' },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo.id !== action.payload);
      });
  },
});

export const { setFilter } = todoSlice.actions;
export default todoSlice.reducer;


