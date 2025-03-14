import React from 'react';
import ToDoInput from './components/todo/ToDoInput';
import ToDoList from './components/todo/ToDoList';
import Filter from './components/todo/Filter';
import Products from './components/cart/Products';
import Cart from './components/cart/Cart';

const App = () => {
  return (
    <div>
      <h1>ToDo List</h1>
      <ToDoInput />
      <Filter />
      <ToDoList />
      <Products />
      <Cart />
    </div>
  );
};

export default App;
