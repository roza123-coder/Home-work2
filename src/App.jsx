import React from 'react';
import ToDoList from './components/todo/ToDoList';
import Cart from './components/cart/Cart';
import Products from './components/cart/Products';

const App = () => {
  return (
    <div>
    
      <ToDoList />
      <Cart />
      <Products/>
    </div>
  );
};

export default App;
